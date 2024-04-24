use web_sys::HtmlDivElement;

use crate::{html::{self, div, Render}, lang::{Game, Text}, msg, options::{options, LanguageChange}};

pub struct UiText {
  text: Text,
}

impl UiText {
  pub fn new(text: Text) -> Self {
    Self { text }
  }
}

impl Render for &UiText {
  type Node = html::Node<web_sys::Text, (msg::Key<LanguageChange>, ())>;

  fn render(self) -> Self::Node {
    let language = &options().language;
    let text = html::text();
    text.set_data(&language.to_str(self.text));
    let clone = self.text;
    text.on_msg(move |lang: &LanguageChange, text| {
      text.set_data(lang.language.to_str(clone))
    })
  }
}

pub struct GameText {
  text: Text,
}

impl GameText {
  pub fn new(text: Game) -> Self {
    Self { text: Text::Game(text) }
  }
}

impl Render for &GameText {
  type Node = html::Node<web_sys::Text, (msg::Key<LanguageChange>, ())>;

  fn render(self) -> Self::Node {
    let language = &options().language;
    let text = html::text();
    text.set_data(&language.to_str(self.text));
    let clone = self.text;
    text.on_msg(move |lang: &LanguageChange, text| {
      text.set_data(lang.language.to_str(clone))
    })
  }
}


pub struct StaticText {
  text: &'static str,
}

impl StaticText {
  pub fn new(text: &'static str) -> Self {
    Self { text }
  }
}

impl Render for &StaticText {
  type Node = html::Text;

  fn render(self) -> Self::Node {
    let text = html::text();
    text.set_data(&self.text);
    text
  }
}

pub struct HyphenatedText {
  text: Text,
}

impl HyphenatedText {
  pub fn new(text: Text) -> Self {
    Self { text }
  }
}

impl Render for &HyphenatedText {
  type Node = html::Node<HtmlDivElement, ((), ())>;

  fn render(self) -> Self::Node {
    let language = &options().language;
    let text = html::text();
    text.set_data(&language.to_str(self.text).to_lowercase());
    let div = div().class("hyphen").child(text);
    //if div.offset_width() > 75 {
    let _ = div.set_attribute("style", "hyphens:auto;");
    //}
    div
  }
}
