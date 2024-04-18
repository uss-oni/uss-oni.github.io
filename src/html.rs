use std::{any::Any, cell::Cell, ops::Deref};

use wasm_bindgen::{closure::Closure, convert::FromWasmAbi, JsCast, UnwrapThrowExt};
use web_sys::{
  HtmlDivElement, HtmlElement, HtmlImageElement, HtmlOptionElement, HtmlParagraphElement,
  HtmlSelectElement,
};

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
  element: T,
  state: State,
}

type NodeStateless<T> = Node<T, ()>;

impl<T, State> Node<T, State>
where
  T: wasm_bindgen::JsCast + Clone + AsRef<web_sys::Node>+ 'static,
{
  pub fn class(self, class: &'static str) -> Self {
    self
      .element
      .unchecked_ref::<HtmlElement>()
      .class_list()
      .add_1(class)
      .unwrap_throw();
    self
  }

  pub fn child<U, R, S>(self, node: U) -> Self
  where
    U: Render<Node = Node<R, S>>,
    R: wasm_bindgen::JsCast + Clone + AsRef<web_sys::Node>,
  {
    let node = node.render();
    let _ = self
      .element
      .unchecked_ref::<HtmlElement>()
      .append_child(&node.element.as_ref());
    self
  }

  pub fn text(self) -> Self {
    let text_node = web_sys::Text::new().unwrap();
    let _ = self
      .element
      .unchecked_ref::<HtmlElement>()
      .append_child(&text_node);
    self
  }

  pub fn get_ref(self, node_ref: &mut Ref<T>) -> Self {
    node_ref.element = Some(Box::new(
      self
        .element
        .clone()
        .dyn_into::<T>()
        .unwrap_or_else(|_| panic!("Pouet")),
    ));
    self
  }

  pub fn hyphens(self) -> Self {
    self
  }

  // pub fn children<U: Render<Node = Node<V>>, V>(mut self, list: &[U]) -> Self
  pub fn children<C, U: Render<Node = Node<V, S>>, V, S>(
    self,
    list: C,
  ) -> Self
  where
    V: wasm_bindgen::JsCast + AsRef<web_sys::Node>,
    C: IntoIterator<Item = U>
  {
    for item in list.into_iter() {
      let node = item.render();
      let _ = self
        .element
        .unchecked_ref::<HtmlElement>()
        .append_child(&node.element.as_ref());
    }
    self
  }

  pub fn on_event<F: Fn(U, &NodeStateless<T>) -> () + 'static, U: Event>(
    self,
    f: F,
  ) -> Node<T, (Closure<dyn Fn(U::Inner)>, State)>
  where
    <U as Event>::Inner: FromWasmAbi + 'static, // I don't know why I need it, but it makes the compiler happy :)
  {
    let clone = NodeStateless::<T> {
      element: self.element.clone(),
      state: (),
    };
    let closure: Closure<dyn Fn(U::Inner) + 'static> =
      Closure::new(move |u| f(U::from_inner(u), &clone));
    U::set(
      &self.element.unchecked_ref(),
      Some(closure.as_ref().unchecked_ref()),
    );
    self.add_state(closure)
  }

  pub fn on_msg<F: Fn(U, &Self), U>(self, f: F) -> Self {
    self
  }

  fn add_state<V>(self, v: V) -> Node<T, (V, State)> {
    Node::<T, (V, State)> {
      element: self.element,
      state: (v, self.state),
    }
  }

  pub fn new(tag: &'static str) -> NodeStateless<T> {
    NodeStateless::<T> {
      element: document().create_element(&tag).unwrap().dyn_into().unwrap(),
      state: (),
    }
  }
}

impl<T, State: 'static> Node<T, State> {
  pub fn store_state(self, save: &HtmlState) -> NodeStateless<T> {
    let saved:std::option::Option<Box<dyn Any>> = Some(Box::new(self.state));
    save.replace(saved);
    //save.set(self.state);
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

pub trait HtmlImageElementExtend {}

impl HtmlImageElementExtend for HtmlImageElement {}

impl<T, State> Node<T, State>
where
  T: HtmlImageElementExtend + wasm_bindgen::JsCast + Clone + AsRef<web_sys::Node>,
{
  pub fn set_src(self, image: &'static str) -> Self {
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

#[derive(Clone)]
pub struct Ref<T> {
  element: std::option::Option<Box<T>>,
}

impl<T> Ref<T> {
  pub fn new() -> Self {
    Self {
      element: None.into(),
    }
  }

  pub fn set(&mut self, other: &Ref<T>)
  where
    T: Clone,
  {
    *self.element.as_deref_mut().unwrap() = (**other.element.as_ref().unwrap()).clone()
  }

  pub fn initialized(&self) -> bool {
    self.element.is_some()
  }
}

impl<T> Deref for Ref<T> {
  type Target = T;

  fn deref(&self) -> &Self::Target {
    &*self.element.as_ref().unwrap()
  }
}

pub fn wait<F>(time: i32, f: F) {}
