pub mod category;
pub mod choice;
pub mod css;
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
use node::Renderer;
use std::cell::OnceCell;
use std::cell::RefCell;
use std::rc::Rc;

use choice::Choice;
use html::{node::get_element_by_id, Render};
use lang::{Language, Text};
use menu::Menu;
use units::{Degree, Time};
use wasm_bindgen::prelude::*;
use web_sys::{console, window, HtmlDivElement, HtmlElement};

struct App {
  menu: Menu,
  language: Choice<&'static Language>,
  degree: Choice<Degree>,
  time: Choice<Time>,
  document: web_sys::Document,
  node: RefCell<Option<Node>>,
}

impl App {
  thread_local! {
    static INSTANCE: OnceCell<Rc<App>> = OnceCell::new();
  }

  fn init(menu: Menu, language: Choice<&'static Language>, degree: Choice<Degree>, time: Choice<Time>) -> () {
    Self::INSTANCE.with(|rc| {
      let app = App {
        menu,
        language,
        degree,
        time,
        document: window().unwrap().document().unwrap(),
        node: None.into(),
      };
      let _ = rc.set(app.into());
    });
  }

  fn get() -> Rc<App> {
    Self::INSTANCE.with(|app| app.get().unwrap().clone())
  }

  pub fn set_node(node: Node) {
    Self::INSTANCE.with(|app| {
      let mut n = app.get().unwrap().node.borrow_mut();
      if n.is_none() {
        console::log_1(&"data_1".into());
        *n = Some(node);
      }
    });
  }

  pub fn on_language_update(lang: &Language) {
    let app = App::get();
    let document = &app.document;
    let list = document.query_selector_all("[data-ui]").unwrap();
    for i in 0..list.length() {
      let item = list.item(i).unwrap();
      let text = Text::get("ui", item.dyn_ref::<HtmlElement>().unwrap().dataset().get("ui").unwrap().parse().unwrap());
      item.set_text_content(Some(lang.to_str(text)));
    }
    let list = document.query_selector_all("[data-game]").unwrap();
    for i in 0..list.length() {
      let item = list.item(i).unwrap();
      let text = Text::get("game", item.dyn_ref::<HtmlElement>().unwrap().dataset().get("game").unwrap().parse().unwrap());
      item.set_text_content(Some(lang.to_str(text)));
    }
    let list = document.query_selector_all("[data-desc]").unwrap();
    for i in 0..list.length() {
      let item = list.item(i).unwrap().dyn_into::<HtmlDivElement>().unwrap();
      let text = Text::get("desc", item.dyn_ref::<HtmlElement>().unwrap().dataset().get("desc").unwrap().parse().unwrap());
      item.replace_children_with_node_0();
      let div: HtmlDivElement = document.create_element("div").unwrap().dyn_into().unwrap();
      let _ = item.append_child(&div);
      div.set_outer_html(lang.to_str(text));
    }
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
  console::log_1(&"Loading".into());

  let language = Choice::new(&lang::LIST[0], App::on_language_update);
  let degree = Choice::new(Degree::C, App::on_degree_update);
  let time = Choice::new(Time::Second, App::on_time_update);
  let menu = menu::Menu::new();
  App::init(menu, language, degree, time);
  render();
  Ok(())
}

fn render() {
  let app = App::get();
  let options = get_element_by_id(&app.document, "options");
  app.degree.render(&options);
  app.time.render(&options);
  app.language.render(&options);
  //let menu = get_element_by_id(&app.document, "menu");
  let node = node::Node::from_element(&app.document.get_element_by_id("menu").unwrap().dyn_into().unwrap());
  let renderer = std::rc::Rc::new(Renderer { document: app.document.clone() });
  App::set_node(app.menu.render(renderer, node));
  console::log_1(&App::get().node.borrow().as_ref().unwrap().nodes.len().to_string().into());
}
