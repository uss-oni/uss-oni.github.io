use web_sys::HtmlElement;

use crate::{db, entity::Entity};

impl db::MiscMedicine {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

impl db::MiscIndustrial {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

impl db::MiscOther {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

impl db::MiscQuest {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

impl db::MiscDupe {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}