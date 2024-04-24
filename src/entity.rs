use crate::{db, icon::Image, lang::{self, Text}};

pub struct Entity {
  pub name: lang::Game,
  pub tag: &'static str,
  pub order: f32,
  pub params: db::Params,
  pub vanilla: bool,
  pub space_out: bool,
}

impl Entity { 
  pub const fn new(name: lang::Game, tag: &'static str, order: f32, params: db::Params) -> Entity {
    Entity { name, tag, order, params, vanilla: true, space_out:true }
  }

  pub const fn img(&self) -> EntityImage {
    EntityImage {name: self.tag}
  }

  pub const fn desc(&'static self) -> Text {
    lang::Text::Desc(self.name)
  }

  pub const fn name(&'static self) -> Text {
    lang::Text::Game(self.name)
  }
}

pub struct EntityImage {
  name: &'static str
}

impl Image for EntityImage {
  fn path(&self) -> String {
    let mut ret = String::from("images/");
    ret.push(self.name.chars().nth(0).unwrap().to_ascii_uppercase());
    ret.push('/');
    ret += &self.name;
    ret += ".png";
    ret
  }
}

