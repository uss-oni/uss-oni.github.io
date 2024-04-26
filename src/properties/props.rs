use crate::html::{div, Html};
use crate::lang::PROPERTY_SHC;
use crate::text::UiText;
use crate::units::DtuPerGramPerDegree;

pub fn shc(value: DtuPerGramPerDegree) -> impl Html {
  div().child(&UiText::new(PROPERTY_SHC))
}