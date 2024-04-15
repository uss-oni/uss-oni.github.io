use crate::{icon, lang::Text, App};
use web_sys::{Document, HtmlDivElement, HtmlElement};

use super::*;

pub struct Div<'a> {
  document: &'a Document,
  pub node: HtmlDivElement,
}

pub fn get_element_by_id<'a>(document: &'a web_sys::Document, id: &str) -> Div<'a> {
  Div {
    document,
    node: document.get_element_by_id(id).unwrap().dyn_into().unwrap(),
  }
}

impl<'a> Div<'a> {
  pub fn new(document: &'a web_sys::Document) -> Self {
    Self {
      document,
      node: create_node(document, "div"),
    }
  }

  pub fn clone(&self) -> HtmlDivElement {
    self.node.clone()
  }

  pub fn set_parent(&self, parent: &HtmlElement) {
    let _ = parent.append_child(&self.node);
  }

  pub fn add_div(&self) -> Div {
    let ret = Div::new(self.document);
    ret.set_parent(&self.node);
    ret
  }

  pub fn add_select(&self) -> Select {
    let ret = Select::new(self.document);
    ret.set_parent(&self.node);
    ret
  }

  pub fn class(self, class: &str) -> Self {
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

  pub fn remove_id(&self, id: &str) -> &Self {
    let _ = self.node.remove_attribute(id);
    self
  }

  pub fn add_img(&self, img: &dyn icon::Image) -> Image {
    let ret = Image::new(self.document, img);
    ret.set_parent(&self.node);
    ret
  }

  pub fn add_p(&self) -> P {
    let ret = P::new(self.document);
    ret.set_parent(&self.node);
    ret
  }

  pub fn add_text(&self, text: Text) -> &Self {
   // let lang = App::get().language.value();
    let div:HtmlDivElement = self.document.create_element("div").unwrap().dyn_into().unwrap();
   // div.set_inner_text(lang.to_str(text));
    let datas = text.tag();
    let _ = div.dataset().set(datas.0, &datas.1.to_string());
    let _ = self.node.append_child(&div);
    self
  }

  pub fn set_text(self, text: Text) -> Self {
   // let lang = App::get().language.value();
    self.node.replace_children_with_node_0();
    let div:HtmlDivElement = self.document.create_element("div").unwrap().dyn_into().unwrap();
    let _ = self.node.append_child(&div);
   // div.set_outer_html(lang.to_str(text));
    let datas = text.tag();
    let _ = self.node.dataset().set(datas.0, &datas.1.to_string());
    self
  }
  // pub fn add_h3(&self, text: &str)-> H3 {
  //   let ret = H3::new(self.document, text);
  //   ret.set_parent(&self.node);
  //   ret
  // }

  pub fn set_onmouseenter(&self, f: std::option::Option<&web_sys::js_sys::Function>) -> &Self {
    self.node.set_onmouseenter(f);
    self
  }

  pub fn set_onclick(&self, f: std::option::Option<&web_sys::js_sys::Function>) -> &Self {
    self.node.set_onclick(f);
    self
  }
}
