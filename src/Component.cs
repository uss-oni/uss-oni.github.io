using System.Drawing.Drawing2D;
using Database;
using Klei.AI;
using static USS.DB;

namespace USS
{
  public static partial class Components
  {
    public static void Get(Entity entity, object component, string type)
    {
      if (type == "DehydratedFoodPackage")
      {
        entity.menu = Category.Food.Dehydrated;
      }
    }
    public static void Get(Entity entity, DecorProvider component)
    {
      if (component.baseDecor != 0f)
      {
        entity.decor = component.baseDecor;
        entity.decorRadius = component.baseRadius;
      }
    }
    public static void Get(Entity entity, Clearable component)
    {
      if (component.isClearable)
      {
        entity.clearable = true;
      }
    }
    public static void Get(Entity entity, Sublimates component)
    {
      var recipe = new Recipe.SublimateChunk(
        origin: entity.tag,
        power: component.info.massPower,
        rate: component.info.sublimationRate,
        tempMin: ElementLoader.GetElement(component.info.sublimatedElement.CreateTag()).lowTemp,
        minAmount: component.info.minSublimationAmount,
        pressionMax: component.info.maxDestinationMass,
        dest: component.info.sublimatedElement.CreateTag().Name
      );
      recipes.Add(recipe);
      //Mathf.Max(info.sublimationRate, info.sublimationRate * Mathf.Pow(mass, info.massPower)) * dt;
    }

    public static void Get(Entity entity, BuildingComplete component)
    {
      //entity.category = "Building";
    }
    public static void Get(Entity entity, Deconstructable component)
    {
      entity.deconstructable = component.allowDeconstruction;
    }

    public static void Get(Entity entity, BuildingEnabledButton component)
    {
      entity.enableable = true; // That's a word ?
    }
    public static void Get(Entity entity, BuildingHP component)
    {
      if (component.invincible)
      {
        entity.invincible = true;
      }
      else
      {
        entity.hp = component.MaxHitPoints;
      }
    }


    public static void Get(Entity entity, Repairable component) { }
    public static void Get(Entity entity, BuildingFacade component) { }
    public static void Get(Entity entity, EnergyConsumer component)
    {
      if (entity.electrityConsummation is null)
      {
        entity.electrityConsummation = [component.WattsNeededWhenActive];
      }
      else
      {
        entity.electrityConsummation[0] = component.WattsNeededWhenActive;
      }
    }
    public static void Get(Entity entity, RequireInputs component) { }
    public static void Get(Entity entity, Floodable component)
    {
      entity.floodThreshold = 0.35f;
    }

