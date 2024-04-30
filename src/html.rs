use std::mem;
use std::any::Any;
use std::cell::Cell;
use std::ops::Deref;

use wasm_bindgen::closure::Closure;
use wasm_bindgen::convert::FromWasmAbi;
use wasm_bindgen::JsCast;
use web_sys::{HtmlDivElement, HtmlElement, HtmlHeadingElement, HtmlImageElement, HtmlOptionElement, HtmlParagraphElement, HtmlSelectElement, HtmlTableCellElement, HtmlTableElement, HtmlTableRowElement, HtmlTableSectionElement, SvgDefsElement, SvgElement, SvgLineElement, SvgMarkerElement, SvgPathElement
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
  fn render(&self) -> Node;
}

impl<U: HtmlRender> Html for U {
  fn into_html(self) -> Node {
    U::render(&self).into_html()
  }

  fn class(self, name: &'static str) -> Node {
    U::render(&self).class(name)
  }
}

pub type Node = HtmlNode<web_sys::Node>;

pub trait Html {
  fn into_html(self) -> Node;
  fn class(self, name: &'static str) -> Node;
}

impl<T> Html for HtmlNode<T>
where
  T: wasm_bindgen::JsCast + Clone + std::convert::AsRef<web_sys::Node> + 'static,
  HtmlNode<web_sys::Node>: From<HtmlNode<T>>,
{
  fn into_html(self) -> Node {
    self.into()
  }

  fn class(self, name: &'static str) -> Node {
    let save = Default::default();
    let ret = HtmlNode::<T>::class(self, name).store_state(&save);
    ret.into()
  }
}

impl From<&dyn HtmlRender> for HtmlNode<web_sys::Node> {
  fn from(value: &dyn HtmlRender) -> Self {
    value.render()
  }
}

impl From<HtmlNode<web_sys::HtmlDivElement>> for HtmlNode<web_sys::Node> {
  fn from(value: HtmlNode<web_sys::HtmlDivElement>) -> Self {
    Self {
      element: value.element.into(),
      state: value.state,
    }
  }
}

impl From<HtmlNode<web_sys::Text>> for HtmlNode<web_sys::Node> {
  fn from(value: HtmlNode<web_sys::Text>) -> Self {
    Self {
      element: value.element.into(),
      state: value.state,
    }
  }
}

impl From<HtmlNode<web_sys::HtmlSelectElement>> for HtmlNode<web_sys::Node> {
  fn from(value: HtmlNode<web_sys::HtmlSelectElement>) -> Self {
    Self {
      element: value.element.into(),
      state: value.state,
    }
  }
}

impl From<HtmlNode<web_sys::HtmlImageElement>> for HtmlNode<web_sys::Node> {
  fn from(value: HtmlNode<web_sys::HtmlImageElement>) -> Self {
    Self {
      element: value.element.into(),
      state: value.state,
    }
  }
}

impl From<HtmlNode<web_sys::HtmlOptionElement>> for HtmlNode<web_sys::Node> {
  fn from(value: HtmlNode<web_sys::HtmlOptionElement>) -> Self {
    Self {
      element: value.element.into(),
      state: value.state,
    }
  }
}

impl From<HtmlNode<web_sys::SvgElement>> for HtmlNode<web_sys::Node> {
  fn from(value: HtmlNode<web_sys::SvgElement>) -> Self {
    Self {
      element: value.element.into(),
      state: value.state,
    }
  }
}

impl From<HtmlNode<web_sys::SvgDefsElement>> for HtmlNode<web_sys::Node> {
  fn from(value: HtmlNode<web_sys::SvgDefsElement>) -> Self {
    Self {
      element: value.element.into(),
      state: value.state,
    }
  }
}

impl From<HtmlNode<web_sys::SvgMarkerElement>> for HtmlNode<web_sys::Node> {
  fn from(value: HtmlNode<web_sys::SvgMarkerElement>) -> Self {
    Self {
      element: value.element.into(),
      state: value.state,
    }
  }
}

impl From<HtmlNode<web_sys::SvgPathElement>> for HtmlNode<web_sys::Node> {
  fn from(value: HtmlNode<web_sys::SvgPathElement>) -> Self {
    Self {
      element: value.element.into(),
      state: value.state,
    }
  }
}

impl From<HtmlNode<web_sys::HtmlTableElement>> for HtmlNode<web_sys::Node> {
  fn from(value: HtmlNode<web_sys::HtmlTableElement>) -> Self {
    Self {
      element: value.element.into(),
      state: value.state,
    }
  }
}

impl From<HtmlNode<web_sys::HtmlTableSectionElement>> for HtmlNode<web_sys::Node> {
  fn from(value: HtmlNode<web_sys::HtmlTableSectionElement>) -> Self {
    Self {
      element: value.element.into(),
      state: value.state,
    }
  }
}

impl From<HtmlNode<web_sys::HtmlTableRowElement>> for HtmlNode<web_sys::Node> {
  fn from(value: HtmlNode<web_sys::HtmlTableRowElement>) -> Self {
    Self {
      element: value.element.into(),
      state: value.state,
    }
  }
}

impl From<HtmlNode<web_sys::HtmlTableCellElement>> for HtmlNode<web_sys::Node> {
  fn from(value: HtmlNode<web_sys::HtmlTableCellElement>) -> Self {
    Self {
      element: value.element.into(),
      state: value.state,
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

pub struct HtmlNode<T> {
  pub element: T,
  state: Vec<Box<dyn Any>>,
}

type NodeStateless<T> = HtmlNode<T>;

impl<T> Clone for NodeStateless<T>
where
  T: Clone,
{
  fn clone(&self) -> Self {
    Self {
      element: self.element.clone(),
      state: vec![],
    }
  }
}

impl<T> HtmlNode<T>
where
  T: wasm_bindgen::JsCast + Clone + AsRef<web_sys::Node> + 'static,
{
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

  pub fn child(mut self, node: impl Html) -> Self {
    let node = node.into_html();
    let _ = self
      .element
      .unchecked_ref::<HtmlElement>()
      .append_child(&node.element);
    self.state.extend(node.state);
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

  pub fn hyphens(self) -> Self {
    self
  }

  pub fn children<'a, C, U: Html + 'a>(mut self, list: C) -> Self
  where
    C: IntoIterator<Item = U>,
  {
    let mut states = vec![];
    for item in list.into_iter() {
      let node = item.into_html();
      let _ = self
        .element
        .unchecked_ref::<HtmlElement>()
        .append_child(&node.element);
      states.extend(node.state);
    }
    self.state.extend(states);
    self
  }

  pub fn on_event<F: Fn(U, NodeStateless<T>) + 'static, U: Event>(self, f: F) -> Self
  where
    U: 'static,
    <U as Event>::Inner: FromWasmAbi + 'static, // I don't know why I need it, but it makes the compiler happy :)
  {
    let clone = self.clone();
    let the_happy_box = Box::new(move |u| f(U::from_inner(u), clone.clone()));
    let closure: Closure<dyn Fn(U::Inner) + 'static> = Closure::wrap(the_happy_box);
    U::set(
      self.element.unchecked_ref(),
      Some(closure.as_ref().unchecked_ref()),
    );
    self.add_state(closure)
  }

  pub fn on_msg<F: Fn(&U, NodeStateless<T>) + 'static, U: 'static>(self, f: F) -> Self {
    let receiver = msg::Receiver::register(self.clone(), f);
    self.add_state(receiver)
  }

  fn add_state<V: 'static>(mut self, v: V) -> Self {
    self.state.push(Box::new(v));
    self
  }

  pub fn new(tag: &'static str) -> NodeStateless<T> {
    NodeStateless::<T> {
      element: document().create_element(tag).unwrap().dyn_into().unwrap(),
      state: vec![],
    }
  }

  pub fn new_svg(tag: &'static str) -> NodeStateless<T> {
    NodeStateless::<T> {
      element: document().create_element_ns_with_str(Some("http://www.w3.org/2000/svg"), tag, "").unwrap().dyn_into().unwrap(),
      state: vec![],
    }
  }
}

impl<T> HtmlNode<T>
where T:Clone {
  pub fn store_state(&mut self, save: &HtmlState) -> HtmlNode<T> {
    let mut vec = vec![];
    mem::swap(&mut vec, &mut self.state);
    let saved: std::option::Option<Box<dyn Any>> = Some(Box::new(vec));
    save.replace(saved);
    Self { element: self.element.clone(), state: vec![] }
  }
}

impl NodeStateless<web_sys::Text> {
  pub fn new_text() -> NodeStateless<web_sys::Text> {
    NodeStateless::<web_sys::Text> {
      element: web_sys::Text::new().unwrap(),
      state: vec![],
    }
  }
}

pub type Element = HtmlNode<HtmlElement>;
pub type Body = Element;

impl From<HtmlElement> for HtmlNode<HtmlElement> {
  fn from(value: HtmlElement) -> Self {
    Self {
      element: value,
      state: vec![],
    }
  }
}

impl<T> Deref for HtmlNode<T>
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

impl<T> HtmlNode<T>
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

pub type TBody = NodeStateless<HtmlTableSectionElement>;
pub fn tbody() -> TBody {
  NodeStateless::<HtmlTableSectionElement>::new("tbody")
}

pub type Td = NodeStateless<HtmlTableCellElement>;
pub fn td() -> Td {
  NodeStateless::<HtmlTableCellElement>::new("td")
}

pub type Tr = NodeStateless<HtmlTableRowElement>;
pub fn tr() -> Tr {
  NodeStateless::<HtmlTableRowElement>::new("tr")
}

pub type Table = NodeStateless<HtmlTableElement>;
pub fn table() -> Table {
  NodeStateless::<HtmlTableElement>::new("table")
}

pub type SVG = NodeStateless<SvgElement>;
pub fn svg() -> SVG {
  NodeStateless::<SvgElement>::new_svg("svg")
}

pub type Line = NodeStateless<SvgLineElement>;
pub fn line() -> Line {
  NodeStateless::<SvgLineElement>::new_svg("line")
}

pub type Defs = NodeStateless<SvgDefsElement>;
pub fn defs() -> Defs {
  NodeStateless::<SvgDefsElement>::new_svg("defs")
}

pub type Marker = NodeStateless<SvgMarkerElement>;
pub fn marker() -> Marker {
  NodeStateless::<SvgMarkerElement>::new_svg("marker")
}

pub type Path = NodeStateless<SvgPathElement>;
pub fn path() -> Path {
  NodeStateless::<SvgPathElement>::new_svg("path")
}

pub type Text = NodeStateless<web_sys::Text>;
pub fn text() -> Text {
  HtmlNode::<web_sys::Text>::new_text()
}

pub trait NodeOption {}

impl NodeOption for HtmlOptionElement {}

impl<T> HtmlNode<T>
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
