using static USS.DB;

namespace USS
{
  public static class Elements
  {
    public static List<(float, string)> order = [
      (3.5f, "Filter"),
      (1, "Organics"),
      (5, "Metal"),
      (10, "RareMaterials"),
      (2, "Farmable"),
      (3, "Agriculture"),
      (4, "RefinedMetal"),
      (6, "ConsumableOre"),
      (7, "BuildableRaw"),
      (8, "IceOre"),
      (9, "ManufacturedMaterial"),
      (12, "Other"),
      (12, "Special"),
      (11, "Liquifiable")
    ];
    public static void Get(Tag tag)
    {
      var element = ElementLoader.GetElement(tag);
      //  foreach (var element in ElementLoader.elements
      //    .Where(e => !e.disabled)
      //    .Where(e => !e.IsVacuum)
      //  {
        
        
      translations[element.tag] = (element.name, element.description);
      var entity = db[element.tag];
      entity.dlc = Dlc.Get(element.dlcId);
      entity.menu_order = order.Count + 1;
      foreach (var (ord, t) in order)
      {
        if (element.HasTag(t))
        {
          entity.menu_order = ord;
          break;
        }
      }
      if (element.IsGas)
      {
        entity.menu = Category.Element.Gas;
      }
      if (element.IsLiquid)
      {
        entity.menu = Category.Element.Liquid;
      }
      if (element.IsSolid)
      {
        entity.menu = Category.Element.Solid;
      }
      entity.radiation_absorption_factor = element.radiationAbsorptionFactor;
      entity.shc = element.specificHeatCapacity;
      entity.thermal_conductivity = element.thermalConductivity;
      entity.molar_mass = element.molarMass;
      if (!element.IsLiquid && !element.IsGas)
      {
        entity.hardness = element.hardness;
      }
      else
      {
        entity.light_absorption = element.lightAbsorptionFactor;
      }
      if (element.strength > 0f)
        entity.strength = element.strength;
      if (element.flow > 0f)
        entity.flow = element.flow;
      if (element.maxCompression > 0f)
        entity.max_compression = element.maxCompression;
      if (element.viscosity > 0f)
        entity.viscosity = element.viscosity;
      if (element.minHorizontalFlow > 0f)
        entity.min_horizontal_flow = element.minHorizontalFlow;
      if (element.minVerticalFlow > 0f)
        entity.min_vertical_flow = element.minVerticalFlow;
      entity.default_mass = element.defaultValues.mass;
      foreach (var oreTag in element.oreTags)
      {
        entity.tags ??= [];
        entity.tags.Add(oreTag.Name);
      }

      if (element.lowTempTransitionTarget != 0)
      {
        List<(string, float)> output = [(element.lowTempTransitionTarget.CreateTag().Name, 1 - element.lowTempTransitionOreMassConversion)];
        if (element.lowTempTransitionOreID != 0)
        {
          output.Add((element.lowTempTransitionOreID.CreateTag().Name, element.lowTempTransitionOreMassConversion));
        }
        var target = ElementLoader.FindElementByHash(element.lowTempTransitionTarget);
        string phase = (element.IsGas && target.IsLiquid) ? "condensation" :
                       (element.IsGas && target.IsSolid) ? "deposition" : "freezing";
        Recipe.Phase recipe = new(entity.tag, phase, element.lowTemp, [.. output]);
        recipes.Add(recipe);
      }

      if (element.HasTransitionUp)
      {
        List<(string, float)> output = [(element.highTempTransitionTarget.CreateTag().Name, 1 - element.highTempTransitionOreMassConversion)];
        if (element.highTempTransitionOreID != 0)
        {
          output.Add((element.highTempTransitionOreID.CreateTag().Name, element.highTempTransitionOreMassConversion));
        }
        var target = ElementLoader.FindElementByHash(element.highTempTransitionTarget);
        string phase = (element.IsSolid && target.IsLiquid) ? "melting" :
                       (element.IsSolid && target.IsGas) ? "sublimation" :
                       (element.IsSolid && target.IsSolid) ? "transmutation" : "vaporization";
        Recipe.Phase recipe = new(entity.tag, phase, element.highTemp, [.. output]);
        recipes.Add(recipe);
      }

      if (element.sublimateId != 0)
      {
        if (element.IsSolid)
        {
          var recipe = new Recipe.SublimateSolid(
            origin: entity.tag,
            probability: element.sublimateProbability,
            efficiency: element.sublimateEfficiency,
            rate: element.sublimateRate,
            pressionMax: 1.8f,
            dest: element.sublimateId.CreateTag().Name
          );
          recipes.Add(recipe);
        }
        else
        {
          var recipe = new Recipe.SublimateLiquid(
            origin: entity.tag,
            probability: element.sublimateProbability,
            efficiency: element.sublimateEfficiency,
            offgasPercent: element.offGasPercentage,
            pressionMax: 1.8f,
            dest: element.sublimateId.CreateTag().Name
          );
          recipes.Add(recipe);
        }
      };
    }
  }
}
