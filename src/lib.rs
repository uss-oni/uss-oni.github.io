pub mod category;
pub mod choice;
pub mod db;
pub mod dlc;
pub mod entity;
pub mod html;
pub mod icon;
pub mod lang;
pub mod menu;
pub mod text_node;
pub mod units;

use html::body;
use html::div;
use html::Body;
use std::rc::Rc;

use choice::Choice;
use lang::Language;
use menu::Menu;
use units::{Degree, Time};
use wasm_bindgen::prelude::*;
use web_sys::window;

pub struct Options {
  language: Choice<&'static Language>,
  degree: Choice<Degree>,
  time: Choice<Time>,
}

impl Options {
  pub fn new(language: Choice<&'static Language>, degree: Choice<Degree>, time: Choice<Time>) -> Self {
    Self { language, degree, time }
  }
}

pub struct App {
  menu: Menu,
  _options: Rc<Options>,
  _document: web_sys::Document,
}

impl App {
  fn new(menu: Menu, options: Rc<Options>) -> Result<Self, JsValue> {
    let document = window().ok_or(concat!(file!(), line!()))?.document().ok_or(concat!(file!(), line!()))?;
    Ok(App { menu, _options: options, _document: document })
  }
}

#[wasm_bindgen(start)]
fn main() -> Result<(), JsValue> {
  console_error_panic_hook::set_once();

  let language = Choice::new(&lang::LIST[0]);
  let degree = Choice::new(Degree::C);
  let time = Choice::new(Time::Second);
  let menu = menu::Menu::new();
  let options = Rc::new(Options::new(language, degree, time));
  let app = Rc::new(App::new(menu, options.clone())?);
  render(app, options)
}

fn render(app: Rc<App>, options: Rc<Options>) -> Result<(), JsValue> {
  let body: Body = body().into();
  let body = body.child(
    div()
      .class("options")
      .child(&options.degree)
      .child(&options.time)
      .child(&options.language)
  );
  let _body = body.child(app.menu.render()); //.child(options_div);

  std::mem::forget(Box::new(app.clone()));
  Ok(())
}
