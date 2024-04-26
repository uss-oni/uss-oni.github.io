#[derive(Clone, Copy)]
#[repr(i32)]
pub enum Ui {
  CategoryBuilding,
  CategoryElement,
  CategorySpace,
  CategoryArtifact,
  CategoryMisc,
  CategoryFood,
  CategoryCritter,
  CategoryPlant,
  CategoryGeyser,
  CategoryEquipment,
  CategoryBuildingMedical,
  CategoryBuildingEquipment,
  CategoryBuildingFood,
  CategoryBuildingUtilities,
  CategoryBuildingOxygen,
  CategoryBuildingRefining,
  CategoryBuildingFurniture,
  CategoryBuildingRocketModule,
  CategoryBuildingConveyance,
  CategoryBuildingPower,
  CategoryBuildingPlumbing,
  CategoryBuildingHvac,
  CategoryBuildingBase,
  CategoryBuildingAutomation,
  CategoryBuildingRocketry,
  CategoryBuildingGravitas,
  CategoryBuildingHep,
  CategoryBuildingQuest,
  CategoryBuildingLander,
  CategoryElementSolid,
  CategoryElementLiquid,
  CategoryElementGas,
  CategoryElementOther,
  CategorySpaceComet,
  CategorySpaceArtifact,
  CategorySpaceHarvestable,
  CategorySpaceShower,
  CategoryArtifactAny,
  CategoryArtifactTerrestrial,
  CategoryArtifactSpace,
  CategoryArtifactQuest,
  CategoryMiscMedicine,
  CategoryMiscIndustrial,
  CategoryMiscOther,
  CategoryMiscQuest,
  CategoryMiscDupe,
  CategoryFoodCooked,
  CategoryFoodDehydrated,
  CategoryFoodIngredient,
  CategoryCritterRobot,
  CategoryCritterEgg,
  CategoryCritterCritter,
  CategoryCritterBaby,
  CategoryPlantCropSeed,
  CategoryPlantCrop,
  CategoryPlantForage,
  CategoryPlantDecorSeed,
  CategoryPlantDecor,
  CategoryGeyserGeyser,
  CategoryEquipmentSuit,
  CategoryEquipmentWorn,
  CategoryEquipmentClothes,

  PhaseCooking,
  PhaseMelting,
  PhaseFreezing,
  PhaseVaporization,
  PhaseCondensation,
  PhaseTransmutation,
  PhaseSublimation,

  TitleProperties,
  PropertyMolarMass,
  PropertySHC,
  PropertyThermalConductivity,
  PropertyTileCreation,
  PropertyRadiationAbsorption,
  PropertyHardness,
  PropertyLightAbsorption,
  PropertyGravityAffected,
  PropertyMass,
  PropertySize,
  PropertyHP,
  PropertyFloodThreshold,
  PropertyLowTempWarning,
  PropertyHighTempWarning,
  PropertyLowTempFatal,
  PropertyHighTempFatal,
  PropertyElectricalConsummation,
  PropertyDecor,
  PropertyDecorRadius,
  PropertyQuality,
  PropertyMoralBonus,
  PropertyPrimaryElement,

  TitleObtainingPhaseChange,
  TitleBuildingMaterials,

  ValueInvincible,
}
