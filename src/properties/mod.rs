use std::rc::Rc;

use crate::{
  entity::Entity,
  html::{div, Div, HtmlState, Render}, text::GameText,
};

pub struct DisplayEntity {
  pub entity: &'static Entity,
}

#[derive(Default)]
pub struct Properties {
  div_state: HtmlState,
  entity_state: Rc<HtmlState>
}

impl Properties {
  pub fn new() -> Self {
    Self { ..Default::default() }
  }

  pub fn render(&self) -> Div {
    let state = self.entity_state.clone();
    let ret = div()
      .id("properties")
      .on_msg(move |entity: &DisplayEntity, div| {
        div.replace_children_with_node_0();
        div.child(&GameText::new(entity.entity.name)).store_state(&state);
      })
      .store_state(&self.div_state);
    ret
  }
}
