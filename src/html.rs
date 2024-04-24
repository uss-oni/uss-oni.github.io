use std::{any::Any, cell::Cell, ops::Deref};

use wasm_bindgen::{closure::Closure, convert::FromWasmAbi, JsCast, UnwrapThrowExt};
use web_sys::{
  HtmlDivElement, HtmlElement, HtmlImageElement, HtmlOptionElement, HtmlParagraphElement,
  HtmlSelectElement,
};

use crate::msg;

thread_local! {
  static WINDOW:web_sys::Window = web_sys::window().unwrap();
  static DOCUMENT:web_sys::Document = web_sys::window().unwrap().document().unwrap();
  static BODY:web_sys::HtmlElement = web_sys::window().unwrap().document().unwrap().body().unwrap();
}

pub fn window() -> web_sys::Window {
  WINDOW.with(|value| value.clone())
}

pub fn document() -> web_sys::Document {
  DOCUMENT.with(|value| value.clone())
}

pub fn body() -> web_sys::HtmlElement {
  BODY.with(|value| value.clone())
}

pub trait Render {
  type Node;

  fn render(self) -> Self::Node;
}

impl<T, State> Render for Node<T, State> {
  type Node = Node<T, State>;

  fn render(self) -> Self::Node {
    self
  }
}

type Callback<'a> = std::option::Option<&'a web_sys::js_sys::Function>;
pub trait Event {
  type Inner;

  fn set(element: &web_sys::HtmlElement, closure: Callback);
  fn from_inner(inner: Self::Inner) -> Self;
}

pub struct MouseClick {
  pub inner: web_sys::MouseEvent,
}

pub struct MouseEnter {
  pub inner: web_sys::MouseEvent,
}

pub struct MouseLeave {
  pub inner: web_sys::MouseEvent,
}

pub struct Input {
  pub inner: web_sys::InputEvent,
}

impl Event for Input {
  type Inner = web_sys::InputEvent;

  fn set(element: &web_sys::HtmlElement, closure: Callback) {
    element.set_oninput(closure);
  }

  fn from_inner(inner: Self::Inner) -> Self {
    Self { inner }
  }
}

impl Event for MouseEnter {
  type Inner = web_sys::MouseEvent;

  fn set(element: &web_sys::HtmlElement, closure: Callback) {
    element.set_onmouseenter(closure);
  }

  fn from_inner(inner: Self::Inner) -> Self {
    Self { inner }
  }
}

impl Event for MouseLeave {
  type Inner = web_sys::MouseEvent;

  fn set(element: &web_sys::HtmlElement, closure: Callback) {
    element.set_onmouseleave(closure);
  }

  fn from_inner(inner: Self::Inner) -> Self {
    Self { inner }
  }
}

impl Event for MouseClick {
  type Inner = web_sys::MouseEvent;

  fn set(element: &web_sys::HtmlElement, closure: Callback) {
    element.set_onclick(closure);
  }

  fn from_inner(inner: Self::Inner) -> Self {
    Self { inner }
  }
}

pub type HtmlState = Cell<std::option::Option<Box<dyn Any>>>;

pub trait On {}

pub struct Node<T, State> {
  pub element: T,
  state: State,
}

type NodeStateless<T> = Node<T, ()>;

impl<T> Clone for NodeStateless<T> 
where T: Clone {
    fn clone(&self) -> Self {
        Self { element: self.element.clone(), state: () }
    }
}

