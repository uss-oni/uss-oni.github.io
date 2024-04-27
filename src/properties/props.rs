use crate::html::{div, Html, HtmlRender};
use crate::lang::{Text, PROPERTY_SHC, PROPERTY_THERMAL_CONDUCTIVITY};
use crate::text::UiText;
use crate::units::*;

fn simple<T>(text: Text, value: T) -> impl Html
where
  T: HtmlRender,
{
  div()
    .class("property")
    .child(&div().child(&UiText::new(text)).class("propertyName"))
    .child(&div().child(&value).class("propertyValue"))
}

pub fn shc(value: DtuPerGramPerDegree) -> impl Html {
  simple(PROPERTY_SHC, value)
}

pub fn thermal_conductivity(value: DtuPerMetreSecondPerDegree) -> impl Html {
  simple(PROPERTY_THERMAL_CONDUCTIVITY, value)
}
