use std::cell::RefCell;
use std::cmp;

use web_sys::HtmlElement;

use super::document::ExtendHtml;
use crate::entity::{Entity, EntityImage};
use crate::icon::{self, Image};
use crate::lang::{self, Text};
use crate::units::*;

pub struct Line<'a> {
  container: &'a HtmlElement,
}

pub trait Value {
  fn set(&self, container: &HtmlElement);
}

impl Value for EntityImage {
  fn set(&self, container: &HtmlElement) {
    container.add_img(self).set_class_name("image");
  }
}

impl Value for f32 {
  fn set(&self, container: &HtmlElement) {
    container.add_text(&round_float(*self));
  }
}

impl Value for i32 {
  fn set(&self, container: &HtmlElement) {
    container.add_text(&self.to_string());
  }
}

impl Value for &str {
  fn set(&self, container: &HtmlElement) {
    container.add_text(self);
  }
}

impl Value for Text {
  fn set(&self, _container: &HtmlElement) {
    //container.add_text(self);
  }
}

impl Value for &Kg {
  fn set(&self, container: &HtmlElement) {
    container.add_text(&(round_float(self.0) + " kg"));
  }
}

impl Value for &Percent {
  fn set(&self, container: &HtmlElement) {
    container.add_text(&(round_float(self.0 * 100.0).to_string() + " %"));
  }
}

impl Value for &GramPerMole {
  fn set(&self, container: &HtmlElement) {
    container.add_text(&(round_float(self.0) + " g/mol"));
  }
}

impl Value for &Temperature {
  fn set(&self, _container: &HtmlElement) {
    // let degree = Options::degree();
    // container.add_text(&(round_float(degree.convert(self.0)) + " " + degree.to_string()));
  }
}

impl Value for &DtuPerGramPerDegree {
  fn set(&self, _container: &HtmlElement) {
    //  let degree = Options::degree();
    //  container.add_text(&(round_float(degree.convert_ratio(self.0)) + " (DTU/g)/" + degree.to_string()));
  }
}

impl Value for &DtuPerMetreSecondPerDegree {
  fn set(&self, _container: &HtmlElement) {
    // let degree = Options::degree();
    // container.add_text(&(round_float(degree.convert_ratio(self.0)) + " (DTU/(m.s))/" + degree.to_string()));
  }
}

impl Value for &Size {
  fn set(&self, container: &HtmlElement) {
    container.add_text(&(self.width.to_string() + " x " + &self.height.to_string()));
  }
}

fn round_float(f: f32) -> String {
  format!("{}", (f * 1000.0).round() / 1000.0)
}

impl Line<'_> {
  pub fn icon(&self, icon: &dyn Image) -> &Line {
    self.container.add_div(Some("propIcon")).add_img(icon);
    self
  }

  pub fn label(&self, text: Text) -> &Line {
   // let lang = App::get().language.value();
    let datas = text.tag();
    let t = self.container.add_div(Some("propLabel"));
   // t.set_inner_text(lang.to_str(text));
    t.dataset().set(datas.0, &datas.1.to_string()).unwrap();
    self
  }

  pub fn label_custom<F>(&self, func: F) -> &Line
  where
    F: for<'a> Fn(&'a Line) -> &'a Line<'a>,
  {
    let new_container = self.container.add_div(Some("propLabel"));
    let new_line = Line { container: &new_container };
    func(&new_line);
    self
  }
  pub fn labels<F>(&self, func: F) -> &Line
  where
    F: for<'a> Fn(&'a Line) -> &'a Line<'a>,
  {
    let new_container = self.container.add_div(Some("propLabel"));
    let new_line = Line { container: &new_container };
    func(&new_line);
    self
  }

  pub fn img(&self, class: &str, image: &dyn Image) -> &Line {
    self.container.add_img(image).set_class_name(class);
    self
  }

  pub fn foreach<T, Item, F>(&self, iterator: T, func: F) -> &Line
  where
    T: IntoIterator<Item = Item>,
    F: for<'a> Fn(&'a Line<'a>, &'a Item) -> &'a Line<'a>,
  {
    for item in iterator {
      func(self, &item);
    }
    self
  }

  pub fn value<T>(&self, class: &str, value: T) -> &Line
  where
    T: Value,
  {
    value.set(&self.container.add_div(Some(class)));
    self
  }

  pub fn value_align<T>(&self, class: &str, value: T, align: &RefCell<Align>) -> &Line
  where
    T: Value,
  {
    let container = self.container.add_div(Some(class));
    value.set(&container);
    align.borrow_mut().add(container.into());
    self
  }

  pub fn values<F>(&self, class: &str, func: F) -> &Line
  where
    F: for<'a> Fn(&'a Line) -> &'a Line<'a>,
  {
    let new_container = self.container.add_div(Some(class));
    let new_line = Line { container: &new_container };
    func(&new_line);
    self
  }

  pub fn value_filter<T>(&self, class: &str, value: T, filter: bool) -> &Line
  where
    T: Value,
  {
    if filter {
      value.set(&self.container.add_div(Some(class)));
    }
    self
  }

  pub fn new(container: &HtmlElement) -> Line {
    Line { container }
  }
}

