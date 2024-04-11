using static USS.DB;

namespace USS
{
  public static partial class StateMachines
  {
    public static void Get(Entity entity, RocketUsageRestriction.Def sm)
    {

    }
    public static void Get(Entity entity, Chlorinator.Def sm)
    {

      //  recipes.Add(new Recipe(Recipe.Type.Recipe, converter: entity.tag)
      //    .AddOutput(sm.primaryOreTag, kg: sm.primaryOreMassPerOre)
      //    .AddOutput(sm.secondaryOreTag, kg: sm.primaryOreMassPerOre)
      //    .AddOutput(sm.));
    }
    public static void Get(Entity entity, ClusterTelescope.Def sm)
    {
      entity.range_max = sm.analyzeClusterRadius;
      entity.provides_o2 = sm.providesOxygen;
    }
    public static void Get(Entity entity, ContactConductivePipeBridge.Def sm) { }
    public static void Get(Entity entity, MakeBaseSolid.Def sm) { }
    public static void Get(Entity entity, MajorFossilDigSite.Def sm) { }
    public static void Get(Entity entity, FossilHuntInitializer.Def sm) { }
    public static void Get(Entity entity, GravitasCreatureManipulator.Def sm) { }
    public static void Get(Entity entity, HEPBattery.Def sm)
    {
      entity.launch_rate = sm.minLaunchInterval;
      entity.radbolt_decay = sm.particleDecayRate;
      entity.radbolt_storage = sm.maxSlider;
    }
    public static void Get(Entity entity, ChainedBuilding.Def sm)
    {
      entity.links = [sm.headBuildingTag.Name, sm.linkBuildingTag.Name];
    }
    public static void Get(Entity entity, MilkSeparator.Def sm)
    {
      entity.storages ??= [];
      entity.storages.Add(("internal", [sm.MILK_FAT_TAG.Name], sm.MILK_FAT_CAPACITY));
    }
    public static void Get(Entity entity, RanchStation.Def sm)
    {
      entity.work_time = sm.WorkTime;
    }
    public static void Get(Entity entity, MissileLauncher.Def sm)
    {
      entity.lauch_speed = sm.launchSpeed;
      entity.rotation_speed = sm.rotationSpeed;
      entity.range_max = MissileLauncher.Def.launchRange.Y;
      entity.range_min = MissileLauncher.Def.launchRange.X;
      entity.scanning_angle = sm.scanningAngle;
      entity.max_angle = sm.maxAngle;
    }
    public static void Get(Entity entity, SkyVisibilityMonitor.Def sm)
    {
      entity.scan_left = sm.skyVisibilityInfo.scanLeftCount;
      entity.scan_right = sm.skyVisibilityInfo.scanRightCount;
    }
    public static void Get(Entity entity, ModularConduitPortController.Def sm)
    {
      entity.mode = sm.mode.ToString();
    }
    public static void Get(Entity entity, MorbRoverMaker.Def sm)
    {

    }
    public static void Get(Entity entity, ResourceHarvestModule.Def sm)
    {
      entity.work_time = sm.harvestSpeed;
    }
    public static void Get(Entity entity, OrbitalDeployCargoModule.Def sm)
    {
      entity.num_capsules = sm.numCapsules;
    }
    public static void Get(Entity entity, BuildingInternalConstructor.Def sm)
    {
      //Debug.Log(entity.tag);
    }
    public static void Get(Entity entity, JettisonableCargoModule.Def sm) { }
    public static void Get(Entity entity, RefrigeratorController.Def sm)
    {
      if (entity.electrity_consummation is null)
      {
        entity.electrity_consummation = [null, sm.powerSaverEnergyUsage];
      }
      else
      {
        entity.electrity_consummation.Add(sm.powerSaverEnergyUsage);
      }
    }
    public static void Get(Entity entity, ScannerModule.Def sm)
    {
      entity.range_max = sm.scanRadius;
    }
    public static void Get(Entity entity, StorageTile.Def sm)
    {
      entity.storages ??= [];
      entity.storages.Add(("external", [], sm.MaxCapacity));
    }
    public static void Get(Entity entity, TemporalTearOpener.Def sm)
    {
      entity.menu = Category.Building.Quest;
    }
    public static void Get(Entity entity, Rottable.Def sm)
    {
      if (float.IsInfinity(sm.spoilTime))
      {
        return;
      }
      var recipe = new Recipe.Rotting(entity.tag, sm.spoilTime, "RotPile");
      //var sterileAtmo = Rottable.AtmosphereModifier
      //            .Where(atmo => atmo.Value == Rottable.RotAtmosphereQuality.Sterilizing)
      //            .Where(atmo => !ElementLoader.FindElementByHash((SimHashes)atmo.Key).disabled)
      //            .Select(atmo => ((SimHashes)atmo.Key).CreateTag().Name).ToArray();

      //var contaminatedAtmo = Rottable.AtmosphereModifier
      //      .Where(atmo => atmo.Value == Rottable.RotAtmosphereQuality.Contaminating)
      //      .Where(atmo => !ElementLoader.FindElementByHash((SimHashes)atmo.Key).disabled)
      //      .Select(atmo => ((SimHashes)atmo.Key).CreateTag().Name).ToArray();

      //(string[], float)[] atmoList = [
      //  (sterileAtmo, 0f),
      //  (contaminatedAtmo, 1f),
      //  (null, 0.3f)];

      //(float?, float?, float)[] tempList = [
      //  (null, sm.preserveTemperature, 0f),
      //  (sm.preserveTemperature, sm.rotTemperature, 0.2f),
      //  (sm.rotTemperature, null, 0.7f)];
    }
    public static void Get(Entity entity, RobotBatteryMonitor.Def sm) { }
    public static void Get(Entity entity, DrinkMilkMonitor.Def sm)
    {
      if (sm.consumesMilk)
        entity.milk_consummer = true;
    }
    public static void Get(Entity entity, MissileProjectile.Def sm) { }
    public static void Get(Entity entity, EntityLuminescence.Def sm)
    { // Dupe ?
      //  entity.lightAngle = sm.lightAngle;
      //  entity.lightColor = (sm.lightColor.r, sm.lightColor.g, sm.lightColor.b);
      //  entity.lightDirection = (sm.lightDirection.x, sm.lightDirection.y);
      //  entity.lightRange = sm.lightRange;
      //  entity.lightShape = sm.lightShape.ToString();
    }
    public static void Get(Entity entity, IncubationMonitor.Def sm)
    {
      Tag[] order = [
        GameTags.Creatures.Species.LightBugSpecies,
        GameTags.Creatures.Species.HatchSpecies,
        GameTags.Creatures.Species.DreckoSpecies,
        GameTags.Creatures.Species.PacuSpecies,
        GameTags.Creatures.Species.PuftSpecies,
        GameTags.Creatures.Species.CrabSpecies,
        GameTags.Creatures.Species.OilFloaterSpecies,
        GameTags.Creatures.Species.MoleSpecies,
        GameTags.Creatures.Species.SquirrelSpecies,
        GameTags.Creatures.Species.DivergentSpecies,
        GameTags.Creatures.Species.StaterpillarSpecies,
        GameTags.Creatures.Species.BeetaSpecies,
        GameTags.Creatures.Species.MooSpecies,
        GameTags.Creatures.Species.GlomSpecies,
      ];
      entity.menu_order = Array.IndexOf(order, Assets.GetPrefab(sm.spawnedCreature).GetComponent<CreatureBrain>().species);
      entity.menu = Category.Critter.Egg;
      var recipe = new Recipe.Birth(
        origin: entity.tag,
        time: 100 / sm.baseIncubationRate,
        dest: [
          ("EggShell", entity.mass.Value / 2.0f),
          (sm.spawnedCreature.Name, 1f)
        ]
      );
      recipes.Add(recipe);
    }
    public static void Get(Entity entity, OvercrowdingMonitor.Def sm)
    {
      if (sm.spaceRequiredPerCreature > 0)
        entity.space_per_critter = sm.spaceRequiredPerCreature;
    }
    public static void Get(Entity entity, SeedPlantingMonitor.Def sm)
    {
      entity.time_wait_plant_seed = (sm.searchMinInterval, sm.searchMaxInterval);
    }
    public static void Get(Entity entity, ClimbableTreeMonitor.Def sm)
    {
      entity.time_wait_climb_tree = (sm.searchMinInterval, sm.searchMaxInterval);
    }
    public static void Get(Entity entity, ThreatMonitor.Def sm)
    {
      if (sm.friendlyCreatureTags is not null && sm.friendlyCreatureTags.Length > 0)
        entity.friends = sm.friendlyCreatureTags.Select(f => f.Name).ToArray();
    }
    public static void Get(Entity entity, HappinessMonitor.Def sm)
    {
      entity.happy = sm.happyThreshold;
      entity.glum = sm.glumThreshold;
      entity.miserable = sm.miserableThreshold;
    }
    public static void Get(Entity entity, CreatureCalorieMonitor.Def sm)
    {

    }
    public static void Get(Entity entity, FertilityMonitor.Def sm)
    {
      var recipe = new Recipe.Egg(
        origin: entity.tag,
        time: sm.baseFertileCycles * 600,
        dest: sm.initialBreedingWeights
        .Select(chance => (chance.egg.Name, chance.weight / sm.initialBreedingWeights.Sum(c => c.weight)))
        .ToArray()
      );
      recipes.Add(recipe);
    }
    public static void Get(Entity entity, HugMonitor.Def sm) { }
    public static void Get(Entity entity, GasAndLiquidConsumerMonitor.Def sm) { }
    public static void Get(Entity entity, IrrigationMonitor.Def sm)
    {
      var recipe = new Recipe.Irrigation(
        sm.consumedElements.Select(e => (e.tag.Name, e.massConsumptionRate)).ToArray(),
        entity.tag);
      recipes.Add(recipe);
    }
    public static void Get(Entity entity, FertilizationMonitor.Def sm)
    {
      var recipe = new Recipe.Fertilization(
        sm.consumedElements.Select(e => (e.tag.Name, e.massConsumptionRate)).ToArray(),
        entity.tag);
      recipes.Add(recipe);
    }
    public static void Get(Entity entity, DiseaseDropper.Def sm) { }
    public static void Get(Entity entity, RobotAi.Def sm) { }
    public static void Get(Entity entity, LureableMonitor.Def sm) { }
    public static void Get(Entity entity, TravellingCargoLander.Def sm) { }
    public static void Get(Entity entity, HiveEatingMonitor.Def sm) { } // No
    public static void Get(Entity entity, HiveHarvestMonitor.Def sm) { }
    public static void Get(Entity entity, BeehiveCalorieMonitor.Def sm) { }
    public static void Get(Entity entity, BeeHappinessMonitor.Def sm)
    {
      entity.happy = sm.happyThreshold;
      entity.glum = sm.unhappyThreshold;
    }
    public static void Get(Entity entity, BeeForagingMonitor.Def sm) { }
    public static void Get(Entity entity, ScaleGrowthMonitor.Def sm) { }
    public static void Get(Entity entity, ElementDropperMonitor.Def sm) { }
    public static void Get(Entity entity, DiggerMonitor.Def sm) { }
    public static void Get(Entity entity, ElementGrowthMonitor.Def sm) { }
    public static void Get(Entity entity, BeckoningMonitor.Def sm) { }
    public static void Get(Entity entity, MilkProductionMonitor.Def sm) { }
    public static void Get(Entity entity, ClusterMapMeteorShower.Def sm) { }
    public static void Get(Entity entity, SapTree.Def sm)
    {
      entity.menu = Category.Building.Quest;
    }
    public static void Get(Entity entity, BurrowMonitor.Def sm) { }
    public static void Get(Entity entity, EggProtectionMonitor.Def sm) { }
    public static void Get(Entity entity, MoltDropperMonitor.Def sm) { }
    public static void Get(Entity entity, CleaningMonitor.Def sm) { }
    public static void Get(Entity entity, CropTendingMonitor.Def sm) { }
    public static void Get(Entity entity, BabyMonitor.Def sm)
    {
      entity.age = sm.adultThreshold;
      List<(string, float)> dest = sm.onGrowDropID is not null ? [(sm.onGrowDropID, 1)] : [];
      dest.Add((sm.adultPrefab.Name, 1));
      var recipe = new Recipe.Adult(
        origin: entity.tag,
        time: sm.adultThreshold * 600,
        dest: [.. dest]
      );
      recipes.Add(recipe);
    }
    public static void Get(Entity entity, CallAdultMonitor.Def sm) { } // No
  }
}


