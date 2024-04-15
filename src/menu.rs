use std::rc::Rc;

use wasm_bindgen::JsValue;
use web_sys::HtmlDivElement;

use crate::{
  category,
  entity::Entity,
  html::display_properties,
  lang::Text,
  node::{Html, Node, NodeRef},
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
}

impl Default for Menu {
  fn default() -> Self {
    Self::new()
  }
}

impl Menu {
  pub fn new() -> Self {
    Self {
      categories: Vec::from(
        [
          &category::element,
          &category::building,
          &category::food,
          &category::critter,
          &category::plant,
          &category::geyser,
          &category::space,
          &category::equipment,
          &category::artifact,
          &category::misc,
        ]
        .map(Category::new),
      ),
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
  pub fn render<'a>(&'a self, html: &'a Html<'a>, node: Node<'a>, app: Rc<App>) -> Result<Node<'a>, JsValue> {
    let current = Rc::new(NodeRef::<HtmlDivElement>::new());
    Ok(node.children(&self.categories, |cat| Ok(cat.render(html, current.clone(), app.clone())?))?)
  }
}

impl Category {
  pub fn render<'a>(&'a self, html: &'a Html<'a>, chosen: Rc<NodeRef<HtmlDivElement>>, app: Rc<App>) -> Result<Node<'a>, JsValue> {
    let chosen_clone = chosen.clone();
    let mut current = Rc::new(NodeRef::<HtmlDivElement>::new());
    let current_clone = current.clone();

    let node = html
      .div("menuCategory")?
      .get_ref(&mut current)?
      .on_mouseenter(move |_| {
        let _ = chosen_clone.get()?.remove_attribute("id");
        current_clone.get()?.set_id("menuChosen");
        chosen_clone.set(current_clone.get()?);
        Ok(())
      })
      .child(html.div("menuCategoryChoice")?.text(self.name)?)
      .child(html.div("menuContainer")?.children(&self.sub_categories, |sub| sub.render(html, app.clone()))?);

    if !chosen.initialized() {
      chosen.set(current.get()?);
      chosen.get()?.set_id("menuChosen");
    }
    Ok(node)
  }
}

impl SubCategory {
  fn render<'a>(&'a self, html: &'a Html<'a>, app: Rc<App>) -> Result<Node, JsValue> {
    let category = Rc::new(NodeRef::<HtmlDivElement>::new());
    Ok(
      html
        .div("menuSubcategory")?
        .child(html.div("menuChoice")?.text(self.name)?)
        .child(html.div("category")?.get_ref(&category)?.children(&self.items, |item| {
          Ok(html
            .div("boxContainer")?
            .child(html.div("boxBorder")?)
            .child(
              html
                .div("box")?
                .child(html.img(item.entity.img())?)
                .child(html.div("align")?.child(html.p()?.text(item.entity.name())?.set_hyphens())),
            )
            .on_click({
              let entity = item.entity;
              let category = category.clone();
              let app = app.clone();
              move |_| {
                //display_properties(entity, &app);
                let _ = category.get()?.style().set_property("display", "none");
                let category = category.clone();
                Html::wait(100, move || category.get()?.remove_attribute("style"))?; // Y a p't'etre mieux comme technique :|
                Ok(())
              }
            }))
        })?),
    )
  }
}
