use std::i32;

use wasm_bindgen::JsCast;
use web_sys::{Document, HtmlDivElement, HtmlElement, HtmlHeadingElement, HtmlImageElement, HtmlOptionElement, HtmlParagraphElement};

use crate::icon::Image;

pub trait ExtendHtml {
  fn add_div(self: &Self, class: Option<&str>) -> HtmlDivElement;
  fn add_img(self: &Self, img: &dyn Image) -> HtmlImageElement;
  fn add_p(self: &Self) -> HtmlParagraphElement;
  fn add_text(self: &Self, text: &str) -> web_sys::Text;
  fn add_h3(self: &Self, text: &str) -> HtmlHeadingElement;
  fn add_option(self: &Self, value: &str, label: &str) -> HtmlOptionElement;
  fn set_width(self: &Self, width: i32);
}

impl ExtendHtml for HtmlElement {
  fn add_div(self: &Self, class: Option<&str>) -> HtmlDivElement {
    let ret = create::<HtmlDivElement>("div");
    let _ = self.append_child(&ret);
    if let Some(class) = class {
      ret.set_class_name(class);
    }
    ret
  }

  fn add_img(self: &Self, img: &dyn Image) -> HtmlImageElement {
    let ret = create::<HtmlImageElement>("img");
    ret.set_src(&img.path());
    let _ = self.append_child(&ret);
    ret
  }

  fn add_p(self: &Self) -> HtmlParagraphElement {
    let ret = create::<HtmlParagraphElement>("p");
    let _ = self.append_child(&ret);
    ret
  }

  fn add_text(self: &Self, text: &str) -> web_sys::Text {
    let ret = web_sys::window().unwrap().document().unwrap().create_text_node(text);
    let _ = self.append_child(&ret);
    ret
  }

  fn add_h3(self: &Self, text: &str) -> HtmlHeadingElement {
    let ret = create::<HtmlHeadingElement>("h3");
    ret.set_inner_text(&text);
    let _ = self.append_child(&ret);
    ret
  }

  fn add_option(self: &Self, value: &str, label: &str) -> HtmlOptionElement {
    let ret = create::<HtmlOptionElement>("option");
    let _ = ret.set_attribute("value", value);
    ret.set_text(label);
    let _ = self.append_child(&ret);
    ret
  }

  fn set_width(self: &Self, width: i32) {
    let _ = self.style().set_property("width", &(width.to_string() + "px"));
  }
}

fn create<T: wasm_bindgen::JsCast>(s: &str) -> T {
 web_sys::window().unwrap().document().unwrap().create_element(s).unwrap().dyn_into::<T>().unwrap()
}

pub trait ExtendDocument {
  fn get_element<T: wasm_bindgen::JsCast>(self: &Self, id: &str) -> T;
  fn get_body(self: &Self) -> HtmlElement;
}

impl ExtendDocument for Document {
  fn get_element<T: wasm_bindgen::JsCast>(self: &Self, id: &str) -> T {
    self.get_element_by_id(id).unwrap().dyn_into::<T>().unwrap()
  }

  fn get_body(self: &Self) -> HtmlElement {
    self.body().unwrap()
  }
}