    public static void Get(Entity entity, Overheatable component) { }
    public static void Get(Entity entity, Structure component) { }
    public static void Get(Entity entity, LogicPorts component) { }
    public static void Get(Entity entity, LogicOperationalController component) { }
    public static void Get(Entity entity, BuildingCellVisualizer component) { }
    public static void Get(Entity entity, Toggleable component) { }
    public static void Get(Entity entity, Storage component) { }
    public static void Get(Entity entity, ManualDeliveryKG component) { }
    public static void Get(Entity entity, DoctorStation component) { }
    public static void Get(Entity entity, RoomTracker component) { }
    public static void Get(Entity entity, DoctorStationDoctorWorkable component) { }
    public static void Get(Entity entity, ResearchCenter component) { }
    public static void Get(Entity entity, ElementConverter component) { }
    public static void Get(Entity entity, Notifier component) { }
    public static void Get(Entity entity, Rotatable component) { }
    public static void Get(Entity entity, AirConditioner component) { }
    public static void Get(Entity entity, ConduitConsumer component) { }
    public static void Get(Entity entity, BuildingConduitEndpoints component) { }
    public static void Get(Entity entity, Breakable component) { }
    public static void Get(Entity entity, RequireOutputs component) { }
    public static void Get(Entity entity, ElementConsumer component) { }
    public static void Get(Entity entity, ElementDropper component) { }
    public static void Get(Entity entity, AirFilter component) { }
    public static void Get(Entity entity, AlgaeDistillery component) { }
    public static void Get(Entity entity, ConduitDispenser component) { }
    public static void Get(Entity entity, AlgaeHabitatEmpty component) { }
    public static void Get(Entity entity, AlgaeHabitat component) { }
    public static void Get(Entity entity, PassiveElementConsumer component) { }
    public static void Get(Entity entity, AnimTileable component) { }
    public static void Get(Entity entity, DropAllWorkable component) { }
    public static void Get(Entity entity, Apothecary component) { }
    public static void Get(Entity entity, ComplexFabricatorWorkable component) { }
    public static void Get(Entity entity, FabricatorIngredientStatusManager component) { }
    public static void Get(Entity entity, ComplexFabricatorSM component) { }
    public static void Get(Entity entity, ArcadeMachine component) { }
    public static void Get(Entity entity, ArtifactAnalysisStationWorkable component) { }
    public static void Get(Entity entity, BuildingAttachPoint component) { }
    public static void Get(Entity entity, AttachableBuilding component) { }
    public static void Get(Entity entity, RocketModuleCluster component) { }
    public static void Get(Entity entity, VerticalModuleTiler component) { }
    public static void Get(Entity entity, ReorderableBuilding component) { }
    public static void Get(Entity entity, ArtifactModule component) { }
    public static void Get(Entity entity, ItemPedestal component) { }
    public static void Get(Entity entity, MiningSounds component) { }
    public static void Get(Entity entity, AutoMiner component) { }
    public static void Get(Entity entity, RangeVisualizer component) { }
    public static void Get(Entity entity, Battery component) { }
    public static void Get(Entity entity, ModuleBattery component) { }
    public static void Get(Entity entity, WireUtilitySemiVirtualNetworkLink component) { }
    public static void Get(Entity entity, BatterySmart component) { }
    public static void Get(Entity entity, BeachChairWorkable component) { }
    public static void Get(Entity entity, BeachChair component) { }
    public static void Get(Entity entity, Bed component) { }
    public static void Get(Entity entity, Sleepable component) { }
    public static void Get(Entity entity, Ownable component) { }
    public static void Get(Entity entity, TreeFilterable component) { }
    public static void Get(Entity entity, BottleEmptier component) { }
    public static void Get(Entity entity, Door component) { }
    public static void Get(Entity entity, ZoneTile component) { }
    public static void Get(Entity entity, SimCellOccupier component) { }
    public static void Get(Entity entity, TileTemperature component) { }
    public static void Get(Entity entity, KAnimGridTileVisualizer component) { }
    public static void Get(Entity entity, RocketEngineCluster component) { }
    public static void Get(Entity entity, FuelTank component) { }
    public static void Get(Entity entity, SymbolOverrideController component) { }
    public static void Get(Entity entity, Painting component) { }
    public static void Get(Entity entity, Light2D component) { }
    public static void Get(Entity entity, Checkpoint component) { }
    public static void Get(Entity entity, ComplexFabricator component) { }
    public static void Get(Entity entity, SkyVisibilityVisualizer component) { }
    public static void Get(Entity entity, ScannerNetworkVisualizer component) { }
    public static void Get(Entity entity, Compost component) { }
    public static void Get(Entity entity, CompostWorkable component) { }
    public static void Get(Entity entity, ConduitDiseaseSensor component) { }
    public static void Get(Entity entity, Filterable component) { }
    public static void Get(Entity entity, ConduitElementSensor component) { }
    public static void Get(Entity entity, ConduitTemperatureSensor component) { }
    public static void Get(Entity entity, StructureToStructureTemperature component) { }
    public static void Get(Entity entity, CookingStation component) { }
    public static void Get(Entity entity, StorageLocker component) { }
    public static void Get(Entity entity, UserNameable component) { }
    public static void Get(Entity entity, CreatureFeeder component) { }
    public static void Get(Entity entity, CreatureDeliveryPoint component) { }
    public static void Get(Entity entity, BaggableCritterCapacityTracker component) { }
    public static void Get(Entity entity, HandSanitizer component) { }
    public static void Get(Entity entity, DirectionControl component) { }
    public static void Get(Entity entity, HandSanitizer.Work component) { }
    public static void Get(Entity entity, OreScrubber.Work component) { }
    public static void Get(Entity entity, TravelTubeEntrance.Work component) { }
    public static void Get(Entity entity, DevGenerator component) { }
    public static void Get(Entity entity, DevHEPSpawner component) { }
    public static void Get(Entity entity, HighEnergyParticlePort component) { }
    public static void Get(Entity entity, ElementEmitter component) { }
    public static void Get(Entity entity, DevLifeSupport component) { }
    public static void Get(Entity entity, DevLightGenerator component) { }
    public static void Get(Entity entity, DevPump component) { }
    public static void Get(Entity entity, SolidConduitDispenser component) { }
    public static void Get(Entity entity, RadiationEmitter component) { }
    public static void Get(Entity entity, DevRadiationEmitter component) { }
    public static void Get(Entity entity, HighEnergyParticleStorage component) { }
    public static void Get(Entity entity, MessStation component) { }
    public static void Get(Entity entity, AccessControl component) { }
    public static void Get(Entity entity, EggCracker component) { }
    public static void Get(Entity entity, EggIncubator component) { }
    public static void Get(Entity entity, EggIncubatorWorkable component) { }
    public static void Get(Entity entity, Electrolyzer component) { }
    public static void Get(Entity entity, EspressoMachineWorkable component) { }
    public static void Get(Entity entity, EspressoMachine component) { }
    public static void Get(Entity entity, LoreBearer component) { }
    public static void Get(Entity entity, Telepad component) { }
    public static void Get(Entity entity, SocialGatheringPoint component) { }
    public static void Get(Entity entity, RoleStation component) { }
    public static void Get(Entity entity, Activatable component) { }
    public static void Get(Entity entity, TinkerStation component) { }
    public static void Get(Entity entity, PlantablePlot component) { }
    public static void Get(Entity entity, WaterPurifier component) { }
    public static void Get(Entity entity, BuildingElementEmitter component) { }
    public static void Get(Entity entity, Ladder component) { }
    public static void Get(Entity entity, LogicMassSensor component) { }
    public static void Get(Entity entity, FlowerVase component) { }
    public static void Get(Entity entity, FlushToilet component) { }
    public static void Get(Entity entity, ToiletWorkableUse component) { }
    public static void Get(Entity entity, FoodDehydratorWorkableEmpty component) { }
    public static void Get(Entity entity, FoodRehydrator.AccessabilityManager component) { }
    public static void Get(Entity entity, FoodRehydrator.DehydratedManager component) { }
    public static void Get(Entity entity, FoodRehydrator.ResourceRequirementMonitor component) { }
    public static void Get(Entity entity, MajorDigSiteWorkable component) { }
    public static void Get(Entity entity, EntombVulnerable component) { }
    public static void Get(Entity entity, FossilMineWorkable component) { }
    public static void Get(Entity entity, FossilMine component) { }
    public static void Get(Entity entity, Demolishable component)
    {
      entity.menu = Category.Building.Gravitas;
    }
    public static void Get(Entity entity, FossilDigsiteLampLight component) { }
    public static void Get(Entity entity, FossilMineSM component) { }
    public static void Get(Entity entity, Gantry component) { }
    public static void Get(Entity entity, FakeFloorAdder component) { }
    public static void Get(Entity entity, GasBottler component) { }
    public static void Get(Entity entity, CargoBayCluster component) { }
    public static void Get(Entity entity, ConduitBridge component) { }
    public static void Get(Entity entity, Conduit component) { }
    public static void Get(Entity entity, EmptyConduitWorkable component) { }
    public static void Get(Entity entity, KAnimGraphTileVisualizer component) { }
    public static void Get(Entity entity, ElementFilter component) { }
    public static void Get(Entity entity, LimitValve component) { }
    public static void Get(Entity entity, OperationalValve component) { }
    public static void Get(Entity entity, Pump component) { }
    public static void Get(Entity entity, Reservoir component) { }
    public static void Get(Entity entity, SmartReservoir component) { }
    public static void Get(Entity entity, ValveBase component) { }
    public static void Get(Entity entity, Valve component) { }
    public static void Get(Entity entity, Exhaust component) { }
    public static void Get(Entity entity, Vent component) { }
    public static void Get(Entity entity, SimpleVent component) { }
    public static void Get(Entity entity, EnergyGenerator component) { }
    public static void Get(Entity entity, Tinkerable component) { }
    public static void Get(Entity entity, Klei.AI.Effects component) { }
    public static void Get(Entity entity, GeneticAnalysisStationWorkable component) { }
    public static void Get(Entity entity, GeoTunerWorkable component) { }
    public static void Get(Entity entity, GeoTunerSwitchGeyserWorkable component) { }
    public static void Get(Entity entity, GlassForge component) { }
    public static void Get(Entity entity, GourmetCookingStation component) { }
    public static void Get(Entity entity, Grave component) { }
    public static void Get(Entity entity, PajamaDispenser component) { }
    public static void Get(Entity entity, SingleEntityReceptacle component) { }
    public static void Get(Entity entity, PedestalArtifactSpawner component) { }
    public static void Get(Entity entity, HighEnergyParticleRedirector component) { }
    public static void Get(Entity entity, HEPFuelTank component) { }
    public static void Get(Entity entity, AssignmentGroupController component) { }
    public static void Get(Entity entity, PassengerRocketModule component) { }
    public static void Get(Entity entity, ClustercraftExteriorDoor component) { }
    public static void Get(Entity entity, NavTeleporter component) { }
    public static void Get(Entity entity, LaunchableRocketCluster component) { }
    public static void Get(Entity entity, RocketCommandConditions component) { }
    public static void Get(Entity entity, RocketProcessConditionDisplayTarget component) { }
    public static void Get(Entity entity, RocketLaunchConditionVisualizer component) { }
    public static void Get(Entity entity, CharacterOverlay component) { }
    public static void Get(Entity entity, RocketConduitSender component) { }
    public static void Get(Entity entity, RocketConduitReceiver component) { }
    public static void Get(Entity entity, HighEnergyParticleSpawner component) { }
    public static void Get(Entity entity, HotTub component) { }
    public static void Get(Entity entity, ModuleGenerator component) { }
    public static void Get(Entity entity, PlanterBox component) { }
    public static void Get(Entity entity, MinimumOperatingTemperature component) { }
    public static void Get(Entity entity, IceCooledFan component) { }
    public static void Get(Entity entity, IceCooledFanWorkable component) { }
    public static void Get(Entity entity, IceMachine component) { }
    public static void Get(Entity entity, Sculpture component) { }
    public static void Get(Entity entity, Insulator component) { }
    public static void Get(Entity entity, SuitLocker component) { }
    public static void Get(Entity entity, JetSuitLocker component) { }
    public static void Get(Entity entity, SuitLocker.ReturnSuitWorkable component) { }
    public static void Get(Entity entity, SuitMarker component) { }
    public static void Get(Entity entity, JuicerWorkable component) { }
    public static void Get(Entity entity, Juicer component) { }
    public static void Get(Entity entity, LaunchPad component) { }
    public static void Get(Entity entity, LaunchPadConditions component) { }
    public static void Get(Entity entity, ModularConduitPortTiler component) { }
    public static void Get(Entity entity, LeadSuitLocker component) { }
    public static void Get(Entity entity, DropToUserCapacity component) { }
    public static void Get(Entity entity, SpaceHeater component) { }
    public static void Get(Entity entity, LiquidPumpingStation component) { }
    public static void Get(Entity entity, LogicAlarm component) { }
    public static void Get(Entity entity, LogicClusterLocationSensor component) { }
    public static void Get(Entity entity, LogicCounter component) { }
    public static void Get(Entity entity, LogicCritterCountSensor component) { }
    public static void Get(Entity entity, LogicDiseaseSensor component) { }
    public static void Get(Entity entity, LogicDuplicantSensor component) { }
    public static void Get(Entity entity, LogicElementSensor component) { }
    public static void Get(Entity entity, LogicGate component) { }
    public static void Get(Entity entity, LogicGateBuffer component) { }
    public static void Get(Entity entity, LogicGateFilter component) { }
    public static void Get(Entity entity, LogicHEPSensor component) { }
    public static void Get(Entity entity, LogicHammer component) { }
    public static void Get(Entity entity, LogicBroadcastReceiver component) { }
    public static void Get(Entity entity, LogicBroadcaster component) { }
    public static void Get(Entity entity, LogicLightSensor component) { }
    public static void Get(Entity entity, LogicMemory component) { }
    public static void Get(Entity entity, OperationalControlledSwitch component) { }
    public static void Get(Entity entity, LogicPressureSensor component) { }
    public static void Get(Entity entity, LogicRadiationSensor component) { }
    public static void Get(Entity entity, LogicUtilityNetworkLink component) { }
    public static void Get(Entity entity, LogicRibbonBridge component) { }
    public static void Get(Entity entity, LogicWire component) { }
    public static void Get(Entity entity, LogicRibbonReader component) { }
    public static void Get(Entity entity, LogicRibbonWriter component) { }
    public static void Get(Entity entity, LogicSwitch component) { }
    public static void Get(Entity entity, LogicTemperatureSensor component) { }
    public static void Get(Entity entity, LogicTimeOfDaySensor component) { }
    public static void Get(Entity entity, LogicTimerSensor component) { }
    public static void Get(Entity entity, LogicWattageSensor component) { }
    public static void Get(Entity entity, NonEssentialEnergyConsumer component) { }
    public static void Get(Entity entity, KnockKnock component)
    {
      entity.menu = Category.Building.Quest;
    }
    public static void Get(Entity entity, LonelyMinionMailbox component)
    {
      entity.menu = Category.Building.Quest;
    }
    public static void Get(Entity entity, Generator component) { }
    public static void Get(Entity entity, ManualGenerator component) { }
    public static void Get(Entity entity, ManualHighEnergyParticleSpawner component) { }
    public static void Get(Entity entity, MassageTable component) { }
    public static void Get(Entity entity, MassiveHeatSink component) { }
    public static void Get(Entity entity, MechanicalSurfboardWorkable component) { }
    public static void Get(Entity entity, MechanicalSurfboard component) { }
    public static void Get(Entity entity, Clinic component) { }
    public static void Get(Entity entity, DoctorChoreWorkable component) { }
    public static void Get(Entity entity, MegaBrainTank component) { }
    public static void Get(Entity entity, LiquidCooledRefinery component) { }
    public static void Get(Entity entity, MicrobeMusher component) { }
    public static void Get(Entity entity, EmptyMilkSeparatorWorkable component) { }
    public static void Get(Entity entity, SkillPerkMissingComplainer component) { }
    public static void Get(Entity entity, SolidConduitConsumer component) { }
    public static void Get(Entity entity, FlatTagFilterable component) { }
    public static void Get(Entity entity, MissionControlClusterWorkable component) { }
    public static void Get(Entity entity, MonumentPart component) { }
    public static void Get(Entity entity, MorbRoverMakerWorkable component) { }
    public static void Get(Entity entity, MorbRoverMakerRevealWorkable component) { }
    public static void Get(Entity entity, MorbRoverMaker_Capsule component) { }
    public static void Get(Entity entity, Reactor component) { }
    public static void Get(Entity entity, NuclearResearchCenterWorkable component) { }
    public static void Get(Entity entity, NuclearResearchCenter component) { }
    public static void Get(Entity entity, ObjectDispenser component) { }
    public static void Get(Entity entity, OilRefinery component) { }
    public static void Get(Entity entity, OilRefinery.WorkableTarget component) { }
    public static void Get(Entity entity, OilWellCap component) { }
    public static void Get(Entity entity, InOrbitRequired component) { }
    public static void Get(Entity entity, OreScrubber component) { }
    public static void Get(Entity entity, Toilet component) { }
    public static void Get(Entity entity, ToiletWorkableClean component) { }
    public static void Get(Entity entity, OxidizerTank component) { }
    public static void Get(Entity entity, OxyliteRefinery component) { }
    public static void Get(Entity entity, Unsealable component) { }
    public static void Get(Entity entity, ParkSign component) { }
    public static void Get(Entity entity, Phonobox component) { }
    public static void Get(Entity entity, BuildingInternalConstructorWorkable component) { }
    public static void Get(Entity entity, PixelPack component) { }
    public static void Get(Entity entity, Polymerizer component) { }
    public static void Get(Entity entity, PowerTransformer component) { }
    public static void Get(Entity entity, RadiationLight component) { }
    public static void Get(Entity entity, RailGun component) { }
    public static void Get(Entity entity, ClusterDestinationSelector component) { }
    public static void Get(Entity entity, RailGunPayloadOpener component) { }
    public static void Get(Entity entity, RationBox component) { }
    public static void Get(Entity entity, FoodStorage component) { }
    public static void Get(Entity entity, Refrigerator component) { }
    public static void Get(Entity entity, ResetSkillsStation component) { }
    public static void Get(Entity entity, RocketControlStationIdleWorkable component) { }
    public static void Get(Entity entity, RocketControlStationLaunchWorkable component) { }
    public static void Get(Entity entity, RocketControlStation component) { }
    public static void Get(Entity entity, RocketConduitStorageAccess component) { }
    public static void Get(Entity entity, RustDeoxidizer component) { }
    public static void Get(Entity entity, SaunaWorkable component) { }
    public static void Get(Entity entity, Sauna component) { }
    public static void Get(Entity entity, Shower component) { }
    public static void Get(Entity entity, SodaFountainWorkable component) { }
    public static void Get(Entity entity, SodaFountain component) { }
    public static void Get(Entity entity, SolarPanel component) { }
    public static void Get(Entity entity, PartialLightBlocking component) { }
    public static void Get(Entity entity, ModuleSolarPanel component) { }
    public static void Get(Entity entity, SolidConduitBridge component) { }
    public static void Get(Entity entity, SolidConduit component) { }
    public static void Get(Entity entity, EmptySolidConduitWorkable component) { }
    public static void Get(Entity entity, Automatable component) { }
    public static void Get(Entity entity, SolidConduitInbox component) { }
    public static void Get(Entity entity, SolidConduitOutbox component) { }
    public static void Get(Entity entity, SolidLogicValve component) { }
    public static void Get(Entity entity, SolidTransferArm component) { }
    public static void Get(Entity entity, SolidConduitDropper component) { }
    public static void Get(Entity entity, SpecialCargoBayClusterReceptacle component) { }
    public static void Get(Entity entity, SpiceGrinderWorkable component) { }
    public static void Get(Entity entity, StaterpillarGenerator component) { }
    public static void Get(Entity entity, SteamTurbine component) { }
    public static void Get(Entity entity, StorageLockerSmart component) { }
    public static void Get(Entity entity, StorageTileSwitchItemWorkable component) { }
    public static void Get(Entity entity, SweepBotStation component) { }
    public static void Get(Entity entity, CircuitSwitch component) { }
    public static void Get(Entity entity, Telephone component) { }
    public static void Get(Entity entity, TelephoneCallerWorkable component) { }
    public static void Get(Entity entity, TeleportalPad component) { }
    public static void Get(Entity entity, Teleporter component) { }
    public static void Get(Entity entity, TravelTube component) { }
    public static void Get(Entity entity, TravelTubeEntrance component) { }
    public static void Get(Entity entity, EnergyConsumerSelfSustaining component) { }
    public static void Get(Entity entity, TravelTubeBridge component) { }
    public static void Get(Entity entity, TravelTubeUtilityNetworkLink component) { }
    public static void Get(Entity entity, Submergable component) { }
    public static void Get(Entity entity, UraniumCentrifuge component) { }
    public static void Get(Entity entity, VerticalWindTunnel component) { }
    public static void Get(Entity entity, WarpConduitReceiver component) { }
    public static void Get(Entity entity, ConduitSecondaryOutput component) { }
    public static void Get(Entity entity, WarpConduitSender component) { }
    public static void Get(Entity entity, WaterCooler component) { }
    public static void Get(Entity entity, WireUtilityNetworkLink component) { }
    public static void Get(Entity entity, Wire component) { }
    public static void Get(Entity entity, ArmTrapWorkable component) { }
    public static void Get(Entity entity, TrapTrigger component) { }
    public static void Get(Entity entity, Desalinator component) { }
    public static void Get(Entity entity, DesalinatorWorkableEmpty component) { }
    public static void Get(Entity entity, InfoDescription component)
    {
      var trans = translations[entity.tag];
      if (!trans.name.IsNullOrWhiteSpace())
      {
        translations[entity.tag].desc = component.description;
      }
      else
      {
        translations[entity.tag] = (TagManager.GetProperName(entity.tag), component.description);
      }
    }
    public static void Get(Entity entity, ClustercraftInteriorDoor component) { }
    public static void Get(Entity entity, Comet component)
    {
      translations[entity.tag] = (TagManager.GetProperName(entity.tag), TagManager.GetProperName(entity.tag));
      entity.menu = Category.Space.Comet;
    }
    public static void Get(Entity entity, SpaceArtifact component)
    {
      entity.menu = new Category.Artifact(component.artifactType.ToString(), component.artifactType.ToString());
    }
    public static void Get(Entity entity, EntitySplitter component) { }
    public static void Get(Entity entity, MedicinalPill component)
    {
      entity.menu = Category.Misc.Medicine;
    }
    public static void Get(Entity entity, MedicinalPillWorkable component) { }
    public static void Get(Entity entity, GassyMooComet component) { }
    public static void Get(Entity entity, PodLander component) { }
    public static void Get(Entity entity, MinionStorage component) { }
    public static void Get(Entity entity, SimpleMassStatusItem component)
    {
      entity.massPerUnit = component.GetComponent<PrimaryElement>().MassPerUnit;
    }
    public static void Get(Entity entity, Compostable component) { }
    public static void Get(Entity entity, Edible component)
    {
      var info = component.FoodInfo;
      entity.calories = info.CaloriesPerUnit;
      entity.quality = info.Quality;
      entity.menuOrder = info.Quality;
      if (info.CanRot)
      {
        entity.spoilTime = info.SpoilTime;
      }
      else
      {
        entity.spoilTime = 0;
      }
      entity.menu = Category.Food.Cooked;
    }
    public static void Get(Entity entity, HasSortOrder component) { }
    public static void Get(Entity entity, FossilBits component)
    {
      entity.menu = Category.Building.Quest;
    }
    public static void Get(Entity entity, GeneShuffler component) { }
    public static void Get(Entity entity, MinorDigSiteWorkable component) { }
    public static void Get(Entity entity, Workable component) { }
    public static void Get(Entity entity, SetLocker component) { }
    public static void Get(Entity entity, WarpReceiver component) { }
    public static void Get(Entity entity, WarpPortal component) { }
    public static void Get(Entity entity, StickerBomb component) { }
    public static void Get(Entity entity, CryoTank component)
    {
      entity.menu = Category.Building.Gravitas;
    }
    public static void Get(Entity entity, Storable component) { }
    public static void Get(Entity entity, Placeable component)
    {
      entity.menu = Category.Building.Lander;
    }
    public static void Get(Entity entity, BallisticClusterGridEntity component) { }
    public static void Get(Entity entity, ClusterTraveler component) { }
    public static void Get(Entity entity, Klei.AI.Traits component) { } // No
    public static void Get(Entity entity, AnimEventHandler component) { }
    public static void Get(Entity entity, SnapOn component) { }
    public static void Get(Entity entity, OrnamentReceptacle component) { }
    public static void Get(Entity entity, Navigator component) { }
    public static void Get(Entity entity, CreatureBrain component)
    {
      if (entity.menuOrder > 10000)
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
        entity.menuOrder = Array.IndexOf(order, component.species);
        if (entity.menuOrder < 0)
        {
          entity.menu = Category.Critter.Robot;
        }
        else
        {
          if (component.GetDef<BabyMonitor.Def>() is null)
          {
            entity.menu = Category.Critter.Base;
          }
          else
          {
            entity.menu = Category.Critter.Baby;
          }
        }
      }
    }
    public static void Get(Entity entity, ChoreConsumer component) { }
    public static void Get(Entity entity, MinionModifiers component) { }
    public static void Get(Entity entity, Klei.AI.AttributeLevels component) { }
    public static void Get(Entity entity, Database.AttributeConverters component) { }
    public static void Get(Entity entity, Klei.AI.AttributeConverters component) { }
    public static void Get(Entity entity, MinionBrain component) // Lol, brain
    {
      entity.menu = Category.Misc.Dupe;
    }
    public static void Get(Entity entity, Worker component) { }
    public static void Get(Entity entity, Health component) { }
    public static void Get(Entity entity, OxygenBreather component) { }
    public static void Get(Entity entity, WarmBlooded component) { }
    public static void Get(Entity entity, MinionIdentity component) { }
    public static void Get(Entity entity, GridVisibility component) { }
    public static void Get(Entity entity, MoverLayerOccupier component) { }
    public static void Get(Entity entity, ChoreProvider component) { }
    public static void Get(Entity entity, Sensors component) { }
    public static void Get(Entity entity, Chattable component) { }
    public static void Get(Entity entity, FaceGraph component) { }
    public static void Get(Entity entity, Accessorizer component) { }
    public static void Get(Entity entity, WearableAccessorizer component) { }
    public static void Get(Entity entity, Schedulable component) { }
    public static void Get(Entity entity, FactionAlignment component) { }
    public static void Get(Entity entity, Weapon component) { }
    public static void Get(Entity entity, RangedAttackable component) { }
    public static void Get(Entity entity, CreatureSimTemperatureTransfer component) { }
    public static void Get(Entity entity, SicknessTrigger component) { }
    public static void Get(Entity entity, ClothingWearer component) { }
    public static void Get(Entity entity, SuitEquipper component) { }
    public static void Get(Entity entity, ConsumableConsumer component) { }
    public static void Get(Entity entity, NoiseListener component) { }
    public static void Get(Entity entity, MinionResume component) { }
    public static void Get(Entity entity, RotPile component) { } // No
    public static void Get(Entity entity, TemperatureCookable component)
    {
      var recipe = new Recipe.Phase(
        origin: entity.tag,
        type: "cooking",
        temp: component.cookTemperature,
        dest: [(component.cookedID, 1)]
      );
      recipes.Add(recipe);
    }
    public static void Get(Entity entity, TemperatureVulnerable component)
    {
      entity.highTempFatal = component.TemperatureLethalHigh;
      entity.highTempWarning = component.TemperatureWarningHigh;
      entity.lowTempFatal = component.TemperatureLethalLow;
      entity.lowTempWarning = component.TemperatureWarningLow;
    }
    public static void Get(Entity entity, DrowningMonitor component) { }
    public static void Get(Entity entity, Butcherable component)
    {
      var drops = component.drops.GroupBy(d => d)
        .Select(group => (group.First(), group.Count()))
        .Select(d => (d.Item1, d.Item2 * Assets.GetPrefab(d.Item1).GetComponent<PrimaryElement>().Mass));
      var recipe = new Recipe.Death(entity.tag, drops.ToArray());
      recipes.Add(recipe);
    }
    public static void Get(Entity entity, Trappable component) { }
    public static void Get(Entity entity, Baggable component) { }
    public static void Get(Entity entity, Capturable component) { }
    public static void Get(Entity entity, Staterpillar component) { }
    public static void Get(Entity entity, HighEnergyParticle component)
    {
      entity.menu = Category.Element.Other;
    }
    public static void Get(Entity entity, Klei.AI.PrefabAttributeModifiers component) { }
    public static void Get(Entity entity, MutantPlant component) { }
    public static void Get(Entity entity, PlantableSeed component)
    {
    }
    public static void Get(Entity entity, PressureVulnerable component) { }
    public static void Get(Entity entity, WiltCondition component) { }
    public static void Get(Entity entity, Uprootable component)
    {
      if (component.GetComponent<Harvestable>() is null)
      {
        entity.menu = Category.Plant.Decor;
      }
    }
    public static void Get(Entity entity, UprootedMonitor component) { }
    public static void Get(Entity entity, ReceptacleMonitor component) { }
    public static void Get(Entity entity, Crop component)
    {
      entity.menu = Category.Plant.Crop;
      List<(string, float)> drops = [(component.cropVal.cropId, component.cropVal.numProduced)];
      var recipe = new Recipe.Plant(entity.tag, component.cropVal.cropDuration, drops.ToArray());
      recipes.Add(recipe);
    }
    public static void Get(Entity entity, Growing component) { }
    public static void Get(Entity entity, Harvestable component) { }
    public static void Get(Entity entity, HarvestDesignatable component) { }
    public static void Get(Entity entity, StandardCropPlant component) { }
    public static void Get(Entity entity, SeedProducer component) { }
    public static void Get(Entity entity, BasicForagePlantPlanted component)
    {
      entity.menu = Category.Plant.Foregeable;
    }
    public static void Get(Entity entity, PrickleGrass component) { }
    public static void Get(Entity entity, ColdBreather component) { }
    public static void Get(Entity entity, CritterTrapPlant component) { }
    public static void Get(Entity entity, EvilFlower component) { }
    public static void Get(Entity entity, TreeBud component) { }
    public static void Get(Entity entity, BudUprootedMonitor component) { }
    public static void Get(Entity entity, BuddingTrunk component) { }
    public static void Get(Entity entity, DiseaseSourceVisualizer component) { }
    public static void Get(Entity entity, HiveWorkableEmpty component) { }
    public static void Get(Entity entity, FoundationMonitor component) { }
    public static void Get(Entity entity, Bee component) { }
    public static void Get(Entity entity, LightSymbolTracker component) { }
    public static void Get(Entity entity, IlluminationVulnerable component) { }
    public static void Get(Entity entity, Uncoverable component) { }
    public static void Get(Entity entity, Geyser component) { }
    public static void Get(Entity entity, GeyserConfigurator component)
    {
      entity.menuOrder = (int)GeyserConfigurator.FindType(component.presetType).shape;
      entity.menu = Category.Geyser.Base;
      //var tmp = GeyserConfigurator.FindType(component.presetType);


    }
    public static void Get(Entity entity, Studyable component) { }
    public static void Get(Entity entity, ClusterMapMeteorShowerVisualizer component)
    {
      entity.menu = Category.Space.Shower;
    }
    public static void Get(Entity entity, SaltPlant component) { } // No
    public static void Get(Entity entity, BlightVulnerable component) { }
    public static void Get(Entity entity, Oxyfern component) { }
    public static void Get(Entity entity, DiseaseEmitter component) { }
    public static void Get(Entity entity, UpdateElementConsumerPosition component) { }
    public static void Get(Entity entity, BubbleSpawner component) { }
    public static void Get(Entity entity, Equippable component)
    {
      if (entity.menu == Category.NONE)
      {
        entity.menu = Category.Equipment.Clothes;
      }
    }
    public static void Get(Entity entity, SuitTank component)
    {
      entity.menu = Category.Equipment.Suit;
    }
    public static void Get(Entity entity, HelmetController component) { }
    public static void Get(Entity entity, Durability component) { }
    public static void Get(Entity entity, AtmoSuit component) { }
    public static void Get(Entity entity, SuitDiseaseHandler component) { }
    public static void Get(Entity entity, RepairableEquipment component)
    {
      entity.menu = Category.Equipment.Worn;
    }
    public static void Get(Entity entity, EquippableBalloon component) { }
    public static void Get(Entity entity, JetSuitTank component) { }
    public static void Get(Entity entity, LeadSuitTank component) { }
    public static void Get(Entity entity, ClinicDreamable component) { }
    public static void Get(Entity entity, ArtifactPOIConfigurator component) { }
    public static void Get(Entity entity, ArtifactPOIClusterGridEntity component)
    {
      if (component.GetComponent<HarvestablePOIConfigurator>() is null)
      {
        entity.menu = Category.Space.ArtifactPOI;
        var desc = Strings.Get("STRINGS.UI.SPACEDESTINATIONS.ARTIFACT_POI."
          + ArtifactPOIConfigurator.FindType(component.GetComponent<ArtifactPOIConfigurator>().presetType).id.ToUpper()
          + ".DESC");
        translations[entity.tag] = (component.Name, desc);
      }
    }
    public static void Get(Entity entity, HarvestablePOIConfigurator component)
    {
      var poiType = HarvestablePOIConfigurator.FindType(component.presetType);
      poiType.harvestableElements.ToDictionary(h => h.Key.CreateTag().Name, h => h.Value);
    }

    public static void Get(Entity entity, HarvestablePOIClusterGridEntity component)
    {
      translations[entity.tag] = (component.Name, "");
      entity.menu = Category.Space.HarvestablePOI;
    }
  }
}