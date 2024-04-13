use std::{cell::Cell, rc::Rc, str::FromStr};

use std::fmt::Debug;
use wasm_bindgen::closure::Closure;
use wasm_bindgen::convert::IntoWasmAbi;
use wasm_bindgen::JsCast;
use web_sys::{console, HtmlSelectElement};

use crate::html::{node, Render};

pub struct Choice<T> {
  choice: Rc<Cell<T>>,
  html_closure: Closure<dyn Fn(web_sys::Event)>,
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
  pub fn new<F>(choice: T, f: F) -> Self
  where
    F: Fn(T) -> () + 'static,
  {
    let choice: Rc<Cell<T>> = Rc::new(choice.into());
    let clone = choice.clone();
    let html_closure = Closure::<dyn Fn(web_sys::Event)>::new(move |event: web_sys::Event| {
      let choice = &event.target().unwrap().dyn_into::<HtmlSelectElement>().unwrap().value();
      clone.set(choice.parse().unwrap());
      f(clone.get())
    });
    Self { choice, html_closure }
  }

  pub fn value(&self) -> T {
    self.choice.get()
  }
}

impl<T> Render for Choice<T>
where
  T: Choices,
{
  fn render(&self, div: &node::Div) {
    let select = div.add_select().class(T::name());
    for (value, name) in T::choices() {
      select.add_option(value, name);
    }
    select.set_oninput(Some(self.html_closure.as_ref().unchecked_ref()));
  }
}
