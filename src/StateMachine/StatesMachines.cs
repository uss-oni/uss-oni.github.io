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
      entity.rangeMax = sm.analyzeClusterRadius;
      entity.providesO2 = sm.providesOxygen;
    }
    public static void Get(Entity entity, ContactConductivePipeBridge.Def sm) { }
    public static void Get(Entity entity, MakeBaseSolid.Def sm) { }
    public static void Get(Entity entity, MajorFossilDigSite.Def sm) { }
    public static void Get(Entity entity, FossilHuntInitializer.Def sm) { }
    public static void Get(Entity entity, GravitasCreatureManipulator.Def sm) { }
    public static void Get(Entity entity, HEPBattery.Def sm)
    {
      entity.launchRate = sm.minLaunchInterval;
      entity.radboltDecay = sm.particleDecayRate;
      entity.radboltStorage = sm.maxSlider;
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
      entity.workTime = sm.WorkTime;
    }
    public static void Get(Entity entity, MissileLauncher.Def sm)
    {
      entity.lauchSpeed = sm.launchSpeed;
      entity.rotationSpeed = sm.rotationSpeed;
      entity.rangeMax = MissileLauncher.Def.launchRange.Y;
      entity.rangeMin = MissileLauncher.Def.launchRange.X;
      entity.scanningAngle = sm.scanningAngle;
      entity.maxAngle = sm.maxAngle;
    }
    public static void Get(Entity entity, SkyVisibilityMonitor.Def sm)
    {
      entity.scanLeft = sm.skyVisibilityInfo.scanLeftCount;
      entity.scanRight = sm.skyVisibilityInfo.scanRightCount;
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
      entity.workTime = sm.harvestSpeed;
    }
    public static void Get(Entity entity, OrbitalDeployCargoModule.Def sm)
    {
      entity.numCapsules = sm.numCapsules;
    }
    public static void Get(Entity entity, BuildingInternalConstructor.Def sm)
    {
      //Debug.Log(entity.tag);
    }
    public static void Get(Entity entity, JettisonableCargoModule.Def sm) { }
    public static void Get(Entity entity, RefrigeratorController.Def sm)
    {
      if (entity.electrityConsummation is null)
      {
        entity.electrityConsummation = [null, sm.powerSaverEnergyUsage];
      }
      else
      {
        entity.electrityConsummation.Add(sm.powerSaverEnergyUsage);
      }
    }
    public static void Get(Entity entity, ScannerModule.Def sm)
    {
      entity.rangeMax = sm.scanRadius;
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
        entity.milkConsummer = true;
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
      entity.menuOrder = Array.IndexOf(order, Assets.GetPrefab(sm.spawnedCreature).GetComponent<CreatureBrain>().species);
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
        entity.spacePerCritter = sm.spaceRequiredPerCreature;
    }
    public static void Get(Entity entity, SeedPlantingMonitor.Def sm)
    {
      entity.timeWaitPlantSeed = (sm.searchMinInterval, sm.searchMaxInterval);
    }
    public static void Get(Entity entity, ClimbableTreeMonitor.Def sm)
    {
      entity.timeWaitClimbTree = (sm.searchMinInterval, sm.searchMaxInterval);
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
      var recipe = new Recipe.Egg (
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
    public static void Get(Entity entity, IrrigationMonitor.Def sm) { }
    public static void Get(Entity entity, FertilizationMonitor.Def sm) { }
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
      var recipe = new Recipe.Adult (
        origin: entity.tag,
        time: sm.adultThreshold * 600,
        dest: [.. dest]
      );
      recipes.Add(recipe);
    }
    public static void Get(Entity entity, CallAdultMonitor.Def sm) { } // No
  }
}


