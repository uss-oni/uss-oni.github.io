use web_sys::{Document, HtmlElement, HtmlSelectElement};

use super::*;


pub struct Select<'a> {
  document: &'a Document,
  node: HtmlSelectElement
}

impl<'a> Select<'a> {
  pub fn new(document: &'a web_sys::Document) -> Self {
    Self { document, node: create_node(document, "select") }
  }

  pub fn set_parent(&self, parent: &HtmlElement) {
    let _ = parent.append_child(&self.node);
  }

  pub fn class(self, class: &str) -> Self {
    self.node.set_class_name(class);
    self
  }

  pub fn add_class(self, class: &str) -> Self {
    let _ = self.node.class_list().add_1(class);
    self
  }

  pub fn remove_class(self, class: &str) -> Self {
    let _ = self.node.class_list().remove_1(class);
    self
  }

  pub fn id(&self, id: &str) -> &Self {
    self.node.set_id(id);
    self
  }

  pub fn add_option(self: &Self, value: &str, label: &str) -> Option {
    let ret = Option::new(self.document, value, label);
    ret.set_parent(&self.node);
    ret
  }

  pub fn set_oninput(self: &Self, f: std::option::Option<&web_sys::js_sys::Function>) -> &Self {
    self.node.set_oninput(f);
    self
  }

}