use crate::html::*;
use crate::db;
//use crate::units::*;

impl db::ArtifactTerrestrial {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    display_primary_element(container, self.primary_element);
  }
}

impl db::ArtifactSpace {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    display_primary_element(container, self.primary_element);
  }
}

impl db::ArtifactAny {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    display_primary_element(container, self.primary_element);
  }
}

impl db::ArtifactQuest {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    display_primary_element(container, self.primary_element);
  }
}
