export const db = {
  building: {
    medical: {
      AdvancedDoctorStation: {
        tag: "AdvancedDoctorStation",
        menu_order: 6.0,
        tags: [
          "Clinic"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          480.0
        ],
        external_heat: 0.25,
        internal_heat: 0.5,
        width: 2,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Apothecary: {
        tag: "Apothecary",
        menu_order: 4.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          240.0
        ],
        external_heat: 0.25,
        internal_heat: 0.5,
        width: 2,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      DecontaminationShower: {
        tag: "DecontaminationShower",
        menu_order: 3.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal",
          "Lead"
        ],
        width: 2,
        height: 4,
        hp: 250,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 900.0,
        flood_threshold: 0.35,
        decor: -20.0,
        decor_radius: 4.0,
        deconstructable: true,
        enableable: true
      },
      DoctorStation: {
        tag: "DoctorStation",
        menu_order: 5.0,
        tags: [
          "Clinic"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        width: 3,
        height: 2,
        hp: 10,
        mass: 200.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Grave: {
        tag: "Grave",
        menu_order: 9.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 800.0,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      HandSanitizer: {
        tag: "HandSanitizer",
        menu_order: 2.0,
        tags: [
          "WashStation",
          "AdvancedWashStation"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MassageTable: {
        tag: "MassageTable",
        menu_order: 8.0,
        tags: [
          "DeStressingBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        electrity_consummation: [
          240.0
        ],
        external_heat: 0.125,
        internal_heat: 0.5,
        width: 2,
        height: 2,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      MedicalCot: {
        tag: "MedicalCot",
        menu_order: 7.0,
        tags: [
          "Clinic",
          "BedType"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        width: 3,
        height: 2,
        hp: 10,
        mass: 200.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      WashBasin: {
        tag: "WashBasin",
        menu_order: 0.0,
        tags: [
          "WashStation"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        width: 2,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      WashSink: {
        tag: "WashSink",
        menu_order: 1.0,
        tags: [
          "WashStation",
          "AdvancedWashStation"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    equipment: {
      AdvancedResearchCenter: {
        tag: "AdvancedResearchCenter",
        menu_order: 1.0,
        tags: [
          "ScienceBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          120.0
        ],
        external_heat: 0.5,
        internal_heat: 4.0,
        width: 3,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      ArtifactAnalysisStation: {
        tag: "ArtifactAnalysisStation",
        menu_order: 13.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          480.0
        ],
        internal_heat: 1.0,
        width: 4,
        height: 4,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      ClothingAlterationStation: {
        tag: "ClothingAlterationStation",
        menu_order: 17.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          240.0
        ],
        width: 4,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      ClothingFabricator: {
        tag: "ClothingFabricator",
        menu_order: 16.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          240.0
        ],
        width: 4,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      CraftingTable: {
        tag: "CraftingTable",
        menu_order: 15.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          60.0
        ],
        width: 2,
        height: 2,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      DLC1CosmicResearchCenter: {
        tag: "DLC1CosmicResearchCenter",
        menu_order: 4.0,
        tags: [
          "ScienceBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          120.0
        ],
        external_heat: 0.5,
        internal_heat: 4.0,
        width: 4,
        height: 4,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      FarmStation: {
        tag: "FarmStation",
        menu_order: 7.0,
        tags: [
          "FarmStationType"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 30,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      GeneticAnalysisStation: {
        tag: "GeneticAnalysisStation",
        menu_order: 8.0,
        tags: [
          "ScienceBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          480.0
        ],
        external_heat: 0.5,
        internal_heat: 4.0,
        width: 7,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      GeoTuner: {
        tag: "GeoTuner",
        menu_order: 5.0,
        tags: [
          "ScienceBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        electrity_consummation: [
          120.0
        ],
        external_heat: 0.5,
        internal_heat: 4.0,
        width: 4,
        height: 3,
        hp: 30,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      JetSuitLocker: {
        tag: "JetSuitLocker",
        menu_order: 24.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          120.0
        ],
        width: 2,
        height: 4,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      JetSuitMarker: {
        tag: "JetSuitMarker",
        menu_order: 23.0,
        tags: [
          "JetSuitBlocker"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 2,
        height: 4,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LeadSuitLocker: {
        tag: "LeadSuitLocker",
        menu_order: 26.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          120.0
        ],
        width: 2,
        height: 4,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LeadSuitMarker: {
        tag: "LeadSuitMarker",
        menu_order: 25.0,
        tags: [
          "JetSuitBlocker"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 2,
        height: 4,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MilkingStation: {
        tag: "MilkingStation",
        menu_order: 11.0,
        tags: [
          "RanchStationType"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 2,
        height: 4,
        hp: 30,
        mass: 600.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true,
        work_time: 20.0
      },
      MissileFabricator: {
        tag: "MissileFabricator",
        menu_order: 14.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          960.0
        ],
        internal_heat: 8.0,
        width: 5,
        height: 4,
        hp: 250,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      NuclearResearchCenter: {
        tag: "NuclearResearchCenter",
        menu_order: 2.0,
        tags: [
          "ScienceBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          120.0
        ],
        external_heat: 0.5,
        internal_heat: 4.0,
        width: 5,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      OrbitalResearchCenter: {
        tag: "OrbitalResearchCenter",
        menu_order: 3.0,
        tags: [
          "ScienceBuilding",
          "RocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Plastic"
        ],
        only_in_rocket: true,
        electrity_consummation: [
          60.0
        ],
        external_heat: 0.125,
        internal_heat: 0.5,
        width: 2,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      OxygenMaskLocker: {
        tag: "OxygenMaskLocker",
        menu_order: 20.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      OxygenMaskMarker: {
        tag: "OxygenMaskMarker",
        menu_order: 19.0,
        tags: [
          "JetSuitBlocker"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      PowerControlStation: {
        tag: "PowerControlStation",
        menu_order: 6.0,
        tags: [
          "PowerStation",
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        width: 2,
        height: 4,
        hp: 30,
        mass: 200.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      RanchStation: {
        tag: "RanchStation",
        menu_order: 9.0,
        tags: [
          "RanchStationType"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 30,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true,
        work_time: 12.0
      },
      ResearchCenter: {
        tag: "ResearchCenter",
        menu_order: 0.0,
        tags: [
          "ScienceBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          60.0
        ],
        external_heat: 0.125,
        internal_heat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      ResetSkillsStation: {
        tag: "ResetSkillsStation",
        menu_order: 12.0,
        tags: [
          "IndustrialMachinery",
          "NotRoomAssignable"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          480.0
        ],
        external_heat: 0.5,
        internal_heat: 4.0,
        width: 3,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      ShearingStation: {
        tag: "ShearingStation",
        menu_order: 10.0,
        tags: [
          "RanchStationType"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        electrity_consummation: [
          60.0
        ],
        external_heat: 0.125,
        internal_heat: 0.5,
        width: 3,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true,
        work_time: 12.0
      },
      SuitFabricator: {
        tag: "SuitFabricator",
        menu_order: 18.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          480.0
        ],
        width: 4,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      SuitLocker: {
        tag: "SuitLocker",
        menu_order: 22.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          120.0
        ],
        width: 1,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SuitMarker: {
        tag: "SuitMarker",
        menu_order: 21.0,
        tags: [
          "JetSuitBlocker"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    food: {
      AirBorneCritterCondo: {
        tag: "AirBorneCritterCondo",
        menu_order: 24.0,
        tags: [
          "RanchStationType"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnCeiling",
        material_category: [
          "Plastic"
        ],
        rotations: "FlipH",
        width: 3,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: 20.0,
        decor_radius: 4.0,
        deconstructable: true,
        enableable: true
      },
      CookingStation: {
        tag: "CookingStation",
        menu_order: 1.0,
        tags: [
          "CookTop"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          60.0
        ],
        external_heat: 0.5,
        internal_heat: 4.0,
        width: 3,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      CreatureFeeder: {
        tag: "CreatureFeeder",
        menu_order: 14.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 2,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      CritterCondo: {
        tag: "CritterCondo",
        menu_order: 22.0,
        tags: [
          "RanchStationType"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw",
          "BuildingFiber"
        ],
        rotations: "FlipH",
        width: 3,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 210.0,
        flood_threshold: 0.35,
        decor: 20.0,
        decor_radius: 4.0,
        deconstructable: true,
        enableable: true
      },
      CritterDropOff: {
        tag: "CritterDropOff",
        menu_order: 12.0,
        tags: [
          "CreatureRelocator"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      CritterPickUp: {
        tag: "CritterPickUp",
        menu_order: 11.0,
        tags: [
          "CreatureRelocator"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      EggCracker: {
        tag: "EggCracker",
        menu_order: 18.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 2,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        flood_threshold: 0.35,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      EggIncubator: {
        tag: "EggIncubator",
        menu_order: 17.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          240.0
        ],
        external_heat: 0.5,
        internal_heat: 4.0,
        width: 2,
        height: 3,
        hp: 30,
        high_temp_warning: 363.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      FarmTile: {
        tag: "FarmTile",
        menu_order: 7.0,
        tags: [
          "FarmTiles"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Farmable"
        ],
        rotations: "FlipV",
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        deconstructable: true
      },
      FishDeliveryPoint: {
        tag: "FishDeliveryPoint",
        menu_order: 13.0,
        tags: [
          "CreatureRelocator"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      FishFeeder: {
        tag: "FishFeeder",
        menu_order: 15.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      FoodDehydrator: {
        tag: "FoodDehydrator",
        menu_order: 4.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        internal_heat: 4.0,
        width: 3,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 300.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      FoodRehydrator: {
        tag: "FoodRehydrator",
        menu_order: 5.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        electrity_consummation: [
          60.0
        ],
        internal_heat: 0.5,
        width: 1,
        height: 2,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 150.0,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      GourmetCookingStation: {
        tag: "GourmetCookingStation",
        menu_order: 2.0,
        tags: [
          "CookTop"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          240.0
        ],
        external_heat: 1.0,
        internal_heat: 8.0,
        width: 3,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      HydroponicFarm: {
        tag: "HydroponicFarm",
        menu_order: 8.0,
        tags: [
          "FarmTiles"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Metal"
        ],
        rotations: "FlipV",
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      MicrobeMusher: {
        tag: "MicrobeMusher",
        menu_order: 0.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          240.0
        ],
        external_heat: 0.5,
        internal_heat: 2.0,
        width: 2,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      MilkFeeder: {
        tag: "MilkFeeder",
        menu_order: 16.0,
        tags: [
          "RanchStationType"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 3,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      PlanterBox: {
        tag: "PlanterBox",
        menu_order: 6.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Farmable"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      RationBox: {
        tag: "RationBox",
        menu_order: 9.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        width: 2,
        height: 2,
        hp: 10,
        mass: 400.0,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      Refrigerator: {
        tag: "Refrigerator",
        menu_order: 10.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        electrity_consummation: [
          120.0,
          20.0
        ],
        internal_heat: 0.125,
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SpiceGrinder: {
        tag: "SpiceGrinder",
        menu_order: 3.0,
        tags: [
          "SpiceStation"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 30,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      UnderwaterCritterCondo: {
        tag: "UnderwaterCritterCondo",
        menu_order: 23.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Plastic"
        ],
        rotations: "FlipH",
        width: 3,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        decor: 20.0,
        decor_radius: 4.0,
        deconstructable: true,
        enableable: true
      },
      CreatureAirTrap: {
        tag: "CreatureAirTrap",
        menu_order: 21.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 2,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true,
        trap_critters: [
          "Flyer"
        ]
      },
      CreatureGroundTrap: {
        tag: "CreatureGroundTrap",
        menu_order: 19.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 2,
        height: 2,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true,
        trap_critters: [
          "Walker",
          "Hoverer",
          "Swimmer"
        ]
      },
      WaterTrap: {
        tag: "WaterTrap",
        menu_order: 20.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 2,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true,
        trap_critters: [
          "Swimmer"
        ]
      }
    },
    utilities: {
      AirConditioner: {
        tag: "AirConditioner",
        menu_order: 4.0,
        tags: [],
        thermal_conductivity: 5.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        rotations: "FlipH",
        electrity_consummation: [
          240.0
        ],
        width: 2,
        height: 2,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      IceCooledFan: {
        tag: "IceCooledFan",
        menu_order: 2.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        external_heat: -24.0,
        internal_heat: -8.0,
        width: 2,
        height: 2,
        hp: 30,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      IceMachine: {
        tag: "IceMachine",
        menu_order: 3.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          60.0
        ],
        external_heat: 4.0,
        internal_heat: 12.0,
        width: 2,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      LiquidConditioner: {
        tag: "LiquidConditioner",
        menu_order: 5.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        rotations: "FlipH",
        electrity_consummation: [
          1200.0
        ],
        width: 2,
        height: 2,
        hp: 100,
        high_temp_warning: 398.15,
        high_temp_fatal: 533.15,
        mass: 1200.0,
        deconstructable: true,
        enableable: true
      },
      LiquidHeater: {
        tag: "LiquidHeater",
        menu_order: 1.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          960.0
        ],
        external_heat: 4000.0,
        internal_heat: 64.0,
        width: 4,
        height: 1,
        hp: 30,
        high_temp_warning: 398.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      OilWellCap: {
        tag: "OilWellCap",
        menu_order: 7.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "BuildingAttachPoint",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          240.0
        ],
        internal_heat: 2.0,
        width: 4,
        height: 4,
        hp: 100,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      OreScrubber: {
        tag: "OreScrubber",
        menu_order: 6.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 3,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SpaceHeater: {
        tag: "SpaceHeater",
        menu_order: 0.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          120.0
        ],
        external_heat: 2.0,
        internal_heat: 16.0,
        width: 2,
        height: 2,
        hp: 30,
        high_temp_warning: 398.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SweepBotStation: {
        tag: "SweepBotStation",
        menu_order: 9.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          240.0
        ],
        internal_heat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 75.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      ThermalBlock: {
        tag: "ThermalBlock",
        menu_order: 8.0,
        tags: [
          "Backwall"
        ],
        thermal_conductivity: 1.0,
        location_rule: "NotInTiles",
        material_category: [
          "BuildableAny"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 800.0,
        deconstructable: true,
        enableable: true
      }
    },
    oxygen: {
      AirFilter: {
        tag: "AirFilter",
        menu_order: 3.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        electrity_consummation: [
          5.0
        ],
        external_heat: 0.125,
        internal_heat: 0.5,
        width: 1,
        height: 1,
        hp: 30,
        mass: 100.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      AlgaeHabitat: {
        tag: "AlgaeHabitat",
        menu_order: 2.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Farmable"
        ],
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      CO2Scrubber: {
        tag: "CO2Scrubber",
        menu_order: 4.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        rotations: "FlipH",
        electrity_consummation: [
          120.0
        ],
        internal_heat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      Electrolyzer: {
        tag: "Electrolyzer",
        menu_order: 5.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          120.0
        ],
        external_heat: 0.25,
        internal_heat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MineralDeoxidizer: {
        tag: "MineralDeoxidizer",
        menu_order: 0.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          120.0
        ],
        external_heat: 0.5,
        internal_heat: 1.0,
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      RustDeoxidizer: {
        tag: "RustDeoxidizer",
        menu_order: 6.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          60.0
        ],
        external_heat: 0.125,
        internal_heat: 1.0,
        width: 2,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SublimationStation: {
        tag: "SublimationStation",
        menu_order: 1.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          60.0
        ],
        external_heat: 0.5,
        internal_heat: 1.0,
        width: 2,
        height: 1,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    refining: {
      AlgaeDistillery: {
        tag: "AlgaeDistillery",
        menu_order: 4.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          120.0
        ],
        external_heat: 0.5,
        internal_heat: 1.0,
        width: 3,
        height: 4,
        hp: 100,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      Chlorinator: {
        tag: "Chlorinator",
        menu_order: 14.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        electrity_consummation: [
          480.0
        ],
        external_heat: 1.0,
        internal_heat: 2.0,
        width: 3,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Compost: {
        tag: "Compost",
        menu_order: 0.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        external_heat: 0.125,
        internal_heat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -20.0,
        decor_radius: 4.0,
        deconstructable: true,
        enableable: true
      },
      DiamondPress: {
        tag: "DiamondPress",
        menu_order: 16.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          240.0
        ],
        internal_heat: 16.0,
        width: 3,
        height: 5,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      EthanolDistillery: {
        tag: "EthanolDistillery",
        menu_order: 5.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          240.0
        ],
        external_heat: 0.5,
        internal_heat: 4.0,
        width: 4,
        height: 3,
        hp: 100,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      FertilizerMaker: {
        tag: "FertilizerMaker",
        menu_order: 3.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          120.0
        ],
        external_heat: 1.0,
        internal_heat: 2.0,
        width: 4,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      GlassForge: {
        tag: "GlassForge",
        menu_order: 10.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        electrity_consummation: [
          1200.0
        ],
        internal_heat: 16.0,
        width: 5,
        height: 4,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Kiln: {
        tag: "Kiln",
        menu_order: 7.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        external_heat: 16.0,
        internal_heat: 4.0,
        width: 2,
        height: 2,
        hp: 100,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MetalRefinery: {
        tag: "MetalRefinery",
        menu_order: 9.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        electrity_consummation: [
          1200.0
        ],
        internal_heat: 16.0,
        width: 3,
        height: 4,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      MilkFatSeparator: {
        tag: "MilkFatSeparator",
        menu_order: 17.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        electrity_consummation: [
          480.0
        ],
        internal_heat: 8.0,
        width: 4,
        height: 4,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true,
        storages: [
          {
            Item1: "internal",
            Item2: [
              "MilkFat"
            ],
            Item3: 15.0
          }
        ]
      },
      MilkPress: {
        tag: "MilkPress",
        menu_order: 18.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        internal_heat: 2.0,
        width: 2,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      OilRefinery: {
        tag: "OilRefinery",
        menu_order: 11.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        rotations: "FlipH",
        electrity_consummation: [
          480.0
        ],
        external_heat: 2.0,
        internal_heat: 8.0,
        width: 4,
        height: 4,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      OxyliteRefinery: {
        tag: "OxyliteRefinery",
        menu_order: 13.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        electrity_consummation: [
          1200.0
        ],
        external_heat: 8.0,
        internal_heat: 4.0,
        width: 3,
        height: 4,
        hp: 100,
        mass: 900.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      Polymerizer: {
        tag: "Polymerizer",
        menu_order: 12.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        rotations: "FlipH",
        electrity_consummation: [
          240.0
        ],
        external_heat: 0.5,
        internal_heat: 32.0,
        width: 3,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      RockCrusher: {
        tag: "RockCrusher",
        menu_order: 6.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          240.0
        ],
        internal_heat: 16.0,
        width: 4,
        height: 4,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      SludgePress: {
        tag: "SludgePress",
        menu_order: 8.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        electrity_consummation: [
          120.0
        ],
        internal_heat: 4.0,
        width: 4,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SupermaterialRefinery: {
        tag: "SupermaterialRefinery",
        menu_order: 15.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          1600.0
        ],
        internal_heat: 16.0,
        width: 4,
        height: 5,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      WaterPurifier: {
        tag: "WaterPurifier",
        menu_order: 1.0,
        tags: [
          "IndustrialMachinery",
          "OverlayBackLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        rotations: "FlipH",
        electrity_consummation: [
          120.0
        ],
        internal_heat: 4.0,
        width: 4,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Desalinator: {
        tag: "Desalinator",
        menu_order: 2.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        rotations: "FlipH",
        electrity_consummation: [
          480.0
        ],
        internal_heat: 8.0,
        width: 4,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      }
    },
    furniture: {
      ArcadeMachine: {
        tag: "ArcadeMachine",
        menu_order: 9.0,
        tags: [
          "RecBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          1200.0
        ],
        internal_heat: 2.0,
        width: 3,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      BeachChair: {
        tag: "BeachChair",
        menu_order: 16.0,
        tags: [
          "RecBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw",
          "BuildingFiber"
        ],
        width: 2,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 402.0,
        flood_threshold: 0.35,
        decor: 25.0,
        decor_radius: 5.0,
        deconstructable: true,
        enableable: true
      },
      Bed: {
        tag: "Bed",
        menu_order: 0.0,
        tags: [
          "BedType"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        width: 2,
        height: 2,
        hp: 10,
        mass: 200.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Canvas: {
        tag: "Canvas",
        menu_order: 31.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal",
          "BuildingFiber"
        ],
        rotations: "FlipH",
        width: 2,
        height: 2,
        hp: 30,
        mass: 401.0,
        decor: 10.0,
        decor_radius: 6.0,
        deconstructable: true,
        enableable: true
      },
      CanvasTall: {
        tag: "CanvasTall",
        menu_order: 33.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal",
          "BuildingFiber"
        ],
        rotations: "FlipH",
        width: 2,
        height: 3,
        hp: 30,
        mass: 401.0,
        decor: 15.0,
        decor_radius: 6.0,
        deconstructable: true,
        enableable: true
      },
      CanvasWide: {
        tag: "CanvasWide",
        menu_order: 32.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal",
          "BuildingFiber"
        ],
        rotations: "FlipH",
        width: 3,
        height: 2,
        hp: 30,
        mass: 401.0,
        decor: 15.0,
        decor_radius: 6.0,
        deconstructable: true,
        enableable: true
      },
      CeilingLight: {
        tag: "CeilingLight",
        menu_order: 4.0,
        tags: [
          "LightSource"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnCeiling",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          10.0
        ],
        internal_heat: 0.5,
        width: 1,
        height: 1,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      CornerMoulding: {
        tag: "CornerMoulding",
        menu_order: 30.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "InCorner",
        material_category: [
          "BuildableRaw"
        ],
        rotations: "FlipH",
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: 5.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      CrownMoulding: {
        tag: "CrownMoulding",
        menu_order: 29.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnCeiling",
        material_category: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: 5.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      DiningTable: {
        tag: "DiningTable",
        menu_order: 6.0,
        tags: [
          "MessTable"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      EspressoMachine: {
        tag: "EspressoMachine",
        menu_order: 10.0,
        tags: [
          "RecBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          480.0
        ],
        internal_heat: 1.0,
        width: 3,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      FloorLamp: {
        tag: "FloorLamp",
        menu_order: 3.0,
        tags: [
          "LightSource"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          8.0
        ],
        internal_heat: 0.5,
        width: 1,
        height: 2,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      FlowerVase: {
        tag: "FlowerVase",
        menu_order: 20.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 50.0,
        deconstructable: true,
        enableable: true
      },
      FlowerVaseHanging: {
        tag: "FlowerVaseHanging",
        menu_order: 22.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnCeiling",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 2,
        hp: 10,
        mass: 50.0,
        deconstructable: true,
        enableable: true
      },
      FlowerVaseHangingFancy: {
        tag: "FlowerVaseHangingFancy",
        menu_order: 23.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnCeiling",
        material_category: [
          "Transparent"
        ],
        width: 1,
        height: 2,
        hp: 10,
        mass: 50.0,
        decor: 10.0,
        decor_radius: 4.0,
        deconstructable: true,
        enableable: true
      },
      FlowerVaseWall: {
        tag: "FlowerVaseWall",
        menu_order: 21.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnWall",
        material_category: [
          "Metal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 1,
        hp: 10,
        mass: 50.0,
        deconstructable: true,
        enableable: true
      },
      HotTub: {
        tag: "HotTub",
        menu_order: 11.0,
        tags: [
          "RecBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal",
          "BuildingWood"
        ],
        electrity_consummation: [
          240.0
        ],
        external_heat: 1.0,
        internal_heat: 4.0,
        width: 5,
        height: 2,
        hp: 30,
        high_temp_warning: 310.85,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: 20.0,
        decor_radius: 4.0,
        deconstructable: true,
        enableable: true
      },
      IceSculpture: {
        tag: "IceSculpture",
        menu_order: 26.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Ice"
        ],
        rotations: "FlipH",
        width: 2,
        height: 2,
        hp: 10,
        mass: 400.0,
        decor: 20.0,
        decor_radius: 8.0,
        deconstructable: true,
        enableable: true
      },
      ItemPedestal: {
        tag: "ItemPedestal",
        menu_order: 34.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        width: 1,
        height: 2,
        hp: 10,
        mass: 100.0,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      Juicer: {
        tag: "Juicer",
        menu_order: 14.0,
        tags: [
          "RecBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          120.0
        ],
        internal_heat: 0.5,
        width: 3,
        height: 4,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LadderBed: {
        tag: "LadderBed",
        menu_order: 2.0,
        tags: [
          "BedType"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloorOrBuildingAttachPoint",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 2,
        height: 2,
        hp: 10,
        mass: 200.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      LuxuryBed: {
        tag: "LuxuryBed",
        menu_order: 1.0,
        tags: [
          "BedType",
          "LuxuryBedType"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Plastic"
        ],
        width: 4,
        height: 2,
        hp: 10,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: 15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      MarbleSculpture: {
        tag: "MarbleSculpture",
        menu_order: 27.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "PreciousRock"
        ],
        rotations: "FlipH",
        width: 2,
        height: 3,
        hp: 10,
        mass: 400.0,
        decor: 20.0,
        decor_radius: 8.0,
        deconstructable: true,
        enableable: true
      },
      MechanicalSurfboard: {
        tag: "MechanicalSurfboard",
        menu_order: 12.0,
        tags: [
          "RecBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          480.0
        ],
        internal_heat: 1.0,
        width: 2,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MetalSculpture: {
        tag: "MetalSculpture",
        menu_order: 28.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 10,
        mass: 400.0,
        decor: 20.0,
        decor_radius: 8.0,
        deconstructable: true,
        enableable: true
      },
      MonumentBottom: {
        tag: "MonumentBottom",
        menu_order: 35.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Steel",
          "Obsidian"
        ],
        rotations: "FlipH",
        width: 5,
        height: 5,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 10000.0,
        decor: 10.0,
        decor_radius: 5.0,
        deconstructable: true,
        enableable: true
      },
      MonumentMiddle: {
        tag: "MonumentMiddle",
        menu_order: 36.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "BuildingAttachPoint",
        material_category: [
          "Ceramic",
          "Polypropylene",
          "Steel"
        ],
        rotations: "FlipH",
        width: 5,
        height: 5,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 10000.0,
        decor: 10.0,
        decor_radius: 5.0,
        deconstructable: true,
        enableable: true
      },
      MonumentTop: {
        tag: "MonumentTop",
        menu_order: 37.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "BuildingAttachPoint",
        material_category: [
          "Glass",
          "Diamond",
          "Steel"
        ],
        rotations: "FlipH",
        width: 5,
        height: 5,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 10000.0,
        decor: 10.0,
        decor_radius: 5.0,
        deconstructable: true,
        enableable: true
      },
      ParkSign: {
        tag: "ParkSign",
        menu_order: 38.0,
        tags: [
          "Park"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableAny"
        ],
        width: 1,
        height: 2,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Phonobox: {
        tag: "Phonobox",
        menu_order: 8.0,
        tags: [
          "RecBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          960.0
        ],
        internal_heat: 1.0,
        width: 5,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      PixelPack: {
        tag: "PixelPack",
        menu_order: 18.0,
        tags: [
          "Backwall",
          "OverlayBackLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "NotInTiles",
        material_category: [
          "Glass",
          "RefinedMetal"
        ],
        rotations: "R360",
        electrity_consummation: [
          10.0
        ],
        width: 4,
        height: 1,
        hp: 30,
        mass: 125.0,
        decor: 20.0,
        decor_radius: 4.0,
        deconstructable: true,
        enableable: true
      },
      Sauna: {
        tag: "Sauna",
        menu_order: 13.0,
        tags: [
          "RecBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal",
          "BuildingWood"
        ],
        electrity_consummation: [
          60.0
        ],
        internal_heat: 0.5,
        width: 3,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: 15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Sculpture: {
        tag: "Sculpture",
        menu_order: 25.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 30,
        mass: 400.0,
        decor: 10.0,
        decor_radius: 8.0,
        deconstructable: true,
        enableable: true
      },
      SmallSculpture: {
        tag: "SmallSculpture",
        menu_order: 24.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        rotations: "FlipH",
        width: 1,
        height: 2,
        hp: 10,
        mass: 200.0,
        decor: 5.0,
        decor_radius: 4.0,
        deconstructable: true,
        enableable: true
      },
      SodaFountain: {
        tag: "SodaFountain",
        menu_order: 15.0,
        tags: [
          "RecBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          480.0
        ],
        internal_heat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SunLamp: {
        tag: "SunLamp",
        menu_order: 5.0,
        tags: [
          "LightSource"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal",
          "Glass"
        ],
        electrity_consummation: [
          960.0
        ],
        external_heat: 1.0,
        internal_heat: 4.0,
        width: 2,
        height: 4,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 250.0,
        flood_threshold: 0.35,
        decor: -20.0,
        decor_radius: 4.0,
        deconstructable: true,
        enableable: true
      },
      Telephone: {
        tag: "Telephone",
        menu_order: 19.0,
        tags: [
          "RecBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          120.0
        ],
        internal_heat: 0.5,
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      VerticalWindTunnel: {
        tag: "VerticalWindTunnel",
        menu_order: 17.0,
        tags: [
          "RecBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Plastic"
        ],
        electrity_consummation: [
          1200.0
        ],
        internal_heat: 2.0,
        width: 5,
        height: 6,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 1200.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      WaterCooler: {
        tag: "WaterCooler",
        menu_order: 7.0,
        tags: [
          "RecBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        width: 2,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    rocketModule: {
      ArtifactCargoBay: {
        tag: "ArtifactCargoBay",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 3,
        height: 1,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      BatteryModule: {
        tag: "BatteryModule",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 3,
        height: 2,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true
      },
      CO2Engine: {
        tag: "CO2Engine",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 3,
        height: 2,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      },
      GasCargoBayCluster: {
        tag: "GasCargoBayCluster",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 1000.0,
        deconstructable: true,
        enableable: true
      },
      GasCargoBaySmall: {
        tag: "GasCargoBaySmall",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      HEPEngine: {
        tag: "HEPEngine",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      },
      HabitatModuleMedium: {
        tag: "HabitatModuleMedium",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "LaunchButtonRocketModule",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 5,
        height: 4,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      },
      HabitatModuleSmall: {
        tag: "HabitatModuleSmall",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "NoseRocketModule",
          "LaunchButtonRocketModule",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      HydrogenEngineCluster: {
        tag: "HydrogenEngineCluster",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Steel"
        ],
        generator_wattage_rating: 600.0,
        width: 7,
        height: 5,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      },
      KeroseneEngineCluster: {
        tag: "KeroseneEngineCluster",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Steel"
        ],
        generator_wattage_rating: 480.0,
        width: 7,
        height: 5,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      KeroseneEngineClusterSmall: {
        tag: "KeroseneEngineClusterSmall",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        generator_wattage_rating: 240.0,
        width: 3,
        height: 4,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      LiquidCargoBayCluster: {
        tag: "LiquidCargoBayCluster",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 1000.0,
        deconstructable: true,
        enableable: true
      },
      LiquidCargoBaySmall: {
        tag: "LiquidCargoBaySmall",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      LiquidFuelTankCluster: {
        tag: "LiquidFuelTankCluster",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        deconstructable: true,
        enableable: true
      },
      NoseconeBasic: {
        tag: "NoseconeBasic",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "NoseRocketModule",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal",
          "Insulator"
        ],
        width: 5,
        height: 2,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 600.0,
        deconstructable: true,
        enableable: true
      },
      NoseconeHarvest: {
        tag: "NoseconeHarvest",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "NoseRocketModule",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 5,
        height: 4,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 600.0,
        deconstructable: true,
        enableable: true,
        work_time: 7.5
      },
      OrbitalCargoModule: {
        tag: "OrbitalCargoModule",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 3,
        height: 2,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        num_capsules: 30.0
      },
      OxidizerTankCluster: {
        tag: "OxidizerTankCluster",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        deconstructable: true,
        enableable: true
      },
      OxidizerTankLiquidCluster: {
        tag: "OxidizerTankLiquidCluster",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Steel"
        ],
        width: 5,
        height: 2,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        deconstructable: true,
        enableable: true
      },
      PioneerModule: {
        tag: "PioneerModule",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      ScannerModule: {
        tag: "ScannerModule",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Steel",
          "Polypropylene"
        ],
        width: 5,
        height: 5,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 1350.0,
        deconstructable: true,
        enableable: true,
        range_max: 0.0
      },
      ScoutModule: {
        tag: "ScoutModule",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SmallOxidizerTank: {
        tag: "SmallOxidizerTank",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 3,
        height: 2,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SolarPanelModule: {
        tag: "SolarPanelModule",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Glass"
        ],
        generator_wattage_rating: 60.0,
        width: 3,
        height: 1,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      CargoBayCluster: {
        tag: "CargoBayCluster",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 1000.0,
        deconstructable: true,
        enableable: true
      },
      SolidCargoBaySmall: {
        tag: "SolidCargoBaySmall",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SpecialCargoBayCluster: {
        tag: "SpecialCargoBayCluster",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "BuildingAttachPoint",
        material_category: [
          "RefinedMetal"
        ],
        width: 3,
        height: 1,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SteamEngineCluster: {
        tag: "SteamEngineCluster",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        generator_wattage_rating: 600.0,
        width: 7,
        height: 5,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SugarEngine: {
        tag: "SugarEngine",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermal_conductivity: 0.1,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        generator_wattage_rating: 60.0,
        width: 3,
        height: 3,
        invincible: true,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      }
    },
    conveyance: {
      AutoMiner: {
        tag: "AutoMiner",
        menu_order: 12.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFoundationRotatable",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrity_consummation: [
          120.0
        ],
        internal_heat: 2.0,
        width: 2,
        height: 2,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      ModularLaunchpadPortSolid: {
        tag: "ModularLaunchpadPortSolid",
        menu_order: 13.0,
        tags: [
          "IndustrialMachinery",
          "ModularLaunchpadPort",
          "ModularConduitPort",
          "NotRocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        not_in_rocket: true,
        electrity_consummation: [
          240.0
        ],
        external_heat: 0.25,
        internal_heat: 1.0,
        width: 2,
        height: 2,
        hp: 1000,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ],
        mode: "Load"
      },
      ModularLaunchpadPortSolidUnloader: {
        tag: "ModularLaunchpadPortSolidUnloader",
        menu_order: 14.0,
        tags: [
          "IndustrialMachinery",
          "ModularLaunchpadPort",
          "ModularConduitPort",
          "NotRocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        not_in_rocket: true,
        electrity_consummation: [
          240.0
        ],
        external_heat: 0.25,
        internal_heat: 1.0,
        width: 2,
        height: 3,
        hp: 1000,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ],
        mode: "Unload"
      },
      SolidConduitBridge: {
        tag: "SolidConduitBridge",
        menu_order: 2.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Conduit",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 10,
        mass: 400.0,
        deconstructable: true
      },
      SolidConduit: {
        tag: "SolidConduit",
        menu_order: 1.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        deconstructable: true
      },
      SolidConduitInbox: {
        tag: "SolidConduitInbox",
        menu_order: 3.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrity_consummation: [
          120.0
        ],
        internal_heat: 2.0,
        width: 1,
        height: 2,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SolidConduitOutbox: {
        tag: "SolidConduitOutbox",
        menu_order: 4.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        width: 1,
        height: 2,
        hp: 30,
        mass: 200.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true
      },
      SolidConduitDiseaseSensor: {
        tag: "SolidConduitDiseaseSensor",
        menu_order: 9.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      SolidConduitElementSensor: {
        tag: "SolidConduitElementSensor",
        menu_order: 10.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      SolidConduitTemperatureSensor: {
        tag: "SolidConduitTemperatureSensor",
        menu_order: 11.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      SolidFilter: {
        tag: "SolidFilter",
        menu_order: 5.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        electrity_consummation: [
          120.0
        ],
        width: 3,
        height: 1,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      SolidLimitValve: {
        tag: "SolidLimitValve",
        menu_order: 8.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        rotations: "R360",
        electrity_consummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      SolidLogicValve: {
        tag: "SolidLogicValve",
        menu_order: 7.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrity_consummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 100.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      SolidTransferArm: {
        tag: "SolidTransferArm",
        menu_order: 0.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrity_consummation: [
          120.0
        ],
        internal_heat: 2.0,
        width: 3,
        height: 1,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      SolidVent: {
        tag: "SolidVent",
        menu_order: 6.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 200.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    power: {
      Battery: {
        tag: "Battery",
        menu_order: 16.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        external_heat: 0.25,
        internal_heat: 1.0,
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      BatteryMedium: {
        tag: "BatteryMedium",
        menu_order: 17.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        external_heat: 0.25,
        internal_heat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      BatterySmart: {
        tag: "BatterySmart",
        menu_order: 18.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        internal_heat: 0.5,
        width: 2,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Generator: {
        tag: "Generator",
        menu_order: 1.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        generator_wattage_rating: 600.0,
        external_heat: 8.0,
        internal_heat: 1.0,
        width: 3,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      HydrogenGenerator: {
        tag: "HydrogenGenerator",
        menu_order: 3.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        generator_wattage_rating: 800.0,
        external_heat: 2.0,
        internal_heat: 2.0,
        width: 4,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      LogicPowerRelay: {
        tag: "LogicPowerRelay",
        menu_order: 22.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        deconstructable: true
      },
      ManualGenerator: {
        tag: "ManualGenerator",
        menu_order: 0.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        generator_wattage_rating: 400.0,
        internal_heat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      MethaneGenerator: {
        tag: "MethaneGenerator",
        menu_order: 4.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        generator_wattage_rating: 800.0,
        external_heat: 2.0,
        internal_heat: 8.0,
        width: 4,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      PetroleumGenerator: {
        tag: "PetroleumGenerator",
        menu_order: 5.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        generator_wattage_rating: 2000.0,
        external_heat: 4.0,
        internal_heat: 16.0,
        width: 3,
        height: 4,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      PowerTransformer: {
        tag: "PowerTransformer",
        menu_order: 20.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        generator_wattage_rating: 4000.0,
        internal_heat: 1.0,
        width: 3,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      PowerTransformerSmall: {
        tag: "PowerTransformerSmall",
        menu_order: 19.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        rotations: "FlipH",
        generator_wattage_rating: 1000.0,
        internal_heat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SolarPanel: {
        tag: "SolarPanel",
        menu_order: 7.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Glass"
        ],
        generator_wattage_rating: 380.0,
        width: 7,
        height: 3,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      SteamTurbine2: {
        tag: "SteamTurbine2",
        menu_order: 6.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        rotations: "FlipH",
        generator_wattage_rating: 850.0,
        internal_heat: 4.0,
        width: 5,
        height: 3,
        hp: 30,
        high_temp_warning: 1273.15,
        high_temp_fatal: 533.15,
        mass: 1000.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Switch: {
        tag: "Switch",
        menu_order: 21.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        deconstructable: true
      },
      WireBridge: {
        tag: "WireBridge",
        menu_order: 9.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "WireBridge",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      WireBridgeHighWattage: {
        tag: "WireBridgeHighWattage",
        menu_order: 11.0,
        tags: [
          "WireBridges"
        ],
        thermal_conductivity: 1.0,
        location_rule: "HighWattBridgeTile",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 100,
        mass: 200.0,
        decor: -25.0,
        decor_radius: 6.0,
        deconstructable: true
      },
      Wire: {
        tag: "Wire",
        menu_order: 8.0,
        tags: [],
        thermal_conductivity: 0.05,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      HighWattageWire: {
        tag: "HighWattageWire",
        menu_order: 10.0,
        tags: [],
        thermal_conductivity: 0.05,
        location_rule: "NotInTiles",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -25.0,
        decor_radius: 6.0,
        deconstructable: true
      },
      WireRefinedBridge: {
        tag: "WireRefinedBridge",
        menu_order: 13.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "WireBridge",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      WireRefinedBridgeHighWattage: {
        tag: "WireRefinedBridgeHighWattage",
        menu_order: 15.0,
        tags: [
          "WireBridges"
        ],
        thermal_conductivity: 1.0,
        location_rule: "HighWattBridgeTile",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: -25.0,
        decor_radius: 6.0,
        deconstructable: true
      },
      WireRefined: {
        tag: "WireRefined",
        menu_order: 12.0,
        tags: [],
        thermal_conductivity: 0.05,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        deconstructable: true
      },
      WireRefinedHighWattage: {
        tag: "WireRefinedHighWattage",
        menu_order: 14.0,
        tags: [],
        thermal_conductivity: 0.05,
        location_rule: "NotInTiles",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -20.0,
        decor_radius: 4.0,
        deconstructable: true
      },
      WoodGasGenerator: {
        tag: "WoodGasGenerator",
        menu_order: 2.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        generator_wattage_rating: 300.0,
        external_heat: 8.0,
        internal_heat: 1.0,
        width: 2,
        height: 2,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      }
    },
    plumbing: {
      BottleEmptier: {
        tag: "BottleEmptier",
        menu_order: 5.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LiquidConduitDiseaseSensor: {
        tag: "LiquidConduitDiseaseSensor",
        menu_order: 18.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LiquidConduitElementSensor: {
        tag: "LiquidConduitElementSensor",
        menu_order: 17.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LiquidConduitTemperatureSensor: {
        tag: "LiquidConduitTemperatureSensor",
        menu_order: 19.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      ContactConductivePipeBridge: {
        tag: "ContactConductivePipeBridge",
        menu_order: 22.0,
        tags: [],
        thermal_conductivity: 2.0,
        location_rule: "NoLiquidConduitAtOrigin",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 30,
        mass: 100.0,
        deconstructable: true,
        enableable: true
      },
      FlushToilet: {
        tag: "FlushToilet",
        menu_order: 1.0,
        tags: [
          "ToiletType",
          "FlushToiletType"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        rotations: "FlipH",
        external_heat: 0.25,
        width: 2,
        height: 3,
        hp: 30,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      InsulatedLiquidConduit: {
        tag: "InsulatedLiquidConduit",
        menu_order: 7.0,
        tags: [
          "Pipes"
        ],
        thermal_conductivity: 0.03125,
        location_rule: "Anywhere",
        material_category: [
          "Plumbable"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 400.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LiquidConduitBridge: {
        tag: "LiquidConduitBridge",
        menu_order: 9.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Conduit",
        material_category: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 10,
        mass: 100.0,
        deconstructable: true
      },
      LiquidConduit: {
        tag: "LiquidConduit",
        menu_order: 6.0,
        tags: [
          "Pipes"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Plumbable"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        deconstructable: true
      },
      LiquidConduitRadiant: {
        tag: "LiquidConduitRadiant",
        menu_order: 8.0,
        tags: [
          "Pipes"
        ],
        thermal_conductivity: 2.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 50.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LiquidFilter: {
        tag: "LiquidFilter",
        menu_order: 13.0,
        tags: [
          "IndustrialMachinery",
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        electrity_consummation: [
          120.0
        ],
        internal_heat: 4.0,
        width: 3,
        height: 1,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LiquidLimitValve: {
        tag: "LiquidLimitValve",
        menu_order: 16.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        rotations: "R360",
        electrity_consummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 75.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LiquidLogicValve: {
        tag: "LiquidLogicValve",
        menu_order: 15.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrity_consummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LiquidMiniPump: {
        tag: "LiquidMiniPump",
        menu_order: 11.0,
        tags: [
          "IndustrialMachinery",
          "CorrosionProof",
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Plastic"
        ],
        rotations: "R360",
        electrity_consummation: [
          60.0
        ],
        internal_heat: 0.5,
        width: 1,
        height: 2,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LiquidPump: {
        tag: "LiquidPump",
        menu_order: 10.0,
        tags: [
          "IndustrialMachinery",
          "CorrosionProof",
          "OverlayBackLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          240.0
        ],
        internal_heat: 2.0,
        width: 2,
        height: 2,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LiquidPumpingStation: {
        tag: "LiquidPumpingStation",
        menu_order: 4.0,
        tags: [
          "CorrosionProof"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "BuildableRaw"
        ],
        width: 2,
        height: 4,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true
      },
      LiquidValve: {
        tag: "LiquidValve",
        menu_order: 14.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LiquidVent: {
        tag: "LiquidVent",
        menu_order: 12.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      ModularLaunchpadPortLiquid: {
        tag: "ModularLaunchpadPortLiquid",
        menu_order: 20.0,
        tags: [
          "IndustrialMachinery",
          "ModularLaunchpadPort",
          "ModularConduitPort",
          "NotRocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        not_in_rocket: true,
        electrity_consummation: [
          240.0
        ],
        external_heat: 0.25,
        internal_heat: 1.0,
        width: 2,
        height: 2,
        hp: 1000,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ],
        mode: "Load"
      },
      ModularLaunchpadPortLiquidUnloader: {
        tag: "ModularLaunchpadPortLiquidUnloader",
        menu_order: 21.0,
        tags: [
          "IndustrialMachinery",
          "ModularLaunchpadPort",
          "ModularConduitPort",
          "NotRocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        not_in_rocket: true,
        electrity_consummation: [
          240.0
        ],
        external_heat: 0.25,
        internal_heat: 1.0,
        width: 2,
        height: 3,
        hp: 1000,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ],
        mode: "Unload"
      },
      Outhouse: {
        tag: "Outhouse",
        menu_order: 0.0,
        tags: [
          "ToiletType"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        external_heat: 0.25,
        width: 2,
        height: 3,
        hp: 30,
        mass: 200.0,
        flood_threshold: 0.35,
        decor: -20.0,
        decor_radius: 5.0,
        deconstructable: true,
        enableable: true
      },
      Shower: {
        tag: "Shower",
        menu_order: 3.0,
        tags: [
          "WashStation",
          "AdvancedWashStation"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        external_heat: 0.25,
        width: 2,
        height: 4,
        hp: 30,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      WallToilet: {
        tag: "WallToilet",
        menu_order: 2.0,
        tags: [
          "ToiletType",
          "FlushToiletType"
        ],
        thermal_conductivity: 1.0,
        location_rule: "WallFloor",
        material_category: [
          "Plastic"
        ],
        rotations: "FlipH",
        external_heat: 0.25,
        width: 1,
        height: 3,
        hp: 30,
        mass: 100.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    hvac: {
      BottleEmptierGas: {
        tag: "BottleEmptierGas",
        menu_order: 13.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 30,
        mass: 100.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      GasConduitDiseaseSensor: {
        tag: "GasConduitDiseaseSensor",
        menu_order: 17.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      GasConduitElementSensor: {
        tag: "GasConduitElementSensor",
        menu_order: 16.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      GasConduitTemperatureSensor: {
        tag: "GasConduitTemperatureSensor",
        menu_order: 18.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      GasBottler: {
        tag: "GasBottler",
        menu_order: 12.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 3,
        height: 2,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GasConduitBridge: {
        tag: "GasConduitBridge",
        menu_order: 3.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Conduit",
        material_category: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 10,
        mass: 50.0,
        deconstructable: true
      },
      GasConduit: {
        tag: "GasConduit",
        menu_order: 0.0,
        tags: [
          "Vents"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        deconstructable: true
      },
      GasConduitRadiant: {
        tag: "GasConduitRadiant",
        menu_order: 2.0,
        tags: [
          "Vents"
        ],
        thermal_conductivity: 2.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      GasFilter: {
        tag: "GasFilter",
        menu_order: 8.0,
        tags: [
          "IndustrialMachinery",
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        electrity_consummation: [
          120.0
        ],
        width: 3,
        height: 1,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      GasLimitValve: {
        tag: "GasLimitValve",
        menu_order: 11.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        rotations: "R360",
        electrity_consummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 75.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      GasLogicValve: {
        tag: "GasLogicValve",
        menu_order: 10.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrity_consummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      GasMiniPump: {
        tag: "GasMiniPump",
        menu_order: 5.0,
        tags: [
          "IndustrialMachinery",
          "OverlayBackLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Plastic"
        ],
        rotations: "R360",
        electrity_consummation: [
          60.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GasPump: {
        tag: "GasPump",
        menu_order: 4.0,
        tags: [
          "IndustrialMachinery",
          "OverlayBackLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          240.0
        ],
        width: 2,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GasValve: {
        tag: "GasValve",
        menu_order: 9.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      GasVent: {
        tag: "GasVent",
        menu_order: 6.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 50.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GasVentHighPressure: {
        tag: "GasVentHighPressure",
        menu_order: 7.0,
        tags: [
          "IndustrialMachinery",
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 250.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      InsulatedGasConduit: {
        tag: "InsulatedGasConduit",
        menu_order: 1.0,
        tags: [
          "Vents"
        ],
        thermal_conductivity: 0.03125,
        location_rule: "Anywhere",
        material_category: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 400.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      ModularLaunchpadPortGas: {
        tag: "ModularLaunchpadPortGas",
        menu_order: 14.0,
        tags: [
          "IndustrialMachinery",
          "ModularLaunchpadPort",
          "ModularConduitPort",
          "NotRocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        not_in_rocket: true,
        electrity_consummation: [
          240.0
        ],
        external_heat: 0.25,
        internal_heat: 1.0,
        width: 2,
        height: 2,
        hp: 1000,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ],
        mode: "Load"
      },
      ModularLaunchpadPortGasUnloader: {
        tag: "ModularLaunchpadPortGasUnloader",
        menu_order: 15.0,
        tags: [
          "IndustrialMachinery",
          "ModularLaunchpadPort",
          "ModularConduitPort",
          "NotRocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        not_in_rocket: true,
        electrity_consummation: [
          240.0
        ],
        external_heat: 0.25,
        internal_heat: 1.0,
        width: 2,
        height: 3,
        hp: 1000,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ],
        mode: "Unload"
      }
    },
    base: {
      BunkerDoor: {
        tag: "BunkerDoor",
        menu_order: 18.0,
        tags: [
          "Bunker"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Steel"
        ],
        rotations: "R90",
        electrity_consummation: [
          120.0
        ],
        width: 4,
        height: 1,
        hp: 1000,
        high_temp_warning: 1273.15,
        high_temp_fatal: 533.15,
        mass: 500.0,
        flood_threshold: 0.35,
        deconstructable: true
      },
      BunkerTile: {
        tag: "BunkerTile",
        menu_order: 11.0,
        tags: [
          "Bunker",
          "FloorTiles"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Steel"
        ],
        width: 1,
        height: 1,
        hp: 1000,
        mass: 100.0,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      CarpetTile: {
        tag: "CarpetTile",
        menu_order: 12.0,
        tags: [
          "FloorTiles",
          "Carpeted"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "BuildableRaw",
          "BuildingFiber"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 202.0,
        decor: 20.0,
        decor_radius: 4.0,
        deconstructable: true
      },
      Door: {
        tag: "Door",
        menu_order: 15.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Metal"
        ],
        rotations: "R90",
        width: 1,
        height: 2,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        deconstructable: true
      },
      ExobaseHeadquarters: {
        tag: "ExobaseHeadquarters",
        menu_order: 14.0,
        tags: [
          "Telepad",
          "LightSource",
          "Experimental"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        width: 3,
        height: 3,
        hp: 250,
        mass: 50.0,
        decor: 30.0,
        decor_radius: 6.0,
        deconstructable: true,
        enableable: true
      },
      ExteriorWall: {
        tag: "ExteriorWall",
        menu_order: 13.0,
        tags: [
          "Backwall"
        ],
        thermal_conductivity: 1.0,
        location_rule: "NotInTiles",
        material_category: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 30,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 0.0,
        deconstructable: true
      },
      FirePole: {
        tag: "FirePole",
        menu_order: 1.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      GasPermeableMembrane: {
        tag: "GasPermeableMembrane",
        menu_order: 4.0,
        tags: [
          "FloorTiles"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      GasReservoir: {
        tag: "GasReservoir",
        menu_order: 22.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 5,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GlassTile: {
        tag: "GlassTile",
        menu_order: 9.0,
        tags: [
          "Window",
          "FloorTiles"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Transparent"
        ],
        width: 1,
        height: 1,
        hp: 100,
        transparent: true,
        mass: 100.0,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      InsulationTile: {
        tag: "InsulationTile",
        menu_order: 6.0,
        tags: [
          "FloorTiles"
        ],
        thermal_conductivity: 0.01,
        location_rule: "Tile",
        material_category: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 400.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      Ladder: {
        tag: "Ladder",
        menu_order: 0.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LadderFast: {
        tag: "LadderFast",
        menu_order: 2.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 50.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LiquidReservoir: {
        tag: "LiquidReservoir",
        menu_order: 21.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      ManualPressureDoor: {
        tag: "ManualPressureDoor",
        menu_order: 16.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Metal"
        ],
        rotations: "R90",
        width: 1,
        height: 2,
        hp: 30,
        mass: 200.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true
      },
      MeshTile: {
        tag: "MeshTile",
        menu_order: 5.0,
        tags: [
          "FloorTiles"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      MetalTile: {
        tag: "MetalTile",
        menu_order: 8.0,
        tags: [
          "FloorTiles"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: 15.0,
        decor_radius: 3.0,
        deconstructable: true
      },
      ObjectDispenser: {
        tag: "ObjectDispenser",
        menu_order: 23.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        rotations: "FlipH",
        electrity_consummation: [
          60.0
        ],
        external_heat: 0.125,
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      PlasticTile: {
        tag: "PlasticTile",
        menu_order: 7.0,
        tags: [
          "FloorTiles"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      PressureDoor: {
        tag: "PressureDoor",
        menu_order: 17.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Metal"
        ],
        rotations: "R90",
        electrity_consummation: [
          120.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true
      },
      StorageLocker: {
        tag: "StorageLocker",
        menu_order: 19.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      StorageLockerSmart: {
        tag: "StorageLockerSmart",
        menu_order: 20.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          60.0
        ],
        external_heat: 0.125,
        width: 1,
        height: 2,
        hp: 30,
        mass: 200.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      StorageTile: {
        tag: "StorageTile",
        menu_order: 10.0,
        tags: [
          "FloorTiles"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "RefinedMetal",
          "Glass"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 200.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        storages: [
          {
            Item1: "external",
            Item2: [],
            Item3: 1000.0
          }
        ]
      },
      Tile: {
        tag: "Tile",
        menu_order: 3.0,
        tags: [
          "FloorTiles"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 200.0,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      TravelTube: {
        tag: "TravelTube",
        menu_order: 24.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "NotInTiles",
        material_category: [
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      TravelTubeEntrance: {
        tag: "TravelTubeEntrance",
        menu_order: 25.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          960.0
        ],
        width: 3,
        height: 2,
        hp: 100,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      TravelTubeWallBridge: {
        tag: "TravelTubeWallBridge",
        menu_order: 26.0,
        tags: [
          "TravelTubeBridges"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Plastic"
        ],
        rotations: "R90",
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        deconstructable: true
      }
    },
    automation: {
      Checkpoint: {
        tag: "Checkpoint",
        menu_order: 27.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        electrity_consummation: [
          10.0
        ],
        internal_heat: 0.5,
        width: 1,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      CometDetector: {
        tag: "CometDetector",
        menu_order: 28.0,
        tags: [
          "IndustrialMachinery",
          "OverlayBackLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          120.0
        ],
        width: 2,
        height: 4,
        hp: 30,
        mass: 25.0,
        flood_threshold: 0.35,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      FloorSwitch: {
        tag: "FloorSwitch",
        menu_order: 26.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 50.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicAlarm: {
        tag: "LogicAlarm",
        menu_order: 20.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicCounter: {
        tag: "LogicCounter",
        menu_order: 19.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "FlipV",
        width: 1,
        height: 3,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicCritterCountSensor: {
        tag: "LogicCritterCountSensor",
        menu_order: 16.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicDiseaseSensor: {
        tag: "LogicDiseaseSensor",
        menu_order: 13.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicDuplicantSensor: {
        tag: "LogicDuplicantSensor",
        menu_order: 5.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFoundationRotatable",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicElementSensorGas: {
        tag: "LogicElementSensorGas",
        menu_order: 14.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        flood_threshold: 0.35,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicElementSensorLiquid: {
        tag: "LogicElementSensorLiquid",
        menu_order: 15.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicGateAND: {
        tag: "LogicGateAND",
        menu_order: 30.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermal_conductivity: 0.05,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 2,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicGateOR: {
        tag: "LogicGateOR",
        menu_order: 31.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermal_conductivity: 0.05,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 2,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicGateXOR: {
        tag: "LogicGateXOR",
        menu_order: 34.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermal_conductivity: 0.05,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 2,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicGateNOT: {
        tag: "LogicGateNOT",
        menu_order: 29.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermal_conductivity: 0.05,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicGateBUFFER: {
        tag: "LogicGateBUFFER",
        menu_order: 32.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermal_conductivity: 0.05,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicGateFILTER: {
        tag: "LogicGateFILTER",
        menu_order: 33.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermal_conductivity: 0.05,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicGateMultiplexer: {
        tag: "LogicGateMultiplexer",
        menu_order: 36.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermal_conductivity: 0.05,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 4,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicGateDemultiplexer: {
        tag: "LogicGateDemultiplexer",
        menu_order: 37.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermal_conductivity: 0.05,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 4,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicHEPSensor: {
        tag: "LogicHEPSensor",
        menu_order: 18.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicHammer: {
        tag: "LogicHammer",
        menu_order: 21.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrity_consummation: [
          60.0
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicInterasteroidReceiver: {
        tag: "LogicInterasteroidReceiver",
        menu_order: 23.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 100.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicInterasteroidSender: {
        tag: "LogicInterasteroidSender",
        menu_order: 22.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 100.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicLightSensor: {
        tag: "LogicLightSensor",
        menu_order: 9.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal",
          "Transparent"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 50.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicMemory: {
        tag: "LogicMemory",
        menu_order: 35.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 2,
        hp: 10,
        mass: 25.0,
        deconstructable: true
      },
      LogicPressureSensorGas: {
        tag: "LogicPressureSensorGas",
        menu_order: 6.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicPressureSensorLiquid: {
        tag: "LogicPressureSensorLiquid",
        menu_order: 7.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicRadiationSensor: {
        tag: "LogicRadiationSensor",
        menu_order: 17.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicRibbonBridge: {
        tag: "LogicRibbonBridge",
        menu_order: 3.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "LogicBridge",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicRibbon: {
        tag: "LogicRibbon",
        menu_order: 2.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicRibbonReader: {
        tag: "LogicRibbonReader",
        menu_order: 24.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicRibbonWriter: {
        tag: "LogicRibbonWriter",
        menu_order: 25.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicSwitch: {
        tag: "LogicSwitch",
        menu_order: 4.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        deconstructable: true
      },
      LogicTemperatureSensor: {
        tag: "LogicTemperatureSensor",
        menu_order: 8.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicTimeOfDaySensor: {
        tag: "LogicTimeOfDaySensor",
        menu_order: 11.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicTimerSensor: {
        tag: "LogicTimerSensor",
        menu_order: 12.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicWattageSensor: {
        tag: "LogicWattageSensor",
        menu_order: 10.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicWireBridge: {
        tag: "LogicWireBridge",
        menu_order: 1.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "LogicBridge",
        material_category: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 30,
        mass: 5.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      LogicWire: {
        tag: "LogicWire",
        menu_order: 0.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 5.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      }
    },
    rocketry: {
      ClusterTelescope: {
        tag: "ClusterTelescope",
        menu_order: 0.0,
        tags: [
          "ScienceBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          120.0
        ],
        external_heat: 0.125,
        width: 3,
        height: 3,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true,
        provides_o2: false,
        range_max: 3.0
      },
      ClusterTelescopeEnclosed: {
        tag: "ClusterTelescopeEnclosed",
        menu_order: 1.0,
        tags: [
          "ScienceBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          120.0
        ],
        external_heat: 0.125,
        width: 4,
        height: 6,
        hp: 30,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true,
        provides_o2: true,
        range_max: 4.0
      },
      Gantry: {
        tag: "Gantry",
        menu_order: 4.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "Steel"
        ],
        rotations: "FlipH",
        electrity_consummation: [
          1200.0
        ],
        external_heat: 1.0,
        internal_heat: 1.0,
        width: 6,
        height: 2,
        hp: 30,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      LandingBeacon: {
        tag: "LandingBeacon",
        menu_order: 16.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          60.0
        ],
        width: 1,
        height: 3,
        invincible: true,
        high_temp_warning: 398.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LaunchPad: {
        tag: "LaunchPad",
        menu_order: 3.0,
        tags: [
          "IndustrialMachinery",
          "NotRocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        not_in_rocket: true,
        width: 7,
        height: 2,
        hp: 1000,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ]
      },
      LogicClusterLocationSensor: {
        tag: "LogicClusterLocationSensor",
        menu_order: 13.0,
        tags: [
          "RocketInteriorBuilding",
          "OverlayFrontLayer"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Anywhere",
        material_category: [
          "RefinedMetal"
        ],
        only_in_rocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true
      },
      MissileLauncher: {
        tag: "MissileLauncher",
        menu_order: 17.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          240.0
        ],
        external_heat: 0.5,
        internal_heat: 2.0,
        width: 3,
        height: 5,
        hp: 250,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        lauch_speed: 30.0,
        rotation_speed: 100.0,
        range_max: 32.0,
        range_min: 16.0,
        scanning_angle: 50.0,
        max_angle: 80.0
      },
      MissionControlCluster: {
        tag: "MissionControlCluster",
        menu_order: 2.0,
        tags: [
          "ScienceBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          960.0
        ],
        external_heat: 0.5,
        internal_heat: 2.0,
        width: 3,
        height: 3,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 400.0,
        flood_threshold: 0.35,
        decor: -5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true,
        scan_left: 1.0,
        scan_right: 1.0
      },
      ModularLaunchpadPortBridge: {
        tag: "ModularLaunchpadPortBridge",
        menu_order: 18.0,
        tags: [
          "ModularConduitPort",
          "NotRocketInteriorBuilding",
          "ModularLaunchpadPort"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        not_in_rocket: true,
        width: 1,
        height: 2,
        hp: 1000,
        high_temp_warning: 2273.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ]
      },
      RailGun: {
        tag: "RailGun",
        menu_order: 14.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          240.0
        ],
        external_heat: 0.5,
        internal_heat: 2.0,
        width: 5,
        height: 6,
        hp: 250,
        mass: 400.0,
        deconstructable: true,
        enableable: true
      },
      RailGunPayloadOpener: {
        tag: "RailGunPayloadOpener",
        menu_order: 15.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          120.0
        ],
        internal_heat: 0.5,
        width: 3,
        height: 3,
        hp: 250,
        mass: 100.0,
        deconstructable: true,
        enableable: true
      },
      RocketControlStation: {
        tag: "RocketControlStation",
        menu_order: 5.0,
        tags: [
          "RocketInteriorBuilding",
          "UniquePerWorld",
          "RocketInterior"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        only_in_rocket: true,
        width: 2,
        height: 2,
        hp: 30,
        mass: 100.0,
        decor: 15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorGasInput: {
        tag: "RocketInteriorGasInput",
        menu_order: 9.0,
        tags: [
          "RocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnRocketEnvelope",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        only_in_rocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorGasOutput: {
        tag: "RocketInteriorGasOutput",
        menu_order: 10.0,
        tags: [
          "RocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnRocketEnvelope",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        only_in_rocket: true,
        electrity_consummation: [
          60.0
        ],
        internal_heat: 0.5,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorLiquidInput: {
        tag: "RocketInteriorLiquidInput",
        menu_order: 7.0,
        tags: [
          "RocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnRocketEnvelope",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        only_in_rocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorLiquidOutput: {
        tag: "RocketInteriorLiquidOutput",
        menu_order: 8.0,
        tags: [
          "RocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnRocketEnvelope",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        only_in_rocket: true,
        electrity_consummation: [
          60.0
        ],
        internal_heat: 0.5,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorPowerPlug: {
        tag: "RocketInteriorPowerPlug",
        menu_order: 6.0,
        tags: [
          "RocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnRocketEnvelope",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        only_in_rocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorSolidInput: {
        tag: "RocketInteriorSolidInput",
        menu_order: 11.0,
        tags: [
          "RocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnRocketEnvelope",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        only_in_rocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorSolidOutput: {
        tag: "RocketInteriorSolidOutput",
        menu_order: 12.0,
        tags: [
          "RocketInteriorBuilding"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnRocketEnvelope",
        material_category: [
          "Metal"
        ],
        rotations: "R360",
        only_in_rocket: true,
        electrity_consummation: [
          60.0
        ],
        internal_heat: 0.5,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true
      }
    },
    gravitas: {
      FacilityBackWallWindow: {
        tag: "FacilityBackWallWindow",
        menu_order: 177013.0,
        tags: [
          "BuildableAny",
          "Transparent",
          "Solid",
          "ManufacturedMaterial",
          "Gravitas"
        ],
        thermal_conductivity: 1.0,
        location_rule: "NotInTiles",
        material_category: [
          "Glass"
        ],
        rotations: "R90",
        width: 1,
        height: 6,
        hp: 30,
        mass: 25.0,
        decor: 25.0,
        decor_radius: 4.0,
        primary_element: "Glass",
        deconstructable: true,
        enableable: true
      },
      FossilDig: {
        tag: "FossilDig",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "BuildableRaw"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Fossil"
        ],
        width: 5,
        height: 3,
        hp: 30,
        mass: 2000.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Fossil",
        deconstructable: false
      },
      GravitasContainer: {
        tag: "GravitasContainer",
        menu_order: 177013.0,
        tags: [
          "Gravitas"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 2,
        height: 2,
        invincible: true,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 200.0,
        deconstructable: false,
        enableable: true
      },
      GravitasCreatureManipulator: {
        tag: "GravitasCreatureManipulator",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        width: 3,
        height: 4,
        hp: 250,
        mass: 800.0,
        decor: 15.0,
        decor_radius: 3.0,
        primary_element: "Steel",
        deconstructable: false,
        enableable: true
      },
      GravitasDoor: {
        tag: "GravitasDoor",
        menu_order: 177013.0,
        tags: [
          "Gravitas"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Metal"
        ],
        rotations: "R90",
        width: 1,
        height: 3,
        invincible: true,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        deconstructable: true
      },
      GravitasLabLight: {
        tag: "GravitasLabLight",
        menu_order: 177013.0,
        tags: [
          "Gravitas"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnCeiling",
        material_category: [
          "Metal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 25.0,
        deconstructable: true,
        enableable: true
      },
      GravitasPedestal: {
        tag: "GravitasPedestal",
        menu_order: 177013.0,
        tags: [
          "Decoration"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        width: 1,
        height: 2,
        hp: 10,
        mass: 100.0,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: true,
        enableable: true
      },
      Headquarters: {
        tag: "Headquarters",
        menu_order: 177013.0,
        tags: [
          "Telepad",
          "LightSource",
          "Experimental"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 4,
        height: 4,
        hp: 250,
        mass: 2000.0,
        decor: 30.0,
        decor_radius: 6.0,
        deconstructable: true,
        enableable: true
      },
      MassiveHeatSink: {
        tag: "MassiveHeatSink",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "BuildableAny",
          "Solid",
          "RefinedMetal"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        external_heat: -16.0,
        internal_heat: -64.0,
        width: 4,
        height: 4,
        hp: 100,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: 15.0,
        decor_radius: 3.0,
        primary_element: "Iron",
        deconstructable: false,
        enableable: true
      },
      MegaBrainTank: {
        tag: "MegaBrainTank",
        menu_order: 177013.0,
        tags: [
          "IndustrialMachinery",
          "Gravitas",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 7,
        height: 7,
        invincible: true,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -20.0,
        decor_radius: 5.0,
        primary_element: "Steel",
        deconstructable: false,
        enableable: true
      },
      MorbRoverMaker: {
        tag: "MorbRoverMaker",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        width: 5,
        height: 4,
        hp: 250,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Steel",
        deconstructable: false,
        enableable: true
      },
      POIDoorInternal: {
        tag: "POIDoorInternal",
        menu_order: 177013.0,
        tags: [
          "Gravitas"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Metal"
        ],
        rotations: "R90",
        width: 1,
        height: 2,
        invincible: true,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 100.0,
        deconstructable: true
      },
      PropGravitasLabWall: {
        tag: "PropGravitasLabWall",
        menu_order: 177013.0,
        tags: [
          "BuildableAny",
          "Transparent",
          "Solid",
          "ManufacturedMaterial",
          "Gravitas"
        ],
        thermal_conductivity: 1.0,
        location_rule: "NotInTiles",
        material_category: [
          "BuildableRaw"
        ],
        rotations: "R90",
        width: 2,
        height: 3,
        hp: 30,
        mass: 25.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Glass",
        deconstructable: true,
        enableable: true
      },
      PropGravitasLabWindow: {
        tag: "PropGravitasLabWindow",
        menu_order: 177013.0,
        tags: [
          "BuildableAny",
          "Transparent",
          "Solid",
          "ManufacturedMaterial",
          "Gravitas"
        ],
        thermal_conductivity: 1.0,
        location_rule: "NotInTiles",
        material_category: [
          "Glass"
        ],
        width: 2,
        height: 3,
        hp: 30,
        mass: 5.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Glass",
        deconstructable: true,
        enableable: true
      },
      PropGravitasLabWindowHorizontal: {
        tag: "PropGravitasLabWindowHorizontal",
        menu_order: 177013.0,
        tags: [
          "BuildableAny",
          "Transparent",
          "Solid",
          "ManufacturedMaterial",
          "Gravitas"
        ],
        thermal_conductivity: 1.0,
        location_rule: "NotInTiles",
        material_category: [
          "Glass"
        ],
        width: 3,
        height: 2,
        hp: 30,
        mass: 5.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Glass",
        deconstructable: true,
        enableable: true
      },
      PropGravitasWall: {
        tag: "PropGravitasWall",
        menu_order: 177013.0,
        tags: [
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw",
          "Gravitas"
        ],
        thermal_conductivity: 1.0,
        location_rule: "NotInTiles",
        material_category: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Granite",
        deconstructable: true,
        enableable: true
      },
      RocketEnvelopeWindowTile: {
        tag: "RocketEnvelopeWindowTile",
        menu_order: 177013.0,
        tags: [
          "Window",
          "Bunker",
          "FloorTiles",
          "NoRocketRefund"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Transparent"
        ],
        width: 1,
        height: 1,
        invincible: true,
        transparent: true,
        mass: 100.0,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: false
      },
      RocketInteriorGasInputPort: {
        tag: "RocketInteriorGasInputPort",
        menu_order: 177013.0,
        tags: [
          "Bunker",
          "FloorTiles",
          "NoRocketRefund"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        mass: 100.0,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: false
      },
      RocketInteriorGasOutputPort: {
        tag: "RocketInteriorGasOutputPort",
        menu_order: 177013.0,
        tags: [
          "Bunker",
          "FloorTiles",
          "NoRocketRefund"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        mass: 100.0,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: false
      },
      RocketInteriorLiquidInputPort: {
        tag: "RocketInteriorLiquidInputPort",
        menu_order: 177013.0,
        tags: [
          "Bunker",
          "FloorTiles",
          "NoRocketRefund"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        mass: 100.0,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: false
      },
      RocketInteriorLiquidOutputPort: {
        tag: "RocketInteriorLiquidOutputPort",
        menu_order: 177013.0,
        tags: [
          "Bunker",
          "FloorTiles",
          "NoRocketRefund"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        mass: 100.0,
        decor: 5.0,
        decor_radius: 1.0,
        deconstructable: false
      },
      TeleportalPad: {
        tag: "TeleportalPad",
        menu_order: 177013.0,
        tags: [
          "Solid",
          "Special"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        electrity_consummation: [
          1600.0
        ],
        external_heat: 16.0,
        internal_heat: 64.0,
        width: 4,
        height: 4,
        hp: 250,
        mass: 2000.0,
        decor: 30.0,
        decor_radius: 6.0,
        primary_element: "Unobtanium",
        deconstructable: true,
        enableable: true
      },
      WarpConduitReceiver: {
        tag: "WarpConduitReceiver",
        menu_order: 177013.0,
        tags: [
          "Solid",
          "Special",
          "Gravitas"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 4,
        height: 3,
        invincible: true,
        mass: 100.0,
        primary_element: "Unobtanium",
        deconstructable: false,
        enableable: true
      },
      WarpConduitSender: {
        tag: "WarpConduitSender",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 4,
        height: 3,
        invincible: true,
        mass: 400.0,
        primary_element: "Unobtanium",
        deconstructable: false,
        enableable: true
      },
      ClustercraftInteriorDoor: {
        tag: "ClustercraftInteriorDoor",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "NotRoomAssignable",
          "Solid",
          "Special"
        ],
        mass: 400.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Unobtanium"
      },
      PropLadder: {
        tag: "PropLadder",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Antiseptic",
          "Plastic",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Polypropylene"
      },
      GeneShuffler: {
        tag: "GeneShuffler",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "NotRoomAssignable",
          "Solid",
          "Special"
        ],
        mass: 2000.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Unobtanium"
      },
      FossilRock: {
        tag: "FossilRock",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "BuildableRaw"
        ],
        mass: 4000.0,
        decor: 25.0,
        decor_radius: 5.0,
        primary_element: "Fossil"
      },
      FossilResin: {
        tag: "FossilResin",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "BuildableRaw"
        ],
        mass: 4000.0,
        decor: 25.0,
        decor_radius: 5.0,
        primary_element: "Fossil"
      },
      FossilIce: {
        tag: "FossilIce",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "BuildableRaw"
        ],
        mass: 4000.0,
        decor: 25.0,
        decor_radius: 5.0,
        primary_element: "Fossil"
      },
      PropGravitasLabTable: {
        tag: "PropGravitasLabTable",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropGravitasJar2: {
        tag: "PropGravitasJar2",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropGravitasJar1: {
        tag: "PropGravitasJar1",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropGravitasHandScanner: {
        tag: "PropGravitasHandScanner",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropGravitasFloorRobot: {
        tag: "PropGravitasFloorRobot",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropGravitasFirstAidKit: {
        tag: "PropGravitasFirstAidKit",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropGravitasDisplay4: {
        tag: "PropGravitasDisplay4",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropGravitasRobitcTable: {
        tag: "PropGravitasRobitcTable",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropGravitasDeskPodium: {
        tag: "PropGravitasDeskPodium",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropGravitasCreaturePoster: {
        tag: "PropGravitasCreaturePoster",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropGravitasCeilingRobot: {
        tag: "PropGravitasCeilingRobot",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropFacilityWallDegree: {
        tag: "PropFacilityWallDegree",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropFacilityTable: {
        tag: "PropFacilityTable",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Steel"
      },
      PropFacilityStatue: {
        tag: "PropFacilityStatue",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropFacilityPainting: {
        tag: "PropFacilityPainting",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropFacilityHangingLight: {
        tag: "PropFacilityHangingLight",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Steel"
      },
      PropGravitasDecorativeWindow: {
        tag: "PropGravitasDecorativeWindow",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "BuildableAny",
          "Transparent",
          "Solid",
          "ManufacturedMaterial"
        ],
        mass: 50.0,
        decor: 15.0,
        decor_radius: 3.0,
        primary_element: "Glass"
      },
      PropFacilityGlobeDroors: {
        tag: "PropFacilityGlobeDroors",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropGravitasShelf: {
        tag: "PropGravitasShelf",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropReceptionDesk: {
        tag: "PropReceptionDesk",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Steel"
      },
      WarpReceiver: {
        tag: "WarpReceiver",
        menu_order: 177013.0,
        tags: [
          "NotRoomAssignable",
          "WarpTech",
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 2000.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Unobtanium"
      },
      WarpPortal: {
        tag: "WarpPortal",
        menu_order: 177013.0,
        tags: [
          "NotRoomAssignable",
          "WarpTech",
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 2000.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Unobtanium"
      },
      VendingMachine: {
        tag: "VendingMachine",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 100.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Unobtanium"
      },
      SetLocker: {
        tag: "SetLocker",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 100.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Unobtanium"
      },
      PropGravitasSmallSeedLocker: {
        tag: "PropGravitasSmallSeedLocker",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Unobtanium"
      },
      CryoTank: {
        tag: "CryoTank",
        menu_order: 177013.0,
        tags: [
          "Solid",
          "Special"
        ],
        mass: 100.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Unobtanium"
      },
      PropLight: {
        tag: "PropLight",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Steel"
      },
      PropTallPlant: {
        tag: "PropTallPlant",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Antiseptic",
          "Plastic",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Polypropylene"
      },
      PropTable: {
        tag: "PropTable",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Unobtanium"
      },
      PropSurfaceSatellite3: {
        tag: "PropSurfaceSatellite3",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Unobtanium"
      },
      PropSurfaceSatellite2: {
        tag: "PropSurfaceSatellite2",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Unobtanium"
      },
      PropSurfaceSatellite1: {
        tag: "PropSurfaceSatellite1",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Unobtanium"
      },
      PropSkeleton: {
        tag: "PropSkeleton",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid"
        ],
        mass: 50.0,
        decor: 30.0,
        decor_radius: 6.0,
        primary_element: "Creature"
      },
      PropFacilityDisplay: {
        tag: "PropFacilityDisplay",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Steel"
      },
      PropFacilityDisplay2: {
        tag: "PropFacilityDisplay2",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Steel"
      },
      PropFacilityDisplay3: {
        tag: "PropFacilityDisplay3",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Steel"
      },
      PropFacilityDesk: {
        tag: "PropFacilityDesk",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropFacilityCouch: {
        tag: "PropFacilityCouch",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropFacilityChandelier: {
        tag: "PropFacilityChandelier",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Steel"
      },
      PropFacilityChairFlip: {
        tag: "PropFacilityChairFlip",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropFacilityChair: {
        tag: "PropFacilityChair",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Granite"
      },
      PropElevator: {
        tag: "PropElevator",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Steel"
      },
      PropDesk: {
        tag: "PropDesk",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Steel"
      },
      PropClock: {
        tag: "PropClock",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 50.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Unobtanium"
      }
    },
    hep: {
      HEPBattery: {
        tag: "HEPBattery",
        menu_order: 6.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        electrity_consummation: [
          120.0
        ],
        external_heat: 0.25,
        internal_heat: 1.0,
        width: 3,
        height: 3,
        hp: 30,
        mass: 400.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true,
        enableable: true,
        launch_rate: 1.0,
        radbolt_decay: 0.5,
        radbolt_storage: 100.0
      },
      HEPBridgeTile: {
        tag: "HEPBridgeTile",
        menu_order: 7.0,
        tags: [
          "HEPPassThrough"
        ],
        thermal_conductivity: 1.0,
        location_rule: "Tile",
        material_category: [
          "Plastic"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 100,
        mass: 200.0,
        decor: -25.0,
        decor_radius: 6.0,
        deconstructable: true
      },
      HighEnergyParticleRedirector: {
        tag: "HighEnergyParticleRedirector",
        menu_order: 5.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "NotInTiles",
        material_category: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      HighEnergyParticleSpawner: {
        tag: "HighEnergyParticleSpawner",
        menu_order: 4.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "NotInTiles",
        material_category: [
          "BuildableRaw"
        ],
        rotations: "R360",
        electrity_consummation: [
          480.0
        ],
        external_heat: 1.0,
        internal_heat: 4.0,
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      ManualHighEnergyParticleSpawner: {
        tag: "ManualHighEnergyParticleSpawner",
        menu_order: 1.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "BuildableRaw"
        ],
        width: 1,
        height: 3,
        hp: 30,
        mass: 800.0,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      },
      NuclearReactor: {
        tag: "NuclearReactor",
        menu_order: 2.0,
        tags: [
          "IndustrialMachinery",
          "CorrosionProof"
        ],
        thermal_conductivity: 0.1,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal"
        ],
        width: 5,
        height: 6,
        invincible: true,
        mass: 800.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: true
      },
      RadiationLight: {
        tag: "RadiationLight",
        menu_order: 0.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnWall",
        material_category: [
          "Metal"
        ],
        rotations: "FlipH",
        electrity_consummation: [
          60.0
        ],
        internal_heat: 0.5,
        width: 1,
        height: 1,
        hp: 10,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 50.0,
        flood_threshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      UraniumCentrifuge: {
        tag: "UraniumCentrifuge",
        menu_order: 3.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "RefinedMetal",
          "Plastic"
        ],
        electrity_consummation: [
          480.0
        ],
        external_heat: 0.125,
        internal_heat: 0.5,
        width: 3,
        height: 4,
        hp: 100,
        mass: 900.0,
        flood_threshold: 0.35,
        decor: -10.0,
        decor_radius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    quest: {
      LonelyMinionHouse: {
        tag: "LonelyMinionHouse",
        menu_order: 177013.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Steel"
        ],
        electrity_consummation: [
          60.0
        ],
        width: 4,
        height: 6,
        hp: 1000,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: -25.0,
        decor_radius: 6.0,
        deconstructable: false
      },
      LonelyMailBox: {
        tag: "LonelyMailBox",
        menu_order: 177013.0,
        tags: [],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 2,
        height: 2,
        hp: 10,
        mass: 100.0,
        decor: -15.0,
        decor_radius: 3.0,
        deconstructable: false,
        enableable: true
      },
      TemporalTearOpener: {
        tag: "TemporalTearOpener",
        menu_order: 177013.0,
        tags: [
          "Solid",
          "Special"
        ],
        thermal_conductivity: 1.0,
        location_rule: "OnFloor",
        material_category: [
          "Metal"
        ],
        width: 3,
        height: 4,
        invincible: true,
        high_temp_warning: 348.15,
        high_temp_fatal: 533.15,
        mass: 800.0,
        flood_threshold: 0.35,
        decor: 15.0,
        decor_radius: 3.0,
        primary_element: "Unobtanium",
        deconstructable: false,
        enableable: true
      },
      FossilBitsLarge: {
        tag: "FossilBitsLarge",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "BuildableRaw"
        ],
        mass: 2000.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Fossil"
      },
      FossilBitsSmall: {
        tag: "FossilBitsSmall",
        menu_order: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "BuildableRaw"
        ],
        mass: 1500.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Fossil"
      },
      SapTree: {
        tag: "SapTree",
        menu_order: 177013.0,
        tags: [
          "Decoration"
        ],
        low_temp_warning: 173.15,
        low_temp_fatal: 0.0,
        high_temp_warning: 373.15,
        high_temp_fatal: 1023.15,
        mass: 1.0,
        decor: 35.0,
        decor_radius: 6.0,
        primary_element: "Creature"
      }
    },
    lander: {
      ScoutLander: {
        tag: "ScoutLander",
        menu_order: 177013.0,
        tags: [],
        mass: 400.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        deconstructable: true
      },
      PioneerLander: {
        tag: "PioneerLander",
        menu_order: 177013.0,
        tags: [],
        mass: 400.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        deconstructable: true
      }
    }
  },
  element: {
    solid: {
      Algae: {
        tag: "Algae",
        menu_order: 1.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Life",
          "PedestalDisplayable",
          "Solid",
          "Organics"
        ],
        molar_mass: 4.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 0.2,
        radiation_absorption_factor: 0.65,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 200.0
      },
      BleachStone: {
        tag: "BleachStone",
        menu_order: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "FlyingCritterEdible",
          "Solid",
          "ConsumableOre"
        ],
        molar_mass: 43.0,
        hardness: 50.0,
        shc: 0.5,
        strength: 1.0,
        radiation_absorption_factor: 0.73,
        thermal_conductivity: 4.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 50.0
      },
      OxyRock: {
        tag: "OxyRock",
        menu_order: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "FlyingCritterEdible",
          "Oxidizer",
          "Solid",
          "ConsumableOre"
        ],
        molar_mass: 43.0,
        hardness: 10.0,
        shc: 1.0,
        strength: 1.0,
        radiation_absorption_factor: 0.82,
        thermal_conductivity: 4.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 200.0
      },
      SlimeMold: {
        tag: "SlimeMold",
        menu_order: 1.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "FlyingCritterEdible",
          "Solid",
          "Organics"
        ],
        molar_mass: 4.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 0.2,
        radiation_absorption_factor: 0.65,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 200.0
      },
      ToxicSand: {
        tag: "ToxicSand",
        menu_order: 1.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Compostable",
          "Solid",
          "Organics"
        ],
        molar_mass: 50.0,
        hardness: 10.0,
        shc: 0.83,
        strength: 0.25,
        min_horizontal_flow: 50.0,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1000.0
      },
      CrushedIce: {
        tag: "CrushedIce",
        menu_order: 8.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "IceOre",
          "Unstable",
          "Solid",
          "Liquifiable"
        ],
        molar_mass: 18.01528,
        hardness: 10.0,
        shc: 2.05,
        strength: 0.4,
        min_horizontal_flow: 50.0,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 2.18,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 10.0
      },
      Diamond: {
        tag: "Diamond",
        menu_order: 12.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "Transparent",
          "FlyingCritterEdible",
          "Solid",
          "Other"
        ],
        molar_mass: 12.0107,
        hardness: 250.0,
        shc: 0.516,
        strength: 2.5,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 80.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 700.0
      },
      Isoresin: {
        tag: "Isoresin",
        menu_order: 10.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableRaw",
          "Solid",
          "RareMaterials"
        ],
        molar_mass: 162.14,
        hardness: 10.0,
        shc: 1.3,
        strength: 0.4,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 0.17,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 30.0
      },
      Sucrose: {
        tag: "Sucrose",
        menu_order: 6.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "ConsumableOre"
        ],
        molar_mass: 342.3,
        hardness: 5.0,
        shc: 1.255,
        strength: 0.1,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 0.15,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 500.0
      },
      MilkFat: {
        tag: "MilkFat",
        menu_order: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "ConsumableOre"
        ],
        molar_mass: 42.08,
        hardness: 1.0,
        shc: 1.92,
        strength: 0.4,
        radiation_absorption_factor: 0.85,
        thermal_conductivity: 0.15,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 913.0
      },
      Niobium: {
        tag: "Niobium",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "RareMaterials"
        ],
        molar_mass: 92.9,
        hardness: 50.0,
        shc: 0.265,
        strength: 0.8,
        radiation_absorption_factor: 0.49,
        thermal_conductivity: 54.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 30.0
      },
      MilkIce: {
        tag: "MilkIce",
        menu_order: 8.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "IceOre",
          "BuildableAny",
          "Solid",
          "Liquifiable"
        ],
        molar_mass: 18.01528,
        hardness: 25.0,
        shc: 3.4,
        strength: 1.0,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 2.18,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1000.0
      },
      Cuprite: {
        tag: "Cuprite",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Ore",
          "BuildableAny",
          "Solid",
          "Metal"
        ],
        molar_mass: 143.09,
        hardness: 25.0,
        shc: 0.386,
        strength: 0.7,
        radiation_absorption_factor: 0.56,
        thermal_conductivity: 4.5,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 800.0
      },
      Copper: {
        tag: "Copper",
        menu_order: 4.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "Solid",
          "RefinedMetal"
        ],
        molar_mass: 63.546,
        hardness: 25.0,
        shc: 0.385,
        strength: 0.8,
        radiation_absorption_factor: 0.61,
        thermal_conductivity: 60.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 900.0
      },
      SuperInsulator: {
        tag: "SuperInsulator",
        menu_order: 7.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableRaw",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "Insulator",
          "Solid",
          "ManufacturedMaterial"
        ],
        molar_mass: 341.76,
        hardness: 200.0,
        shc: 5.57,
        strength: 2.0,
        radiation_absorption_factor: 0.6,
        thermal_conductivity: 1E-05,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 900.0
      },
      BrineIce: {
        tag: "BrineIce",
        menu_order: 8.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "IceOre",
          "BuildableAny",
          "Solid",
          "Liquifiable"
        ],
        molar_mass: 18.01528,
        hardness: 25.0,
        shc: 3.4,
        strength: 1.0,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 2.18,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1000.0
      },
      SolidViscoGel: {
        tag: "SolidViscoGel",
        menu_order: 9.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Plastic",
          "Solid",
          "ManufacturedMaterial"
        ],
        molar_mass: 95.0,
        hardness: 2.0,
        shc: 1.55,
        strength: 0.1,
        radiation_absorption_factor: 0.6,
        thermal_conductivity: 0.45,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 100.0
      },
      Ceramic: {
        tag: "Ceramic",
        menu_order: 7.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "Insulator",
          "Solid",
          "BuildableRaw"
        ],
        molar_mass: 25.0,
        hardness: 50.0,
        shc: 0.84,
        strength: 1.0,
        radiation_absorption_factor: 0.65,
        thermal_conductivity: 0.62,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1000.0
      },
      Cobaltite: {
        tag: "Cobaltite",
        menu_order: 5.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Ore",
          "BuildableAny",
          "Solid",
          "Metal"
        ],
        molar_mass: 165.9,
        hardness: 25.0,
        shc: 0.42,
        strength: 0.9,
        radiation_absorption_factor: 0.58,
        thermal_conductivity: 4.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1250.0
      },
      Fertilizer: {
        tag: "Fertilizer",
        menu_order: 3.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Oxidizer",
          "Solid",
          "Agriculture"
        ],
        molar_mass: 50.0,
        hardness: 2.0,
        shc: 0.83,
        strength: 0.2,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 200.0
      },
      SolidCrudeOil: {
        tag: "SolidCrudeOil",
        menu_order: 11.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "Liquifiable"
        ],
        molar_mass: 500.0,
        hardness: 2.0,
        shc: 1.69,
        strength: 0.1,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 870.0
      },
      Wolframite: {
        tag: "Wolframite",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Plumbable",
          "BuildableAny",
          "Solid",
          "Metal"
        ],
        molar_mass: 150.0,
        hardness: 150.0,
        shc: 0.134,
        strength: 0.8,
        radiation_absorption_factor: 0.65,
        thermal_conductivity: 15.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 600.0
      },
      Polypropylene: {
        tag: "Polypropylene",
        menu_order: 9.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Antiseptic",
          "Plastic",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        molar_mass: 42.08,
        hardness: 1.0,
        shc: 1.92,
        strength: 0.4,
        radiation_absorption_factor: 0.85,
        thermal_conductivity: 0.15,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 913.0
      },
      SolidNaphtha: {
        tag: "SolidNaphtha",
        menu_order: 11.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "Liquifiable"
        ],
        molar_mass: 102.2,
        hardness: 2.0,
        shc: 2.191,
        strength: 0.1,
        radiation_absorption_factor: 0.6,
        thermal_conductivity: 0.2,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 740.0
      },
      Tungsten: {
        tag: "Tungsten",
        menu_order: 4.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Plumbable",
          "BuildableAny",
          "Solid",
          "RefinedMetal"
        ],
        molar_mass: 183.84,
        hardness: 200.0,
        shc: 0.134,
        strength: 0.9,
        radiation_absorption_factor: 0.35,
        thermal_conductivity: 60.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 200.0
      },
      RefinedCarbon: {
        tag: "RefinedCarbon",
        menu_order: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Insulator",
          "Solid",
          "ConsumableOre"
        ],
        molar_mass: 12.0107,
        hardness: 2.0,
        shc: 1.74,
        strength: 0.8,
        radiation_absorption_factor: 0.84,
        thermal_conductivity: 3.1,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 600.0
      },
      Steel: {
        tag: "Steel",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        molar_mass: 54.97,
        hardness: 50.0,
        shc: 0.49,
        strength: 2.0,
        radiation_absorption_factor: 0.74,
        thermal_conductivity: 54.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 400.0
      },
      Phosphorite: {
        tag: "Phosphorite",
        menu_order: 3.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "FlyingCritterEdible",
          "Solid",
          "Agriculture"
        ],
        molar_mass: 95.61,
        hardness: 25.0,
        shc: 0.15,
        strength: 0.8,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 600.0
      },
      SolidHydrogen: {
        tag: "SolidHydrogen",
        menu_order: 11.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "Liquifiable"
        ],
        molar_mass: 44.1,
        hardness: 2.0,
        shc: 2.4,
        strength: 0.25,
        radiation_absorption_factor: 0.9,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 600.0
      },
      Lead: {
        tag: "Lead",
        menu_order: 4.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "Solid",
          "RefinedMetal"
        ],
        molar_mass: 55.845,
        hardness: 10.0,
        shc: 0.128,
        strength: 0.8,
        radiation_absorption_factor: 0.85,
        thermal_conductivity: 35.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 2000.0
      },
      Sulfur: {
        tag: "Sulfur",
        menu_order: 12.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "Other"
        ],
        molar_mass: 50.0,
        hardness: 5.0,
        shc: 0.7,
        strength: 0.1,
        radiation_absorption_factor: 0.74,
        thermal_conductivity: 0.2,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 500.0
      },
      Lime: {
        tag: "Lime",
        menu_order: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "ConsumableOre"
        ],
        molar_mass: 200.0,
        hardness: 50.0,
        shc: 0.834,
        strength: 0.2,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1000.0
      },
      SolidChlorine: {
        tag: "SolidChlorine",
        menu_order: 11.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "Liquifiable"
        ],
        molar_mass: 34.453,
        hardness: 25.0,
        shc: 0.48,
        strength: 0.5,
        radiation_absorption_factor: 0.73,
        thermal_conductivity: 0.75,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 600.0
      },
      SolidNuclearWaste: {
        tag: "SolidNuclearWaste",
        menu_order: 12.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "EmitsLight",
          "Solid",
          "Other"
        ],
        molar_mass: 196.966568,
        hardness: 0.0,
        shc: 7.44,
        radiation_absorption_factor: 0.3,
        thermal_conductivity: 6.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1840.0
      },
      Obsidian: {
        tag: "Obsidian",
        menu_order: 7.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        molar_mass: 50.0,
        hardness: 200.0,
        shc: 0.2,
        strength: 1.0,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1000.0
      },
      SolidPetroleum: {
        tag: "SolidPetroleum",
        menu_order: 11.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "Liquifiable"
        ],
        molar_mass: 82.2,
        hardness: 2.0,
        shc: 1.76,
        strength: 0.1,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 740.0
      },
      SolidSuperCoolant: {
        tag: "SolidSuperCoolant",
        menu_order: 9.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "ManufacturedMaterial"
        ],
        molar_mass: 250.0,
        hardness: 2.0,
        shc: 8.44,
        strength: 0.1,
        radiation_absorption_factor: 0.6,
        thermal_conductivity: 9.46,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 740.0
      },
      IgneousRock: {
        tag: "IgneousRock",
        menu_order: 7.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "Solid",
          "BuildableRaw"
        ],
        molar_mass: 50.0,
        hardness: 25.0,
        shc: 1.0,
        strength: 1.0,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1840.0
      },
      EnrichedUranium: {
        tag: "EnrichedUranium",
        menu_order: 9.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "ManufacturedMaterial"
        ],
        molar_mass: 120.0,
        hardness: 250.0,
        shc: 1.0,
        strength: 1.0,
        radiation_absorption_factor: 0.3,
        thermal_conductivity: 20.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 100.0
      },
      Gold: {
        tag: "Gold",
        menu_order: 4.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "Solid",
          "RefinedMetal"
        ],
        molar_mass: 196.966568,
        hardness: 2.0,
        shc: 0.129,
        strength: 0.7,
        radiation_absorption_factor: 0.35,
        thermal_conductivity: 60.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 870.0
      },
      Rust: {
        tag: "Rust",
        menu_order: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "ConsumableOre"
        ],
        molar_mass: 159.6882,
        hardness: 25.0,
        shc: 0.449,
        strength: 0.9,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 4.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 800.0
      },
      Corium: {
        tag: "Corium",
        menu_order: 12.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "Other"
        ],
        molar_mass: 196.966568,
        hardness: 251.0,
        shc: 7.44,
        strength: 0.45,
        radiation_absorption_factor: 0.3,
        thermal_conductivity: 6.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 200.0
      },
      Phosphorus: {
        tag: "Phosphorus",
        menu_order: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "FlyingCritterEdible",
          "Solid",
          "ConsumableOre"
        ],
        molar_mass: 30.9737625,
        hardness: 0.0,
        shc: 0.7697,
        strength: 0.85,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 0.236,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 200.0
      },
      Granite: {
        tag: "Granite",
        menu_order: 7.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw"
        ],
        molar_mass: 50.0,
        hardness: 80.0,
        shc: 0.79,
        strength: 1.5,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 3.39,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1840.0
      },
      SolidCarbonDioxide: {
        tag: "SolidCarbonDioxide",
        menu_order: 11.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "Liquifiable"
        ],
        molar_mass: 44.01,
        hardness: 2.0,
        shc: 0.846,
        strength: 0.6,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 1.46,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 600.0
      },
      Cobalt: {
        tag: "Cobalt",
        menu_order: 4.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "Solid",
          "RefinedMetal"
        ],
        molar_mass: 58.9,
        hardness: 75.0,
        shc: 0.42,
        strength: 0.9,
        radiation_absorption_factor: 0.63,
        thermal_conductivity: 100.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 800.0
      },
      UraniumOre: {
        tag: "UraniumOre",
        menu_order: 5.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "Metal",
          "Noncrushable",
          "Solid"
        ],
        molar_mass: 120.0,
        hardness: 150.0,
        shc: 1.0,
        strength: 1.0,
        radiation_absorption_factor: 0.3,
        thermal_conductivity: 20.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 100.0
      },
      AluminumOre: {
        tag: "AluminumOre",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Ore",
          "BuildableAny",
          "Solid",
          "Metal"
        ],
        molar_mass: 143.09,
        hardness: 25.0,
        shc: 0.91,
        strength: 0.7,
        radiation_absorption_factor: 0.72,
        thermal_conductivity: 20.5,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 500.0
      },
      SedimentaryRock: {
        tag: "SedimentaryRock",
        menu_order: 7.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "Solid",
          "BuildableRaw"
        ],
        molar_mass: 50.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 0.2,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1840.0
      },
      Fullerene: {
        tag: "Fullerene",
        menu_order: 10.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "RareMaterials"
        ],
        molar_mass: 12.0107,
        hardness: 250.0,
        shc: 0.95,
        strength: 1.0,
        radiation_absorption_factor: 0.6,
        thermal_conductivity: 50.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 30.0
      },
      GoldAmalgam: {
        tag: "GoldAmalgam",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Ore",
          "BuildableAny",
          "Solid",
          "Metal"
        ],
        molar_mass: 95.61,
        hardness: 2.0,
        shc: 0.15,
        strength: 0.8,
        radiation_absorption_factor: 0.3,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 800.0
      },
      Salt: {
        tag: "Salt",
        menu_order: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "ConsumableOre"
        ],
        molar_mass: 50.0,
        hardness: 5.0,
        shc: 0.7,
        strength: 0.1,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 0.444,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 500.0
      },
      Sand: {
        tag: "Sand",
        menu_order: 3.5,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Unstable",
          "Solid",
          "Filter"
        ],
        molar_mass: 50.0,
        hardness: 10.0,
        shc: 0.83,
        strength: 0.25,
        min_horizontal_flow: 50.0,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1000.0
      },
      Snow: {
        tag: "Snow",
        menu_order: 8.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "IceOre",
          "Unstable",
          "Solid",
          "Liquifiable"
        ],
        molar_mass: 18.01528,
        hardness: 10.0,
        shc: 2.05,
        strength: 0.3,
        min_horizontal_flow: 50.0,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 0.545,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 10.0
      },
      SandStone: {
        tag: "SandStone",
        menu_order: 7.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "Solid",
          "BuildableRaw"
        ],
        molar_mass: 50.0,
        hardness: 10.0,
        shc: 0.8,
        strength: 0.5,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 2.9,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1000.0
      },
      Glass: {
        tag: "Glass",
        menu_order: 9.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "Transparent",
          "Solid",
          "ManufacturedMaterial"
        ],
        molar_mass: 25.0,
        hardness: 10.0,
        shc: 0.84,
        strength: 1.0,
        radiation_absorption_factor: 0.65,
        thermal_conductivity: 1.11,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 800.0
      },
      Clay: {
        tag: "Clay",
        menu_order: 2.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "Solid",
          "Farmable"
        ],
        molar_mass: 200.0,
        hardness: 5.0,
        shc: 0.92,
        strength: 0.2,
        radiation_absorption_factor: 0.65,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1000.0
      },
      Ice: {
        tag: "Ice",
        menu_order: 8.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "IceOre",
          "BuildableAny",
          "Solid",
          "Liquifiable"
        ],
        molar_mass: 18.01528,
        hardness: 25.0,
        shc: 2.05,
        strength: 1.0,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 2.18,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1000.0
      },
      Graphite: {
        tag: "Graphite",
        menu_order: 7.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "BuildableRaw"
        ],
        molar_mass: 12.0107,
        hardness: 0.0,
        shc: 0.71,
        strength: 0.1,
        radiation_absorption_factor: 0.85,
        thermal_conductivity: 8.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 200.0
      },
      ToxicMud: {
        tag: "ToxicMud",
        menu_order: 1.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Unstable",
          "Solid",
          "Organics"
        ],
        molar_mass: 50.0,
        hardness: 10.0,
        shc: 0.83,
        strength: 0.25,
        min_horizontal_flow: 50.0,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1000.0
      },
      Mud: {
        tag: "Mud",
        menu_order: 1.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Unstable",
          "Solid",
          "Organics"
        ],
        molar_mass: 50.0,
        hardness: 10.0,
        shc: 0.83,
        strength: 0.25,
        min_horizontal_flow: 50.0,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1000.0
      },
      Carbon: {
        tag: "Carbon",
        menu_order: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Coal",
          "BuildableAny",
          "Solid",
          "ConsumableOre"
        ],
        molar_mass: 12.0107,
        hardness: 2.0,
        shc: 0.71,
        strength: 0.8,
        radiation_absorption_factor: 0.84,
        thermal_conductivity: 1.25,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 600.0
      },
      SolidOxygen: {
        tag: "SolidOxygen",
        menu_order: 11.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "Liquifiable"
        ],
        molar_mass: 50.0,
        hardness: 2.0,
        shc: 1.01,
        strength: 0.5,
        radiation_absorption_factor: 0.82,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 500.0
      },
      Creature: {
        tag: "Creature",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid"
        ],
        molar_mass: 25.0,
        hardness: 10.0,
        shc: 3.47,
        strength: 1.0,
        radiation_absorption_factor: 0.25,
        thermal_conductivity: 0.6,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 40.0
      },
      DepletedUranium: {
        tag: "DepletedUranium",
        menu_order: 4.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "RefinedMetal",
          "Solid"
        ],
        molar_mass: 120.0,
        hardness: 250.0,
        shc: 1.0,
        strength: 1.0,
        radiation_absorption_factor: 0.85,
        thermal_conductivity: 20.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 100.0
      },
      Katairite: {
        tag: "Katairite",
        menu_order: 12.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "Other"
        ],
        molar_mass: 341.76,
        hardness: 150.0,
        shc: 4.0,
        strength: 2.0,
        radiation_absorption_factor: 0.9,
        thermal_conductivity: 1E-05,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 500.0
      },
      SolidMethane: {
        tag: "SolidMethane",
        menu_order: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "ConsumableOre"
        ],
        molar_mass: 16.044,
        hardness: 2.0,
        shc: 2.191,
        strength: 1.0,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 0.03,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 500.0
      },
      HardPolypropylene: {
        tag: "HardPolypropylene",
        menu_order: 9.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Antiseptic",
          "Plastic",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        molar_mass: 100.016,
        hardness: 1.0,
        shc: 1.5,
        strength: 0.4,
        radiation_absorption_factor: 0.85,
        thermal_conductivity: 0.25,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 913.0
      },
      MaficRock: {
        tag: "MaficRock",
        menu_order: 7.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "Solid",
          "BuildableRaw"
        ],
        molar_mass: 50.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 1.0,
        radiation_absorption_factor: 0.65,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1840.0
      },
      Iron: {
        tag: "Iron",
        menu_order: 4.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "Solid",
          "RefinedMetal"
        ],
        molar_mass: 55.845,
        hardness: 50.0,
        shc: 0.449,
        strength: 1.0,
        radiation_absorption_factor: 0.66,
        thermal_conductivity: 55.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1000.0
      },
      Regolith: {
        tag: "Regolith",
        menu_order: 3.5,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Unstable",
          "Solid",
          "Filter"
        ],
        molar_mass: 50.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 0.5,
        min_horizontal_flow: 50.0,
        radiation_absorption_factor: 0.6,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1000.0
      },
      SolidResin: {
        tag: "SolidResin",
        menu_order: 1.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "Solid",
          "Organics"
        ],
        molar_mass: 52.5,
        hardness: 10.0,
        shc: 1.3,
        strength: 0.2,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 0.17,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 30.0
      },
      TempConductorSolid: {
        tag: "TempConductorSolid",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Metal",
          "RefinedMetal",
          "Plumbable",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        molar_mass: 174.35,
        hardness: 80.0,
        shc: 0.622,
        strength: 0.8,
        radiation_absorption_factor: 0.6,
        thermal_conductivity: 220.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 900.0
      },
      IronOre: {
        tag: "IronOre",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Ore",
          "BuildableAny",
          "Solid",
          "Metal"
        ],
        molar_mass: 159.6882,
        hardness: 25.0,
        shc: 0.449,
        strength: 0.9,
        radiation_absorption_factor: 0.61,
        thermal_conductivity: 4.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 800.0
      },
      Dirt: {
        tag: "Dirt",
        menu_order: 2.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "Solid",
          "Farmable"
        ],
        molar_mass: 50.0,
        hardness: 2.0,
        shc: 1.48,
        strength: 0.2,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 1840.0
      },
      DirtyIce: {
        tag: "DirtyIce",
        menu_order: 8.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "IceOre",
          "Mixture",
          "BuildableAny",
          "Solid",
          "Liquifiable"
        ],
        molar_mass: 25.0,
        hardness: 10.0,
        shc: 3.05,
        strength: 1.0,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 500.0
      },
      Fossil: {
        tag: "Fossil",
        menu_order: 7.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "BuildableRaw"
        ],
        molar_mass: 200.0,
        hardness: 50.0,
        shc: 0.91,
        strength: 0.2,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 500.0
      },
      Unobtanium: {
        tag: "Unobtanium",
        menu_order: 12.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "Special"
        ],
        molar_mass: 10000.0,
        hardness: 255.0,
        shc: 0.0,
        radiation_absorption_factor: 0.9,
        thermal_conductivity: 0.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 20000.0
      },
      SolidEthanol: {
        tag: "SolidEthanol",
        menu_order: 8.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "IceOre",
          "BuildableAny",
          "Solid",
          "Liquifiable"
        ],
        molar_mass: 46.07,
        hardness: 250.0,
        shc: 2.46,
        strength: 1.0,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 20.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 100.0
      },
      Aluminum: {
        tag: "Aluminum",
        menu_order: 4.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "Solid",
          "RefinedMetal"
        ],
        molar_mass: 55.845,
        hardness: 25.0,
        shc: 0.91,
        strength: 1.0,
        radiation_absorption_factor: 0.77,
        thermal_conductivity: 205.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        default_mass: 200.0
      }
    },
    liquid: {
      DirtyWater: {
        tag: "DirtyWater",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Mixture",
          "AnyWater",
          "Liquid"
        ],
        molar_mass: 20.0,
        shc: 4.179,
        max_compression: 1.01,
        viscosity: 125.0,
        min_horizontal_flow: 0.01,
        min_vertical_flow: 0.01,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 0.58,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.7,
        default_mass: 1000.0
      },
      NuclearWaste: {
        tag: "NuclearWaste",
        menu_order: 15.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Liquid"
        ],
        molar_mass: 196.966568,
        shc: 7.44,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 25.0,
        min_vertical_flow: 1.0,
        radiation_absorption_factor: 0.3,
        thermal_conductivity: 6.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 500.0
      },
      LiquidOxygen: {
        tag: "LiquidOxygen",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Oxidizer",
          "Liquid"
        ],
        molar_mass: 15.9994,
        shc: 1.01,
        max_compression: 1.01,
        viscosity: 200.0,
        min_horizontal_flow: 0.01,
        min_vertical_flow: 0.01,
        radiation_absorption_factor: 0.82,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 300.0
      },
      ViscoGel: {
        tag: "ViscoGel",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Liquid"
        ],
        molar_mass: 10.0,
        shc: 1.55,
        max_compression: 1.01,
        viscosity: 1.0,
        min_horizontal_flow: 10.0,
        min_vertical_flow: 10.0,
        radiation_absorption_factor: 0.6,
        thermal_conductivity: 0.45,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.1,
        default_mass: 100.0
      },
      MoltenAluminum: {
        tag: "MoltenAluminum",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Liquid"
        ],
        molar_mass: 55.845,
        shc: 0.91,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 30.0,
        min_vertical_flow: 3.0,
        radiation_absorption_factor: 0.77,
        thermal_conductivity: 20.5,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 1000.0
      },
      MoltenLead: {
        tag: "MoltenLead",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Liquid"
        ],
        molar_mass: 196.966568,
        shc: 0.128,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 25.0,
        min_vertical_flow: 1.0,
        radiation_absorption_factor: 0.85,
        thermal_conductivity: 11.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 3000.0
      },
      LiquidCarbonDioxide: {
        tag: "LiquidCarbonDioxide",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molar_mass: 44.01,
        shc: 0.846,
        max_compression: 1.01,
        viscosity: 125.0,
        min_horizontal_flow: 0.01,
        min_vertical_flow: 0.01,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 1.46,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 600.0
      },
      CrudeOil: {
        tag: "CrudeOil",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Liquid"
        ],
        molar_mass: 500.0,
        shc: 1.69,
        max_compression: 1.01,
        viscosity: 50.0,
        min_horizontal_flow: 0.1,
        min_vertical_flow: 0.1,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 870.0
      },
      MoltenGlass: {
        tag: "MoltenGlass",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Liquid"
        ],
        molar_mass: 50.0,
        shc: 0.2,
        max_compression: 1.01,
        viscosity: 60.0,
        min_horizontal_flow: 50.0,
        min_vertical_flow: 20.0,
        radiation_absorption_factor: 0.65,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.7,
        default_mass: 200.0
      },
      LiquidSulfur: {
        tag: "LiquidSulfur",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molar_mass: 32.0,
        shc: 0.7,
        max_compression: 1.01,
        viscosity: 50.0,
        min_horizontal_flow: 0.1,
        min_vertical_flow: 0.1,
        radiation_absorption_factor: 0.74,
        thermal_conductivity: 0.2,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.1,
        default_mass: 190.0
      },
      MoltenGold: {
        tag: "MoltenGold",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Liquid"
        ],
        molar_mass: 196.966568,
        shc: 0.1291,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 25.0,
        min_vertical_flow: 1.0,
        radiation_absorption_factor: 0.35,
        thermal_conductivity: 6.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 870.0
      },
      Magma: {
        tag: "Magma",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Liquid"
        ],
        molar_mass: 50.0,
        shc: 1.0,
        max_compression: 1.01,
        viscosity: 60.0,
        min_horizontal_flow: 50.0,
        min_vertical_flow: 20.0,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 1840.0
      },
      Chlorine: {
        tag: "Chlorine",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molar_mass: 34.453,
        shc: 0.48,
        max_compression: 1.01,
        viscosity: 180.0,
        min_horizontal_flow: 0.01,
        min_vertical_flow: 0.01,
        radiation_absorption_factor: 0.73,
        thermal_conductivity: 0.0081,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 600.0
      },
      LiquidHydrogen: {
        tag: "LiquidHydrogen",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molar_mass: 1.00794,
        shc: 2.4,
        max_compression: 1.01,
        viscosity: 180.0,
        min_horizontal_flow: 0.01,
        min_vertical_flow: 0.01,
        radiation_absorption_factor: 0.9,
        thermal_conductivity: 0.1,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 600.0
      },
      Resin: {
        tag: "Resin",
        menu_order: 15.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Liquid"
        ],
        molar_mass: 52.5,
        shc: 1.11,
        max_compression: 1.01,
        viscosity: 1.1,
        min_horizontal_flow: 1.1,
        min_vertical_flow: 0.01,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 0.15,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.8,
        default_mass: 920.0
      },
      MoltenTungsten: {
        tag: "MoltenTungsten",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "Liquid"
        ],
        molar_mass: 183.84,
        shc: 0.134,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 20.0,
        min_vertical_flow: 10.0,
        radiation_absorption_factor: 0.35,
        thermal_conductivity: 4.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.7,
        default_mass: 200.0
      },
      Petroleum: {
        tag: "Petroleum",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "CombustibleLiquid",
          "Liquid"
        ],
        molar_mass: 82.2,
        shc: 1.76,
        max_compression: 1.01,
        viscosity: 50.0,
        min_horizontal_flow: 0.1,
        min_vertical_flow: 0.1,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.8,
        default_mass: 740.0
      },
      MoltenSalt: {
        tag: "MoltenSalt",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molar_mass: 32.0,
        shc: 0.7,
        max_compression: 1.01,
        viscosity: 50.0,
        min_horizontal_flow: 0.1,
        min_vertical_flow: 0.1,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 0.444,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.1,
        default_mass: 190.0
      },
      MoltenCobalt: {
        tag: "MoltenCobalt",
        menu_order: 5.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Liquid"
        ],
        molar_mass: 58.9,
        shc: 0.42,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 30.0,
        min_vertical_flow: 3.0,
        radiation_absorption_factor: 0.63,
        thermal_conductivity: 4.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 1000.0
      },
      Brine: {
        tag: "Brine",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "AnyWater",
          "Liquid"
        ],
        molar_mass: 22.0,
        shc: 3.4,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 0.01,
        min_vertical_flow: 0.01,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 0.609,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.25,
        default_mass: 1200.0
      },
      SuperCoolant: {
        tag: "SuperCoolant",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Liquid"
        ],
        molar_mass: 250.0,
        shc: 8.44,
        max_compression: 1.01,
        viscosity: 150.0,
        min_horizontal_flow: 0.01,
        min_vertical_flow: 0.01,
        radiation_absorption_factor: 0.6,
        thermal_conductivity: 9.46,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.9,
        default_mass: 800.0
      },
      Ethanol: {
        tag: "Ethanol",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "CombustibleLiquid",
          "Liquid"
        ],
        molar_mass: 46.07,
        shc: 2.46,
        max_compression: 1.01,
        viscosity: 125.0,
        min_horizontal_flow: 0.01,
        min_vertical_flow: 0.01,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 0.171,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.25,
        default_mass: 1000.0
      },
      Milk: {
        tag: "Milk",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Liquid"
        ],
        molar_mass: 23.0,
        shc: 4.1,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 0.01,
        min_vertical_flow: 0.01,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 0.609,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.8,
        default_mass: 1100.0
      },
      LiquidMethane: {
        tag: "LiquidMethane",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molar_mass: 16.044,
        shc: 2.191,
        max_compression: 1.01,
        viscosity: 180.0,
        min_horizontal_flow: 0.01,
        min_vertical_flow: 0.01,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 0.03,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.6,
        default_mass: 600.0
      },
      MoltenIron: {
        tag: "MoltenIron",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Liquid"
        ],
        molar_mass: 55.845,
        shc: 0.449,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 30.0,
        min_vertical_flow: 3.0,
        radiation_absorption_factor: 0.66,
        thermal_conductivity: 4.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 1000.0
      },
      MoltenCarbon: {
        tag: "MoltenCarbon",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molar_mass: 12.0107,
        shc: 0.71,
        max_compression: 1.01,
        viscosity: 150.0,
        min_horizontal_flow: 0.01,
        min_vertical_flow: 0.01,
        radiation_absorption_factor: 0.84,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 600.0
      },
      Naphtha: {
        tag: "Naphtha",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Oil",
          "Liquid"
        ],
        molar_mass: 102.2,
        shc: 2.191,
        max_compression: 1.01,
        viscosity: 30.0,
        min_horizontal_flow: 10.0,
        min_vertical_flow: 10.0,
        radiation_absorption_factor: 0.6,
        thermal_conductivity: 0.2,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.8,
        default_mass: 740.0
      },
      MoltenSucrose: {
        tag: "MoltenSucrose",
        menu_order: 15.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molar_mass: 32.0,
        shc: 1.255,
        max_compression: 1.01,
        viscosity: 50.0,
        min_horizontal_flow: 0.1,
        min_vertical_flow: 0.1,
        radiation_absorption_factor: 0.7,
        thermal_conductivity: 0.15,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.1,
        default_mass: 190.0
      },
      LiquidPhosphorus: {
        tag: "LiquidPhosphorus",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Liquid"
        ],
        molar_mass: 30.9737625,
        shc: 0.7697,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 2.0,
        min_vertical_flow: 1.0,
        radiation_absorption_factor: 0.75,
        thermal_conductivity: 0.236,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 200.0
      },
      MoltenSteel: {
        tag: "MoltenSteel",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Liquid"
        ],
        molar_mass: 63.546,
        shc: 0.386,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 20.0,
        min_vertical_flow: 10.0,
        radiation_absorption_factor: 0.74,
        thermal_conductivity: 80.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 900.0
      },
      MoltenNiobium: {
        tag: "MoltenNiobium",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Liquid"
        ],
        molar_mass: 92.9,
        shc: 0.265,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 20.0,
        min_vertical_flow: 10.0,
        radiation_absorption_factor: 0.49,
        thermal_conductivity: 54.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 900.0
      },
      Water: {
        tag: "Water",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "AnyWater",
          "Liquid"
        ],
        molar_mass: 18.01528,
        shc: 4.179,
        max_compression: 1.01,
        viscosity: 125.0,
        min_horizontal_flow: 0.01,
        min_vertical_flow: 0.01,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 0.609,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.25,
        default_mass: 1000.0
      },
      SaltWater: {
        tag: "SaltWater",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "AnyWater",
          "Liquid"
        ],
        molar_mass: 21.0,
        shc: 4.1,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 0.01,
        min_vertical_flow: 0.01,
        radiation_absorption_factor: 0.8,
        thermal_conductivity: 0.609,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.25,
        default_mass: 1100.0
      },
      MoltenUranium: {
        tag: "MoltenUranium",
        menu_order: 5.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Liquid"
        ],
        molar_mass: 196.966568,
        shc: 1.69,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 25.0,
        min_vertical_flow: 1.0,
        radiation_absorption_factor: 0.3,
        thermal_conductivity: 2.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 3000.0
      },
      MoltenCopper: {
        tag: "MoltenCopper",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Liquid"
        ],
        molar_mass: 63.546,
        shc: 0.386,
        max_compression: 1.01,
        viscosity: 100.0,
        min_horizontal_flow: 20.0,
        min_vertical_flow: 2.0,
        radiation_absorption_factor: 0.61,
        thermal_conductivity: 12.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 1.0,
        default_mass: 900.0
      }
    },
    gas: {
      SulfurGas: {
        tag: "SulfurGas",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 32.0,
        shc: 0.7,
        flow: 0.1,
        radiation_absorption_factor: 0.07,
        thermal_conductivity: 0.2,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.1,
        default_mass: 1.0
      },
      SaltGas: {
        tag: "SaltGas",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 50.0,
        shc: 0.88,
        flow: 0.1,
        radiation_absorption_factor: 0.07,
        thermal_conductivity: 0.444,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.1,
        default_mass: 1.0
      },
      NiobiumGas: {
        tag: "NiobiumGas",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 92.9,
        shc: 0.265,
        flow: 0.1,
        radiation_absorption_factor: 0.05,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.5,
        default_mass: 1.0
      },
      Oxygen: {
        tag: "Oxygen",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Gas",
          "Breathable"
        ],
        molar_mass: 15.9994,
        shc: 1.005,
        flow: 0.12,
        radiation_absorption_factor: 0.08,
        thermal_conductivity: 0.024,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.0,
        default_mass: 1.0
      },
      CobaltGas: {
        tag: "CobaltGas",
        menu_order: 5.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 58.9,
        shc: 0.42,
        flow: 0.1,
        radiation_absorption_factor: 0.06,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.5,
        default_mass: 1.0
      },
      SteelGas: {
        tag: "SteelGas",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "Alloy",
          "RefinedMetal",
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 54.97,
        shc: 0.49,
        flow: 0.1,
        radiation_absorption_factor: 0.07,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.5,
        default_mass: 1.0
      },
      ChlorineGas: {
        tag: "ChlorineGas",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 34.453,
        shc: 0.48,
        flow: 0.1,
        radiation_absorption_factor: 0.07,
        thermal_conductivity: 0.0081,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.2,
        default_mass: 1.0
      },
      Hydrogen: {
        tag: "Hydrogen",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 1.00794,
        shc: 2.4,
        flow: 0.1,
        radiation_absorption_factor: 0.09,
        thermal_conductivity: 0.168,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.1,
        default_mass: 1.0
      },
      SourGas: {
        tag: "SourGas",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 19.044,
        shc: 1.898,
        flow: 0.1,
        radiation_absorption_factor: 0.05,
        thermal_conductivity: 0.018,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.25,
        default_mass: 1.0
      },
      Steam: {
        tag: "Steam",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 18.01528,
        shc: 4.179,
        flow: 0.1,
        radiation_absorption_factor: 0.08,
        thermal_conductivity: 0.184,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.1,
        default_mass: 1.0
      },
      Methane: {
        tag: "Methane",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "CombustibleGas",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 16.044,
        shc: 2.191,
        flow: 0.1,
        radiation_absorption_factor: 0.07,
        thermal_conductivity: 0.035,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.25,
        default_mass: 1.0
      },
      GoldGas: {
        tag: "GoldGas",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 196.966568,
        shc: 0.1291,
        flow: 0.1,
        radiation_absorption_factor: 0.03,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.5,
        default_mass: 1.0
      },
      EthanolGas: {
        tag: "EthanolGas",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 46.07,
        shc: 2.148,
        flow: 0.1,
        radiation_absorption_factor: 0.07,
        thermal_conductivity: 0.167,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.5,
        default_mass: 1.0
      },
      RockGas: {
        tag: "RockGas",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 50.0,
        shc: 1.0,
        flow: 0.1,
        radiation_absorption_factor: 0.07,
        thermal_conductivity: 0.1,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.5,
        default_mass: 1.0
      },
      CarbonGas: {
        tag: "CarbonGas",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 12.0107,
        shc: 0.71,
        flow: 0.1,
        radiation_absorption_factor: 0.08,
        thermal_conductivity: 1.7,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.3,
        default_mass: 1.0
      },
      SuperCoolantGas: {
        tag: "SuperCoolantGas",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 190.0,
        shc: 8.44,
        flow: 0.1,
        radiation_absorption_factor: 0.06,
        thermal_conductivity: 1.2,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.5,
        default_mass: 1.0
      },
      AluminumGas: {
        tag: "AluminumGas",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 63.546,
        shc: 0.91,
        flow: 0.1,
        radiation_absorption_factor: 0.07,
        thermal_conductivity: 2.5,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.5,
        default_mass: 1.0
      },
      TungstenGas: {
        tag: "TungstenGas",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 183.84,
        shc: 0.134,
        flow: 0.1,
        radiation_absorption_factor: 0.03,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.5,
        default_mass: 1.0
      },
      ContaminatedOxygen: {
        tag: "ContaminatedOxygen",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Gas",
          "Breathable"
        ],
        molar_mass: 15.9994,
        shc: 1.01,
        flow: 0.12,
        radiation_absorption_factor: 0.08,
        thermal_conductivity: 0.024,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.1,
        default_mass: 1.0
      },
      LeadGas: {
        tag: "LeadGas",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 196.966568,
        shc: 0.128,
        flow: 0.1,
        radiation_absorption_factor: 0.08,
        thermal_conductivity: 3.5,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.5,
        default_mass: 1.0
      },
      Fallout: {
        tag: "Fallout",
        menu_order: 15.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 92.9,
        shc: 0.265,
        flow: 0.1,
        radiation_absorption_factor: 0.03,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.5,
        default_mass: 1.0
      },
      IronGas: {
        tag: "IronGas",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 55.845,
        shc: 0.449,
        flow: 0.1,
        radiation_absorption_factor: 0.06,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.5,
        default_mass: 1.0
      },
      PhosphorusGas: {
        tag: "PhosphorusGas",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 30.9737625,
        shc: 0.7697,
        flow: 0.1,
        radiation_absorption_factor: 0.07,
        thermal_conductivity: 0.236,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.5,
        default_mass: 1.0
      },
      CarbonDioxide: {
        tag: "CarbonDioxide",
        menu_order: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 44.01,
        shc: 0.846,
        flow: 0.1,
        radiation_absorption_factor: 0.08,
        thermal_conductivity: 0.0146,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.1,
        default_mass: 1.0
      },
      CopperGas: {
        tag: "CopperGas",
        menu_order: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molar_mass: 63.546,
        shc: 0.386,
        flow: 0.1,
        radiation_absorption_factor: 0.06,
        thermal_conductivity: 1.0,
        decor: -10.0,
        decor_radius: 1.0,
        clearable: true,
        light_absorption: 0.5,
        default_mass: 1.0
      }
    },
    other: {
      HighEnergyParticle: {
        tag: "HighEnergyParticle",
        menu_order: 177013.0,
        tags: []
      }
    }
  },
  space: {
    comet: {
      RockComet: {
        tag: "RockComet",
        menu_order: 177013.0,
        tags: [
          "Unstable",
          "Solid",
          "Filter",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "Regolith"
      },
      IronComet: {
        tag: "IronComet",
        menu_order: 177013.0,
        tags: [
          "BuildableAny",
          "Solid",
          "RefinedMetal",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "Iron"
      },
      CopperCometConfig: {
        tag: "CopperCometConfig",
        menu_order: 177013.0,
        tags: [
          "Ore",
          "BuildableAny",
          "Solid",
          "Metal",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "Cuprite"
      },
      GoldComet: {
        tag: "GoldComet",
        menu_order: 177013.0,
        tags: [
          "Ore",
          "BuildableAny",
          "Solid",
          "Metal",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "GoldAmalgam"
      },
      FullereneComet: {
        tag: "FullereneComet",
        menu_order: 177013.0,
        tags: [
          "Solid",
          "RareMaterials",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "Fullerene"
      },
      BleachStoneComet: {
        tag: "BleachStoneComet",
        menu_order: 177013.0,
        tags: [
          "FlyingCritterEdible",
          "Solid",
          "ConsumableOre",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "BleachStone"
      },
      OxyliteComet: {
        tag: "OxyliteComet",
        menu_order: 177013.0,
        tags: [
          "FlyingCritterEdible",
          "Oxidizer",
          "Solid",
          "ConsumableOre",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "OxyRock"
      },
      PhosphoricComet: {
        tag: "PhosphoricComet",
        menu_order: 177013.0,
        tags: [
          "FlyingCritterEdible",
          "Solid",
          "Agriculture",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "Phosphorite"
      },
      AlgaeComet: {
        tag: "AlgaeComet",
        menu_order: 177013.0,
        tags: [
          "Solid",
          "Organics",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "Algae"
      },
      LightDustComet: {
        tag: "LightDustComet",
        menu_order: 177013.0,
        tags: [
          "Unstable",
          "Solid",
          "Filter",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "Regolith"
      },
      HardIceComet: {
        tag: "HardIceComet",
        menu_order: 177013.0,
        tags: [
          "IceOre",
          "Unstable",
          "Solid",
          "Liquifiable",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "CrushedIce"
      },
      SlimeComet: {
        tag: "SlimeComet",
        menu_order: 177013.0,
        tags: [
          "FlyingCritterEdible",
          "Solid",
          "Organics",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "SlimeMold"
      },
      UraniumComet: {
        tag: "UraniumComet",
        menu_order: 177013.0,
        tags: [
          "BuildableAny",
          "Metal",
          "Noncrushable",
          "Solid",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "UraniumOre"
      },
      GassyMoo: {
        tag: "GassyMoo",
        menu_order: 177013.0,
        tags: [
          "Solid",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      NuclearWasteComet: {
        tag: "NuclearWasteComet",
        menu_order: 177013.0,
        tags: [
          "Solid",
          "Other",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "Corium"
      },
      DustComet: {
        tag: "DustComet",
        menu_order: 177013.0,
        tags: [
          "Unstable",
          "Solid",
          "Filter",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "Regolith"
      },
      SnowballComet: {
        tag: "SnowballComet",
        menu_order: 177013.0,
        tags: [
          "IceOre",
          "Unstable",
          "Solid",
          "Liquifiable",
          "Comet"
        ],
        mass: 1.0,
        primary_element: "Snow"
      }
    },
    artifact: {
      ArtifactSpacePOI_GravitasSpaceStation1: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation1",
        menu_order: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation2: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation2",
        menu_order: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation3: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation3",
        menu_order: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation4: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation4",
        menu_order: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation5: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation5",
        menu_order: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation6: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation6",
        menu_order: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation7: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation7",
        menu_order: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation8: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation8",
        menu_order: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_RussellsTeapot: {
        tag: "ArtifactSpacePOI_RussellsTeapot",
        menu_order: 177013.0,
        tags: []
      }
    },
    harvestable: {
      HarvestableSpacePOI_MetallicAsteroidField: {
        tag: "HarvestableSpacePOI_MetallicAsteroidField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_SatelliteField: {
        tag: "HarvestableSpacePOI_SatelliteField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_RockyAsteroidField: {
        tag: "HarvestableSpacePOI_RockyAsteroidField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_InterstellarIceField: {
        tag: "HarvestableSpacePOI_InterstellarIceField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_OrganicMassField: {
        tag: "HarvestableSpacePOI_OrganicMassField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_IceAsteroidField: {
        tag: "HarvestableSpacePOI_IceAsteroidField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_GasGiantCloud: {
        tag: "HarvestableSpacePOI_GasGiantCloud",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_ChlorineCloud: {
        tag: "HarvestableSpacePOI_ChlorineCloud",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_GildedAsteroidField: {
        tag: "HarvestableSpacePOI_GildedAsteroidField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_GlimmeringAsteroidField: {
        tag: "HarvestableSpacePOI_GlimmeringAsteroidField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_HeliumCloud: {
        tag: "HarvestableSpacePOI_HeliumCloud",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_OilyAsteroidField: {
        tag: "HarvestableSpacePOI_OilyAsteroidField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_OxidizedAsteroidField: {
        tag: "HarvestableSpacePOI_OxidizedAsteroidField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_SaltyAsteroidField: {
        tag: "HarvestableSpacePOI_SaltyAsteroidField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_FrozenOreField: {
        tag: "HarvestableSpacePOI_FrozenOreField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_ForestyOreField: {
        tag: "HarvestableSpacePOI_ForestyOreField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_SwampyOreField: {
        tag: "HarvestableSpacePOI_SwampyOreField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_SandyOreField: {
        tag: "HarvestableSpacePOI_SandyOreField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_RadioactiveGasCloud: {
        tag: "HarvestableSpacePOI_RadioactiveGasCloud",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_RadioactiveAsteroidField: {
        tag: "HarvestableSpacePOI_RadioactiveAsteroidField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_OxygenRichAsteroidField: {
        tag: "HarvestableSpacePOI_OxygenRichAsteroidField",
        menu_order: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_InterstellarOcean: {
        tag: "HarvestableSpacePOI_InterstellarOcean",
        menu_order: 177013.0,
        tags: []
      }
    },
    shower: {
      ClusterMapMeteorShower_Biological: {
        tag: "ClusterMapMeteorShower_Biological",
        menu_order: 177013.0,
        tags: [],
        mass: 25.0,
        primary_element: "Unobtanium"
      },
      ClusterMapMeteorShower_Snow: {
        tag: "ClusterMapMeteorShower_Snow",
        menu_order: 177013.0,
        tags: [],
        mass: 25.0,
        primary_element: "Unobtanium"
      },
      ClusterMapMeteorShower_Ice: {
        tag: "ClusterMapMeteorShower_Ice",
        menu_order: 177013.0,
        tags: [],
        mass: 25.0,
        primary_element: "Unobtanium"
      },
      ClusterMapMeteorShower_Copper: {
        tag: "ClusterMapMeteorShower_Copper",
        menu_order: 177013.0,
        tags: [],
        mass: 25.0,
        primary_element: "Unobtanium"
      },
      ClusterMapMeteorShower_Iron: {
        tag: "ClusterMapMeteorShower_Iron",
        menu_order: 177013.0,
        tags: [],
        mass: 25.0,
        primary_element: "Unobtanium"
      },
      ClusterMapMeteorShower_Gold: {
        tag: "ClusterMapMeteorShower_Gold",
        menu_order: 177013.0,
        tags: [],
        mass: 25.0,
        primary_element: "Unobtanium"
      },
      ClusterMapMeteorShower_Uranium: {
        tag: "ClusterMapMeteorShower_Uranium",
        menu_order: 177013.0,
        tags: [],
        mass: 25.0,
        primary_element: "Unobtanium"
      },
      ClusterMapMeteorShower_HeavyDust: {
        tag: "ClusterMapMeteorShower_HeavyDust",
        menu_order: 177013.0,
        tags: [],
        mass: 25.0,
        primary_element: "Unobtanium"
      },
      ClusterMapMeteorShower_LightDust: {
        tag: "ClusterMapMeteorShower_LightDust",
        menu_order: 177013.0,
        tags: [],
        mass: 25.0,
        primary_element: "Unobtanium"
      },
      ClusterMapMeteorShower_Moo: {
        tag: "ClusterMapMeteorShower_Moo",
        menu_order: 177013.0,
        tags: [],
        mass: 25.0,
        primary_element: "Unobtanium"
      },
      ClusterMapMeteorShower_Regolith: {
        tag: "ClusterMapMeteorShower_Regolith",
        menu_order: 177013.0,
        tags: [],
        mass: 25.0,
        primary_element: "Unobtanium"
      },
      ClusterMapMeteorShower_Oxylite: {
        tag: "ClusterMapMeteorShower_Oxylite",
        menu_order: 177013.0,
        tags: [],
        mass: 25.0,
        primary_element: "Unobtanium"
      },
      ClusterMapMeteorShower_BleachStone: {
        tag: "ClusterMapMeteorShower_BleachStone",
        menu_order: 177013.0,
        tags: [],
        mass: 25.0,
        primary_element: "Unobtanium"
      }
    }
  },
  artifact: {
    Any: {
      artifact_sandstone: {
        tag: "artifact_sandstone",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature"
      },
      artifact_officemug: {
        tag: "artifact_officemug",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature"
      },
      artifact_modernart: {
        tag: "artifact_modernart",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decor_radius: 3.0,
        primary_element: "Creature"
      },
      artifact_shieldgenerator: {
        tag: "artifact_shieldgenerator",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 30.0,
        decor_radius: 5.0,
        primary_element: "Creature"
      },
      artifact_grubstatue: {
        tag: "artifact_grubstatue",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 30.0,
        decor_radius: 5.0,
        primary_element: "Creature"
      },
      artifact_eggrock: {
        tag: "artifact_eggrock",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 35.0,
        decor_radius: 6.0,
        primary_element: "Creature"
      },
      artifact_hatchfossil: {
        tag: "artifact_hatchfossil",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 35.0,
        decor_radius: 6.0,
        primary_element: "Creature"
      },
      artifact_rocktornado: {
        tag: "artifact_rocktornado",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 35.0,
        decor_radius: 6.0,
        primary_element: "Creature"
      },
      artifact_magmalamp: {
        tag: "artifact_magmalamp",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 35.0,
        decor_radius: 6.0,
        primary_element: "Creature"
      },
      artifact_rainboweggrock: {
        tag: "artifact_rainboweggrock",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 50.0,
        decor_radius: 7.0,
        primary_element: "Creature"
      },
      artifact_plasmalamp: {
        tag: "artifact_plasmalamp",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 50.0,
        decor_radius: 7.0,
        primary_element: "Creature"
      },
      artifact_moodring: {
        tag: "artifact_moodring",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 50.0,
        decor_radius: 7.0,
        primary_element: "Creature"
      },
      artifact_reactormodel: {
        tag: "artifact_reactormodel",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 80.0,
        decor_radius: 7.0,
        primary_element: "Creature"
      }
    },
    Terrestrial: {
      artifact_sink: {
        tag: "artifact_sink",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature"
      },
      artifact_rubikscube: {
        tag: "artifact_rubikscube",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature"
      },
      artifact_okayxray: {
        tag: "artifact_okayxray",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decor_radius: 3.0,
        primary_element: "Creature"
      },
      artifact_blender: {
        tag: "artifact_blender",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decor_radius: 3.0,
        primary_element: "Creature"
      },
      artifact_vhs: {
        tag: "artifact_vhs",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decor_radius: 3.0,
        primary_element: "Creature"
      },
      artifact_honeyjar: {
        tag: "artifact_honeyjar",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decor_radius: 3.0,
        primary_element: "Creature"
      },
      artifact_brickphone: {
        tag: "artifact_brickphone",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 30.0,
        decor_radius: 5.0,
        primary_element: "Creature"
      },
      artifact_stethoscope: {
        tag: "artifact_stethoscope",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 35.0,
        decor_radius: 6.0,
        primary_element: "Creature"
      },
      artifact_oracle: {
        tag: "artifact_oracle",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 35.0,
        decor_radius: 6.0,
        primary_element: "Creature"
      },
      artifact_dnamodel: {
        tag: "artifact_dnamodel",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 50.0,
        decor_radius: 7.0,
        primary_element: "Creature"
      }
    },
    Space: {
      artifact_obelisk: {
        tag: "artifact_obelisk",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decor_radius: 3.0,
        primary_element: "Creature"
      },
      artifact_moldavite: {
        tag: "artifact_moldavite",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decor_radius: 3.0,
        primary_element: "Creature"
      },
      artifact_saxophone: {
        tag: "artifact_saxophone",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decor_radius: 3.0,
        primary_element: "Creature"
      },
      artifact_ameliaswatch: {
        tag: "artifact_ameliaswatch",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 30.0,
        decor_radius: 5.0,
        primary_element: "Creature"
      },
      artifact_teapot: {
        tag: "artifact_teapot",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 30.0,
        decor_radius: 5.0,
        primary_element: "Creature"
      },
      artifact_robotarm: {
        tag: "artifact_robotarm",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 30.0,
        decor_radius: 5.0,
        primary_element: "Creature"
      },
      artifact_bioluminescentrock: {
        tag: "artifact_bioluminescentrock",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 30.0,
        decor_radius: 5.0,
        primary_element: "Creature"
      },
      artifact_pacupercolator: {
        tag: "artifact_pacupercolator",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 35.0,
        decor_radius: 6.0,
        primary_element: "Creature"
      },
      artifact_solarsystem: {
        tag: "artifact_solarsystem",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 80.0,
        decor_radius: 7.0,
        primary_element: "Creature"
      },
      artifact_moonmoonmoon: {
        tag: "artifact_moonmoonmoon",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 80.0,
        decor_radius: 7.0,
        primary_element: "Creature"
      }
    },
    quest: {
      keepsake_megabrain: {
        tag: "keepsake_megabrain",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Keepsake"
        ],
        mass: 25.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature"
      },
      keepsake_crittermanipulator: {
        tag: "keepsake_crittermanipulator",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Keepsake"
        ],
        mass: 25.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature"
      },
      keepsake_lonelyminion: {
        tag: "keepsake_lonelyminion",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Keepsake"
        ],
        mass: 25.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature"
      },
      keepsake_fossilhunt: {
        tag: "keepsake_fossilhunt",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Keepsake"
        ],
        mass: 25.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature"
      },
      keepsake_morbrovermaker: {
        tag: "keepsake_morbrovermaker",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Keepsake"
        ],
        mass: 25.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature"
      }
    }
  },
  misc: {
    medicine: {
      IntermediateCure: {
        tag: "IntermediateCure",
        menu_order: 177013.0,
        tags: [
          "MedicalSupplies",
          "DoctorStationMedicalSupplies"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      IntermediateBooster: {
        tag: "IntermediateBooster",
        menu_order: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      BasicRadPill: {
        tag: "BasicRadPill",
        menu_order: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      BasicCure: {
        tag: "BasicCure",
        menu_order: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      BasicBooster: {
        tag: "BasicBooster",
        menu_order: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      Antihistamine: {
        tag: "Antihistamine",
        menu_order: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      AdvancedCure: {
        tag: "AdvancedCure",
        menu_order: 177013.0,
        tags: [
          "MedicalSupplies",
          "AdvancedDoctorStationMedicalSupplies"
        ],
        mass: 1.0,
        primary_element: "Creature"
      }
    },
    industrial: {
      WoodLog: {
        tag: "WoodLog",
        menu_order: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Organics",
          "BuildingWood"
        ],
        mass_per_unit: 1.0,
        mass: 1.0,
        primary_element: "Creature"
      },
      SwampLilyFlower: {
        tag: "SwampLilyFlower",
        menu_order: 177013.0,
        tags: [
          "IndustrialIngredient"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      ResearchDatabank: {
        tag: "ResearchDatabank",
        menu_order: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Experimental"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      OrbitalResearchDatabank: {
        tag: "OrbitalResearchDatabank",
        menu_order: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Experimental"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      CrabWoodShell: {
        tag: "CrabWoodShell",
        menu_order: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Organics",
          "MoltShell"
        ],
        mass_per_unit: 100.0,
        mass: 100.0,
        primary_element: "Creature"
      },
      BabyCrabWoodShell: {
        tag: "BabyCrabWoodShell",
        menu_order: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Organics",
          "MoltShell"
        ],
        mass_per_unit: 10.0,
        mass: 10.0,
        primary_element: "Creature"
      },
      BabyCrabShell: {
        tag: "BabyCrabShell",
        menu_order: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Organics"
        ],
        mass_per_unit: 5.0,
        mass: 5.0,
        primary_element: "Creature"
      },
      CrabShell: {
        tag: "CrabShell",
        menu_order: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Organics"
        ],
        mass_per_unit: 10.0,
        mass: 10.0,
        primary_element: "Creature"
      },
      MissileBasic: {
        tag: "MissileBasic",
        menu_order: 177013.0,
        tags: [
          "IndustrialProduct"
        ],
        mass: 10.0,
        primary_element: "Iron"
      },
      GeneShufflerRecharge: {
        tag: "GeneShufflerRecharge",
        menu_order: 177013.0,
        tags: [
          "IndustrialIngredient"
        ],
        mass: 5.0,
        primary_element: "Creature"
      },
      BasicFabric: {
        tag: "BasicFabric",
        menu_order: 177013.0,
        tags: [
          "IndustrialIngredient",
          "BuildingFiber"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      GingerConfig: {
        tag: "GingerConfig",
        menu_order: 177013.0,
        tags: [
          "IndustrialIngredient"
        ],
        mass: 1.0,
        primary_element: "Creature"
      }
    },
    other: {
      TableSalt: {
        tag: "TableSalt",
        menu_order: 177013.0,
        tags: [
          "Other"
        ],
        mass: 1.0,
        primary_element: "Salt"
      },
      PowerStationTools: {
        tag: "PowerStationTools",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable"
        ],
        mass: 5.0,
        primary_element: "Creature"
      },
      FarmStationTools: {
        tag: "FarmStationTools",
        menu_order: 177013.0,
        tags: [
          "MiscPickupable"
        ],
        mass: 5.0,
        primary_element: "Creature"
      },
      EggShell: {
        tag: "EggShell",
        menu_order: 177013.0,
        tags: [
          "Organics"
        ],
        mass_per_unit: 1.0,
        mass: 1.0,
        primary_element: "Creature"
      },
      GasGrassHarvested: {
        tag: "GasGrassHarvested",
        menu_order: 177013.0,
        tags: [
          "Other"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      RotPile: {
        tag: "RotPile",
        menu_order: 177013.0,
        tags: [
          "Organics",
          "Compostable"
        ],
        mass: 1.0,
        decor: -15.0,
        decor_radius: 3.0,
        primary_element: "Creature"
      }
    },
    quest: {
      DreamJournal: {
        tag: "DreamJournal",
        menu_order: 177013.0,
        tags: [
          "StoryTraitResource"
        ],
        mass: 1.0,
        primary_element: "Creature"
      }
    },
    dupe: {
      Minion: {
        tag: "Minion",
        menu_order: 177013.0,
        tags: [
          "DupeBrain",
          "CorrosionProof"
        ],
        hp: 100,
        mass: 30.0,
        primary_element: "Creature",
        calories_max: 4000000.0,
        calories_loss: -1666.66663,
        carry_amount: 200.0
      }
    }
  },
  food: {
    cooked: {
      WormBasicFruit: {
        tag: "WormBasicFruit",
        menu_order: 0.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 0.0,
        calories: 800000.0,
        spoil_time: 4800.0
      },
      WormBasicFood: {
        tag: "WormBasicFood",
        menu_order: 1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 1.0,
        calories: 1200000.0,
        spoil_time: 4800.0
      },
      Tofu: {
        tag: "Tofu",
        menu_order: 2.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 2.0,
        calories: 3600000.0,
        spoil_time: 2400.0
      },
      SwampFruit: {
        tag: "SwampFruit",
        menu_order: 0.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 0.0,
        calories: 1840000.0,
        spoil_time: 2400.0
      },
      SwampDelights: {
        tag: "SwampDelights",
        menu_order: 1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 1.0,
        calories: 2240000.0,
        spoil_time: 4800.0
      },
      WormSuperFood: {
        tag: "WormSuperFood",
        menu_order: 3.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 3.0,
        calories: 2400000.0,
        spoil_time: 19200.0
      },
      SpicyTofu: {
        tag: "SpicyTofu",
        menu_order: 5.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 5.0,
        calories: 4000000.0,
        spoil_time: 2400.0
      },
      SpiceBread: {
        tag: "SpiceBread",
        menu_order: 5.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 5.0,
        calories: 4000000.0,
        spoil_time: 4800.0
      },
      ShellfishMeat: {
        tag: "ShellfishMeat",
        menu_order: 2.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 2.0,
        calories: 1000000.0,
        spoil_time: 2400.0
      },
      SurfAndTurf: {
        tag: "SurfAndTurf",
        menu_order: 4.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 4.0,
        calories: 6000000.0,
        spoil_time: 2400.0
      },
      WormSuperFruit: {
        tag: "WormSuperFruit",
        menu_order: 1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 1.0,
        calories: 250000.0,
        spoil_time: 2400.0
      },
      Salsa: {
        tag: "Salsa",
        menu_order: 4.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 4.0,
        calories: 4400000.0,
        spoil_time: 2400.0
      },
      RawEgg: {
        tag: "RawEgg",
        menu_order: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: -1.0,
        calories: 1600000.0,
        spoil_time: 4800.0
      },
      BasicForagePlant: {
        tag: "BasicForagePlant",
        menu_order: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: -1.0,
        calories: 800000.0,
        spoil_time: 0.0
      },
      ForestForagePlant: {
        tag: "ForestForagePlant",
        menu_order: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: -1.0,
        calories: 6400000.0,
        spoil_time: 0.0
      },
      ColdWheatBread: {
        tag: "ColdWheatBread",
        menu_order: 2.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 2.0,
        calories: 1200000.0,
        spoil_time: 4800.0
      },
      CookedEgg: {
        tag: "CookedEgg",
        menu_order: 2.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 2.0,
        calories: 2800000.0,
        spoil_time: 2400.0
      },
      CookedFish: {
        tag: "CookedFish",
        menu_order: 3.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 3.0,
        calories: 1600000.0,
        spoil_time: 2400.0
      },
      CookedMeat: {
        tag: "CookedMeat",
        menu_order: 3.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 3.0,
        calories: 4000000.0,
        spoil_time: 2400.0
      },
      Curry: {
        tag: "Curry",
        menu_order: 4.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 4.0,
        calories: 5000000.0,
        spoil_time: 9600.0
      },
      FieldRation: {
        tag: "FieldRation",
        menu_order: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: -1.0,
        calories: 800000.0,
        spoil_time: 0.0
      },
      FishMeat: {
        tag: "FishMeat",
        menu_order: 2.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 2.0,
        calories: 1000000.0,
        spoil_time: 2400.0
      },
      FriedMushBar: {
        tag: "FriedMushBar",
        menu_order: 0.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 0.0,
        calories: 1050000.0,
        spoil_time: 4800.0
      },
      FriedMushroom: {
        tag: "FriedMushroom",
        menu_order: 1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 1.0,
        calories: 2800000.0,
        spoil_time: 4800.0
      },
      FruitCake: {
        tag: "FruitCake",
        menu_order: 3.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 3.0,
        calories: 4000000.0,
        spoil_time: 0.0
      },
      Burger: {
        tag: "Burger",
        menu_order: 6.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 6.0,
        calories: 6000000.0,
        spoil_time: 2400.0
      },
      Lettuce: {
        tag: "Lettuce",
        menu_order: 0.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 0.0,
        calories: 400000.0,
        spoil_time: 2400.0
      },
      Meat: {
        tag: "Meat",
        menu_order: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: -1.0,
        calories: 1600000.0,
        spoil_time: 4800.0
      },
      MushBar: {
        tag: "MushBar",
        menu_order: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: -1.0,
        calories: 800000.0,
        spoil_time: 4800.0
      },
      Mushroom: {
        tag: "Mushroom",
        menu_order: 0.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 0.0,
        calories: 2400000.0,
        spoil_time: 4800.0
      },
      MushroomWrap: {
        tag: "MushroomWrap",
        menu_order: 4.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 4.0,
        calories: 4800000.0,
        spoil_time: 2400.0
      },
      PacuFillet: {
        tag: "PacuFillet",
        menu_order: 2.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 2.0,
        calories: 1000000.0,
        spoil_time: 2400.0
      },
      Pancakes: {
        tag: "Pancakes",
        menu_order: 3.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 3.0,
        calories: 3600000.0,
        spoil_time: 4800.0
      },
      PickledMeal: {
        tag: "PickledMeal",
        menu_order: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible",
          "Pickled"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: -1.0,
        calories: 1800000.0,
        spoil_time: 19200.0
      },
      PlantMeat: {
        tag: "PlantMeat",
        menu_order: 1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 1.0,
        calories: 1200000.0,
        spoil_time: 2400.0
      },
      PrickleFruit: {
        tag: "PrickleFruit",
        menu_order: 0.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 0.0,
        calories: 1600000.0,
        spoil_time: 4800.0
      },
      Quiche: {
        tag: "Quiche",
        menu_order: 5.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 5.0,
        calories: 6400000.0,
        spoil_time: 2400.0
      },
      GrilledPrickleFruit: {
        tag: "GrilledPrickleFruit",
        menu_order: 1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 1.0,
        calories: 2000000.0,
        spoil_time: 4800.0
      },
      BerryPie: {
        tag: "BerryPie",
        menu_order: 5.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 5.0,
        calories: 4200000.0,
        spoil_time: 2400.0
      },
      SwampForagePlant: {
        tag: "SwampForagePlant",
        menu_order: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: -1.0,
        calories: 2400000.0,
        spoil_time: 0.0
      },
      BasicPlantFood: {
        tag: "BasicPlantFood",
        menu_order: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: -1.0,
        calories: 600000.0,
        spoil_time: 4800.0
      },
      BasicPlantBar: {
        tag: "BasicPlantBar",
        menu_order: 0.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primary_element: "Creature",
        quality: 0.0,
        calories: 1700000.0,
        spoil_time: 4800.0
      }
    },
    dehydrated: {
      DehydratedSurfAndTurf: {
        tag: "DehydratedSurfAndTurf",
        menu_order: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primary_element: "Polypropylene"
      },
      DehydratedSpicyTofu: {
        tag: "DehydratedSpicyTofu",
        menu_order: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primary_element: "Polypropylene"
      },
      DehydratedSpiceBread: {
        tag: "DehydratedSpiceBread",
        menu_order: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primary_element: "Polypropylene"
      },
      DehydratedSalsa: {
        tag: "DehydratedSalsa",
        menu_order: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primary_element: "Polypropylene"
      },
      DehydratedQuiche: {
        tag: "DehydratedQuiche",
        menu_order: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primary_element: "Polypropylene"
      },
      DehydratedFoodPackage: {
        tag: "DehydratedFoodPackage",
        menu_order: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primary_element: "Polypropylene"
      },
      DehydratedMushroomWrap: {
        tag: "DehydratedMushroomWrap",
        menu_order: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primary_element: "Polypropylene"
      },
      DehydratedBerryPie: {
        tag: "DehydratedBerryPie",
        menu_order: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primary_element: "Polypropylene"
      },
      DehydratedCurry: {
        tag: "DehydratedCurry",
        menu_order: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primary_element: "Polypropylene"
      }
    },
    ingredient: {
      SpiceNut: {
        tag: "SpiceNut",
        menu_order: 177013.0,
        tags: [
          "PedestalDisplayable",
          "CookingIngredient"
        ],
        mass: 1.0,
        primary_element: "Creature"
      }
    }
  },
  critter: {
    robot: {
      SweepBot: {
        tag: "SweepBot",
        menu_order: -1.0,
        tags: [
          "Creature",
          "Robot",
          "Walker",
          "CreatureBrain"
        ],
        battery: 9000.0,
        mass: 25.0,
        primary_element: "Creature",
        battery_loss: -17.1428566
      },
      ScoutRover: {
        tag: "ScoutRover",
        menu_order: -1.0,
        tags: [
          "Experimental",
          "DupeBrain",
          "Robot"
        ],
        battery: 180000.0,
        hp: 100,
        mass: 100.0,
        primary_element: "Creature",
        battery_loss: -30.0,
        carry_amount: 200.0,
        deconstructable: true
      },
      MorbRover: {
        tag: "MorbRover",
        menu_order: -1.0,
        tags: [
          "Experimental",
          "DupeBrain",
          "Robot"
        ],
        battery: 180000.0,
        hp: 100,
        mass: 300.0,
        primary_element: "Steel",
        battery_loss: -30.0,
        carry_amount: 400.0,
        deconstructable: true
      }
    },
    egg: {
      SquirrelEgg: {
        tag: "SquirrelEgg",
        menu_order: 8.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      SquirrelHugEgg: {
        tag: "SquirrelHugEgg",
        menu_order: 8.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      StaterpillarEgg: {
        tag: "StaterpillarEgg",
        menu_order: 10.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      StaterpillarLiquidEgg: {
        tag: "StaterpillarLiquidEgg",
        menu_order: 10.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      PuftEgg: {
        tag: "PuftEgg",
        menu_order: 4.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.5,
        primary_element: "Creature"
      },
      DreckoEgg: {
        tag: "DreckoEgg",
        menu_order: 2.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      DreckoPlasticEgg: {
        tag: "DreckoPlasticEgg",
        menu_order: 2.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      LightBugBlackEgg: {
        tag: "LightBugBlackEgg",
        menu_order: 0.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.2,
        primary_element: "Creature"
      },
      LightBugBlueEgg: {
        tag: "LightBugBlueEgg",
        menu_order: 0.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.2,
        primary_element: "Creature"
      },
      LightBugEgg: {
        tag: "LightBugEgg",
        menu_order: 0.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.2,
        primary_element: "Creature"
      },
      PuftOxyliteEgg: {
        tag: "PuftOxyliteEgg",
        menu_order: 4.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.5,
        primary_element: "Creature"
      },
      LightBugCrystalEgg: {
        tag: "LightBugCrystalEgg",
        menu_order: 0.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.2,
        primary_element: "Creature"
      },
      LightBugPinkEgg: {
        tag: "LightBugPinkEgg",
        menu_order: 0.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.2,
        primary_element: "Creature"
      },
      LightBugPurpleEgg: {
        tag: "LightBugPurpleEgg",
        menu_order: 0.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.2,
        primary_element: "Creature"
      },
      MoleEgg: {
        tag: "MoleEgg",
        menu_order: 7.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      MoleDelicacyEgg: {
        tag: "MoleDelicacyEgg",
        menu_order: 7.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      OilfloaterEgg: {
        tag: "OilfloaterEgg",
        menu_order: 6.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      OilfloaterDecorEgg: {
        tag: "OilfloaterDecorEgg",
        menu_order: 6.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      OilfloaterHighTempEgg: {
        tag: "OilfloaterHighTempEgg",
        menu_order: 6.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      PuftAlphaEgg: {
        tag: "PuftAlphaEgg",
        menu_order: 4.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.5,
        primary_element: "Creature"
      },
      PuftBleachstoneEgg: {
        tag: "PuftBleachstoneEgg",
        menu_order: 4.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.5,
        primary_element: "Creature"
      },
      LightBugOrangeEgg: {
        tag: "LightBugOrangeEgg",
        menu_order: 0.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.2,
        primary_element: "Creature"
      },
      StaterpillarGasEgg: {
        tag: "StaterpillarGasEgg",
        menu_order: 10.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      HatchVeggieEgg: {
        tag: "HatchVeggieEgg",
        menu_order: 1.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      HatchEgg: {
        tag: "HatchEgg",
        menu_order: 1.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      CrabEgg: {
        tag: "CrabEgg",
        menu_order: 5.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      CrabWoodEgg: {
        tag: "CrabWoodEgg",
        menu_order: 5.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      CrabFreshWaterEgg: {
        tag: "CrabFreshWaterEgg",
        menu_order: 5.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      PacuCleanerEgg: {
        tag: "PacuCleanerEgg",
        menu_order: 3.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primary_element: "Creature"
      },
      DivergentBeetleEgg: {
        tag: "DivergentBeetleEgg",
        menu_order: 9.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      HatchHardEgg: {
        tag: "HatchHardEgg",
        menu_order: 1.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      PacuTropicalEgg: {
        tag: "PacuTropicalEgg",
        menu_order: 3.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primary_element: "Creature"
      },
      DivergentWormEgg: {
        tag: "DivergentWormEgg",
        menu_order: 9.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      HatchMetalEgg: {
        tag: "HatchMetalEgg",
        menu_order: 1.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primary_element: "Creature"
      },
      PacuEgg: {
        tag: "PacuEgg",
        menu_order: 3.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primary_element: "Creature"
      }
    },
    critter: {
      Squirrel: {
        tag: "Squirrel",
        menu_order: 8.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 1000000.0,
        calories_loss: -166.666672,
        milk_consummer: true,
        space_per_critter: 12.0,
        time_wait_plant_seed: {
          Item1: 60.0,
          Item2: 300.0
        },
        time_wait_climb_tree: {
          Item1: 60.0,
          Item2: 120.0
        },
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      SquirrelHug: {
        tag: "SquirrelHug",
        menu_order: 8.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 100.0,
        decor: 25.0,
        decor_radius: 4.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 1000000.0,
        calories_loss: -166.666672,
        milk_consummer: true,
        space_per_critter: 4.0,
        time_wait_plant_seed: {
          Item1: 60.0,
          Item2: 300.0
        },
        time_wait_climb_tree: {
          Item1: 60.0,
          Item2: 120.0
        },
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Staterpillar: {
        tag: "Staterpillar",
        menu_order: 10.0,
        tags: [
          "Walker",
          "Amphibious",
          "Creature",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 1E+07,
        calories_loss: -3333.33325,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarLiquid: {
        tag: "StaterpillarLiquid",
        menu_order: 10.0,
        tags: [
          "Walker",
          "Amphibious",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 263.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 343.15,
        high_temp_fatal: 363.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 1E+07,
        calories_loss: -3333.33325,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Puft: {
        tag: "Puft",
        menu_order: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 288.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 328.15,
        high_temp_fatal: 378.15,
        mass: 50.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 75.0,
        calories_max: 1200000.0,
        calories_loss: -333.333344,
        milk_consummer: true,
        space_per_critter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      BeeHive: {
        tag: "BeeHive",
        menu_order: 11.0,
        tags: [
          "Experimental",
          "Creature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 183.0,
        low_temp_fatal: 173.0,
        high_temp_warning: 263.0,
        high_temp_fatal: 273.0,
        mass: 100.0,
        decor: 5.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        calories_max: 4.5E+07,
        calories_loss: -2500.0
      },
      Bee: {
        tag: "Bee",
        menu_order: 11.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Flyer",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 5,
        low_temp_warning: 183.0,
        low_temp_fatal: 173.0,
        high_temp_warning: 263.0,
        high_temp_fatal: 273.0,
        mass: 5.0,
        decor: 30.0,
        decor_radius: 5.0,
        primary_element: "Creature",
        age: 5.0,
        space_per_critter: 4.0,
        happy: 4.0,
        glum: -1.0
      },
      Drecko: {
        tag: "Drecko",
        menu_order: 2.0,
        tags: [
          "Walker",
          "Creature",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 308.15,
        low_temp_fatal: 288.15,
        high_temp_warning: 363.15,
        high_temp_fatal: 383.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 150.0,
        calories_max: 1E+07,
        calories_loss: -3333.33325,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DreckoPlastic: {
        tag: "DreckoPlastic",
        menu_order: 2.0,
        tags: [
          "Walker",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 298.15,
        low_temp_fatal: 278.15,
        high_temp_warning: 333.15,
        high_temp_fatal: 353.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 150.0,
        calories_max: 1E+07,
        calories_loss: -3333.33325,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Glom: {
        tag: "Glom",
        menu_order: 13.0,
        tags: [
          "Walker",
          "OriginalCreature",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 293.15,
        low_temp_fatal: 273.15,
        high_temp_warning: 393.15,
        high_temp_fatal: 423.15,
        mass: 25.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature"
      },
      LightBugBlack: {
        tag: "LightBugBlack",
        menu_order: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        low_temp_warning: 263.0,
        low_temp_fatal: 253.0,
        high_temp_warning: 313.0,
        high_temp_fatal: 323.0,
        mass: 5.0,
        decor: 80.0,
        decor_radius: 7.0,
        primary_element: "Creature",
        age: 75.0,
        calories_max: 320000.0,
        calories_loss: -66.6666641,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugBlue: {
        tag: "LightBugBlue",
        menu_order: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        low_temp_warning: 263.0,
        low_temp_fatal: 253.0,
        high_temp_warning: 313.0,
        high_temp_fatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decor_radius: 7.0,
        primary_element: "Creature",
        age: 25.0,
        calories_max: 320000.0,
        calories_loss: -66.6666641,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBug: {
        tag: "LightBug",
        menu_order: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature",
          "LightSource"
        ],
        hp: 5,
        low_temp_warning: 263.0,
        low_temp_fatal: 253.0,
        high_temp_warning: 313.0,
        high_temp_fatal: 323.0,
        mass: 5.0,
        decor: 30.0,
        decor_radius: 5.0,
        primary_element: "Creature",
        age: 25.0,
        calories_max: 320000.0,
        calories_loss: -66.6666641,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftOxylite: {
        tag: "PuftOxylite",
        menu_order: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 303.15,
        low_temp_fatal: 258.15,
        high_temp_warning: 338.15,
        high_temp_fatal: 388.15,
        mass: 50.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 75.0,
        calories_max: 1200000.0,
        calories_loss: -333.333344,
        milk_consummer: true,
        space_per_critter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugCrystal: {
        tag: "LightBugCrystal",
        menu_order: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        low_temp_warning: 263.0,
        low_temp_fatal: 253.0,
        high_temp_warning: 313.0,
        high_temp_fatal: 323.0,
        mass: 5.0,
        decor: 200.0,
        decor_radius: 8.0,
        primary_element: "Creature",
        age: 75.0,
        calories_max: 320000.0,
        calories_loss: -66.6666641,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugPink: {
        tag: "LightBugPink",
        menu_order: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        low_temp_warning: 263.0,
        low_temp_fatal: 253.0,
        high_temp_warning: 313.0,
        high_temp_fatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decor_radius: 7.0,
        primary_element: "Creature",
        age: 25.0,
        calories_max: 320000.0,
        calories_loss: -66.6666641,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugPurple: {
        tag: "LightBugPurple",
        menu_order: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        low_temp_warning: 263.0,
        low_temp_fatal: 253.0,
        high_temp_warning: 313.0,
        high_temp_fatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decor_radius: 7.0,
        primary_element: "Creature",
        age: 25.0,
        calories_max: 320000.0,
        calories_loss: -66.6666641,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Mole: {
        tag: "Mole",
        menu_order: 7.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "Digger",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 123.149994,
        low_temp_fatal: 73.1499939,
        high_temp_warning: 673.15,
        high_temp_fatal: 773.15,
        mass: 25.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 4.8E+07,
        calories_loss: -8000.0,
        milk_consummer: true,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      MoleDelicacy: {
        tag: "MoleDelicacy",
        menu_order: 7.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "Digger"
        ],
        hp: 25,
        low_temp_warning: 123.149994,
        low_temp_fatal: 73.1499939,
        high_temp_warning: 673.15,
        high_temp_fatal: 773.15,
        mass: 25.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 2.4E+07,
        calories_loss: -8000.0,
        milk_consummer: true,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Moo: {
        tag: "Moo",
        menu_order: 12.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 123.149994,
        low_temp_fatal: 73.1499939,
        high_temp_warning: 423.15,
        high_temp_fatal: 473.15,
        mass: 50.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 75.0,
        calories_max: 1200000.0,
        calories_loss: -333.333344,
        milk_consummer: true,
        space_per_critter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Oilfloater: {
        tag: "Oilfloater",
        menu_order: 6.0,
        tags: [
          "Hoverer",
          "Creature",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 323.15,
        low_temp_fatal: 308.15,
        high_temp_warning: 413.15,
        high_temp_fatal: 433.15,
        mass: 50.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 600000.0,
        calories_loss: -200.0,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterDecor: {
        tag: "OilfloaterDecor",
        menu_order: 6.0,
        tags: [
          "Hoverer",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 268.15,
        high_temp_warning: 343.15,
        high_temp_fatal: 363.15,
        mass: 50.0,
        decor: 50.0,
        decor_radius: 7.0,
        primary_element: "Creature",
        age: 150.0,
        calories_max: 600000.0,
        calories_loss: -200.0,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterHighTemp: {
        tag: "OilfloaterHighTemp",
        menu_order: 6.0,
        tags: [
          "Hoverer",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 363.15,
        low_temp_fatal: 348.15,
        high_temp_warning: 523.15,
        high_temp_fatal: 543.15,
        mass: 50.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 600000.0,
        calories_loss: -200.0,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftAlpha: {
        tag: "PuftAlpha",
        menu_order: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 258.15,
        low_temp_fatal: 213.15,
        high_temp_warning: 338.15,
        high_temp_fatal: 388.15,
        mass: 50.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 75.0,
        calories_max: 1200000.0,
        calories_loss: -333.333344,
        milk_consummer: true,
        space_per_critter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftBleachstone: {
        tag: "PuftBleachstone",
        menu_order: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 258.15,
        low_temp_fatal: 213.15,
        high_temp_warning: 308.15,
        high_temp_fatal: 358.15,
        mass: 50.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 75.0,
        calories_max: 1200000.0,
        calories_loss: -333.333344,
        milk_consummer: true,
        space_per_critter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugOrange: {
        tag: "LightBugOrange",
        menu_order: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        low_temp_warning: 263.0,
        low_temp_fatal: 253.0,
        high_temp_warning: 313.0,
        high_temp_fatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decor_radius: 7.0,
        primary_element: "Creature",
        age: 25.0,
        calories_max: 320000.0,
        calories_loss: -66.6666641,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarGas: {
        tag: "StaterpillarGas",
        menu_order: 10.0,
        tags: [
          "Walker",
          "Amphibious",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 263.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 343.15,
        high_temp_fatal: 363.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 1E+07,
        calories_loss: -3333.33325,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchVeggie: {
        tag: "HatchVeggie",
        menu_order: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 7000000.0,
        calories_loss: -1166.66663,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Hatch: {
        tag: "Hatch",
        menu_order: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 7000000.0,
        calories_loss: -1166.66663,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Crab: {
        tag: "Crab",
        menu_order: 5.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CrabFriend",
          "CreatureBrain",
          "Amphibious",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 288.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 343.15,
        high_temp_fatal: 373.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 1000000.0,
        calories_loss: -166.666672,
        milk_consummer: true,
        space_per_critter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabWood: {
        tag: "CrabWood",
        menu_order: 5.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CrabFriend",
          "CreatureBrain",
          "Amphibious"
        ],
        hp: 25,
        low_temp_warning: 288.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 343.15,
        high_temp_fatal: 373.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 1000000.0,
        calories_loss: -166.666672,
        milk_consummer: true,
        space_per_critter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabFreshWater: {
        tag: "CrabFreshWater",
        menu_order: 5.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CrabFriend",
          "CreatureBrain",
          "Amphibious"
        ],
        hp: 25,
        low_temp_warning: 288.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 343.15,
        high_temp_fatal: 373.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 1000000.0,
        calories_loss: -166.666672,
        milk_consummer: true,
        space_per_critter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PacuCleaner: {
        tag: "PacuCleaner",
        menu_order: 3.0,
        tags: [
          "SwimmingCreature",
          "Swimmer",
          "BagableCreature",
          "Creature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 243.15,
        low_temp_fatal: 223.15,
        high_temp_warning: 278.15,
        high_temp_fatal: 298.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 25.0,
        calories_max: 500000.0,
        calories_loss: -166.666672,
        space_per_critter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DivergentBeetle: {
        tag: "DivergentBeetle",
        menu_order: 9.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 50.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 75.0,
        calories_max: 7000000.0,
        calories_loss: -1166.66663,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchHard: {
        tag: "HatchHard",
        menu_order: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 200,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 7000000.0,
        calories_loss: -1166.66663,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PacuTropical: {
        tag: "PacuTropical",
        menu_order: 3.0,
        tags: [
          "SwimmingCreature",
          "Swimmer",
          "BagableCreature",
          "Creature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 303.15,
        low_temp_fatal: 283.15,
        high_temp_warning: 353.15,
        high_temp_fatal: 373.15,
        mass: 200.0,
        decor: 25.0,
        decor_radius: 5.0,
        primary_element: "Creature",
        age: 25.0,
        calories_max: 500000.0,
        calories_loss: -166.666672,
        space_per_critter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DivergentWorm: {
        tag: "DivergentWorm",
        menu_order: 9.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 150.0,
        calories_max: 7000000.0,
        calories_loss: -1166.66663,
        milk_consummer: true,
        space_per_critter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchMetal: {
        tag: "HatchMetal",
        menu_order: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 400,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 100.0,
        calories_max: 7000000.0,
        calories_loss: -1166.66663,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Pacu: {
        tag: "Pacu",
        menu_order: 3.0,
        tags: [
          "SwimmingCreature",
          "Swimmer",
          "BagableCreature",
          "Creature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 273.15,
        low_temp_fatal: 253.15,
        high_temp_warning: 333.15,
        high_temp_fatal: 353.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 25.0,
        calories_max: 500000.0,
        calories_loss: -166.666672,
        space_per_critter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    },
    baby: {
      DreckoPlasticBaby: {
        tag: "DreckoPlasticBaby",
        menu_order: 2.0,
        tags: [
          "Walker",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 298.15,
        low_temp_fatal: 278.15,
        high_temp_warning: 333.15,
        high_temp_fatal: 353.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 1E+07,
        calories_loss: -3333.33325,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DivergentWormBaby: {
        tag: "DivergentWormBaby",
        menu_order: 9.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 7000000.0,
        calories_loss: -1166.66663,
        milk_consummer: true,
        space_per_critter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      BeeBaby: {
        tag: "BeeBaby",
        menu_order: 11.0,
        tags: [
          "Creature",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature",
          "Walker"
        ],
        hp: 5,
        low_temp_warning: 183.0,
        low_temp_fatal: 173.0,
        high_temp_warning: 263.0,
        high_temp_fatal: 273.0,
        mass: 5.0,
        decor: 30.0,
        decor_radius: 5.0,
        primary_element: "Creature",
        age: 2.0,
        space_per_critter: 4.0,
        happy: 4.0,
        glum: -1.0
      },
      DivergentBeetleBaby: {
        tag: "DivergentBeetleBaby",
        menu_order: 9.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 50.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 7000000.0,
        calories_loss: -1166.66663,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabFreshWaterBaby: {
        tag: "CrabFreshWaterBaby",
        menu_order: 5.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CrabFriend",
          "CreatureBrain",
          "Amphibious"
        ],
        hp: 25,
        low_temp_warning: 288.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 343.15,
        high_temp_fatal: 373.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 1000000.0,
        calories_loss: -166.666672,
        milk_consummer: true,
        space_per_critter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DreckoBaby: {
        tag: "DreckoBaby",
        menu_order: 2.0,
        tags: [
          "Walker",
          "Creature",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 308.15,
        low_temp_fatal: 288.15,
        high_temp_warning: 363.15,
        high_temp_fatal: 383.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 1E+07,
        calories_loss: -3333.33325,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchBaby: {
        tag: "HatchBaby",
        menu_order: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 7000000.0,
        calories_loss: -1166.66663,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabWoodBaby: {
        tag: "CrabWoodBaby",
        menu_order: 5.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CrabFriend",
          "CreatureBrain",
          "Amphibious"
        ],
        hp: 25,
        low_temp_warning: 288.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 343.15,
        high_temp_fatal: 373.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 1000000.0,
        calories_loss: -166.666672,
        milk_consummer: true,
        space_per_critter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabBaby: {
        tag: "CrabBaby",
        menu_order: 5.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CrabFriend",
          "CreatureBrain",
          "Amphibious",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 288.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 343.15,
        high_temp_fatal: 373.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 1000000.0,
        calories_loss: -166.666672,
        milk_consummer: true,
        space_per_critter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugBaby: {
        tag: "LightBugBaby",
        menu_order: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature",
          "LightSource"
        ],
        hp: 5,
        low_temp_warning: 263.0,
        low_temp_fatal: 253.0,
        high_temp_warning: 313.0,
        high_temp_fatal: 323.0,
        mass: 5.0,
        decor: 30.0,
        decor_radius: 5.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 320000.0,
        calories_loss: -66.6666641,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchMetalBaby: {
        tag: "HatchMetalBaby",
        menu_order: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 400,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 7000000.0,
        calories_loss: -1166.66663,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftOxyliteBaby: {
        tag: "PuftOxyliteBaby",
        menu_order: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 303.15,
        low_temp_fatal: 258.15,
        high_temp_warning: 338.15,
        high_temp_fatal: 388.15,
        mass: 50.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 1200000.0,
        calories_loss: -333.333344,
        milk_consummer: true,
        space_per_critter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      SquirrelHugBaby: {
        tag: "SquirrelHugBaby",
        menu_order: 8.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 100.0,
        decor: 25.0,
        decor_radius: 4.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 1000000.0,
        calories_loss: -166.666672,
        milk_consummer: true,
        space_per_critter: 4.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftBaby: {
        tag: "PuftBaby",
        menu_order: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 288.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 328.15,
        high_temp_fatal: 378.15,
        mass: 50.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 1200000.0,
        calories_loss: -333.333344,
        milk_consummer: true,
        space_per_critter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftBleachstoneBaby: {
        tag: "PuftBleachstoneBaby",
        menu_order: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 258.15,
        low_temp_fatal: 213.15,
        high_temp_warning: 308.15,
        high_temp_fatal: 358.15,
        mass: 50.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 1200000.0,
        calories_loss: -333.333344,
        milk_consummer: true,
        space_per_critter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarBaby: {
        tag: "StaterpillarBaby",
        menu_order: 10.0,
        tags: [
          "Walker",
          "Amphibious",
          "Creature",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 1E+07,
        calories_loss: -3333.33325,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftAlphaBaby: {
        tag: "PuftAlphaBaby",
        menu_order: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 258.15,
        low_temp_fatal: 213.15,
        high_temp_warning: 338.15,
        high_temp_fatal: 388.15,
        mass: 50.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 1200000.0,
        calories_loss: -333.333344,
        milk_consummer: true,
        space_per_critter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PacuTropicalBaby: {
        tag: "PacuTropicalBaby",
        menu_order: 3.0,
        tags: [
          "SwimmingCreature",
          "Swimmer",
          "BagableCreature",
          "Creature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 303.15,
        low_temp_fatal: 283.15,
        high_temp_warning: 353.15,
        high_temp_fatal: 373.15,
        mass: 200.0,
        decor: 25.0,
        decor_radius: 5.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 500000.0,
        calories_loss: -166.666672,
        space_per_critter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PacuBaby: {
        tag: "PacuBaby",
        menu_order: 3.0,
        tags: [
          "SwimmingCreature",
          "Swimmer",
          "BagableCreature",
          "Creature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 273.15,
        low_temp_fatal: 253.15,
        high_temp_warning: 333.15,
        high_temp_fatal: 353.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 500000.0,
        calories_loss: -166.666672,
        space_per_critter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PacuCleanerBaby: {
        tag: "PacuCleanerBaby",
        menu_order: 3.0,
        tags: [
          "SwimmingCreature",
          "Swimmer",
          "BagableCreature",
          "Creature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 243.15,
        low_temp_fatal: 223.15,
        high_temp_warning: 278.15,
        high_temp_fatal: 298.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 500000.0,
        calories_loss: -166.666672,
        space_per_critter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterHighTempBaby: {
        tag: "OilfloaterHighTempBaby",
        menu_order: 6.0,
        tags: [
          "Hoverer",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 363.15,
        low_temp_fatal: 348.15,
        high_temp_warning: 523.15,
        high_temp_fatal: 543.15,
        mass: 50.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 600000.0,
        calories_loss: -200.0,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarGasBaby: {
        tag: "StaterpillarGasBaby",
        menu_order: 10.0,
        tags: [
          "Walker",
          "Amphibious",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 263.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 343.15,
        high_temp_fatal: 363.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 1E+07,
        calories_loss: -3333.33325,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterDecorBaby: {
        tag: "OilfloaterDecorBaby",
        menu_order: 6.0,
        tags: [
          "Hoverer",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 268.15,
        high_temp_warning: 343.15,
        high_temp_fatal: 363.15,
        mass: 50.0,
        decor: 50.0,
        decor_radius: 7.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 600000.0,
        calories_loss: -200.0,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterBaby: {
        tag: "OilfloaterBaby",
        menu_order: 6.0,
        tags: [
          "Hoverer",
          "Creature",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 323.15,
        low_temp_fatal: 308.15,
        high_temp_warning: 413.15,
        high_temp_fatal: 433.15,
        mass: 50.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 600000.0,
        calories_loss: -200.0,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarLiquidBaby: {
        tag: "StaterpillarLiquidBaby",
        menu_order: 10.0,
        tags: [
          "Walker",
          "Amphibious",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 263.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 343.15,
        high_temp_fatal: 363.15,
        mass: 200.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 1E+07,
        calories_loss: -3333.33325,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      MoleDelicacyBaby: {
        tag: "MoleDelicacyBaby",
        menu_order: 7.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "Digger"
        ],
        hp: 25,
        low_temp_warning: 123.149994,
        low_temp_fatal: 73.1499939,
        high_temp_warning: 673.15,
        high_temp_fatal: 773.15,
        mass: 25.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 2.4E+07,
        calories_loss: -8000.0,
        milk_consummer: true,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      MoleBaby: {
        tag: "MoleBaby",
        menu_order: 7.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "Digger",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 123.149994,
        low_temp_fatal: 73.1499939,
        high_temp_warning: 673.15,
        high_temp_fatal: 773.15,
        mass: 25.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 4.8E+07,
        calories_loss: -8000.0,
        milk_consummer: true,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugPurpleBaby: {
        tag: "LightBugPurpleBaby",
        menu_order: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        low_temp_warning: 263.0,
        low_temp_fatal: 253.0,
        high_temp_warning: 313.0,
        high_temp_fatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decor_radius: 7.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 320000.0,
        calories_loss: -66.6666641,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugPinkBaby: {
        tag: "LightBugPinkBaby",
        menu_order: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        low_temp_warning: 263.0,
        low_temp_fatal: 253.0,
        high_temp_warning: 313.0,
        high_temp_fatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decor_radius: 7.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 320000.0,
        calories_loss: -66.6666641,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugOrangeBaby: {
        tag: "LightBugOrangeBaby",
        menu_order: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        low_temp_warning: 263.0,
        low_temp_fatal: 253.0,
        high_temp_warning: 313.0,
        high_temp_fatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decor_radius: 7.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 320000.0,
        calories_loss: -66.6666641,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugCrystalBaby: {
        tag: "LightBugCrystalBaby",
        menu_order: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        low_temp_warning: 263.0,
        low_temp_fatal: 253.0,
        high_temp_warning: 313.0,
        high_temp_fatal: 323.0,
        mass: 5.0,
        decor: 200.0,
        decor_radius: 8.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 320000.0,
        calories_loss: -66.6666641,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugBlueBaby: {
        tag: "LightBugBlueBaby",
        menu_order: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        low_temp_warning: 263.0,
        low_temp_fatal: 253.0,
        high_temp_warning: 313.0,
        high_temp_fatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decor_radius: 7.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 320000.0,
        calories_loss: -66.6666641,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugBlackBaby: {
        tag: "LightBugBlackBaby",
        menu_order: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        low_temp_warning: 263.0,
        low_temp_fatal: 253.0,
        high_temp_warning: 313.0,
        high_temp_fatal: 323.0,
        mass: 5.0,
        decor: 80.0,
        decor_radius: 7.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 320000.0,
        calories_loss: -66.6666641,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchVeggieBaby: {
        tag: "HatchVeggieBaby",
        menu_order: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 7000000.0,
        calories_loss: -1166.66663,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchHardBaby: {
        tag: "HatchHardBaby",
        menu_order: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 200,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 7000000.0,
        calories_loss: -1166.66663,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      SquirrelBaby: {
        tag: "SquirrelBaby",
        menu_order: 8.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        low_temp_warning: 283.15,
        low_temp_fatal: 243.15,
        high_temp_warning: 293.15,
        high_temp_fatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        age: 5.0,
        calories_max: 1000000.0,
        calories_loss: -166.666672,
        milk_consummer: true,
        space_per_critter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    }
  },
  plant: {
    cropSeed: {
      BasicFabricMaterialPlantSeed: {
        tag: "BasicFabricMaterialPlantSeed",
        menu_order: 177013.0,
        tags: [
          "WaterSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      BasicSingleHarvestPlantSeed: {
        tag: "BasicSingleHarvestPlantSeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      BeanPlantSeed: {
        tag: "BeanPlantSeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "PedestalDisplayable",
          "CookingIngredient"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      ColdBreatherSeed: {
        tag: "ColdBreatherSeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      ColdWheatSeed: {
        tag: "ColdWheatSeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "PedestalDisplayable",
          "CookingIngredient"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      CritterTrapPlantSeed: {
        tag: "CritterTrapPlantSeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      ForestTreeSeed: {
        tag: "ForestTreeSeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      GasGrassSeed: {
        tag: "GasGrassSeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      SaltPlantSeed: {
        tag: "SaltPlantSeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      PrickleFlowerSeed: {
        tag: "PrickleFlowerSeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      SeaLettuceSeed: {
        tag: "SeaLettuceSeed",
        menu_order: 177013.0,
        tags: [
          "WaterSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      SpiceVineSeed: {
        tag: "SpiceVineSeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      OxyfernSeed: {
        tag: "OxyfernSeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      SwampHarvestPlantSeed: {
        tag: "SwampHarvestPlantSeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      SwampLilySeed: {
        tag: "SwampLilySeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      WormPlantSeed: {
        tag: "WormPlantSeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      MushroomSeed: {
        tag: "MushroomSeed",
        menu_order: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      }
    },
    crop: {
      BasicFabricPlant: {
        tag: "BasicFabricPlant",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 295.15,
        low_temp_fatal: 248.15,
        high_temp_warning: 310.15,
        high_temp_fatal: 398.15,
        mass: 1.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        max_radiation: 4600.0,
        age: 2.0
      },
      BasicSingleHarvestPlant: {
        tag: "BasicSingleHarvestPlant",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 283.15,
        low_temp_fatal: 218.15,
        high_temp_warning: 303.15,
        high_temp_fatal: 398.15,
        mass: 1.0,
        decor: -10.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        max_radiation: 4600.0,
        age: 3.0
      },
      BeanPlant: {
        tag: "BeanPlant",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 248.15,
        low_temp_fatal: 198.15,
        high_temp_warning: 273.15,
        high_temp_fatal: 323.15,
        mass: 2.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        max_radiation: 9800.0,
        age: 21.0
      },
      ColdWheat: {
        tag: "ColdWheat",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 218.15,
        low_temp_fatal: 118.149994,
        high_temp_warning: 278.15,
        high_temp_fatal: 358.15,
        mass: 1.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        max_radiation: 12200.0,
        age: 18.0
      },
      CritterTrapPlant: {
        tag: "CritterTrapPlant",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 183.0,
        low_temp_fatal: 173.0,
        high_temp_warning: 273.0,
        high_temp_fatal: 283.0,
        mass: 4.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        max_radiation: 2200.0,
        age: 30.0,
        trap_critters: [
          "Walker",
          "Hoverer"
        ]
      },
      ForestTree: {
        tag: "ForestTree",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 288.15,
        low_temp_fatal: 258.15,
        high_temp_warning: 313.15,
        high_temp_fatal: 448.15,
        mass: 2.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        max_radiation: 9800.0,
        age: 4.5
      },
      GasGrass: {
        tag: "GasGrass",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 0.0,
        low_temp_fatal: 218.15,
        high_temp_warning: 348.15,
        high_temp_fatal: 373.15,
        mass: 1.0,
        decor: 25.0,
        decor_radius: 4.0,
        primary_element: "Creature",
        max_radiation: 12200.0,
        age: 4.0,
        min_light: 10000.0
      },
      SaltPlant: {
        tag: "SaltPlant",
        menu_order: 177013.0,
        tags: [
          "Hanging",
          "Plant"
        ],
        low_temp_warning: 248.15,
        low_temp_fatal: 198.15,
        high_temp_warning: 323.15,
        high_temp_fatal: 393.15,
        mass: 2.0,
        decor: -10.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        max_radiation: 7400.0,
        age: 6.0
      },
      PrickleFlower: {
        tag: "PrickleFlower",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 278.15,
        low_temp_fatal: 218.15,
        high_temp_warning: 303.15,
        high_temp_fatal: 398.15,
        mass: 1.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        max_radiation: 4600.0,
        age: 6.0,
        min_light: 200.0
      },
      SeaLettuce: {
        tag: "SeaLettuce",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 295.15,
        low_temp_fatal: 248.15,
        high_temp_warning: 338.15,
        high_temp_fatal: 398.15,
        mass: 1.0,
        decor: 10.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        max_radiation: 7400.0,
        age: 12.0
      },
      SpiceVine: {
        tag: "SpiceVine",
        menu_order: 177013.0,
        tags: [
          "Hanging",
          "Plant"
        ],
        low_temp_warning: 308.15,
        low_temp_fatal: 258.15,
        high_temp_warning: 358.15,
        high_temp_fatal: 448.15,
        mass: 2.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        max_radiation: 9800.0,
        age: 8.0
      },
      SuperWormPlant: {
        tag: "SuperWormPlant",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 288.15,
        low_temp_fatal: 273.15,
        high_temp_warning: 323.15,
        high_temp_fatal: 373.15,
        mass: 1.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        max_radiation: 9800.0,
        age: 8.0
      },
      SwampHarvestPlant: {
        tag: "SwampHarvestPlant",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 283.15,
        low_temp_fatal: 218.15,
        high_temp_warning: 303.15,
        high_temp_fatal: 398.15,
        mass: 1.0,
        decor: -10.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        max_radiation: 4600.0,
        age: 6.6
      },
      SwampLily: {
        tag: "SwampLily",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 308.15,
        low_temp_fatal: 258.15,
        high_temp_warning: 358.15,
        high_temp_fatal: 448.15,
        mass: 1.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        max_radiation: 4600.0,
        age: 12.0
      },
      WormPlant: {
        tag: "WormPlant",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 288.15,
        low_temp_fatal: 273.15,
        high_temp_warning: 323.15,
        high_temp_fatal: 373.15,
        mass: 1.0,
        decor: -5.0,
        decor_radius: 1.0,
        primary_element: "Creature",
        max_radiation: 9800.0,
        age: 4.0
      },
      MushroomPlant: {
        tag: "MushroomPlant",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 278.15,
        low_temp_fatal: 228.15,
        high_temp_warning: 308.15,
        high_temp_fatal: 398.15,
        mass: 1.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        max_radiation: 4600.0,
        age: 7.5
      }
    },
    forage: {
      BasicForagePlantPlanted: {
        tag: "BasicForagePlantPlanted",
        menu_order: 177013.0,
        tags: [],
        mass: 100.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature"
      },
      ForestForagePlantPlanted: {
        tag: "ForestForagePlantPlanted",
        menu_order: 177013.0,
        tags: [],
        mass: 100.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature"
      },
      SwampForagePlantPlanted: {
        tag: "SwampForagePlantPlanted",
        menu_order: 177013.0,
        tags: [],
        mass: 100.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature"
      }
    },
    decorSeed: {
      CactusPlantSeed: {
        tag: "CactusPlantSeed",
        menu_order: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      CylindricaSeed: {
        tag: "CylindricaSeed",
        menu_order: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      EvilFlowerSeed: {
        tag: "EvilFlowerSeed",
        menu_order: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      BulbPlantSeed: {
        tag: "BulbPlantSeed",
        menu_order: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      PrickleGrassSeed: {
        tag: "PrickleGrassSeed",
        menu_order: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      WineCupsSeed: {
        tag: "WineCupsSeed",
        menu_order: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      ToePlantSeed: {
        tag: "ToePlantSeed",
        menu_order: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      },
      LeafyPlantSeed: {
        tag: "LeafyPlantSeed",
        menu_order: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primary_element: "Creature"
      }
    },
    decor: {
      CactusPlant: {
        tag: "CactusPlant",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 273.15,
        low_temp_fatal: 200.0,
        high_temp_warning: 373.15,
        high_temp_fatal: 400.0,
        mass: 1.0,
        decor: 25.0,
        decor_radius: 4.0,
        primary_element: "Creature",
        max_radiation: 2200.0
      },
      ColdBreather: {
        tag: "ColdBreather",
        menu_order: 177013.0,
        tags: [],
        low_temp_warning: 213.15,
        low_temp_fatal: 183.15,
        high_temp_warning: 368.15,
        high_temp_fatal: 463.15,
        mass: 400.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature"
      },
      Cylindrica: {
        tag: "Cylindrica",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 293.15,
        low_temp_fatal: 288.15,
        high_temp_warning: 323.15,
        high_temp_fatal: 373.15,
        mass: 1.0,
        decor: 25.0,
        decor_radius: 4.0,
        primary_element: "Creature",
        max_radiation: 2200.0
      },
      EvilFlower: {
        tag: "EvilFlower",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 258.15,
        low_temp_fatal: 168.15,
        high_temp_warning: 513.15,
        high_temp_fatal: 563.15,
        mass: 1.0,
        decor: 80.0,
        decor_radius: 7.0,
        primary_element: "Creature",
        max_radiation: 12200.0
      },
      BulbPlant: {
        tag: "BulbPlant",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 293.15,
        low_temp_fatal: 288.0,
        high_temp_warning: 313.15,
        high_temp_fatal: 333.15,
        mass: 1.0,
        decor: 15.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        max_radiation: 2200.0
      },
      PrickleGrass: {
        tag: "PrickleGrass",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 283.15,
        low_temp_fatal: 218.15,
        high_temp_warning: 303.15,
        high_temp_fatal: 398.15,
        mass: 1.0,
        decor: 25.0,
        decor_radius: 4.0,
        primary_element: "Creature",
        max_radiation: 900.0
      },
      Oxyfern: {
        tag: "Oxyfern",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 273.15,
        low_temp_fatal: 253.15,
        high_temp_warning: 313.15,
        high_temp_fatal: 373.15,
        mass: 1.0,
        decor: -10.0,
        decor_radius: 2.0,
        primary_element: "Creature",
        max_radiation: 2200.0
      },
      WineCups: {
        tag: "WineCups",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 283.15,
        low_temp_fatal: 218.15,
        high_temp_warning: 303.15,
        high_temp_fatal: 398.15,
        mass: 1.0,
        decor: 25.0,
        decor_radius: 4.0,
        primary_element: "Creature",
        max_radiation: 900.0
      },
      ToePlant: {
        tag: "ToePlant",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 183.0,
        low_temp_fatal: 173.0,
        high_temp_warning: 273.0,
        high_temp_fatal: 283.0,
        mass: 1.0,
        decor: 25.0,
        decor_radius: 4.0,
        primary_element: "Creature",
        max_radiation: 2200.0
      },
      LeafyPlant: {
        tag: "LeafyPlant",
        menu_order: 177013.0,
        tags: [
          "Plant"
        ],
        low_temp_warning: 293.15,
        low_temp_fatal: 288.0,
        high_temp_warning: 323.15,
        high_temp_fatal: 373.0,
        mass: 1.0,
        decor: 25.0,
        decor_radius: 4.0,
        primary_element: "Creature",
        max_radiation: 2200.0
      }
    }
  },
  geyser: {
    geyser: {
      GeyserGeneric_steam: {
        tag: "GeyserGeneric_steam",
        menu_order: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_hot_steam: {
        tag: "GeyserGeneric_hot_steam",
        menu_order: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_hot_water: {
        tag: "GeyserGeneric_hot_water",
        menu_order: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_slush_water: {
        tag: "GeyserGeneric_slush_water",
        menu_order: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_filthy_water: {
        tag: "GeyserGeneric_filthy_water",
        menu_order: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_slush_salt_water: {
        tag: "GeyserGeneric_slush_salt_water",
        menu_order: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_salt_water: {
        tag: "GeyserGeneric_salt_water",
        menu_order: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_small_volcano: {
        tag: "GeyserGeneric_small_volcano",
        menu_order: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_big_volcano: {
        tag: "GeyserGeneric_big_volcano",
        menu_order: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_liquid_co2: {
        tag: "GeyserGeneric_liquid_co2",
        menu_order: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_hot_co2: {
        tag: "GeyserGeneric_hot_co2",
        menu_order: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_hot_hydrogen: {
        tag: "GeyserGeneric_hot_hydrogen",
        menu_order: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_hot_po2: {
        tag: "GeyserGeneric_hot_po2",
        menu_order: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_slimy_po2: {
        tag: "GeyserGeneric_slimy_po2",
        menu_order: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_chlorine_gas: {
        tag: "GeyserGeneric_chlorine_gas",
        menu_order: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_methane: {
        tag: "GeyserGeneric_methane",
        menu_order: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_molten_copper: {
        tag: "GeyserGeneric_molten_copper",
        menu_order: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_molten_iron: {
        tag: "GeyserGeneric_molten_iron",
        menu_order: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_molten_gold: {
        tag: "GeyserGeneric_molten_gold",
        menu_order: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_molten_aluminum: {
        tag: "GeyserGeneric_molten_aluminum",
        menu_order: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_molten_tungsten: {
        tag: "GeyserGeneric_molten_tungsten",
        menu_order: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_molten_niobium: {
        tag: "GeyserGeneric_molten_niobium",
        menu_order: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_molten_cobalt: {
        tag: "GeyserGeneric_molten_cobalt",
        menu_order: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_oil_drip: {
        tag: "GeyserGeneric_oil_drip",
        menu_order: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      GeyserGeneric_liquid_sulfur: {
        tag: "GeyserGeneric_liquid_sulfur",
        menu_order: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "Katairite"
      },
      OilWell: {
        tag: "OilWell",
        menu_order: 177013.0,
        tags: [
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "Solid",
          "BuildableRaw"
        ],
        mass: 2000.0,
        decor: 10.0,
        decor_radius: 2.0,
        primary_element: "SedimentaryRock"
      }
    }
  },
  equipment: {
    suit: {
      Atmo_Suit: {
        tag: "Atmo_Suit",
        menu_order: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable",
          "AirtightSuit"
        ],
        mass: 200.0,
        primary_element: "Dirt"
      },
      Jet_Suit: {
        tag: "Jet_Suit",
        menu_order: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable",
          "AirtightSuit"
        ],
        mass: 200.0,
        primary_element: "Steel"
      },
      Lead_Suit: {
        tag: "Lead_Suit",
        menu_order: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable",
          "AirtightSuit"
        ],
        mass: 200.0,
        primary_element: "Dirt"
      },
      Oxygen_Mask: {
        tag: "Oxygen_Mask",
        menu_order: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 15.0,
        primary_element: "Dirt"
      }
    },
    worn: {
      Worn_Atmo_Suit: {
        tag: "Worn_Atmo_Suit",
        menu_order: 177013.0,
        tags: [
          "Suit",
          "Clothes",
          "PedestalDisplayable",
          "AirtightSuit"
        ],
        mass: 200.0,
        primary_element: "Creature"
      },
      Worn_Jet_Suit: {
        tag: "Worn_Jet_Suit",
        menu_order: 177013.0,
        tags: [
          "Suit",
          "Clothes"
        ],
        mass: 200.0,
        primary_element: "Creature"
      },
      Worn_Lead_Suit: {
        tag: "Worn_Lead_Suit",
        menu_order: 177013.0,
        tags: [
          "Suit",
          "Clothes"
        ],
        mass: 200.0,
        primary_element: "Creature"
      },
      Worn_Oxygen_Mask: {
        tag: "Worn_Oxygen_Mask",
        menu_order: 177013.0,
        tags: [
          "Suit",
          "Clothes"
        ],
        mass: 15.0,
        primary_element: "Creature"
      }
    },
    clothes: {
      Cool_Vest: {
        tag: "Cool_Vest",
        menu_order: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primary_element: "Carbon"
      },
      CustomClothing: {
        tag: "CustomClothing",
        menu_order: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 7.0,
        primary_element: "Carbon"
      },
      Funky_Vest: {
        tag: "Funky_Vest",
        menu_order: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primary_element: "Carbon"
      },
      SleepClinicPajamas: {
        tag: "SleepClinicPajamas",
        menu_order: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primary_element: "Carbon"
      },
      Warm_Vest: {
        tag: "Warm_Vest",
        menu_order: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primary_element: "Carbon"
      }
    }
  }
}