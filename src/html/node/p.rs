use web_sys::{HtmlElement, HtmlParagraphElement};

use crate::{lang::Text, App};

use super::*;

pub struct P {
  node: HtmlParagraphElement,
}

impl P {
  pub fn new(document: &web_sys::Document) -> Self {
    Self { node: create_node(document, "p") }
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

  pub fn add_text(&self, text: Text) -> &Self {
    let lang = App::get().language.value();
    self.node.set_text_content(Some(lang.to_str(text).to_lowercase().as_str()));
    let datas = text.tag();
    let _ = self.node.dataset().set(datas.0, &datas.1.to_string());
    self
  }

  pub fn set_hyphens(&self) {
    //if self.node.offset_width() > 75 {
      self.node.style().set_property("hyphens", "auto");
    //}
  }
}
