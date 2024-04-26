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

#[derive(Clone, Copy, Default)]
pub struct DtuPerMetreSecondPerDegree(pub f32);

#[derive(Clone, Copy, Default)]
pub struct Percent(pub f32);
#[derive(Clone, Copy, Default)]
pub struct DtuPerGramPerDegree(pub f32);
#[derive(Clone, Copy, Default)]
pub struct GramPerMole(pub f32);
#[derive(Clone, Copy, Default)]
pub struct Duration(pub f32);
