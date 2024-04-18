use std::{cell::Cell, rc::Rc, str::FromStr};

use crate::html::{option, select, HtmlState, Input, Render, Select};

pub struct Choice<T> {
  choice: Rc<Cell<T>>,
  state: HtmlState
}

pub trait Choices {
  fn choices() -> Vec<(&'static str, &'static str)>;
  fn name() -> &'static str;
}

impl<T> Choice<T>
where
  T: FromStr + 'static + Copy + Choices
{
  pub fn new(choice: T) -> Self {
    Self {
      choice: Rc::new(choice.into()),
      state: Default::default()
    }
  }

  pub fn value(&self) -> T {
    self.choice.get()
  }
}

impl<T> Render for &Choice<T>
where
  T: Choices,
{
  type Node = Select;

  fn render(self) -> Self::Node {
    let choices:Vec<_> = T::choices().iter().map(|(value, _name)| {
      option().set_value(value).text()}).collect();
    select()
      .children(choices)
      .on_event(|_: Input, _target| {
        //let choice = target.value();
        //clone.set(choice.parse().unwrap_throw());
        //send(choice);
      })
      .store_state(&self.state)
  }
}
