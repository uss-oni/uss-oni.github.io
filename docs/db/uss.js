var db = {
  Building: {
    medical: {
      AdvancedDoctorStation: {
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
        menuOrder: 177013.0,
        tags: [],
        mass: 400.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        deconstructable: true
      },
      PioneerLander: {
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
        menuOrder: 177013.0,
        tags: []
      },
      CO2Explode: {
        menuOrder: 177013.0,
        tags: []
      },
      DebugPlacer: {
        menuOrder: 177013.0,
        tags: []
      },
      FogOfWarMask: {
        menuOrder: 177013.0,
        tags: []
      },
      fx_capture_splash: {
        menuOrder: 177013.0,
        tags: []
      },
      fx_dig_splash: {
        menuOrder: 177013.0,
        tags: []
      },
      fx_disinfect_splash: {
        menuOrder: 177013.0,
        tags: []
      },
      fx_harvest_splash: {
        menuOrder: 177013.0,
        tags: []
      },
      fx_meteorshower_bg: {
        menuOrder: 177013.0,
        tags: []
      },
      fx_paint_splash: {
        menuOrder: 177013.0,
        tags: []
      },
      fx_powertinker_splash: {
        menuOrder: 177013.0,
        tags: []
      },
      fx_tend_splash: {
        menuOrder: 177013.0,
        tags: []
      },
      fx_whirlpool_splash: {
        menuOrder: 177013.0,
        tags: []
      },
      SaveGame: {
        menuOrder: 177013.0,
        tags: []
      },
      Spawner: {
        menuOrder: 177013.0,
        tags: []
      },
      WaterExplode: {
        menuOrder: 177013.0,
        tags: []
      },
      Clustercraft: {
        menuOrder: 177013.0,
        tags: []
      },
      BalloonStand: {
        menuOrder: 177013.0,
        tags: []
      },
      BackgroundEarth: {
        menuOrder: 177013.0,
        tags: []
      },
      Asteroid: {
        menuOrder: 177013.0,
        tags: []
      },
      DeployingScoutLanderFXConfig: {
        menuOrder: 177013.0,
        tags: []
      },
      DeployingPioneerLanderFX: {
        menuOrder: 177013.0,
        tags: []
      },
      LandingPod: {
        menuOrder: 177013.0,
        tags: [],
        mass: 2000.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Creature"
      },
      ExplodingClusterShip: {
        menuOrder: 177013.0,
        tags: []
      },
      MachineParts: {
        menuOrder: 177013.0,
        tags: [],
        mass: 5.0,
        primaryElement: "Creature"
      },
      FoodSplat: {
        menuOrder: 177013.0,
        tags: [],
        mass: 1.0,
        primaryElement: "Creature"
      },
      EyeAnimation: {
        menuOrder: 177013.0,
        tags: []
      },
      FullMinionUIPortrait: {
        menuOrder: 177013.0,
        tags: []
      },
      StickerBomb: {
        menuOrder: 177013.0,
        tags: [],
        mass: 1.0,
        primaryElement: "Creature"
      },
      RailGunPayload: {
        menuOrder: 177013.0,
        tags: [
          "IgnoreMaterialCategory",
          "Experimental"
        ],
        mass: 200.0,
        primaryElement: "Creature"
      },
      MinionUIPortrait: {
        menuOrder: 177013.0,
        tags: []
      },
      MinionSelectPreview: {
        menuOrder: 177013.0,
        tags: [],
        hp: 100,
        caloriesMax: 4000000.0,
        caloriesLoss: -1666.66663,
        carryAmount: 200.0
      },
      MinionAssignablesProxy: {
        menuOrder: 177013.0,
        tags: []
      },
      Meter: {
        menuOrder: 177013.0,
        tags: []
      },
      MannequinUIPortrait: {
        menuOrder: 177013.0,
        tags: []
      },
      MouthAnimation: {
        menuOrder: 177013.0,
        tags: []
      },
      LonelyMinion: {
        menuOrder: 177013.0,
        tags: []
      },
      SleepLocator: {
        menuOrder: 177013.0,
        tags: [
          "NotConversationTopic"
        ]
      },
      ApproachableLocator: {
        menuOrder: 177013.0,
        tags: [
          "NotConversationTopic"
        ]
      },
      TargetLocator: {
        menuOrder: 177013.0,
        tags: [
          "NotConversationTopic"
        ]
      },
      OneshotReactableLocator: {
        menuOrder: 177013.0,
        tags: [
          "NotConversationTopic"
        ]
      },
      OrbitalBG: {
        menuOrder: 177013.0,
        tags: []
      },
      ResearchDestination: {
        menuOrder: 177013.0,
        tags: []
      },
      RepairableStorageProxy: {
        menuOrder: 177013.0,
        tags: [
          "NotConversationTopic"
        ]
      },
      MopPlacer: {
        menuOrder: 177013.0,
        tags: [
          "NotConversationTopic"
        ]
      },
      DigPlacer: {
        menuOrder: 177013.0,
        tags: []
      },
      TemporalTear: {
        menuOrder: 177013.0,
        tags: []
      },
      TelescopeTarget: {
        menuOrder: 177013.0,
        tags: []
      },
      StoredMinion: {
        menuOrder: 177013.0,
        tags: []
      },
      SimpleFX: {
        menuOrder: 177013.0,
        tags: []
      },
      MovePickupablePlacer: {
        menuOrder: 177013.0,
        tags: [
          "NotConversationTopic"
        ]
      },
      FishFeederBot: {
        menuOrder: 177013.0,
        tags: []
      },
      DebrisPayload: {
        menuOrder: 177013.0,
        tags: [
          "IgnoreMaterialCategory",
          "Experimental"
        ],
        mass: 100.0,
        primaryElement: "Creature"
      },
      EffectTemplateFx: {
        menuOrder: 177013.0,
        tags: []
      },
      EffectTemplateOverrideFx: {
        menuOrder: 177013.0,
        tags: []
      },
      AttackSplashFx: {
        menuOrder: 177013.0,
        tags: []
      },
      OreAbsorbFx: {
        menuOrder: 177013.0,
        tags: []
      },
      PlantDeathFx: {
        menuOrder: 177013.0,
        tags: []
      },
      BuildSplashFx: {
        menuOrder: 177013.0,
        tags: []
      },
      DemolishSplashFx: {
        menuOrder: 177013.0,
        tags: []
      },
      EscapePod: {
        menuOrder: 177013.0,
        tags: [],
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        deconstructable: true
      },
      GeyserGeneric: {
        menuOrder: 177013.0,
        tags: []
      }
    }
  },
  Element: {
    Solid: {
      Algae: {
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
        clearable: true
      },
      BleachStone: {
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
        clearable: true
      },
      OxyRock: {
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
        clearable: true
      },
      SlimeMold: {
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
        clearable: true
      },
      ToxicSand: {
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
        clearable: true
      },
      CrushedIce: {
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
        clearable: true
      },
      Diamond: {
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
        clearable: true
      },
      Isoresin: {
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
        clearable: true
      },
      Sucrose: {
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
        clearable: true
      },
      MilkFat: {
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
        clearable: true
      },
      Niobium: {
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
        clearable: true
      },
      MilkIce: {
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
        clearable: true
      },
      Cuprite: {
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
        clearable: true
      },
      Copper: {
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
        clearable: true
      },
      CrushedRock: {
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
        clearable: true
      },
      SuperInsulator: {
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
        clearable: true
      },
      BrineIce: {
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
        clearable: true
      },
      SolidViscoGel: {
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
        clearable: true
      },
      Ceramic: {
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
        clearable: true
      },
      Cobaltite: {
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
        clearable: true
      },
      Fertilizer: {
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
        clearable: true
      },
      SolidCrudeOil: {
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
        clearable: true
      },
      Wolframite: {
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
        clearable: true
      },
      Polypropylene: {
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
        clearable: true
      },
      SolidNaphtha: {
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
        clearable: true
      },
      Tungsten: {
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
        clearable: true
      },
      RefinedCarbon: {
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
        clearable: true
      },
      Steel: {
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
        clearable: true
      },
      Phosphorite: {
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
        clearable: true
      },
      SolidHydrogen: {
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
        clearable: true
      },
      Lead: {
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
        clearable: true
      },
      Sulfur: {
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
        clearable: true
      },
      Lime: {
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
        clearable: true
      },
      SolidChlorine: {
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
        clearable: true
      },
      SolidNuclearWaste: {
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
        clearable: true
      },
      Obsidian: {
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
        clearable: true
      },
      SolidPetroleum: {
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
        clearable: true
      },
      SolidSuperCoolant: {
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
        clearable: true
      },
      IgneousRock: {
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
        clearable: true
      },
      EnrichedUranium: {
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
        clearable: true
      },
      Gold: {
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
        clearable: true
      },
      Rust: {
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
        clearable: true
      },
      Corium: {
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
        clearable: true
      },
      Phosphorus: {
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
        clearable: true
      },
      Granite: {
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
        clearable: true
      },
      SolidCarbonDioxide: {
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
        clearable: true
      },
      Cobalt: {
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
        clearable: true
      },
      UraniumOre: {
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
        clearable: true
      },
      AluminumOre: {
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
        clearable: true
      },
      SedimentaryRock: {
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
        clearable: true
      },
      Fullerene: {
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
        clearable: true
      },
      GoldAmalgam: {
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
        clearable: true
      },
      Salt: {
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
        clearable: true
      },
      Sand: {
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
        clearable: true
      },
      Snow: {
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
        clearable: true
      },
      SandStone: {
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
        clearable: true
      },
      Glass: {
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
        clearable: true
      },
      Clay: {
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
        clearable: true
      },
      Ice: {
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
        clearable: true
      },
      Graphite: {
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
        clearable: true
      },
      ToxicMud: {
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
        clearable: true
      },
      Mud: {
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
        clearable: true
      },
      Carbon: {
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
        clearable: true
      },
      SolidOxygen: {
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
        clearable: true
      },
      Creature: {
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
        clearable: true
      },
      DepletedUranium: {
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
        clearable: true
      },
      Katairite: {
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
        clearable: true
      },
      SolidMethane: {
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
        clearable: true
      },
      HardPolypropylene: {
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
        clearable: true
      },
      MaficRock: {
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
        clearable: true
      },
      Iron: {
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
        clearable: true
      },
      Regolith: {
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
        clearable: true
      },
      SolidResin: {
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
        clearable: true
      },
      TempConductorSolid: {
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
        clearable: true
      },
      IronOre: {
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
        clearable: true
      },
      Dirt: {
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
        clearable: true
      },
      DirtyIce: {
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
        clearable: true
      },
      Fossil: {
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
        clearable: true
      },
      Unobtanium: {
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
        clearable: true
      },
      SolidEthanol: {
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
        clearable: true
      },
      FoolsGold: {
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
        clearable: true
      },
      Aluminum: {
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
        clearable: true
      }
    },
    Liquid: {
      DirtyWater: {
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
        hardness: 0.0,
        shc: 4.179,
        maxCompression: 1.01,
        viscosity: 125.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.58,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      NuclearWaste: {
        menuOrder: 15.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "EmitsLight",
          "Liquid"
        ],
        molarMass: 196.966568,
        hardness: 0.0,
        shc: 7.44,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 25.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 6.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LiquidOxygen: {
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
        hardness: 0.0,
        shc: 1.01,
        maxCompression: 1.01,
        viscosity: 200.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.82,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      ViscoGel: {
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
        hardness: 0.0,
        shc: 1.55,
        maxCompression: 1.01,
        viscosity: 1.0,
        minHorizontalFlow: 10.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 0.45,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenAluminum: {
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
        hardness: 0.0,
        shc: 0.91,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 30.0,
        minVerticalFlow: 3.0,
        radiationAbsorptionFactor: 0.77,
        thermalConductivity: 20.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenLead: {
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
        hardness: 0.0,
        shc: 0.128,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 25.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 11.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LiquidCarbonDioxide: {
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 44.01,
        hardness: 0.0,
        shc: 0.846,
        maxCompression: 1.01,
        viscosity: 125.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 1.46,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      CrudeOil: {
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
        hardness: 0.0,
        shc: 1.69,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenGlass: {
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
        hardness: 0.0,
        shc: 0.2,
        maxCompression: 1.01,
        viscosity: 60.0,
        minHorizontalFlow: 50.0,
        minVerticalFlow: 20.0,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LiquidSulfur: {
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 32.0,
        hardness: 0.0,
        shc: 0.7,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.74,
        thermalConductivity: 0.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenGold: {
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
        hardness: 0.0,
        shc: 0.1291,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 25.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.35,
        thermalConductivity: 6.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Magma: {
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
        hardness: 0.0,
        shc: 1.0,
        maxCompression: 1.01,
        viscosity: 60.0,
        minHorizontalFlow: 50.0,
        minVerticalFlow: 20.0,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Chlorine: {
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 34.453,
        hardness: 0.0,
        shc: 0.48,
        maxCompression: 1.01,
        viscosity: 180.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.73,
        thermalConductivity: 0.0081,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LiquidHydrogen: {
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 1.00794,
        hardness: 0.0,
        shc: 2.4,
        maxCompression: 1.01,
        viscosity: 180.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.9,
        thermalConductivity: 0.1,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Resin: {
        menuOrder: 15.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "PedestalDisplayable",
          "Liquid"
        ],
        molarMass: 52.5,
        hardness: 0.0,
        shc: 1.11,
        maxCompression: 1.01,
        viscosity: 1.1,
        minHorizontalFlow: 1.1,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.15,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenTungsten: {
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
        hardness: 0.0,
        shc: 0.134,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 20.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.35,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Petroleum: {
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
        hardness: 0.0,
        shc: 1.76,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenSalt: {
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 32.0,
        hardness: 0.0,
        shc: 0.7,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.444,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenCobalt: {
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
        hardness: 0.0,
        shc: 0.42,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 30.0,
        minVerticalFlow: 3.0,
        radiationAbsorptionFactor: 0.63,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Brine: {
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
        hardness: 0.0,
        shc: 3.4,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.609,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SuperCoolant: {
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
        hardness: 0.0,
        shc: 8.44,
        maxCompression: 1.01,
        viscosity: 150.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 9.46,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Ethanol: {
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
        hardness: 0.0,
        shc: 2.46,
        maxCompression: 1.01,
        viscosity: 125.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 0.171,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Milk: {
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
        hardness: 0.0,
        shc: 4.1,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.609,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LiquidMethane: {
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 16.044,
        hardness: 0.0,
        shc: 2.191,
        maxCompression: 1.01,
        viscosity: 180.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.03,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenIron: {
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
        hardness: 0.0,
        shc: 0.449,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 30.0,
        minVerticalFlow: 3.0,
        radiationAbsorptionFactor: 0.66,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenCarbon: {
        menuOrder: 15.0,
        dlc: [
          "Base",
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 12.0107,
        hardness: 0.0,
        shc: 0.71,
        maxCompression: 1.01,
        viscosity: 150.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.84,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Naphtha: {
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
        hardness: 0.0,
        shc: 2.191,
        maxCompression: 1.01,
        viscosity: 30.0,
        minHorizontalFlow: 10.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 0.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenSucrose: {
        menuOrder: 15.0,
        dlc: [
          "Space Out"
        ],
        tags: [
          "Liquid"
        ],
        molarMass: 32.0,
        hardness: 0.0,
        shc: 1.255,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 0.15,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LiquidPhosphorus: {
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
        hardness: 0.0,
        shc: 0.7697,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 2.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.236,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenSteel: {
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
        hardness: 0.0,
        shc: 0.386,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 20.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.74,
        thermalConductivity: 80.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenNiobium: {
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
        hardness: 0.0,
        shc: 0.265,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 20.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.49,
        thermalConductivity: 54.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Water: {
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
        hardness: 0.0,
        shc: 4.179,
        maxCompression: 1.01,
        viscosity: 125.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.609,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SaltWater: {
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
        hardness: 0.0,
        shc: 4.1,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.609,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenUranium: {
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
        hardness: 0.0,
        shc: 1.69,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 25.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenCopper: {
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
        hardness: 0.0,
        shc: 0.386,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 20.0,
        minVerticalFlow: 2.0,
        radiationAbsorptionFactor: 0.61,
        thermalConductivity: 12.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      }
    },
    Gas: {
      SulfurGas: {
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
        hardness: 0.0,
        shc: 0.7,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SaltGas: {
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
        hardness: 0.0,
        shc: 0.88,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.444,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      NiobiumGas: {
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
        hardness: 0.0,
        shc: 0.265,
        flow: 0.1,
        radiationAbsorptionFactor: 0.05,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Oxygen: {
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
        hardness: 0.0,
        shc: 1.005,
        flow: 0.12,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 0.024,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      CobaltGas: {
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
        hardness: 0.0,
        shc: 0.42,
        flow: 0.1,
        radiationAbsorptionFactor: 0.06,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SteelGas: {
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
        hardness: 0.0,
        shc: 0.49,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      ChlorineGas: {
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
        hardness: 0.0,
        shc: 0.48,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.0081,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Hydrogen: {
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
        hardness: 0.0,
        shc: 2.4,
        flow: 0.1,
        radiationAbsorptionFactor: 0.09,
        thermalConductivity: 0.168,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SourGas: {
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
        hardness: 0.0,
        shc: 1.898,
        flow: 0.1,
        radiationAbsorptionFactor: 0.05,
        thermalConductivity: 0.018,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Steam: {
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
        hardness: 0.0,
        shc: 4.179,
        flow: 0.1,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 0.184,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Methane: {
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
        hardness: 0.0,
        shc: 2.191,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.035,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      GoldGas: {
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
        hardness: 0.0,
        shc: 0.1291,
        flow: 0.1,
        radiationAbsorptionFactor: 0.03,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      EthanolGas: {
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
        hardness: 0.0,
        shc: 2.148,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.167,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      RockGas: {
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
        hardness: 0.0,
        shc: 1.0,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.1,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      CarbonGas: {
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
        hardness: 0.0,
        shc: 0.71,
        flow: 0.1,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 1.7,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SuperCoolantGas: {
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
        hardness: 0.0,
        shc: 8.44,
        flow: 0.1,
        radiationAbsorptionFactor: 0.06,
        thermalConductivity: 1.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      AluminumGas: {
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
        hardness: 0.0,
        shc: 0.91,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 2.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      TungstenGas: {
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
        hardness: 0.0,
        shc: 0.134,
        flow: 0.1,
        radiationAbsorptionFactor: 0.03,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      ContaminatedOxygen: {
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
        hardness: 0.0,
        shc: 1.01,
        flow: 0.12,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 0.024,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LeadGas: {
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
        hardness: 0.0,
        shc: 0.128,
        flow: 0.1,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 3.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Fallout: {
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
        hardness: 0.0,
        shc: 0.265,
        flow: 0.1,
        radiationAbsorptionFactor: 0.03,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      IronGas: {
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
        hardness: 0.0,
        shc: 0.449,
        flow: 0.1,
        radiationAbsorptionFactor: 0.06,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      PhosphorusGas: {
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
        hardness: 0.0,
        shc: 0.7697,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.236,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      CarbonDioxide: {
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
        hardness: 0.0,
        shc: 0.846,
        flow: 0.1,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 0.0146,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      CopperGas: {
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
        hardness: 0.0,
        shc: 0.386,
        flow: 0.1,
        radiationAbsorptionFactor: 0.06,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      }
    },
    Other: {
      HighEnergyParticle: {
        menuOrder: 177013.0,
        tags: []
      }
    }
  },
  Space: {
    Comet: {
      RockComet: {
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
        menuOrder: 177013.0,
        tags: [
          "Solid",
          "Comet"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      NuclearWasteComet: {
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
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation2: {
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation3: {
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation4: {
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation5: {
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation6: {
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation7: {
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_GravitasSpaceStation8: {
        menuOrder: 177013.0,
        tags: []
      },
      ArtifactSpacePOI_RussellsTeapot: {
        menuOrder: 177013.0,
        tags: []
      }
    },
    HarvestablePOI: {
      HarvestableSpacePOI_MetallicAsteroidField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_SatelliteField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_RockyAsteroidField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_InterstellarIceField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_OrganicMassField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_IceAsteroidField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_GasGiantCloud: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_ChlorineCloud: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_GildedAsteroidField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_GlimmeringAsteroidField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_HeliumCloud: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_OilyAsteroidField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_OxidizedAsteroidField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_SaltyAsteroidField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_FrozenOreField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_ForestyOreField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_SwampyOreField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_SandyOreField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_RadioactiveGasCloud: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_RadioactiveAsteroidField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_OxygenRichAsteroidField: {
        menuOrder: 177013.0,
        tags: []
      },
      HarvestableSpacePOI_InterstellarOcean: {
        menuOrder: 177013.0,
        tags: []
      }
    },
    Shower: {
      ClusterMapMeteorShower_Biological: {
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Snow: {
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Ice: {
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Copper: {
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Iron: {
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Gold: {
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Uranium: {
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_HeavyDust: {
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_LightDust: {
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Moo: {
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Regolith: {
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Oxylite: {
        menuOrder: 177013.0,
        tags: [],
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_BleachStone: {
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
        menuOrder: 177013.0,
        tags: [
          "MedicalSupplies",
          "DoctorStationMedicalSupplies"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      IntermediateBooster: {
        menuOrder: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      BasicRadPill: {
        menuOrder: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      BasicCure: {
        menuOrder: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      BasicBooster: {
        menuOrder: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      Antihistamine: {
        menuOrder: 177013.0,
        tags: [
          "Medicine"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      AdvancedCure: {
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
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      ResearchDatabank: {
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Experimental"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      OrbitalResearchDatabank: {
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient",
          "Experimental"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      CrabWoodShell: {
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
        menuOrder: 177013.0,
        tags: [
          "IndustrialProduct"
        ],
        mass: 10.0,
        primaryElement: "Iron"
      },
      GeneShufflerRecharge: {
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient"
        ],
        mass: 5.0,
        primaryElement: "Creature"
      },
      BasicFabric: {
        menuOrder: 177013.0,
        tags: [
          "IndustrialIngredient",
          "BuildingFiber"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      GingerConfig: {
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
        menuOrder: 177013.0,
        tags: [
          "Other"
        ],
        mass: 1.0,
        primaryElement: "Salt"
      },
      PowerStationTools: {
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable"
        ],
        mass: 5.0,
        primaryElement: "Creature"
      },
      FarmStationTools: {
        menuOrder: 177013.0,
        tags: [
          "MiscPickupable"
        ],
        mass: 5.0,
        primaryElement: "Creature"
      },
      EggShell: {
        menuOrder: 177013.0,
        tags: [
          "Organics"
        ],
        massPerUnit: 1.0,
        mass: 1.0,
        primaryElement: "Creature"
      },
      GasGrassHarvested: {
        menuOrder: 177013.0,
        tags: [
          "Other"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      RotPile: {
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
      ForestForagePlant: {
        menuOrder: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: -1.0,
        calories: 6400000.0,
        spoilTime: 4800.0
      },
      ColdWheatBread: {
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
        menuOrder: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: -1.0,
        calories: 800000.0,
        spoilTime: 19200.0
      },
      FishMeat: {
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
        menuOrder: 3.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: 3.0,
        calories: 4000000.0,
        spoilTime: 19200.0
      },
      Burger: {
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
        menuOrder: -1.0,
        tags: [
          "PedestalDisplayable",
          "Edible"
        ],
        mass: 1.0,
        primaryElement: "Creature",
        quality: -1.0,
        calories: 2400000.0,
        spoilTime: 4800.0
      },
      BasicPlantFood: {
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
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedSpicyTofu: {
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedSpiceBread: {
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedSalsa: {
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedQuiche: {
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedFoodPackage: {
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedMushroomWrap: {
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedBerryPie: {
        menuOrder: 177013.0,
        tags: [
          "Dehydrated",
          "PickupableStorage"
        ],
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedCurry: {
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
  Seed: {
    Crop: {
      BasicFabricMaterialPlantSeed: {
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
        menuOrder: 177013.0,
        tags: [
          "CropSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      },
      FilterPlantSeed: {
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
    Decor: {
      CactusPlantSeed: {
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
        menuOrder: 177013.0,
        tags: [
          "DecorSeed",
          "Seed",
          "PedestalDisplayable"
        ],
        mass: 1.0,
        primaryElement: "Creature"
      }
    }
  },
  Plant: {
    Crop: {
      BasicFabricPlant: {
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
        menuOrder: 177013.0,
        tags: [],
        mass: 100.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      ForestForagePlantPlanted: {
        menuOrder: 177013.0,
        tags: [],
        mass: 100.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      SwampForagePlantPlanted: {
        menuOrder: 177013.0,
        tags: [],
        mass: 100.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      }
    },
    Decor: {
      CactusPlant: {
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
        menuOrder: 177013.0,
        tags: [
          "Suit",
          "Clothes"
        ],
        mass: 200.0,
        primaryElement: "Creature"
      },
      Worn_Lead_Suit: {
        menuOrder: 177013.0,
        tags: [
          "Suit",
          "Clothes"
        ],
        mass: 200.0,
        primaryElement: "Creature"
      },
      Worn_Oxygen_Mask: {
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
        menuOrder: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primaryElement: "Carbon"
      },
      CustomClothing: {
        menuOrder: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 7.0,
        primaryElement: "Carbon"
      },
      Funky_Vest: {
        menuOrder: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primaryElement: "Carbon"
      },
      SleepClinicPajamas: {
        menuOrder: 177013.0,
        tags: [
          "Clothes",
          "PedestalDisplayable"
        ],
        mass: 4.0,
        primaryElement: "Carbon"
      },
      Warm_Vest: {
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