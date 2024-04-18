use super::*;

use wasm_bindgen::closure::Closure;
use web_sys::HtmlElement;

pub struct Node<'a> {
  renderer: &'a Html<'a>,
  pub(super) element: HtmlElement,
}

impl<'a> Node<'a> {
  pub fn child(self, node: Self) -> Self {
    let _ = self.element.append_child(&node.element);
    self
  }

  pub fn text<T>(self, text: T) -> Result<Self, JsValue>
  where
    NodeText: From<T>,
  {
    let text: NodeText = text.into();
    let node = self.renderer.text(&text);
    self.element.append_child(&node)?;
    self.renderer.add_text(node, text);
    Ok(self)
  }

  pub fn children<'b, T, U>(self, list: &'b [T], f: U) -> Result<Node<'a>, JsValue>
  where
    U: Fn(&'b T) -> Result<Self, JsValue>,
  {
    for item in list {
      let node = f(item)?;
      self.element.append_child(&node.element)?;
    }
    Ok(self)
  }

  pub fn on_click<T>(self, f: T) -> Self
  where
    T: Fn(web_sys::Event) -> Result<(), JsValue> + 'static,
  {
    let closure = Closure::new(f);
    self.element.set_onclick(Some(closure.as_ref().unchecked_ref()));
    self.renderer.add_closure(closure);
    self
  }

  pub fn on_input<T>(self, f: T) -> Self
  where
    T: Fn(web_sys::Event) -> Result<(), JsValue> + 'static,
  {
    let closure = Closure::new(f);
    self.element.set_oninput(Some(closure.as_ref().unchecked_ref()));
    self.renderer.add_closure(closure);
    self
  }

  pub fn on_mouseenter<T>(self, f: T) -> Self
  where
    T: Fn(web_sys::Event) -> Result<(), JsValue> + 'static,
  {
    let closure = Closure::new(f);
    self.element.set_onmouseenter(Some(closure.as_ref().unchecked_ref()));
    self.renderer.add_closure(closure);
    self
  }

  pub fn on_mouseleave<T>(self, f: T) -> Self
  where
    T: Fn(web_sys::Event) -> Result<(), JsValue> + 'static,
  {
    let closure = Closure::new(f);
    self.element.set_onmouseleave(Some(closure.as_ref().unchecked_ref()));
    self.renderer.add_closure(closure);
    self
  }

  pub fn set_hyphens(self) -> Self {
    let _ = self.element.style().set_property("hyphens", "auto");
    self
  }

  pub fn get_ref<T>(self, r: &NodeRef<T>) -> Result<Self, JsValue>
  where
    T: wasm_bindgen::JsCast + Clone,
  {
    r.set(self.element.clone().dyn_into()?);
    Ok(self)
  }

  pub fn new(renderer: &'a Html<'a>, type_: &'static str) -> Result<Self, JsValue> {
    Ok(Node {
      renderer,
      element: renderer.create(type_)?,
    })
  }

  pub fn from_element(renderer: &'a Html<'a>, element: HtmlElement) -> Self {
    Node { renderer, element }
  }
}
