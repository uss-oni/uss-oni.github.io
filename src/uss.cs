using static USS.DB;
using System.Reflection;
using System.Text.RegularExpressions;
using HarmonyLib;
using Newtonsoft.Json;
using UnityEngine;
using YamlDotNet.Core.Tokens;
using Klei;
using STRINGS;
using TemplateClasses;

namespace System.Runtime.CompilerServices
{
  [AttributeUsage(AttributeTargets.Parameter, AllowMultiple = false, Inherited = false)]
  internal sealed class CallerArgumentExpressionAttribute(string parameterName) : Attribute
  {
    public string ParameterName { get; } = parameterName;
  }
}

[AttributeUsage(AttributeTargets.Assembly)]
public class SolutionDir(string dir) : System.Attribute
{
  public string dir = dir;
}

namespace USS
{
  public class Patches
  {
    [HarmonyPatch(typeof(MainMenu))]
    [HarmonyPatch("OnSpawn")]
    public class Db_Initialize_Patch
    {

      public static void WriteJS(object obj, string name, string path)
      {
        using var file = new StreamWriter(path);
        var serializer = JsonSerializer.CreateDefault();
        serializer.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter());
        serializer.NullValueHandling = NullValueHandling.Ignore;
        //serializer.Formatting = Formatting.Indented;
        using var writer = new JsonTextWriter(file);
        if (name is not null)
        {
          writer.QuoteName = false;
          file.Write("var " + name + " = ");
        }
        serializer.Serialize(writer, obj);
      }

      public static Dictionary<string, Dictionary<string, Dictionary<string, Entity>>> Reorganisation()
      {
        var newDico = db.dico
          .GroupBy(d => d.Value.menu.category)
          .ToDictionary(g => g.Key, g => g.
            GroupBy(o => o.Value.menu.subCategory)
            .ToDictionary(u => u.Key, u => u.ToDictionary(j => j.Key, j => j.Value)));
        foreach (var (_, category) in newDico)
          foreach (var (_, subCategory) in category)
            foreach (var (_, entity) in subCategory)
            {
              entity.tag = null;
              entity.fr = null;
              entity.menu = null;
              entity.components = null;
              entity.smdef = null;
              //entity.tags = null;
            }
        foreach (var (_, subCategory) in newDico["Element"])
          foreach (var (_, entity) in subCategory)
          {
            entity.primaryElement = null;
            entity.mass = null;
          }
        newDico["NONE"].Remove("TOREMOVE");
        return newDico;
      }

