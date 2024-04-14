use std::{cell::Cell, rc::Rc, str::FromStr};

use std::fmt::Debug;

use wasm_bindgen::JsCast;
use web_sys::HtmlSelectElement;

use crate::node::{Node, Renderer};

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
  pub fn render<U>(&self, html: std::rc::Rc<Renderer>, f: U) -> Node
  where
    U: Fn(T) + 'static,
    <T as FromStr>::Err: Debug,
  {
    let clone = self.choice.clone();
    html
      .select(T::name())
      .children(&T::choices(), |(value, name)| html.option(value).text(*name))
      .on_input(move |event: web_sys::Event| {
        let choice = &event.target().unwrap().dyn_into::<HtmlSelectElement>().unwrap().value();
        clone.set(choice.parse().unwrap());
        f(clone.get())
      })
  }
}