impl<T, State> Node<T, State>
where
  T: wasm_bindgen::JsCast + Clone + AsRef<web_sys::Node> + 'static,
{
  pub fn clone(&self) -> NodeStateless<T> {
    NodeStateless::<T> {
      element: self.element.clone(),
      state: (),
    }
  }

  pub fn class(self, class: &'static str) -> Self {
    self
      .element
      .unchecked_ref::<HtmlElement>()
      .class_list()
      .add_1(class)
      .unwrap_throw();
    self
  }

  pub fn id(self, id: &'static str) -> Self {
    self
      .element
      .unchecked_ref::<HtmlElement>()
      .set_id(id);
    self
  }
  pub fn child<U, R, S>(self, node: U) -> Node<T, (S, State)>
  where
    U: Render<Node = Node<R, S>>,
    R: wasm_bindgen::JsCast + Clone + AsRef<web_sys::Node>,
  {
    let node = node.render();
    let _ = self
      .element
      .unchecked_ref::<HtmlElement>()
      .append_child(node.element.as_ref());
    self.add_state(node.state)
  }

  pub fn text(self) -> Self {
    let text_node = web_sys::Text::new().unwrap();
    let _ = self
      .element
      .unchecked_ref::<HtmlElement>()
      .append_child(&text_node);
    self
  }

  pub fn hyphens(self) -> Self {
    self
  }

  pub fn children<C, U: Render<Node = Node<V, S>>, V, S>(self, list: C) -> Self
  where
    V: wasm_bindgen::JsCast + AsRef<web_sys::Node>,
    C: IntoIterator<Item = U>,
  {
    for item in list.into_iter() {
      let node = item.render();
      let _ = self
        .element
        .unchecked_ref::<HtmlElement>()
        .append_child(node.element.as_ref());
    }
    self
  }

  pub fn on_event<F: Fn(U, NodeStateless<T>), U: Event>(
    self,
    f: F,
  ) -> Node<T, (Closure<dyn Fn(U::Inner)>, State)>
  where
    U: 'static,
    <U as Event>::Inner: FromWasmAbi + 'static, // I don't know why I need it, but it makes the compiler happy :)
  {
    let clone = self.clone();
    let the_happy_box = Box::new(move |u| {
      f(U::from_inner(u), clone.clone())
    });
    let the_dragons_box = unsafe {
      std::mem::transmute::<
        Box<dyn Fn(U::Inner)>,
        Box<dyn Fn(U::Inner) + 'static>,
      >(the_happy_box)
    };
    let closure: Closure<dyn Fn(U::Inner) + 'static> = Closure::wrap(the_dragons_box);
    U::set(
      self.element.unchecked_ref(),
      Some(closure.as_ref().unchecked_ref()),
    );
    self.add_state(closure)
  }

  pub fn on_msg<F: Fn(&U, NodeStateless<T>) + 'static, U: 'static>(self, f: F) -> Node<T, (msg::Key<U>, State)> {
    let receiver = msg::Receiver::new(self.clone(), f);
    self.add_state(receiver)
  }

  fn add_state<V>(self, v: V) -> Node<T, (V, State)> {
    Node::<T, (V, State)> {
      element: self.element,
      state: (v, self.state),
    }
  }

  pub fn new(tag: &'static str) -> NodeStateless<T> {
    NodeStateless::<T> {
      element: document().create_element(tag).unwrap().dyn_into().unwrap(),
      state: (),
    }
  }
}

impl<T, State: 'static> Node<T, State> {
  pub fn store_state(self, save: &HtmlState) -> NodeStateless<T> {
    let saved: std::option::Option<Box<dyn Any>> = Some(Box::new(self.state));
    save.replace(saved);
    NodeStateless::<T> {
      element: self.element,
      state: (),
    }
  }
}

impl NodeStateless<web_sys::Text> {
  pub fn new_text() -> NodeStateless<web_sys::Text> {
    NodeStateless::<web_sys::Text> {
      element: web_sys::Text::new().unwrap(),
      state: (),
    }
  }
}

pub type Element = Node<HtmlElement, ()>;
pub type Body = Element;

impl From<HtmlElement> for Node<HtmlElement, ()> {
  fn from(value: HtmlElement) -> Self {
    Self {
      element: value.clone(),
      state: (),
    }
  }
}

impl<T, State> Deref for Node<T, State>
where
  T: wasm_bindgen::JsCast + Clone,
{
  type Target = T;

  fn deref(&self) -> &Self::Target {
    self.element.unchecked_ref()
  }
}

pub trait NodeImage {}

impl NodeImage for HtmlImageElement {}

impl<T, State> Node<T, State>
where
  T: NodeImage + wasm_bindgen::JsCast + Clone + AsRef<web_sys::Node>,
{
  pub fn set_src(self, image: &str) -> Self {
    self
      .element
      .unchecked_ref::<HtmlImageElement>()
      .set_src(image);
    self
  }
}

pub type Div = NodeStateless<HtmlDivElement>;
pub fn div() -> Div {
  NodeStateless::<HtmlDivElement>::new("div")
}

pub type P = NodeStateless<HtmlParagraphElement>;
pub fn p() -> P {
  NodeStateless::<HtmlParagraphElement>::new("p")
}

pub type Img = NodeStateless<HtmlImageElement>;
pub fn img() -> Img {
  NodeStateless::<HtmlImageElement>::new("img")
}

pub type Select = NodeStateless<HtmlSelectElement>;
pub fn select() -> Select {
  NodeStateless::<HtmlSelectElement>::new("select")
}

pub type Option = NodeStateless<HtmlOptionElement>;
pub fn option() -> Option {
  NodeStateless::<HtmlOptionElement>::new("option")
}

pub type Text = NodeStateless<web_sys::Text>;
pub fn text() -> Text {
  Node::<web_sys::Text, ()>::new_text()
}

pub trait NodeOption {}

impl NodeOption for HtmlOptionElement {}

impl<T, State> Node<T, State>
where
  T: NodeOption + wasm_bindgen::JsCast + Clone + AsRef<web_sys::Node>,
{
  pub fn set_value(self, value: &'static str) -> Self {
    self
      .element
      .unchecked_ref::<HtmlOptionElement>()
      .set_value(value);
    self
  }
}

pub fn wait<F>(_time: i32, _f: F) {}
