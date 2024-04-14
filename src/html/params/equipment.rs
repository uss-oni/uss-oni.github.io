use web_sys::HtmlElement;

use crate::{db, entity::Entity};

impl db::EquipmentClothes {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

impl db::EquipmentSuit {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

impl db::EquipmentWorn {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

