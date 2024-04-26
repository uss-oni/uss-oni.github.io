pub mod element;
pub mod props;
use std::rc::Rc;

use element::*;

use crate::entity::{self, Entity};
use crate::html::{div, img, Html, HtmlRender, HtmlState};
use crate::icon::Image;
use crate::text;

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

impl HtmlRender for Properties {
  fn render(&self) -> impl Html {
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
              .child(&text::DescText::new(entity.desc()))
              .child(display_properties(entity)),
          )
          .store_state(&state);
      })
      .store_state(&self.div_state)
  }
}

fn display_properties(entity: &Entity) -> impl Html {
  match &entity.params {
    crate::db::Params::BuildingMedical(_) => todo!(),
    crate::db::Params::BuildingEquipment(_) => todo!(),
    crate::db::Params::BuildingFood(_) => todo!(),
    crate::db::Params::BuildingUtilities(_) => todo!(),
    crate::db::Params::BuildingOxygen(_) => todo!(),
    crate::db::Params::BuildingRefining(_) => todo!(),
    crate::db::Params::BuildingFurniture(_) => todo!(),
    crate::db::Params::BuildingRocketModule(_) => todo!(),
    crate::db::Params::BuildingConveyance(_) => todo!(),
    crate::db::Params::BuildingPower(_) => todo!(),
    crate::db::Params::BuildingPlumbing(_) => todo!(),
    crate::db::Params::BuildingHvac(_) => todo!(),
    crate::db::Params::BuildingBase(_) => todo!(),
    crate::db::Params::BuildingAutomation(_) => todo!(),
    crate::db::Params::BuildingRocketry(_) => todo!(),
    crate::db::Params::BuildingGravitas(_) => todo!(),
    crate::db::Params::BuildingHep(_) => todo!(),
    crate::db::Params::BuildingQuest(_) => todo!(),
    crate::db::Params::BuildingLander(_) => todo!(),
    crate::db::Params::ElementSolid(solid) => display_element_solid(entity, solid),
    crate::db::Params::ElementLiquid(_) => todo!(),
    crate::db::Params::ElementGas(_) => todo!(),
    crate::db::Params::ElementOther(_) => todo!(),
    crate::db::Params::SpaceComet(_) => todo!(),
    crate::db::Params::SpaceArtifact(_) => todo!(),
    crate::db::Params::SpaceHarvestable(_) => todo!(),
    crate::db::Params::SpaceShower(_) => todo!(),
    crate::db::Params::ArtifactAny(_) => todo!(),
    crate::db::Params::ArtifactTerrestrial(_) => todo!(),
    crate::db::Params::ArtifactSpace(_) => todo!(),
    crate::db::Params::ArtifactQuest(_) => todo!(),
    crate::db::Params::MiscMedicine(_) => todo!(),
    crate::db::Params::MiscIndustrial(_) => todo!(),
    crate::db::Params::MiscOther(_) => todo!(),
    crate::db::Params::MiscQuest(_) => todo!(),
    crate::db::Params::MiscDupe(_) => todo!(),
    crate::db::Params::FoodCooked(_) => todo!(),
    crate::db::Params::FoodDehydrated(_) => todo!(),
    crate::db::Params::FoodIngredient(_) => todo!(),
    crate::db::Params::CritterRobot(_) => todo!(),
    crate::db::Params::CritterEgg(_) => todo!(),
    crate::db::Params::CritterCritter(_) => todo!(),
    crate::db::Params::CritterBaby(_) => todo!(),
    crate::db::Params::PlantCropSeed(_) => todo!(),
    crate::db::Params::PlantCrop(_) => todo!(),
    crate::db::Params::PlantForage(_) => todo!(),
    crate::db::Params::PlantDecorSeed(_) => todo!(),
    crate::db::Params::PlantDecor(_) => todo!(),
    crate::db::Params::GeyserGeyser(_) => todo!(),
    crate::db::Params::EquipmentSuit(_) => todo!(),
    crate::db::Params::EquipmentWorn(_) => todo!(),
    crate::db::Params::EquipmentClothes(_) => todo!(),
  }
}
