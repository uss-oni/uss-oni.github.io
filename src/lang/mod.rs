mod en;
mod fr;

pub static LIST: [&Language; 2] = [&fr::LANGAGE, &en::LANGAGE];

mod game;
mod ui;
use std::ops::Deref;

pub use game::Game;
pub use ui::Ui;

use crate::{db, Options};

#[derive(Debug, Clone, Copy)]
pub enum Text {
  Ui(Ui),
  Game(Game),
  Desc(Game),
}

pub const PROPERTY_MOLAR_MASS: Text = Text::Ui(Ui::PropertyMolarMass);
pub const PROPERTY_SHC: Text = Text::Ui(Ui::PropertySHC);
pub const PROPERTY_THERMAL_CONDUCTIVITY: Text = Text::Ui(Ui::PropertyThermalConductivity);
pub const PROPERTY_TILE_CREATION: Text = Text::Ui(Ui::PropertyTileCreation);
pub const PROPERTY_RADIATION_ABSORPTION: Text = Text::Ui(Ui::PropertyRadiationAbsorption);
pub const PROPERTY_HARDNESS: Text = Text::Ui(Ui::PropertyHardness);
pub const PROPERTY_LIGHT_ABSORPTION: Text = Text::Ui(Ui::PropertyLightAbsorption);
pub const PROPERTY_GRAVITY_AFFECTED: Text = Text::Ui(Ui::PropertyGravityAffected);
pub const PROPERTY_MASS: Text = Text::Ui(Ui::PropertyMass);
pub const PROPERTY_SIZE: Text = Text::Ui(Ui::PropertySize);
pub const PROPERTY_HP: Text = Text::Ui(Ui::PropertyHP);
pub const PROPERTY_FLOOD_THRESHOLD: Text = Text::Ui(Ui::PropertyFloodThreshold);
pub const PROPERTY_LOW_TEMP_WARNING: Text = Text::Ui(Ui::PropertyLowTempWarning);
pub const PROPERTY_HIGH_TEMP_WARNING: Text = Text::Ui(Ui::PropertyHighTempWarning);
pub const PROPERTY_LOW_TEMP_FATAL: Text = Text::Ui(Ui::PropertyLowTempFatal);
pub const PROPERTY_HIGH_TEMP_FATAL: Text = Text::Ui(Ui::PropertyHighTempFatal);
pub const PROPERTY_ELECTRICAL_CONSUMMATION: Text = Text::Ui(Ui::PropertyElectricalConsummation);
pub const PROPERTY_DECOR: Text = Text::Ui(Ui::PropertyDecor);
pub const PROPERTY_DECOR_RADIUS: Text = Text::Ui(Ui::PropertyDecorRadius);
pub const PROPERTY_QUALITY: Text = Text::Ui(Ui::PropertyQuality);
pub const PROPERTY_MORAL_BONUS: Text = Text::Ui(Ui::PropertyMoralBonus);
pub const PROPERTY_PRIMARY_ELEMENT: Text = Text::Ui(Ui::PropertyPrimaryElement);

pub const VALUE_INVINCIBLE: Text = Text::Ui(Ui::ValueInvincible);

impl db::recipe::PhaseType {
  pub fn to_text(self: &Self) -> Text {
    match self {
        db::recipe::PhaseType::Cooking => Text::Ui(Ui::PhaseCooking),
        db::recipe::PhaseType::Melting => Text::Ui(Ui::PhaseMelting),
        db::recipe::PhaseType::Solidification => Text::Ui(Ui::PhaseTransmutation),
        db::recipe::PhaseType::Vaporization => Text::Ui(Ui::PhaseVaporization),
        db::recipe::PhaseType::Freezing => Text::Ui(Ui::PhaseFreezing),
        db::recipe::PhaseType::Sublimation => Text::Ui(Ui::PhaseSublimation),
        db::recipe::PhaseType::Condensation => Text::Ui(Ui::PhaseCondensation),
        db::recipe::PhaseType::Transmutation => Text::Ui(Ui::PhaseTransmutation),
    }
  }
}

impl Deref for Text {
  type Target = str;

  fn deref(&self) -> &Self::Target {
    let current_language = Options::language();
    match self {
      Text::Game(game) => (current_language.game)(*game),
      Text::Desc(desc) => (current_language.desc)(*desc),
      Text::Ui(ui) => (current_language.ui)(*ui),
    }
  }
}

pub struct Language {
  pub name: &'static str,
  game: fn(game: Game) -> &'static str,
  desc: fn(game: Game) -> &'static str,
  ui: fn(ui: Ui) -> &'static str,
}

