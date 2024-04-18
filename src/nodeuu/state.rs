use super::*;

use std::cell::Cell;

use wasm_bindgen::closure::Closure;

pub struct State {
  pub closures: Cell<Vec<Closure<dyn Fn(web_sys::Event) -> Result<(), JsValue>>>>,
  pub texts: Cell<Vec<TextElement>>,
}

impl State {
  pub fn new() -> Self {
    Self {
      closures: vec![].into(),
      texts: vec![].into(),
    }
  }

  pub(super) fn add_closure(&self, closure: Closure<dyn Fn(web_sys::Event) -> Result<(), JsValue>>) {
    let mut vec = self.closures.take();
    vec.push(closure);
    self.closures.set(vec);
  }

  pub(super) fn add_text(&self, text: TextElement) {
    let mut vec = self.texts.take();
    vec.push(text);
    self.texts.set(vec);
  }
}
