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

impl Time {
  pub fn from_str(s: &str) -> Time {
    match s {
      "second" => Time::Second,
      "cycle" => Time::Cycle,
      _ => unreachable!(),
    }
  }

  pub fn convert(self: &Self, time: f32) -> f32 {
    match self {
        Time::Second => time,
        Time::Cycle => time / 600.0,
    }
  }

  pub fn to_string(self: &Self) -> &str {
    match self {
        Time::Second => "s",
        Time::Cycle => " peuchies",
    }
  }
}


impl Degree {
  pub fn from_str(s: &str) -> Degree {
    match s {
      "C" => Degree::C,
      "K" => Degree::K,
      "F" => Degree::F,
      _ => unreachable!(),
    }
  }

  pub fn convert(self: &Self, deg: f32) -> f32 {
    match self {
      Degree::C => deg - 273.15,
      Degree::K => deg,
      Degree::F => (deg - 273.15) * 9.0 / 5.0 + 32.0,
    }
  }

  pub fn convert_ratio(self: &Self, deg: f32) -> f32 {
    match self {
      Degree::C => deg,
      Degree::K => deg,
      Degree::F => deg / 9.0 * 5.0,
    }
  }

  pub fn to_string(self: &Self) -> &str {
    match self {
      Degree::C => "°C",
      Degree::K => "K",
      Degree::F => "°F",
    }
  }
}
