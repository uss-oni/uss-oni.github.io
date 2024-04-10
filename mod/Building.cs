using static USS.DB;

namespace USS
{
  public static class Buildings
  {
    private struct Ingredient(string tag, float amount, bool liquefiable)
    {
      public string tag = tag;
      public float amount = amount;
      public bool liquefiable = liquefiable;
    }

    public static void Menu()
    {
      var _ = PlanScreen.IconNameMap; // Just to initialize names
      foreach (var planInfo in TUNING.BUILDINGS.PLANORDER)
      {
        int i = 0;
        foreach (var (building, _) in planInfo.buildingAndSubcategoryData)
        {
          if (!Dlc.DoNotWant(building))
          {
            var category = HashCache.Get().Get(planInfo.category);
            var translated = Strings.Get("STRINGS.UI.BUILDCATEGORIES." + category.ToUpper() + ".NAME");
            db[building].menu = new Category.Building(category, translated);
            db[building].menu_order = i++;
          }
        }
      }
    }

    public static void Get()
    {
      foreach (BuildingDef building in Assets.BuildingDefs.Where(b => !b.Deprecated))
      {
        var tag = building.Tag.Name;
        translations[building.Tag] = (building.Name, building.Desc);

        var entity = db[building.Tag];
        // entity.type = "Building";

        foreach (var attribute in building.attributes)
        {
          Debug.Log("Attribute: " + building.Tag + " " + attribute.Name);
          entity.tags ??= [];
          entity.tags.Add(attribute.Name);
        }
        entity.location_rule = building.BuildLocationRule.ToString();
        entity.material_category = building.MaterialCategory;
        if (building.PermittedRotations != PermittedRotations.Unrotatable)
          entity.rotations = building.PermittedRotations.ToString();
        /*
        .Add(building.RequiresPowerInput)
        .Add(building.AddLogicPowerPort)
        .Add(building.ElectricalArrowOffset)
        .Add(building.InputConduitType)
        .Add(building.OutputConduitType)
        .Add(building.IsFoundation)
        //.Add(building.UseStructureTemperature)
        .Add(building.attachablePosition)
        .Add(building.CanMove)
        .Add(building.OnePerWorld)


        .Add(building.AudioCategory)
        .Add(building.AudioSize)
        .Add(building.AlwaysOperational)
        .Add(building.LogicInputPorts)
        .Add(building.LogicOutputPorts)
        .Add(building.Upgradeable)
        .Add(building.BaseTimeUntilRepair)
        .Add(building.ShowInBuildMenu)
        .Add(building.UseHighEnergyParticleInputPort)
        .Add(building.UseHighEnergyParticleOutputPort)
        .Add(building.HighEnergyParticleInputOffset)
        .Add(building.HighEnergyParticleOutputOffset)
        .Add(building.PowerInputOffset)
        .Add(building.PowerOutputOffset)
        .Add(building.UtilityInputOffset)
        .Add(building.UtilityOutputOffset)
        .Add(building.attributes)
        .Add(building.attributeModifiers)
        .Add(building.AttachmentSlotTag)
        .Add(building.PlacementOffsets)
        .Add(building.ConstructionOffsetFilter);
        */

        if (building.GeneratorWattageRating > 0)
          entity.generator_wattage_rating = building.GeneratorWattageRating;
        if (building.ExhaustKilowattsWhenActive != 0)
          entity.external_heat = building.ExhaustKilowattsWhenActive;
        if (building.SelfHeatKilowattsWhenActive != 0)
          entity.internal_heat = building.SelfHeatKilowattsWhenActive;
        if (building.ThermalConductivity > 0f)
          entity.thermal_conductivity = building.ThermalConductivity;
        entity.width = building.WidthInCells;
        entity.height = building.HeightInCells;
        if (building.Overheatable)
        {
          entity.high_temp_warning = building.OverheatTemperature;
          entity.high_temp_fatal = building.FatalHot;
        }
        if (building.BlockTileIsTransparent)
          entity.transparent = true;
        if (building.DebugOnly)
          entity.debug = true;
        entity.mass = building.Mass.Sum();

        var recipe = new Recipe.Building(
          origin: building.CraftRecipe.Ingredients.Select(i => (i.tag.Name, i.amount)).ToArray(),
          time: building.ConstructionTime,
          dest: tag
        );
        recipes.Add(recipe);
        /*
.Add(building.RequiresPowerInput)
.Add(building.AddLogicPowerPort)
.Add(building.ElectricalArrowOffset)
.Add(building.InputConduitType)
.Add(building.OutputConduitType)
.Add(building.IsFoundation)
.Add(building.attachablePosition)
.Add(building.CanMove)
.Add(building.OnePerWorld)
.Add(building.BuildLocationRule)
.Add(building.MaterialCategory)
.Add(building.AudioCategory)
.Add(building.AudioSize)
.Add(building.AlwaysOperational)
.Add(building.LogicInputPorts)
.Add(building.LogicOutputPorts)
.Add(building.Upgradeable)
.Add(building.BaseTimeUntilRepair)
.Add(building.ShowInBuildMenu)
.Add(building.UseHighEnergyParticleInputPort)
.Add(building.UseHighEnergyParticleOutputPort)
.Add(building.HighEnergyParticleInputOffset)
.Add(building.HighEnergyParticleOutputOffset)
.Add(building.PowerInputOffset)
.Add(building.PowerOutputOffset)
.Add(building.UtilityInputOffset)
.Add(building.UtilityOutputOffset)

.Add(building.isUtility)
.Add(building.DefaultAnimState)
.Add(building.BlockTileIsTransparent)
//.Add(building.BlockTileAtlas)
//.Add(building.BlockTilePlaceAtlas)
//.Add(building.BlockTileShineAtlas)
//.Add(building.BlockTileMaterial)
//.Add(building.DecorBlockTileInfo)
//.Add(building.DecorPlaceBlockTileInfo)
.Add(building.attributes)
.Add(building.attributeModifiers)
.Add(building.AttachmentSlotTag)
.Add(building.PlacementOffsets)
.Add(building.ConstructionOffsetFilter);

*/
      }
    }
  }
}
