pub mod category;
pub mod db;
pub mod entity;
pub mod html;
pub mod icon;
pub mod lang;
pub mod menu;
pub mod msg;
mod options;
pub mod properties;
pub mod route;
pub mod text;
pub mod text_node;
pub mod units;

use std::rc::Rc;

use html::{body, Body};
use menu::Menu;
use properties::Properties;
use wasm_bindgen::prelude::*;

pub struct App {
  menu: Menu,
  properties: Properties,
  _document: web_sys::Document,
}

impl App {
  fn new(menu: Menu, properties: Properties) -> Self {
    let document = html::document();
    App {
      menu,
      properties,
      _document: document,
    }
  }
}

#[wasm_bindgen(start)]
fn main() -> Result<(), JsValue> {
  console_error_panic_hook::set_once();

  let menu = menu::Menu::new();
  let properties = properties::Properties::new();
  let app = Rc::new(App::new(menu, properties));
  render(app.clone());
  route::init(app.clone());
  std::mem::forget(app);
  Ok(())
}

fn render(app: Rc<App>) {
  let body: Body = body().into();
  let body = body.child(&options::RenderOptions {});
  let body = body.child(&app.properties);
  let _body = body.child(&app.menu);
}
