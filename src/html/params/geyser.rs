use web_sys::HtmlElement;

use crate::{db, entity::Entity};

impl db::GeyserGeyser {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}
