const CODE: &str = "en";
const FLAG: &str = "🇬🇧"; 

pub mod game;
pub mod desc;
pub mod ui;
pub static LANGAGE: super::Language = super::Language {
  name: CODE,
  flag: FLAG,
  game: game::translate,
  desc: desc::translate,
  ui: ui::translate,
};
