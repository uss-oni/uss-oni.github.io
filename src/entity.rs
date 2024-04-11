use crate::{db, icon::Image, lang::{self, Text}};

pub struct Entity {
  name: lang::Game,
  tag: &'static str,
  pub order: f32,
  pub params: db::Params,
}

impl Entity { 
  pub const fn new(name: lang::Game, tag: &'static str, order: f32, params: db::Params) -> Entity {
    Entity { name, tag, order, params }
  }

  pub const fn img(self: &Self) -> EntityImage {
    EntityImage {name: self.tag}
  }

  pub const fn desc(self: &'static Self) -> Text {
    lang::Text::Desc(self.name)
  }

  pub const fn name(self: &'static Self) -> Text {
    lang::Text::Game(self.name)
  }
}

pub struct EntityImage {
  name: &'static str
}

impl Image for EntityImage {
  fn path(self: &Self) -> String {
    let mut ret = String::from("images/");
    ret.push(self.name.chars().nth(0).unwrap().to_ascii_uppercase());
    ret.push('/');
    ret += &self.name;
    ret += ".png";
    ret
  }
}