      public static void AllImages()
      {
        var dir = Assembly.GetExecutingAssembly().GetCustomAttribute<SolutionDir>().dir;
        Png.imagesPath = Path.Combine(dir, "images3");
      //  foreach (var (hash, asset) in Assets.Sprites)
      //  {
      //    Png.Create(asset.name, asset);
      //  }
      //  foreach (var asset in Assets.TintedSprites)
      //  {
      //    Png.Create(asset.sprite.name, asset.sprite, asset.color);
      //  }
        foreach (var asset in Assets.Anims)
        {
          var data = asset.GetData();
          Debug.Log("Asset name: " + data.name);
          Debug.Log("Asset: " + data.elementCount);
          Debug.Log("Asset: " + data.animCount);
      //    Png.Create(asset.sprite.name, asset.sprite, asset.color);
        }
      }
      public static void Postfix()
      {
        var dir = Assembly.GetExecutingAssembly().GetCustomAttribute<SolutionDir>().dir;
        Png.imagesPath = Path.Combine(dir, "docs", "images");

        //AllImages();
        //return;
        if (Directory.Exists(dir))
        {
          Debug.Log("Uss: building all");
          Png.Create("HighEnergyParticle", Assets.GetSprite("radbolt"));

          GetInfos();



          WriteJS(db.dico, "db", Path.Combine(dir, "uss.js"));
          WriteJS(recipes, "recipes", Path.Combine(dir, "recipes.js"));

          //Cleaning useless properties
          var newDico = Reorganisation();
          WriteJS(newDico, "db", Path.Combine(dir, "docs", "db", "uss.js"));
          WriteJS(recipes.GroupBy(g => g.GetType().Name).ToDictionary(d => d.Key, d => d), "recipes", Path.Combine(dir, "docs", "db", "recipes.js"));
          //WriteJS(translations.dico, null, Path.Combine(dir, "docs", "translation.json"));
          Dictionary<string, string> newMenu = [];
          foreach (var (category, subDico) in Category.menu)
            foreach (var (subCategory, value) in subDico)
            {
              if (subCategory == "Category")
              {
                newMenu[category] = value;
              }
              else
              {
                newMenu[subCategory] = value;
              }
            }
          //WriteJS(newMenu, null, Path.Combine(dir, "docs", "ui.json"));
        }
        else
        {
          Debug.Log("Uss: only translations");
          dir = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), "uss-oni");
          Directory.CreateDirectory(dir);
        }
      }

      public static void GetInfos()
      {
        //Elements.Get();
        Buildings.Get();
        Buildings.Menu();
        GetPrefabs();
        ALaMano();
        //foreach(var sprite in Assets.Sprites) {
        //  Png.Create(sprite.Value.name, sprite.Value);
        //}
      }

      public static HashSet<string> components = [];
      public static HashSet<string> tags = [];

      public static void ALaMano()
      {
        db["OilWell"].menu = Category.Geyser.Base;
      }
      public static void GetPrefabs()
      {
        foreach (var prefab in Assets.Prefabs
          .Where(p => p.GetComponent<BuildingUnderConstruction>() is null)
          .Where(p => p.GetComponent<BuildingPreview>() is null)
          .Where(p => p.GetComponent<EntityPreview>() is null)
        //  .Where(p => p.GetComponent<PrimaryElement>() is not null)
          .Where(p => !Dlc.DoNotWant(p.PrefabID().Name)))
        {
          try
          {
            var age = prefab.GetComponent<ClusterGridEntity>();
            if (age is not null && prefab.GetComponent<ClusterMapMeteorShowerVisualizer>() is null)
            {
              
              Debug.Log("AGEEEEE");
              Png.Create(prefab.PrefabTag.Name, Def.GetUISpriteFromMultiObjectAnim(age.AnimConfigs[0].animFile, age.AnimConfigs[0].initialAnim));
            }
            else
            {
              Png.Create(prefab.gameObject, prefab.PrefabTag);
            }
          }
          catch { }
          var entity = db[prefab.PrefabID()];
          entity.tag = prefab.PrefabID().Name;
          entity.tags ??= [];
          foreach (var t in prefab.Tags)
            entity.tags.Add(t.Name);

          foreach (var smi in prefab.gameObject.GetComponents<StateMachineController>())
          {
            foreach (var sm in smi.cmpdef.defs)
              components.Add(sm.GetType().FullName);
          }

          var pe = prefab.GetComponent<PrimaryElement>(); // Need mass
          if (pe is not null)
          {
            Components.Get(entity, pe);
          }

          foreach (var comp in prefab.GetComponents<object>())  // I wish dynamic works...
          {
            entity.components ??= [];
            entity.components.Add(comp.GetType().FullName);
            if (comp is KPrefabID KPrefabID_)
            {
              Components.Get(entity, KPrefabID_);
            }
            if (comp is PrimaryElement PrimaryElement_)
            {
              Components.Get(entity, PrimaryElement_);
            }
            if (comp is Pickupable Pickupable_)
            {
              Components.Get(entity, Pickupable_);
            }
            if (comp is KSelectable KSelectable_)
            {
              Components.Get(entity, KSelectable_);
            }
            if (comp is SaveLoadRoot SaveLoadRoot_)
            {
              Components.Get(entity, SaveLoadRoot_);
            }
            if (comp is StateMachineController StateMachineController_)
            {
              Components.Get(entity, StateMachineController_);
            }
            if (comp is Clearable Clearable_)
            {
              Components.Get(entity, Clearable_);
            }
            if (comp is Prioritizable Prioritizable_)
            {
              Components.Get(entity, Prioritizable_);
            }
            if (comp is KBatchedAnimController KBatchedAnimController_)
            {
              Components.Get(entity, KBatchedAnimController_);
            }
            if (comp is SimTemperatureTransfer SimTemperatureTransfer_)
            {
              Components.Get(entity, SimTemperatureTransfer_);
            }
            if (comp is Klei.AI.Modifiers Modifiers_)
            {
              Components.Get(entity, Modifiers_);
            }
            if (comp is Movable Movable_)
            {
              Components.Get(entity, Movable_);
            }
            if (comp is OccupyArea OccupyArea_)
            {
              Components.Get(entity, OccupyArea_);
            }
            if (comp is DecorProvider DecorProvider_)
            {
              Components.Get(entity, DecorProvider_);
            }
            if (comp is ElementChunk ElementChunk_)
            {
              Components.Get(entity, ElementChunk_);
            }
            if (comp is KCircleCollider2D KCircleCollider2D_)
            {
              Components.Get(entity, KCircleCollider2D_);
            }
            if (comp is Sublimates Sublimates_)
            {
              Components.Get(entity, Sublimates_);
            }
            if (comp is KBoxCollider2D KBoxCollider2D_)
            {
              Components.Get(entity, KBoxCollider2D_);
            }
            if (comp is Dumpable Dumpable_)
            {
              Components.Get(entity, Dumpable_);
            }
            if (comp is SubstanceChunk SubstanceChunk_)
            {
              Components.Get(entity, SubstanceChunk_);
            }
            if (comp is BuildingComplete BuildingComplete_)
            {
              Components.Get(entity, BuildingComplete_);
            }
            if (comp is Deconstructable Deconstructable_)
            {
              Components.Get(entity, Deconstructable_);
            }
            if (comp is Reconstructable Reconstructable_)
            {
              Components.Get(entity, Reconstructable_);
            }
            if (comp is Operational Operational_)
            {
              Components.Get(entity, Operational_);
            }
            if (comp is BuildingEnabledButton BuildingEnabledButton_)
            {
              Components.Get(entity, BuildingEnabledButton_);
            }
            if (comp is BuildingHP BuildingHP_)
            {
              Components.Get(entity, BuildingHP_);
            }
            if (comp is LoopingSounds LoopingSounds_)
            {
              Components.Get(entity, LoopingSounds_);
            }
            if (comp is InvalidPortReporter InvalidPortReporter_)
            {
              Components.Get(entity, InvalidPortReporter_);
            }
            if (comp is Repairable Repairable_)
            {
              Components.Get(entity, Repairable_);
            }
            if (comp is BuildingFacade BuildingFacade_)
            {
              Components.Get(entity, BuildingFacade_);
            }
            if (comp is EnergyConsumer EnergyConsumer_)
            {
              Components.Get(entity, EnergyConsumer_);
            }
            if (comp is RequireInputs RequireInputs_)
            {
              Components.Get(entity, RequireInputs_);
            }
            if (comp is Floodable Floodable_)
            {
              Components.Get(entity, Floodable_);
            }
            if (comp is AutoDisinfectable AutoDisinfectable_)
            {
              Components.Get(entity, AutoDisinfectable_);
            }
            if (comp is Disinfectable Disinfectable_)
            {
              Components.Get(entity, Disinfectable_);
            }
            if (comp is Overheatable Overheatable_)
            {
              Components.Get(entity, Overheatable_);
            }
            if (comp is Structure Structure_)
            {
              Components.Get(entity, Structure_);
            }
            if (comp is LogicPorts LogicPorts_)
            {
              Components.Get(entity, LogicPorts_);
            }
            if (comp is LogicOperationalController LogicOperationalController_)
            {
              Components.Get(entity, LogicOperationalController_);
            }
            if (comp is BuildingCellVisualizer BuildingCellVisualizer_)
            {
              Components.Get(entity, BuildingCellVisualizer_);
            }
            if (comp is Toggleable Toggleable_)
            {
              Components.Get(entity, Toggleable_);
            }
            if (comp is Storage Storage_)
            {
              Components.Get(entity, Storage_);
            }
            if (comp is ManualDeliveryKG ManualDeliveryKG_)
            {
              Components.Get(entity, ManualDeliveryKG_);
            }
            if (comp is DoctorStation DoctorStation_)
            {
              Components.Get(entity, DoctorStation_);
            }
            if (comp is RoomTracker RoomTracker_)
            {
              Components.Get(entity, RoomTracker_);
            }
            if (comp is DoctorStationDoctorWorkable DoctorStationDoctorWorkable_)
            {
              Components.Get(entity, DoctorStationDoctorWorkable_);
            }
            if (comp is ResearchCenter ResearchCenter_)
            {
              Components.Get(entity, ResearchCenter_);
            }
            if (comp is ElementConverter ElementConverter_)
            {
              Components.Get(entity, ElementConverter_);
            }
            if (comp is Notifier Notifier_)
            {
              Components.Get(entity, Notifier_);
            }
            if (comp is Rotatable Rotatable_)
            {
              Components.Get(entity, Rotatable_);
            }
            if (comp is AirConditioner AirConditioner_)
            {
              Components.Get(entity, AirConditioner_);
            }
            if (comp is ConduitConsumer ConduitConsumer_)
            {
              Components.Get(entity, ConduitConsumer_);
            }
            if (comp is BuildingConduitEndpoints BuildingConduitEndpoints_)
            {
              Components.Get(entity, BuildingConduitEndpoints_);
            }
            if (comp is Breakable Breakable_)
            {
              Components.Get(entity, Breakable_);
            }
            if (comp is RequireOutputs RequireOutputs_)
            {
              Components.Get(entity, RequireOutputs_);
            }
            if (comp is ElementConsumer ElementConsumer_)
            {
              Components.Get(entity, ElementConsumer_);
            }
            if (comp is ElementDropper ElementDropper_)
            {
              Components.Get(entity, ElementDropper_);
            }
            if (comp is AirFilter AirFilter_)
            {
              Components.Get(entity, AirFilter_);
            }
            if (comp is AlgaeDistillery AlgaeDistillery_)
            {
              Components.Get(entity, AlgaeDistillery_);
            }
            if (comp is ConduitDispenser ConduitDispenser_)
            {
              Components.Get(entity, ConduitDispenser_);
            }
            if (comp is AlgaeHabitatEmpty AlgaeHabitatEmpty_)
            {
              Components.Get(entity, AlgaeHabitatEmpty_);
            }
            if (comp is AlgaeHabitat AlgaeHabitat_)
            {
              Components.Get(entity, AlgaeHabitat_);
            }
            if (comp is PassiveElementConsumer PassiveElementConsumer_)
            {
              Components.Get(entity, PassiveElementConsumer_);
            }
            if (comp is AnimTileable AnimTileable_)
            {
              Components.Get(entity, AnimTileable_);
            }
            if (comp is DropAllWorkable DropAllWorkable_)
            {
              Components.Get(entity, DropAllWorkable_);
            }
            if (comp is Apothecary Apothecary_)
            {
              Components.Get(entity, Apothecary_);
            }
            if (comp is ComplexFabricatorWorkable ComplexFabricatorWorkable_)
            {
              Components.Get(entity, ComplexFabricatorWorkable_);
            }
            if (comp is FabricatorIngredientStatusManager FabricatorIngredientStatusManager_)
            {
              Components.Get(entity, FabricatorIngredientStatusManager_);
            }
            if (comp is CopyBuildingSettings CopyBuildingSettings_)
            {
              Components.Get(entity, CopyBuildingSettings_);
            }
            if (comp is ComplexFabricatorSM ComplexFabricatorSM_)
            {
              Components.Get(entity, ComplexFabricatorSM_);
            }
            if (comp is ArcadeMachine ArcadeMachine_)
            {
              Components.Get(entity, ArcadeMachine_);
            }
            if (comp is ArtifactAnalysisStationWorkable ArtifactAnalysisStationWorkable_)
            {
              Components.Get(entity, ArtifactAnalysisStationWorkable_);
            }
            if (comp is BuildingAttachPoint BuildingAttachPoint_)
            {
              Components.Get(entity, BuildingAttachPoint_);
            }
            if (comp is AttachableBuilding AttachableBuilding_)
            {
              Components.Get(entity, AttachableBuilding_);
            }
            if (comp is RocketModuleCluster RocketModuleCluster_)
            {
              Components.Get(entity, RocketModuleCluster_);
            }
            if (comp is VerticalModuleTiler VerticalModuleTiler_)
            {
              Components.Get(entity, VerticalModuleTiler_);
            }
            if (comp is ReorderableBuilding ReorderableBuilding_)
            {
              Components.Get(entity, ReorderableBuilding_);
            }
            if (comp is ArtifactModule ArtifactModule_)
            {
              Components.Get(entity, ArtifactModule_);
            }
            if (comp is ItemPedestal ItemPedestal_)
            {
              Components.Get(entity, ItemPedestal_);
            }
            if (comp is MiningSounds MiningSounds_)
            {
              Components.Get(entity, MiningSounds_);
            }
            if (comp is AutoMiner AutoMiner_)
            {
              Components.Get(entity, AutoMiner_);
            }
            if (comp is RangeVisualizer RangeVisualizer_)
            {
              Components.Get(entity, RangeVisualizer_);
            }
            if (comp is Battery Battery_)
            {
              Components.Get(entity, Battery_);
            }
            if (comp is ModuleBattery ModuleBattery_)
            {
              Components.Get(entity, ModuleBattery_);
            }
            if (comp is WireUtilitySemiVirtualNetworkLink WireUtilitySemiVirtualNetworkLink_)
            {
              Components.Get(entity, WireUtilitySemiVirtualNetworkLink_);
            }
            if (comp is BatterySmart BatterySmart_)
            {
              Components.Get(entity, BatterySmart_);
            }
            if (comp is BeachChairWorkable BeachChairWorkable_)
            {
              Components.Get(entity, BeachChairWorkable_);
            }
            if (comp is BeachChair BeachChair_)
            {
              Components.Get(entity, BeachChair_);
            }
            if (comp is Bed Bed_)
            {
              Components.Get(entity, Bed_);
            }
            if (comp is Sleepable Sleepable_)
            {
              Components.Get(entity, Sleepable_);
            }
            if (comp is Ownable Ownable_)
            {
              Components.Get(entity, Ownable_);
            }
            if (comp is TreeFilterable TreeFilterable_)
            {
              Components.Get(entity, TreeFilterable_);
            }
            if (comp is BottleEmptier BottleEmptier_)
            {
              Components.Get(entity, BottleEmptier_);
            }
            if (comp is Door Door_)
            {
              Components.Get(entity, Door_);
            }
            if (comp is ZoneTile ZoneTile_)
            {
              Components.Get(entity, ZoneTile_);
            }
            if (comp is SimCellOccupier SimCellOccupier_)
            {
              Components.Get(entity, SimCellOccupier_);
            }
            if (comp is TileTemperature TileTemperature_)
            {
              Components.Get(entity, TileTemperature_);
            }
            if (comp is KAnimGridTileVisualizer KAnimGridTileVisualizer_)
            {
              Components.Get(entity, KAnimGridTileVisualizer_);
            }
            if (comp is RocketEngineCluster RocketEngineCluster_)
            {
              Components.Get(entity, RocketEngineCluster_);
            }
            if (comp is FuelTank FuelTank_)
            {
              Components.Get(entity, FuelTank_);
            }
            if (comp is SymbolOverrideController SymbolOverrideController_)
            {
              Components.Get(entity, SymbolOverrideController_);
            }
            if (comp is Painting Painting_)
            {
              Components.Get(entity, Painting_);
            }
            if (comp is Light2D Light2D_)
            {
              Components.Get(entity, Light2D_);
            }
            if (comp is Checkpoint Checkpoint_)
            {
              Components.Get(entity, Checkpoint_);
            }
            if (comp is ComplexFabricator ComplexFabricator_)
            {
              Components.Get(entity, ComplexFabricator_);
            }
            if (comp is SkyVisibilityVisualizer SkyVisibilityVisualizer_)
            {
              Components.Get(entity, SkyVisibilityVisualizer_);
            }
            if (comp is ScannerNetworkVisualizer ScannerNetworkVisualizer_)
            {
              Components.Get(entity, ScannerNetworkVisualizer_);
            }
            if (comp is Compost Compost_)
            {
              Components.Get(entity, Compost_);
            }
            if (comp is CompostWorkable CompostWorkable_)
            {
              Components.Get(entity, CompostWorkable_);
            }
            if (comp is ConduitDiseaseSensor ConduitDiseaseSensor_)
            {
              Components.Get(entity, ConduitDiseaseSensor_);
            }
            if (comp is Filterable Filterable_)
            {
              Components.Get(entity, Filterable_);
            }
            if (comp is ConduitElementSensor ConduitElementSensor_)
            {
              Components.Get(entity, ConduitElementSensor_);
            }
            if (comp is ConduitTemperatureSensor ConduitTemperatureSensor_)
            {
              Components.Get(entity, ConduitTemperatureSensor_);
            }
            if (comp is StructureToStructureTemperature StructureToStructureTemperature_)
            {
              Components.Get(entity, StructureToStructureTemperature_);
            }
            if (comp is CookingStation CookingStation_)
            {
              Components.Get(entity, CookingStation_);
            }
            if (comp is StorageLocker StorageLocker_)
            {
              Components.Get(entity, StorageLocker_);
            }
            if (comp is UserNameable UserNameable_)
            {
              Components.Get(entity, UserNameable_);
            }
            if (comp is CreatureFeeder CreatureFeeder_)
            {
              Components.Get(entity, CreatureFeeder_);
            }
            if (comp is CreatureDeliveryPoint CreatureDeliveryPoint_)
            {
              Components.Get(entity, CreatureDeliveryPoint_);
            }
            if (comp is BaggableCritterCapacityTracker BaggableCritterCapacityTracker_)
            {
              Components.Get(entity, BaggableCritterCapacityTracker_);
            }
            if (comp is HandSanitizer HandSanitizer_)
            {
              Components.Get(entity, HandSanitizer_);
            }
            if (comp is DirectionControl DirectionControl_)
            {
              Components.Get(entity, DirectionControl_);
            }
            if (comp is HandSanitizer.Work HandSanitizerWork_)
            {
              Components.Get(entity, HandSanitizerWork_);
            }
            if (comp is OreScrubber.Work OreScrubberWork_)
            {
              Components.Get(entity, OreScrubberWork_);
            }
            if (comp is TravelTubeEntrance.Work TravelTubEntranceWork_)
            {
              Components.Get(entity, TravelTubEntranceWork_);
            }
            if (comp is DevGenerator DevGenerator_)
            {
              Components.Get(entity, DevGenerator_);
            }
            if (comp is DevHEPSpawner DevHEPSpawner_)
            {
              Components.Get(entity, DevHEPSpawner_);
            }
            if (comp is HighEnergyParticlePort HighEnergyParticlePort_)
            {
              Components.Get(entity, HighEnergyParticlePort_);
            }
            if (comp is ElementEmitter ElementEmitter_)
            {
              Components.Get(entity, ElementEmitter_);
            }
            if (comp is DevLifeSupport DevLifeSupport_)
            {
              Components.Get(entity, DevLifeSupport_);
            }
            if (comp is DevLightGenerator DevLightGenerator_)
            {
              Components.Get(entity, DevLightGenerator_);
            }
            if (comp is DevPump DevPump_)
            {
              Components.Get(entity, DevPump_);
            }
            if (comp is SolidConduitDispenser SolidConduitDispenser_)
            {
              Components.Get(entity, SolidConduitDispenser_);
            }
            if (comp is RadiationEmitter RadiationEmitter_)
            {
              Components.Get(entity, RadiationEmitter_);
            }
            if (comp is DevRadiationEmitter DevRadiationEmitter_)
            {
              Components.Get(entity, DevRadiationEmitter_);
            }
            if (comp is HighEnergyParticleStorage HighEnergyParticleStorage_)
            {
              Components.Get(entity, HighEnergyParticleStorage_);
            }
            if (comp is MessStation MessStation_)
            {
              Components.Get(entity, MessStation_);
            }
            if (comp is AccessControl AccessControl_)
            {
              Components.Get(entity, AccessControl_);
            }
            if (comp is EggCracker EggCracker_)
            {
              Components.Get(entity, EggCracker_);
            }
            if (comp is EggIncubator EggIncubator_)
            {
              Components.Get(entity, EggIncubator_);
            }
            if (comp is EggIncubatorWorkable EggIncubatorWorkable_)
            {
              Components.Get(entity, EggIncubatorWorkable_);
            }
            if (comp is Electrolyzer Electrolyzer_)
            {
              Components.Get(entity, Electrolyzer_);
            }
            if (comp is EspressoMachineWorkable EspressoMachineWorkable_)
            {
              Components.Get(entity, EspressoMachineWorkable_);
            }
            if (comp is EspressoMachine EspressoMachine_)
            {
              Components.Get(entity, EspressoMachine_);
            }
            if (comp is LoreBearer LoreBearer_)
            {
              Components.Get(entity, LoreBearer_);
            }
            if (comp is Telepad Telepad_)
            {
              Components.Get(entity, Telepad_);
            }
            if (comp is SocialGatheringPoint SocialGatheringPoint_)
            {
              Components.Get(entity, SocialGatheringPoint_);
            }
            if (comp is RoleStation RoleStation_)
            {
              Components.Get(entity, RoleStation_);
            }
            if (comp is Activatable Activatable_)
            {
              Components.Get(entity, Activatable_);
            }
            if (comp is TinkerStation TinkerStation_)
            {
              Components.Get(entity, TinkerStation_);
            }
            if (comp is PlantablePlot PlantablePlot_)
            {
              Components.Get(entity, PlantablePlot_);
            }
            if (comp is WaterPurifier WaterPurifier_)
            {
              Components.Get(entity, WaterPurifier_);
            }
            if (comp is BuildingElementEmitter BuildingElementEmitter_)
            {
              Components.Get(entity, BuildingElementEmitter_);
            }
            if (comp is Ladder Ladder_)
            {
              Components.Get(entity, Ladder_);
            }
            if (comp is LogicMassSensor LogicMassSensor_)
            {
              Components.Get(entity, LogicMassSensor_);
            }
            if (comp is FlowerVase FlowerVase_)
            {
              Components.Get(entity, FlowerVase_);
            }
            if (comp is FlushToilet FlushToilet_)
            {
              Components.Get(entity, FlushToilet_);
            }
            if (comp is ToiletWorkableUse ToiletWorkableUse_)
            {
              Components.Get(entity, ToiletWorkableUse_);
            }
            if (comp is FoodDehydratorWorkableEmpty FoodDehydratorWorkableEmpty_)
            {
              Components.Get(entity, FoodDehydratorWorkableEmpty_);
            }
            if (comp is FoodRehydrator.AccessabilityManager AccessabilityManager_)
            {
              Components.Get(entity, AccessabilityManager_);
            }
            if (comp is FoodRehydrator.DehydratedManager DehydratedManager_)
            {
              Components.Get(entity, DehydratedManager_);
            }
            if (comp is FoodRehydrator.ResourceRequirementMonitor ResourceRequirementMonitor_)
            {
              Components.Get(entity, ResourceRequirementMonitor_);
            }
            if (comp is MajorDigSiteWorkable MajorDigSiteWorkable_)
            {
              Components.Get(entity, MajorDigSiteWorkable_);
            }
            if (comp is EntombVulnerable EntombVulnerable_)
            {
              Components.Get(entity, EntombVulnerable_);
            }
            if (comp is FossilMineWorkable FossilMineWorkable_)
            {
              Components.Get(entity, FossilMineWorkable_);
            }
            if (comp is FossilMine FossilMine_)
            {
              Components.Get(entity, FossilMine_);
            }
            if (comp is Demolishable Demolishable_)
            {
              Components.Get(entity, Demolishable_);
            }
            if (comp is FossilDigsiteLampLight FossilDigsiteLampLight_)
            {
              Components.Get(entity, FossilDigsiteLampLight_);
            }
            if (comp is FossilMineSM FossilMineSM_)
            {
              Components.Get(entity, FossilMineSM_);
            }
            if (comp is Gantry Gantry_)
            {
              Components.Get(entity, Gantry_);
            }
            if (comp is FakeFloorAdder FakeFloorAdder_)
            {
              Components.Get(entity, FakeFloorAdder_);
            }
            if (comp is GasBottler GasBottler_)
            {
              Components.Get(entity, GasBottler_);
            }
            if (comp is CargoBayCluster CargoBayCluster_)
            {
              Components.Get(entity, CargoBayCluster_);
            }
            if (comp is ConduitBridge ConduitBridge_)
            {
              Components.Get(entity, ConduitBridge_);
            }
            if (comp is Conduit Conduit_)
            {
              Components.Get(entity, Conduit_);
            }
            if (comp is EmptyConduitWorkable EmptyConduitWorkable_)
            {
              Components.Get(entity, EmptyConduitWorkable_);
            }
            if (comp is KAnimGraphTileVisualizer KAnimGraphTileVisualizer_)
            {
              Components.Get(entity, KAnimGraphTileVisualizer_);
            }
            if (comp is ElementFilter ElementFilter_)
            {
              Components.Get(entity, ElementFilter_);
            }
            if (comp is LimitValve LimitValve_)
            {
              Components.Get(entity, LimitValve_);
            }
            if (comp is OperationalValve OperationalValve_)
            {
              Components.Get(entity, OperationalValve_);
            }
            if (comp is Pump Pump_)
            {
              Components.Get(entity, Pump_);
            }
            if (comp is Reservoir Reservoir_)
            {
              Components.Get(entity, Reservoir_);
            }
            if (comp is SmartReservoir SmartReservoir_)
            {
              Components.Get(entity, SmartReservoir_);
            }
            if (comp is ValveBase ValveBase_)
            {
              Components.Get(entity, ValveBase_);
            }
            if (comp is Valve Valve_)
            {
              Components.Get(entity, Valve_);
            }
            if (comp is Exhaust Exhaust_)
            {
              Components.Get(entity, Exhaust_);
            }
            if (comp is Vent Vent_)
            {
              Components.Get(entity, Vent_);
            }
            if (comp is SimpleVent SimpleVent_)
            {
              Components.Get(entity, SimpleVent_);
            }
            if (comp is EnergyGenerator EnergyGenerator_)
            {
              Components.Get(entity, EnergyGenerator_);
            }
            if (comp is Tinkerable Tinkerable_)
            {
              Components.Get(entity, Tinkerable_);
            }
            if (comp is Klei.AI.Effects Effects_)
            {
              Components.Get(entity, Effects_);
            }
            if (comp is GeneticAnalysisStationWorkable GeneticAnalysisStationWorkable_)
            {
              Components.Get(entity, GeneticAnalysisStationWorkable_);
            }
            if (comp is GeoTunerWorkable GeoTunerWorkable_)
            {
              Components.Get(entity, GeoTunerWorkable_);
            }
            if (comp is GeoTunerSwitchGeyserWorkable GeoTunerSwitchGeyserWorkable_)
            {
              Components.Get(entity, GeoTunerSwitchGeyserWorkable_);
            }
            if (comp is GlassForge GlassForge_)
            {
              Components.Get(entity, GlassForge_);
            }
            if (comp is GourmetCookingStation GourmetCookingStation_)
            {
              Components.Get(entity, GourmetCookingStation_);
            }
            if (comp is Grave Grave_)
            {
              Components.Get(entity, Grave_);
            }
            if (comp is PajamaDispenser PajamaDispenser_)
            {
              Components.Get(entity, PajamaDispenser_);
            }
            if (comp is SingleEntityReceptacle SingleEntityReceptacle_)
            {
              Components.Get(entity, SingleEntityReceptacle_);
            }
            if (comp is PedestalArtifactSpawner PedestalArtifactSpawner_)
            {
              Components.Get(entity, PedestalArtifactSpawner_);
            }
            if (comp is HighEnergyParticleRedirector HighEnergyParticleRedirector_)
            {
              Components.Get(entity, HighEnergyParticleRedirector_);
            }
            if (comp is HEPFuelTank HEPFuelTank_)
            {
              Components.Get(entity, HEPFuelTank_);
            }
            if (comp is AssignmentGroupController AssignmentGroupController_)
            {
              Components.Get(entity, AssignmentGroupController_);
            }
            if (comp is PassengerRocketModule PassengerRocketModule_)
            {
              Components.Get(entity, PassengerRocketModule_);
            }
            if (comp is ClustercraftExteriorDoor ClustercraftExteriorDoor_)
            {
              Components.Get(entity, ClustercraftExteriorDoor_);
            }
            if (comp is NavTeleporter NavTeleporter_)
            {
              Components.Get(entity, NavTeleporter_);
            }
            if (comp is LaunchableRocketCluster LaunchableRocketCluster_)
            {
              Components.Get(entity, LaunchableRocketCluster_);
            }
            if (comp is RocketCommandConditions RocketCommandConditions_)
            {
              Components.Get(entity, RocketCommandConditions_);
            }
            if (comp is RocketProcessConditionDisplayTarget RocketProcessConditionDisplayTarget_)
            {
              Components.Get(entity, RocketProcessConditionDisplayTarget_);
            }
            if (comp is RocketLaunchConditionVisualizer RocketLaunchConditionVisualizer_)
            {
              Components.Get(entity, RocketLaunchConditionVisualizer_);
            }
            if (comp is CharacterOverlay CharacterOverlay_)
            {
              Components.Get(entity, CharacterOverlay_);
            }
            if (comp is RocketConduitSender RocketConduitSender_)
            {
              Components.Get(entity, RocketConduitSender_);
            }
            if (comp is RocketConduitReceiver RocketConduitReceiver_)
            {
              Components.Get(entity, RocketConduitReceiver_);
            }
            if (comp is HighEnergyParticleSpawner HighEnergyParticleSpawner_)
            {
              Components.Get(entity, HighEnergyParticleSpawner_);
            }
            if (comp is HotTub HotTub_)
            {
              Components.Get(entity, HotTub_);
            }
            if (comp is ModuleGenerator ModuleGenerator_)
            {
              Components.Get(entity, ModuleGenerator_);
            }
            if (comp is PlanterBox PlanterBox_)
            {
              Components.Get(entity, PlanterBox_);
            }
            if (comp is MinimumOperatingTemperature MinimumOperatingTemperature_)
            {
              Components.Get(entity, MinimumOperatingTemperature_);
            }
            if (comp is IceCooledFan IceCooledFan_)
            {
              Components.Get(entity, IceCooledFan_);
            }
            if (comp is IceCooledFanWorkable IceCooledFanWorkable_)
            {
              Components.Get(entity, IceCooledFanWorkable_);
            }
            if (comp is IceMachine IceMachine_)
            {
              Components.Get(entity, IceMachine_);
            }
            if (comp is Sculpture Sculpture_)
            {
              Components.Get(entity, Sculpture_);
            }
            if (comp is Insulator Insulator_)
            {
              Components.Get(entity, Insulator_);
            }
            if (comp is SuitLocker SuitLocker_)
            {
              Components.Get(entity, SuitLocker_);
            }
            if (comp is JetSuitLocker JetSuitLocker_)
            {
              Components.Get(entity, JetSuitLocker_);
            }
            if (comp is SuitLocker.ReturnSuitWorkable ReturnSuitWorkable_)
            {
              Components.Get(entity, ReturnSuitWorkable_);
            }
            if (comp is SuitMarker SuitMarker_)
            {
              Components.Get(entity, SuitMarker_);
            }
            if (comp is JuicerWorkable JuicerWorkable_)
            {
              Components.Get(entity, JuicerWorkable_);
            }
            if (comp is Juicer Juicer_)
            {
              Components.Get(entity, Juicer_);
            }
            if (comp is LaunchPad LaunchPad_)
            {
              Components.Get(entity, LaunchPad_);
            }
            if (comp is LaunchPadConditions LaunchPadConditions_)
            {
              Components.Get(entity, LaunchPadConditions_);
            }
            if (comp is ModularConduitPortTiler ModularConduitPortTiler_)
            {
              Components.Get(entity, ModularConduitPortTiler_);
            }
            if (comp is LeadSuitLocker LeadSuitLocker_)
            {
              Components.Get(entity, LeadSuitLocker_);
            }
            if (comp is DropToUserCapacity DropToUserCapacity_)
            {
              Components.Get(entity, DropToUserCapacity_);
            }
            if (comp is SpaceHeater SpaceHeater_)
            {
              Components.Get(entity, SpaceHeater_);
            }
            if (comp is LiquidPumpingStation LiquidPumpingStation_)
            {
              Components.Get(entity, LiquidPumpingStation_);
            }
            if (comp is LogicAlarm LogicAlarm_)
            {
              Components.Get(entity, LogicAlarm_);
            }
            if (comp is LogicClusterLocationSensor LogicClusterLocationSensor_)
            {
              Components.Get(entity, LogicClusterLocationSensor_);
            }
            if (comp is LogicCounter LogicCounter_)
            {
              Components.Get(entity, LogicCounter_);
            }
            if (comp is LogicCritterCountSensor LogicCritterCountSensor_)
            {
              Components.Get(entity, LogicCritterCountSensor_);
            }
            if (comp is LogicDiseaseSensor LogicDiseaseSensor_)
            {
              Components.Get(entity, LogicDiseaseSensor_);
            }
            if (comp is LogicDuplicantSensor LogicDuplicantSensor_)
            {
              Components.Get(entity, LogicDuplicantSensor_);
            }
            if (comp is LogicElementSensor LogicElementSensor_)
            {
              Components.Get(entity, LogicElementSensor_);
            }
            if (comp is LogicGate LogicGate_)
            {
              Components.Get(entity, LogicGate_);
            }
            if (comp is LogicGateBuffer LogicGateBuffer_)
            {
              Components.Get(entity, LogicGateBuffer_);
            }
            if (comp is LogicGateFilter LogicGateFilter_)
            {
              Components.Get(entity, LogicGateFilter_);
            }
            if (comp is LogicHEPSensor LogicHEPSensor_)
            {
              Components.Get(entity, LogicHEPSensor_);
            }
            if (comp is LogicHammer LogicHammer_)
            {
              Components.Get(entity, LogicHammer_);
            }
            if (comp is LogicBroadcastReceiver LogicBroadcastReceiver_)
            {
              Components.Get(entity, LogicBroadcastReceiver_);
            }
            if (comp is LogicBroadcaster LogicBroadcaster_)
            {
              Components.Get(entity, LogicBroadcaster_);
            }
            if (comp is LogicLightSensor LogicLightSensor_)
            {
              Components.Get(entity, LogicLightSensor_);
            }
            if (comp is LogicMemory LogicMemory_)
            {
              Components.Get(entity, LogicMemory_);
            }
            if (comp is OperationalControlledSwitch OperationalControlledSwitch_)
            {
              Components.Get(entity, OperationalControlledSwitch_);
            }
            if (comp is LogicPressureSensor LogicPressureSensor_)
            {
              Components.Get(entity, LogicPressureSensor_);
            }
            if (comp is LogicRadiationSensor LogicRadiationSensor_)
            {
              Components.Get(entity, LogicRadiationSensor_);
            }
            if (comp is LogicUtilityNetworkLink LogicUtilityNetworkLink_)
            {
              Components.Get(entity, LogicUtilityNetworkLink_);
            }
            if (comp is LogicRibbonBridge LogicRibbonBridge_)
            {
              Components.Get(entity, LogicRibbonBridge_);
            }
            if (comp is LogicWire LogicWire_)
            {
              Components.Get(entity, LogicWire_);
            }
            if (comp is LogicRibbonReader LogicRibbonReader_)
            {
              Components.Get(entity, LogicRibbonReader_);
            }
            if (comp is LogicRibbonWriter LogicRibbonWriter_)
            {
              Components.Get(entity, LogicRibbonWriter_);
            }
            if (comp is LogicSwitch LogicSwitch_)
            {
              Components.Get(entity, LogicSwitch_);
            }
            if (comp is LogicTemperatureSensor LogicTemperatureSensor_)
            {
              Components.Get(entity, LogicTemperatureSensor_);
            }
            if (comp is LogicTimeOfDaySensor LogicTimeOfDaySensor_)
            {
              Components.Get(entity, LogicTimeOfDaySensor_);
            }
            if (comp is LogicTimerSensor LogicTimerSensor_)
            {
              Components.Get(entity, LogicTimerSensor_);
            }
            if (comp is LogicWattageSensor LogicWattageSensor_)
            {
              Components.Get(entity, LogicWattageSensor_);
            }
            if (comp is NonEssentialEnergyConsumer NonEssentialEnergyConsumer_)
            {
              Components.Get(entity, NonEssentialEnergyConsumer_);
            }
            if (comp is KnockKnock KnockKnock_)
            {
              Components.Get(entity, KnockKnock_);
            }
            if (comp is LonelyMinionMailbox LonelyMinionMailbox_)
            {
              Components.Get(entity, LonelyMinionMailbox_);
            }
            if (comp is Generator Generator_)
            {
              Components.Get(entity, Generator_);
            }
            if (comp is ManualGenerator ManualGenerator_)
            {
              Components.Get(entity, ManualGenerator_);
            }
            if (comp is ManualHighEnergyParticleSpawner ManualHighEnergyParticleSpawner_)
            {
              Components.Get(entity, ManualHighEnergyParticleSpawner_);
            }
            if (comp is MassageTable MassageTable_)
            {
              Components.Get(entity, MassageTable_);
            }
            if (comp is MassiveHeatSink MassiveHeatSink_)
            {
              Components.Get(entity, MassiveHeatSink_);
            }
            if (comp is MechanicalSurfboardWorkable MechanicalSurfboardWorkable_)
            {
              Components.Get(entity, MechanicalSurfboardWorkable_);
            }
            if (comp is MechanicalSurfboard MechanicalSurfboard_)
            {
              Components.Get(entity, MechanicalSurfboard_);
            }
            if (comp is Clinic Clinic_)
            {
              Components.Get(entity, Clinic_);
            }
            if (comp is DoctorChoreWorkable DoctorChoreWorkable_)
            {
              Components.Get(entity, DoctorChoreWorkable_);
            }
            if (comp is MegaBrainTank MegaBrainTank_)
            {
              Components.Get(entity, MegaBrainTank_);
            }
            if (comp is LiquidCooledRefinery LiquidCooledRefinery_)
            {
              Components.Get(entity, LiquidCooledRefinery_);
            }
            if (comp is MicrobeMusher MicrobeMusher_)
            {
              Components.Get(entity, MicrobeMusher_);
            }
            if (comp is EmptyMilkSeparatorWorkable EmptyMilkSeparatorWorkable_)
            {
              Components.Get(entity, EmptyMilkSeparatorWorkable_);
            }
            if (comp is SkillPerkMissingComplainer SkillPerkMissingComplainer_)
            {
              Components.Get(entity, SkillPerkMissingComplainer_);
            }
            if (comp is SolidConduitConsumer SolidConduitConsumer_)
            {
              Components.Get(entity, SolidConduitConsumer_);
            }
            if (comp is FlatTagFilterable FlatTagFilterable_)
            {
              Components.Get(entity, FlatTagFilterable_);
            }
            if (comp is MissionControlClusterWorkable MissionControlClusterWorkable_)
            {
              Components.Get(entity, MissionControlClusterWorkable_);
            }
            if (comp is MonumentPart MonumentPart_)
            {
              Components.Get(entity, MonumentPart_);
            }
            if (comp is MorbRoverMakerWorkable MorbRoverMakerWorkable_)
            {
              Components.Get(entity, MorbRoverMakerWorkable_);
            }
            if (comp is MorbRoverMakerRevealWorkable MorbRoverMakerRevealWorkable_)
            {
              Components.Get(entity, MorbRoverMakerRevealWorkable_);
            }
            if (comp is MorbRoverMaker_Capsule MorbRoverMaker_Capsule_)
            {
              Components.Get(entity, MorbRoverMaker_Capsule_);
            }
            if (comp is Reactor Reactor_)
            {
              Components.Get(entity, Reactor_);
            }
            if (comp is NuclearResearchCenterWorkable NuclearResearchCenterWorkable_)
            {
              Components.Get(entity, NuclearResearchCenterWorkable_);
            }
            if (comp is NuclearResearchCenter NuclearResearchCenter_)
            {
              Components.Get(entity, NuclearResearchCenter_);
            }
            if (comp is ObjectDispenser ObjectDispenser_)
            {
              Components.Get(entity, ObjectDispenser_);
            }
            if (comp is OilRefinery OilRefinery_)
            {
              Components.Get(entity, OilRefinery_);
            }
            if (comp is OilRefinery.WorkableTarget WorkableTarget_)
            {
              Components.Get(entity, WorkableTarget_);
            }
            if (comp is OilWellCap OilWellCap_)
            {
              Components.Get(entity, OilWellCap_);
            }
            if (comp is InOrbitRequired InOrbitRequired_)
            {
              Components.Get(entity, InOrbitRequired_);
            }
            if (comp is OreScrubber OreScrubber_)
            {
              Components.Get(entity, OreScrubber_);
            }
            if (comp is Toilet Toilet_)
            {
              Components.Get(entity, Toilet_);
            }
            if (comp is ToiletWorkableClean ToiletWorkableClean_)
            {
              Components.Get(entity, ToiletWorkableClean_);
            }
            if (comp is OxidizerTank OxidizerTank_)
            {
              Components.Get(entity, OxidizerTank_);
            }
            if (comp is OxyliteRefinery OxyliteRefinery_)
            {
              Components.Get(entity, OxyliteRefinery_);
            }
            if (comp is Unsealable Unsealable_)
            {
              Components.Get(entity, Unsealable_);
            }
            if (comp is ParkSign ParkSign_)
            {
              Components.Get(entity, ParkSign_);
            }
            if (comp is Phonobox Phonobox_)
            {
              Components.Get(entity, Phonobox_);
            }
            if (comp is BuildingInternalConstructorWorkable BuildingInternalConstructorWorkable_)
            {
              Components.Get(entity, BuildingInternalConstructorWorkable_);
            }
            if (comp is PixelPack PixelPack_)
            {
              Components.Get(entity, PixelPack_);
            }
            if (comp is Polymerizer Polymerizer_)
            {
              Components.Get(entity, Polymerizer_);
            }
            if (comp is PowerTransformer PowerTransformer_)
            {
              Components.Get(entity, PowerTransformer_);
            }
            if (comp is RadiationLight RadiationLight_)
            {
              Components.Get(entity, RadiationLight_);
            }
            if (comp is RailGun RailGun_)
            {
              Components.Get(entity, RailGun_);
            }
            if (comp is ClusterDestinationSelector ClusterDestinationSelector_)
            {
              Components.Get(entity, ClusterDestinationSelector_);
            }
            if (comp is RailGunPayloadOpener RailGunPayloadOpener_)
            {
              Components.Get(entity, RailGunPayloadOpener_);
            }
            if (comp is RationBox RationBox_)
            {
              Components.Get(entity, RationBox_);
            }
            if (comp is FoodStorage FoodStorage_)
            {
              Components.Get(entity, FoodStorage_);
            }
            if (comp is Refrigerator Refrigerator_)
            {
              Components.Get(entity, Refrigerator_);
            }
            if (comp is ResetSkillsStation ResetSkillsStation_)
            {
              Components.Get(entity, ResetSkillsStation_);
            }
            if (comp is RocketControlStationIdleWorkable RocketControlStationIdleWorkable_)
            {
              Components.Get(entity, RocketControlStationIdleWorkable_);
            }
            if (comp is RocketControlStationLaunchWorkable RocketControlStationLaunchWorkable_)
            {
              Components.Get(entity, RocketControlStationLaunchWorkable_);
            }
            if (comp is RocketControlStation RocketControlStation_)
            {
              Components.Get(entity, RocketControlStation_);
            }
            if (comp is RocketConduitStorageAccess RocketConduitStorageAccess_)
            {
              Components.Get(entity, RocketConduitStorageAccess_);
            }
            if (comp is RustDeoxidizer RustDeoxidizer_)
            {
              Components.Get(entity, RustDeoxidizer_);
            }
            if (comp is SaunaWorkable SaunaWorkable_)
            {
              Components.Get(entity, SaunaWorkable_);
            }
            if (comp is Sauna Sauna_)
            {
              Components.Get(entity, Sauna_);
            }
            if (comp is Shower Shower_)
            {
              Components.Get(entity, Shower_);
            }
            if (comp is SodaFountainWorkable SodaFountainWorkable_)
            {
              Components.Get(entity, SodaFountainWorkable_);
            }
            if (comp is SodaFountain SodaFountain_)
            {
              Components.Get(entity, SodaFountain_);
            }
            if (comp is SolarPanel SolarPanel_)
            {
              Components.Get(entity, SolarPanel_);
            }
            if (comp is PartialLightBlocking PartialLightBlocking_)
            {
              Components.Get(entity, PartialLightBlocking_);
            }
            if (comp is ModuleSolarPanel ModuleSolarPanel_)
            {
              Components.Get(entity, ModuleSolarPanel_);
            }
            if (comp is SolidConduitBridge SolidConduitBridge_)
            {
              Components.Get(entity, SolidConduitBridge_);
            }
            if (comp is SolidConduit SolidConduit_)
            {
              Components.Get(entity, SolidConduit_);
            }
            if (comp is EmptySolidConduitWorkable EmptySolidConduitWorkable_)
            {
              Components.Get(entity, EmptySolidConduitWorkable_);
            }
            if (comp is Automatable Automatable_)
            {
              Components.Get(entity, Automatable_);
            }
            if (comp is SolidConduitInbox SolidConduitInbox_)
            {
              Components.Get(entity, SolidConduitInbox_);
            }
            if (comp is SolidConduitOutbox SolidConduitOutbox_)
            {
              Components.Get(entity, SolidConduitOutbox_);
            }
            if (comp is SolidLogicValve SolidLogicValve_)
            {
              Components.Get(entity, SolidLogicValve_);
            }
            if (comp is SolidTransferArm SolidTransferArm_)
            {
              Components.Get(entity, SolidTransferArm_);
            }
            if (comp is SolidConduitDropper SolidConduitDropper_)
            {
              Components.Get(entity, SolidConduitDropper_);
            }
            if (comp is SpecialCargoBayClusterReceptacle SpecialCargoBayClusterReceptacle_)
            {
              Components.Get(entity, SpecialCargoBayClusterReceptacle_);
            }
            if (comp is SpiceGrinderWorkable SpiceGrinderWorkable_)
            {
              Components.Get(entity, SpiceGrinderWorkable_);
            }
            if (comp is StaterpillarGenerator StaterpillarGenerator_)
            {
              Components.Get(entity, StaterpillarGenerator_);
            }
            if (comp is SteamTurbine SteamTurbine_)
            {
              Components.Get(entity, SteamTurbine_);
            }
            if (comp is StorageLockerSmart StorageLockerSmart_)
            {
              Components.Get(entity, StorageLockerSmart_);
            }
            if (comp is StorageTileSwitchItemWorkable StorageTileSwitchItemWorkable_)
            {
              Components.Get(entity, StorageTileSwitchItemWorkable_);
            }
            if (comp is SweepBotStation SweepBotStation_)
            {
              Components.Get(entity, SweepBotStation_);
            }
            if (comp is CircuitSwitch CircuitSwitch_)
            {
              Components.Get(entity, CircuitSwitch_);
            }
            if (comp is Telephone Telephone_)
            {
              Components.Get(entity, Telephone_);
            }
            if (comp is TelephoneCallerWorkable TelephoneCallerWorkable_)
            {
              Components.Get(entity, TelephoneCallerWorkable_);
            }
            if (comp is TeleportalPad TeleportalPad_)
            {
              Components.Get(entity, TeleportalPad_);
            }
            if (comp is Teleporter Teleporter_)
            {
              Components.Get(entity, Teleporter_);
            }
            if (comp is TravelTube TravelTube_)
            {
              Components.Get(entity, TravelTube_);
            }
            if (comp is TravelTubeEntrance TravelTubeEntrance_)
            {
              Components.Get(entity, TravelTubeEntrance_);
            }
            if (comp is EnergyConsumerSelfSustaining EnergyConsumerSelfSustaining_)
            {
              Components.Get(entity, EnergyConsumerSelfSustaining_);
            }
            if (comp is TravelTubeBridge TravelTubeBridge_)
            {
              Components.Get(entity, TravelTubeBridge_);
            }
            if (comp is TravelTubeUtilityNetworkLink TravelTubeUtilityNetworkLink_)
            {
              Components.Get(entity, TravelTubeUtilityNetworkLink_);
            }
            if (comp is Submergable Submergable_)
            {
              Components.Get(entity, Submergable_);
            }
            if (comp is UraniumCentrifuge UraniumCentrifuge_)
            {
              Components.Get(entity, UraniumCentrifuge_);
            }
            if (comp is VerticalWindTunnel VerticalWindTunnel_)
            {
              Components.Get(entity, VerticalWindTunnel_);
            }
            if (comp is WarpConduitReceiver WarpConduitReceiver_)
            {
              Components.Get(entity, WarpConduitReceiver_);
            }
            if (comp is ConduitSecondaryOutput ConduitSecondaryOutput_)
            {
              Components.Get(entity, ConduitSecondaryOutput_);
            }
            if (comp is WarpConduitSender WarpConduitSender_)
            {
              Components.Get(entity, WarpConduitSender_);
            }
            if (comp is WaterCooler WaterCooler_)
            {
              Components.Get(entity, WaterCooler_);
            }
            if (comp is WireUtilityNetworkLink WireUtilityNetworkLink_)
            {
              Components.Get(entity, WireUtilityNetworkLink_);
            }
            if (comp is Wire Wire_)
            {
              Components.Get(entity, Wire_);
            }
            if (comp is ArmTrapWorkable ArmTrapWorkable_)
            {
              Components.Get(entity, ArmTrapWorkable_);
            }
            if (comp is TrapTrigger TrapTrigger_)
            {
              Components.Get(entity, TrapTrigger_);
            }
            if (comp is Desalinator Desalinator_)
            {
              Components.Get(entity, Desalinator_);
            }
            if (comp is DesalinatorWorkableEmpty DesalinatorWorkableEmpty_)
            {
              Components.Get(entity, DesalinatorWorkableEmpty_);
            }
            if (comp is InfoDescription InfoDescription_)
            {
              Components.Get(entity, InfoDescription_);
            }
            if (comp is ClustercraftInteriorDoor ClustercraftInteriorDoor_)
            {
              Components.Get(entity, ClustercraftInteriorDoor_);
            }
            if (comp is Comet Comet_)
            {
              Components.Get(entity, Comet_);
            }
            if (comp is SpaceArtifact SpaceArtifact_)
            {
              Components.Get(entity, SpaceArtifact_);
            }
            if (comp is EntitySplitter EntitySplitter_)
            {
              Components.Get(entity, EntitySplitter_);
            }
            if (comp is MedicinalPill MedicinalPill_)
            {
              Components.Get(entity, MedicinalPill_);
            }
            if (comp is MedicinalPillWorkable MedicinalPillWorkable_)
            {
              Components.Get(entity, MedicinalPillWorkable_);
            }
            if (comp is GassyMooComet GassyMooComet_)
            {
              Components.Get(entity, GassyMooComet_);
            }
            if (comp is PodLander PodLander_)
            {
              Components.Get(entity, PodLander_);
            }
            if (comp is MinionStorage MinionStorage_)
            {
              Components.Get(entity, MinionStorage_);
            }
            if (comp is SimpleMassStatusItem SimpleMassStatusItem_)
            {
              Components.Get(entity, SimpleMassStatusItem_);
            }
            if (comp is Compostable Compostable_)
            {
              Components.Get(entity, Compostable_);
            }
            if (comp is Edible Edible_)
            {
              Components.Get(entity, Edible_);
            }
            if (comp.GetType().Name == "DehydratedFoodPackage")
            {
              Components.Get(entity, comp, comp.GetType().Name);
            }
            if (comp is HasSortOrder HasSortOrder_)
            {
              Components.Get(entity, HasSortOrder_);
            }
            if (comp is FossilBits FossilBits_)
            {
              Components.Get(entity, FossilBits_);
            }
            if (comp is GeneShuffler GeneShuffler_)
            {
              Components.Get(entity, GeneShuffler_);
            }
            if (comp is MinorDigSiteWorkable MinorDigSiteWorkable_)
            {
              Components.Get(entity, MinorDigSiteWorkable_);
            }
            if (comp is Workable Workable_)
            {
              Components.Get(entity, Workable_);
            }
            if (comp is SetLocker SetLocker_)
            {
              Components.Get(entity, SetLocker_);
            }
            if (comp is WarpReceiver WarpReceiver_)
            {
              Components.Get(entity, WarpReceiver_);
            }
            if (comp is WarpPortal WarpPortal_)
            {
              Components.Get(entity, WarpPortal_);
            }
            if (comp is StickerBomb StickerBomb_)
            {
              Components.Get(entity, StickerBomb_);
            }
            if (comp is CryoTank CryoTank_)
            {
              Components.Get(entity, CryoTank_);
            }
            if (comp is Storable Storable_)
            {
              Components.Get(entity, Storable_);
            }
            if (comp is Placeable Placeable_)
            {
              Components.Get(entity, Placeable_);
            }
            if (comp is BallisticClusterGridEntity BallisticClusterGridEntity_)
            {
              Components.Get(entity, BallisticClusterGridEntity_);
            }
            if (comp is ClusterTraveler ClusterTraveler_)
            {
              Components.Get(entity, ClusterTraveler_);
            }
            if (comp is Klei.AI.Traits Traits_)
            {
              Components.Get(entity, Traits_);
            }
            if (comp is AnimEventHandler AnimEventHandler_)
            {
              Components.Get(entity, AnimEventHandler_);
            }
            if (comp is SnapOn SnapOn_)
            {
              Components.Get(entity, SnapOn_);
            }
            if (comp is OrnamentReceptacle OrnamentReceptacle_)
            {
              Components.Get(entity, OrnamentReceptacle_);
            }
            if (comp is Navigator Navigator_)
            {
              Components.Get(entity, Navigator_);
            }
            if (comp is CreatureBrain CreatureBrain_)
            {
              Components.Get(entity, CreatureBrain_);
            }
            if (comp is ChoreConsumer ChoreConsumer_)
            {
              Components.Get(entity, ChoreConsumer_);
            }
            if (comp is MinionModifiers MinionModifiers_)
            {
              Components.Get(entity, MinionModifiers_);
            }
            if (comp is Klei.AI.AttributeLevels AttributeLevels_)
            {
              Components.Get(entity, AttributeLevels_);
            }
            if (comp is Database.AttributeConverters DatabaseAttributeConverters_)
            {
              Components.Get(entity, DatabaseAttributeConverters_);
            }
            if (comp is Klei.AI.AttributeConverters KleiAIAttributeConverters_)
            {
              Components.Get(entity, KleiAIAttributeConverters_);
            }
            if (comp is MinionBrain MinionBrain_)
            {
              Components.Get(entity, MinionBrain_);
            }
            if (comp is Worker Worker_)
            {
              Components.Get(entity, Worker_);
            }
            if (comp is Health Health_)
            {
              Components.Get(entity, Health_);
            }
            if (comp is OxygenBreather OxygenBreather_)
            {
              Components.Get(entity, OxygenBreather_);
            }
            if (comp is WarmBlooded WarmBlooded_)
            {
              Components.Get(entity, WarmBlooded_);
            }
            if (comp is MinionIdentity MinionIdentity_)
            {
              Components.Get(entity, MinionIdentity_);
            }
            if (comp is GridVisibility GridVisibility_)
            {
              Components.Get(entity, GridVisibility_);
            }
            if (comp is MoverLayerOccupier MoverLayerOccupier_)
            {
              Components.Get(entity, MoverLayerOccupier_);
            }
            if (comp is ChoreProvider ChoreProvider_)
            {
              Components.Get(entity, ChoreProvider_);
            }
            if (comp is Sensors Sensors_)
            {
              Components.Get(entity, Sensors_);
            }
            if (comp is Chattable Chattable_)
            {
              Components.Get(entity, Chattable_);
            }
            if (comp is FaceGraph FaceGraph_)
            {
              Components.Get(entity, FaceGraph_);
            }
            if (comp is Accessorizer Accessorizer_)
            {
              Components.Get(entity, Accessorizer_);
            }
            if (comp is WearableAccessorizer WearableAccessorizer_)
            {
              Components.Get(entity, WearableAccessorizer_);
            }
            if (comp is Schedulable Schedulable_)
            {
              Components.Get(entity, Schedulable_);
            }
            if (comp is FactionAlignment FactionAlignment_)
            {
              Components.Get(entity, FactionAlignment_);
            }
            if (comp is Weapon Weapon_)
            {
              Components.Get(entity, Weapon_);
            }
            if (comp is RangedAttackable RangedAttackable_)
            {
              Components.Get(entity, RangedAttackable_);
            }
            if (comp is CreatureSimTemperatureTransfer CreatureSimTemperatureTransfer_)
            {
              Components.Get(entity, CreatureSimTemperatureTransfer_);
            }
            if (comp is SicknessTrigger SicknessTrigger_)
            {
              Components.Get(entity, SicknessTrigger_);
            }
            if (comp is ClothingWearer ClothingWearer_)
            {
              Components.Get(entity, ClothingWearer_);
            }
            if (comp is SuitEquipper SuitEquipper_)
            {
              Components.Get(entity, SuitEquipper_);
            }
            if (comp is ConsumableConsumer ConsumableConsumer_)
            {
              Components.Get(entity, ConsumableConsumer_);
            }
            if (comp is NoiseListener NoiseListener_)
            {
              Components.Get(entity, NoiseListener_);
            }
            if (comp is MinionResume MinionResume_)
            {
              Components.Get(entity, MinionResume_);
            }
            if (comp is RotPile RotPile_)
            {
              Components.Get(entity, RotPile_);
            }
            if (comp is TemperatureCookable TemperatureCookable_)
            {
              Components.Get(entity, TemperatureCookable_);
            }
            if (comp is TemperatureVulnerable TemperatureVulnerable_)
            {
              Components.Get(entity, TemperatureVulnerable_);
            }
            if (comp is DrowningMonitor DrowningMonitor_)
            {
              Components.Get(entity, DrowningMonitor_);
            }
            if (comp is Butcherable Butcherable_)
            {
              Components.Get(entity, Butcherable_);
            }
            if (comp is Trappable Trappable_)
            {
              Components.Get(entity, Trappable_);
            }
            if (comp is Baggable Baggable_)
            {
              Components.Get(entity, Baggable_);
            }
            if (comp is Capturable Capturable_)
            {
              Components.Get(entity, Capturable_);
            }
            if (comp is Staterpillar Staterpillar_)
            {
              Components.Get(entity, Staterpillar_);
            }
            if (comp is HighEnergyParticle HighEnergyParticle_)
            {
              Components.Get(entity, HighEnergyParticle_);
            }
            if (comp is Klei.AI.PrefabAttributeModifiers PrefabAttributeModifiers_)
            {
              Components.Get(entity, PrefabAttributeModifiers_);
            }
            if (comp is MutantPlant MutantPlant_)
            {
              Components.Get(entity, MutantPlant_);
            }
            if (comp is PlantableSeed PlantableSeed_)
            {
              Components.Get(entity, PlantableSeed_);
            }
            if (comp is PressureVulnerable PressureVulnerable_)
            {
              Components.Get(entity, PressureVulnerable_);
            }
            if (comp is WiltCondition WiltCondition_)
            {
              Components.Get(entity, WiltCondition_);
            }
            if (comp is Uprootable Uprootable_)
            {
              Components.Get(entity, Uprootable_);
            }
            if (comp is UprootedMonitor UprootedMonitor_)
            {
              Components.Get(entity, UprootedMonitor_);
            }
            if (comp is ReceptacleMonitor ReceptacleMonitor_)
            {
              Components.Get(entity, ReceptacleMonitor_);
            }
            if (comp is Crop Crop_)
            {
              Components.Get(entity, Crop_);
            }
            if (comp is Growing Growing_)
            {
              Components.Get(entity, Growing_);
            }
            if (comp is Harvestable Harvestable_)
            {
              Components.Get(entity, Harvestable_);
            }
            if (comp is HarvestDesignatable HarvestDesignatable_)
            {
              Components.Get(entity, HarvestDesignatable_);
            }
            if (comp is StandardCropPlant StandardCropPlant_)
            {
              Components.Get(entity, StandardCropPlant_);
            }
            if (comp is SeedProducer SeedProducer_)
            {
              Components.Get(entity, SeedProducer_);
            }
            if (comp is BasicForagePlantPlanted BasicForagePlantPlanted_)
            {
              Components.Get(entity, BasicForagePlantPlanted_);
            }
            if (comp is PrickleGrass PrickleGrass_)
            {
              Components.Get(entity, PrickleGrass_);
            }
            if (comp is ColdBreather ColdBreather_)
            {
              Components.Get(entity, ColdBreather_);
            }
            if (comp is CritterTrapPlant CritterTrapPlant_)
            {
              Components.Get(entity, CritterTrapPlant_);
            }
            if (comp is EvilFlower EvilFlower_)
            {
              Components.Get(entity, EvilFlower_);
            }
            if (comp is TreeBud TreeBud_)
            {
              Components.Get(entity, TreeBud_);
            }
            if (comp is BudUprootedMonitor BudUprootedMonitor_)
            {
              Components.Get(entity, BudUprootedMonitor_);
            }
            if (comp is BuddingTrunk BuddingTrunk_)
            {
              Components.Get(entity, BuddingTrunk_);
            }
            if (comp is DiseaseSourceVisualizer DiseaseSourceVisualizer_)
            {
              Components.Get(entity, DiseaseSourceVisualizer_);
            }
            if (comp is HiveWorkableEmpty HiveWorkableEmpty_)
            {
              Components.Get(entity, HiveWorkableEmpty_);
            }
            if (comp is FoundationMonitor FoundationMonitor_)
            {
              Components.Get(entity, FoundationMonitor_);
            }
            if (comp is Bee Bee_)
            {
              Components.Get(entity, Bee_);
            }
            if (comp is LightSymbolTracker LightSymbolTracker_)
            {
              Components.Get(entity, LightSymbolTracker_);
            }
            //  if (comp is OilFloaterMovementSound OilFloaterMovementSound_)
            //  {
            //    Components.Get(entity, OilFloaterMovementSound_);
            //  }
            if (comp is IlluminationVulnerable IlluminationVulnerable_)
            {
              Components.Get(entity, IlluminationVulnerable_);
            }
            if (comp is Uncoverable Uncoverable_)
            {
              Components.Get(entity, Uncoverable_);
            }
            if (comp is Geyser Geyser_)
            {
              Components.Get(entity, Geyser_);
            }
            if (comp is GeyserConfigurator GeyserConfigurator_)
            {
              Components.Get(entity, GeyserConfigurator_);
            }
            if (comp is Studyable Studyable_)
            {
              Components.Get(entity, Studyable_);
            }
            if (comp is ClusterMapMeteorShowerVisualizer ClusterMapMeteorShowerVisualizer_)
            {
              Components.Get(entity, ClusterMapMeteorShowerVisualizer_);
            }
            if (comp is SaltPlant SaltPlant_)
            {
              Components.Get(entity, SaltPlant_);
            }
            if (comp is BlightVulnerable BlightVulnerable_)
            {
              Components.Get(entity, BlightVulnerable_);
            }
            if (comp is Oxyfern Oxyfern_)
            {
              Components.Get(entity, Oxyfern_);
            }
            if (comp is DiseaseEmitter DiseaseEmitter_)
            {
              Components.Get(entity, DiseaseEmitter_);
            }
            if (comp is UpdateElementConsumerPosition UpdateElementConsumerPosition_)
            {
              Components.Get(entity, UpdateElementConsumerPosition_);
            }
            if (comp is BubbleSpawner BubbleSpawner_)
            {
              Components.Get(entity, BubbleSpawner_);
            }
            if (comp is Equippable Equippable_)
            {
              Components.Get(entity, Equippable_);
            }
            if (comp is SuitTank SuitTank_)
            {
              Components.Get(entity, SuitTank_);
            }
            if (comp is HelmetController HelmetController_)
            {
              Components.Get(entity, HelmetController_);
            }
            if (comp is Durability Durability_)
            {
              Components.Get(entity, Durability_);
            }
            if (comp is AtmoSuit AtmoSuit_)
            {
              Components.Get(entity, AtmoSuit_);
            }
            if (comp is SuitDiseaseHandler SuitDiseaseHandler_)
            {
              Components.Get(entity, SuitDiseaseHandler_);
            }
            if (comp is RepairableEquipment RepairableEquipment_)
            {
              Components.Get(entity, RepairableEquipment_);
            }
            if (comp is EquippableBalloon EquippableBalloon_)
            {
              Components.Get(entity, EquippableBalloon_);
            }
            if (comp is JetSuitTank JetSuitTank_)
            {
              Components.Get(entity, JetSuitTank_);
            }
            if (comp is LeadSuitTank LeadSuitTank_)
            {
              Components.Get(entity, LeadSuitTank_);
            }
            if (comp is ClinicDreamable ClinicDreamable_)
            {
              Components.Get(entity, ClinicDreamable_);
            }
            if (comp is HarvestablePOIClusterGridEntity HarvestablePOIClusterGridEntity_)
            {
              Components.Get(entity, HarvestablePOIClusterGridEntity_);
            }
            if (comp is HarvestablePOIConfigurator HarvestablePOIConfigurator_)
            {
              Components.Get(entity, HarvestablePOIConfigurator_);
            }
            if (comp is ArtifactPOIClusterGridEntity ArtifactPOIClusterGridEntity_)
            {
              Components.Get(entity, ArtifactPOIClusterGridEntity_);
            }
            if (comp is ArtifactPOIConfigurator ArtifactPOIConfigurator_)
            {
              Components.Get(entity, ArtifactPOIConfigurator_);
            }
            TagsGet(entity, prefab.Tags.Select(t => t.Name).ToArray());
          }
        }
      }

      public static void TagsGet(Entity entity, string[] tags)
      {
        foreach (var tag in tags)
        {
          translations[tag] = (Strings.Get("STRINGS.MISC.TAGS." + tag.ToUpper()), "");
          switch (tag)
          {
            case "Life":
              break;
            case "PedestalDisplayable":
              break;
            case "Solid":
              break;
            case "Organics":
              if (entity.menu == Category.NONE)
              {
                entity.menu = Category.Misc.Other;
              }
              break;
            case "FlyingCritterEdible":
              break;
            case "ConsumableOre":
              break;
            case "Mixture":
              break;
            case "AnyWater":
              break;
            case "Liquid":
              break;
            case "EmitsLight":
              break;
            case "Oxidizer":
              break;
            case "Compostable":
              if (entity.menu == Category.NONE)
              {
                entity.menu = Category.TOREMOVE;
              }
              break;
            case "IceOre":
              break;
            case "Unstable":
              break;
            case "Liquifiable":
              break;
            case "BuildableAny":
              break;
            case "Transparent":
              break;
            case "Other":
              if (entity.menu == Category.NONE)
              {
                entity.menu = Category.Misc.Other;
              }
              break;
            case "BuildableRaw":
              break;
            case "RareMaterials":
              break;
            case "Agriculture":
              break;
            case "Metal":
              break;
            case "RefinedMetal":
              break;
            case "Ore":
              break;
            case "BuildableProcessed":
              break;
            case "Plumbable":
              break;
            case "Crushable":
              break;
            case "Insulator":
              break;
            case "ManufacturedMaterial":
              break;
            case "Plastic":
              break;
            case "Antiseptic":
              break;
            case "PreciousRock":
              break;
            case "Noncrushable":
              break;
            case "Filter":
              break;
            case "Farmable":
              break;
            case "Coal":
              break;
            case "Special":
              break;
            case "CombustibleLiquid":
              break;
            case "Oil":
              break;
            case "Gas":
              break;
            case "Unbreathable":
              break;
            case "Breathable":
              break;
            case "Alloy":
              break;
            case "CombustibleGas":
              break;
            case "Clinic":
              break;
            case "ScienceBuilding":
              break;
            case "RanchStationType":
              break;
            case "IndustrialMachinery":
              break;
            case "RecBuilding":
              break;
            case "RocketModule":
              entity.menu = Category.Building.RocketModule;
              break;
            case "BedType":
              break;
            case "Bunker":
              break;
            case "FloorTiles":
              break;
            case "Decoration":
              break;
            case "Carpeted":
              break;
            case "LightSource":
              break;
            case "OverlayBackLayer":
              break;
            case "OverlayFrontLayer":
              break;
            case "CookTop":
              break;
            case "CreatureRelocator":
              break;
            case "DevBuilding":
              break;
            case "CorrosionProof":
              break;
            case "MessTable":
              break;
            case "Telepad":
              break;
            case "Experimental":
              break;
            case "Backwall":
              break;
            case "Gravitas":
              if (entity.menu == Category.NONE)
              {
                entity.menu = Category.Building.Gravitas;
              }
              break;
            case "FarmStationType":
              break;
            case "FarmTiles":
              break;
            case "ToiletType":
              break;
            case "FlushToiletType":
              break;
            case "Vents":
              break;
            case "Window":
              break;
            case "HEPPassThrough":
              break;
            case "LaunchButtonRocketModule":
              break;
            case "NoseRocketModule":
              break;
            case "WashStation":
              break;
            case "AdvancedWashStation":
              break;
            case "Pipes":
              break;
            case "JetSuitBlocker":
              break;
            case "NotRocketInteriorBuilding":
              entity.notInRocket = true;
              break;
            case "RocketInteriorBuilding":
              entity.onlyInRocket = true;
              break;
            case "LuxuryBedType":
              break;
            case "DeStressingBuilding":
              break;
            case "ModularConduitPort":
              break;
            case "ModularLaunchpadPort":
              break;
            case "Park":
              break;
            case "PowerStation":
              break;
            case "NotRoomAssignable":
              break;
            case "UniquePerWorld":
              break;
            case "RocketInterior":
              break;
            case "NoRocketRefund":
              break;
            case "RocketEnvelopeTile":
              break;
            case "SpiceStation":
              break;
            case "TravelTubeBridges":
              break;
            case "WireBridges":
              break;
            case "Comet":
              break;
            case "MiscPickupable":
              if (entity.menu == Category.NONE)
              {
                entity.menu = Category.Misc.Other;
              }
              break;
            case "Artifact":
              // entity.type = "Artifact";
              break;
            case "MedicalSupplies":
              break;
            case "AdvancedDoctorStationMedicalSupplies":
              break;
            case "DoctorStationMedicalSupplies":
              break;
            case "Medicine":
              break;
            case "IndustrialProduct":
            case "IndustrialIngredient":
              if (entity.menu == Category.NONE)
              {
                entity.menu = Category.Misc.Industrial;
              }
              break;
            case "BuildingWood":
              break;
            case "Edible":
              break;
            case "Dehydrated":
              break;
            case "PickupableStorage":
              break;
            case "CookingIngredient":
              if (entity.menu == Category.NONE)
              {
                entity.menu = Category.Food.Ingredient;
              }
              break;
            case "StoryTraitResource":
              if (entity.menu == Category.NONE)
              {
                entity.menu = Category.Misc.Quest;
              }
              break;
            case "MoltShell":
              break;
            case "WarpTech":
              break;
            case "IgnoreMaterialCategory":
              break;
            case "Creature":
              break;
            case "Robot":
              break;
            case "Walker":
              break;
            case "CreatureBrain":
              break;
            case "DupeBrain":
              break;
            case "Keepsake":
              entity.menu = Category.Artifact.Quest;
              break;
            case "Egg":
              break;
            case "IncubatableEgg":
              break;
            case "BagableCreature":
              break;
            case "OriginalCreature":
              break;
            case "Amphibious":
              break;
            case "BuildingFiber":
              break;
            case "Seed":
              break;
            case "Plant":
              break;
            case "WaterSeed":
            case "CropSeed":
              entity.menu = Category.Seed.Crop;
              break;
            case "DecorSeed":
              entity.menu = Category.Seed.Decor;
              break;
            case "Flyer":
              break;
            case "Digger":
              break;
            case "Hoverer":
              break;
            case "GeyserFeature":
              break;
            case "Pickled":
              break;
            case "Hanging":
              break;
            case "CrabFriend":
              break;
            case "SwimmingCreature":
              break;
            case "Swimmer":
              break;
            case "Clothes":
              break;
            case "AirtightSuit":
              break;
            case "Suit":
              break;
            default:
              break;
          }
        }
      }
    }
  }
}
