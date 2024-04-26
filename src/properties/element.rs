use super::props::*;
use crate::db::ElementSolid;
use crate::entity::Entity;
use crate::html::{div, Html};

pub fn display_element_solid(entity: &Entity, params: &ElementSolid) -> impl Html {
  div()
    .child(shc(params.shc))//.child(params.thermal_conductivity).store_state(&state)
}
