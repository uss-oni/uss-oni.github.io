pub mod element;
pub mod props;
use std::rc::Rc;

use element::*;

use crate::db::recipe::{EntityPercent, Recipe};
use crate::entity::Entity;
use crate::html::{
  div, h2, img, path, svg, table, td, tr, HtmlRender, HtmlState, MouseClick, Node,
};
use crate::icon::{Image, TEMP_DOWN, TEMP_UP};
use crate::lang::TITLE_PHASE_PHASE;
use crate::msg::send;
use crate::route::Route;
use crate::text::{GameText, StaticText, UiText};
use crate::units::{Percent, Temperature};
use crate::{db, text};

pub struct DisplayEntity {
  pub entity: &'static Entity,
}

#[derive(Default)]
pub struct Properties {
  div_state: HtmlState,
  entity_state: Rc<HtmlState>,
}

impl Properties {
  pub fn new() -> Self {
    Self {
      ..Default::default()
    }
  }
}

impl HtmlRender for &Properties {
  fn render(&self) -> Node {
    let state = self.entity_state.clone();
    div()
      .id("properties")
      .on_msg(move |entity: &DisplayEntity, prop| {
        let entity = entity.entity;
        prop.replace_children_with_node_0();
        prop
          //  .child(
          //    div()
          //      .id("propertiesChart")
          //      .child(img().set_src("images/test.png")),
          //  )
          .child(
            div()
              .id("propertiesBox")
              .child(img().id("propertiesImg").set_src(&entity.img().path()))
              .child(text::DescText::new(entity.desc()))
              .child(display_properties(entity)),
          )
          .child(display_phases(entity))
          .store_state(&state);
      })
      .store_state(&self.div_state)
      .into()
  }
}

enum Direction {
  Left,
  Right,
  TwoWays,
}

enum Position {
  Left,
  Right,
}

