use crate::html2::*;
use crate::db;
//use crate::units::*;

impl db::CritterCritter {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

impl db::CritterBaby {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

impl db::CritterEgg {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}

impl db::CritterRobot {
  pub fn create_html(&self, _container: &HtmlElement, _: &Entity) {}
}
