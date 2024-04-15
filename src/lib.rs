pub mod category;
pub mod choice;
pub mod db;
pub mod dlc;
pub mod entity;
pub mod html;
pub mod icon;
pub mod lang;
pub mod menu;
pub mod node;
pub mod text_node;
pub mod units;

use node::NodeText;
use node::Html;
use node::State;
use node::TextElement;
use std::borrow::Cow;
use std::rc::Rc;

use choice::Choice;
use lang::Language;
use menu::Menu;
use units::{Degree, Time};
use wasm_bindgen::prelude::*;
use web_sys::{console, window};

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
  options: Rc<Options>,
  document: web_sys::Document,
}

impl App {
  fn new(menu: Menu, options: Rc<Options>) -> Result<Self, JsValue> {
    let document = window().ok_or(concat!(file!(), line!()))?.document().ok_or(concat!(file!(), line!()))?;
    Ok(App {
      menu,
      options,
      document,
    })
  }

  pub fn on_language_update(node: &[TextElement], options: &Options) {
    //node.visit_text(&visitor_all(degree, time, lang));
  }

  pub fn on_degree_update(node: &[TextElement], options: &Options) {

  }

  pub fn on_time_update(node: &[TextElement], options: &Options) {

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

fn writer(text: &NodeText, options: &Options) -> Cow<'static, str> {
  match text {
    NodeText::Text(t) => options.language.value().to_str(*t).into(),
    NodeText::Str(s) => (*s).into(),
  }
}

fn visit_all(state: &Rc<State>, options: &Options) {
  let nodes = state.texts.take();
  for node in &nodes {
    node.element.set_data(&writer(&node.text, options));
  }
  state.texts.set(nodes);
}

fn render(app: Rc<App>, options: Rc<Options>) -> Result<(), JsValue> {
  let state = Rc::new(State::new());
  let write = {
    let options = options.clone();
    move |text: &_| writer(text, &options)
  };
  let html = Rc::new(Html::new(
    app.document.clone(),
    &write,
    &state,
  ));
  let menu = app.menu.render(&html, html.div_id("menu")?, app.clone())?;
  let options_div = html
    .div_id("options")?
    .child(options.degree.render(&html, {
      let state = state.clone();
      let options = options.clone();
      move || visit_all(&state, &options)
    })?)
    .child(options.time.render(&html, {
      let state = state.clone();
      let options = options.clone();
      move || visit_all(&state, &options)
    })?)
    .child(options.language.render(&html, {
      let state = state.clone();
      let options = options.clone();
      move || visit_all(&state, &options)
    })?);
  let body = node::Node::from_element(&html, app.document.body().ok_or(concat!(file!(), line!()))?);

  body.child(menu).child(options_div);
  visit_all(&state, &options);
  Ok(())
}