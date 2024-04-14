use web_sys::HtmlDivElement;

use crate::{
  category::{self, *},
  entity::Entity,
  html::display_properties,
  lang::Text,
  node::{Node, NodeRef, Renderer},
  App,
};

struct Item {
  pub entity: &'static Entity,
}

struct SubCategory {
  name: Text,
  items: Vec<Item>,
}

struct Category {
  name: Text,
  sub_categories: Vec<SubCategory>,
}

pub struct Menu {
  categories: Vec<Category>,
  pub current_category_idx: usize,
}

impl Default for Menu {
  fn default() -> Self {
    Self::new()
  }
}

impl Menu {
  pub fn new() -> Self {
    Self {
      categories: Vec::from([&element, &building, &food, &critter, &plant, &geyser, &space, &equipment, &artifact, &misc].map(Category::new)),
      current_category_idx: 0,
    }
  }
}

impl Category {
  fn new(cat: &category::Category) -> Category {
    Self {
      name: cat.ui,
      sub_categories: Vec::from_iter(cat.sub_categories.iter().map(SubCategory::new)),
    }
  }
}

impl SubCategory {
  fn new(sub: &&category::SubCategory) -> SubCategory {
    let mut sorted: Vec<_> = sub.items.iter().collect();
    sorted.sort_by(|a, b| a.order.total_cmp(&b.order));
    let items = sorted.iter().map(|i| Item { entity: i }).collect();
    Self { name: sub.ui, items }
  }
}

impl Menu {
  pub fn render(&self, html: std::rc::Rc<Renderer>, node: Node) -> Node {
    node.children(&self.categories, |cat| cat.render(html.clone()))
  }
}

impl Category {
  pub fn render(&self, html: std::rc::Rc<Renderer>) -> Node {
    let mut current = NodeRef::<HtmlDivElement>::new();
    html
      .div("menuCategory")
      .get_ref(&mut current)
      .on_mouseenter(move |_| {
        if let Some(div) = App::get().document.get_element_by_id("menuChosen") {
          let _ = div.remove_attribute("id");
        }
        current.set_id("menuChosen");
      })
      .child(html.div("menuCategoryChoice").text(self.name))
      .child(html.div("menuContainer").children(&self.sub_categories, |sub| sub.render(html.clone())))
  }
}

impl SubCategory {
  fn render(&self, html: std::rc::Rc<Renderer>) -> Node {
    let mut category = NodeRef::<HtmlDivElement>::new();
    html
      .div("menuSubcategory")
      .child(html.div("menuChoice").text(self.name))
      .child(html.div("category").get_ref(&mut category).children(&self.items, |item| {
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
            let category = category.clone();
            move |_| {
              display_properties(entity);
              let _ = category.style().set_property("display", "none");
              let category = category.clone();
              html.wait(100, move || category.remove_attribute("style").unwrap())
            }
          })
      }))
  }
}
