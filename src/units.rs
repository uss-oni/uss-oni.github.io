use crate::{html::{self, Html, HtmlRender}, options::{options, Degree, DegreeChange}};

#[derive(Clone, Copy)]
pub struct Size {
  pub width: i32,
  pub height: i32,
}

pub struct Decor {
  pub value: i32,
  pub radius: i32,
}

pub struct Kg(pub f32);

#[derive(Clone, Copy, Default)]
pub struct Percent(pub f32);
#[derive(Clone, Copy, Default)]
pub struct GramPerMole(pub f32);
#[derive(Clone, Copy, Default)]
pub struct Duration(pub f32);


#[derive(Clone, Copy, Default)]
pub struct Temperature(pub f32);

impl Temperature {
  pub fn to_string(self, degree: Degree) -> String{
    round_float(degree.convert(self.0)) + " " + degree.to_string()
  }
}

impl HtmlRender for Temperature {
  fn render(&self) -> impl Html {
    let clone = self.clone();
    let text = html::text();
    text.set_data(&self.to_string(options().degree));
    text.on_msg(move |degree: &DegreeChange, text| text.set_data(&clone.to_string(degree.degree)))
  }
}


#[derive(Clone, Copy, Default)]
pub struct DtuPerGramPerDegree(pub f32);

impl DtuPerGramPerDegree {
  pub fn to_string(self, degree: Degree) -> String{
    round_float(degree.convert_ratio(self.0)) + " (DTU/g)/" + degree.to_string()
  }
}

impl HtmlRender for DtuPerGramPerDegree {
  fn render(&self) -> impl Html {
    let clone = self.clone();
    let text = html::text();
    text.set_data(&self.to_string(options().degree));
    text.on_msg(move |degree: &DegreeChange, text| text.set_data(&clone.to_string(degree.degree)))
  }
}

#[derive(Clone, Copy, Default)]
pub struct DtuPerMetreSecondPerDegree(pub f32);

impl DtuPerMetreSecondPerDegree {
  pub fn to_string(self, degree: Degree) -> String{
    round_float(degree.convert_ratio(self.0)) + " (DTU/(m.s))/" + degree.to_string()
  }
}

impl HtmlRender for DtuPerMetreSecondPerDegree {
  fn render(&self) -> impl Html {
    let clone = self.clone();
    let text = html::text();
    text.set_data(&self.to_string(options().degree));
    text.on_msg(move |degree: &DegreeChange, text| text.set_data(&clone.to_string(degree.degree)))
  }
}

fn round_float(f: f32) -> String {
  format!("{}", (f * 1000.0).round() / 1000.0)
}