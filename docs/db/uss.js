export const db = {
  Building: {
    medical: {
      AdvancedDoctorStation: {
        tag: "AdvancedDoctorStation",
        menuOrder: 6.0,
        tags: [
          "Clinic"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          480.0
        ],
        externalHeat: 0.25,
        internalHeat: 0.5,
        width: 2,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Apothecary: {
        tag: "Apothecary",
        menuOrder: 4.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.25,
        internalHeat: 0.5,
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      DecontaminationShower: {
        tag: "DecontaminationShower",
        menuOrder: 3.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal",
          "Lead"
        ],
        width: 2,
        height: 4,
        hp: 250,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 900.0,
        floodThreshold: 0.35,
        decor: -20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      DoctorStation: {
        tag: "DoctorStation",
        menuOrder: 5.0,
        tags: [
          "Clinic"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 3,
        height: 2,
        hp: 10,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Grave: {
        tag: "Grave",
        menuOrder: 9.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 800.0,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      HandSanitizer: {
        tag: "HandSanitizer",
        menuOrder: 2.0,
        tags: [
          "WashStation",
          "AdvancedWashStation"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MassageTable: {
        tag: "MassageTable",
        menuOrder: 8.0,
        tags: [
          "DeStressingBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.125,
        internalHeat: 0.5,
        width: 2,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      MedicalCot: {
        tag: "MedicalCot",
        menuOrder: 7.0,
        tags: [
          "Clinic",
          "BedType"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 3,
        height: 2,
        hp: 10,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      WashBasin: {
        tag: "WashBasin",
        menuOrder: 0.0,
        tags: [
          "WashStation"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      WashSink: {
        tag: "WashSink",
        menuOrder: 1.0,
        tags: [
          "WashStation",
          "AdvancedWashStation"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    equipment: {
      AdvancedResearchCenter: {
        tag: "AdvancedResearchCenter",
        menuOrder: 1.0,
        tags: [
          "ScienceBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      ArtifactAnalysisStation: {
        tag: "ArtifactAnalysisStation",
        menuOrder: 13.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          480.0
        ],
        internalHeat: 1.0,
        width: 4,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      ClothingAlterationStation: {
        tag: "ClothingAlterationStation",
        menuOrder: 17.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          240.0
        ],
        width: 4,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      ClothingFabricator: {
        tag: "ClothingFabricator",
        menuOrder: 16.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          240.0
        ],
        width: 4,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      CraftingTable: {
        tag: "CraftingTable",
        menuOrder: 15.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          60.0
        ],
        width: 2,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      DLC1CosmicResearchCenter: {
        tag: "DLC1CosmicResearchCenter",
        menuOrder: 4.0,
        tags: [
          "ScienceBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 4,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      FarmStation: {
        tag: "FarmStation",
        menuOrder: 7.0,
        tags: [
          "FarmStationType"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 30,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      GeneticAnalysisStation: {
        tag: "GeneticAnalysisStation",
        menuOrder: 8.0,
        tags: [
          "ScienceBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          480.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 7,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      GeoTuner: {
        tag: "GeoTuner",
        menuOrder: 5.0,
        tags: [
          "ScienceBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 4,
        height: 3,
        hp: 30,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      JetSuitLocker: {
        tag: "JetSuitLocker",
        menuOrder: 24.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          120.0
        ],
        width: 2,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      JetSuitMarker: {
        tag: "JetSuitMarker",
        menuOrder: 23.0,
        tags: [
          "JetSuitBlocker"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 2,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LeadSuitLocker: {
        tag: "LeadSuitLocker",
        menuOrder: 26.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          120.0
        ],
        width: 2,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LeadSuitMarker: {
        tag: "LeadSuitMarker",
        menuOrder: 25.0,
        tags: [
          "JetSuitBlocker"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 2,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MilkingStation: {
        tag: "MilkingStation",
        menuOrder: 11.0,
        tags: [
          "RanchStationType"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 2,
        height: 4,
        hp: 30,
        mass: 600.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true,
        workTime: 20.0
      },
      MissileFabricator: {
        tag: "MissileFabricator",
        menuOrder: 14.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          960.0
        ],
        internalHeat: 8.0,
        width: 5,
        height: 4,
        hp: 250,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      NuclearResearchCenter: {
        tag: "NuclearResearchCenter",
        menuOrder: 2.0,
        tags: [
          "ScienceBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 5,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      OrbitalResearchCenter: {
        tag: "OrbitalResearchCenter",
        menuOrder: 3.0,
        tags: [
          "ScienceBuilding",
          "RocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Plastic"
        ],
        onlyInRocket: true,
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.125,
        internalHeat: 0.5,
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      OxygenMaskLocker: {
        tag: "OxygenMaskLocker",
        menuOrder: 20.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      OxygenMaskMarker: {
        tag: "OxygenMaskMarker",
        menuOrder: 19.0,
        tags: [
          "JetSuitBlocker"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      PowerControlStation: {
        tag: "PowerControlStation",
        menuOrder: 6.0,
        tags: [
          "PowerStation",
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 2,
        height: 4,
        hp: 30,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      RanchStation: {
        tag: "RanchStation",
        menuOrder: 9.0,
        tags: [
          "RanchStationType"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 30,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true,
        workTime: 12.0
      },
      ResearchCenter: {
        tag: "ResearchCenter",
        menuOrder: 0.0,
        tags: [
          "ScienceBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.125,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      ResetSkillsStation: {
        tag: "ResetSkillsStation",
        menuOrder: 12.0,
        tags: [
          "IndustrialMachinery",
          "NotRoomAssignable"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          480.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      ShearingStation: {
        tag: "ShearingStation",
        menuOrder: 10.0,
        tags: [
          "RanchStationType"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.125,
        internalHeat: 0.5,
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true,
        workTime: 12.0
      },
      SuitFabricator: {
        tag: "SuitFabricator",
        menuOrder: 18.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          480.0
        ],
        width: 4,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      SuitLocker: {
        tag: "SuitLocker",
        menuOrder: 22.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          120.0
        ],
        width: 1,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SuitMarker: {
        tag: "SuitMarker",
        menuOrder: 21.0,
        tags: [
          "JetSuitBlocker"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    food: {
      AirBorneCritterCondo: {
        tag: "AirBorneCritterCondo",
        menuOrder: 24.0,
        tags: [
          "RanchStationType"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnCeiling",
        materialCategory: [
          "Plastic"
        ],
        rotations: "FlipH",
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      CookingStation: {
        tag: "CookingStation",
        menuOrder: 1.0,
        tags: [
          "CookTop"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 3,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      CreatureFeeder: {
        tag: "CreatureFeeder",
        menuOrder: 14.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      CritterCondo: {
        tag: "CritterCondo",
        menuOrder: 22.0,
        tags: [
          "RanchStationType"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw",
          "BuildingFiber"
        ],
        rotations: "FlipH",
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 210.0,
        floodThreshold: 0.35,
        decor: 20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      CritterDropOff: {
        tag: "CritterDropOff",
        menuOrder: 12.0,
        tags: [
          "CreatureRelocator"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      CritterPickUp: {
        tag: "CritterPickUp",
        menuOrder: 11.0,
        tags: [
          "CreatureRelocator"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      EggCracker: {
        tag: "EggCracker",
        menuOrder: 18.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      EggIncubator: {
        tag: "EggIncubator",
        menuOrder: 17.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 363.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      FarmTile: {
        tag: "FarmTile",
        menuOrder: 7.0,
        tags: [
          "FarmTiles"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
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
        menuOrder: 13.0,
        tags: [
          "CreatureRelocator"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      FishFeeder: {
        tag: "FishFeeder",
        menuOrder: 15.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      FoodDehydrator: {
        tag: "FoodDehydrator",
        menuOrder: 4.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        internalHeat: 4.0,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 300.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      FoodRehydrator: {
        tag: "FoodRehydrator",
        menuOrder: 5.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        electrityConsummation: [
          60.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 150.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      GourmetCookingStation: {
        tag: "GourmetCookingStation",
        menuOrder: 2.0,
        tags: [
          "CookTop"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 1.0,
        internalHeat: 8.0,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      HydroponicFarm: {
        tag: "HydroponicFarm",
        menuOrder: 8.0,
        tags: [
          "FarmTiles"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipV",
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      MicrobeMusher: {
        tag: "MicrobeMusher",
        menuOrder: 0.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.5,
        internalHeat: 2.0,
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      MilkFeeder: {
        tag: "MilkFeeder",
        menuOrder: 16.0,
        tags: [
          "RanchStationType"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      PlanterBox: {
        tag: "PlanterBox",
        menuOrder: 6.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Farmable"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      RationBox: {
        tag: "RationBox",
        menuOrder: 9.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 2,
        height: 2,
        hp: 10,
        mass: 400.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      Refrigerator: {
        tag: "Refrigerator",
        menuOrder: 10.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        electrityConsummation: [
          120.0,
          20.0
        ],
        internalHeat: 0.125,
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SpiceGrinder: {
        tag: "SpiceGrinder",
        menuOrder: 3.0,
        tags: [
          "SpiceStation"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 30,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      UnderwaterCritterCondo: {
        tag: "UnderwaterCritterCondo",
        menuOrder: 23.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Plastic"
        ],
        rotations: "FlipH",
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: 20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      CreatureAirTrap: {
        tag: "CreatureAirTrap",
        menuOrder: 21.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      CreatureGroundTrap: {
        tag: "CreatureGroundTrap",
        menuOrder: 19.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      WaterTrap: {
        tag: "WaterTrap",
        menuOrder: 20.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      }
    },
    utilities: {
      AirConditioner: {
        tag: "AirConditioner",
        menuOrder: 4.0,
        tags: [],
        thermalConductivity: 5.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          240.0
        ],
        width: 2,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      IceCooledFan: {
        tag: "IceCooledFan",
        menuOrder: 2.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        externalHeat: -24.0,
        internalHeat: -8.0,
        width: 2,
        height: 2,
        hp: 30,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      IceMachine: {
        tag: "IceMachine",
        menuOrder: 3.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          60.0
        ],
        externalHeat: 4.0,
        internalHeat: 12.0,
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      LiquidConditioner: {
        tag: "LiquidConditioner",
        menuOrder: 5.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          1200.0
        ],
        width: 2,
        height: 2,
        hp: 100,
        highTempWarning: 398.15,
        highTempFatal: 533.15,
        mass: 1200.0,
        deconstructable: true,
        enableable: true
      },
      LiquidHeater: {
        tag: "LiquidHeater",
        menuOrder: 1.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          960.0
        ],
        externalHeat: 4000.0,
        internalHeat: 64.0,
        width: 4,
        height: 1,
        hp: 30,
        highTempWarning: 398.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      OilWellCap: {
        tag: "OilWellCap",
        menuOrder: 7.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "BuildingAttachPoint",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          240.0
        ],
        internalHeat: 2.0,
        width: 4,
        height: 4,
        hp: 100,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      OreScrubber: {
        tag: "OreScrubber",
        menuOrder: 6.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SpaceHeater: {
        tag: "SpaceHeater",
        menuOrder: 0.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 2.0,
        internalHeat: 16.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 398.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SweepBotStation: {
        tag: "SweepBotStation",
        menuOrder: 9.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          240.0
        ],
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 75.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      ThermalBlock: {
        tag: "ThermalBlock",
        menuOrder: 8.0,
        tags: [
          "Backwall"
        ],
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
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
        menuOrder: 3.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        electrityConsummation: [
          5.0
        ],
        externalHeat: 0.125,
        internalHeat: 0.5,
        width: 1,
        height: 1,
        hp: 30,
        mass: 100.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      AlgaeHabitat: {
        tag: "AlgaeHabitat",
        menuOrder: 2.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Farmable"
        ],
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      CO2Scrubber: {
        tag: "CO2Scrubber",
        menuOrder: 4.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          120.0
        ],
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      Electrolyzer: {
        tag: "Electrolyzer",
        menuOrder: 5.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MineralDeoxidizer: {
        tag: "MineralDeoxidizer",
        menuOrder: 0.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.5,
        internalHeat: 1.0,
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      RustDeoxidizer: {
        tag: "RustDeoxidizer",
        menuOrder: 6.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.125,
        internalHeat: 1.0,
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SublimationStation: {
        tag: "SublimationStation",
        menuOrder: 1.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.5,
        internalHeat: 1.0,
        width: 2,
        height: 1,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    refining: {
      AlgaeDistillery: {
        tag: "AlgaeDistillery",
        menuOrder: 4.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.5,
        internalHeat: 1.0,
        width: 3,
        height: 4,
        hp: 100,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      Chlorinator: {
        tag: "Chlorinator",
        menuOrder: 14.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          480.0
        ],
        externalHeat: 1.0,
        internalHeat: 2.0,
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Compost: {
        tag: "Compost",
        menuOrder: 0.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        externalHeat: 0.125,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      DiamondPress: {
        tag: "DiamondPress",
        menuOrder: 16.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        internalHeat: 16.0,
        width: 3,
        height: 5,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      EthanolDistillery: {
        tag: "EthanolDistillery",
        menuOrder: 5.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 4,
        height: 3,
        hp: 100,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      FertilizerMaker: {
        tag: "FertilizerMaker",
        menuOrder: 3.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 1.0,
        internalHeat: 2.0,
        width: 4,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      GlassForge: {
        tag: "GlassForge",
        menuOrder: 10.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        electrityConsummation: [
          1200.0
        ],
        internalHeat: 16.0,
        width: 5,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Kiln: {
        tag: "Kiln",
        menuOrder: 7.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        externalHeat: 16.0,
        internalHeat: 4.0,
        width: 2,
        height: 2,
        hp: 100,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MetalRefinery: {
        tag: "MetalRefinery",
        menuOrder: 9.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        electrityConsummation: [
          1200.0
        ],
        internalHeat: 16.0,
        width: 3,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      MilkFatSeparator: {
        tag: "MilkFatSeparator",
        menuOrder: 17.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          480.0
        ],
        internalHeat: 8.0,
        width: 4,
        height: 4,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
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
        menuOrder: 18.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        internalHeat: 2.0,
        width: 2,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      OilRefinery: {
        tag: "OilRefinery",
        menuOrder: 11.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          480.0
        ],
        externalHeat: 2.0,
        internalHeat: 8.0,
        width: 4,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      OxyliteRefinery: {
        tag: "OxyliteRefinery",
        menuOrder: 13.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        electrityConsummation: [
          1200.0
        ],
        externalHeat: 8.0,
        internalHeat: 4.0,
        width: 3,
        height: 4,
        hp: 100,
        mass: 900.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      Polymerizer: {
        tag: "Polymerizer",
        menuOrder: 12.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.5,
        internalHeat: 32.0,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      RockCrusher: {
        tag: "RockCrusher",
        menuOrder: 6.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        internalHeat: 16.0,
        width: 4,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      SludgePress: {
        tag: "SludgePress",
        menuOrder: 8.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        electrityConsummation: [
          120.0
        ],
        internalHeat: 4.0,
        width: 4,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SupermaterialRefinery: {
        tag: "SupermaterialRefinery",
        menuOrder: 15.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          1600.0
        ],
        internalHeat: 16.0,
        width: 4,
        height: 5,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      WaterPurifier: {
        tag: "WaterPurifier",
        menuOrder: 1.0,
        tags: [
          "IndustrialMachinery",
          "OverlayBackLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          120.0
        ],
        internalHeat: 4.0,
        width: 4,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Desalinator: {
        tag: "Desalinator",
        menuOrder: 2.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          480.0
        ],
        internalHeat: 8.0,
        width: 4,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      }
    },
    furniture: {
      ArcadeMachine: {
        tag: "ArcadeMachine",
        menuOrder: 9.0,
        tags: [
          "RecBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          1200.0
        ],
        internalHeat: 2.0,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      BeachChair: {
        tag: "BeachChair",
        menuOrder: 16.0,
        tags: [
          "RecBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw",
          "BuildingFiber"
        ],
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 402.0,
        floodThreshold: 0.35,
        decor: 25.0,
        decorRadius: 5.0,
        deconstructable: true,
        enableable: true
      },
      Bed: {
        tag: "Bed",
        menuOrder: 0.0,
        tags: [
          "BedType"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 2,
        height: 2,
        hp: 10,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Canvas: {
        tag: "Canvas",
        menuOrder: 31.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal",
          "BuildingFiber"
        ],
        rotations: "FlipH",
        width: 2,
        height: 2,
        hp: 30,
        mass: 401.0,
        decor: 10.0,
        decorRadius: 6.0,
        deconstructable: true,
        enableable: true
      },
      CanvasTall: {
        tag: "CanvasTall",
        menuOrder: 33.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal",
          "BuildingFiber"
        ],
        rotations: "FlipH",
        width: 2,
        height: 3,
        hp: 30,
        mass: 401.0,
        decor: 15.0,
        decorRadius: 6.0,
        deconstructable: true,
        enableable: true
      },
      CanvasWide: {
        tag: "CanvasWide",
        menuOrder: 32.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal",
          "BuildingFiber"
        ],
        rotations: "FlipH",
        width: 3,
        height: 2,
        hp: 30,
        mass: 401.0,
        decor: 15.0,
        decorRadius: 6.0,
        deconstructable: true,
        enableable: true
      },
      CeilingLight: {
        tag: "CeilingLight",
        menuOrder: 4.0,
        tags: [
          "LightSource"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnCeiling",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          10.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 1,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      CornerMoulding: {
        tag: "CornerMoulding",
        menuOrder: 30.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "InCorner",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "FlipH",
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      CrownMoulding: {
        tag: "CrownMoulding",
        menuOrder: 29.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnCeiling",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      DiningTable: {
        tag: "DiningTable",
        menuOrder: 6.0,
        tags: [
          "MessTable"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      EspressoMachine: {
        tag: "EspressoMachine",
        menuOrder: 10.0,
        tags: [
          "RecBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          480.0
        ],
        internalHeat: 1.0,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      FloorLamp: {
        tag: "FloorLamp",
        menuOrder: 3.0,
        tags: [
          "LightSource"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          8.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      FlowerVase: {
        tag: "FlowerVase",
        menuOrder: 20.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
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
        menuOrder: 22.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnCeiling",
        materialCategory: [
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
        menuOrder: 23.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnCeiling",
        materialCategory: [
          "Transparent"
        ],
        width: 1,
        height: 2,
        hp: 10,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      FlowerVaseWall: {
        tag: "FlowerVaseWall",
        menuOrder: 21.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnWall",
        materialCategory: [
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
        menuOrder: 11.0,
        tags: [
          "RecBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal",
          "BuildingWood"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 1.0,
        internalHeat: 4.0,
        width: 5,
        height: 2,
        hp: 30,
        highTempWarning: 310.85,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      IceSculpture: {
        tag: "IceSculpture",
        menuOrder: 26.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Ice"
        ],
        rotations: "FlipH",
        width: 2,
        height: 2,
        hp: 10,
        mass: 400.0,
        decor: 20.0,
        decorRadius: 8.0,
        deconstructable: true,
        enableable: true
      },
      ItemPedestal: {
        tag: "ItemPedestal",
        menuOrder: 34.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 2,
        hp: 10,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      Juicer: {
        tag: "Juicer",
        menuOrder: 14.0,
        tags: [
          "RecBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        internalHeat: 0.5,
        width: 3,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LadderBed: {
        tag: "LadderBed",
        menuOrder: 2.0,
        tags: [
          "BedType"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloorOrBuildingAttachPoint",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 2,
        height: 2,
        hp: 10,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      LuxuryBed: {
        tag: "LuxuryBed",
        menuOrder: 1.0,
        tags: [
          "BedType",
          "LuxuryBedType"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Plastic"
        ],
        width: 4,
        height: 2,
        hp: 10,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      MarbleSculpture: {
        tag: "MarbleSculpture",
        menuOrder: 27.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "PreciousRock"
        ],
        rotations: "FlipH",
        width: 2,
        height: 3,
        hp: 10,
        mass: 400.0,
        decor: 20.0,
        decorRadius: 8.0,
        deconstructable: true,
        enableable: true
      },
      MechanicalSurfboard: {
        tag: "MechanicalSurfboard",
        menuOrder: 12.0,
        tags: [
          "RecBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          480.0
        ],
        internalHeat: 1.0,
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MetalSculpture: {
        tag: "MetalSculpture",
        menuOrder: 28.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 10,
        mass: 400.0,
        decor: 20.0,
        decorRadius: 8.0,
        deconstructable: true,
        enableable: true
      },
      MonumentBottom: {
        tag: "MonumentBottom",
        menuOrder: 35.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Steel",
          "Obsidian"
        ],
        rotations: "FlipH",
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 10000.0,
        decor: 10.0,
        decorRadius: 5.0,
        deconstructable: true,
        enableable: true
      },
      MonumentMiddle: {
        tag: "MonumentMiddle",
        menuOrder: 36.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "BuildingAttachPoint",
        materialCategory: [
          "Ceramic",
          "Polypropylene",
          "Steel"
        ],
        rotations: "FlipH",
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 10000.0,
        decor: 10.0,
        decorRadius: 5.0,
        deconstructable: true,
        enableable: true
      },
      MonumentTop: {
        tag: "MonumentTop",
        menuOrder: 37.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "BuildingAttachPoint",
        materialCategory: [
          "Glass",
          "Diamond",
          "Steel"
        ],
        rotations: "FlipH",
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 10000.0,
        decor: 10.0,
        decorRadius: 5.0,
        deconstructable: true,
        enableable: true
      },
      ParkSign: {
        tag: "ParkSign",
        menuOrder: 38.0,
        tags: [
          "Park"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableAny"
        ],
        width: 1,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Phonobox: {
        tag: "Phonobox",
        menuOrder: 8.0,
        tags: [
          "RecBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          960.0
        ],
        internalHeat: 1.0,
        width: 5,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      PixelPack: {
        tag: "PixelPack",
        menuOrder: 18.0,
        tags: [
          "Backwall",
          "OverlayBackLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "Glass",
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          10.0
        ],
        width: 4,
        height: 1,
        hp: 30,
        mass: 125.0,
        decor: 20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      Sauna: {
        tag: "Sauna",
        menuOrder: 13.0,
        tags: [
          "RecBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal",
          "BuildingWood"
        ],
        electrityConsummation: [
          60.0
        ],
        internalHeat: 0.5,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Sculpture: {
        tag: "Sculpture",
        menuOrder: 25.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 30,
        mass: 400.0,
        decor: 10.0,
        decorRadius: 8.0,
        deconstructable: true,
        enableable: true
      },
      SmallSculpture: {
        tag: "SmallSculpture",
        menuOrder: 24.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "FlipH",
        width: 1,
        height: 2,
        hp: 10,
        mass: 200.0,
        decor: 5.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      SodaFountain: {
        tag: "SodaFountain",
        menuOrder: 15.0,
        tags: [
          "RecBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          480.0
        ],
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SunLamp: {
        tag: "SunLamp",
        menuOrder: 5.0,
        tags: [
          "LightSource"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal",
          "Glass"
        ],
        electrityConsummation: [
          960.0
        ],
        externalHeat: 1.0,
        internalHeat: 4.0,
        width: 2,
        height: 4,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 250.0,
        floodThreshold: 0.35,
        decor: -20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      Telephone: {
        tag: "Telephone",
        menuOrder: 19.0,
        tags: [
          "RecBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      VerticalWindTunnel: {
        tag: "VerticalWindTunnel",
        menuOrder: 17.0,
        tags: [
          "RecBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Plastic"
        ],
        electrityConsummation: [
          1200.0
        ],
        internalHeat: 2.0,
        width: 5,
        height: 6,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 1200.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      WaterCooler: {
        tag: "WaterCooler",
        menuOrder: 7.0,
        tags: [
          "RecBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 2,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    RocketModule: {
      ArtifactCargoBay: {
        tag: "ArtifactCargoBay",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 3,
        height: 1,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      BatteryModule: {
        tag: "BatteryModule",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 2,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true
      },
      CO2Engine: {
        tag: "CO2Engine",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 2,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      },
      GasCargoBayCluster: {
        tag: "GasCargoBayCluster",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 1000.0,
        deconstructable: true,
        enableable: true
      },
      GasCargoBaySmall: {
        tag: "GasCargoBaySmall",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      HEPEngine: {
        tag: "HEPEngine",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      },
      HabitatModuleMedium: {
        tag: "HabitatModuleMedium",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "LaunchButtonRocketModule",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 5,
        height: 4,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      },
      HabitatModuleSmall: {
        tag: "HabitatModuleSmall",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "NoseRocketModule",
          "LaunchButtonRocketModule",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      HydrogenEngineCluster: {
        tag: "HydrogenEngineCluster",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        generatorWattageRating: 600.0,
        width: 7,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      },
      KeroseneEngineCluster: {
        tag: "KeroseneEngineCluster",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        generatorWattageRating: 480.0,
        width: 7,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      KeroseneEngineClusterSmall: {
        tag: "KeroseneEngineClusterSmall",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        generatorWattageRating: 240.0,
        width: 3,
        height: 4,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      LiquidCargoBayCluster: {
        tag: "LiquidCargoBayCluster",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 1000.0,
        deconstructable: true,
        enableable: true
      },
      LiquidCargoBaySmall: {
        tag: "LiquidCargoBaySmall",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      LiquidFuelTankCluster: {
        tag: "LiquidFuelTankCluster",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 100.0,
        deconstructable: true,
        enableable: true
      },
      NoseconeBasic: {
        tag: "NoseconeBasic",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "NoseRocketModule",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Insulator"
        ],
        width: 5,
        height: 2,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 600.0,
        deconstructable: true,
        enableable: true
      },
      NoseconeHarvest: {
        tag: "NoseconeHarvest",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "NoseRocketModule",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 5,
        height: 4,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 600.0,
        deconstructable: true,
        enableable: true,
        workTime: 7.5
      },
      OrbitalCargoModule: {
        tag: "OrbitalCargoModule",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 2,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        numCapsules: 30.0
      },
      OxidizerTankCluster: {
        tag: "OxidizerTankCluster",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 100.0,
        deconstructable: true,
        enableable: true
      },
      OxidizerTankLiquidCluster: {
        tag: "OxidizerTankLiquidCluster",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        width: 5,
        height: 2,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 100.0,
        deconstructable: true,
        enableable: true
      },
      PioneerModule: {
        tag: "PioneerModule",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      ScannerModule: {
        tag: "ScannerModule",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel",
          "Polypropylene"
        ],
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 1350.0,
        deconstructable: true,
        enableable: true,
        rangeMax: 0.0
      },
      ScoutModule: {
        tag: "ScoutModule",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SmallOxidizerTank: {
        tag: "SmallOxidizerTank",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 2,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SolarPanelModule: {
        tag: "SolarPanelModule",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Glass"
        ],
        generatorWattageRating: 60.0,
        width: 3,
        height: 1,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      CargoBayCluster: {
        tag: "CargoBayCluster",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 1000.0,
        deconstructable: true,
        enableable: true
      },
      SolidCargoBaySmall: {
        tag: "SolidCargoBaySmall",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SpecialCargoBayCluster: {
        tag: "SpecialCargoBayCluster",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "BuildingAttachPoint",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 3,
        height: 1,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SteamEngineCluster: {
        tag: "SteamEngineCluster",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        generatorWattageRating: 600.0,
        width: 7,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SugarEngine: {
        tag: "SugarEngine",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "RocketModule"
        ],
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 60.0,
        width: 3,
        height: 3,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      }
    },
    conveyance: {
      AutoMiner: {
        tag: "AutoMiner",
        menuOrder: 12.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFoundationRotatable",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          120.0
        ],
        internalHeat: 2.0,
        width: 2,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      ModularLaunchpadPortSolid: {
        tag: "ModularLaunchpadPortSolid",
        menuOrder: 13.0,
        tags: [
          "IndustrialMachinery",
          "ModularLaunchpadPort",
          "ModularConduitPort",
          "NotRocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
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
        menuOrder: 14.0,
        tags: [
          "IndustrialMachinery",
          "ModularLaunchpadPort",
          "ModularConduitPort",
          "NotRocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 3,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
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
        menuOrder: 2.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Conduit",
        materialCategory: [
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
        menuOrder: 1.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
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
        menuOrder: 3.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          120.0
        ],
        internalHeat: 2.0,
        width: 1,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SolidConduitOutbox: {
        tag: "SolidConduitOutbox",
        menuOrder: 4.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        width: 1,
        height: 2,
        hp: 30,
        mass: 200.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true
      },
      SolidConduitDiseaseSensor: {
        tag: "SolidConduitDiseaseSensor",
        menuOrder: 9.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      SolidConduitElementSensor: {
        tag: "SolidConduitElementSensor",
        menuOrder: 10.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      SolidConduitTemperatureSensor: {
        tag: "SolidConduitTemperatureSensor",
        menuOrder: 11.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      SolidFilter: {
        tag: "SolidFilter",
        menuOrder: 5.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        electrityConsummation: [
          120.0
        ],
        width: 3,
        height: 1,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      SolidLimitValve: {
        tag: "SolidLimitValve",
        menuOrder: 8.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        rotations: "R360",
        electrityConsummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      SolidLogicValve: {
        tag: "SolidLogicValve",
        menuOrder: 7.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      SolidTransferArm: {
        tag: "SolidTransferArm",
        menuOrder: 0.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          120.0
        ],
        internalHeat: 2.0,
        width: 3,
        height: 1,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      SolidVent: {
        tag: "SolidVent",
        menuOrder: 6.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 200.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    power: {
      Battery: {
        tag: "Battery",
        menuOrder: 16.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      BatteryMedium: {
        tag: "BatteryMedium",
        menuOrder: 17.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      BatterySmart: {
        tag: "BatterySmart",
        menuOrder: 18.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        internalHeat: 0.5,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Generator: {
        tag: "Generator",
        menuOrder: 1.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 600.0,
        externalHeat: 8.0,
        internalHeat: 1.0,
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      HydrogenGenerator: {
        tag: "HydrogenGenerator",
        menuOrder: 3.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 800.0,
        externalHeat: 2.0,
        internalHeat: 2.0,
        width: 4,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      LogicPowerRelay: {
        tag: "LogicPowerRelay",
        menuOrder: 22.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
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
        menuOrder: 0.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 400.0,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      MethaneGenerator: {
        tag: "MethaneGenerator",
        menuOrder: 4.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 800.0,
        externalHeat: 2.0,
        internalHeat: 8.0,
        width: 4,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      PetroleumGenerator: {
        tag: "PetroleumGenerator",
        menuOrder: 5.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 2000.0,
        externalHeat: 4.0,
        internalHeat: 16.0,
        width: 3,
        height: 4,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      PowerTransformer: {
        tag: "PowerTransformer",
        menuOrder: 20.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        generatorWattageRating: 4000.0,
        internalHeat: 1.0,
        width: 3,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      PowerTransformerSmall: {
        tag: "PowerTransformerSmall",
        menuOrder: 19.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        generatorWattageRating: 1000.0,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SolarPanel: {
        tag: "SolarPanel",
        menuOrder: 7.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Glass"
        ],
        generatorWattageRating: 380.0,
        width: 7,
        height: 3,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      SteamTurbine2: {
        tag: "SteamTurbine2",
        menuOrder: 6.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        rotations: "FlipH",
        generatorWattageRating: 850.0,
        internalHeat: 4.0,
        width: 5,
        height: 3,
        hp: 30,
        highTempWarning: 1273.15,
        highTempFatal: 533.15,
        mass: 1000.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Switch: {
        tag: "Switch",
        menuOrder: 21.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
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
        menuOrder: 9.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "WireBridge",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      WireBridgeHighWattage: {
        tag: "WireBridgeHighWattage",
        menuOrder: 11.0,
        tags: [
          "WireBridges"
        ],
        thermalConductivity: 1.0,
        locationRule: "HighWattBridgeTile",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 100,
        mass: 200.0,
        decor: -25.0,
        decorRadius: 6.0,
        deconstructable: true
      },
      Wire: {
        tag: "Wire",
        menuOrder: 8.0,
        tags: [],
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      HighWattageWire: {
        tag: "HighWattageWire",
        menuOrder: 10.0,
        tags: [],
        thermalConductivity: 0.05,
        locationRule: "NotInTiles",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -25.0,
        decorRadius: 6.0,
        deconstructable: true
      },
      WireRefinedBridge: {
        tag: "WireRefinedBridge",
        menuOrder: 13.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "WireBridge",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      WireRefinedBridgeHighWattage: {
        tag: "WireRefinedBridgeHighWattage",
        menuOrder: 15.0,
        tags: [
          "WireBridges"
        ],
        thermalConductivity: 1.0,
        locationRule: "HighWattBridgeTile",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: -25.0,
        decorRadius: 6.0,
        deconstructable: true
      },
      WireRefined: {
        tag: "WireRefined",
        menuOrder: 12.0,
        tags: [],
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
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
        menuOrder: 14.0,
        tags: [],
        thermalConductivity: 0.05,
        locationRule: "NotInTiles",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -20.0,
        decorRadius: 4.0,
        deconstructable: true
      },
      WoodGasGenerator: {
        tag: "WoodGasGenerator",
        menuOrder: 2.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 300.0,
        externalHeat: 8.0,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      }
    },
    plumbing: {
      BottleEmptier: {
        tag: "BottleEmptier",
        menuOrder: 5.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LiquidConduitDiseaseSensor: {
        tag: "LiquidConduitDiseaseSensor",
        menuOrder: 18.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidConduitElementSensor: {
        tag: "LiquidConduitElementSensor",
        menuOrder: 17.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidConduitTemperatureSensor: {
        tag: "LiquidConduitTemperatureSensor",
        menuOrder: 19.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      ContactConductivePipeBridge: {
        tag: "ContactConductivePipeBridge",
        menuOrder: 22.0,
        tags: [],
        thermalConductivity: 2.0,
        locationRule: "NoLiquidConduitAtOrigin",
        materialCategory: [
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
        menuOrder: 1.0,
        tags: [
          "ToiletType",
          "FlushToiletType"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        externalHeat: 0.25,
        width: 2,
        height: 3,
        hp: 30,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      InsulatedLiquidConduit: {
        tag: "InsulatedLiquidConduit",
        menuOrder: 7.0,
        tags: [
          "Pipes"
        ],
        thermalConductivity: 0.03125,
        locationRule: "Anywhere",
        materialCategory: [
          "Plumbable"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 400.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidConduitBridge: {
        tag: "LiquidConduitBridge",
        menuOrder: 9.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Conduit",
        materialCategory: [
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
        menuOrder: 6.0,
        tags: [
          "Pipes"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
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
        menuOrder: 8.0,
        tags: [
          "Pipes"
        ],
        thermalConductivity: 2.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidFilter: {
        tag: "LiquidFilter",
        menuOrder: 13.0,
        tags: [
          "IndustrialMachinery",
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        electrityConsummation: [
          120.0
        ],
        internalHeat: 4.0,
        width: 3,
        height: 1,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LiquidLimitValve: {
        tag: "LiquidLimitValve",
        menuOrder: 16.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        rotations: "R360",
        electrityConsummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 75.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidLogicValve: {
        tag: "LiquidLogicValve",
        menuOrder: 15.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidMiniPump: {
        tag: "LiquidMiniPump",
        menuOrder: 11.0,
        tags: [
          "IndustrialMachinery",
          "CorrosionProof",
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Plastic"
        ],
        rotations: "R360",
        electrityConsummation: [
          60.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LiquidPump: {
        tag: "LiquidPump",
        menuOrder: 10.0,
        tags: [
          "IndustrialMachinery",
          "CorrosionProof",
          "OverlayBackLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        internalHeat: 2.0,
        width: 2,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LiquidPumpingStation: {
        tag: "LiquidPumpingStation",
        menuOrder: 4.0,
        tags: [
          "CorrosionProof"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 2,
        height: 4,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true
      },
      LiquidValve: {
        tag: "LiquidValve",
        menuOrder: 14.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidVent: {
        tag: "LiquidVent",
        menuOrder: 12.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      ModularLaunchpadPortLiquid: {
        tag: "ModularLaunchpadPortLiquid",
        menuOrder: 20.0,
        tags: [
          "IndustrialMachinery",
          "ModularLaunchpadPort",
          "ModularConduitPort",
          "NotRocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
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
        menuOrder: 21.0,
        tags: [
          "IndustrialMachinery",
          "ModularLaunchpadPort",
          "ModularConduitPort",
          "NotRocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 3,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
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
        menuOrder: 0.0,
        tags: [
          "ToiletType"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        externalHeat: 0.25,
        width: 2,
        height: 3,
        hp: 30,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -20.0,
        decorRadius: 5.0,
        deconstructable: true,
        enableable: true
      },
      Shower: {
        tag: "Shower",
        menuOrder: 3.0,
        tags: [
          "WashStation",
          "AdvancedWashStation"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        externalHeat: 0.25,
        width: 2,
        height: 4,
        hp: 30,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      WallToilet: {
        tag: "WallToilet",
        menuOrder: 2.0,
        tags: [
          "ToiletType",
          "FlushToiletType"
        ],
        thermalConductivity: 1.0,
        locationRule: "WallFloor",
        materialCategory: [
          "Plastic"
        ],
        rotations: "FlipH",
        externalHeat: 0.25,
        width: 1,
        height: 3,
        hp: 30,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    hvac: {
      BottleEmptierGas: {
        tag: "BottleEmptierGas",
        menuOrder: 13.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 30,
        mass: 100.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      GasConduitDiseaseSensor: {
        tag: "GasConduitDiseaseSensor",
        menuOrder: 17.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasConduitElementSensor: {
        tag: "GasConduitElementSensor",
        menuOrder: 16.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasConduitTemperatureSensor: {
        tag: "GasConduitTemperatureSensor",
        menuOrder: 18.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasBottler: {
        tag: "GasBottler",
        menuOrder: 12.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GasConduitBridge: {
        tag: "GasConduitBridge",
        menuOrder: 3.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Conduit",
        materialCategory: [
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
        menuOrder: 0.0,
        tags: [
          "Vents"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
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
        menuOrder: 2.0,
        tags: [
          "Vents"
        ],
        thermalConductivity: 2.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasFilter: {
        tag: "GasFilter",
        menuOrder: 8.0,
        tags: [
          "IndustrialMachinery",
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        electrityConsummation: [
          120.0
        ],
        width: 3,
        height: 1,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      GasLimitValve: {
        tag: "GasLimitValve",
        menuOrder: 11.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        rotations: "R360",
        electrityConsummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 75.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasLogicValve: {
        tag: "GasLogicValve",
        menuOrder: 10.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasMiniPump: {
        tag: "GasMiniPump",
        menuOrder: 5.0,
        tags: [
          "IndustrialMachinery",
          "OverlayBackLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Plastic"
        ],
        rotations: "R360",
        electrityConsummation: [
          60.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GasPump: {
        tag: "GasPump",
        menuOrder: 4.0,
        tags: [
          "IndustrialMachinery",
          "OverlayBackLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GasValve: {
        tag: "GasValve",
        menuOrder: 9.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasVent: {
        tag: "GasVent",
        menuOrder: 6.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 50.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GasVentHighPressure: {
        tag: "GasVentHighPressure",
        menuOrder: 7.0,
        tags: [
          "IndustrialMachinery",
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 250.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      InsulatedGasConduit: {
        tag: "InsulatedGasConduit",
        menuOrder: 1.0,
        tags: [
          "Vents"
        ],
        thermalConductivity: 0.03125,
        locationRule: "Anywhere",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 400.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      ModularLaunchpadPortGas: {
        tag: "ModularLaunchpadPortGas",
        menuOrder: 14.0,
        tags: [
          "IndustrialMachinery",
          "ModularLaunchpadPort",
          "ModularConduitPort",
          "NotRocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
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
        menuOrder: 15.0,
        tags: [
          "IndustrialMachinery",
          "ModularLaunchpadPort",
          "ModularConduitPort",
          "NotRocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 3,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
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
        menuOrder: 18.0,
        tags: [
          "Bunker"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Steel"
        ],
        rotations: "R90",
        electrityConsummation: [
          120.0
        ],
        width: 4,
        height: 1,
        hp: 1000,
        highTempWarning: 1273.15,
        highTempFatal: 533.15,
        mass: 500.0,
        floodThreshold: 0.35,
        deconstructable: true
      },
      BunkerTile: {
        tag: "BunkerTile",
        menuOrder: 11.0,
        tags: [
          "Bunker",
          "FloorTiles"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Steel"
        ],
        width: 1,
        height: 1,
        hp: 1000,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      CarpetTile: {
        tag: "CarpetTile",
        menuOrder: 12.0,
        tags: [
          "FloorTiles",
          "Carpeted"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "BuildableRaw",
          "BuildingFiber"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 202.0,
        decor: 20.0,
        decorRadius: 4.0,
        deconstructable: true
      },
      Door: {
        tag: "Door",
        menuOrder: 15.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        rotations: "R90",
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        deconstructable: true
      },
      ExobaseHeadquarters: {
        tag: "ExobaseHeadquarters",
        menuOrder: 14.0,
        tags: [
          "Telepad",
          "LightSource",
          "Experimental"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 3,
        height: 3,
        hp: 250,
        mass: 50.0,
        decor: 30.0,
        decorRadius: 6.0,
        deconstructable: true,
        enableable: true
      },
      ExteriorWall: {
        tag: "ExteriorWall",
        menuOrder: 13.0,
        tags: [
          "Backwall"
        ],
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 30,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 0.0,
        deconstructable: true
      },
      FirePole: {
        tag: "FirePole",
        menuOrder: 1.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasPermeableMembrane: {
        tag: "GasPermeableMembrane",
        menuOrder: 4.0,
        tags: [
          "FloorTiles"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasReservoir: {
        tag: "GasReservoir",
        menuOrder: 22.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 5,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GlassTile: {
        tag: "GlassTile",
        menuOrder: 9.0,
        tags: [
          "Window",
          "FloorTiles"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Transparent"
        ],
        width: 1,
        height: 1,
        hp: 100,
        transparent: true,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      InsulationTile: {
        tag: "InsulationTile",
        menuOrder: 6.0,
        tags: [
          "FloorTiles"
        ],
        thermalConductivity: 0.01,
        locationRule: "Tile",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 400.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      Ladder: {
        tag: "Ladder",
        menuOrder: 0.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LadderFast: {
        tag: "LadderFast",
        menuOrder: 2.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidReservoir: {
        tag: "LiquidReservoir",
        menuOrder: 21.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      ManualPressureDoor: {
        tag: "ManualPressureDoor",
        menuOrder: 16.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        rotations: "R90",
        width: 1,
        height: 2,
        hp: 30,
        mass: 200.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true
      },
      MeshTile: {
        tag: "MeshTile",
        menuOrder: 5.0,
        tags: [
          "FloorTiles"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      MetalTile: {
        tag: "MetalTile",
        menuOrder: 8.0,
        tags: [
          "FloorTiles"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: 15.0,
        decorRadius: 3.0,
        deconstructable: true
      },
      ObjectDispenser: {
        tag: "ObjectDispenser",
        menuOrder: 23.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.125,
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      PlasticTile: {
        tag: "PlasticTile",
        menuOrder: 7.0,
        tags: [
          "FloorTiles"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      PressureDoor: {
        tag: "PressureDoor",
        menuOrder: 17.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        rotations: "R90",
        electrityConsummation: [
          120.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true
      },
      StorageLocker: {
        tag: "StorageLocker",
        menuOrder: 19.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      StorageLockerSmart: {
        tag: "StorageLockerSmart",
        menuOrder: 20.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.125,
        width: 1,
        height: 2,
        hp: 30,
        mass: 200.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      StorageTile: {
        tag: "StorageTile",
        menuOrder: 10.0,
        tags: [
          "FloorTiles"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "RefinedMetal",
          "Glass"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 200.0,
        decor: -10.0,
        decorRadius: 2.0,
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
        menuOrder: 3.0,
        tags: [
          "FloorTiles"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 200.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      TravelTube: {
        tag: "TravelTube",
        menuOrder: 24.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      TravelTubeEntrance: {
        tag: "TravelTubeEntrance",
        menuOrder: 25.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          960.0
        ],
        width: 3,
        height: 2,
        hp: 100,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      TravelTubeWallBridge: {
        tag: "TravelTubeWallBridge",
        menuOrder: 26.0,
        tags: [
          "TravelTubeBridges"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
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
        menuOrder: 27.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          10.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      CometDetector: {
        tag: "CometDetector",
        menuOrder: 28.0,
        tags: [
          "IndustrialMachinery",
          "OverlayBackLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          120.0
        ],
        width: 2,
        height: 4,
        hp: 30,
        mass: 25.0,
        floodThreshold: 0.35,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      FloorSwitch: {
        tag: "FloorSwitch",
        menuOrder: 26.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicAlarm: {
        tag: "LogicAlarm",
        menuOrder: 20.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicCounter: {
        tag: "LogicCounter",
        menuOrder: 19.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipV",
        width: 1,
        height: 3,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicCritterCountSensor: {
        tag: "LogicCritterCountSensor",
        menuOrder: 16.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicDiseaseSensor: {
        tag: "LogicDiseaseSensor",
        menuOrder: 13.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicDuplicantSensor: {
        tag: "LogicDuplicantSensor",
        menuOrder: 5.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFoundationRotatable",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicElementSensorGas: {
        tag: "LogicElementSensorGas",
        menuOrder: 14.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        floodThreshold: 0.35,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicElementSensorLiquid: {
        tag: "LogicElementSensorLiquid",
        menuOrder: 15.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicGateAND: {
        tag: "LogicGateAND",
        menuOrder: 30.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 2,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicGateOR: {
        tag: "LogicGateOR",
        menuOrder: 31.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 2,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicGateXOR: {
        tag: "LogicGateXOR",
        menuOrder: 34.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 2,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicGateNOT: {
        tag: "LogicGateNOT",
        menuOrder: 29.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicGateBUFFER: {
        tag: "LogicGateBUFFER",
        menuOrder: 32.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicGateFILTER: {
        tag: "LogicGateFILTER",
        menuOrder: 33.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicGateMultiplexer: {
        tag: "LogicGateMultiplexer",
        menuOrder: 36.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 4,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicGateDemultiplexer: {
        tag: "LogicGateDemultiplexer",
        menuOrder: 37.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 4,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicHEPSensor: {
        tag: "LogicHEPSensor",
        menuOrder: 18.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicHammer: {
        tag: "LogicHammer",
        menuOrder: 21.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          60.0
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicInterasteroidReceiver: {
        tag: "LogicInterasteroidReceiver",
        menuOrder: 23.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicInterasteroidSender: {
        tag: "LogicInterasteroidSender",
        menuOrder: 22.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicLightSensor: {
        tag: "LogicLightSensor",
        menuOrder: 9.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Transparent"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicMemory: {
        tag: "LogicMemory",
        menuOrder: 35.0,
        tags: [
          "OverlayBackLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
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
        menuOrder: 6.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicPressureSensorLiquid: {
        tag: "LogicPressureSensorLiquid",
        menuOrder: 7.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicRadiationSensor: {
        tag: "LogicRadiationSensor",
        menuOrder: 17.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicRibbonBridge: {
        tag: "LogicRibbonBridge",
        menuOrder: 3.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "LogicBridge",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicRibbon: {
        tag: "LogicRibbon",
        menuOrder: 2.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicRibbonReader: {
        tag: "LogicRibbonReader",
        menuOrder: 24.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicRibbonWriter: {
        tag: "LogicRibbonWriter",
        menuOrder: 25.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicSwitch: {
        tag: "LogicSwitch",
        menuOrder: 4.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
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
        menuOrder: 8.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicTimeOfDaySensor: {
        tag: "LogicTimeOfDaySensor",
        menuOrder: 11.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicTimerSensor: {
        tag: "LogicTimerSensor",
        menuOrder: 12.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicWattageSensor: {
        tag: "LogicWattageSensor",
        menuOrder: 10.0,
        tags: [
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicWireBridge: {
        tag: "LogicWireBridge",
        menuOrder: 1.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "LogicBridge",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 30,
        mass: 5.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicWire: {
        tag: "LogicWire",
        menuOrder: 0.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 5.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      }
    },
    rocketry: {
      ClusterTelescope: {
        tag: "ClusterTelescope",
        menuOrder: 0.0,
        tags: [
          "ScienceBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.125,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true,
        providesO2: false,
        rangeMax: 3.0
      },
      ClusterTelescopeEnclosed: {
        tag: "ClusterTelescopeEnclosed",
        menuOrder: 1.0,
        tags: [
          "ScienceBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.125,
        width: 4,
        height: 6,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true,
        providesO2: true,
        rangeMax: 4.0
      },
      Gantry: {
        tag: "Gantry",
        menuOrder: 4.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          1200.0
        ],
        externalHeat: 1.0,
        internalHeat: 1.0,
        width: 6,
        height: 2,
        hp: 30,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      LandingBeacon: {
        tag: "LandingBeacon",
        menuOrder: 16.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          60.0
        ],
        width: 1,
        height: 3,
        invincible: true,
        highTempWarning: 398.15,
        highTempFatal: 533.15,
        mass: 100.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LaunchPad: {
        tag: "LaunchPad",
        menuOrder: 3.0,
        tags: [
          "IndustrialMachinery",
          "NotRocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        width: 7,
        height: 2,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
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
        menuOrder: 13.0,
        tags: [
          "RocketInteriorBuilding",
          "OverlayFrontLayer"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        onlyInRocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      MissileLauncher: {
        tag: "MissileLauncher",
        menuOrder: 17.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.5,
        internalHeat: 2.0,
        width: 3,
        height: 5,
        hp: 250,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        lauchSpeed: 30.0,
        rotationSpeed: 100.0,
        rangeMax: 32.0,
        rangeMin: 16.0,
        scanningAngle: 50.0,
        maxAngle: 80.0
      },
      MissionControlCluster: {
        tag: "MissionControlCluster",
        menuOrder: 2.0,
        tags: [
          "ScienceBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          960.0
        ],
        externalHeat: 0.5,
        internalHeat: 2.0,
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true,
        scanLeft: 1.0,
        scanRight: 1.0
      },
      ModularLaunchpadPortBridge: {
        tag: "ModularLaunchpadPortBridge",
        menuOrder: 18.0,
        tags: [
          "ModularConduitPort",
          "NotRocketInteriorBuilding",
          "ModularLaunchpadPort"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        width: 1,
        height: 2,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
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
        menuOrder: 14.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.5,
        internalHeat: 2.0,
        width: 5,
        height: 6,
        hp: 250,
        mass: 400.0,
        deconstructable: true,
        enableable: true
      },
      RailGunPayloadOpener: {
        tag: "RailGunPayloadOpener",
        menuOrder: 15.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        internalHeat: 0.5,
        width: 3,
        height: 3,
        hp: 250,
        mass: 100.0,
        deconstructable: true,
        enableable: true
      },
      RocketControlStation: {
        tag: "RocketControlStation",
        menuOrder: 5.0,
        tags: [
          "RocketInteriorBuilding",
          "UniquePerWorld",
          "RocketInterior"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        onlyInRocket: true,
        width: 2,
        height: 2,
        hp: 30,
        mass: 100.0,
        decor: 15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorGasInput: {
        tag: "RocketInteriorGasInput",
        menuOrder: 9.0,
        tags: [
          "RocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnRocketEnvelope",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        onlyInRocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorGasOutput: {
        tag: "RocketInteriorGasOutput",
        menuOrder: 10.0,
        tags: [
          "RocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnRocketEnvelope",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        onlyInRocket: true,
        electrityConsummation: [
          60.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorLiquidInput: {
        tag: "RocketInteriorLiquidInput",
        menuOrder: 7.0,
        tags: [
          "RocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnRocketEnvelope",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        onlyInRocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorLiquidOutput: {
        tag: "RocketInteriorLiquidOutput",
        menuOrder: 8.0,
        tags: [
          "RocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnRocketEnvelope",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        onlyInRocket: true,
        electrityConsummation: [
          60.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorPowerPlug: {
        tag: "RocketInteriorPowerPlug",
        menuOrder: 6.0,
        tags: [
          "RocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnRocketEnvelope",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        onlyInRocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorSolidInput: {
        tag: "RocketInteriorSolidInput",
        menuOrder: 11.0,
        tags: [
          "RocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnRocketEnvelope",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        onlyInRocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorSolidOutput: {
        tag: "RocketInteriorSolidOutput",
        menuOrder: 12.0,
        tags: [
          "RocketInteriorBuilding"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnRocketEnvelope",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        onlyInRocket: true,
        electrityConsummation: [
          60.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      }
    },
    Gravitas: {
      FacilityBackWallWindow: {
        tag: "FacilityBackWallWindow",
        menuOrder: 177013.0,
        tags: [
          "BuildableAny",
          "Transparent",
          "Solid",
          "ManufacturedMaterial",
          "Gravitas"
        ],
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "Glass"
        ],
        rotations: "R90",
        width: 1,
        height: 6,
        hp: 30,
        mass: 25.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Glass",
        deconstructable: true,
        enableable: true
      },
      FossilDig: {
        tag: "FossilDig",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "BuildableRaw"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Fossil"
        ],
        width: 5,
        height: 3,
        hp: 30,
        mass: 2000.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Fossil",
        deconstructable: false
      },
      GravitasContainer: {
        tag: "GravitasContainer",
        menuOrder: 177013.0,
        tags: [
          "Gravitas"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 2,
        invincible: true,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: false,
        enableable: true
      },
      GravitasCreatureManipulator: {
        tag: "GravitasCreatureManipulator",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 3,
        height: 4,
        hp: 250,
        mass: 800.0,
        decor: 15.0,
        decorRadius: 3.0,
        primaryElement: "Steel",
        deconstructable: false,
        enableable: true
      },
      GravitasDoor: {
        tag: "GravitasDoor",
        menuOrder: 177013.0,
        tags: [
          "Gravitas"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        rotations: "R90",
        width: 1,
        height: 3,
        invincible: true,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        deconstructable: true
      },
      GravitasLabLight: {
        tag: "GravitasLabLight",
        menuOrder: 177013.0,
        tags: [
          "Gravitas"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnCeiling",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 25.0,
        deconstructable: true,
        enableable: true
      },
      MassiveHeatSink: {
        tag: "MassiveHeatSink",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "BuildableAny",
          "Solid",
          "RefinedMetal"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        externalHeat: -16.0,
        internalHeat: -64.0,
        width: 4,
        height: 4,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: 15.0,
        decorRadius: 3.0,
        primaryElement: "Iron",
        deconstructable: false,
        enableable: true
      },
      MegaBrainTank: {
        tag: "MegaBrainTank",
        menuOrder: 177013.0,
        tags: [
          "IndustrialMachinery",
          "Gravitas",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 7,
        height: 7,
        invincible: true,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -20.0,
        decorRadius: 5.0,
        primaryElement: "Steel",
        deconstructable: false,
        enableable: true
      },
      MorbRoverMaker: {
        tag: "MorbRoverMaker",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 5,
        height: 4,
        hp: 250,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Steel",
        deconstructable: false,
        enableable: true
      },
      POIDoorInternal: {
        tag: "POIDoorInternal",
        menuOrder: 177013.0,
        tags: [
          "Gravitas"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        rotations: "R90",
        width: 1,
        height: 2,
        invincible: true,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        deconstructable: true
      },
      PropGravitasLabWall: {
        tag: "PropGravitasLabWall",
        menuOrder: 177013.0,
        tags: [
          "BuildableAny",
          "Transparent",
          "Solid",
          "ManufacturedMaterial",
          "Gravitas"
        ],
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "R90",
        width: 2,
        height: 3,
        hp: 30,
        mass: 25.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Glass",
        deconstructable: true,
        enableable: true
      },
      PropGravitasLabWindow: {
        tag: "PropGravitasLabWindow",
        menuOrder: 177013.0,
        tags: [
          "BuildableAny",
          "Transparent",
          "Solid",
          "ManufacturedMaterial",
          "Gravitas"
        ],
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "Glass"
        ],
        width: 2,
        height: 3,
        hp: 30,
        mass: 5.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Glass",
        deconstructable: true,
        enableable: true
      },
      PropGravitasLabWindowHorizontal: {
        tag: "PropGravitasLabWindowHorizontal",
        menuOrder: 177013.0,
        tags: [
          "BuildableAny",
          "Transparent",
          "Solid",
          "ManufacturedMaterial",
          "Gravitas"
        ],
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "Glass"
        ],
        width: 3,
        height: 2,
        hp: 30,
        mass: 5.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Glass",
        deconstructable: true,
        enableable: true
      },
      PropGravitasWall: {
        tag: "PropGravitasWall",
        menuOrder: 177013.0,
        tags: [
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "PreciousRock",
          "Solid",
          "BuildableRaw",
          "Gravitas"
        ],
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Granite",
        deconstructable: true,
        enableable: true
      },
      WarpConduitReceiver: {
        tag: "WarpConduitReceiver",
        menuOrder: 177013.0,
        tags: [
          "Solid",
          "Special",
          "Gravitas"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 4,
        height: 3,
        invincible: true,
        mass: 100.0,
        primaryElement: "Unobtanium",
        deconstructable: false,
        enableable: true
      },
      WarpConduitSender: {
        tag: "WarpConduitSender",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 4,
        height: 3,
        invincible: true,
        mass: 400.0,
        primaryElement: "Unobtanium",
        deconstructable: false,
        enableable: true
      },
      ClustercraftInteriorDoor: {
        tag: "ClustercraftInteriorDoor",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "NotRoomAssignable",
          "Solid",
          "Special"
        ],
        mass: 400.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      PropLadder: {
        tag: "PropLadder",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Polypropylene"
      },
      GeneShuffler: {
        tag: "GeneShuffler",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "NotRoomAssignable",
          "Solid",
          "Special"
        ],
        mass: 2000.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      FossilRock: {
        tag: "FossilRock",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "BuildableRaw"
        ],
        mass: 4000.0,
        decor: 25.0,
        decorRadius: 5.0,
        primaryElement: "Fossil"
      },
      FossilResin: {
        tag: "FossilResin",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "BuildableRaw"
        ],
        mass: 4000.0,
        decor: 25.0,
        decorRadius: 5.0,
        primaryElement: "Fossil"
      },
      FossilIce: {
        tag: "FossilIce",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "BuildableRaw"
        ],
        mass: 4000.0,
        decor: 25.0,
        decorRadius: 5.0,
        primaryElement: "Fossil"
      },
      PropGravitasLabTable: {
        tag: "PropGravitasLabTable",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasJar2: {
        tag: "PropGravitasJar2",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasJar1: {
        tag: "PropGravitasJar1",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasHandScanner: {
        tag: "PropGravitasHandScanner",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasFloorRobot: {
        tag: "PropGravitasFloorRobot",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasFirstAidKit: {
        tag: "PropGravitasFirstAidKit",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasDisplay4: {
        tag: "PropGravitasDisplay4",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasRobitcTable: {
        tag: "PropGravitasRobitcTable",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasDeskPodium: {
        tag: "PropGravitasDeskPodium",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasCreaturePoster: {
        tag: "PropGravitasCreaturePoster",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasCeilingRobot: {
        tag: "PropGravitasCeilingRobot",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropFacilityWallDegree: {
        tag: "PropFacilityWallDegree",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropFacilityTable: {
        tag: "PropFacilityTable",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropFacilityStatue: {
        tag: "PropFacilityStatue",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropFacilityPainting: {
        tag: "PropFacilityPainting",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropFacilityHangingLight: {
        tag: "PropFacilityHangingLight",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropGravitasDecorativeWindow: {
        tag: "PropGravitasDecorativeWindow",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "BuildableAny",
          "Transparent",
          "Solid",
          "ManufacturedMaterial"
        ],
        mass: 50.0,
        decor: 15.0,
        decorRadius: 3.0,
        primaryElement: "Glass"
      },
      PropFacilityGlobeDroors: {
        tag: "PropFacilityGlobeDroors",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasShelf: {
        tag: "PropGravitasShelf",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropReceptionDesk: {
        tag: "PropReceptionDesk",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      WarpReceiver: {
        tag: "WarpReceiver",
        menuOrder: 177013.0,
        tags: [
          "NotRoomAssignable",
          "WarpTech",
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 2000.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      WarpPortal: {
        tag: "WarpPortal",
        menuOrder: 177013.0,
        tags: [
          "NotRoomAssignable",
          "WarpTech",
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 2000.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      VendingMachine: {
        tag: "VendingMachine",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      SetLocker: {
        tag: "SetLocker",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      PropGravitasSmallSeedLocker: {
        tag: "PropGravitasSmallSeedLocker",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      CryoTank: {
        tag: "CryoTank",
        menuOrder: 177013.0,
        tags: [
          "Solid",
          "Special"
        ],
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      PropLight: {
        tag: "PropLight",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropTallPlant: {
        tag: "PropTallPlant",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Polypropylene"
      },
      PropTable: {
        tag: "PropTable",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      PropSurfaceSatellite3: {
        tag: "PropSurfaceSatellite3",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      PropSurfaceSatellite2: {
        tag: "PropSurfaceSatellite2",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      PropSurfaceSatellite1: {
        tag: "PropSurfaceSatellite1",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      PropSkeleton: {
        tag: "PropSkeleton",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid"
        ],
        mass: 50.0,
        decor: 30.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      PropFacilityDisplay: {
        tag: "PropFacilityDisplay",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropFacilityDisplay2: {
        tag: "PropFacilityDisplay2",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropFacilityDisplay3: {
        tag: "PropFacilityDisplay3",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropFacilityDesk: {
        tag: "PropFacilityDesk",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropFacilityCouch: {
        tag: "PropFacilityCouch",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropFacilityChandelier: {
        tag: "PropFacilityChandelier",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropFacilityChairFlip: {
        tag: "PropFacilityChairFlip",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropFacilityChair: {
        tag: "PropFacilityChair",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropElevator: {
        tag: "PropElevator",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropDesk: {
        tag: "PropDesk",
        menuOrder: 177013.0,
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
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropClock: {
        tag: "PropClock",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "Special"
        ],
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      }
    },
    hep: {
      HEPBattery: {
        tag: "HEPBattery",
        menuOrder: 6.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 3,
        height: 3,
        hp: 30,
        mass: 400.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true,
        launchRate: 1.0,
        radboltDecay: 0.5,
        radboltStorage: 100.0
      },
      HEPBridgeTile: {
        tag: "HEPBridgeTile",
        menuOrder: 7.0,
        tags: [
          "HEPPassThrough"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Plastic"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 100,
        mass: 200.0,
        decor: -25.0,
        decorRadius: 6.0,
        deconstructable: true
      },
      HighEnergyParticleRedirector: {
        tag: "HighEnergyParticleRedirector",
        menuOrder: 5.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      HighEnergyParticleSpawner: {
        tag: "HighEnergyParticleSpawner",
        menuOrder: 4.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "R360",
        electrityConsummation: [
          480.0
        ],
        externalHeat: 1.0,
        internalHeat: 4.0,
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      ManualHighEnergyParticleSpawner: {
        tag: "ManualHighEnergyParticleSpawner",
        menuOrder: 1.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 3,
        hp: 30,
        mass: 800.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      NuclearReactor: {
        tag: "NuclearReactor",
        menuOrder: 2.0,
        tags: [
          "IndustrialMachinery",
          "CorrosionProof"
        ],
        thermalConductivity: 0.1,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 5,
        height: 6,
        invincible: true,
        mass: 800.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true
      },
      RadiationLight: {
        tag: "RadiationLight",
        menuOrder: 0.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnWall",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          60.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 1,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      UraniumCentrifuge: {
        tag: "UraniumCentrifuge",
        menuOrder: 3.0,
        tags: [
          "IndustrialMachinery"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        electrityConsummation: [
          480.0
        ],
        externalHeat: 0.125,
        internalHeat: 0.5,
        width: 3,
        height: 4,
        hp: 100,
        mass: 900.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    Quest: {
      LonelyMinionHouse: {
        tag: "LonelyMinionHouse",
        menuOrder: 177013.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Steel"
        ],
        electrityConsummation: [
          60.0
        ],
        width: 4,
        height: 6,
        hp: 1000,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -25.0,
        decorRadius: 6.0,
        deconstructable: false
      },
      LonelyMailBox: {
        tag: "LonelyMailBox",
        menuOrder: 177013.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 2,
        hp: 10,
        mass: 100.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: false,
        enableable: true
      },
      TemporalTearOpener: {
        tag: "TemporalTearOpener",
        menuOrder: 177013.0,
        tags: [
          "Solid",
          "Special"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 4,
        invincible: true,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: 15.0,
        decorRadius: 3.0,
        primaryElement: "Unobtanium",
        deconstructable: false,
        enableable: true
      },
      FossilBitsLarge: {
        tag: "FossilBitsLarge",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "BuildableRaw"
        ],
        mass: 2000.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Fossil"
      },
      FossilBitsSmall: {
        tag: "FossilBitsSmall",
        menuOrder: 177013.0,
        tags: [
          "Gravitas",
          "Solid",
          "BuildableRaw"
        ],
        mass: 1500.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Fossil"
      },
      SapTree: {
        tag: "SapTree",
        menuOrder: 177013.0,
        tags: [
          "Decoration"
        ],
        lowTempWarning: 173.15,
        lowTempFatal: 0.0,
        highTempWarning: 373.15,
        highTempFatal: 1023.15,
        mass: 1.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      }
    },
    Lander: {
      ScoutLander: {
        tag: "ScoutLander",
        menuOrder: 177013.0,
        tags: [],
        mass: 400.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        deconstructable: true
      },
      PioneerLander: {
        tag: "PioneerLander",
        menuOrder: 177013.0,
        tags: [],
        mass: 400.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        deconstructable: true
      }
    }
  },
  NONE: {
    NONE: {
      DevGenerator: {
        menuOrder: 177013.0,
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 100000.0,
        width: 1,
        height: 1,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 25.0,
        debug: true
      },
      DevHEPSpawner: {
        menuOrder: 177013.0,
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        mass: 400.0,
        debug: true
      },
      DevLifeSupport: {
        menuOrder: 177013.0,
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        mass: 800.0,
        debug: true
      },
      DevLightGenerator: {
        menuOrder: 177013.0,
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 25.0,
        debug: true
      },
      DevPumpGas: {
        menuOrder: 177013.0,
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 2,
        mass: 50.0,
        debug: true
      },
      DevPumpLiquid: {
        menuOrder: 177013.0,
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 2,
        mass: 400.0,
        debug: true
      },
      DevPumpSolid: {
        menuOrder: 177013.0,
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 2,
        mass: 50.0,
        debug: true
      },
      DevRadiationGenerator: {
        menuOrder: 177013.0,
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        mass: 25.0,
        debug: true
      },
      GravitasPedestal: {
        tag: "GravitasPedestal",
        menuOrder: 177013.0,
        tags: [
          "Decoration"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 2,
        hp: 10,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      Headquarters: {
        tag: "Headquarters",
        menuOrder: 177013.0,
        tags: [
          "Telepad",
          "LightSource",
          "Experimental"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 4,
        height: 4,
        hp: 250,
        mass: 2000.0,
        decor: 30.0,
        decorRadius: 6.0,
        deconstructable: true,
        enableable: true
      },
      POIBunkerExteriorDoor: {
        tag: "POIBunkerExteriorDoor",
        menuOrder: 177013.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 2,
        invincible: true,
        mass: 200.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: false,
        enableable: true
      },
      POIFacilityDoor: {
        tag: "POIFacilityDoor",
        menuOrder: 177013.0,
        tags: [
          "Metal",
          "RefinedMetal",
          "BuildableAny",
          "Solid",
          "ManufacturedMaterial"
        ],
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "R90",
        width: 2,
        height: 3,
        invincible: true,
        mass: 200.0,
        decor: -15.0,
        decorRadius: 3.0,
        primaryElement: "Steel",
        deconstructable: true,
        enableable: true
      },
      RocketEnvelopeWindowTile: {
        tag: "RocketEnvelopeWindowTile",
        menuOrder: 177013.0,
        tags: [
          "Window",
          "Bunker",
          "FloorTiles",
          "NoRocketRefund"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Transparent"
        ],
        width: 1,
        height: 1,
        invincible: true,
        transparent: true,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: false
      },
      RocketInteriorGasInputPort: {
        tag: "RocketInteriorGasInputPort",
        menuOrder: 177013.0,
        tags: [
          "Bunker",
          "FloorTiles",
          "NoRocketRefund"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: false
      },
      RocketInteriorGasOutputPort: {
        tag: "RocketInteriorGasOutputPort",
        menuOrder: 177013.0,
        tags: [
          "Bunker",
          "FloorTiles",
          "NoRocketRefund"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: false
      },
      RocketInteriorLiquidInputPort: {
        tag: "RocketInteriorLiquidInputPort",
        menuOrder: 177013.0,
        tags: [
          "Bunker",
          "FloorTiles",
          "NoRocketRefund"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: false
      },
      RocketInteriorLiquidOutputPort: {
        tag: "RocketInteriorLiquidOutputPort",
        menuOrder: 177013.0,
        tags: [
          "Bunker",
          "FloorTiles",
          "NoRocketRefund"
        ],
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: false
      },
      RocketWallTile: {
        menuOrder: 177013.0,
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Steel"
        ],
        width: 1,
        height: 1,
        mass: 100.0,
        debug: true
      },
      StaterpillarGenerator: {
        tag: "StaterpillarGenerator",
        menuOrder: 177013.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFoundationRotatable",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipV",
        generatorWattageRating: 1600.0,
        externalHeat: 2.0,
        internalHeat: 4.0,
        width: 1,
        height: 2,
        hp: 1000,
        mass: 200.0,
        deconstructable: false,
        enableable: true
      },
      StaterpillarGasConnector: {
        tag: "StaterpillarGasConnector",
        menuOrder: 177013.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFoundationRotatable",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipV",
        width: 1,
        height: 2,
        hp: 1000,
        mass: 200.0,
        deconstructable: false,
        enableable: true
      },
      StaterpillarLiquidConnector: {
        tag: "StaterpillarLiquidConnector",
        menuOrder: 177013.0,
        tags: [],
        thermalConductivity: 1.0,
        locationRule: "OnFoundationRotatable",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipV",
        width: 1,
        height: 2,
        hp: 1000,
        mass: 200.0,
        deconstructable: false,
        enableable: true
      },
      TeleportalPad: {
        tag: "TeleportalPad",
        menuOrder: 177013.0,
        tags: [
          "Solid",
          "Special"
        ],
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          1600.0
        ],
        externalHeat: 16.0,
        internalHeat: 64.0,
        width: 4,
        height: 4,
        hp: 250,
        mass: 2000.0,
        decor: 30.0,
        decorRadius: 6.0,
        primaryElement: "Unobtanium",
        deconstructable: true,
        enableable: true
      },
      TilePOI: {
        menuOrder: 177013.0,
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        mass: 100.0,
        debug: true
      },
      AnimForeground: {
        tag: "AnimForeground",
        menuOrder: 177013.0,
        tags: []
      },
      CO2Explode: {
        tag: "CO2Explode",
        menuOrder: 177013.0,
        tags: []
      },
      DebugPlacer: {
        tag: "DebugPlacer",
        menuOrder: 177013.0,
        tags: []
      },
      FogOfWarMask: {
        tag: "FogOfWarMask",
        menuOrder: 177013.0,
        tags: []
      },
      fx_capture_splash: {
        tag: "fx_capture_splash",
        menuOrder: 177013.0,
        tags: []
      },
      fx_dig_splash: {
        tag: "fx_dig_splash",
        menuOrder: 177013.0,
        tags: []
      },
      fx_disinfect_splash: {
        tag: "fx_disinfect_splash",
        menuOrder: 177013.0,
        tags: []
      },
      fx_harvest_splash: {
        tag: "fx_harvest_splash",
        menuOrder: 177013.0,
        tags: []
      },
      fx_meteorshower_bg: {
        tag: "fx_meteorshower_bg",
        menuOrder: 177013.0,
        tags: []
      },
      fx_paint_splash: {
        tag: "fx_paint_splash",
        menuOrder: 177013.0,
        tags: []
      },
      fx_powertinker_splash: {
        tag: "fx_powertinker_splash",
        menuOrder: 177013.0,
        tags: []
      },
      fx_tend_splash: {
        tag: "fx_tend_splash",
        menuOrder: 177013.0,
        tags: []
      },
      fx_whirlpool_splash: {
        tag: "fx_whirlpool_splash",
        menuOrder: 177013.0,
        tags: []
      },
      SaveGame: {
        tag: "SaveGame",
        menuOrder: 177013.0,
        tags: []
      },
      Spawner: {
        tag: "Spawner",
        menuOrder: 177013.0,
        tags: []
      },
      WaterExplode: {
        tag: "WaterExplode",
        menuOrder: 177013.0,
        tags: []
      },
      Clustercraft: {
        tag: "Clustercraft",
        menuOrder: 177013.0,
        tags: []
      },
      BalloonStand: {
        tag: "BalloonStand",
        menuOrder: 177013.0,
        tags: []
      },
      BackgroundEarth: {
        tag: "BackgroundEarth",
        menuOrder: 177013.0,
        tags: []
      },
      Asteroid: {
        tag: "Asteroid",
        menuOrder: 177013.0,
        tags: []
      },
      DeployingScoutLanderFXConfig: {
        tag: "DeployingScoutLanderFXConfig",
        menuOrder: 177013.0,
        tags: []
      },
      DeployingPioneerLanderFX: {
        tag: "DeployingPioneerLanderFX",
        menuOrder: 177013.0,
        tags: []
      },
      LandingPod: {
        tag: "LandingPod",
        menuOrder: 177013.0,
        tags: [],
        mass: 2000.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Creature"
      },
      ExplodingClusterShip: {
        tag: "ExplodingClusterShip",
        menuOrder: 177013.0,
        tags: []
      },
      MachineParts: {
        tag: "MachineParts",
        menuOrder: 177013.0,
        tags: [],
        mass: 5.0,
        primaryElement: "Creature"
      },
      FoodSplat: {
        tag: "FoodSplat",
        menuOrder: 177013.0,
        tags: [],
        mass: 1.0,
        primaryElement: "Creature"
      },
      EyeAnimation: {
        tag: "EyeAnimation",
        menuOrder: 177013.0,
        tags: []
      },
      FullMinionUIPortrait: {
        tag: "FullMinionUIPortrait",
        menuOrder: 177013.0,
        tags: []
      },
      StickerBomb: {
        tag: "StickerBomb",
        menuOrder: 177013.0,
        tags: [],
        mass: 1.0,
        primaryElement: "Creature"
      },
      RailGunPayload: {
        tag: "RailGunPayload",
        menuOrder: 177013.0,
        tags: [
          "IgnoreMaterialCategory",
          "Experimental"
        ],
        mass: 200.0,
        primaryElement: "Creature"
      },
      MinionUIPortrait: {
        tag: "MinionUIPortrait",
        menuOrder: 177013.0,
        tags: []
      },
      MinionSelectPreview: {
        tag: "MinionSelectPreview",
        menuOrder: 177013.0,
        tags: [],
        hp: 100,
        caloriesMax: 4000000.0,
        caloriesLoss: -1666.66663,
        carryAmount: 200.0
      },
      MinionAssignablesProxy: {
        tag: "MinionAssignablesProxy",
        menuOrder: 177013.0,
        tags: []
      },
      Meter: {
        tag: "Meter",
        menuOrder: 177013.0,
        tags: []
      },
      MannequinUIPortrait: {
        tag: "MannequinUIPortrait",
        menuOrder: 177013.0,
        tags: []
      },
      MouthAnimation: {
        tag: "MouthAnimation",
        menuOrder: 177013.0,
        tags: []
      },
      LonelyMinion: {
        tag: "LonelyMinion",
        menuOrder: 177013.0,
        tags: []
      },
      SleepLocator: {
        tag: "SleepLocator",
        menuOrder: 177013.0,
        tags: [
          "NotConversationTopic"
        ]
      },
      ApproachableLocator: {
        tag: "ApproachableLocator",
        menuOrder: 177013.0,
        tags: [
          "NotConversationTopic"
        ]
      },
      TargetLocator: {
        tag: "TargetLocator",
        menuOrder: 177013.0,
        tags: [
          "NotConversationTopic"
        ]
      },
      OneshotReactableLocator: {
        tag: "OneshotReactableLocator",
        menuOrder: 177013.0,
        tags: [
          "NotConversationTopic"
        ]
      },
      OrbitalBG: {
        tag: "OrbitalBG",
        menuOrder: 177013.0,
        tags: []
      },
      ResearchDestination: {
        tag: "ResearchDestination",
        menuOrder: 177013.0,
        tags: []
      },
      RepairableStorageProxy: {
        tag: "RepairableStorageProxy",
        menuOrder: 177013.0,
        tags: [
          "NotConversationTopic"
        ]
      },
      MopPlacer: {
        tag: "MopPlacer",
        menuOrder: 177013.0,
        tags: [
          "NotConversationTopic"
        ]
      },
      DigPlacer: {
        tag: "DigPlacer",
        menuOrder: 177013.0,
        tags: []
      },
      TemporalTear: {
        tag: "TemporalTear",
        menuOrder: 177013.0,
        tags: []
      },
      TelescopeTarget: {
        tag: "TelescopeTarget",
        menuOrder: 177013.0,
        tags: []
      },
      StoredMinion: {
        tag: "StoredMinion",
        menuOrder: 177013.0,
        tags: []
      },
      SimpleFX: {
        tag: "SimpleFX",
        menuOrder: 177013.0,
        tags: []
      },
      MovePickupablePlacer: {
        tag: "MovePickupablePlacer",
        menuOrder: 177013.0,
        tags: [
          "NotConversationTopic"
        ]
      },
      FishFeederBot: {
        tag: "FishFeederBot",
        menuOrder: 177013.0,
        tags: []
      },
      DebrisPayload: {
        tag: "DebrisPayload",
        menuOrder: 177013.0,
        tags: [
          "IgnoreMaterialCategory",
          "Experimental"
        ],
        mass: 100.0,
        primaryElement: "Creature"
      },
      EffectTemplateFx: {
        tag: "EffectTemplateFx",
        menuOrder: 177013.0,
        tags: []
      },
      EffectTemplateOverrideFx: {
        tag: "EffectTemplateOverrideFx",
        menuOrder: 177013.0,
        tags: []
      },
      AttackSplashFx: {
        tag: "AttackSplashFx",
        menuOrder: 177013.0,
        tags: []
      },
      OreAbsorbFx: {
        tag: "OreAbsorbFx",
        menuOrder: 177013.0,
        tags: []
      },
      PlantDeathFx: {
        tag: "PlantDeathFx",
        menuOrder: 177013.0,
        tags: []
      },
      BuildSplashFx: {
        tag: "BuildSplashFx",
        menuOrder: 177013.0,
        tags: []
      },
      DemolishSplashFx: {
        tag: "DemolishSplashFx",
        menuOrder: 177013.0,
        tags: []
      },
      EscapePod: {
        tag: "EscapePod",
        menuOrder: 177013.0,
        tags: [],
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        deconstructable: true
      },
      GeyserGeneric: {
        tag: "GeyserGeneric",
        menuOrder: 177013.0,
        tags: []
      }
    }
  },
  Element: {
    Solid: {
      Algae: {
        tag: "Algae",
        menuOrder: 1.0,
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
        molarMass: 4.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 0.2,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 200.0
      },
      BleachStone: {
        tag: "BleachStone",
        menuOrder: 6.0,
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
        molarMass: 43.0,
        hardness: 50.0,
        shc: 0.5,
        strength: 1.0,
        radiationAbsorptionFactor: 0.73,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 50.0
      },
      OxyRock: {
        tag: "OxyRock",
        menuOrder: 6.0,
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
        molarMass: 43.0,
        hardness: 10.0,
        shc: 1.0,
        strength: 1.0,
        radiationAbsorptionFactor: 0.82,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 200.0
      },
      SlimeMold: {
        tag: "SlimeMold",
        menuOrder: 1.0,
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
        molarMass: 4.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 0.2,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 200.0
      },
      ToxicSand: {
        tag: "ToxicSand",
        menuOrder: 1.0,
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
        molarMass: 50.0,
        hardness: 10.0,
        shc: 0.83,
        strength: 0.25,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      CrushedIce: {
        tag: "CrushedIce",
        menuOrder: 8.0,
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
        molarMass: 18.01528,
        hardness: 10.0,
        shc: 2.05,
        strength: 0.4,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.18,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 10.0
      },
      Diamond: {
        tag: "Diamond",
        menuOrder: 12.0,
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
        molarMass: 12.0107,
        hardness: 250.0,
        shc: 0.516,
        strength: 2.5,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 80.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 700.0
      },
      Isoresin: {
        tag: "Isoresin",
        menuOrder: 10.0,
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
        molarMass: 162.14,
        hardness: 10.0,
        shc: 1.3,
        strength: 0.4,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.17,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 30.0
      },
      Sucrose: {
        tag: "Sucrose",
        menuOrder: 6.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "ConsumableOre"
        ],
        molarMass: 342.3,
        hardness: 5.0,
        shc: 1.255,
        strength: 0.1,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 0.15,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 500.0
      },
      MilkFat: {
        tag: "MilkFat",
        menuOrder: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "ConsumableOre"
        ],
        molarMass: 42.08,
        hardness: 1.0,
        shc: 1.92,
        strength: 0.4,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 0.15,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 913.0
      },
      Niobium: {
        tag: "Niobium",
        menuOrder: 5.0,
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
        molarMass: 92.9,
        hardness: 50.0,
        shc: 0.265,
        strength: 0.8,
        radiationAbsorptionFactor: 0.49,
        thermalConductivity: 54.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 30.0
      },
      MilkIce: {
        tag: "MilkIce",
        menuOrder: 8.0,
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
        molarMass: 18.01528,
        hardness: 25.0,
        shc: 3.4,
        strength: 1.0,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.18,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      Cuprite: {
        tag: "Cuprite",
        menuOrder: 5.0,
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
        molarMass: 143.09,
        hardness: 25.0,
        shc: 0.386,
        strength: 0.7,
        radiationAbsorptionFactor: 0.56,
        thermalConductivity: 4.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 800.0
      },
      Copper: {
        tag: "Copper",
        menuOrder: 4.0,
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
        molarMass: 63.546,
        hardness: 25.0,
        shc: 0.385,
        strength: 0.8,
        radiationAbsorptionFactor: 0.61,
        thermalConductivity: 60.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 900.0
      },
      CrushedRock: {
        tag: "CrushedRock",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Unstable",
          "Solid",
          "BuildableProcessed"
        ],
        molarMass: 50.0,
        hardness: 10.0,
        shc: 0.2,
        strength: 0.7,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      SuperInsulator: {
        tag: "SuperInsulator",
        menuOrder: 7.0,
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
        molarMass: 341.76,
        hardness: 200.0,
        shc: 5.57,
        strength: 2.0,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 1E-05,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 900.0
      },
      BrineIce: {
        tag: "BrineIce",
        menuOrder: 8.0,
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
        molarMass: 18.01528,
        hardness: 25.0,
        shc: 3.4,
        strength: 1.0,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.18,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      SolidViscoGel: {
        tag: "SolidViscoGel",
        menuOrder: 9.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Plastic",
          "Solid",
          "ManufacturedMaterial"
        ],
        molarMass: 95.0,
        hardness: 2.0,
        shc: 1.55,
        strength: 0.1,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 0.45,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 100.0
      },
      Ceramic: {
        tag: "Ceramic",
        menuOrder: 7.0,
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
        molarMass: 25.0,
        hardness: 50.0,
        shc: 0.84,
        strength: 1.0,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 0.62,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      Cobaltite: {
        tag: "Cobaltite",
        menuOrder: 5.0,
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
        molarMass: 165.9,
        hardness: 25.0,
        shc: 0.42,
        strength: 0.9,
        radiationAbsorptionFactor: 0.58,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1250.0
      },
      Fertilizer: {
        tag: "Fertilizer",
        menuOrder: 3.0,
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
        molarMass: 50.0,
        hardness: 2.0,
        shc: 0.83,
        strength: 0.2,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 200.0
      },
      SolidCrudeOil: {
        tag: "SolidCrudeOil",
        menuOrder: 11.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "Liquifiable"
        ],
        molarMass: 500.0,
        hardness: 2.0,
        shc: 1.69,
        strength: 0.1,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 870.0
      },
      Wolframite: {
        tag: "Wolframite",
        menuOrder: 5.0,
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
        molarMass: 150.0,
        hardness: 150.0,
        shc: 0.134,
        strength: 0.8,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 15.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 600.0
      },
      Polypropylene: {
        tag: "Polypropylene",
        menuOrder: 9.0,
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
        molarMass: 42.08,
        hardness: 1.0,
        shc: 1.92,
        strength: 0.4,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 0.15,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 913.0
      },
      SolidNaphtha: {
        tag: "SolidNaphtha",
        menuOrder: 11.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "Liquifiable"
        ],
        molarMass: 102.2,
        hardness: 2.0,
        shc: 2.191,
        strength: 0.1,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 0.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 740.0
      },
      Tungsten: {
        tag: "Tungsten",
        menuOrder: 4.0,
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
        molarMass: 183.84,
        hardness: 200.0,
        shc: 0.134,
        strength: 0.9,
        radiationAbsorptionFactor: 0.35,
        thermalConductivity: 60.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 200.0
      },
      RefinedCarbon: {
        tag: "RefinedCarbon",
        menuOrder: 6.0,
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
        molarMass: 12.0107,
        hardness: 2.0,
        shc: 1.74,
        strength: 0.8,
        radiationAbsorptionFactor: 0.84,
        thermalConductivity: 3.1,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 600.0
      },
      Steel: {
        tag: "Steel",
        menuOrder: 5.0,
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
        molarMass: 54.97,
        hardness: 50.0,
        shc: 0.49,
        strength: 2.0,
        radiationAbsorptionFactor: 0.74,
        thermalConductivity: 54.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 400.0
      },
      Phosphorite: {
        tag: "Phosphorite",
        menuOrder: 3.0,
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
        molarMass: 95.61,
        hardness: 25.0,
        shc: 0.15,
        strength: 0.8,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 600.0
      },
      SolidHydrogen: {
        tag: "SolidHydrogen",
        menuOrder: 11.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "Liquifiable"
        ],
        molarMass: 44.1,
        hardness: 2.0,
        shc: 2.4,
        strength: 0.25,
        radiationAbsorptionFactor: 0.9,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 600.0
      },
      Lead: {
        tag: "Lead",
        menuOrder: 4.0,
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
        molarMass: 55.845,
        hardness: 10.0,
        shc: 0.128,
        strength: 0.8,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 35.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 2000.0
      },
      Sulfur: {
        tag: "Sulfur",
        menuOrder: 12.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "Other"
        ],
        molarMass: 50.0,
        hardness: 5.0,
        shc: 0.7,
        strength: 0.1,
        radiationAbsorptionFactor: 0.74,
        thermalConductivity: 0.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 500.0
      },
      Lime: {
        tag: "Lime",
        menuOrder: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "ConsumableOre"
        ],
        molarMass: 200.0,
        hardness: 50.0,
        shc: 0.834,
        strength: 0.2,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      SolidChlorine: {
        tag: "SolidChlorine",
        menuOrder: 11.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "Liquifiable"
        ],
        molarMass: 34.453,
        hardness: 25.0,
        shc: 0.48,
        strength: 0.5,
        radiationAbsorptionFactor: 0.73,
        thermalConductivity: 0.75,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 600.0
      },
      SolidNuclearWaste: {
        tag: "SolidNuclearWaste",
        menuOrder: 12.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "EmitsLight",
          "Solid",
          "Other"
        ],
        molarMass: 196.966568,
        hardness: 0.0,
        shc: 7.44,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 6.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1840.0
      },
      Obsidian: {
        tag: "Obsidian",
        menuOrder: 7.0,
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
        molarMass: 50.0,
        hardness: 200.0,
        shc: 0.2,
        strength: 1.0,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      SolidPetroleum: {
        tag: "SolidPetroleum",
        menuOrder: 11.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "Liquifiable"
        ],
        molarMass: 82.2,
        hardness: 2.0,
        shc: 1.76,
        strength: 0.1,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 740.0
      },
      SolidSuperCoolant: {
        tag: "SolidSuperCoolant",
        menuOrder: 9.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "ManufacturedMaterial"
        ],
        molarMass: 250.0,
        hardness: 2.0,
        shc: 8.44,
        strength: 0.1,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 9.46,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 740.0
      },
      IgneousRock: {
        tag: "IgneousRock",
        menuOrder: 7.0,
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
        molarMass: 50.0,
        hardness: 25.0,
        shc: 1.0,
        strength: 1.0,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1840.0
      },
      EnrichedUranium: {
        tag: "EnrichedUranium",
        menuOrder: 9.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "ManufacturedMaterial"
        ],
        molarMass: 120.0,
        hardness: 250.0,
        shc: 1.0,
        strength: 1.0,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 20.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 100.0
      },
      Gold: {
        tag: "Gold",
        menuOrder: 4.0,
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
        molarMass: 196.966568,
        hardness: 2.0,
        shc: 0.129,
        strength: 0.7,
        radiationAbsorptionFactor: 0.35,
        thermalConductivity: 60.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 870.0
      },
      Rust: {
        tag: "Rust",
        menuOrder: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "ConsumableOre"
        ],
        molarMass: 159.6882,
        hardness: 25.0,
        shc: 0.449,
        strength: 0.9,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 800.0
      },
      Corium: {
        tag: "Corium",
        menuOrder: 12.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "Other"
        ],
        molarMass: 196.966568,
        hardness: 251.0,
        shc: 7.44,
        strength: 0.45,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 6.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 200.0
      },
      Phosphorus: {
        tag: "Phosphorus",
        menuOrder: 6.0,
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
        molarMass: 30.9737625,
        hardness: 0.0,
        shc: 0.7697,
        strength: 0.85,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.236,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 200.0
      },
      Granite: {
        tag: "Granite",
        menuOrder: 7.0,
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
        molarMass: 50.0,
        hardness: 80.0,
        shc: 0.79,
        strength: 1.5,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 3.39,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1840.0
      },
      SolidCarbonDioxide: {
        tag: "SolidCarbonDioxide",
        menuOrder: 11.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "Liquifiable"
        ],
        molarMass: 44.01,
        hardness: 2.0,
        shc: 0.846,
        strength: 0.6,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 1.46,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 600.0
      },
      Cobalt: {
        tag: "Cobalt",
        menuOrder: 4.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "Solid",
          "RefinedMetal"
        ],
        molarMass: 58.9,
        hardness: 75.0,
        shc: 0.42,
        strength: 0.9,
        radiationAbsorptionFactor: 0.63,
        thermalConductivity: 100.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 800.0
      },
      UraniumOre: {
        tag: "UraniumOre",
        menuOrder: 5.0,
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
        molarMass: 120.0,
        hardness: 150.0,
        shc: 1.0,
        strength: 1.0,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 20.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 100.0
      },
      AluminumOre: {
        tag: "AluminumOre",
        menuOrder: 5.0,
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
        molarMass: 143.09,
        hardness: 25.0,
        shc: 0.91,
        strength: 0.7,
        radiationAbsorptionFactor: 0.72,
        thermalConductivity: 20.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 500.0
      },
      SedimentaryRock: {
        tag: "SedimentaryRock",
        menuOrder: 7.0,
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
        molarMass: 50.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 0.2,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1840.0
      },
      Fullerene: {
        tag: "Fullerene",
        menuOrder: 10.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "RareMaterials"
        ],
        molarMass: 12.0107,
        hardness: 250.0,
        shc: 0.95,
        strength: 1.0,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 50.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 30.0
      },
      GoldAmalgam: {
        tag: "GoldAmalgam",
        menuOrder: 5.0,
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
        molarMass: 95.61,
        hardness: 2.0,
        shc: 0.15,
        strength: 0.8,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 800.0
      },
      Salt: {
        tag: "Salt",
        menuOrder: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "ConsumableOre"
        ],
        molarMass: 50.0,
        hardness: 5.0,
        shc: 0.7,
        strength: 0.1,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.444,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 500.0
      },
      Sand: {
        tag: "Sand",
        menuOrder: 3.5,
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
        molarMass: 50.0,
        hardness: 10.0,
        shc: 0.83,
        strength: 0.25,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      Snow: {
        tag: "Snow",
        menuOrder: 8.0,
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
        molarMass: 18.01528,
        hardness: 10.0,
        shc: 2.05,
        strength: 0.3,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 0.545,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 10.0
      },
      SandStone: {
        tag: "SandStone",
        menuOrder: 7.0,
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
        molarMass: 50.0,
        hardness: 10.0,
        shc: 0.8,
        strength: 0.5,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.9,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      Glass: {
        tag: "Glass",
        menuOrder: 9.0,
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
        molarMass: 25.0,
        hardness: 10.0,
        shc: 0.84,
        strength: 1.0,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 1.11,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 800.0
      },
      Clay: {
        tag: "Clay",
        menuOrder: 2.0,
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
        molarMass: 200.0,
        hardness: 5.0,
        shc: 0.92,
        strength: 0.2,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      Ice: {
        tag: "Ice",
        menuOrder: 8.0,
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
        molarMass: 18.01528,
        hardness: 25.0,
        shc: 2.05,
        strength: 1.0,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.18,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      Graphite: {
        tag: "Graphite",
        menuOrder: 7.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "BuildableRaw"
        ],
        molarMass: 12.0107,
        hardness: 0.0,
        shc: 0.71,
        strength: 0.1,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 8.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 200.0
      },
      ToxicMud: {
        tag: "ToxicMud",
        menuOrder: 1.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Unstable",
          "Solid",
          "Organics"
        ],
        molarMass: 50.0,
        hardness: 10.0,
        shc: 0.83,
        strength: 0.25,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      Mud: {
        tag: "Mud",
        menuOrder: 1.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Unstable",
          "Solid",
          "Organics"
        ],
        molarMass: 50.0,
        hardness: 10.0,
        shc: 0.83,
        strength: 0.25,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      Carbon: {
        tag: "Carbon",
        menuOrder: 6.0,
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
        molarMass: 12.0107,
        hardness: 2.0,
        shc: 0.71,
        strength: 0.8,
        radiationAbsorptionFactor: 0.84,
        thermalConductivity: 1.25,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 600.0
      },
      SolidOxygen: {
        tag: "SolidOxygen",
        menuOrder: 11.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "Liquifiable"
        ],
        molarMass: 50.0,
        hardness: 2.0,
        shc: 1.01,
        strength: 0.5,
        radiationAbsorptionFactor: 0.82,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 500.0
      },
      Creature: {
        tag: "Creature",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid"
        ],
        molarMass: 25.0,
        hardness: 10.0,
        shc: 3.47,
        strength: 1.0,
        radiationAbsorptionFactor: 0.25,
        thermalConductivity: 0.6,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 40.0
      },
      DepletedUranium: {
        tag: "DepletedUranium",
        menuOrder: 4.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "BuildableAny",
          "RefinedMetal",
          "Solid"
        ],
        molarMass: 120.0,
        hardness: 250.0,
        shc: 1.0,
        strength: 1.0,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 20.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 100.0
      },
      Katairite: {
        tag: "Katairite",
        menuOrder: 12.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "Other"
        ],
        molarMass: 341.76,
        hardness: 150.0,
        shc: 4.0,
        strength: 2.0,
        radiationAbsorptionFactor: 0.9,
        thermalConductivity: 1E-05,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 500.0
      },
      SolidMethane: {
        tag: "SolidMethane",
        menuOrder: 6.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Solid",
          "ConsumableOre"
        ],
        molarMass: 16.044,
        hardness: 2.0,
        shc: 2.191,
        strength: 1.0,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.03,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 500.0
      },
      HardPolypropylene: {
        tag: "HardPolypropylene",
        menuOrder: 9.0,
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
        molarMass: 100.016,
        hardness: 1.0,
        shc: 1.5,
        strength: 0.4,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 0.25,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 913.0
      },
      MaficRock: {
        tag: "MaficRock",
        menuOrder: 7.0,
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
        molarMass: 50.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 1.0,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1840.0
      },
      Iron: {
        tag: "Iron",
        menuOrder: 4.0,
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
        molarMass: 55.845,
        hardness: 50.0,
        shc: 0.449,
        strength: 1.0,
        radiationAbsorptionFactor: 0.66,
        thermalConductivity: 55.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      Regolith: {
        tag: "Regolith",
        menuOrder: 3.5,
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
        molarMass: 50.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 0.5,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1000.0
      },
      SolidResin: {
        tag: "SolidResin",
        menuOrder: 1.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "Solid",
          "Organics"
        ],
        molarMass: 52.5,
        hardness: 10.0,
        shc: 1.3,
        strength: 0.2,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.17,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 30.0
      },
      TempConductorSolid: {
        tag: "TempConductorSolid",
        menuOrder: 5.0,
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
        molarMass: 174.35,
        hardness: 80.0,
        shc: 0.622,
        strength: 0.8,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 220.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 900.0
      },
      IronOre: {
        tag: "IronOre",
        menuOrder: 5.0,
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
        molarMass: 159.6882,
        hardness: 25.0,
        shc: 0.449,
        strength: 0.9,
        radiationAbsorptionFactor: 0.61,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 800.0
      },
      Dirt: {
        tag: "Dirt",
        menuOrder: 2.0,
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
        molarMass: 50.0,
        hardness: 2.0,
        shc: 1.48,
        strength: 0.2,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 1840.0
      },
      DirtyIce: {
        tag: "DirtyIce",
        menuOrder: 8.0,
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
        molarMass: 25.0,
        hardness: 10.0,
        shc: 3.05,
        strength: 1.0,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 500.0
      },
      Fossil: {
        tag: "Fossil",
        menuOrder: 7.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "BuildableRaw"
        ],
        molarMass: 200.0,
        hardness: 50.0,
        shc: 0.91,
        strength: 0.2,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 500.0
      },
      Unobtanium: {
        tag: "Unobtanium",
        menuOrder: 12.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Solid",
          "Special"
        ],
        molarMass: 10000.0,
        hardness: 255.0,
        shc: 0.0,
        radiationAbsorptionFactor: 0.9,
        thermalConductivity: 0.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 20000.0
      },
      SolidEthanol: {
        tag: "SolidEthanol",
        menuOrder: 8.0,
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
        molarMass: 46.07,
        hardness: 250.0,
        shc: 2.46,
        strength: 1.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 20.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 100.0
      },
      FoolsGold: {
        tag: "FoolsGold",
        menuOrder: 5.0,
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
        molarMass: 95.61,
        hardness: 25.0,
        shc: 0.386,
        strength: 0.7,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 4.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 800.0
      },
      Aluminum: {
        tag: "Aluminum",
        menuOrder: 4.0,
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
        molarMass: 55.845,
        hardness: 25.0,
        shc: 0.91,
        strength: 1.0,
        radiationAbsorptionFactor: 0.77,
        thermalConductivity: 205.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        defaultMass: 200.0
      }
    },
    Liquid: {
      DirtyWater: {
        tag: "DirtyWater",
        menuOrder: 15.0,
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
        molarMass: 20.0,
        shc: 4.179,
        maxCompression: 1.01,
        viscosity: 125.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.58,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.7,
        defaultMass: 1000.0
      },
      NuclearWaste: {
        tag: "NuclearWaste",
        menuOrder: 15.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Liquid"
        ],
        molarMass: 196.966568,
        shc: 7.44,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 25.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 6.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 500.0
      },
      LiquidOxygen: {
        tag: "LiquidOxygen",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Oxidizer",
          "Liquid"
        ],
        molarMass: 15.9994,
        shc: 1.01,
        maxCompression: 1.01,
        viscosity: 200.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.82,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 300.0
      },
      ViscoGel: {
        tag: "ViscoGel",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Liquid"
        ],
        molarMass: 10.0,
        shc: 1.55,
        maxCompression: 1.01,
        viscosity: 1.0,
        minHorizontalFlow: 10.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 0.45,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.1,
        defaultMass: 100.0
      },
      MoltenAluminum: {
        tag: "MoltenAluminum",
        menuOrder: 5.0,
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
        molarMass: 55.845,
        shc: 0.91,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 30.0,
        minVerticalFlow: 3.0,
        radiationAbsorptionFactor: 0.77,
        thermalConductivity: 20.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 1000.0
      },
      MoltenLead: {
        tag: "MoltenLead",
        menuOrder: 5.0,
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
        molarMass: 196.966568,
        shc: 0.128,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 25.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 11.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 3000.0
      },
      LiquidCarbonDioxide: {
        tag: "LiquidCarbonDioxide",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 44.01,
        shc: 0.846,
        maxCompression: 1.01,
        viscosity: 125.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 1.46,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 600.0
      },
      CrudeOil: {
        tag: "CrudeOil",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Liquid"
        ],
        molarMass: 500.0,
        shc: 1.69,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 870.0
      },
      MoltenGlass: {
        tag: "MoltenGlass",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Liquid"
        ],
        molarMass: 50.0,
        shc: 0.2,
        maxCompression: 1.01,
        viscosity: 60.0,
        minHorizontalFlow: 50.0,
        minVerticalFlow: 20.0,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.7,
        defaultMass: 200.0
      },
      LiquidSulfur: {
        tag: "LiquidSulfur",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 32.0,
        shc: 0.7,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.74,
        thermalConductivity: 0.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.1,
        defaultMass: 190.0
      },
      MoltenGold: {
        tag: "MoltenGold",
        menuOrder: 5.0,
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
        molarMass: 196.966568,
        shc: 0.1291,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 25.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.35,
        thermalConductivity: 6.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 870.0
      },
      Magma: {
        tag: "Magma",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Liquid"
        ],
        molarMass: 50.0,
        shc: 1.0,
        maxCompression: 1.01,
        viscosity: 60.0,
        minHorizontalFlow: 50.0,
        minVerticalFlow: 20.0,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 1840.0
      },
      Chlorine: {
        tag: "Chlorine",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 34.453,
        shc: 0.48,
        maxCompression: 1.01,
        viscosity: 180.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.73,
        thermalConductivity: 0.0081,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 600.0
      },
      LiquidHydrogen: {
        tag: "LiquidHydrogen",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 1.00794,
        shc: 2.4,
        maxCompression: 1.01,
        viscosity: 180.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.9,
        thermalConductivity: 0.1,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 600.0
      },
      Resin: {
        tag: "Resin",
        menuOrder: 15.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Liquid"
        ],
        molarMass: 52.5,
        shc: 1.11,
        maxCompression: 1.01,
        viscosity: 1.1,
        minHorizontalFlow: 1.1,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.15,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.8,
        defaultMass: 920.0
      },
      MoltenTungsten: {
        tag: "MoltenTungsten",
        menuOrder: 5.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "Liquid"
        ],
        molarMass: 183.84,
        shc: 0.134,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 20.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.35,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.7,
        defaultMass: 200.0
      },
      Petroleum: {
        tag: "Petroleum",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "CombustibleLiquid",
          "Liquid"
        ],
        molarMass: 82.2,
        shc: 1.76,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.8,
        defaultMass: 740.0
      },
      MoltenSalt: {
        tag: "MoltenSalt",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 32.0,
        shc: 0.7,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.444,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.1,
        defaultMass: 190.0
      },
      MoltenCobalt: {
        tag: "MoltenCobalt",
        menuOrder: 5.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Liquid"
        ],
        molarMass: 58.9,
        shc: 0.42,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 30.0,
        minVerticalFlow: 3.0,
        radiationAbsorptionFactor: 0.63,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 1000.0
      },
      Brine: {
        tag: "Brine",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "AnyWater",
          "Liquid"
        ],
        molarMass: 22.0,
        shc: 3.4,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.609,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.25,
        defaultMass: 1200.0
      },
      SuperCoolant: {
        tag: "SuperCoolant",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Liquid"
        ],
        molarMass: 250.0,
        shc: 8.44,
        maxCompression: 1.01,
        viscosity: 150.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 9.46,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.9,
        defaultMass: 800.0
      },
      Ethanol: {
        tag: "Ethanol",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "CombustibleLiquid",
          "Liquid"
        ],
        molarMass: 46.07,
        shc: 2.46,
        maxCompression: 1.01,
        viscosity: 125.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 0.171,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.25,
        defaultMass: 1000.0
      },
      Milk: {
        tag: "Milk",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Liquid"
        ],
        molarMass: 23.0,
        shc: 4.1,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.609,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.8,
        defaultMass: 1100.0
      },
      LiquidMethane: {
        tag: "LiquidMethane",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 16.044,
        shc: 2.191,
        maxCompression: 1.01,
        viscosity: 180.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.03,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.6,
        defaultMass: 600.0
      },
      MoltenIron: {
        tag: "MoltenIron",
        menuOrder: 5.0,
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
        molarMass: 55.845,
        shc: 0.449,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 30.0,
        minVerticalFlow: 3.0,
        radiationAbsorptionFactor: 0.66,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 1000.0
      },
      MoltenCarbon: {
        tag: "MoltenCarbon",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 12.0107,
        shc: 0.71,
        maxCompression: 1.01,
        viscosity: 150.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.84,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 600.0
      },
      Naphtha: {
        tag: "Naphtha",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Oil",
          "Liquid"
        ],
        molarMass: 102.2,
        shc: 2.191,
        maxCompression: 1.01,
        viscosity: 30.0,
        minHorizontalFlow: 10.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 0.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.8,
        defaultMass: 740.0
      },
      MoltenSucrose: {
        tag: "MoltenSucrose",
        menuOrder: 15.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 32.0,
        shc: 1.255,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 0.15,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.1,
        defaultMass: 190.0
      },
      LiquidPhosphorus: {
        tag: "LiquidPhosphorus",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Liquid"
        ],
        molarMass: 30.9737625,
        shc: 0.7697,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 2.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.236,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 200.0
      },
      MoltenSteel: {
        tag: "MoltenSteel",
        menuOrder: 5.0,
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
        molarMass: 63.546,
        shc: 0.386,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 20.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.74,
        thermalConductivity: 80.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 900.0
      },
      MoltenNiobium: {
        tag: "MoltenNiobium",
        menuOrder: 5.0,
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
        molarMass: 92.9,
        shc: 0.265,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 20.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.49,
        thermalConductivity: 54.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 900.0
      },
      Water: {
        tag: "Water",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "AnyWater",
          "Liquid"
        ],
        molarMass: 18.01528,
        shc: 4.179,
        maxCompression: 1.01,
        viscosity: 125.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.609,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.25,
        defaultMass: 1000.0
      },
      SaltWater: {
        tag: "SaltWater",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "AnyWater",
          "Liquid"
        ],
        molarMass: 21.0,
        shc: 4.1,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.609,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.25,
        defaultMass: 1100.0
      },
      MoltenUranium: {
        tag: "MoltenUranium",
        menuOrder: 5.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "Metal",
          "RefinedMetal",
          "EmitsLight",
          "Liquid"
        ],
        molarMass: 196.966568,
        shc: 1.69,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 25.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 3000.0
      },
      MoltenCopper: {
        tag: "MoltenCopper",
        menuOrder: 5.0,
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
        molarMass: 63.546,
        shc: 0.386,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 20.0,
        minVerticalFlow: 2.0,
        radiationAbsorptionFactor: 0.61,
        thermalConductivity: 12.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 1.0,
        defaultMass: 900.0
      }
    },
    Gas: {
      SulfurGas: {
        tag: "SulfurGas",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Gas",
          "Unbreathable"
        ],
        molarMass: 32.0,
        shc: 0.7,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.1,
        defaultMass: 1.0
      },
      SaltGas: {
        tag: "SaltGas",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Gas",
          "Unbreathable"
        ],
        molarMass: 50.0,
        shc: 0.88,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.444,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.1,
        defaultMass: 1.0
      },
      NiobiumGas: {
        tag: "NiobiumGas",
        menuOrder: 5.0,
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
        molarMass: 92.9,
        shc: 0.265,
        flow: 0.1,
        radiationAbsorptionFactor: 0.05,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.5,
        defaultMass: 1.0
      },
      Oxygen: {
        tag: "Oxygen",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Gas",
          "Breathable"
        ],
        molarMass: 15.9994,
        shc: 1.005,
        flow: 0.12,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 0.024,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.0,
        defaultMass: 1.0
      },
      CobaltGas: {
        tag: "CobaltGas",
        menuOrder: 5.0,
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
        molarMass: 58.9,
        shc: 0.42,
        flow: 0.1,
        radiationAbsorptionFactor: 0.06,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.5,
        defaultMass: 1.0
      },
      SteelGas: {
        tag: "SteelGas",
        menuOrder: 5.0,
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
        molarMass: 54.97,
        shc: 0.49,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.5,
        defaultMass: 1.0
      },
      ChlorineGas: {
        tag: "ChlorineGas",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Gas",
          "Unbreathable"
        ],
        molarMass: 34.453,
        shc: 0.48,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.0081,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.2,
        defaultMass: 1.0
      },
      Hydrogen: {
        tag: "Hydrogen",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Gas",
          "Unbreathable"
        ],
        molarMass: 1.00794,
        shc: 2.4,
        flow: 0.1,
        radiationAbsorptionFactor: 0.09,
        thermalConductivity: 0.168,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.1,
        defaultMass: 1.0
      },
      SourGas: {
        tag: "SourGas",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Gas",
          "Unbreathable"
        ],
        molarMass: 19.044,
        shc: 1.898,
        flow: 0.1,
        radiationAbsorptionFactor: 0.05,
        thermalConductivity: 0.018,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.25,
        defaultMass: 1.0
      },
      Steam: {
        tag: "Steam",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Gas",
          "Unbreathable"
        ],
        molarMass: 18.01528,
        shc: 4.179,
        flow: 0.1,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 0.184,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.1,
        defaultMass: 1.0
      },
      Methane: {
        tag: "Methane",
        menuOrder: 15.0,
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
        molarMass: 16.044,
        shc: 2.191,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.035,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.25,
        defaultMass: 1.0
      },
      GoldGas: {
        tag: "GoldGas",
        menuOrder: 5.0,
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
        molarMass: 196.966568,
        shc: 0.1291,
        flow: 0.1,
        radiationAbsorptionFactor: 0.03,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.5,
        defaultMass: 1.0
      },
      EthanolGas: {
        tag: "EthanolGas",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Gas",
          "Unbreathable"
        ],
        molarMass: 46.07,
        shc: 2.148,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.167,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.5,
        defaultMass: 1.0
      },
      RockGas: {
        tag: "RockGas",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molarMass: 50.0,
        shc: 1.0,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.1,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.5,
        defaultMass: 1.0
      },
      CarbonGas: {
        tag: "CarbonGas",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molarMass: 12.0107,
        shc: 0.71,
        flow: 0.1,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 1.7,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.3,
        defaultMass: 1.0
      },
      SuperCoolantGas: {
        tag: "SuperCoolantGas",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Gas",
          "Unbreathable"
        ],
        molarMass: 190.0,
        shc: 8.44,
        flow: 0.1,
        radiationAbsorptionFactor: 0.06,
        thermalConductivity: 1.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.5,
        defaultMass: 1.0
      },
      AluminumGas: {
        tag: "AluminumGas",
        menuOrder: 5.0,
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
        molarMass: 63.546,
        shc: 0.91,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 2.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.5,
        defaultMass: 1.0
      },
      TungstenGas: {
        tag: "TungstenGas",
        menuOrder: 5.0,
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
        molarMass: 183.84,
        shc: 0.134,
        flow: 0.1,
        radiationAbsorptionFactor: 0.03,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.5,
        defaultMass: 1.0
      },
      ContaminatedOxygen: {
        tag: "ContaminatedOxygen",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Gas",
          "Breathable"
        ],
        molarMass: 15.9994,
        shc: 1.01,
        flow: 0.12,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 0.024,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.1,
        defaultMass: 1.0
      },
      LeadGas: {
        tag: "LeadGas",
        menuOrder: 5.0,
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
        molarMass: 196.966568,
        shc: 0.128,
        flow: 0.1,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 3.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.5,
        defaultMass: 1.0
      },
      Fallout: {
        tag: "Fallout",
        menuOrder: 15.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molarMass: 92.9,
        shc: 0.265,
        flow: 0.1,
        radiationAbsorptionFactor: 0.03,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.5,
        defaultMass: 1.0
      },
      IronGas: {
        tag: "IronGas",
        menuOrder: 5.0,
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
        molarMass: 55.845,
        shc: 0.449,
        flow: 0.1,
        radiationAbsorptionFactor: 0.06,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.5,
        defaultMass: 1.0
      },
      PhosphorusGas: {
        tag: "PhosphorusGas",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Gas",
          "Unbreathable"
        ],
        molarMass: 30.9737625,
        shc: 0.7697,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.236,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.5,
        defaultMass: 1.0
      },
      CarbonDioxide: {
        tag: "CarbonDioxide",
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Gas",
          "Unbreathable"
        ],
        molarMass: 44.01,
        shc: 0.846,
        flow: 0.1,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 0.0146,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.1,
        defaultMass: 1.0
      },
      CopperGas: {
        tag: "CopperGas",
        menuOrder: 5.0,
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
        molarMass: 63.546,
        shc: 0.386,
        flow: 0.1,
        radiationAbsorptionFactor: 0.06,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true,
        lightAbsorption: 0.5,
        defaultMass: 1.0
      }
    },
    Other: {
      HighEnergyParticle: {
        tag: "HighEnergyParticle",
        menuOrder: 177013.0,
        tags: []
      }
    }
  },
  Space: {
    Comet: {
      RockComet: {
        tag: "RockComet",
        menuOrder: 177013.0,
        tags: [
          "Unstable",
          "Solid",
          "Filter",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "Regolith"
      },
      IronComet: {
        tag: "IronComet",
        menuOrder: 177013.0,
        tags: [
          "BuildableAny",
          "Solid",
          "RefinedMetal",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "Iron"
      },
      CopperCometConfig: {
        tag: "CopperCometConfig",
        menuOrder: 177013.0,
        tags: [
          "Ore",
          "BuildableAny",
          "Solid",
          "Metal",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "Cuprite"
      },
      GoldComet: {
        tag: "GoldComet",
        menuOrder: 177013.0,
        tags: [
          "Ore",
          "BuildableAny",
          "Solid",
          "Metal",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "GoldAmalgam"
      },
      FullereneComet: {
        tag: "FullereneComet",
        menuOrder: 177013.0,
        tags: [
          "Solid",
          "RareMaterials",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "Fullerene"
      },
      BleachStoneComet: {
        tag: "BleachStoneComet",
        menuOrder: 177013.0,
        tags: [
          "FlyingCritterEdible",
          "Solid",
          "ConsumableOre",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "BleachStone"
      },
      OxyliteComet: {
        tag: "OxyliteComet",
        menuOrder: 177013.0,
        tags: [
          "FlyingCritterEdible",
          "Oxidizer",
          "Solid",
          "ConsumableOre",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "OxyRock"
      },
      PhosphoricComet: {
        tag: "PhosphoricComet",
        menuOrder: 177013.0,
        tags: [
          "FlyingCritterEdible",
          "Solid",
          "Agriculture",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "Phosphorite"
      },
      AlgaeComet: {
        tag: "AlgaeComet",
        menuOrder: 177013.0,
        tags: [
          "Solid",
          "Organics",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "Algae"
      },
      LightDustComet: {
        tag: "LightDustComet",
        menuOrder: 177013.0,
        tags: [
          "Unstable",
          "Solid",
          "Filter",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "Regolith"
      },
      HardIceComet: {
        tag: "HardIceComet",
        menuOrder: 177013.0,
        tags: [
          "IceOre",
          "Unstable",
          "Solid",
          "Liquifiable",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "CrushedIce"
      },
      SlimeComet: {
        tag: "SlimeComet",
        menuOrder: 177013.0,
        tags: [
          "FlyingCritterEdible",
          "Solid",
          "Organics",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "SlimeMold"
      },
      UraniumComet: {
        tag: "UraniumComet",
        menuOrder: 177013.0,
        tags: [
          "BuildableAny",
          "Metal",
          "Noncrushable",
          "Solid",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "UraniumOre"
      },
      GassyMoo: {
        tag: "GassyMoo",
        menuOrder: 177013.0,
        tags: [
          "Solid",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      NuclearWasteComet: {
        tag: "NuclearWasteComet",
        menuOrder: 177013.0,
        tags: [
          "Solid",
          "Other",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "Corium"
      },
      DustComet: {
        tag: "DustComet",
        menuOrder: 177013.0,
        tags: [
          "Unstable",
          "Solid",
          "Filter",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "Regolith"
      },
      SnowballComet: {
        tag: "SnowballComet",
        menuOrder: 177013.0,
        tags: [
          "IceOre",
          "Unstable",
          "Solid",
          "Liquifiable",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "Snow"
      }
    },
    ArtifactPOI: {
      ArtifactSpacePOI_GravitasSpaceStation1: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation1",
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation2: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation2",
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation3: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation3",
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation4: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation4",
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation5: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation5",
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation6: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation6",
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation7: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation7",
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation8: {
        tag: "ArtifactSpacePOI_GravitasSpaceStation8",
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_RussellsTeapot: {
        tag: "ArtifactSpacePOI_RussellsTeapot",
        menuOrder: 177013.0,
        tags: []
      }
    },
    HarvestablePOI: {
      HarvestableSpacePOI_MetallicAsteroidField: {
        tag: "HarvestableSpacePOI_MetallicAsteroidField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_SatelliteField: {
        tag: "HarvestableSpacePOI_SatelliteField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_RockyAsteroidField: {
        tag: "HarvestableSpacePOI_RockyAsteroidField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_InterstellarIceField: {
        tag: "HarvestableSpacePOI_InterstellarIceField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_OrganicMassField: {
        tag: "HarvestableSpacePOI_OrganicMassField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_IceAsteroidField: {
        tag: "HarvestableSpacePOI_IceAsteroidField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_GasGiantCloud: {
        tag: "HarvestableSpacePOI_GasGiantCloud",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_ChlorineCloud: {
        tag: "HarvestableSpacePOI_ChlorineCloud",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_GildedAsteroidField: {
        tag: "HarvestableSpacePOI_GildedAsteroidField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_GlimmeringAsteroidField: {
        tag: "HarvestableSpacePOI_GlimmeringAsteroidField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_HeliumCloud: {
        tag: "HarvestableSpacePOI_HeliumCloud",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_OilyAsteroidField: {
        tag: "HarvestableSpacePOI_OilyAsteroidField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_OxidizedAsteroidField: {
        tag: "HarvestableSpacePOI_OxidizedAsteroidField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_SaltyAsteroidField: {
        tag: "HarvestableSpacePOI_SaltyAsteroidField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_FrozenOreField: {
        tag: "HarvestableSpacePOI_FrozenOreField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_ForestyOreField: {
        tag: "HarvestableSpacePOI_ForestyOreField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_SwampyOreField: {
        tag: "HarvestableSpacePOI_SwampyOreField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_SandyOreField: {
        tag: "HarvestableSpacePOI_SandyOreField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_RadioactiveGasCloud: {
        tag: "HarvestableSpacePOI_RadioactiveGasCloud",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_RadioactiveAsteroidField: {
        tag: "HarvestableSpacePOI_RadioactiveAsteroidField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_OxygenRichAsteroidField: {
        tag: "HarvestableSpacePOI_OxygenRichAsteroidField",
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_InterstellarOcean: {
        tag: "HarvestableSpacePOI_InterstellarOcean",
        menuOrder: 177013.0,
        tags: []
      }
    },
    Shower: {
      ClusterMapMeteorShower_Biological: {
        tag: "ClusterMapMeteorShower_Biological",
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Snow: {
        tag: "ClusterMapMeteorShower_Snow",
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Ice: {
        tag: "ClusterMapMeteorShower_Ice",
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Copper: {
        tag: "ClusterMapMeteorShower_Copper",
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Iron: {
        tag: "ClusterMapMeteorShower_Iron",
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Gold: {
        tag: "ClusterMapMeteorShower_Gold",
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Uranium: {
        tag: "ClusterMapMeteorShower_Uranium",
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_HeavyDust: {
        tag: "ClusterMapMeteorShower_HeavyDust",
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_LightDust: {
        tag: "ClusterMapMeteorShower_LightDust",
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Moo: {
        tag: "ClusterMapMeteorShower_Moo",
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Regolith: {
        tag: "ClusterMapMeteorShower_Regolith",
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Oxylite: {
        tag: "ClusterMapMeteorShower_Oxylite",
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_BleachStone: {
        tag: "ClusterMapMeteorShower_BleachStone",
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      }
    }
  },
  Artifact: {
    Any: {
      artifact_sandstone: {
        tag: "artifact_sandstone",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature"
      },
      artifact_officemug: {
        tag: "artifact_officemug",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature"
      },
      artifact_modernart: {
        tag: "artifact_modernart",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_shieldgenerator: {
        tag: "artifact_shieldgenerator",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature"
      },
      artifact_grubstatue: {
        tag: "artifact_grubstatue",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature"
      },
      artifact_eggrock: {
        tag: "artifact_eggrock",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      artifact_hatchfossil: {
        tag: "artifact_hatchfossil",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      artifact_rocktornado: {
        tag: "artifact_rocktornado",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      artifact_magmalamp: {
        tag: "artifact_magmalamp",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      artifact_rainboweggrock: {
        tag: "artifact_rainboweggrock",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature"
      },
      artifact_plasmalamp: {
        tag: "artifact_plasmalamp",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature"
      },
      artifact_moodring: {
        tag: "artifact_moodring",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature"
      },
      artifact_reactormodel: {
        tag: "artifact_reactormodel",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 80.0,
        decorRadius: 7.0,
        primaryElement: "Creature"
      }
    },
    Terrestrial: {
      artifact_sink: {
        tag: "artifact_sink",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature"
      },
      artifact_rubikscube: {
        tag: "artifact_rubikscube",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature"
      },
      artifact_okayxray: {
        tag: "artifact_okayxray",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_blender: {
        tag: "artifact_blender",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_vhs: {
        tag: "artifact_vhs",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_honeyjar: {
        tag: "artifact_honeyjar",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_brickphone: {
        tag: "artifact_brickphone",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature"
      },
      artifact_stethoscope: {
        tag: "artifact_stethoscope",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      artifact_oracle: {
        tag: "artifact_oracle",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      artifact_dnamodel: {
        tag: "artifact_dnamodel",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature"
      }
    },
    Space: {
      artifact_obelisk: {
        tag: "artifact_obelisk",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_moldavite: {
        tag: "artifact_moldavite",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_saxophone: {
        tag: "artifact_saxophone",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_ameliaswatch: {
        tag: "artifact_ameliaswatch",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature"
      },
      artifact_teapot: {
        tag: "artifact_teapot",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature"
      },
      artifact_robotarm: {
        tag: "artifact_robotarm",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature"
      },
      artifact_bioluminescentrock: {
        tag: "artifact_bioluminescentrock",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature"
      },
      artifact_pacupercolator: {
        tag: "artifact_pacupercolator",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      artifact_solarsystem: {
        tag: "artifact_solarsystem",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 80.0,
        decorRadius: 7.0,
        primaryElement: "Creature"
      },
      artifact_moonmoonmoon: {
        tag: "artifact_moonmoonmoon",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Artifact"
        ],
        mass: 25.0,
        decor: 80.0,
        decorRadius: 7.0,
        primaryElement: "Creature"
      }
    },
    Quest: {
      keepsake_megabrain: {
        tag: "keepsake_megabrain",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Keepsake"
        ],
        mass: 25.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      keepsake_crittermanipulator: {
        tag: "keepsake_crittermanipulator",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Keepsake"
        ],
        mass: 25.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      keepsake_lonelyminion: {
        tag: "keepsake_lonelyminion",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Keepsake"
        ],
        mass: 25.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      keepsake_fossilhunt: {
        tag: "keepsake_fossilhunt",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Keepsake"
        ],
        mass: 25.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      keepsake_morbrovermaker: {
        tag: "keepsake_morbrovermaker",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable",
          "PedestalDisplayable",
          "Keepsake"
        ],
        mass: 25.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      }
    }
  },
  Misc: {
    Medicine: {
      IntermediateCure: {
        tag: "IntermediateCure",
        menuOrder: 177013.0,
        tags: [
          "MedicalSupplies",
          "DoctorStationMedicalSupplies"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      IntermediateBooster: {
        tag: "IntermediateBooster",
        menuOrder: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      BasicRadPill: {
        tag: "BasicRadPill",
        menuOrder: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      BasicCure: {
        tag: "BasicCure",
        menuOrder: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      BasicBooster: {
        tag: "BasicBooster",
        menuOrder: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      Antihistamine: {
        tag: "Antihistamine",
        menuOrder: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      AdvancedCure: {
        tag: "AdvancedCure",
        menuOrder: 177013.0,
        tags: [
          "MedicalSupplies",
          "AdvancedDoctorStationMedicalSupplies"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      }
    },
    Industrial: {
      WoodLog: {
        tag: "WoodLog",
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Organics",
          "BuildingWood"
        ],
        massPerUnit: 1.0,
        mass: 1.0,
        primaryElement: "Creature"
      },
      SwampLilyFlower: {
        tag: "SwampLilyFlower",
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      ResearchDatabank: {
        tag: "ResearchDatabank",
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Experimental"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      OrbitalResearchDatabank: {
        tag: "OrbitalResearchDatabank",
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Experimental"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      CrabWoodShell: {
        tag: "CrabWoodShell",
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Organics",
          "MoltShell"
        ],
        massPerUnit: 100.0,
        mass: 100.0,
        primaryElement: "Creature"
      },
      BabyCrabWoodShell: {
        tag: "BabyCrabWoodShell",
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Organics",
          "MoltShell"
        ],
        massPerUnit: 10.0,
        mass: 10.0,
        primaryElement: "Creature"
      },
      BabyCrabShell: {
        tag: "BabyCrabShell",
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Organics"
        ],
        massPerUnit: 5.0,
        mass: 5.0,
        primaryElement: "Creature"
      },
      CrabShell: {
        tag: "CrabShell",
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Organics"
        ],
        massPerUnit: 10.0,
        mass: 10.0,
        primaryElement: "Creature"
      },
      MissileBasic: {
        tag: "MissileBasic",
        menuOrder: 177013.0,
        tags: [
          "IndustrialProduct"
        ],
        mass: 10.0,
        primaryElement: "Iron"
      },
      GeneShufflerRecharge: {
        tag: "GeneShufflerRecharge",
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient"
        ],
        mass: 5.0,
        primaryElement: "Creature"
      },
      BasicFabric: {
        tag: "BasicFabric",
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient",
          "BuildingFiber"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      GingerConfig: {
        tag: "GingerConfig",
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      }
    },
    Other: {
      TableSalt: {
        tag: "TableSalt",
        menuOrder: 177013.0,
        tags: [
          "Other"
        ],
        mass: 1.0,
        primaryElement: "Salt"
      },
      PowerStationTools: {
        tag: "PowerStationTools",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable"
        ],
        mass: 5.0,
        primaryElement: "Creature"
      },
      FarmStationTools: {
        tag: "FarmStationTools",
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable"
        ],
        mass: 5.0,
        primaryElement: "Creature"
      },
      EggShell: {
        tag: "EggShell",
        menuOrder: 177013.0,
        tags: [
          "Organics"
        ],
        massPerUnit: 1.0,
        mass: 1.0,
        primaryElement: "Creature"
      },
      GasGrassHarvested: {
        tag: "GasGrassHarvested",
        menuOrder: 177013.0,
        tags: [
          "Other"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      RotPile: {
        tag: "RotPile",
        menuOrder: 177013.0,
        tags: [
          "Organics",
          "Compostable"
        ],
        mass: 1.0,
        decor: -15.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      }
    },
    Quest: {
      DreamJournal: {
        tag: "DreamJournal",
        menuOrder: 177013.0,
        tags: [
          "StoryTraitResource"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      }
    },
    Dupe: {
      Minion: {
        tag: "Minion",
        menuOrder: 177013.0,
        tags: [
          "DupeBrain",
          "CorrosionProof"
        ],
        hp: 100,
        mass: 30.0,
        primaryElement: "Creature",
        caloriesMax: 4000000.0,
        caloriesLoss: -1666.66663,
        carryAmount: 200.0
      }
    }
  },
  Food: {
    Cooked: {
      WormBasicFruit: {
        tag: "WormBasicFruit",
        menuOrder: 0.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 0.0,
        calories: 800000.0,
        spoilTime: 4800.0
      },
      WormBasicFood: {
        tag: "WormBasicFood",
        menuOrder: 1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 1.0,
        calories: 1200000.0,
        spoilTime: 4800.0
      },
      Tofu: {
        tag: "Tofu",
        menuOrder: 2.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 2.0,
        calories: 3600000.0,
        spoilTime: 2400.0
      },
      SwampFruit: {
        tag: "SwampFruit",
        menuOrder: 0.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 0.0,
        calories: 1840000.0,
        spoilTime: 2400.0
      },
      SwampDelights: {
        tag: "SwampDelights",
        menuOrder: 1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 1.0,
        calories: 2240000.0,
        spoilTime: 4800.0
      },
      WormSuperFood: {
        tag: "WormSuperFood",
        menuOrder: 3.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 3.0,
        calories: 2400000.0,
        spoilTime: 19200.0
      },
      SpicyTofu: {
        tag: "SpicyTofu",
        menuOrder: 5.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 5.0,
        calories: 4000000.0,
        spoilTime: 2400.0
      },
      SpiceBread: {
        tag: "SpiceBread",
        menuOrder: 5.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 5.0,
        calories: 4000000.0,
        spoilTime: 4800.0
      },
      ShellfishMeat: {
        tag: "ShellfishMeat",
        menuOrder: 2.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 2.0,
        calories: 1000000.0,
        spoilTime: 2400.0
      },
      SurfAndTurf: {
        tag: "SurfAndTurf",
        menuOrder: 4.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 4.0,
        calories: 6000000.0,
        spoilTime: 2400.0
      },
      WormSuperFruit: {
        tag: "WormSuperFruit",
        menuOrder: 1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 1.0,
        calories: 250000.0,
        spoilTime: 2400.0
      },
      Salsa: {
        tag: "Salsa",
        menuOrder: 4.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 4.0,
        calories: 4400000.0,
        spoilTime: 2400.0
      },
      RawEgg: {
        tag: "RawEgg",
        menuOrder: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: -1.0,
        calories: 1600000.0,
        spoilTime: 4800.0
      },
      BasicForagePlant: {
        tag: "BasicForagePlant",
        menuOrder: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: -1.0,
        calories: 800000.0,
        spoilTime: 0.0
      },
      ForestForagePlant: {
        tag: "ForestForagePlant",
        menuOrder: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: -1.0,
        calories: 6400000.0,
        spoilTime: 0.0
      },
      ColdWheatBread: {
        tag: "ColdWheatBread",
        menuOrder: 2.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 2.0,
        calories: 1200000.0,
        spoilTime: 4800.0
      },
      CookedEgg: {
        tag: "CookedEgg",
        menuOrder: 2.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 2.0,
        calories: 2800000.0,
        spoilTime: 2400.0
      },
      CookedFish: {
        tag: "CookedFish",
        menuOrder: 3.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 3.0,
        calories: 1600000.0,
        spoilTime: 2400.0
      },
      CookedMeat: {
        tag: "CookedMeat",
        menuOrder: 3.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 3.0,
        calories: 4000000.0,
        spoilTime: 2400.0
      },
      Curry: {
        tag: "Curry",
        menuOrder: 4.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 4.0,
        calories: 5000000.0,
        spoilTime: 9600.0
      },
      FieldRation: {
        tag: "FieldRation",
        menuOrder: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: -1.0,
        calories: 800000.0,
        spoilTime: 0.0
      },
      FishMeat: {
        tag: "FishMeat",
        menuOrder: 2.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 2.0,
        calories: 1000000.0,
        spoilTime: 2400.0
      },
      FriedMushBar: {
        tag: "FriedMushBar",
        menuOrder: 0.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 0.0,
        calories: 1050000.0,
        spoilTime: 4800.0
      },
      FriedMushroom: {
        tag: "FriedMushroom",
        menuOrder: 1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 1.0,
        calories: 2800000.0,
        spoilTime: 4800.0
      },
      FruitCake: {
        tag: "FruitCake",
        menuOrder: 3.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 3.0,
        calories: 4000000.0,
        spoilTime: 0.0
      },
      Burger: {
        tag: "Burger",
        menuOrder: 6.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 6.0,
        calories: 6000000.0,
        spoilTime: 2400.0
      },
      Lettuce: {
        tag: "Lettuce",
        menuOrder: 0.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 0.0,
        calories: 400000.0,
        spoilTime: 2400.0
      },
      Meat: {
        tag: "Meat",
        menuOrder: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: -1.0,
        calories: 1600000.0,
        spoilTime: 4800.0
      },
      MushBar: {
        tag: "MushBar",
        menuOrder: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: -1.0,
        calories: 800000.0,
        spoilTime: 4800.0
      },
      Mushroom: {
        tag: "Mushroom",
        menuOrder: 0.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 0.0,
        calories: 2400000.0,
        spoilTime: 4800.0
      },
      MushroomWrap: {
        tag: "MushroomWrap",
        menuOrder: 4.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 4.0,
        calories: 4800000.0,
        spoilTime: 2400.0
      },
      PacuFillet: {
        tag: "PacuFillet",
        menuOrder: 2.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 2.0,
        calories: 1000000.0,
        spoilTime: 2400.0
      },
      Pancakes: {
        tag: "Pancakes",
        menuOrder: 3.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 3.0,
        calories: 3600000.0,
        spoilTime: 4800.0
      },
      PickledMeal: {
        tag: "PickledMeal",
        menuOrder: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible",
          "Pickled"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: -1.0,
        calories: 1800000.0,
        spoilTime: 19200.0
      },
      PlantMeat: {
        tag: "PlantMeat",
        menuOrder: 1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 1.0,
        calories: 1200000.0,
        spoilTime: 2400.0
      },
      PrickleFruit: {
        tag: "PrickleFruit",
        menuOrder: 0.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 0.0,
        calories: 1600000.0,
        spoilTime: 4800.0
      },
      Quiche: {
        tag: "Quiche",
        menuOrder: 5.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 5.0,
        calories: 6400000.0,
        spoilTime: 2400.0
      },
      GrilledPrickleFruit: {
        tag: "GrilledPrickleFruit",
        menuOrder: 1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 1.0,
        calories: 2000000.0,
        spoilTime: 4800.0
      },
      BerryPie: {
        tag: "BerryPie",
        menuOrder: 5.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 5.0,
        calories: 4200000.0,
        spoilTime: 2400.0
      },
      SwampForagePlant: {
        tag: "SwampForagePlant",
        menuOrder: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: -1.0,
        calories: 2400000.0,
        spoilTime: 0.0
      },
      BasicPlantFood: {
        tag: "BasicPlantFood",
        menuOrder: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: -1.0,
        calories: 600000.0,
        spoilTime: 4800.0
      },
      BasicPlantBar: {
        tag: "BasicPlantBar",
        menuOrder: 0.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 0.0,
        calories: 1700000.0,
        spoilTime: 4800.0
      }
    },
    Dehydrated: {
      DehydratedSurfAndTurf: {
        tag: "DehydratedSurfAndTurf",
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedSpicyTofu: {
        tag: "DehydratedSpicyTofu",
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedSpiceBread: {
        tag: "DehydratedSpiceBread",
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedSalsa: {
        tag: "DehydratedSalsa",
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedQuiche: {
        tag: "DehydratedQuiche",
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedFoodPackage: {
        tag: "DehydratedFoodPackage",
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedMushroomWrap: {
        tag: "DehydratedMushroomWrap",
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedBerryPie: {
        tag: "DehydratedBerryPie",
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedCurry: {
        tag: "DehydratedCurry",
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      }
    },
    Ingredient: {
      SpiceNut: {
        tag: "SpiceNut",
        menuOrder: 177013.0,
        tags: [
          "PedestalDisplayable",
          "CookingIngredient"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      }
    }
  },
  Critter: {
    Robot: {
      SweepBot: {
        tag: "SweepBot",
        menuOrder: -1.0,
        tags: [
          "Creature",
          "Robot",
          "Walker",
          "CreatureBrain"
        ],
        battery: 9000.0,
        mass: 25.0,
        primaryElement: "Creature",
        batteryLoss: -17.1428566
      },
      ScoutRover: {
        tag: "ScoutRover",
        menuOrder: -1.0,
        tags: [
          "Experimental",
          "DupeBrain",
          "Robot"
        ],
        battery: 180000.0,
        hp: 100,
        mass: 100.0,
        primaryElement: "Creature",
        batteryLoss: -30.0,
        carryAmount: 200.0,
        deconstructable: true
      },
      MorbRover: {
        tag: "MorbRover",
        menuOrder: -1.0,
        tags: [
          "Experimental",
          "DupeBrain",
          "Robot"
        ],
        battery: 180000.0,
        hp: 100,
        mass: 300.0,
        primaryElement: "Steel",
        batteryLoss: -30.0,
        carryAmount: 400.0,
        deconstructable: true
      }
    },
    Egg: {
      SquirrelEgg: {
        tag: "SquirrelEgg",
        menuOrder: 8.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      SquirrelHugEgg: {
        tag: "SquirrelHugEgg",
        menuOrder: 8.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      StaterpillarEgg: {
        tag: "StaterpillarEgg",
        menuOrder: 10.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      StaterpillarLiquidEgg: {
        tag: "StaterpillarLiquidEgg",
        menuOrder: 10.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      PuftEgg: {
        tag: "PuftEgg",
        menuOrder: 4.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.5,
        primaryElement: "Creature"
      },
      DreckoEgg: {
        tag: "DreckoEgg",
        menuOrder: 2.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      DreckoPlasticEgg: {
        tag: "DreckoPlasticEgg",
        menuOrder: 2.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      LightBugBlackEgg: {
        tag: "LightBugBlackEgg",
        menuOrder: 0.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.2,
        primaryElement: "Creature"
      },
      LightBugBlueEgg: {
        tag: "LightBugBlueEgg",
        menuOrder: 0.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.2,
        primaryElement: "Creature"
      },
      LightBugEgg: {
        tag: "LightBugEgg",
        menuOrder: 0.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.2,
        primaryElement: "Creature"
      },
      PuftOxyliteEgg: {
        tag: "PuftOxyliteEgg",
        menuOrder: 4.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.5,
        primaryElement: "Creature"
      },
      LightBugCrystalEgg: {
        tag: "LightBugCrystalEgg",
        menuOrder: 0.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.2,
        primaryElement: "Creature"
      },
      LightBugPinkEgg: {
        tag: "LightBugPinkEgg",
        menuOrder: 0.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.2,
        primaryElement: "Creature"
      },
      LightBugPurpleEgg: {
        tag: "LightBugPurpleEgg",
        menuOrder: 0.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.2,
        primaryElement: "Creature"
      },
      MoleEgg: {
        tag: "MoleEgg",
        menuOrder: 7.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      MoleDelicacyEgg: {
        tag: "MoleDelicacyEgg",
        menuOrder: 7.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      OilfloaterEgg: {
        tag: "OilfloaterEgg",
        menuOrder: 6.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      OilfloaterDecorEgg: {
        tag: "OilfloaterDecorEgg",
        menuOrder: 6.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      OilfloaterHighTempEgg: {
        tag: "OilfloaterHighTempEgg",
        menuOrder: 6.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      PuftAlphaEgg: {
        tag: "PuftAlphaEgg",
        menuOrder: 4.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.5,
        primaryElement: "Creature"
      },
      PuftBleachstoneEgg: {
        tag: "PuftBleachstoneEgg",
        menuOrder: 4.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.5,
        primaryElement: "Creature"
      },
      LightBugOrangeEgg: {
        tag: "LightBugOrangeEgg",
        menuOrder: 0.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 0.2,
        primaryElement: "Creature"
      },
      StaterpillarGasEgg: {
        tag: "StaterpillarGasEgg",
        menuOrder: 10.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      HatchVeggieEgg: {
        tag: "HatchVeggieEgg",
        menuOrder: 1.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      HatchEgg: {
        tag: "HatchEgg",
        menuOrder: 1.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      CrabEgg: {
        tag: "CrabEgg",
        menuOrder: 5.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      CrabWoodEgg: {
        tag: "CrabWoodEgg",
        menuOrder: 5.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      CrabFreshWaterEgg: {
        tag: "CrabFreshWaterEgg",
        menuOrder: 5.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      PacuCleanerEgg: {
        tag: "PacuCleanerEgg",
        menuOrder: 3.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primaryElement: "Creature"
      },
      DivergentBeetleEgg: {
        tag: "DivergentBeetleEgg",
        menuOrder: 9.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      HatchHardEgg: {
        tag: "HatchHardEgg",
        menuOrder: 1.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      PacuTropicalEgg: {
        tag: "PacuTropicalEgg",
        menuOrder: 3.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primaryElement: "Creature"
      },
      DivergentWormEgg: {
        tag: "DivergentWormEgg",
        menuOrder: 9.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      HatchMetalEgg: {
        tag: "HatchMetalEgg",
        menuOrder: 1.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 2.0,
        primaryElement: "Creature"
      },
      PacuEgg: {
        tag: "PacuEgg",
        menuOrder: 3.0,
        tags: [
          "Egg",
          "IncubatableEgg",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primaryElement: "Creature"
      }
    },
    Critter: {
      Squirrel: {
        tag: "Squirrel",
        menuOrder: 8.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        timeWaitPlantSeed: {
          Item1: 60.0,
          Item2: 300.0
        },
        timeWaitClimbTree: {
          Item1: 60.0,
          Item2: 120.0
        },
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      SquirrelHug: {
        tag: "SquirrelHug",
        menuOrder: 8.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 100.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 4.0,
        timeWaitPlantSeed: {
          Item1: 60.0,
          Item2: 300.0
        },
        timeWaitClimbTree: {
          Item1: 60.0,
          Item2: 120.0
        },
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Staterpillar: {
        tag: "Staterpillar",
        menuOrder: 10.0,
        tags: [
          "Walker",
          "Amphibious",
          "Creature",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarLiquid: {
        tag: "StaterpillarLiquid",
        menuOrder: 10.0,
        tags: [
          "Walker",
          "Amphibious",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 263.15,
        lowTempFatal: 243.15,
        highTempWarning: 343.15,
        highTempFatal: 363.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Puft: {
        tag: "Puft",
        menuOrder: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 288.15,
        lowTempFatal: 243.15,
        highTempWarning: 328.15,
        highTempFatal: 378.15,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      BeeHive: {
        tag: "BeeHive",
        menuOrder: 11.0,
        tags: [
          "Experimental",
          "Creature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 183.0,
        lowTempFatal: 173.0,
        highTempWarning: 263.0,
        highTempFatal: 273.0,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        caloriesMax: 4.5E+07,
        caloriesLoss: -2500.0
      },
      Bee: {
        tag: "Bee",
        menuOrder: 11.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Flyer",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 5,
        lowTempWarning: 183.0,
        lowTempFatal: 173.0,
        highTempWarning: 263.0,
        highTempFatal: 273.0,
        mass: 5.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature",
        age: 5.0,
        spacePerCritter: 4.0,
        happy: 4.0,
        glum: -1.0
      },
      Drecko: {
        tag: "Drecko",
        menuOrder: 2.0,
        tags: [
          "Walker",
          "Creature",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 308.15,
        lowTempFatal: 288.15,
        highTempWarning: 363.15,
        highTempFatal: 383.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 150.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DreckoPlastic: {
        tag: "DreckoPlastic",
        menuOrder: 2.0,
        tags: [
          "Walker",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 298.15,
        lowTempFatal: 278.15,
        highTempWarning: 333.15,
        highTempFatal: 353.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 150.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Glom: {
        tag: "Glom",
        menuOrder: 13.0,
        tags: [
          "Walker",
          "OriginalCreature",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 293.15,
        lowTempFatal: 273.15,
        highTempWarning: 393.15,
        highTempFatal: 423.15,
        mass: 25.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature"
      },
      LightBugBlack: {
        tag: "LightBugBlack",
        menuOrder: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        lowTempWarning: 263.0,
        lowTempFatal: 253.0,
        highTempWarning: 313.0,
        highTempFatal: 323.0,
        mass: 5.0,
        decor: 80.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugBlue: {
        tag: "LightBugBlue",
        menuOrder: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        lowTempWarning: 263.0,
        lowTempFatal: 253.0,
        highTempWarning: 313.0,
        highTempFatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBug: {
        tag: "LightBug",
        menuOrder: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature",
          "LightSource"
        ],
        hp: 5,
        lowTempWarning: 263.0,
        lowTempFatal: 253.0,
        highTempWarning: 313.0,
        highTempFatal: 323.0,
        mass: 5.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftOxylite: {
        tag: "PuftOxylite",
        menuOrder: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 303.15,
        lowTempFatal: 258.15,
        highTempWarning: 338.15,
        highTempFatal: 388.15,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugCrystal: {
        tag: "LightBugCrystal",
        menuOrder: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        lowTempWarning: 263.0,
        lowTempFatal: 253.0,
        highTempWarning: 313.0,
        highTempFatal: 323.0,
        mass: 5.0,
        decor: 200.0,
        decorRadius: 8.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugPink: {
        tag: "LightBugPink",
        menuOrder: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        lowTempWarning: 263.0,
        lowTempFatal: 253.0,
        highTempWarning: 313.0,
        highTempFatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugPurple: {
        tag: "LightBugPurple",
        menuOrder: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        lowTempWarning: 263.0,
        lowTempFatal: 253.0,
        highTempWarning: 313.0,
        highTempFatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Mole: {
        tag: "Mole",
        menuOrder: 7.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "Digger",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 123.149994,
        lowTempFatal: 73.1499939,
        highTempWarning: 673.15,
        highTempFatal: 773.15,
        mass: 25.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 4.8E+07,
        caloriesLoss: -8000.0,
        milkConsummer: true,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      MoleDelicacy: {
        tag: "MoleDelicacy",
        menuOrder: 7.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "Digger"
        ],
        hp: 25,
        lowTempWarning: 123.149994,
        lowTempFatal: 73.1499939,
        highTempWarning: 673.15,
        highTempFatal: 773.15,
        mass: 25.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 2.4E+07,
        caloriesLoss: -8000.0,
        milkConsummer: true,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Moo: {
        tag: "Moo",
        menuOrder: 12.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 123.149994,
        lowTempFatal: 73.1499939,
        highTempWarning: 423.15,
        highTempFatal: 473.15,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Oilfloater: {
        tag: "Oilfloater",
        menuOrder: 6.0,
        tags: [
          "Hoverer",
          "Creature",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 323.15,
        lowTempFatal: 308.15,
        highTempWarning: 413.15,
        highTempFatal: 433.15,
        mass: 50.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 600000.0,
        caloriesLoss: -200.0,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterDecor: {
        tag: "OilfloaterDecor",
        menuOrder: 6.0,
        tags: [
          "Hoverer",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 268.15,
        highTempWarning: 343.15,
        highTempFatal: 363.15,
        mass: 50.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 150.0,
        caloriesMax: 600000.0,
        caloriesLoss: -200.0,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterHighTemp: {
        tag: "OilfloaterHighTemp",
        menuOrder: 6.0,
        tags: [
          "Hoverer",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 363.15,
        lowTempFatal: 348.15,
        highTempWarning: 523.15,
        highTempFatal: 543.15,
        mass: 50.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 600000.0,
        caloriesLoss: -200.0,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftAlpha: {
        tag: "PuftAlpha",
        menuOrder: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 258.15,
        lowTempFatal: 213.15,
        highTempWarning: 338.15,
        highTempFatal: 388.15,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftBleachstone: {
        tag: "PuftBleachstone",
        menuOrder: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 258.15,
        lowTempFatal: 213.15,
        highTempWarning: 308.15,
        highTempFatal: 358.15,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugOrange: {
        tag: "LightBugOrange",
        menuOrder: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        lowTempWarning: 263.0,
        lowTempFatal: 253.0,
        highTempWarning: 313.0,
        highTempFatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarGas: {
        tag: "StaterpillarGas",
        menuOrder: 10.0,
        tags: [
          "Walker",
          "Amphibious",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 263.15,
        lowTempFatal: 243.15,
        highTempWarning: 343.15,
        highTempFatal: 363.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchVeggie: {
        tag: "HatchVeggie",
        menuOrder: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Hatch: {
        tag: "Hatch",
        menuOrder: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Crab: {
        tag: "Crab",
        menuOrder: 5.0,
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
        lowTempWarning: 288.15,
        lowTempFatal: 243.15,
        highTempWarning: 343.15,
        highTempFatal: 373.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabWood: {
        tag: "CrabWood",
        menuOrder: 5.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CrabFriend",
          "CreatureBrain",
          "Amphibious"
        ],
        hp: 25,
        lowTempWarning: 288.15,
        lowTempFatal: 243.15,
        highTempWarning: 343.15,
        highTempFatal: 373.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabFreshWater: {
        tag: "CrabFreshWater",
        menuOrder: 5.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CrabFriend",
          "CreatureBrain",
          "Amphibious"
        ],
        hp: 25,
        lowTempWarning: 288.15,
        lowTempFatal: 243.15,
        highTempWarning: 343.15,
        highTempFatal: 373.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PacuCleaner: {
        tag: "PacuCleaner",
        menuOrder: 3.0,
        tags: [
          "SwimmingCreature",
          "Swimmer",
          "BagableCreature",
          "Creature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 243.15,
        lowTempFatal: 223.15,
        highTempWarning: 278.15,
        highTempFatal: 298.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 500000.0,
        caloriesLoss: -166.666672,
        spacePerCritter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DivergentBeetle: {
        tag: "DivergentBeetle",
        menuOrder: 9.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchHard: {
        tag: "HatchHard",
        menuOrder: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 200,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PacuTropical: {
        tag: "PacuTropical",
        menuOrder: 3.0,
        tags: [
          "SwimmingCreature",
          "Swimmer",
          "BagableCreature",
          "Creature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 303.15,
        lowTempFatal: 283.15,
        highTempWarning: 353.15,
        highTempFatal: 373.15,
        mass: 200.0,
        decor: 25.0,
        decorRadius: 5.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 500000.0,
        caloriesLoss: -166.666672,
        spacePerCritter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DivergentWorm: {
        tag: "DivergentWorm",
        menuOrder: 9.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 150.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchMetal: {
        tag: "HatchMetal",
        menuOrder: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 400,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Pacu: {
        tag: "Pacu",
        menuOrder: 3.0,
        tags: [
          "SwimmingCreature",
          "Swimmer",
          "BagableCreature",
          "Creature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 273.15,
        lowTempFatal: 253.15,
        highTempWarning: 333.15,
        highTempFatal: 353.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 500000.0,
        caloriesLoss: -166.666672,
        spacePerCritter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    },
    Baby: {
      DreckoPlasticBaby: {
        tag: "DreckoPlasticBaby",
        menuOrder: 2.0,
        tags: [
          "Walker",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 298.15,
        lowTempFatal: 278.15,
        highTempWarning: 333.15,
        highTempFatal: 353.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DivergentWormBaby: {
        tag: "DivergentWormBaby",
        menuOrder: 9.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      BeeBaby: {
        tag: "BeeBaby",
        menuOrder: 11.0,
        tags: [
          "Creature",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature",
          "Walker"
        ],
        hp: 5,
        lowTempWarning: 183.0,
        lowTempFatal: 173.0,
        highTempWarning: 263.0,
        highTempFatal: 273.0,
        mass: 5.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature",
        age: 2.0,
        spacePerCritter: 4.0,
        happy: 4.0,
        glum: -1.0
      },
      DivergentBeetleBaby: {
        tag: "DivergentBeetleBaby",
        menuOrder: 9.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabFreshWaterBaby: {
        tag: "CrabFreshWaterBaby",
        menuOrder: 5.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CrabFriend",
          "CreatureBrain",
          "Amphibious"
        ],
        hp: 25,
        lowTempWarning: 288.15,
        lowTempFatal: 243.15,
        highTempWarning: 343.15,
        highTempFatal: 373.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DreckoBaby: {
        tag: "DreckoBaby",
        menuOrder: 2.0,
        tags: [
          "Walker",
          "Creature",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 308.15,
        lowTempFatal: 288.15,
        highTempWarning: 363.15,
        highTempFatal: 383.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchBaby: {
        tag: "HatchBaby",
        menuOrder: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabWoodBaby: {
        tag: "CrabWoodBaby",
        menuOrder: 5.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CrabFriend",
          "CreatureBrain",
          "Amphibious"
        ],
        hp: 25,
        lowTempWarning: 288.15,
        lowTempFatal: 243.15,
        highTempWarning: 343.15,
        highTempFatal: 373.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabBaby: {
        tag: "CrabBaby",
        menuOrder: 5.0,
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
        lowTempWarning: 288.15,
        lowTempFatal: 243.15,
        highTempWarning: 343.15,
        highTempFatal: 373.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugBaby: {
        tag: "LightBugBaby",
        menuOrder: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature",
          "LightSource"
        ],
        hp: 5,
        lowTempWarning: 263.0,
        lowTempFatal: 253.0,
        highTempWarning: 313.0,
        highTempFatal: 323.0,
        mass: 5.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchMetalBaby: {
        tag: "HatchMetalBaby",
        menuOrder: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 400,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftOxyliteBaby: {
        tag: "PuftOxyliteBaby",
        menuOrder: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 303.15,
        lowTempFatal: 258.15,
        highTempWarning: 338.15,
        highTempFatal: 388.15,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      SquirrelHugBaby: {
        tag: "SquirrelHugBaby",
        menuOrder: 8.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 100.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 4.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftBaby: {
        tag: "PuftBaby",
        menuOrder: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 288.15,
        lowTempFatal: 243.15,
        highTempWarning: 328.15,
        highTempFatal: 378.15,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftBleachstoneBaby: {
        tag: "PuftBleachstoneBaby",
        menuOrder: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 258.15,
        lowTempFatal: 213.15,
        highTempWarning: 308.15,
        highTempFatal: 358.15,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarBaby: {
        tag: "StaterpillarBaby",
        menuOrder: 10.0,
        tags: [
          "Walker",
          "Amphibious",
          "Creature",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftAlphaBaby: {
        tag: "PuftAlphaBaby",
        menuOrder: 4.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 258.15,
        lowTempFatal: 213.15,
        highTempWarning: 338.15,
        highTempFatal: 388.15,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PacuTropicalBaby: {
        tag: "PacuTropicalBaby",
        menuOrder: 3.0,
        tags: [
          "SwimmingCreature",
          "Swimmer",
          "BagableCreature",
          "Creature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 303.15,
        lowTempFatal: 283.15,
        highTempWarning: 353.15,
        highTempFatal: 373.15,
        mass: 200.0,
        decor: 25.0,
        decorRadius: 5.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 500000.0,
        caloriesLoss: -166.666672,
        spacePerCritter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PacuBaby: {
        tag: "PacuBaby",
        menuOrder: 3.0,
        tags: [
          "SwimmingCreature",
          "Swimmer",
          "BagableCreature",
          "Creature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 273.15,
        lowTempFatal: 253.15,
        highTempWarning: 333.15,
        highTempFatal: 353.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 500000.0,
        caloriesLoss: -166.666672,
        spacePerCritter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PacuCleanerBaby: {
        tag: "PacuCleanerBaby",
        menuOrder: 3.0,
        tags: [
          "SwimmingCreature",
          "Swimmer",
          "BagableCreature",
          "Creature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 243.15,
        lowTempFatal: 223.15,
        highTempWarning: 278.15,
        highTempFatal: 298.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 500000.0,
        caloriesLoss: -166.666672,
        spacePerCritter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterHighTempBaby: {
        tag: "OilfloaterHighTempBaby",
        menuOrder: 6.0,
        tags: [
          "Hoverer",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 363.15,
        lowTempFatal: 348.15,
        highTempWarning: 523.15,
        highTempFatal: 543.15,
        mass: 50.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 600000.0,
        caloriesLoss: -200.0,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarGasBaby: {
        tag: "StaterpillarGasBaby",
        menuOrder: 10.0,
        tags: [
          "Walker",
          "Amphibious",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 263.15,
        lowTempFatal: 243.15,
        highTempWarning: 343.15,
        highTempFatal: 363.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterDecorBaby: {
        tag: "OilfloaterDecorBaby",
        menuOrder: 6.0,
        tags: [
          "Hoverer",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 268.15,
        highTempWarning: 343.15,
        highTempFatal: 363.15,
        mass: 50.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 600000.0,
        caloriesLoss: -200.0,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterBaby: {
        tag: "OilfloaterBaby",
        menuOrder: 6.0,
        tags: [
          "Hoverer",
          "Creature",
          "BagableCreature",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 323.15,
        lowTempFatal: 308.15,
        highTempWarning: 413.15,
        highTempFatal: 433.15,
        mass: 50.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 600000.0,
        caloriesLoss: -200.0,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarLiquidBaby: {
        tag: "StaterpillarLiquidBaby",
        menuOrder: 10.0,
        tags: [
          "Walker",
          "Amphibious",
          "Creature",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 263.15,
        lowTempFatal: 243.15,
        highTempWarning: 343.15,
        highTempFatal: 363.15,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      MoleDelicacyBaby: {
        tag: "MoleDelicacyBaby",
        menuOrder: 7.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "Digger"
        ],
        hp: 25,
        lowTempWarning: 123.149994,
        lowTempFatal: 73.1499939,
        highTempWarning: 673.15,
        highTempFatal: 773.15,
        mass: 25.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 2.4E+07,
        caloriesLoss: -8000.0,
        milkConsummer: true,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      MoleBaby: {
        tag: "MoleBaby",
        menuOrder: 7.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "Digger",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 123.149994,
        lowTempFatal: 73.1499939,
        highTempWarning: 673.15,
        highTempFatal: 773.15,
        mass: 25.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 4.8E+07,
        caloriesLoss: -8000.0,
        milkConsummer: true,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugPurpleBaby: {
        tag: "LightBugPurpleBaby",
        menuOrder: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        lowTempWarning: 263.0,
        lowTempFatal: 253.0,
        highTempWarning: 313.0,
        highTempFatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugPinkBaby: {
        tag: "LightBugPinkBaby",
        menuOrder: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        lowTempWarning: 263.0,
        lowTempFatal: 253.0,
        highTempWarning: 313.0,
        highTempFatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugOrangeBaby: {
        tag: "LightBugOrangeBaby",
        menuOrder: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        lowTempWarning: 263.0,
        lowTempFatal: 253.0,
        highTempWarning: 313.0,
        highTempFatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugCrystalBaby: {
        tag: "LightBugCrystalBaby",
        menuOrder: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        lowTempWarning: 263.0,
        lowTempFatal: 253.0,
        highTempWarning: 313.0,
        highTempFatal: 323.0,
        mass: 5.0,
        decor: 200.0,
        decorRadius: 8.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugBlueBaby: {
        tag: "LightBugBlueBaby",
        menuOrder: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        lowTempWarning: 263.0,
        lowTempFatal: 253.0,
        highTempWarning: 313.0,
        highTempFatal: 323.0,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugBlackBaby: {
        tag: "LightBugBlackBaby",
        menuOrder: 0.0,
        tags: [
          "Creature",
          "Flyer",
          "BagableCreature",
          "CreatureBrain"
        ],
        hp: 5,
        lowTempWarning: 263.0,
        lowTempFatal: 253.0,
        highTempWarning: 313.0,
        highTempFatal: 323.0,
        mass: 5.0,
        decor: 80.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchVeggieBaby: {
        tag: "HatchVeggieBaby",
        menuOrder: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchHardBaby: {
        tag: "HatchHardBaby",
        menuOrder: 1.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain"
        ],
        hp: 200,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      SquirrelBaby: {
        tag: "SquirrelBaby",
        menuOrder: 8.0,
        tags: [
          "Creature",
          "BagableCreature",
          "Walker",
          "CreatureBrain",
          "OriginalCreature"
        ],
        hp: 25,
        lowTempWarning: 283.15,
        lowTempFatal: 243.15,
        highTempWarning: 293.15,
        highTempFatal: 343.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    }
  },
  Plant: {
    CropSeed: {
      BasicFabricMaterialPlantSeed: {
        tag: "BasicFabricMaterialPlantSeed",
        menuOrder: 177013.0,
        tags: [
          "WaterSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      BasicSingleHarvestPlantSeed: {
        tag: "BasicSingleHarvestPlantSeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      BeanPlantSeed: {
        tag: "BeanPlantSeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "PedestalDisplayable",
          "CookingIngredient"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      ColdBreatherSeed: {
        tag: "ColdBreatherSeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      ColdWheatSeed: {
        tag: "ColdWheatSeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "PedestalDisplayable",
          "CookingIngredient"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      CritterTrapPlantSeed: {
        tag: "CritterTrapPlantSeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      ForestTreeSeed: {
        tag: "ForestTreeSeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      GasGrassSeed: {
        tag: "GasGrassSeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      SaltPlantSeed: {
        tag: "SaltPlantSeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      PrickleFlowerSeed: {
        tag: "PrickleFlowerSeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      SeaLettuceSeed: {
        tag: "SeaLettuceSeed",
        menuOrder: 177013.0,
        tags: [
          "WaterSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      SpiceVineSeed: {
        tag: "SpiceVineSeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      OxyfernSeed: {
        tag: "OxyfernSeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      SwampHarvestPlantSeed: {
        tag: "SwampHarvestPlantSeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      SwampLilySeed: {
        tag: "SwampLilySeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      WormPlantSeed: {
        tag: "WormPlantSeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      MushroomSeed: {
        tag: "MushroomSeed",
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      }
    },
    Crop: {
      BasicFabricPlant: {
        tag: "BasicFabricPlant",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 295.15,
        lowTempFatal: 248.15,
        highTempWarning: 310.15,
        highTempFatal: 398.15,
        mass: 1.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        maxRadiation: 4600.0,
        age: 2.0
      },
      BasicSingleHarvestPlant: {
        tag: "BasicSingleHarvestPlant",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 283.15,
        lowTempFatal: 218.15,
        highTempWarning: 303.15,
        highTempFatal: 398.15,
        mass: 1.0,
        decor: -10.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 4600.0,
        age: 3.0
      },
      BeanPlant: {
        tag: "BeanPlant",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 248.15,
        lowTempFatal: 198.15,
        highTempWarning: 273.15,
        highTempFatal: 323.15,
        mass: 2.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 9800.0,
        age: 21.0
      },
      ColdWheat: {
        tag: "ColdWheat",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 218.15,
        lowTempFatal: 118.149994,
        highTempWarning: 278.15,
        highTempFatal: 358.15,
        mass: 1.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 12200.0,
        age: 18.0
      },
      CritterTrapPlant: {
        tag: "CritterTrapPlant",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 183.0,
        lowTempFatal: 173.0,
        highTempWarning: 273.0,
        highTempFatal: 283.0,
        mass: 4.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 2200.0,
        age: 30.0
      },
      ForestTree: {
        tag: "ForestTree",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 288.15,
        lowTempFatal: 258.15,
        highTempWarning: 313.15,
        highTempFatal: 448.15,
        mass: 2.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 9800.0,
        age: 4.5
      },
      GasGrass: {
        tag: "GasGrass",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 0.0,
        lowTempFatal: 218.15,
        highTempWarning: 348.15,
        highTempFatal: 373.15,
        mass: 1.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        maxRadiation: 12200.0,
        age: 4.0,
        minLight: 10000.0
      },
      SaltPlant: {
        tag: "SaltPlant",
        menuOrder: 177013.0,
        tags: [
          "Hanging",
          "Plant"
        ],
        lowTempWarning: 248.15,
        lowTempFatal: 198.15,
        highTempWarning: 323.15,
        highTempFatal: 393.15,
        mass: 2.0,
        decor: -10.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 7400.0,
        age: 6.0
      },
      PrickleFlower: {
        tag: "PrickleFlower",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 278.15,
        lowTempFatal: 218.15,
        highTempWarning: 303.15,
        highTempFatal: 398.15,
        mass: 1.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 4600.0,
        age: 6.0,
        minLight: 200.0
      },
      SeaLettuce: {
        tag: "SeaLettuce",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 295.15,
        lowTempFatal: 248.15,
        highTempWarning: 338.15,
        highTempFatal: 398.15,
        mass: 1.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        maxRadiation: 7400.0,
        age: 12.0
      },
      SpiceVine: {
        tag: "SpiceVine",
        menuOrder: 177013.0,
        tags: [
          "Hanging",
          "Plant"
        ],
        lowTempWarning: 308.15,
        lowTempFatal: 258.15,
        highTempWarning: 358.15,
        highTempFatal: 448.15,
        mass: 2.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 9800.0,
        age: 8.0
      },
      SuperWormPlant: {
        tag: "SuperWormPlant",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 288.15,
        lowTempFatal: 273.15,
        highTempWarning: 323.15,
        highTempFatal: 373.15,
        mass: 1.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 9800.0,
        age: 8.0
      },
      SwampHarvestPlant: {
        tag: "SwampHarvestPlant",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 283.15,
        lowTempFatal: 218.15,
        highTempWarning: 303.15,
        highTempFatal: 398.15,
        mass: 1.0,
        decor: -10.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 4600.0,
        age: 6.6
      },
      SwampLily: {
        tag: "SwampLily",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 308.15,
        lowTempFatal: 258.15,
        highTempWarning: 358.15,
        highTempFatal: 448.15,
        mass: 1.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 4600.0,
        age: 12.0
      },
      WormPlant: {
        tag: "WormPlant",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 288.15,
        lowTempFatal: 273.15,
        highTempWarning: 323.15,
        highTempFatal: 373.15,
        mass: 1.0,
        decor: -5.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        maxRadiation: 9800.0,
        age: 4.0
      },
      MushroomPlant: {
        tag: "MushroomPlant",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 278.15,
        lowTempFatal: 228.15,
        highTempWarning: 308.15,
        highTempFatal: 398.15,
        mass: 1.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 4600.0,
        age: 7.5
      }
    },
    Forage: {
      BasicForagePlantPlanted: {
        tag: "BasicForagePlantPlanted",
        menuOrder: 177013.0,
        tags: [],
        mass: 100.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      ForestForagePlantPlanted: {
        tag: "ForestForagePlantPlanted",
        menuOrder: 177013.0,
        tags: [],
        mass: 100.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      SwampForagePlantPlanted: {
        tag: "SwampForagePlantPlanted",
        menuOrder: 177013.0,
        tags: [],
        mass: 100.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      }
    },
    DecorSeed: {
      CactusPlantSeed: {
        tag: "CactusPlantSeed",
        menuOrder: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      CylindricaSeed: {
        tag: "CylindricaSeed",
        menuOrder: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      EvilFlowerSeed: {
        tag: "EvilFlowerSeed",
        menuOrder: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      BulbPlantSeed: {
        tag: "BulbPlantSeed",
        menuOrder: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      PrickleGrassSeed: {
        tag: "PrickleGrassSeed",
        menuOrder: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      WineCupsSeed: {
        tag: "WineCupsSeed",
        menuOrder: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      ToePlantSeed: {
        tag: "ToePlantSeed",
        menuOrder: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      LeafyPlantSeed: {
        tag: "LeafyPlantSeed",
        menuOrder: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      }
    },
    Decor: {
      CactusPlant: {
        tag: "CactusPlant",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 273.15,
        lowTempFatal: 200.0,
        highTempWarning: 373.15,
        highTempFatal: 400.0,
        mass: 1.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        maxRadiation: 2200.0
      },
      ColdBreather: {
        tag: "ColdBreather",
        menuOrder: 177013.0,
        tags: [],
        lowTempWarning: 213.15,
        lowTempFatal: 183.15,
        highTempWarning: 368.15,
        highTempFatal: 463.15,
        mass: 400.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      Cylindrica: {
        tag: "Cylindrica",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 293.15,
        lowTempFatal: 288.15,
        highTempWarning: 323.15,
        highTempFatal: 373.15,
        mass: 1.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        maxRadiation: 2200.0
      },
      EvilFlower: {
        tag: "EvilFlower",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 258.15,
        lowTempFatal: 168.15,
        highTempWarning: 513.15,
        highTempFatal: 563.15,
        mass: 1.0,
        decor: 80.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        maxRadiation: 12200.0
      },
      BulbPlant: {
        tag: "BulbPlant",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 293.15,
        lowTempFatal: 288.0,
        highTempWarning: 313.15,
        highTempFatal: 333.15,
        mass: 1.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 2200.0
      },
      PrickleGrass: {
        tag: "PrickleGrass",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 283.15,
        lowTempFatal: 218.15,
        highTempWarning: 303.15,
        highTempFatal: 398.15,
        mass: 1.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        maxRadiation: 900.0
      },
      Oxyfern: {
        tag: "Oxyfern",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 273.15,
        lowTempFatal: 253.15,
        highTempWarning: 313.15,
        highTempFatal: 373.15,
        mass: 1.0,
        decor: -10.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 2200.0
      },
      WineCups: {
        tag: "WineCups",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 283.15,
        lowTempFatal: 218.15,
        highTempWarning: 303.15,
        highTempFatal: 398.15,
        mass: 1.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        maxRadiation: 900.0
      },
      ToePlant: {
        tag: "ToePlant",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 183.0,
        lowTempFatal: 173.0,
        highTempWarning: 273.0,
        highTempFatal: 283.0,
        mass: 1.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        maxRadiation: 2200.0
      },
      LeafyPlant: {
        tag: "LeafyPlant",
        menuOrder: 177013.0,
        tags: [
          "Plant"
        ],
        lowTempWarning: 293.15,
        lowTempFatal: 288.0,
        highTempWarning: 323.15,
        highTempFatal: 373.0,
        mass: 1.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        maxRadiation: 2200.0
      }
    }
  },
  Geyser: {
    Geyser: {
      GeyserGeneric_steam: {
        tag: "GeyserGeneric_steam",
        menuOrder: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_hot_steam: {
        tag: "GeyserGeneric_hot_steam",
        menuOrder: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_hot_water: {
        tag: "GeyserGeneric_hot_water",
        menuOrder: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_slush_water: {
        tag: "GeyserGeneric_slush_water",
        menuOrder: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_filthy_water: {
        tag: "GeyserGeneric_filthy_water",
        menuOrder: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_slush_salt_water: {
        tag: "GeyserGeneric_slush_salt_water",
        menuOrder: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_salt_water: {
        tag: "GeyserGeneric_salt_water",
        menuOrder: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_small_volcano: {
        tag: "GeyserGeneric_small_volcano",
        menuOrder: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_big_volcano: {
        tag: "GeyserGeneric_big_volcano",
        menuOrder: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_liquid_co2: {
        tag: "GeyserGeneric_liquid_co2",
        menuOrder: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_hot_co2: {
        tag: "GeyserGeneric_hot_co2",
        menuOrder: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_hot_hydrogen: {
        tag: "GeyserGeneric_hot_hydrogen",
        menuOrder: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_hot_po2: {
        tag: "GeyserGeneric_hot_po2",
        menuOrder: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_slimy_po2: {
        tag: "GeyserGeneric_slimy_po2",
        menuOrder: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_chlorine_gas: {
        tag: "GeyserGeneric_chlorine_gas",
        menuOrder: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_methane: {
        tag: "GeyserGeneric_methane",
        menuOrder: 0.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_molten_copper: {
        tag: "GeyserGeneric_molten_copper",
        menuOrder: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_molten_iron: {
        tag: "GeyserGeneric_molten_iron",
        menuOrder: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_molten_gold: {
        tag: "GeyserGeneric_molten_gold",
        menuOrder: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_molten_aluminum: {
        tag: "GeyserGeneric_molten_aluminum",
        menuOrder: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_molten_tungsten: {
        tag: "GeyserGeneric_molten_tungsten",
        menuOrder: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_molten_niobium: {
        tag: "GeyserGeneric_molten_niobium",
        menuOrder: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_molten_cobalt: {
        tag: "GeyserGeneric_molten_cobalt",
        menuOrder: 2.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_oil_drip: {
        tag: "GeyserGeneric_oil_drip",
        menuOrder: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_liquid_sulfur: {
        tag: "GeyserGeneric_liquid_sulfur",
        menuOrder: 1.0,
        tags: [
          "GeyserFeature",
          "Solid",
          "Other"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      OilWell: {
        tag: "OilWell",
        menuOrder: 177013.0,
        tags: [
          "Plumbable",
          "Crushable",
          "BuildableAny",
          "Solid",
          "BuildableRaw"
        ],
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "SedimentaryRock"
      }
    }
  },
  Equipment: {
    Suit: {
      Atmo_Suit: {
        tag: "Atmo_Suit",
        menuOrder: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable",
          "AirtightSuit"
        ],
        mass: 200.0,
        primaryElement: "Dirt"
      },
      Jet_Suit: {
        tag: "Jet_Suit",
        menuOrder: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable",
          "AirtightSuit"
        ],
        mass: 200.0,
        primaryElement: "Steel"
      },
      Lead_Suit: {
        tag: "Lead_Suit",
        menuOrder: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable",
          "AirtightSuit"
        ],
        mass: 200.0,
        primaryElement: "Dirt"
      },
      Oxygen_Mask: {
        tag: "Oxygen_Mask",
        menuOrder: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 15.0,
        primaryElement: "Dirt"
      }
    },
    Worn: {
      Worn_Atmo_Suit: {
        tag: "Worn_Atmo_Suit",
        menuOrder: 177013.0,
        tags: [
          "Suit",
          "Clothes",
          "PedestalDisplayable",
          "AirtightSuit"
        ],
        mass: 200.0,
        primaryElement: "Creature"
      },
      Worn_Jet_Suit: {
        tag: "Worn_Jet_Suit",
        menuOrder: 177013.0,
        tags: [
          "Suit",
          "Clothes"
        ],
        mass: 200.0,
        primaryElement: "Creature"
      },
      Worn_Lead_Suit: {
        tag: "Worn_Lead_Suit",
        menuOrder: 177013.0,
        tags: [
          "Suit",
          "Clothes"
        ],
        mass: 200.0,
        primaryElement: "Creature"
      },
      Worn_Oxygen_Mask: {
        tag: "Worn_Oxygen_Mask",
        menuOrder: 177013.0,
        tags: [
          "Suit",
          "Clothes"
        ],
        mass: 15.0,
        primaryElement: "Creature"
      }
    },
    Clothes: {
      Cool_Vest: {
        tag: "Cool_Vest",
        menuOrder: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primaryElement: "Carbon"
      },
      CustomClothing: {
        tag: "CustomClothing",
        menuOrder: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 7.0,
        primaryElement: "Carbon"
      },
      Funky_Vest: {
        tag: "Funky_Vest",
        menuOrder: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primaryElement: "Carbon"
      },
      SleepClinicPajamas: {
        tag: "SleepClinicPajamas",
        menuOrder: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primaryElement: "Carbon"
      },
      Warm_Vest: {
        tag: "Warm_Vest",
        menuOrder: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primaryElement: "Carbon"
      }
    }
  }
}