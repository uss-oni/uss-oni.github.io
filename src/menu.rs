use std::cell::OnceCell;

use wasm_bindgen::{closure::Closure, JsCast};
use web_sys::HtmlDivElement;

use crate::{
  category::{self, *},
  entity::Entity,
  html::display_properties,
  lang::{Language, Text},
  App,
};

struct Item {
  pub entity: &'static Entity,
  pub on_click: OnceCell<Closure<dyn Fn()>>,
}

struct SubCategory {
  name: Text,
  items: Vec<Item>,
}

struct Category {
  name: Text,
  sub_categories: Vec<SubCategory>,
  on_enter: Closure<dyn Fn(web_sys::Event)>,
}

pub struct Menu {
  pub categories: Vec<Category>,
  pub current_category_idx: usize,
}

impl Menu {
  fn update_translation(self: &Self, translation: &Language) {
    for category in &self.categories {
      category.update_translation(translation);
    }
  }

  pub fn new() -> Self {
    Self {
      categories: Vec::from([&element, &building, &food, &critter, &plant, &geyser, &space, &equipment, &artifact, &misc].map(Category::new)),
      current_category_idx: 0,
    }
  }

  pub fn render(&self, div: &crate::html::node::Div) {
    for category in &self.categories {
      category.render(div);
    }
  }
}

impl Category {
  fn update_translation(self: &Self, translation: &Language) {
    for sub_category in &self.sub_categories {
      sub_category.update_translation(translation);
    }
  }

  fn new(cat: &category::Category) -> Category {
    Self {
      name: cat.ui,
      sub_categories: Vec::from_iter(cat.sub_categories.iter().map(SubCategory::new)),
      on_enter: Closure::<dyn Fn(web_sys::Event)>::new(move |event: web_sys::Event| {
        if let Some(div) = App::get().document.get_element_by_id("menuChosen") {
          let _ = div.remove_attribute("id");
        }
        event.target().unwrap().dyn_into::<HtmlDivElement>().unwrap().set_id("menuChosen");
      }),
    }
  }

  fn render(&self, div: &crate::html::node::Div) {
    let cat = div.add_div().class("menuCategory");
    cat.add_div().class("menuCategoryChoice").add_text(self.name);
    let sub = cat.add_div().class("menuContainer");
    cat.set_onmouseenter(Some(self.on_enter.as_ref().unchecked_ref()));
    for sub_category in &self.sub_categories {
      sub_category.render(&sub)
    }
  }
}

impl SubCategory {
  fn update_translation(self: &Self, translation: &Language) {
    //    sub_category.update_translation(translation);
  }

  fn new(sub: &&category::SubCategory) -> SubCategory {
    let mut sorted:Vec<_> = sub.items.iter().map(|i| i).collect();
    sorted.sort_by(|a, b| a.order.total_cmp(&b.order));
    let items = sorted.iter().map(|i| Item { entity: i, on_click: OnceCell::new() }).collect();
    Self {
      name: sub.ui,
      items,
    }
  }

  fn render(&self, div: &crate::html::node::Div) {
    let div = div.add_div().class("menuSubcategory");
    div.add_div().class("menuChoice").add_text(self.name);
    let list = div.add_div().class("category");
    for item in &self.items {
      let the_box_container = list.add_div().class("boxContainer");
      the_box_container.add_div().class("boxBorder");
      let the_box = the_box_container.add_div().class("box");
      the_box.add_img(&item.entity.img());
      let d = the_box.add_div().class("align");
      let p = d.add_p();
      p.add_text(item.entity.name());
      p.set_hyphens();
      let container_clone = list.clone();
      let entity = item.entity;
      let _ = item.on_click.set(Closure::<dyn Fn()>::new(move || {
        display_properties(entity);
        let _ = container_clone.style().set_property("display", "none");
        let cc = container_clone.clone();
        let c = Closure::<dyn FnOnce()>::once_into_js(move || {
          let _ = cc.style().remove_property("display");
        });
        let _ = web_sys::window().unwrap().set_timeout_with_callback_and_timeout_and_arguments_0(c.as_ref().unchecked_ref(), 10);
      }));
      if let Some(t) = item.on_click.get() {
        the_box.set_onclick(Some(t.as_ref().unchecked_ref()));
      }
    }
  }
}
