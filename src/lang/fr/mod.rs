pub const CODE:&'static str = "fr";

pub mod game;
pub mod desc;
pub mod ui;
pub static LANGAGE: super::Language = super::Language {
  name: CODE,
  game: game::translate,
  desc: desc::translate,
  ui: ui::translate,
};