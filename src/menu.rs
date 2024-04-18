use std::cell::OnceCell;

use crate::{
  category,
  entity::Entity,
  html::{self, div, p, wait, Div, HtmlState, MouseClick, MouseEnter, Render},
  lang::{self, Text},
};

pub mod event {
  use std::marker::PhantomData;

  pub struct Receiver<T> {
    phantom: PhantomData<T>,
  }

  pub fn recv<T, F>(f: F) -> Receiver<T>
  where
    F: Fn(&T) -> (),
  {
    Receiver {
      phantom: PhantomData,
    }
  }
}

fn send<T>(msg: T) {}

enum Msg {
  Hide,
  Unhide,
}

struct Lang {}

struct UpdatableText {
  text: lang::Game,
  node: html::Text,
  update: event::Receiver<Lang>,
}
struct Item {
  entity: &'static Entity,
  state: HtmlState,
}

impl Item {
  pub fn new(entity: &'static Entity) -> Self {
    Self {
      entity,
      state: Default::default(),
    }
  }
}

impl Render for &Item {
  type Node = Div;

  fn render(self) -> Self::Node {
    let b: Option<()> = None;
    div()
      .class("boxContainer")
      .child(div().class("boxBorder"))
      .child(div().child(div().child(p().text().hyphens())))
      .on_event(|event: MouseClick, _| {
        send(Msg::Hide);
        wait(100, || send(Msg::Unhide)); // Y a p't'etre mieux comme technique :|
      })
      .store_state(&self.state)
  }
}

struct SubCategory {
  name: Text,
  items: Vec<Item>,
  state: HtmlState,
}

struct Category {
  name: Text,
  sub_categories: Vec<SubCategory>,
  state: HtmlState,
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
      state: Default::default(),
    }
  }
}

impl SubCategory {
  fn new(sub: &&category::SubCategory) -> SubCategory {
    let mut sorted: Vec<_> = sub.items.iter().collect();
    sorted.sort_by(|a, b| a.order.total_cmp(&b.order));
    let items = sorted.iter().map(|i| Item::new(i)).collect();
    Self {
      name: sub.ui,
      items,
      state: Default::default(),
    }
  }
}

impl Menu {
  pub fn render(&self) -> Div {
    div().class("menu").children(&self.categories)
  }
}

struct RemoveChosen {}

impl Render for &Category {
  type Node = Div;

  fn render(self) -> Div {
    div()
      .class("menuCategory")
      .child(div().class("menuCategoryChoice").text())
      .child(div().class("menuContainer").children(&self.sub_categories))
      .on_event(|event: MouseEnter, div| {
        send(RemoveChosen {});
        div.set_id("menuChosen");
        //target.on_once(|msg: RemoveChosen, &target| target.remove_attribute("id"))
      })
      .store_state(&self.state)
  }
}

impl Render for &SubCategory {
  type Node = Div;

  fn render(self) -> Div {
    div()
      .class("menuSubcategory")
      .child(div().class("menuChoice").text())
      .child(div().class("category").children(&self.items))
      .on_msg(|msg: Msg, div| match msg {
        Msg::Hide => div.style().set_property("display", "none").unwrap(),
        Msg::Unhide => div.remove_attribute("style").unwrap(),
      })
  }
}
