use crate::lang;

pub enum NodeText {
  Str(&'static str),
  Text(lang::Text),
}

impl From<lang::Text> for NodeText {
  fn from(value: lang::Text) -> Self {
    NodeText::Text(value)
  }
}

impl From<&'static str> for NodeText {
  fn from(value: &'static str) -> Self {
    NodeText::Str(value)
  }
}

pub struct TextElement {
  pub text: NodeText,
  pub element: web_sys::Text,
}
