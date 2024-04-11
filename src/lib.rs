pub mod category;
pub mod db;
pub mod dlc;
pub mod html;
pub mod lang;
pub mod units;
pub mod entity;
pub mod icon;

use std::sync::Mutex;

use html::{display_properties, document, CURRENT_ENTITY};
use units::{Degree, Time};
use wasm_bindgen::prelude::*;
use web_sys::{HtmlDivElement, HtmlSelectElement};

struct Options {
  language: &'static lang::Language,
  degree: Degree,
  time: Time,
}

impl Options {
  fn language() -> &'static lang::Language {
    OPTIONS.lock().unwrap().language
  }

  fn set_language(language: &'static lang::Language) {
    let _ = document::body().set_attribute("lang", language.name);
    OPTIONS.lock().unwrap().language = language;
  }

  fn degree() -> Degree {
    OPTIONS.lock().unwrap().degree
  }

  fn set_degree(deg: Degree) {
    OPTIONS.lock().unwrap().degree = deg;
  }

  fn time() -> Time {
    OPTIONS.lock().unwrap().time
  }

  fn set_time(t: Time) {
    OPTIONS.lock().unwrap().time = t;
  }
}

static OPTIONS: Mutex<Options> = Mutex::new(Options {
  language: &lang::LIST[0],
  degree: Degree::C,
  time: Time::Second,
});

#[wasm_bindgen(start)]
fn main() -> Result<(), JsValue> {
  let langages: HtmlSelectElement = document::get_element("selectTranslation");
  Options::set_language(get_language_from_select(&langages));
  let langage_closure = Closure::<dyn Fn(web_sys::Event)>::new(move |event: web_sys::Event| {
    let language = get_language_from_select(&event.target().unwrap().dyn_into::<HtmlSelectElement>().unwrap());
    Options::set_language(language);
    let categories: HtmlSelectElement = document::get_element("selectCategory");
    let list: HtmlDivElement = document::get_element("list");
    change_category(&list, categories.value().as_str());
    unsafe {
      if let Some(entity) = CURRENT_ENTITY {
        display_properties(entity);
      }
    }
  });
  langages.set_onchange(Some(langage_closure.as_ref().unchecked_ref()));
  langage_closure.forget(); // Should be unique, no problem, trust me

  let degrees: HtmlSelectElement = document::get_element("selectDegree");
  Options::set_degree(Degree::from_str(&degrees.value()));
  let degree_closure = Closure::<dyn Fn(web_sys::Event)>::new(move |event: web_sys::Event| {
    let degree = Degree::from_str(&event.target().unwrap().dyn_into::<HtmlSelectElement>().unwrap().value());
    Options::set_degree(degree);
    unsafe {
      if let Some(entity) = CURRENT_ENTITY {
        display_properties(entity);
      }
    }
  });
  degrees.set_onchange(Some(degree_closure.as_ref().unchecked_ref()));
  degree_closure.forget(); // Oups, I did it again

  let times: HtmlSelectElement = document::get_element("selectTime");
  Options::set_time(Time::from_str(&times.value()));
  let time_closure = Closure::<dyn Fn(web_sys::Event)>::new(move |event: web_sys::Event| {
    let time = Time::from_str(&event.target().unwrap().dyn_into::<HtmlSelectElement>().unwrap().value());
    Options::set_time(time);
    unsafe {
      if let Some(entity) = CURRENT_ENTITY {
        display_properties(entity);
      }
    }
  });
  times.set_onchange(Some(time_closure.as_ref().unchecked_ref()));
  time_closure.forget(); // ...

  let categories: HtmlSelectElement = document::get_element("selectCategory");
  let list: HtmlDivElement = document::get_element("list");
  change_category(&list, categories.value().as_str());
  let category_closure = Closure::<dyn Fn(web_sys::Event)>::new(move |event: web_sys::Event| {
    change_category(&list, event.target().unwrap().dyn_into::<HtmlSelectElement>().unwrap().value().as_str());
  });
  categories.set_onchange(Some(category_closure.as_ref().unchecked_ref()));
  category_closure.forget(); // Really ?

  Ok(())
}

fn get_language_from_select<'a, 'b>(select: &'a HtmlSelectElement) -> &'b lang::Language {
  match lang::LIST.iter().find(|l| l.name == select.value().as_str()) {
    Some(language) => language,
    None => panic!("Keuwa ?"),
  }
}

fn change_category(list: &HtmlDivElement, cat: &str) {
  list.replace_children_with_node_0();
  match cat {
    "Element" => category::element.create_html(&list),
    "Building" => category::building.create_html(&list),
    "Food" => category::food.create_html(&list),
    "Critter" => category::critter.create_html(&list),
    "Plant" => category::plant.create_html(&list),
    "Geyser" => category::geyser.create_html(&list),
    "Space" => category::space.create_html(&list),
    "Equipment" => category::equipment.create_html(&list),
    "Artifact" => category::artifact.create_html(&list),
    "Misc" => category::misc.create_html(&list),
    _ => unreachable!(),
  }
}
