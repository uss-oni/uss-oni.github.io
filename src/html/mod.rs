pub mod document;
mod params;
pub mod recipe;
mod builder;
pub mod menu;

pub use builder::*;
pub use recipe::*;
use document::ExtendDocument;
use web_sys::{ HtmlDivElement, HtmlElement, HtmlImageElement};
use crate::icon::Image;
use crate::entity::Entity;
use crate::lang::Ui;

pub static mut CURRENT_ENTITY: Option<&Entity> = None;

pub fn display_properties(entity: &'static Entity) {
  unsafe {
    CURRENT_ENTITY = Some(entity);
  }
  document::get_element::<HtmlElement>("desc").set_inner_html(&entity.desc());
  document::get_element::<HtmlImageElement>("descimg").set_src(&entity.img().path());
  let properties: HtmlDivElement = document::get_element("properties");
  properties.replace_children_with_node_0();

  entity.params.create_html(&properties, entity);

  return;
  let other_phases = get_other_phases(entity);
  if other_phases.len() > 0 {
    properties.add_h3(&Ui::TitleObtainingPhaseChange);
    display_other_phases(&properties, other_phases);
  }

  let construction_materials = get_construction_materials(entity);

  if construction_materials.len() > 0 {
    properties.add_h3(&Ui::TitleBuildingMaterials);
    display_construction_materials(&properties, construction_materials);
  }
  //console::log_1(&construction_materials.len().into()); 
}
/*
match r {
    db::recipe::Recipe::Phase(db::recipe::Phase { input: other, ..}) if std::ptr::eq(entity, *other) => Some(r),
    _ => None
  })
  */
