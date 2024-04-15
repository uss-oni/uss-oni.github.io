use super::*;

use std::cell::Cell;

pub struct NodeRef<T> {
  pub element: Cell<Option<T>>,
}

impl<T> NodeRef<T>
where
  T: Clone,
{
  pub fn new() -> Self {
    Self { element: Cell::new(None).into() }
  }

  pub fn initialized(&self) -> bool {
    let inner = self.element.take();
    let ret = inner.is_some();
    self.element.set(inner);
    ret
  }

  pub fn set(&self, t: T) {
    self.element.set(Some(t))
  }

  pub fn get(&self) -> Result<T, JsValue> {
    if let Some(inner) = self.element.take() {
      let ret = inner.clone();
      self.element.set(Some(inner));
      return Ok(ret);
    }
    Err(concat!(file!(), line!()).into())
  }
}
