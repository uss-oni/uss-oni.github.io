use crate::html::{self, div, HtmlRender, Node};
use crate::lang::{Game, Text};
use crate::options::{options, LanguageChange};

pub struct UiText {
  text: Text,
}

impl UiText {
  pub fn new(text: Text) -> Self {
    Self { text }
  }
}

impl HtmlRender for &UiText {
  fn render(&self) -> Node {
    let language = &options().language;
    let text = html::text();
    text.set_data(language.to_str(self.text));
    let clone = self.text;
    text
      .on_msg(move |lang: &LanguageChange, text| text.set_data(lang.language.to_str(clone)))
      .into()
  }
}

pub struct DescText {
  text: Text,
}

impl DescText {
  pub fn new(text: Text) -> Self {
    Self { text }
  }
}

impl HtmlRender for DescText {
  fn render(&self) -> Node {
    let language = &options().language;
    let text = div().id("propertiesDesc");
    let _ = text.insert_adjacent_html("afterBegin", language.to_str(self.text));
    let clone = self.text;
    text
      .on_msg(move |lang: &LanguageChange, text| {
        text.replace_children_with_node_0();
        let _ = text.insert_adjacent_html("afterBegin", lang.language.to_str(clone));
      })
      .into()
  }
}

pub struct GameText {
  text: Text,
}

impl GameText {
  pub fn new(text: Game) -> Self {
    Self {
      text: Text::Game(text),
    }
  }
}

impl HtmlRender for GameText {
  fn render(&self) -> Node {
    let language = &options().language;
    let text = html::text();
    text.set_data(language.to_str(self.text));
    let clone = self.text;
    text
      .on_msg(move |lang: &LanguageChange, text| text.set_data(lang.language.to_str(clone)))
      .into()
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

impl HtmlRender for &StaticText {
  fn render(&self) -> Node {
    let text = html::text();
    text.set_data(self.text);
    text.into()
  }
}

#[derive(Clone, Copy)]
pub struct HyphenatedText {
  text: Text,
}

impl HyphenatedText {
  pub fn new(text: Text) -> Self {
    Self { text }
  }
}

impl HtmlRender for &HyphenatedText {
  fn render(&self) -> Node {
    let language = &options().language;
    let text = html::text();
    text.set_data(&language.to_str(self.text).to_lowercase());
    let div = div().class("hyphen").child(text);
    //if div.offset_width() > 75 {
    let _ = div.set_attribute("style", "hyphens:auto;");
    //}
    div.into()
  }
}
