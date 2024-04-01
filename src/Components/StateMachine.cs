namespace USS
{
  public static partial class Components
  {
     public static void Get(Entity entity, StateMachineController component)
    {
      foreach (var smc in component.cmpdef.defs)
      {
        entity.smdef ??= [];
        entity.smdef.Add(smc.GetType().FullName);
        if (smc is PoweredController.Def PoweredControllerDef_)
        {
          StateMachines.Get(entity, PoweredControllerDef_);
        }
        if (smc is CritterCondo.Def CritterCondoDef_)
        {
          StateMachines.Get(entity, CritterCondoDef_);
        }
        if (smc is PoweredActiveController.Def PoweredActiveControllerDef_)
        {
          StateMachines.Get(entity, PoweredActiveControllerDef_);
        }
        if (smc is ActiveController.Def ActiveControllerDef_)
        {
          StateMachines.Get(entity, ActiveControllerDef_);
        }
        if (smc is PoweredActiveStoppableController.Def PoweredActiveStoppableControllerDef_)
        {
          StateMachines.Get(entity, PoweredActiveStoppableControllerDef_);
        }
        if (smc is RocketUsageRestriction.Def RocketUsageRestrictionDef_)
        {
          StateMachines.Get(entity, RocketUsageRestrictionDef_);
        }
        if (smc is ArtifactAnalysisStation.Def ArtifactAnalysisStationDef_)
        {
          StateMachines.Get(entity, ArtifactAnalysisStationDef_);
        }
        if (smc is ArtifactHarvestModule.Def ArtifactHarvestModuleDef_)
        {
          StateMachines.Get(entity, ArtifactHarvestModuleDef_);
        }
        if (smc is LightController.Def LightControllerDef_)
        {
          StateMachines.Get(entity, LightControllerDef_);
        }
        if (smc is Chlorinator.Def ChlorinatorDef_)
        {
          StateMachines.Get(entity, ChlorinatorDef_);
        }
        if (smc is ClusterTelescope.Def ClusterTelescopeDef_)
        {
          StateMachines.Get(entity, ClusterTelescopeDef_);
        }
        if (smc is ClusterCometDetector.Def ClusterCometDetectorDef_)
        {
          StateMachines.Get(entity, ClusterCometDetectorDef_);
        }
        if (smc is ContactConductivePipeBridge.Def ContactConductivePipeBridgeDef_)
        {
          StateMachines.Get(entity, ContactConductivePipeBridgeDef_);
        }
        if (smc is StorageController.Def StorageControllerDef_)
        {
          StateMachines.Get(entity, StorageControllerDef_);
        }
        if (smc is FixedCapturePoint.Def FixedCapturePointDef_)
        {
          StateMachines.Get(entity, FixedCapturePointDef_);
        }
        if (smc is AutoStorageDropper.Def AutoStorageDropperDef_)
        {
          StateMachines.Get(entity, AutoStorageDropperDef_);
        }
        if (smc is OperationalController.Def OperationalControllerDef_)
        {
          StateMachines.Get(entity, OperationalControllerDef_);
        }
        if (smc is MakeBaseSolid.Def MakeBaseSolidDef_)
        {
          StateMachines.Get(entity, MakeBaseSolidDef_);
        }
        if (smc is FishFeeder.Def FishFeederDef_)
        {
          StateMachines.Get(entity, FishFeederDef_);
        }
        if (smc is FoodDehydrator.Def FoodDehydratorDef_)
        {
          StateMachines.Get(entity, FoodDehydratorDef_);
        }
        if (smc is FoodRehydratorSM.Def FoodRehydratorSMDef_)
        {
          StateMachines.Get(entity, FoodRehydratorSMDef_);
        }
        if (smc is MajorFossilDigSite.Def MajorFossilDigSiteDef_)
        {
          StateMachines.Get(entity, MajorFossilDigSiteDef_);
        }
        if (smc is FossilHuntInitializer.Def FossilHuntInitializerDef_)
        {
          StateMachines.Get(entity, FossilHuntInitializerDef_);
        }
        if (smc is PoweredActiveTransitionController.Def PoweredActiveTransitionControllerDef_)
        {
          StateMachines.Get(entity, PoweredActiveTransitionControllerDef_);
        }
        if (smc is VentController.Def VentControllerDef_)
        {
          StateMachines.Get(entity, VentControllerDef_);
        }
        if (smc is GeneticAnalysisStation.Def GeneticAnalysisStationDef_)
        {
          StateMachines.Get(entity, GeneticAnalysisStationDef_);
        }
        if (smc is GeoTuner.Def GeoTunerDef_)
        {
          StateMachines.Get(entity, GeoTunerDef_);
        }
        if (smc is GravitasCreatureManipulator.Def GravitasCreatureManipulatorDef_)
        {
          StateMachines.Get(entity, GravitasCreatureManipulatorDef_);
        }
        if (smc is HEPBattery.Def HEPBatteryDef_)
        {
          StateMachines.Get(entity, HEPBatteryDef_);
        }
        if (smc is SimpleDoorController.Def SimpleDoorControllerDef_)
        {
          StateMachines.Get(entity, SimpleDoorControllerDef_);
        }
        if (smc is LadderBed.Def LadderBedDef_)
        {
          StateMachines.Get(entity, LadderBedDef_);
        }
        if (smc is LandingBeacon.Def LandingBeaconDef_)
        {
          StateMachines.Get(entity, LandingBeaconDef_);
        }
        if (smc is ChainedBuilding.Def ChainedBuildingDef_)
        {
          StateMachines.Get(entity, ChainedBuildingDef_);
        }
        if (smc is LaunchPadMaterialDistributor.Def LaunchPadMaterialDistributorDef_)
        {
          StateMachines.Get(entity, LaunchPadMaterialDistributorDef_);
        }
        if (smc is LonelyMinionHouse.Def LonelyMinionHouseDef_)
        {
          StateMachines.Get(entity, LonelyMinionHouseDef_);
        }
        if (smc is MilkSeparator.Def MilkSeparatorDef_)
        {
          StateMachines.Get(entity, MilkSeparatorDef_);
        }
        if (smc is MilkFeeder.Def MilkFeederDef_)
        {
          StateMachines.Get(entity, MilkFeederDef_);
        }
        if (smc is RanchStation.Def RanchStationDef_)
        {
          StateMachines.Get(entity, RanchStationDef_);
        }
        if (smc is MissileLauncher.Def MissileLauncherDef_)
        {
          StateMachines.Get(entity, MissileLauncherDef_);
        }
        if (smc is SkyVisibilityMonitor.Def SkyVisibilityMonitorDef_)
        {
          StateMachines.Get(entity, SkyVisibilityMonitorDef_);
        }
        if (smc is MissionControlCluster.Def MissionControlClusterDef_)
        {
          StateMachines.Get(entity, MissionControlClusterDef_);
        }
        if (smc is ModularConduitPortController.Def ModularConduitPortControllerDef_)
        {
          StateMachines.Get(entity, ModularConduitPortControllerDef_);
        }
        if (smc is MorbRoverMaker.Def MorbRoverMakerDef_)
        {
          StateMachines.Get(entity, MorbRoverMakerDef_);
        }
        if (smc is MorbRoverMakerStorytrait.Def MorbRoverMakerStorytraitDef_)
        {
          StateMachines.Get(entity, MorbRoverMakerStorytraitDef_);
        }
        if (smc is MorbRoverMakerDisplay.Def MorbRoverMakerDisplayDef_)
        {
          StateMachines.Get(entity, MorbRoverMakerDisplayDef_);
        }
        if (smc is ResourceHarvestModule.Def ResourceHarvestModuleDef_)
        {
          StateMachines.Get(entity, ResourceHarvestModuleDef_);
        }
        if (smc is OrbitalDeployCargoModule.Def OrbitalDeployCargoModuleDef_)
        {
          StateMachines.Get(entity, OrbitalDeployCargoModuleDef_);
        }
        if (smc is BuildingInternalConstructor.Def BuildingInternalConstructorDef_)
        {
          StateMachines.Get(entity, BuildingInternalConstructorDef_);
        }
        if (smc is JettisonableCargoModule.Def JettisonableCargoModuleDef_)
        {
          StateMachines.Get(entity, JettisonableCargoModuleDef_);
        }
        if (smc is RefrigeratorController.Def RefrigeratorControllerDef_)
        {
          StateMachines.Get(entity, RefrigeratorControllerDef_);
        }
        if (smc is ScannerModule.Def ScannerModuleDef_)
        {
          StateMachines.Get(entity, ScannerModuleDef_);
        }
        if (smc is SpecialCargoBayCluster.Def SpecialCargoBayClusterDef_)
        {
          StateMachines.Get(entity, SpecialCargoBayClusterDef_);
        }
        if (smc is SpiceGrinder.Def SpiceGrinderDef_)
        {
          StateMachines.Get(entity, SpiceGrinderDef_);
        }
        if (smc is StorageTile.Def StorageTileDef_)
        {
          StateMachines.Get(entity, StorageTileDef_);
        }
        if (smc is TemporalTearOpener.Def TemporalTearOpenerDef_)
        {
          StateMachines.Get(entity, TemporalTearOpenerDef_);
        }
        if (smc is ReusableTrap.Def ReusableTrapDef_)
        {
          StateMachines.Get(entity, ReusableTrapDef_);
        }
        if (smc is Lure.Def LureDef_)
        {
          StateMachines.Get(entity, LureDef_);
        }
        if (smc is WaterTrapTrail.Def WaterTrapTrailDef_)
        {
          StateMachines.Get(entity, WaterTrapTrailDef_);
        }
        if (smc is Rottable.Def RottableDef_)
        {
          StateMachines.Get(entity, RottableDef_);
        }
        if (smc is MinorFossilDigSite.Def MinorFossilDigSiteDef_)
        {
          StateMachines.Get(entity, MinorFossilDigSiteDef_);
        }
        if (smc is GravitasLocker.Def GravitasLockerDef_)
        {
          StateMachines.Get(entity, GravitasLockerDef_);
        }
        if (smc is CargoLander.Def CargoLanderDef_)
        {
          StateMachines.Get(entity, CargoLanderDef_);
        }
        if (smc is CargoDropperStorage.Def CargoDropperStorageDef_)
        {
          StateMachines.Get(entity, CargoDropperStorageDef_);
        }
        if (smc is RailGunPayload.Def RailGunPayloadDef_)
        {
          StateMachines.Get(entity, RailGunPayloadDef_);
        }
        if (smc is AnimInterruptMonitor.Def AnimInterruptMonitorDef_)
        {
          StateMachines.Get(entity, AnimInterruptMonitorDef_);
        }
        if (smc is StorageUnloadMonitor.Def StorageUnloadMonitorDef_)
        {
          StateMachines.Get(entity, StorageUnloadMonitorDef_);
        }
        if (smc is RobotBatteryMonitor.Def RobotBatteryMonitorDef_)
        {
          StateMachines.Get(entity, RobotBatteryMonitorDef_);
        }
        if (smc is SweepBotReactMonitor.Def SweepBotReactMonitorDef_)
        {
          StateMachines.Get(entity, SweepBotReactMonitorDef_);
        }
        if (smc is CreatureFallMonitor.Def CreatureFallMonitorDef_)
        {
          StateMachines.Get(entity, CreatureFallMonitorDef_);
        }
        if (smc is SweepBotTrappedMonitor.Def SweepBotTrappedMonitorDef_)
        {
          StateMachines.Get(entity, SweepBotTrappedMonitorDef_);
        }
        if (smc is DrinkMilkMonitor.Def DrinkMilkMonitorDef_)
        {
          StateMachines.Get(entity, DrinkMilkMonitorDef_);
        }
        if (smc is MissileProjectile.Def MissileProjectileDef_)
        {
          StateMachines.Get(entity, MissileProjectileDef_);
        }
        if (smc is DebugGoToMonitor.Def DebugGoToMonitorDef_)
        {
          StateMachines.Get(entity, DebugGoToMonitorDef_);
        }
        if (smc is EntityLuminescence.Def EntityLuminescenceDef_)
        {
          StateMachines.Get(entity, EntityLuminescenceDef_);
        }
        if (smc is MorbRoverMakerKeepsake.Def MorbRoverMakerKeepsakeDef_)
        {
          StateMachines.Get(entity, MorbRoverMakerKeepsakeDef_);
        }
        if (smc is CargoDropperMinion.Def CargoDropperMinionDef_)
        {
          StateMachines.Get(entity, CargoDropperMinionDef_);
        }
        if (smc is IncubationMonitor.Def IncubationMonitorDef_)
        {
          StateMachines.Get(entity, IncubationMonitorDef_);
        }
        if (smc is OvercrowdingMonitor.Def OvercrowdingMonitorDef_)
        {
          StateMachines.Get(entity, OvercrowdingMonitorDef_);
        }
        if (smc is CreatureDebugGoToMonitor.Def CreatureDebugGoToMonitorDef_)
        {
          StateMachines.Get(entity, CreatureDebugGoToMonitorDef_);
        }
        if (smc is DeathMonitor.Def DeathMonitorDef_)
        {
          StateMachines.Get(entity, DeathMonitorDef_);
        }
        if (smc is SeedPlantingMonitor.Def SeedPlantingMonitorDef_)
        {
          StateMachines.Get(entity, SeedPlantingMonitorDef_);
        }
        if (smc is ClimbableTreeMonitor.Def ClimbableTreeMonitorDef_)
        {
          StateMachines.Get(entity, ClimbableTreeMonitorDef_);
        }
        if (smc is ThreatMonitor.Def ThreatMonitorDef_)
        {
          StateMachines.Get(entity, ThreatMonitorDef_);
        }
        if (smc is CritterCondoInteractMontior.Def CritterCondoInteractMontiorDef_)
        {
          StateMachines.Get(entity, CritterCondoInteractMontiorDef_);
        }
        if (smc is AgeMonitor.Def AgeMonitorDef_)
        {
          StateMachines.Get(entity, AgeMonitorDef_);
        }
        if (smc is HappinessMonitor.Def HappinessMonitorDef_)
        {
          StateMachines.Get(entity, HappinessMonitorDef_);
        }
        if (smc is WildnessMonitor.Def WildnessMonitorDef_)
        {
          StateMachines.Get(entity, WildnessMonitorDef_);
        }
        if (smc is FixedCapturableMonitor.Def FixedCapturableMonitorDef_)
        {
          StateMachines.Get(entity, FixedCapturableMonitorDef_);
        }
        if (smc is CreatureCalorieMonitor.Def CreatureCalorieMonitorDef_)
        {
          StateMachines.Get(entity, CreatureCalorieMonitorDef_);
        }
        if (smc is SolidConsumerMonitor.Def SolidConsumerMonitorDef_)
        {
          StateMachines.Get(entity, SolidConsumerMonitorDef_);
        }
        if (smc is FertilityMonitor.Def FertilityMonitorDef_)
        {
          StateMachines.Get(entity, FertilityMonitorDef_);
        }
        if (smc is RanchableMonitor.Def RanchableMonitorDef_)
        {
          StateMachines.Get(entity, RanchableMonitorDef_);
        }
        if (smc is HugMonitor.Def HugMonitorDef_)
        {
          StateMachines.Get(entity, HugMonitorDef_);
        }
        if (smc is ConduitSleepMonitor.Def ConduitSleepMonitorDef_)
        {
          StateMachines.Get(entity, ConduitSleepMonitorDef_);
        }
        if (smc is GasAndLiquidConsumerMonitor.Def GasAndLiquidConsumerMonitorDef_)
        {
          StateMachines.Get(entity, GasAndLiquidConsumerMonitorDef_);
        }
        if (smc is RadiationVulnerable.Def RadiationVulnerableDef_)
        {
          StateMachines.Get(entity, RadiationVulnerableDef_);
        }
        if (smc is IrrigationMonitor.Def IrrigationMonitorDef_)
        {
          StateMachines.Get(entity, IrrigationMonitorDef_);
        }
        if (smc is FertilizationMonitor.Def FertilizationMonitorDef_)
        {
          StateMachines.Get(entity, FertilizationMonitorDef_);
        }
        if (smc is DiseaseDropper.Def DiseaseDropperDef_)
        {
          StateMachines.Get(entity, DiseaseDropperDef_);
        }
        if (smc is RobotAi.Def RobotAiDef_)
        {
          StateMachines.Get(entity, RobotAiDef_);
        }
        if (smc is LureableMonitor.Def LureableMonitorDef_)
        {
          StateMachines.Get(entity, LureableMonitorDef_);
        }
        if (smc is SubmergedMonitor.Def SubmergedMonitorDef_)
        {
          StateMachines.Get(entity, SubmergedMonitorDef_);
        }
        if (smc is TravellingCargoLander.Def TravellingCargoLanderDef_)
        {
          StateMachines.Get(entity, TravellingCargoLanderDef_);
        }
        if (smc is BeeHive.Def BeeHiveDef_)
        {
          StateMachines.Get(entity, BeeHiveDef_);
        }
        if (smc is HiveGrowthMonitor.Def HiveGrowthMonitorDef_)
        {
          StateMachines.Get(entity, HiveGrowthMonitorDef_);
        }
        if (smc is HiveEatingMonitor.Def HiveEatingMonitorDef_)
        {
          StateMachines.Get(entity, HiveEatingMonitorDef_);
        }
        if (smc is HiveHarvestMonitor.Def HiveHarvestMonitorDef_)
        {
          StateMachines.Get(entity, HiveHarvestMonitorDef_);
        }
        if (smc is BeehiveCalorieMonitor.Def BeehiveCalorieMonitorDef_)
        {
          StateMachines.Get(entity, BeehiveCalorieMonitorDef_);
        }
        if (smc is BeeHappinessMonitor.Def BeeHappinessMonitorDef_)
        {
          StateMachines.Get(entity, BeeHappinessMonitorDef_);
        }
        if (smc is BeeSleepMonitor.Def BeeSleepMonitorDef_)
        {
          StateMachines.Get(entity, BeeSleepMonitorDef_);
        }
        if (smc is BeeForagingMonitor.Def BeeForagingMonitorDef_)
        {
          StateMachines.Get(entity, BeeForagingMonitorDef_);
        }
        if (smc is ScaleGrowthMonitor.Def ScaleGrowthMonitorDef_)
        {
          StateMachines.Get(entity, ScaleGrowthMonitorDef_);
        }
        if (smc is ElementDropperMonitor.Def ElementDropperMonitorDef_)
        {
          StateMachines.Get(entity, ElementDropperMonitorDef_);
        }
        if (smc is CreatureLightToggleController.Def CreatureLightToggleControllerDef_)
        {
          StateMachines.Get(entity, CreatureLightToggleControllerDef_);
        }
        if (smc is DiggerMonitor.Def DiggerMonitorDef_)
        {
          StateMachines.Get(entity, DiggerMonitorDef_);
        }
        if (smc is ElementGrowthMonitor.Def ElementGrowthMonitorDef_)
        {
          StateMachines.Get(entity, ElementGrowthMonitorDef_);
        }
        if (smc is BeckoningMonitor.Def BeckoningMonitorDef_)
        {
          StateMachines.Get(entity, BeckoningMonitorDef_);
        }
        if (smc is MilkProductionMonitor.Def MilkProductionMonitorDef_)
        {
          StateMachines.Get(entity, MilkProductionMonitorDef_);
        }
        if (smc is ClusterMapMeteorShower.Def ClusterMapMeteorShowerDef_)
        {
          StateMachines.Get(entity, ClusterMapMeteorShowerDef_);
        }
        if (smc is SapTree.Def SapTreeDef_)
        {
          StateMachines.Get(entity, SapTreeDef_);
        }
        if (smc is BurrowMonitor.Def BurrowMonitorDef_)
        {
          StateMachines.Get(entity, BurrowMonitorDef_);
        }
        if (smc is WorldSpawnableMonitor.Def WorldSpawnableMonitorDef_)
        {
          StateMachines.Get(entity, WorldSpawnableMonitorDef_);
        }
        if (smc is EggProtectionMonitor.Def EggProtectionMonitorDef_)
        {
          StateMachines.Get(entity, EggProtectionMonitorDef_);
        }
        if (smc is MoltDropperMonitor.Def MoltDropperMonitorDef_)
        {
          StateMachines.Get(entity, MoltDropperMonitorDef_);
        }
        if (smc is CleaningMonitor.Def CleaningMonitorDef_)
        {
          StateMachines.Get(entity, CleaningMonitorDef_);
        }
        if (smc is FishOvercrowdingMonitor.Def FishOvercrowdingMonitorDef_)
        {
          StateMachines.Get(entity, FishOvercrowdingMonitorDef_);
        }
        if (smc is FlopMonitor.Def FlopMonitorDef_)
        {
          StateMachines.Get(entity, FlopMonitorDef_);
        }
        if (smc is CropTendingMonitor.Def CropTendingMonitorDef_)
        {
          StateMachines.Get(entity, CropTendingMonitorDef_);
        }
        if (smc is SegmentedCreature.Def SegmentedCreatureDef_)
        {
          StateMachines.Get(entity, SegmentedCreatureDef_);
        }
        if (smc is BabyMonitor.Def BabyMonitorDef_)
        {
          StateMachines.Get(entity, BabyMonitorDef_);
        }
        if (smc is IncubatorMonitor.Def IncubatorMonitorDef_)
        {
          StateMachines.Get(entity, IncubatorMonitorDef_);
        }
        if (smc is CreatureSleepMonitor.Def CreatureSleepMonitorDef_)
        {
          StateMachines.Get(entity, CreatureSleepMonitorDef_);
        }
        if (smc is CallAdultMonitor.Def CallAdultMonitorDef_)
        {
          StateMachines.Get(entity, CallAdultMonitorDef_);
        }
        if (smc is BeeHiveMonitor.Def BeeHiveMonitorDef_)
        {
          StateMachines.Get(entity, BeeHiveMonitorDef_);
        }
      }
    }
  }
}