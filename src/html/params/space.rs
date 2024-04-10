use web_sys::HtmlElement;

use crate::{db, entity::Entity};

impl db::SpaceHarvestable {
  pub fn create_html(self: &Self, _container: &HtmlElement, _: &Entity) {}
}

impl db::SpaceComet {
  pub fn create_html(self: &Self, _container: &HtmlElement, _: &Entity) {}
}

impl db::SpaceShower {
  pub fn create_html(self: &Self, _container: &HtmlElement, _: &Entity) {}
}

impl db::SpaceArtifact {
  pub fn create_html(self: &Self, _container: &HtmlElement, _: &Entity) {}
}