pub fn simple_line<T>(container: &HtmlElement, icon: &dyn Image, label: Text, value: T)
where
  T: Value,
{
  Line::new(container).icon(icon).label(label).value("propValue", value);
}

pub fn display_shc(container: &HtmlElement, shc: &DtuPerGramPerDegree) {
  simple_line(container, &icon::HEATFLOW, lang::PROPERTY_SHC, shc);
}

pub fn display_thermal_conductivity(container: &HtmlElement, thermal_conductivity: &DtuPerMetreSecondPerDegree) {
  simple_line(container, &icon::HEATFLOW, lang::PROPERTY_THERMAL_CONDUCTIVITY, thermal_conductivity);
}

pub fn display_molar_mass(container: &HtmlElement, molar_mass: &GramPerMole) {
  simple_line(container, &icon::ATOM, lang::PROPERTY_MOLAR_MASS, molar_mass);
}

pub fn display_radiation_absorbption(container: &HtmlElement, radiation_absorption_factor: &Percent) {
  simple_line(container, &icon::RADIATION, lang::PROPERTY_RADIATION_ABSORPTION, radiation_absorption_factor);
}

pub fn display_light_absorbption(container: &HtmlElement, light_absorption_factor: &Percent) {
  simple_line(container, &icon::LIGHT, lang::PROPERTY_LIGHT_ABSORPTION, light_absorption_factor);
}

pub fn display_size(container: &HtmlElement, size: &Size) {
  simple_line(container, &icon::SIZE, lang::PROPERTY_SIZE, size);
}

pub fn display_mass(container: &HtmlElement, mass: &Kg) {
  simple_line(container, &icon::TODO, lang::PROPERTY_MASS, mass);
}

pub fn display_primary_element(container: &HtmlElement, entity: &'static Entity) {
  Line::new(container)
    .icon(&icon::TODO)
    .label(lang::PROPERTY_PRIMARY_ELEMENT)
    .values("propValues", |line| line.img("propValueImg", &entity.img()).value("propValue", entity.name()));
}

pub fn display_flood_threshold(container: &HtmlElement, threshold: &Option<Percent>) {
  if let Some(threshold) = threshold {
    simple_line(container, &icon::TODO, lang::PROPERTY_FLOOD_THRESHOLD, threshold);
  }
}

pub fn display_hp(container: &HtmlElement, hp: &Option<i32>, invincible: &Option<bool>) {
  if let Some(invincible) = invincible {
    if *invincible {
      simple_line(container, &icon::HP, lang::PROPERTY_HP, lang::VALUE_INVINCIBLE);
    }
  } else if let Some(hp) = hp {
    simple_line(container, &icon::HP, lang::PROPERTY_HP, *hp);
  }
}

pub fn display_gravity(container: &HtmlElement, gravity: Option<f32>) {
  if gravity.is_some() {
    simple_line(container, &icon::GRAVITY, lang::PROPERTY_GRAVITY_AFFECTED, "");
  }
}

