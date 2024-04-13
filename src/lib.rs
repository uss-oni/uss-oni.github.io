pub mod category;
pub mod choice;
pub mod db;
pub mod dlc;
pub mod entity;
pub mod html;
pub mod icon;
pub mod lang;
pub mod menu;
pub mod units;

use std::cell::OnceCell;
use std::rc::Rc;

use choice::Choice;
use html::{document, node::get_element_by_id, Render};
use lang::{Language, Text};
use menu::Menu;
use units::{Degree, Time};
use wasm_bindgen::prelude::*;
use web_sys::{console, window, HtmlDivElement, HtmlElement, HtmlParagraphElement};

struct App {
  menu: Menu,
  language: Choice<&'static Language>,
  degree: Choice<Degree>,
  time: Choice<Time>,
  document: web_sys::Document,
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
      };
      let _ = rc.set(app.into());
    });
  }

  fn get() -> Rc<App> {
    Self::INSTANCE.with(|app| app.get().unwrap().clone())
  }

  pub fn on_language_update(lang: &Language) {
    let document = &App::get().document;
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
  let menu = get_element_by_id(&app.document, "menu");
  app.menu.render(&menu);
}
