use web_sys::HtmlElement;

use crate::{db, entity::Entity};

impl db::PlantCrop {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

impl db::PlantForage {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

impl db::PlantDecor {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

impl db::PlantCropSeed {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

impl db::PlantDecorSeed {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}
