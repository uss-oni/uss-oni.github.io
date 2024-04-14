use crate::{
  lang::{self, Text},
  units::*,
};
use std::{borrow::Cow};

enum TextUpdatable {
  Float(f32),
  Int(i32),
  Kg(f32),
  Text(Text),
  Temperature(f32),
  DtuPerMetreSecondPerDegree(f32),
  DtuPerGramPerDegree(f32),
  Duration(f32),
  GramPerMole(f32),
  Size(Size),
  Percent(f32),
}

impl TextUpdatable {
  fn to_str<'a>(&self, lang: &lang::Language, degree: Degree, time: Time) -> Cow<'a, str> {
    match *self {
      TextUpdatable::Float(f) => round_float(f).into(),
      TextUpdatable::Text(text) => lang.to_str(text).into(),
      TextUpdatable::Int(i) => i.to_string().into(),
      TextUpdatable::Kg(kg) => (round_float(kg) + " kg").into(),
      TextUpdatable::Temperature(temp) => (round_float(degree.convert(temp)) + " " + degree.to_string()).into(),
      TextUpdatable::DtuPerMetreSecondPerDegree(temp) => (round_float(degree.convert_ratio(temp)) + " (DTU/(m.s))/" + degree.to_string()).into(),
      TextUpdatable::DtuPerGramPerDegree(temp) => (round_float(degree.convert_ratio(temp)) + " (DTU/g)/" + degree.to_string()).into(),
      TextUpdatable::Duration(duration) => (round_float(time.convert(duration)) + " " + time.to_string()).into(),
      TextUpdatable::GramPerMole(gpm) => (round_float(gpm) + " g/mol").into(),
      TextUpdatable::Size(size) => (size.width.to_string() + " x " + &size.height.to_string()).into(),
      TextUpdatable::Percent(percent) => (round_float(percent * 100.0) + " %").into(),
    }
  }
}

struct TextNode {
  node: web_sys::Text,
  value: TextUpdatable,
}

impl TextNode {
  pub fn update_game(&self, lang: &lang::Language, degree: Degree, time: Time) {
    match self.value {
      TextUpdatable::Text(_) => self.node.set_text_content(Some(&self.value.to_str(lang, degree, time))),
      _ => (),
    }
  }

  pub fn update_ui(&self, lang: &lang::Language, degree: Degree, time: Time) {
    match self.value {
      TextUpdatable::Text(_) => self.node.set_text_content(Some(&self.value.to_str(lang, degree, time))),
      _ => (),
    }
  }

  pub fn update_degree(&self, lang: &lang::Language, degree: Degree, time: Time) {
    match self.value {
      TextUpdatable::Temperature(_) => self.node.set_text_content(Some(&self.value.to_str(lang, degree, time))),
      TextUpdatable::DtuPerGramPerDegree(_) => self.node.set_text_content(Some(&self.value.to_str(lang, degree, time))),
      TextUpdatable::DtuPerMetreSecondPerDegree(_) => self.node.set_text_content(Some(&self.value.to_str(lang, degree, time))),
      _ => (),
    }
  }

  pub fn update_time(&self, lang: &lang::Language, degree: Degree, time: Time) {
    match self.value {
      TextUpdatable::Duration(_) => self.node.set_text_content(Some(&self.value.to_str(lang, degree, time))),
      _ => (),
    }
  }

  pub fn new(node: web_sys::Text, value: TextUpdatable) {}
}

fn round_float(f: f32) -> String {
  format!("{}", (f * 1000.0).round() / 1000.0)
}
