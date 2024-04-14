namespace USS
{
  public static class Dlc
  {
    public static string[] Get(string str)
    {
      if (DlcManager.IsExpansion1Id(str))
      {
        return ["Space Out"];
      }
      return ["Base", "Space Out"];
    }

    public static bool DoNotWant(string tag)
    {
      if (tag == "Radium"
       || tag == "Bitumen"
       || tag == "GammaMush"
       || tag == "IntermediateRadPill"
       || tag == "HeatCube"
       || tag == "ShockWorm"
       || tag == "CarePackage"
       || tag == "ForestTreeBranch"
       || tag == "SolidPropane"
       || tag == "LiquidPropane"
       || tag == "EquippableBalloon"
       || tag == "HarvestableSpacePOI_CarbonAsteroidField"
       || tag == "FilterPlantSeed"
       || tag == "FoolsGold"
       || tag == "CrushedRock"
       || tag == "StaterpillarGenerator"
       || tag == "StaterpillarGasConnector"
       || tag == "StaterpillarLiquidConnector"
       || tag == "POIBunkerExteriorDoor"
       || tag == "POIFacilityDoor"
       )
        return true;
        
      var asset = Assets.GetPrefab(tag);
      if (asset is null)
        return true;
      var pe = asset.GetComponent<PrimaryElement>();
      if (pe is not null && pe.ElementID != 0 && pe.Element.disabled)
      {
        return true;
      }

      var prefab = asset.GetComponent<KPrefabID>();
      if (prefab.Tags.Contains("DeprecatedContent"))
      {
        return true;
      }

      var building = asset.GetComponent<BuildingComplete>();
      if (building is not null && (building.Def.Deprecated || building.Def.DebugOnly))
      {
        return true;
      }
      return false;
    }
  }
}