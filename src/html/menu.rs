use wasm_bindgen::{closure::Closure, JsCast};
use web_sys::{window, HtmlElement};

use crate::category::*;

use super::{display_properties, document::ExtendDocument};

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
      let _ = p.style().set_property("hyphens", "auto");
      let container_clone = container.clone();
      let click = Closure::<dyn Fn()>::new(move || {
        display_properties(item);
        let _ = container_clone.style().set_property("display", "none");
        let cc = container_clone.clone();
        let c = Closure::<dyn FnOnce()>::once_into_js(move || {
          let _ = cc.style().remove_property("display");
        });
        let _ = window().unwrap().set_timeout_with_callback_and_timeout_and_arguments_0(c.as_ref().unchecked_ref(), 10);
      });
      the_box.set_onclick(Some(click.as_ref().unchecked_ref()));
      click.forget();
    }
  }
}

impl Category {
  pub fn create_html(self: &Self, container: &HtmlElement) {
    for sub in self.sub_categories {
      let menu = container.add_div(Some("menu"));
      menu.add_div(Some("menuChoice")).add_text(&sub.ui);
      let list = menu.add_div(Some("category"));
      sub.create_html(&list);
    }
  }
}
