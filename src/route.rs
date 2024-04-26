use std::mem::forget;
use std::rc::Rc;

use wasm_bindgen::prelude::*;

use crate::html::window;
use crate::msg::{self, send};
use crate::properties::DisplayEntity;
use crate::App;

pub struct Route {
  tag: &'static str,
}

impl Route {
  pub fn new(tag: &'static str) -> Self {
    Self { tag }
  }
}

fn pop(app: &Rc<App>) {
  if let Ok(hash) = window().location().hash() {
    let hash = &hash[1..];
    if let Some(entity) = app.menu.get_entity(&hash) {
      send(DisplayEntity { entity });
    }
  }
}

pub fn init(app: Rc<App>) {
  pop(&app);
  let closure = Closure::<dyn Fn() -> ()>::new(move || pop(&app));
  window().set_onpopstate(Some(closure.as_ref().unchecked_ref()));
  let receiver = msg::Receiver::register((), add_to_history);
  forget(receiver);
  forget(closure);
}

fn add_to_history(route: &Route, _: ()) {
  window()
    .history()
    .unwrap()
    .push_state_with_url(&JsValue::null(), "", Some(&("#".to_string() + route.tag)))
    .unwrap();
}
