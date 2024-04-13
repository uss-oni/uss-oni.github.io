use std::cell::RefCell;
use wasm_bindgen::{closure::Closure, JsCast};
use web_sys::{window, HtmlDivElement, HtmlElement};

use crate::menu::*;
use super::{
  display_properties,
  document::ExtendHtml, node::Div,
};
/* 
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
    //  p.set_inner_text(String::from(&item.name() as &str).to_lowercase().as_str());
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
    for sub in &self.sub_categories {
      let div = container.add_div(Some("menuSubcategory"));
     // div.add_div(Some("menuChoice")).add_text(&sub.name);
      let list = div.add_div(Some("category"));
      sub.create_html(&list);
    }
  }
}

thread_local! {
  static MENU_CATEGORY: RefCell<Option<HtmlDivElement>> = RefCell::new(None);
}

pub fn display_menu<T>(menu: &Menu, div: &Div) {
  //let list = renderer.get_element_by_id("menu");
  for category in &menu.categories {
    //let cat = list.add_div();
    //cat.class("menuCategory");
   //// cat.add_div().class("menuCategoryChoice").add_text(&category.name);
   // let sub = cat.add_div().class("menuContainer");
  }
}
    //category.create_html(&sub);

//  let clone = cat.clone();
//  let enter = Closure::<dyn Fn()>::new(move || {
//    MENU_CATEGORY.with(|old| {
//      if let Some(ref old) = *old.borrow() {
//        let _ = old.class_list().remove_1("menuChosen".into());
//      }
//      *old.borrow_mut() = Some(clone.clone());
//    });
//    let _ = clone.class_list().add_1("menuChosen");
//  });
//  cat.set_onmouseenter(Some(enter.as_ref().unchecked_ref()));
//  enter.forget();
//}

*/