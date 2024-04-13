use web_sys::{HtmlDivElement, HtmlElement, HtmlImageElement};
use crate::icon;

use super::*;

pub struct Image {
  node: HtmlImageElement
}

impl Image {
  pub fn new(document: &web_sys::Document, img: &dyn icon::Image) -> Self {
    let node:HtmlImageElement = create_node(document, "img");
    node.set_src(&img.path());
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