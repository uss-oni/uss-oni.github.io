use super::props::*;
use crate::db::ElementSolid;
use crate::entity::Entity;
use crate::html::{Div, Node};

pub fn display_element_solid(div: Div, _entity: &Entity, params: &ElementSolid) -> Node {
  div
    .child(shc(params.shc))
    .child(thermal_conductivity(params.thermal_conductivity))
    .into()
}
