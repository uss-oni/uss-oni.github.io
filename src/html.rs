use std::any::Any;
use std::cell::Cell;
use std::ops::Deref;

use wasm_bindgen::closure::Closure;
use wasm_bindgen::convert::FromWasmAbi;
use wasm_bindgen::JsCast;
use web_sys::{
  HtmlDivElement, HtmlElement, HtmlHeadingElement, HtmlImageElement, HtmlOptionElement, HtmlParagraphElement, HtmlSelectElement
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

pub trait HtmlRender {
  fn render(&self) -> impl Html;
}

impl<U: HtmlRender> Html for U {
  fn into_html(self) -> (Node<web_sys::Node, ()>, HtmlState) {
    U::render(&self).into_html()
  }

  fn class(self, name: &'static str) -> (Node<web_sys::Node, ()>, HtmlState) {
    U::render(&self).class(name)
  }
}

pub trait Html {
  fn into_html(self) -> (Node<web_sys::Node, ()>, HtmlState);
  fn class(self, name: &'static str) -> (Node<web_sys::Node, ()>, HtmlState);
}

impl Html for (Node<web_sys::Node, ()>, HtmlState)
{
  fn into_html(self) -> (Node<web_sys::Node, ()>, HtmlState) {
    self
  }

  fn class(self, name: &'static str) -> (Node<web_sys::Node, ()>, HtmlState) {
    (self.0.class(name), self.1)
  }
}

impl<T, State: 'static> Html for Node<T, State>
where
  T: wasm_bindgen::JsCast + Clone + std::convert::AsRef<web_sys::Node> + 'static,
  Node<web_sys::Node, ()>: From<Node<T, ()>>,
{
  fn into_html(self) -> (Node<web_sys::Node, ()>, HtmlState) {
    let save = Default::default();
    let ret = self.store_state(&save);
    (ret.into(), save)
  }

  fn class(self, name: &'static str) -> (Node<web_sys::Node, ()>, HtmlState) {
    let save = Default::default();
    let ret = Node::<T, State>::class(self, name).store_state(&save);
    (ret.into(), save)
  }
}

impl From<Node<web_sys::HtmlDivElement, ()>> for Node<web_sys::Node, ()> {
  fn from(value: Node<web_sys::HtmlDivElement, ()>) -> Self {
    Self {
      element: value.element.into(),
      state: (),
    }
  }
}

impl From<Node<web_sys::Text, ()>> for Node<web_sys::Node, ()> {
  fn from(value: Node<web_sys::Text, ()>) -> Self {
    Self {
      element: value.element.into(),
      state: (),
    }
  }
}

impl From<Node<web_sys::HtmlSelectElement, ()>> for Node<web_sys::Node, ()> {
  fn from(value: Node<web_sys::HtmlSelectElement, ()>) -> Self {
    Self {
      element: value.element.into(),
      state: (),
    }
  }
}

impl From<Node<web_sys::HtmlImageElement, ()>> for Node<web_sys::Node, ()> {
  fn from(value: Node<web_sys::HtmlImageElement, ()>) -> Self {
    Self {
      element: value.element.into(),
      state: (),
    }
  }
}

impl From<Node<web_sys::HtmlOptionElement, ()>> for Node<web_sys::Node, ()> {
  fn from(value: Node<web_sys::HtmlOptionElement, ()>) -> Self {
    Self {
      element: value.element.into(),
      state: (),
    }
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
where
  T: Clone,
{
  fn clone(&self) -> Self {
    Self {
      element: self.element.clone(),
      state: (),
    }
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
      .unwrap();
    self
  }

  pub fn id(self, id: &'static str) -> Self {
    self.element.unchecked_ref::<HtmlElement>().set_id(id);
    self
  }

  pub fn child(self, node: &dyn Html) -> Node<T, (HtmlState, State)> {
    let node = node.into_html();
    let _ = self
      .element
      .unchecked_ref::<HtmlElement>()
      .append_child(&node.0.element);
    self.add_state::<HtmlState>(node.1)
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

  pub fn children<'a, C, U: Html + 'a>(
    self,
    list: C,
  ) -> Node<T, (Vec<Cell<std::prelude::v1::Option<Box<dyn Any>>>>, State)>
  where
    C:  IntoIterator<Item = U>,
  {
    let mut states = vec![];
    for item in list.into_iter() {
      let node = item.into_html();
      let _ = self
        .element
        .unchecked_ref::<HtmlElement>()
        .append_child(&node.0.element);
      states.push(node.1);
    }
    self.add_state(states)
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
    let the_happy_box = Box::new(move |u| f(U::from_inner(u), clone.clone()));
    let the_dragons_box = unsafe {
      std::mem::transmute::<Box<dyn Fn(U::Inner)>, Box<dyn Fn(U::Inner) + 'static>>(the_happy_box)
    };
    let closure: Closure<dyn Fn(U::Inner) + 'static> = Closure::wrap(the_dragons_box);
    U::set(
      self.element.unchecked_ref(),
      Some(closure.as_ref().unchecked_ref()),
    );
    self.add_state(closure)
  }

  pub fn on_msg<F: Fn(&U, NodeStateless<T>) + 'static, U: 'static>(
    self,
    f: F,
  ) -> Node<T, (msg::Key<U>, State)> {
    let receiver = msg::Receiver::register(self.clone(), f);
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

pub type H1 = NodeStateless<HtmlHeadingElement>;
pub fn h1() -> H1 {
  NodeStateless::<HtmlHeadingElement>::new("h1")
}

pub type H2 = NodeStateless<HtmlHeadingElement>;
pub fn h2() -> H2 {
  NodeStateless::<HtmlHeadingElement>::new("h2")
}

pub type H3 = NodeStateless<HtmlHeadingElement>;
pub fn h3() -> H3 {
  NodeStateless::<HtmlHeadingElement>::new("h3")
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
