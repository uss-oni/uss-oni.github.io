use std::cell::Cell;
use std::str::FromStr;

use crate::html::{div, option, select, HtmlRender, Input, Node};
use crate::lang::{
  Language, {self},
};
use crate::msg::send;
use crate::text;

thread_local! {
  static OPTIONS: Cell<Options> = Options::new().into();
}

pub fn options() -> Options {
  OPTIONS.with(|o| o.get())
}

fn options_with_mut<F: Fn(&mut Options)>(f: F) {
  OPTIONS.with(|o| {
    let mut opt = o.get();
    f(&mut opt);
    o.set(opt);
  })
}

#[derive(Clone, Copy)]
pub struct Options {
  pub language: Language,
  pub degree: Degree,
  pub time: Time,
  pub dlc: Dlc,
}

impl Options {
  fn new() -> Self {
    Self {
      language: lang::LIST[0],
      degree: Degree::C,
      time: Time::Cycle,
      dlc: Dlc { _space_out: true },
    }
  }
}

pub struct LanguageChange {
  pub language: lang::Language,
}

pub struct DegreeChange {
  pub degree: Degree,
}

pub struct RenderOptions {}

impl RenderOptions {}

impl HtmlRender for RenderOptions {
  fn render(&self) -> Node {
    let children: Vec<_> = lang::LIST
      .iter()
      .map(|l| {
        option()
          .set_value(l.name)
          .child(&text::StaticText::new(l.flag))
      })
      .collect();
    let language = select().children(children).on_event(|_: Input, target| {
      options_with_mut(|options| options.language = target.value().parse().unwrap());
      send(LanguageChange {
        language: options().language,
      });
    });

    let children: Vec<_> = Degree::choices()
      .iter()
      .map(|d| {
        option()
          .set_value(d.0)
          .child(&text::StaticText::new(d.1))
      })
      .collect();
    let degree = select().children(children).on_event(|_: Input, target| {
      options_with_mut(|options| options.degree = target.value().parse().unwrap());
      send(DegreeChange {
        degree: options().degree,
      });
    });

    let children: Vec<_> = Time::choices()
      .iter()
      .map(|t| {
        option()
          .set_value(t.0)
          .child(&text::StaticText::new(t.1))
      })
      .collect();
    let time = select().children(children);

    let state = None.into();
    let div = div()
      .id("options")
      .child(language)
      .child(degree)
      .child(time)
      .store_state(&state);
    std::mem::forget(state);
    div.into()
  }
}

#[derive(Clone, Copy)]
pub struct Dlc {
  _space_out: bool,
}

#[derive(Clone, Copy)]
pub enum Degree {
  C,
  K,
  F,
}

#[derive(Clone, Copy)]
pub enum Time {
  Second,
  Cycle,
}

impl FromStr for Time {
  type Err = &'static str;

  fn from_str(s: &str) -> Result<Self, Self::Err> {
    match s {
      "second" => Ok(Time::Second),
      "cycle" => Ok(Time::Cycle),
      _ => unreachable!(),
    }
  }
}

impl FromStr for Degree {
  type Err = &'static str;

  fn from_str(s: &str) -> Result<Self, Self::Err> {
    match s {
      "C" => Ok(Degree::C),
      "K" => Ok(Degree::K),
      "F" => Ok(Degree::F),
      _ => unreachable!(),
    }
  }
}

impl Time {
  fn choices() -> Vec<(&'static str, &'static str)> {
    vec![("second", "Seconde"), ("cycle", "Cycle")]
  }

  pub fn _convert(self, time: f32) -> f32 {
    match self {
      Time::Second => time,
      Time::Cycle => time / 600.0,
    }
  }

  pub fn _to_string(self) -> &'static str {
    match self {
      Time::Second => "s",
      Time::Cycle => " peuchies",
    }
  }
}

impl Degree {
  fn choices() -> Vec<(&'static str, &'static str)> {
    vec![("C", "°C"), ("K", "K"), ("F", "°F")]
  }

  pub fn convert(self, deg: f32) -> f32 {
    match self {
      Degree::C => deg - 273.15,
      Degree::K => deg,
      Degree::F => (deg - 273.15) * 9.0 / 5.0 + 32.0,
    }
  }

  pub fn convert_ratio(self, deg: f32) -> f32 {
    match self {
      Degree::C => deg,
      Degree::K => deg,
      Degree::F => deg / 9.0 * 5.0,
    }
  }

  pub fn to_string(self) -> &'static str {
    match self {
      Degree::C => "°C",
      Degree::K => "K",
      Degree::F => "°F",
    }
  }
}