enum EntitiesPercent {
  One(&'static Entity),
  Two((&'static EntityPercent, &'static EntityPercent)),
}

struct PhaseConversion {
  direction: Direction,
  entities: EntitiesPercent,
  temperature: Temperature,
}

struct PhaseDisplay {
  left: Option<PhaseConversion>,
  middle: EntitiesPercent,
  right: Option<PhaseConversion>,
}

fn display_phases(entity: &'static Entity) -> Node {
  let recipes_from: Vec<_> = db::recipe::recipes
    .iter()
    .filter_map(|recipe| match recipe {
      Recipe::Phase(phase) => Some(phase),
      _ => None,
    })
    .filter(|phase| phase.input == entity)
    .collect();
  let mut recipes_to: Vec<_> = db::recipe::recipes
    .iter()
    .filter_map(|recipe| match recipe {
      Recipe::Phase(phase) => Some(phase),
      _ => None,
    })
    .filter(|phase| phase.output.iter().any(|p| p.entity == entity))
    .collect();
  let mut first = PhaseDisplay {
    left: None,
    middle: EntitiesPercent::One(entity),
    right: None,
  };
  for recipe in &recipes_from {
    let (position, mut direction) = match recipe.type_of {
      db::recipe::PhaseType::Cooking => (Position::Right, Direction::Right),
      db::recipe::PhaseType::Melting => (Position::Right, Direction::Right),
      db::recipe::PhaseType::Solidification => (Position::Left, Direction::Left),
      db::recipe::PhaseType::Vaporization => (Position::Right, Direction::Right),
      db::recipe::PhaseType::Freezing => (Position::Left, Direction::Left),
      db::recipe::PhaseType::Sublimation => (Position::Right, Direction::Right),
      db::recipe::PhaseType::Condensation => (Position::Left, Direction::Left),
      db::recipe::PhaseType::Transmutation => (Position::Right, Direction::Right),
    };
    if recipe.output.len() == 1 {
      let output = recipe.output.first().unwrap().entity;
      if let Some(two_ways) = recipes_to.iter().position(|recipe| recipe.input == output) {
        recipes_to.remove(two_ways);
        direction = Direction::TwoWays;
      }
    }
    let one_or_more = if recipe.output.len() == 1 {
      EntitiesPercent::One(recipe.output.first().unwrap().entity)
    } else {
      EntitiesPercent::Two((&recipe.output[0], &recipe.output[1]))
    };
    match position {
      Position::Left => {
        first.left = Some(PhaseConversion {
          direction,
          entities: one_or_more,
          temperature: recipe.temp,
        })
      }
      Position::Right => {
        first.right = Some(PhaseConversion {
          direction,
          entities: one_or_more,
          temperature: recipe.temp,
        })
      }
    }
  }
  let mut display = Vec::<PhaseDisplay>::new();
  if first.left.is_some() || first.right.is_some() {
    display.push(first);
  }
  for recipe in recipes_to {
    let mut to_push = PhaseDisplay {
      left: None,
      middle: if recipe.output.len() == 1 {
        EntitiesPercent::One(recipe.output.first().unwrap().entity)
      } else {
        EntitiesPercent::Two((&recipe.output[0], &recipe.output[1]))
      },
      right: None,
    };
    let (position, direction) = (Position::Left, Direction::Right) /*match recipe.type_of {
      db::recipe::PhaseType::Cooking => (Position::Left, Direction::Right),
      db::recipe::PhaseType::Melting => (Position::Left, Direction::Right),
      db::recipe::PhaseType::Solidification => (Position::Right, Direction::Left),
      db::recipe::PhaseType::Vaporization => (Position::Left, Direction::Right),
      db::recipe::PhaseType::Freezing => (Position::Right, Direction::Left),
      db::recipe::PhaseType::Sublimation => (Position::Left, Direction::Right),
      db::recipe::PhaseType::Condensation => (Position::Right, Direction::Left),
      db::recipe::PhaseType::Transmutation => (Position::Left, Direction::Right),
    }*/;
    match position {
      Position::Left => {
        to_push.left = Some(PhaseConversion {
          direction,
          entities: EntitiesPercent::One(recipe.input),
          temperature: recipe.temp,
        })
      }
      Position::Right => {
        to_push.right = Some(PhaseConversion {
          direction,
          entities: EntitiesPercent::One(recipe.input),
          temperature: recipe.temp,
        })
      }
    }
    display.push(to_push);
  }
  if display.len() > 0 {
    div()
      .child(h2().child(&UiText::new(TITLE_PHASE_PHASE)))
      .child(table().children(display))
      .into()
  } else {
    div().into()
  }
}

fn draw_arrow(d: &str) -> Node {
  let path_line = path();
  path_line.set_attribute("stroke-width", "1.5").unwrap();
  path_line.set_attribute("fill", "none").unwrap();
  path_line.set_attribute("stroke", "white").unwrap();
  path_line.set_attribute("d", d).unwrap();
  let svg = svg();
  svg.set_attribute("width", "112").unwrap();
  svg.set_attribute("height", "10").unwrap();
  svg.child(path_line).into()
}

fn draw_arrow_right() -> Node {
  draw_arrow("M 1,5 111,5 M106,0 111,5 106,10")
}

fn draw_arrow_left() -> Node {
  draw_arrow("M 111,5 1,5 M6,0 1,5 6,10")
}

fn phase_percent(entity: &'static Entity, percent: Percent) -> Node {
  div()
    .child(img().set_src(&entity.img().path()))
    .child(GameText::new(entity.name))
    .child(&StaticText::new(" ("))
    .child(percent)
    .child(&StaticText::new(")"))
    .class("phaseRecipeInput")
    .on_event(move |_: MouseClick, _| {
      send(Route::new(entity.tag));
      send(DisplayEntity { entity });
    })
    .into()
}

impl HtmlRender for PhaseDisplay {
  fn render(&self) -> Node {
    let ret = tr();
    let ret = if let Some(left) = &self.left {
      let ret = ret.child(match left.entities {
        EntitiesPercent::One(one) => td().child(
          div()
            .child(img().set_src(&one.img().path()))
            .child(GameText::new(one.name))
            .class("phaseRecipeInput")
            .on_event(move |_: MouseClick, _| {
              send(Route::new(one.tag));
              send(DisplayEntity { entity: one });
            }),
        ),
        EntitiesPercent::Two((first, second)) => td()
          .class("flex")
          .child(phase_percent(&first.entity, first.percent))
          .child(div().class("plus").child(&StaticText::new("+")))
          .child(phase_percent(&second.entity, second.percent)),
      });
      ret.child(
        td().child(match left.direction {
          Direction::Left => div()
            .child(draw_arrow_left())
            .child(
              div()
                .class("flex")
                .child(img().set_src(&TEMP_DOWN.path()))
                .child(div().child(left.temperature - 3.0)),
            )
            .class("phaseRecipeArrowInput"),
          Direction::Right => div()
            .child(draw_arrow_right())
            .child(
              div()
                .class("flex")
                .child(img().set_src(&TEMP_UP.path()))
                .child(div().child(left.temperature + 3.0)),
            )
            .class("phaseRecipeArrowInput"),
          Direction::TwoWays => div()
            .child(
              div()
                .class("flex")
                .child(img().set_src(&TEMP_UP.path()))
                .child(div().child(left.temperature + 3.0)),
            )
            .child(draw_arrow_right())
            .child(draw_arrow_left())
            .child(
              div()
                .class("flex")
                .child(img().set_src(&TEMP_DOWN.path()))
                .child(div().child(left.temperature - 3.0)),
            )
            .class("phaseRecipeArrowInput"),
        }),
      )
    } else {
      ret.child(td()).child(td())
    };
    let ret = match self.middle {
      EntitiesPercent::One(one) => ret.child(
        td().child(
          div()
            .child(img().set_src(&one.img().path()))
            .child(GameText::new(one.name))
            .class("phaseRecipeElement")
            .on_event(move |_: MouseClick, _| {
              send(Route::new(one.tag));
              send(DisplayEntity { entity: one });
            }),
        ),
      ),
      EntitiesPercent::Two((first, second)) => ret.child(
        td()
          .class("flex")
          .child(phase_percent(&first.entity, first.percent))
          .child(div().class("plus").child(&StaticText::new("+")))
          .child(phase_percent(&second.entity, second.percent)),
      ),
    };
    if let Some(right) = &self.right {
      let ret = ret.child(
        td().child(match right.direction {
          Direction::Left => div()
            .child(draw_arrow_left())
            .child(
              div()
                .class("flex")
                .child(img().set_src(&TEMP_DOWN.path()))
                .child(div().child(right.temperature - 3.0)),
            )
            .class("phaseRecipeArrowOutput"),
          Direction::Right => div()
            .child(draw_arrow_right())
            .child(
              div()
                .class("flex")
                .child(img().set_src(&TEMP_UP.path()))
                .child(div().child(right.temperature + 3.0)),
            )
            .class("phaseRecipeArrowOutput"),
          Direction::TwoWays => div()
            .child(
              div()
                .class("flex")
                .child(img().set_src(&TEMP_UP.path()))
                .child(div().child(right.temperature + 3.0)),
            )
            .child(draw_arrow_right())
            .child(draw_arrow_left())
            .child(
              div()
                .class("flex")
                .child(img().set_src(&TEMP_DOWN.path()))
                .child(div().child(right.temperature - 3.0)),
            )
            .class("phaseRecipeArrowOutput"),
        }),
      );
      match right.entities {
        EntitiesPercent::One(one) => ret.child(
          td().child(
            div()
              .child(img().set_src(&one.img().path()))
              .child(GameText::new(one.name))
              .class("phaseRecipeOutput")
              .on_event(move |_: MouseClick, _| {
                send(Route::new(one.tag));
                send(DisplayEntity { entity: one });
              }),
          ),
        ),
        EntitiesPercent::Two((first, second)) => ret.child(
          td()
            .class("flex")
            .child(phase_percent(&first.entity, first.percent))
            .child(div().class("plus").child(&StaticText::new("+")))
            .child(phase_percent(&second.entity, second.percent)),
        ),
      }
    } else {
      ret
    }
    // .class("phaseRecipe")
    .into()
  }
}

fn display_none(div: Node) -> Node {
  div
}

fn display_properties(entity: &Entity) -> Node {
  let div = div().class("properties");
  match &entity.params {
    crate::db::Params::BuildingMedical(_) => display_none(div.into()),
    crate::db::Params::BuildingEquipment(_) => display_none(div.into()),
    crate::db::Params::BuildingFood(_) => display_none(div.into()),
    crate::db::Params::BuildingUtilities(_) => display_none(div.into()),
    crate::db::Params::BuildingOxygen(_) => display_none(div.into()),
    crate::db::Params::BuildingRefining(_) => display_none(div.into()),
    crate::db::Params::BuildingFurniture(_) => display_none(div.into()),
    crate::db::Params::BuildingRocketModule(_) => display_none(div.into()),
    crate::db::Params::BuildingConveyance(_) => display_none(div.into()),
    crate::db::Params::BuildingPower(_) => display_none(div.into()),
    crate::db::Params::BuildingPlumbing(_) => display_none(div.into()),
    crate::db::Params::BuildingHvac(_) => display_none(div.into()),
    crate::db::Params::BuildingBase(_) => display_none(div.into()),
    crate::db::Params::BuildingAutomation(_) => display_none(div.into()),
    crate::db::Params::BuildingRocketry(_) => display_none(div.into()),
    crate::db::Params::BuildingGravitas(_) => display_none(div.into()),
    crate::db::Params::BuildingHep(_) => display_none(div.into()),
    crate::db::Params::BuildingQuest(_) => display_none(div.into()),
    crate::db::Params::BuildingLander(_) => display_none(div.into()),
    crate::db::Params::ElementSolid(solid) => display_element_solid(div, entity, solid),
    crate::db::Params::ElementLiquid(_) => display_none(div.into()),
    crate::db::Params::ElementGas(_) => display_none(div.into()),
    crate::db::Params::ElementOther(_) => display_none(div.into()),
    crate::db::Params::SpaceComet(_) => display_none(div.into()),
    crate::db::Params::SpaceArtifact(_) => display_none(div.into()),
    crate::db::Params::SpaceHarvestable(_) => display_none(div.into()),
    crate::db::Params::SpaceShower(_) => display_none(div.into()),
    crate::db::Params::ArtifactAny(_) => display_none(div.into()),
    crate::db::Params::ArtifactTerrestrial(_) => display_none(div.into()),
    crate::db::Params::ArtifactSpace(_) => display_none(div.into()),
    crate::db::Params::ArtifactQuest(_) => display_none(div.into()),
    crate::db::Params::MiscMedicine(_) => display_none(div.into()),
    crate::db::Params::MiscIndustrial(_) => display_none(div.into()),
    crate::db::Params::MiscOther(_) => display_none(div.into()),
    crate::db::Params::MiscQuest(_) => display_none(div.into()),
    crate::db::Params::MiscDupe(_) => display_none(div.into()),
    crate::db::Params::FoodCooked(_) => display_none(div.into()),
    crate::db::Params::FoodDehydrated(_) => display_none(div.into()),
    crate::db::Params::FoodIngredient(_) => display_none(div.into()),
    crate::db::Params::CritterRobot(_) => display_none(div.into()),
    crate::db::Params::CritterEgg(_) => display_none(div.into()),
    crate::db::Params::CritterCritter(_) => display_none(div.into()),
    crate::db::Params::CritterBaby(_) => display_none(div.into()),
    crate::db::Params::PlantCropSeed(_) => display_none(div.into()),
    crate::db::Params::PlantCrop(_) => display_none(div.into()),
    crate::db::Params::PlantForage(_) => display_none(div.into()),
    crate::db::Params::PlantDecorSeed(_) => display_none(div.into()),
    crate::db::Params::PlantDecor(_) => display_none(div.into()),
    crate::db::Params::GeyserGeyser(_) => display_none(div.into()),
    crate::db::Params::EquipmentSuit(_) => display_none(div.into()),
    crate::db::Params::EquipmentWorn(_) => display_none(div.into()),
    crate::db::Params::EquipmentClothes(_) => display_none(div.into()),
  }
}
