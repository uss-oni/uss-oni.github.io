use wasm_bindgen::closure::Closure;
use wasm_bindgen::JsCast;
use web_sys::*;

use crate::{icon::Image, lang, App};

#[derive(Clone)]
pub struct Renderer {
  pub document: Document,
}

impl Renderer {
  pub fn div(self: &std::rc::Rc<Self>, class: &'static str) -> Node {
    let node = Node::new(self, "div", Some(class));
    node.element.set_class_name(class);
    node
  }

  pub fn img<T>(self: &std::rc::Rc<Self>, img: T) -> Node
  where
    T: Image,
  {
    let node = Node::new(self, "img", None);
    node.element.dyn_ref::<HtmlImageElement>().unwrap().set_src(&img.path());
    node
  }

  pub fn p(self: &std::rc::Rc<Self>) -> Node {
    Node::new(self, "p", None)
  }

  pub fn hide(&self, class: &'static str) {
    
  }

  pub fn show(&self, class: &'static str) {}

  pub fn wait<T>(&self, time: i32, f: T) {}

  fn create(&self, type_: &'static str) -> HtmlElement {
    self.document.create_element(type_).unwrap().dyn_into().unwrap()
  }
}


pub enum NodeText {
  None,
  Text(lang::Text),
}

pub struct Node {
  pub nodes: Vec<Node>,
  pub element: HtmlElement,
  classes: Vec<&'static str>,
  text: NodeText,
  closure: Option<Closure<dyn Fn(web_sys::Event)>>,
}

impl Node {
  pub fn child(mut self, node: Node) -> Node {
    let _ = self.element.append_child(&node.element);
    self.nodes.push(node);
    self
  }

  pub fn text<T>(mut self, t: T) -> Node
  where
    NodeText: From<T>,
  {
    let lang = App::get().language.value();
    self.text = t.into();
    let text = match &self.text {
      NodeText::None => todo!(),
      NodeText::Text(text) => lang.to_str(*text),
    };
    self.element.set_inner_text(text);
    self
  }

  pub fn children<T, U>(mut self, list: &[T], f: U) -> Node
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

  pub fn on_click<T>(mut self, f: T) -> Node
  where
    T: Fn(web_sys::Event) + 'static,
  {
    self.closure = Some(Closure::new(f));
    if let Some(ref t) = self.closure {
      self.element.set_onclick(Some(t.as_ref().unchecked_ref()));
    }
    self
  }

  pub fn on_mouseenter<T>(mut self, f: T) -> Node
  where
    T: Fn(web_sys::Event) + 'static,
  {
    self.closure = Some(Closure::new(f));
    if let Some(ref t) = self.closure {
      self.element.set_onmouseenter(Some(t.as_ref().unchecked_ref()));
    }
    self
  }

  pub fn set_hyphens(self) -> Node {
    self
  }

  fn new(renderer: &std::rc::Rc<Renderer>, type_: &'static str, class: Option<&'static str>) -> Node {
    Node {
      nodes: vec![],
      element: renderer.create(type_),
      classes: class.into_iter().collect(),
      text: NodeText::None,
      closure: None,
    }
  }

  pub fn from_element(element: &HtmlElement) -> Node {
    Node { nodes: vec![], element: element.clone(), classes: vec![], text: NodeText::None, closure: None }
  }
}
