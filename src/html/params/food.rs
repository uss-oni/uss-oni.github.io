use crate::html::*;
use crate::db;
//use crate::units::*;

impl db::FoodCooked {
  pub fn create_html(&self, container: &HtmlElement, entity: &Entity) {
    display_phases(container, entity);
    display_primary_element(container, self.primary_element);
    display_quality(container, &(self.quality as i32));
  }
}

impl db::FoodIngredient {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

impl db::FoodDehydrated {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}
