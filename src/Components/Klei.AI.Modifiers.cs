
namespace USS
{
  public static partial class Components
  {
    public static void Get(Entity entity, Klei.AI.Modifiers component)
    {
      foreach (var trait in component.initialTraits.Select(trait => Db.Get().traits.Get(trait)).ToList())
      {
        foreach (var mod in trait.SelfModifiers)
        {
          switch (mod.AttributeId)
          {
            case "MaxRadiationThreshold":
              entity.maxRadiation = mod.Value;
              break;
            case "YieldAmount":
              break;
            case "AgeMax":
            case "MaturityMax":
              entity.age ??= mod.Value;
              break;
            case "HitPointsMax":
              entity.hp = (int)mod.Value;
              break;
            case "InternalBatteryMax":
            case "InternalBioBatteryMax":
            case "InternalChemicalBatteryMax":
              entity.battery = mod.Value;
              break;
            case "InternalBatteryDelta":
            case "InternalBioBatteryDelta":
            case "InternalChemicalBatteryDelta":
              entity.batteryLoss = mod.Value;
              break;
            case "CaloriesMax":
              entity.caloriesMax = mod.Value;
              break;
            case "CaloriesDelta":
              entity.caloriesLoss = mod.Value;
              break;
            case "MinLightLux":
              entity.minLight = mod.Value;
              break;
            case "CarryAmount":
              entity.carryAmount = mod.Value;
              break;
            default:
              //  entity.modifiers ??= [];
              //  entity.modifiers.Add([mod.AttributeId, mod.Value]);//, amount.deltaAttribute, amount.minAttribute, amount.maxAttribute});
              break;
          }
        }
      }
    }
  }
}