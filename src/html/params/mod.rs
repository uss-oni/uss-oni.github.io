mod artifact;
mod building;
mod critter;
mod element;
mod equipment;
mod food;
mod geyser;
mod misc;
mod plant;
mod space;

use web_sys::HtmlElement;

use crate::db::Params;
use crate::entity::Entity;

impl Params {
  pub fn create_html(&self, container: &HtmlElement, entity: &Entity) {
    //container.add_h3(&Ui::TitleProperties);
    match &self {
      Params::BuildingMedical(value) => value.create_html(container, entity),
      Params::BuildingEquipment(value) => value.create_html(container, entity),
      Params::BuildingFood(value) => value.create_html(container, entity),
      Params::BuildingUtilities(value) => value.create_html(container, entity),
      Params::BuildingOxygen(value) => value.create_html(container, entity),
      Params::BuildingRefining(value) => value.create_html(container, entity),
      Params::BuildingFurniture(value) => value.create_html(container, entity),
      Params::BuildingRocketModule(value) => value.create_html(container, entity),
      Params::BuildingConveyance(value) => value.create_html(container, entity),
      Params::BuildingPower(value) => value.create_html(container, entity),
      Params::BuildingPlumbing(value) => value.create_html(container, entity),
      Params::BuildingHvac(value) => value.create_html(container, entity),
      Params::BuildingBase(value) => value.create_html(container, entity),
      Params::BuildingAutomation(value) => value.create_html(container, entity),
      Params::BuildingRocketry(value) => value.create_html(container, entity),
      Params::BuildingGravitas(value) => value.create_html(container, entity),
      Params::BuildingHep(value) => value.create_html(container, entity),
      Params::BuildingQuest(value) => value.create_html(container, entity),
      Params::BuildingLander(value) => value.create_html(container, entity),
      Params::ElementSolid(value) => value.create_html(container, entity),
      Params::ElementLiquid(value) => value.create_html(container, entity),
      Params::ElementGas(value) => value.create_html(container, entity),
      Params::ElementOther(value) => value.create_html(container, entity),
      Params::SpaceComet(value) => value.create_html(container, entity),
      Params::SpaceArtifact(value) => value.create_html(container, entity),
      Params::SpaceHarvestable(value) => value.create_html(container, entity),
      Params::SpaceShower(value) => value.create_html(container, entity),
      Params::ArtifactAny(value) => value.create_html(container, entity),
      Params::ArtifactTerrestrial(value) => value.create_html(container, entity),
      Params::ArtifactSpace(value) => value.create_html(container, entity),
      Params::ArtifactQuest(value) => value.create_html(container, entity),
      Params::MiscMedicine(value) => value.create_html(container, entity),
      Params::MiscIndustrial(value) => value.create_html(container, entity),
      Params::MiscOther(value) => value.create_html(container, entity),
      Params::MiscQuest(value) => value.create_html(container, entity),
      Params::MiscDupe(value) => value.create_html(container, entity),
      Params::FoodCooked(value) => value.create_html(container, entity),
      Params::FoodDehydrated(value) => value.create_html(container, entity),
      Params::FoodIngredient(value) => value.create_html(container, entity),
      Params::CritterRobot(value) => value.create_html(container, entity),
      Params::CritterEgg(value) => value.create_html(container, entity),
      Params::CritterCritter(value) => value.create_html(container, entity),
      Params::CritterBaby(value) => value.create_html(container, entity),
      Params::PlantCropSeed(value) => value.create_html(container, entity),
      Params::PlantCrop(value) => value.create_html(container, entity),
      Params::PlantForage(value) => value.create_html(container, entity),
      Params::PlantDecorSeed(value) => value.create_html(container, entity),
      Params::PlantDecor(value) => value.create_html(container, entity),
      Params::GeyserGeyser(value) => value.create_html(container, entity),
      Params::EquipmentSuit(value) => value.create_html(container, entity),
      Params::EquipmentWorn(value) => value.create_html(container, entity),
      Params::EquipmentClothes(value) => value.create_html(container, entity),
    }
  }
}
