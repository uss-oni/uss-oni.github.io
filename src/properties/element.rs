use super::props::*;
use crate::db::ElementSolid;
use crate::entity::Entity;
use crate::html::{div, Div, Html};

pub fn display_element_solid(div: Div, entity: &Entity, params: &ElementSolid) -> impl Html {
  div
    .child(&shc(params.shc))
    .child(&thermal_conductivity(params.thermal_conductivity))
}
