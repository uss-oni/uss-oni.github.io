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

use node::Node;
use node::NodeText;
use node::Renderer;
use std::borrow::Cow;
use std::cell::RefCell;
use std::rc::Rc;

use choice::Choice;
use lang::Language;
use menu::Menu;
use units::{Degree, Time};
use wasm_bindgen::prelude::*;
use web_sys::{console, window, HtmlElement};

pub struct App {
  menu: Menu,
  language: Choice<&'static Language>,
  degree: Choice<Degree>,
  time: Choice<Time>,
  document: web_sys::Document,
  node: RefCell<Node>,
}

impl App {
  fn new(menu: Menu, language: Choice<&'static Language>, degree: Choice<Degree>, time: Choice<Time>) -> Self {
    let document = window().unwrap().document().unwrap();
    let body = document.body().unwrap().dyn_into::<HtmlElement>().unwrap();
    App {
      menu,
      language,
      degree,
      time,
      document,
      node: node::Node::from_element(body).into(),
    }
  }

  pub fn on_language_update(node: &Node, lang: &Language, degree: Degree, time: Time) {
   node.visit_text(&visitor_all(degree, time, lang));
  }

  pub fn on_degree_update(t: Degree) {
    console::log_1(&t.to_string().into());
  }

  pub fn on_time_update(t: Time) {
    console::log_1(&t.to_string().into());
  }
}

#[wasm_bindgen(start)]
fn main() -> Result<(), JsValue> {
  console_error_panic_hook::set_once();

  let language = Choice::new(&lang::LIST[0]);
  let degree = Choice::new(Degree::C);
  let time = Choice::new(Time::Second);
  let menu = menu::Menu::new();
  let app = Rc::new(App::new(menu, language, degree, time));
  render(&app)
}

fn render(app: &Rc<App>) -> Result<(), JsValue> {
  let html = std::rc::Rc::new(Renderer::new(app.document.clone()));
  let menu = app.menu.render(html.clone(), html.div_id("menu"), app.clone());
  let options = html
    .div_id("options")
    .child(app.degree.render(html.clone(), App::on_degree_update))
    .child(app.time.render(html.clone(), App::on_time_update))
    .child(app.language.render(html.clone(), {
      let app = app.clone();
      move |lang| App::on_language_update(&app.node.borrow(), lang, app.degree.value(), app.time.value())
    }));
  let body = node::Node::from_element(app.document.body().unwrap());

  *app.node.borrow_mut() = body.child(menu).child(options);
  app.node.borrow().visit_text(&visitor_all(app.degree.value(), app.time.value(), &app.language.value()));
  Ok(())
}

fn visitor_all(_degree: Degree, _time: Time, lang: &Language) -> impl Fn(&NodeText) -> Cow<str> + '_ {
  |text| match text {
    NodeText::Text(t) => lang.to_str(*t).into(),
    NodeText::Str(s) => (*s).into(),
  }
}