pub fn display_hardness(container: &HtmlElement, hardness: f32) {
  let hardness_icon = if hardness < 50.0 {
    &icon::HARDNESS_0
  } else if hardness < 150.0 {
    &icon::HARDNESS_50
  } else if hardness < 200.0 {
    &icon::HARDNESS_150
  } else {
    &icon::HARDNESS_200
  };
  simple_line(container, hardness_icon, lang::PROPERTY_HARDNESS, hardness);
}

pub fn display_quality(container: &HtmlElement, quality: &i32) {
  Line::new(container)
    .icon(&icon::FOOD)
    .labels(|line| line.label(lang::PROPERTY_QUALITY).label(lang::PROPERTY_MORAL_BONUS))
    .values("propValue", |line| {
      line.value("propValue", *quality).value("propValue", [-1, 0, 1, 4, 8, 12, 16, 16][*quality as usize + 1])
    });
}

pub struct Align {
  list: Vec<HtmlElement>,
  counter: i32,
}

impl Align {
  pub fn new() -> RefCell<Align> {
    RefCell::new(Align { list: vec![], counter: 0 })
  }

  pub fn add(&mut self, element: HtmlElement) {
    let value = element.offset_width();
    self.counter = cmp::max(self.counter, value);
    self.list.push(element);
  }
}

impl Drop for Align {
  fn drop(&mut self) {
    for element in &self.list {
      element.set_width(self.counter);
    }
  }
}

#[derive(Clone)]
pub struct Line2 {
  container: HtmlElement,
  counter: i32,
}

impl Line2 {
  pub fn icons<const T: usize>(&self, icons: [&dyn Image; T]) -> &Line2 {
    for icon in icons {
      self.container.add_div(Some("icon")).add_img(icon);
    }
    self
  }

  pub fn icon(&self, icon: &dyn Image) -> &Line2 {
    self.container.add_div(Some("icon")).add_img(icon);
    self
  }

  pub fn label<const T: usize>(&self, values: [&dyn Value; T]) -> &Line2 {
    let label = self.container.add_div(Some("label"));
    for value in values {
      value.set(&label);
    }
    self
  }

  pub fn labels<F>(&self, func: F) -> &Line2
  where
    F: for<'a> Fn(&'a Line2) -> &Line2,
  {
    let new_container = self.container.add_div(Some("propLabel"));
    let new_line2 = Line2::new(&new_container);
    func(&new_line2);
    self
  }

  pub fn img(&self, image: &dyn Image) -> Line2 {
    self.container.add_img(image).set_class_name("image");
    self.inc()
  }

  pub fn foreach<T, Item, F, U>(&self, iterator: T, func: F) -> Line2
  where
    T: IntoIterator<Item = Item>,
    F: for<'a> Fn(Line2, &'a Item) -> U,
  {
    for item in iterator {
      let _ = func(self.clone(), &item);
    }
    self.clone()
  }

  pub fn value<T>(&self, value: T) -> Line2
  where
    T: Value,
  {
    value.set(&self.container.add_div(Some(&(String::from("g") + self.counter.to_string().as_str()))));
    self.inc()
  }

  pub fn value_align<T>(&self, value: T, align: &RefCell<Align>) -> Line2
  where
    T: Value,
  {
    let container = self.container.add_div(Some(&(String::from("g") + self.counter.to_string().as_str())));
    value.set(&container);
    align.borrow_mut().add(container.into());
    self.inc()
  }

  pub fn values<F, U>(&self, class: &str, func: F) -> &Line2
  where
    F: for<'a> Fn(&'a Line2) -> U,
  {
    let new_container = self.container.add_div(Some(class));
    let new_line = Line2::new(&new_container);
    func(&new_line);
    self
  }

  pub fn value_filter<T>(&self, value: T, filter: bool) -> Line2
  where
    T: Value,
  {
    if filter {
      value.set(&self.container.add_div(Some(&(String::from("g") + self.counter.to_string().as_str()))));
    }
    self.inc()
  }

  pub fn new(container: &HtmlElement) -> Line2 {
    Line2 {
      container: container.clone(),
      counter: 1,
    }
  }

  pub fn inc(&self) -> Line2 {
    Line2 {
      container: self.container.clone(),
      counter: self.counter + 1,
    }
  }
}
