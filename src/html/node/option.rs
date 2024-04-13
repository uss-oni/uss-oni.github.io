use web_sys::{HtmlElement, HtmlOptionElement};

use super::*;

pub struct Option {
  node: HtmlOptionElement
}

impl Option {
  pub fn new(document: &web_sys::Document, value: &str, label: &str) -> Self {
    let node: HtmlOptionElement = create_node(document, "option");
    node.set_text(label);
    node.set_value(value);
    Self {node }
  }

  pub fn set_parent(&self, parent: &HtmlElement) {
    let _ = parent.append_child(&self.node);
  }

  pub fn class(&self, class: &str) -> &Self {
    self.node.set_class_name(class);
    self
  }

  pub fn add_class(&self, class: &str) -> &Self {
    let _ = self.node.class_list().add_1(class);
    self
  }

  pub fn remove_class(&self, class: &str) -> &Self {
    let _ = self.node.class_list().remove_1(class);
    self
  }

  pub fn id(&self, id: &str) -> &Self {
    self.node.set_id(id);
    self
  }
}