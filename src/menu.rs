use std::cell::Cell;
use std::rc::Rc;

use crate::entity::Entity;
use crate::html::HtmlRender;
use crate::html::{div, img, HtmlState, MouseClick, MouseEnter, MouseLeave, Node};
use crate::icon::Image;
use crate::lang::Text;
use crate::msg::send;
use crate::properties::DisplayEntity;
use crate::route::Route;
use crate::text::{self, HyphenatedText, UiText};
use crate::category;

struct Item {
  entity: &'static Entity,
  state: HtmlState,
  text: HyphenatedText,
}

impl Item {
  pub fn new(entity: &'static Entity) -> Self {
    Self {
      entity,
      state: Default::default(),
      text: HyphenatedText::new(Text::Game(entity.name)),
    }
  }
}

impl HtmlRender for &Item {
  fn render(&self) -> Node {
    let tag = self.entity.tag;
    let entity = self.entity;
    div()
      .class("boxContainer")
      .child(div().class("boxBorder"))
      .child(
        div()
          .class("box")
          .child(div().class("align").child(&self.text))
          .child(img().set_src(&self.entity.img().path())),
      )
      .on_event(|_: MouseClick, _| {
        send(Hide {});
        send(Route::new(tag));
        send(DisplayEntity { entity });
      })
      .store_state(&self.state)
      .into()
  }
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

  pub fn get_entity(&self, entity: &str) -> Option<&'static Entity> {
    for category in &self.categories {
      for sub_category in &category.sub_categories {
        for item in &sub_category.items {
          if item.entity.tag == entity {
            return Some(item.entity);
          }
        }
      }
    }
    None
  }
}

impl HtmlRender for &Menu {
  fn render(&self) -> Node {
    div().id("menu").children(&self.categories).into()
  }
}

struct Category {
  name: UiText,
  sub_categories: Vec<SubCategory>,
  state: HtmlState,
}

impl Category {
  fn new(cat: &category::Category) -> Category {
    Self {
      name: UiText::new(cat.ui),
      sub_categories: Vec::from_iter(cat.sub_categories.iter().map(SubCategory::new)),
      state: Default::default(),
    }
  }
}
impl HtmlRender for &Category {
  fn render(&self) -> Node {
    div()
      .class("menuCategory")
      .child(div().class("menuCategoryChoice").child(&self.name))
      .child(div().class("menuContainer").children(&self.sub_categories))
      .on_event(|_: MouseEnter, div| {
        send(RemoveChosen {});
        div.set_id("menuChosen");
      })
      .on_msg(|_: &RemoveChosen, target| {
        let _ = target.remove_attribute("id");
      })
      .store_state(&self.state)
      .into()
  }
}

struct RemoveChosen {}
struct Hide {}

struct SubCategory {
  name: UiText,
  items: Vec<Item>,
  state: HtmlState,
}

impl SubCategory {
  fn new(sub: &&category::SubCategory) -> SubCategory {
    let mut sorted: Vec<_> = sub.items.iter().collect();
    sorted.sort_by(|a, b| a.order.total_cmp(&b.order));
    let items = sorted.iter().map(|i| Item::new(i)).collect();
    Self {
      name: UiText::new(sub.ui),
      items,
      state: Default::default(),
    }
  }
}
impl HtmlRender for &SubCategory {
  fn render(&self) -> Node {
    text::RESIZE_OBSERVER.with(|obs| obs.disconnect()); // Remove all the observers from the previous menu
    let children: Rc<_> = Cell::new(None).into();
    let children_clone = children.clone();
    let items:Vec<_> = self.items.iter().map(|item| Item {entity: item.entity, state: Default::default(), text: item.text}).collect();
    div()
      .class("menuSubcategory")
      .child(div().class("menuChoice").child(&self.name))
      .on_event(move |_: MouseEnter, target| {
        let c = div()
          .class("category")
          .children(&items)
          .on_msg(move |_: &Hide, div| div.style().set_property("display", "none").unwrap());
        target.child(c.clone());
        children.replace(Some(c));
      })
      .on_event(move |_: MouseLeave, _| {
        let target = children_clone.replace(None);
        target.unwrap().remove();
      })
      .store_state(&self.state)
      .into()
  }
}
