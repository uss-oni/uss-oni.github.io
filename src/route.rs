use std::mem::forget;

use wasm_bindgen::prelude::*;

use crate::{entity, html::window, msg, properties::DisplayEntity};

#[derive(Clone, Copy)]
pub struct Router {
  //callback: Closure<dyn Fn(&'static str)>,
}

pub struct Route {
  tag: &'static str,
}

impl Route {
  pub fn new(tag: &'static str) -> Self {
    Self { tag }
  }
}

pub fn init() {
  let receiver = msg::Receiver::new((), add_to_history);
  forget(receiver);
}

// #category/subCategory/item
fn add_to_history(route: &Route, _: ()) {
  window()
    .history()
    .unwrap()
    .push_state_with_url(&JsValue::null(), "", Some(&("#".to_string() + &route.tag)))
    .unwrap();
}
