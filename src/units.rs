use std::{str::FromStr};

use crate::choice::Choices;

#[derive(Clone, Copy)]
pub struct Size {
  pub width: i32,
  pub height: i32,
}

pub struct Decor {
  pub value: i32,
  pub radius: i32,
}

pub struct Temperature(pub f32);
pub struct Kg(pub f32);
pub struct DtuPerMetreSecondPerDegree(pub f32);

#[derive(Clone, Copy)]
pub struct Percent(pub f32);
pub struct DtuPerGramPerDegree(pub f32);
pub struct GramPerMole(pub f32);
pub struct Duration(pub f32);

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

impl Choices for Time {
  fn choices() -> Vec<(&'static str, &'static str)> {
    vec![("second", "Seconde"), ("cycle", "Cycle")]
  }

  fn name() -> &'static str {
    "Time"
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

impl Choices for Degree {
  fn choices() -> Vec<(&'static str, &'static str)> {
    vec![("C", "°C"), ("K", "K"), ("F", "°F")]
  }

  fn name() -> &'static str {
    "Degree"
  }
}

impl Time {
  pub fn convert(&self, time: f32) -> f32 {
    match self {
      Time::Second => time,
      Time::Cycle => time / 600.0,
    }
  }

  pub fn to_string(&self) -> &str {
    match self {
      Time::Second => "s",
      Time::Cycle => " peuchies",
    }
  }
}

impl Degree {
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
