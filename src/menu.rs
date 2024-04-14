use std::cell::OnceCell;

use wasm_bindgen::{closure::Closure, JsCast};
use web_sys::HtmlDivElement;

use crate::{
  category::{self, *},
  entity::Entity,
  html::display_properties,
  lang::{self, Language, Text},
  node::{Node, NodeText, Renderer},
  App,
};

struct Item {
  pub entity: &'static Entity,
  //  pub on_click: OnceCell<Closure<dyn Fn()>>,
}

struct SubCategory {
  name: Text,
  items: Vec<Item>,
}

struct Category {
  name: Text,
  sub_categories: Vec<SubCategory>,
  // on_enter: Closure<dyn Fn(web_sys::Event)>,
}

pub struct Menu {
  categories: Vec<Category>,
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
      //  on_enter: Closure::<dyn Fn(web_sys::Event)>::new(move |event: web_sys::Event| {
      //    if let Some(div) = App::get().document.get_element_by_id("menuChosen") {
      //      let _ = div.remove_attribute("id");
      //    }
      //    event.target().unwrap().dyn_into::<HtmlDivElement>().unwrap().set_id("menuChosen");
      //  }),
    }
  }

  //fn render(&self, div: &crate::html::node::Div) {
  //  let cat = div.add_div().class("menuCategory");
  //  cat.add_div().class("menuCategoryChoice").add_text(self.name);
  //  let sub = cat.add_div().class("menuContainer");
  //  cat.set_onmouseenter(Some(self.on_enter.as_ref().unchecked_ref()));
  //  for sub_category in &self.sub_categories {
  //    sub_category.render(&sub)
  //  }
  //}
}

impl SubCategory {
  fn update_translation(self: &Self, translation: &Language) {
    //    sub_category.update_translation(translation);
  }

  fn new(sub: &&category::SubCategory) -> SubCategory {
    let mut sorted: Vec<_> = sub.items.iter().collect();
    sorted.sort_by(|a, b| a.order.total_cmp(&b.order));
    let items = sorted
      .iter()
      .map(|i| Item {
        entity: i, /* , on_click: OnceCell::new() */
      })
      .collect();
    Self { name: sub.ui, items }
  }

  //fn render(&self, div: &crate::html::node::Div) {
  //  let node = {
  //    let app = App::get();
  //    let renderer = std::rc::Rc::new(Renderer {
  //      document: app.document.clone(),
  //      //root: &div.node,
  //    });
  //    test(self, renderer.clone())
  //  };
  //  div.node.append_child(&node.element);
  //  App::set_node(node);
  //  return;
  //  let div = div.add_div().class("menuSubcategory");
  //  div.add_div().class("menuChoice").add_text(self.name);
  //  let list = div.add_div().class("category");
  //  for item in &self.items {
  //    let the_box_container = list.add_div().class("boxContainer");
  //    the_box_container.add_div().class("boxBorder");
  //    let the_box = the_box_container.add_div().class("box");
  //    the_box.add_img(&item.entity.img());
  //    let d = the_box.add_div().class("align");
  //    let p = d.add_p();
  //    p.add_text(item.entity.name());
  //    p.set_hyphens();
  //    let container_clone = list.clone();
  //    let entity = item.entity;
  //    let _ = item.on_click.set(Closure::<dyn Fn()>::new(move || {
  //      display_properties(entity);
  //      let _ = container_clone.style().set_property("display", "none");
  //      let cc = container_clone.clone();
  //      let c = Closure::<dyn FnOnce()>::once_into_js(move || {
  //        let _ = cc.style().remove_property("display");
  //      });
  //      let _ = web_sys::window().unwrap().set_timeout_with_callback_and_timeout_and_arguments_0(c.as_ref().unchecked_ref(), 10);
  //    }));
  //    if let Some(t) = item.on_click.get() {
  //      the_box.set_onclick(Some(t.as_ref().unchecked_ref()));
  //    }
  //  }
  //}
}

impl From<lang::Text> for NodeText {
  fn from(value: lang::Text) -> Self {
    NodeText::Text(value)
  }
}

impl Menu {
  pub fn render(&self, html: std::rc::Rc<Renderer>, node: Node) -> Node {
    node.children(&self.categories, |cat| cat.render(html.clone()))
  }
}

impl Category {
  pub fn render(&self, html: std::rc::Rc<Renderer>) -> Node {
    html
      .div("menuCategory")
      .on_mouseenter(move |event: web_sys::Event| {
        if let Some(div) = App::get().document.get_element_by_id("menuChosen") {
          let _ = div.remove_attribute("id");
        }
        event.target().unwrap().dyn_into::<HtmlDivElement>().unwrap().set_id("menuChosen");
      })
      .child(html.div("menuCategoryChoice").text(self.name))
      .child(html.div("menuContainer").children(&self.sub_categories, |sub| sub.render(html.clone())))
  }
}

impl SubCategory {
  fn render(&self, html: std::rc::Rc<Renderer>) -> Node {
    html
      .div("menuSubcategory")
      .child(html.div("menuChoice").text(self.name))
      .child(html.div("category").children(&self.items, |item| {
        html
          .div("boxContainer")
          .child(html.div("boxBorder"))
          .child(
            html
              .div("box")
              .child(html.img(item.entity.img()))
              .child(html.div("align").child(html.p().text(item.entity.name()).set_hyphens())),
          )
          .on_click({
            let entity = item.entity;
            let html = html.clone();
            move |_| {
              display_properties(entity);
              html.hide("category");
              html.wait(100, || html.show("category"))
            }
          })
      }))
  }
}
