pub mod document;
mod params;
pub mod recipe;
mod builder;

pub use builder::*;
pub use recipe::*;
use document::ExtendDocument;
use wasm_bindgen::closure::Closure;
use wasm_bindgen::JsCast;
use web_sys::{console, HtmlDivElement, HtmlElement, HtmlImageElement};
use crate::icon::Image;
use crate::category::{Category, SubCategory};
use crate::entity::Entity;
use crate::lang::Ui;

static mut CLOSURES: Vec<Closure<dyn Fn()>> = vec![];
pub static mut CURRENT_ENTITY: Option<&Entity> = None;

impl SubCategory {
  pub fn create_html(self: &Self, container: &HtmlElement) {
    let mut sorted = self.items.to_vec();
    sorted.sort_by(|a, b| a.order.total_cmp(&b.order));
    for item in sorted {
      let the_box = container.add_div(Some("box"));
      the_box.add_img(&item.img());
      let d = the_box.add_div(Some("align"));
      let p = d.add_p();
      p.set_inner_text(String::from(&item.name() as &str).to_lowercase().as_str());
      if p.offset_width() > 75 {
        let _ = p.style().set_property("hyphens", "auto");
      }
      unsafe {
        // Blah blah mutex blah blah
        CLOSURES.push(Closure::<dyn Fn()>::new(|| display_properties(item)));
        let click = CLOSURES.last().unwrap_unchecked();
        the_box.set_onclick(Some(click.as_ref().unchecked_ref()));
      }
    }
  }
}

impl Category {
  pub fn create_html(self: &Self, container: &HtmlElement) {
    unsafe {
      CLOSURES.clear();
    }
    for sub in self.sub_categories {
      container.add_h3(&sub.ui);
      let list = container.add_div(Some("category"));
      sub.create_html(&list);
    }
  }
}

pub fn display_properties(entity: &'static Entity) {
  unsafe {
    CURRENT_ENTITY = Some(entity);
  }
  document::get_element::<HtmlElement>("desc").set_inner_html(&entity.desc());
  document::get_element::<HtmlImageElement>("descimg").set_src(&entity.img().path());
  let properties: HtmlDivElement = document::get_element("properties");
  properties.replace_children_with_node_0();

  entity.params.create_html(&properties, entity);

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
