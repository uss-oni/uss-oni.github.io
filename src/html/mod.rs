mod builder;
pub mod document;
mod params;
pub mod recipe;
pub mod node;

use std::ops::Deref;

use self::{document::ExtendDocument, node::{get_element_by_id, Div}};
use crate::entity::Entity;
use crate::icon::Image;
use crate::App;
pub use builder::*;
pub use recipe::*;
use wasm_bindgen::JsCast;
use web_sys::{HtmlDivElement, HtmlElement, HtmlImageElement, HtmlOptionElement, HtmlParagraphElement, HtmlSelectElement};

pub fn display_properties(entity: &'static Entity) {
  let binding = App::get();
  let document = &binding.document;
  get_element_by_id(document, "desc").set_text(entity.desc());
  document.get_element::<HtmlImageElement>("descimg").set_src(&entity.img().path());
  let properties: HtmlDivElement = document.get_element("properties");
  properties.replace_children_with_node_0();

  entity.params.create_html(&properties, entity);

  return;
  let other_phases = get_other_phases(entity);
  if other_phases.len() > 0 {
    //  properties.add_h3(&Ui::TitleObtainingPhaseChange);
    display_other_phases(&properties, other_phases);
  }

  let construction_materials = get_construction_materials(entity);

  if construction_materials.len() > 0 {
    //    properties.add_h3(&Ui::TitleBuildingMaterials);
    display_construction_materials(&properties, construction_materials);
  }
  //console::log_1(&construction_materials.len().into());
}

pub trait Render {
  fn render(&self, div: &Div);
}
