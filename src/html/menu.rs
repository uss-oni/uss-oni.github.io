use wasm_bindgen::{closure::Closure, JsCast};
use web_sys::HtmlElement;

use crate::category::*;

use super::{
  display_properties,
  document::ExtendDocument,
};

static mut CLOSURES: Vec<Closure<dyn Fn()>> = vec![];

impl SubCategory {
  pub fn create_html(self: &Self, container: &HtmlElement) {
    let mut sorted = self.items.to_vec();
    sorted.sort_by(|a, b| a.order.total_cmp(&b.order));
    for item in sorted {
      let the_box_container = container.add_div(Some("boxContainer"));
      the_box_container.add_div(Some("boxBorder"));
      let the_box = the_box_container.add_div(Some("box"));
      the_box.add_img(&item.img());
      let d = the_box.add_div(Some("align"));
      let p = d.add_p();
      p.set_inner_text(String::from(&item.name() as &str).to_lowercase().as_str());
      //if p.offset_width() > 75 {
        let _ = p.style().set_property("hyphens", "auto");
      //}
      unsafe {
        // Blah blah mutex blah blah
        CLOSURES.push(Closure::<dyn Fn()>::new(move || {
          display_properties(item);
        }));
        let click = CLOSURES.last().unwrap_unchecked();
        the_box.set_onclick(Some(click.as_ref().unchecked_ref()));
      }
    }
  }
}

impl Category {
  pub fn create_html(self: &Self, container: &HtmlElement) {
    unsafe {
      CLOSURES.clear();
    }
    for sub in self.sub_categories {
      let menu = container.add_div(Some("menu"));
      menu.add_div(Some("menuChoice")).add_text(&sub.ui);
      let list = menu.add_div(Some("category"));
      sub.create_html(&list);
    }
  }
}
