pub mod category;
pub mod choice;
pub mod db;
pub mod dlc;
pub mod entity;
pub mod html;
pub mod html2;
pub mod icon;
pub mod lang;
pub mod menu;
pub mod nodeuu;
pub mod text_node;
pub mod units;

use html::body;
use html::div;
use html::Body;
use nodeuu::NodeText;
use nodeuu::State;
use nodeuu::TextElement;
use std::borrow::Cow;
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
  options: Rc<Options>,
  document: web_sys::Document,
}

impl App {
  fn new(menu: Menu, options: Rc<Options>) -> Result<Self, JsValue> {
    let document = window().ok_or(concat!(file!(), line!()))?.document().ok_or(concat!(file!(), line!()))?;
    Ok(App { menu, options, document })
  }

  pub fn on_language_update(node: &[TextElement], options: &Options) {
    //node.visit_text(&visitor_all(degree, time, lang));
  }

  pub fn on_degree_update(node: &[TextElement], options: &Options) {}

  pub fn on_time_update(node: &[TextElement], options: &Options) {}
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
  //  let menu = app.menu.render(&html, html.div_id("menu")?, app.clone())?;
  let body: Body = body().into();
  let body = body.child(
    div()
      .class("options")
      .child(&options.degree)
      .child(&options.time)
      .child(&options.language)
  );
  
  //let body = nodeuu::Node::from_element(&html, app.document.body().ok_or(concat!(file!(), line!()))?);

  let body = body.child(app.menu.render()); //.child(options_div);

  visit_all(&state, &options);
  std::mem::forget(Box::new(app.clone()));
  Ok(())
}
