use std::{borrow::Cow, cell::OnceCell, ops::Deref, rc::Rc};

use wasm_bindgen::closure::Closure;
use wasm_bindgen::JsCast;
use web_sys::*;

use crate::{icon::Image, lang};

#[derive(Clone)]
pub struct Renderer {
  document: Document,
}

impl Renderer {
  pub fn div(self: &std::rc::Rc<Self>, class: &'static str) -> Node {
    let node = Node::new(self, "div");
    node.element.set_class_name(class);
    node
  }

  pub fn select(self: &std::rc::Rc<Self>, class: &'static str) -> Node {
    let node = Node::new(self, "select");
    node.element.set_class_name(class);
    node
  }

  pub fn option(self: &std::rc::Rc<Self>, value: &'static str) -> Node {
    let node = Node::new(self, "option");
    node.element.dyn_ref::<HtmlOptionElement>().unwrap().set_value(value);
    node
  }

  pub fn div_id(self: &std::rc::Rc<Self>, class: &'static str) -> Node {
    let node = Node::new(self, "div");
    node.element.set_id(class);
    node
  }

  pub fn img<T>(self: &std::rc::Rc<Self>, img: T) -> Node
  where
    T: Image,
  {
    let node = Node::new(self, "img");
    node.element.dyn_ref::<HtmlImageElement>().unwrap().set_src(&img.path());
    node
  }

  pub fn p(self: &std::rc::Rc<Self>) -> Node {
    Node::new(self, "p")
  }

  pub fn wait<T>(&self, time: i32, f: T)
  where
    T: FnOnce() + 'static,
  {
    let _ = web_sys::window()
      .unwrap()
      .set_timeout_with_callback_and_timeout_and_arguments_0(Closure::once_into_js(f).as_ref().unchecked_ref(), time);
  }

  fn create(&self, type_: &'static str) -> HtmlElement {
    self.document.create_element(type_).unwrap().dyn_into().unwrap()
  }

  pub fn new(document: Document) -> Self {
    Self { document }
  }
}

pub enum NodeText {
  Str(&'static str),
  Text(lang::Text),
}

impl From<lang::Text> for NodeText {
  fn from(value: lang::Text) -> Self {
    NodeText::Text(value)
  }
}

impl From<&'static str> for NodeText {
  fn from(value: &'static str) -> Self {
    NodeText::Str(value)
  }
}


pub struct Node {
  nodes: Vec<Node>,
  element: HtmlElement,
  text: Option<NodeText>,
  closure: Vec<Closure<dyn Fn(web_sys::Event)>>,
}

impl Node {
  pub fn child(mut self, node: Node) -> Self {
    let _ = self.element.append_child(&node.element);
    self.nodes.push(node);
    self
  }

  pub fn text<T>(mut self, text: T) -> Self
  where
    NodeText: From<T>,
  {
    self.text = Some(text.into());
    self
  }

  pub fn children<T, U>(mut self, list: &[T], f: U) -> Self
  where
    U: Fn(&T) -> Node,
  {
    for item in list {
      let node = f(item);
      let _ = self.element.append_child(&node.element);
      self.nodes.push(node);
    }
    self
  }

  pub fn on_click<T>(mut self, f: T) -> Self
  where
    T: Fn(web_sys::Event) + 'static,
  {
    let closure = Closure::new(f);
    self.element.set_onclick(Some(closure.as_ref().unchecked_ref()));
    self.closure.push(closure);
    self
  }

  pub fn on_input<T>(mut self, f: T) -> Self
  where
    T: Fn(web_sys::Event) + 'static,
  {
    let closure = Closure::new(f);
    self.element.set_oninput(Some(closure.as_ref().unchecked_ref()));
    self.closure.push(closure);
    self
  }

  pub fn on_mouseenter<T>(mut self, f: T) -> Self
  where
    T: Fn(web_sys::Event) + 'static,
  {
    let closure = Closure::new(f);
    self.element.set_onmouseenter(Some(closure.as_ref().unchecked_ref()));
    self.closure.push(closure);
    self
  }

  pub fn on_mouseleave<T>(mut self, f: T) -> Self
  where
    T: Fn(web_sys::Event) + 'static,
  {
    let closure = Closure::new(f);
    self.element.set_onmouseleave(Some(closure.as_ref().unchecked_ref()));
    self.closure.push(closure);
    self
  }

  pub fn set_hyphens(self) -> Node {
    let _ = self.element.style().set_property("hyphens", "auto");
    self
  }

  pub fn get_ref<T>(self, r: &mut NodeRef<T>) -> Self
  where
    T: wasm_bindgen::JsCast,
  {
    let _ = r.element.set(self.element.clone().dyn_into().unwrap());
    self
  }

  pub fn visit_text<T>(&self, f: &T)
  where
    T: Fn(&NodeText) -> Cow<str>,
  {
    if let Some(ref text) = &self.text {
      self.element.set_inner_text(&f(text));
    }
    for node in &self.nodes {
      node.visit_text(f);
    }
  }

  fn new(renderer: &std::rc::Rc<Renderer>, type_: &'static str) -> Self {
    Node {
      nodes: vec![],
      element: renderer.create(type_),
      text: None,
      closure: vec![],
    }
  }

  pub fn from_element(element: HtmlElement) -> Node {
    Node {
      nodes: vec![],
      element: element,
      text: None,
      closure: vec![],
    }
  }
}

pub struct NodeRef<T> {
  element: Rc<OnceCell<T>>,
}

impl<T> NodeRef<T> {
  pub fn new() -> Self {
    Self { element: OnceCell::new().into() }
  }
}

impl<T> Deref for NodeRef<T> {
  type Target = T;

  fn deref(&self) -> &Self::Target {
    &self.element.get().unwrap()
  }
}
