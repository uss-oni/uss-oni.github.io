use std::borrow::Cow;

use wasm_bindgen::closure::Closure;
use web_sys::{Document, HtmlElement, HtmlImageElement, HtmlOptionElement};

use crate::icon::Image;

use super::*;

pub struct Html<'a> {
  document: Document,
  writer: &'a dyn Fn(&NodeText) -> Cow<'a, str>,
  state: &'a State,
}

impl<'a> Html<'a> {
  pub fn div(&'a self, class: &'static str) -> Result<Node, JsValue> {
    let node = Node::new(self, "div")?;
    node.element.set_class_name(class);
    Ok(node)
  }

  pub fn select(&'a self, class: &'static str) -> Result<Node, JsValue> {
    let node = Node::new(self, "select")?;
    node.element.set_class_name(class);
    Ok(node)
  }

  pub fn option(&'a self, value: &'static str) -> Result<Node, JsValue> {
    let node = Node::new(self, "option")?;
    node.element.dyn_ref::<HtmlOptionElement>().ok_or(concat!(file!(), line!()))?.set_value(value);
    Ok(node)
  }

  pub fn div_id(&'a self, class: &'static str) -> Result<Node, JsValue> {
    let node = Node::new(self, "div")?;
    node.element.set_id(class);
    Ok(node)
  }

  pub fn img<T>(&'a self, img: T) -> Result<Node, JsValue>
  where
    T: Image,
  {
    let node = Node::new(self, "img")?;
    node.element.dyn_ref::<HtmlImageElement>().ok_or(concat!(file!(), line!()))?.set_src(&img.path());
    Ok(node)
  }

  pub fn p(&'a self) -> Result<Node, JsValue> {
    Node::new(self, "p")
  }

  pub fn wait<T>(time: i32, f: T) -> Result<(), JsValue>
  where
    T: FnOnce() -> Result<(), JsValue> + 'static,
  {
    if let Some(window) = web_sys::window() {
      window.set_timeout_with_callback_and_timeout_and_arguments_0(Closure::once_into_js(f).as_ref().unchecked_ref(), time)?;
    }
    Ok(())
  }

  pub(super) fn create(&self, type_: &'static str) -> Result<HtmlElement, JsValue> {
    Ok(self.document.create_element(type_)?.dyn_into()?)
  }

  pub(super) fn add_text(&self, element: web_sys::Text, text: NodeText) {
    self.state.add_text(TextElement { text, element });
  }

  pub(super) fn add_closure(&self, closure: Closure<dyn Fn(web_sys::Event) -> Result<(), JsValue>>) {
    self.state.add_closure(closure);
  }

  pub (super) fn text(&self, t: &NodeText) -> web_sys::Text {
    self.document.create_text_node(&(self.writer)(t))
  }

  pub fn new<W>(document: Document, writer: &'a W, state: &'a State) -> Self
  where
    W: Fn(&NodeText) -> Cow<'a, str>,
  {
    Self { document, writer, state }
  }
}
