use std::{cell::Cell, rc::Rc, str::FromStr};

use std::fmt::Debug;

use wasm_bindgen::{JsCast, JsValue};
use web_sys::HtmlSelectElement;

use crate::node::{Html, Node};

pub struct Choice<T> {
  choice: Rc<Cell<T>>,
}

pub trait Choices {
  fn choices() -> Vec<(&'static str, &'static str)>;
  fn name() -> &'static str;
}

impl<T> Choice<T>
where
  T: FromStr + 'static + Copy + Choices,
  <T as FromStr>::Err: Debug,
{
  pub fn new(choice: T) -> Self {
    Self { choice: Rc::new(choice.into()) }
  }

  pub fn value(&self) -> T {
    self.choice.get()
  }
}

impl<T> Choice<T>
where
  T: Choices + std::str::FromStr + Copy + 'static,
{
  pub fn render<'a, U>(&'a self, html: &'a Html<'a>, f: U) -> Result<Node<'a>, JsValue>
  where
    U: Fn() + 'static,
    <T as FromStr>::Err: Debug,
    wasm_bindgen::JsValue: From<<T as FromStr>::Err>
  {
    let clone = self.choice.clone();
    Ok(
      html
        .select(T::name())?
        .children(&T::choices(), |(value, name)| Ok(html.option(value)?.text(*name)?))?
        .on_input(move |event: web_sys::Event| {
          let choice = &event.target().ok_or(concat!(file!(), line!()))?.dyn_into::<HtmlSelectElement>()?.value();
          clone.set(choice.parse()?);
          Ok(f())
        }),
    )
  }
}
