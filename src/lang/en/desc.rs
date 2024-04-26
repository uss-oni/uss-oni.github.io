use crate::lang::Game::{
  *, {self},
};

pub fn translate(game: Game) -> &'static str {
  match game {
    AdvancedDoctorStation => {
      r#"Disease clinics require power, but treat more serious illnesses than sick bays alone."#
    }
    Apothecary => {
      r#"Some medications help prevent diseases, while others aim to alleviate existing illness."#
    }
    DecontaminationShower => r#"Don't forget to decontaminate behind your ears."#,
    DoctorStation => {
      r#"Sick bays can be placed in hospital rooms to decrease the likelihood of disease spreading."#
    }
    Grave => r#"Burying dead Duplicants reduces health hazards and stress on the colony."#,
    HandSanitizer => r#"Hand sanitizers kill germs more effectively than wash basins."#,
    MassageTable => {
      r#"Massage tables quickly reduce extreme stress, at the cost of power production."#
    }
    MedicalCot => {
      r#"Duplicants use triage cots to recover from physical injuries and receive aid from peers."#
    }
    WashBasin => {
      r#"Germ spread can be reduced by building these where Duplicants often get dirty."#
    }
    WashSink => r#"Sinks are plumbed and do not need to be manually emptied or refilled."#,
    AdvancedResearchCenter => {
      r#"Super computers unlock higher technology tiers than research stations alone."#
    }
    ArtifactAnalysisStation => r#"Discover the mysteries of the past."#,
    ClothingAlterationStation => {
      r#"Allows skilled Duplicants to add extra personal pizzazz to their wardrobe."#
    }
    ClothingFabricator => {
      r#"A textile loom can be used to spin Reed Fiber into wearable Duplicant clothing."#
    }
    CraftingTable => {
      r#"Crafting stations allow Duplicants to make oxygen masks to wear in low breathability areas."#
    }
    DLC1CosmicResearchCenter => {
      r#"Planetariums allow the simulated exploration of locations recorded in Data Banks."#
    }
    FarmStation => r#"This station only has an effect on crops grown within the same room."#,
    GeneticAnalysisStation => r#"Would a mutated rose still smell as sweet?"#,
    GeoTuner => r#"The targeted geyser receives stored amplification data when it is erupting."#,
    JetSuitLocker => {
      r#"Jet suit docks can refill jet suits with air and fuel, or empty them of waste."#
    }
    JetSuitMarker => {
      r#"A checkpoint must have a correlating dock built on the opposite side its arrow faces."#
    }
    LeadSuitLocker => r#"Lead suit docks can refill lead suits with air and empty them of waste."#,
    LeadSuitMarker => {
      r#"A checkpoint must have a correlating dock built on the opposite side its arrow faces."#
    }
    MilkingStation => r#"The harvested liquid is basically the equivalent of soda for critters."#,
    MissileFabricator => {
      r#"Blastshot shells are an effective defense against incoming meteor showers."#
    }
    NuclearResearchCenter => r#"Comes with a few ions thrown in, free of charge."#,
    OrbitalResearchCenter => {
      r#"Orbital Data Collection Labs record data while orbiting a Planetoid and write it to a Data Bank. "#
    }
    OxygenMaskLocker => {
      r#"An oxygen mask dock will store and refill masks while they're not in use."#
    }
    OxygenMaskMarker => {
      r#"A checkpoint must have a correlating dock built on the opposite side its arrow faces."#
    }
    PowerControlStation => r#"Only one Duplicant may be assigned to a station at a time."#,
    RanchStation => {
      r#"Grooming critters make them look nice, smell pretty, feel happy, and produce more."#
    }
    ResearchCenter => r#"Research stations are necessary for unlocking all research tiers."#,
    ResetSkillsStation => {
      r#"Erase skills from a Duplicant's mind, returning them to their default abilities."#
    }
    ShearingStation => r#"Those critters aren't gonna shear themselves."#,
    SuitFabricator => {
      r#"Exosuits can be filled with oxygen to allow Duplicants to safely enter hazardous areas."#
    }
    SuitLocker => {
      r#"An atmo suit dock will empty atmo suits of waste, but only one suit can charge at a time."#
    }
    SuitMarker => {
      r#"A checkpoint must have a correlating dock built on the opposite side its arrow faces."#
    }
    AirBorneCritterCondo => r#"Triggers natural nesting instincts and improves critters' moods."#,
    CookingStation => {
      r#"Proper cooking eliminates foodborne disease and produces tasty, stress-relieving meals."#
    }
    CreatureFeeder => {
      r#"Critters tend to stay close to their food source and wander less when given a feeder."#
    }
    CritterCondo => r#"It's nice to have nice things."#,
    CritterDropOff => {
      r#"Duplicants automatically bring captured critters to these relocation points for release."#
    }
    CritterPickUp => r#"Duplicants will automatically wrangle excess critters."#,
    EggCracker => r#"Raw eggs are an ingredient in certain high quality food recipes."#,
    EggIncubator => {
      r#"Incubators can maintain the ideal internal conditions for several species of critter egg."#
    }
    FarmTile => {
      r#"Duplicants can deliver fertilizer and liquids to farm tiles, accelerating plant growth."#
    }
    FishDeliveryPoint => {
      r#"A fish release must be built above liquid to prevent released fish from suffocating."#
    }
    FishFeeder => r#"Build this feeder above a body of water to feed the fish within."#,
    FoodDehydrator => r#"Some of the eliminated liquid inevitably ends up on the floor."#,
    FoodRehydrator => r#"Rehydrated food is nutritious and only slightly less delicious."#,
    GourmetCookingStation => {
      r#"Luxury meals increase Duplicants' morale and prevents them from becoming stressed."#
    }
    HydroponicFarm => {
      r#"Hydroponic farms reduce Duplicant traffic by automating irrigating crops."#
    }
    MicrobeMusher => {
      r#"Musher recipes will keep Duplicants fed, but may impact health and morale over time."#
    }
    MilkFeeder => r#"It's easier to tolerate overcrowding when you're all hopped up on brackene."#,
    PlanterBox => r#"Domestically grown seeds mature more quickly than wild plants."#,
    RationBox => {
      r#"Ration boxes keep food safe from hungry critters, but don't slow food spoilage."#
    }
    Refrigerator => {
      r#"Food spoilage can be slowed by ambient conditions as well as by refrigerators."#
    }
    SpiceGrinder => r#"Crushed seeds and other edibles make excellent meal-enhancing additives."#,
    UnderwaterCritterCondo => r#"Even wild critters are happier after they've had a little R&R."#,
    CreatureAirTrap => r#"It needs to be armed prior to use."#,
    CreatureGroundTrap => {
      r#"It's designed for land critters, but flopping fish sometimes find their way in too."#
    }
    WaterTrap => r#"Trapped fish will automatically be bagged for transport."#,
    AirConditioner => r#"A thermo regulator doesn't remove heat, but relocates it to a new area."#,
    IceCooledFan => {
      r#"A Duplicant can work an Ice-E fan to temporarily cool small areas as needed."#
    }
    IceMachine => r#"Ice makers can be used as a small renewable source of ice."#,
    LiquidConditioner => r#"A thermo aquatuner cools liquid and outputs the heat elsewhere."#,
    LiquidHeater => r#"Tepidizers heat liquid which can kill waterborne germs."#,
    OilWellCap => r#"Water pumped into an oil reservoir cannot be recovered."#,
    OreScrubber => {
      r#"Scrubbers sanitize freshly mined materials before they're brought into the colony."#
    }
    SpaceHeater => r#"A space heater will radiate heat for as long as it's powered."#,
    SweepBotStation => r#"The cute little face comes pre-installed."#,
    ThermalBlock => {
      r#"The thermal properties of construction materials determine their heat retention."#
    }
    AirFilter => r#"Oh! Citrus scented!"#,
    AlgaeHabitat => r#"Algae colony, Duplicant colony... we're more alike than we are different."#,
    CO2Scrubber => {
      r#"Skimmers remove large amounts of carbon dioxide, but produce no breathable air."#
    }
    Electrolyzer => r#"Water goes in one end, life sustaining oxygen comes out the other."#,
    MineralDeoxidizer => {
      r#"Oxygen diffusers are inefficient, but output enough oxygen to keep a colony breathing."#
    }
    RustDeoxidizer => r#"Rust and salt goes in, oxygen comes out."#,
    SublimationStation => {
      r#"Sublimation is the sublime process by which solids convert directly into gas."#
    }
    AlgaeDistillery => {
      r#"Algae distillers convert disease-causing slime into algae for oxygen production."#
    }
    Chlorinator => r#"Bleach stone is useful for sanitation and geotuning."#,
    Compost => r#"Composts safely deal with biological waste, producing fresh dirt."#,
    DiamondPress => r#"Crushes refined carbon into diamond."#,
    EthanolDistillery => r#"Ethanol distillers convert Lumber into burnable Ethanol fuel."#,
    FertilizerMaker => {
      r#"Fertilizer synthesizers convert polluted dirt into fertilizer for domestic plants."#
    }
    GlassForge => r#"Glass can be used to construct window tile."#,
    Kiln => r#"Kilns can also be used to refine coal into pure carbon."#,
    MetalRefinery => {
      r#"Refined metals are necessary to build advanced electronics and technologies."#
    }
    MilkFatSeparator => {
      r#"Duplicants can slather up with brackwax to increase their travel speed in transit tubes."#
    }
    MilkPress => r#"For Duplicants who are too squeamish to milk critters."#,
    OilRefinery => r#"Petroleum can only be produced from the refinement of crude oil."#,
    OxyliteRefinery => {
      r#"Oxylite is a solid and easily transportable source of consumable oxygen."#
    }
    Polymerizer => r#"Plastic can be used to craft unique buildings and goods."#,
    RockCrusher => {
      r#"Rock Crushers loosen nuggets from raw ore and can process many different resources."#
    }
    SludgePress => r#"What Duplicant doesn't love playing with mud?"#,
    SupermaterialRefinery => {
      r#"Rare materials can be procured through rocket missions into space."#
    }
    WaterPurifier => {
      r#"Sieves cannot kill germs and pass any they receive into their waste and water output."#
    }
    Desalinator => r#"Salt can be refined into table salt for a mealtime morale boost."#,
    ArcadeMachine => r#"Komet Kablam-O!<br>For up to two players."#,
    BeachChair => r#"Soak up some relaxing sun rays."#,
    Bed => r#"Duplicants without a bed will develop sore backs from sleeping on the floor."#,
    Canvas => {
      r#"Once built, a Duplicant can paint a blank canvas to produce a decorative painting."#
    }
    CanvasTall => {
      r#"Once built, a Duplicant can paint a blank canvas to produce a decorative painting."#
    }
    CanvasWide => {
      r#"Once built, a Duplicant can paint a blank canvas to produce a decorative painting."#
    }
    CeilingLight => r#"Light reduces Duplicant stress and is required to grow certain plants."#,
    CornerMoulding => r#"Corner trim is a purely decorative addition for ceiling corners."#,
    CrownMoulding => r#"Ceiling trim is a purely decorative addition to one's overhead area."#,
    DiningTable => r#"Duplicants prefer to dine at a table, rather than eat off the floor."#,
    EspressoMachine => r#"A shot of espresso helps Duplicants relax after a long day."#,
    FloorLamp => r#"Any building's light emitting radius can be viewed in the light overlay."#,
    FlowerVase => r#"Flower pots allow decorative plants to be moved to new locations."#,
    FlowerVaseHanging => {
      r#"Hanging pots can add some Decor to a room, without blocking buildings on the floor."#
    }
    FlowerVaseHangingFancy => {
      r#"Aero pots can be hung from the ceiling and have extremely high Decor."#
    }
    FlowerVaseWall => {
      r#"Placing a plant in a wall pot can add a spot of Decor to otherwise bare walls."#
    }
    HotTub => r#"Relaxes Duplicants with massaging jets of heated liquid."#,
    IceSculpture => r#"Prone to melting."#,
    ItemPedestal => r#"Perception can be drastically changed by a bit of thoughtful presentation."#,
    Juicer => r#"Fruity juice can really brighten a Duplicant's breaktime"#,
    LadderBed => r#"Duplicant's sleep will be interrupted if another Duplicant uses the ladder."#,
    LuxuryBed => {
      r#"Duplicants prefer comfy beds to cots and wake up more rested after sleeping in them."#
    }
    MarbleSculpture => {
      r#"Duplicants who have learned art skills can produce more decorative sculptures."#
    }
    MechanicalSurfboard => r#"Mechanical waves make for radical relaxation time."#,
    MetalSculpture => {
      r#"Duplicants who have learned art skills can produce more decorative sculptures."#
    }
    MonumentBottom => r#"The base of a monument must be constructed first."#,
    MonumentMiddle => r#"Customized sections of a Great Monument can be mixed and matched."#,
    MonumentTop => {
      r#"Building a Great Monument will declare to the universe that this hunk of rock is your own."#
    }
    ParkSign => r#"Passing through parks will increase Duplicant Morale."#,
    Phonobox => r#"Dancing helps Duplicants get their innermost feelings out."#,
    PixelPack => r#"Four pixels which can be individually designated different colors."#,
    Sauna => r#"A steamy sauna soothes away all the aches and pains."#,
    Sculpture => {
      r#"Duplicants who have learned art skills can produce more decorative sculptures."#
    }
    SmallSculpture => {
      r#"Duplicants who have learned art skills can produce more decorative sculptures."#
    }
    SodaFountain => r#"Sparkling water puts a twinkle in a Duplicant's eye."#,
    SunLamp => r#"An artificial ray of sunshine."#,
    Telephone => r#"You never know who you'll meet on the other line."#,
    VerticalWindTunnel => r#"Duplicants love the feeling of high-powered wind through their hair."#,
    WaterCooler => r#"Chatting with friends improves Duplicants' moods and reduces their stress."#,
    ArtifactCargoBay => r#"Holds artifacts found in space."#,
    BatteryModule => {
      r#"Charging a battery module before takeoff makes it easier to power buildings during flight."#
    }
    CO2Engine => {
      r#"Rockets can be used to send Duplicants into space and retrieve rare resources."#
    }
    GasCargoBayCluster => r#"Holds more than a typical gas cargo canister."#,
    GasCargoBaySmall => {
      r#"Duplicants fill cargo canisters with any resources they find during space missions."#
    }
    HEPEngine => r#"Radbolt-fueled rockets support few modules, but travel exceptionally far."#,
    HabitatModuleMedium => r#"Allows Duplicants to survive space travel... Hopefully."#,
    HabitatModuleSmall => r#"One lucky Duplicant gets the best view from the whole rocket."#,
    HydrogenEngineCluster => {
      r#"Hydrogen engines can propel rockets further than steam or petroleum engines."#
    }
    KeroseneEngineCluster => r#"More powerful rocket engines can propel heavier burdens."#,
    KeroseneEngineClusterSmall => {
      r#"Rockets can be used to send Duplicants into space and retrieve rare resources."#
    }
    LiquidCargoBayCluster => r#"Holds more than a regular cargo tank."#,
    LiquidCargoBaySmall => {
      r#"Duplicants will fill cargo tanks with whatever resources they find during space missions."#
    }
    LiquidFuelTankCluster => {
      r#"Storing additional fuel increases the distance a rocket can travel before returning."#
    }
    NoseconeBasic => r#"Every rocket requires a nosecone to fly."#,
    NoseconeHarvest => r#"Harvests resources from the universe."#,
    OrbitalCargoModule => {
      r#"It's a generally good idea to pack some supplies when exploring unknown worlds."#
    }
    OxidizerTankCluster => {
      r#"Solid oxidizers allows rocket fuel to be efficiently burned in the vacuum of space."#
    }
    OxidizerTankLiquidCluster => {
      r#"Liquid oxygen improves the thrust-to-mass ratio of rocket fuels."#
    }
    PioneerModule => r#"That's one small step for Dupekind."#,
    ScannerModule => r#"Allows Duplicants to boldly go where other Duplicants haven't been yet."#,
    ScoutModule => {
      r#"Rover can conduct explorations of planetoids that don't have rocket platforms built."#
    }
    SmallOxidizerTank => {
      r#"Solid oxidizers allows rocket fuel to be efficiently burned in the vacuum of space."#
    }
    SolarPanelModule => r#"Collect solar energy before takeoff and during flight."#,
    CargoBayCluster => r#"Holds more than a regular cargo bay."#,
    SolidCargoBaySmall => {
      r#"Duplicants will fill cargo bays with any resources they find during space missions."#
    }
    SpecialCargoBayCluster => r#"Critters do not require feeding during transit."#,
    SteamEngineCluster => {
      r#"Rockets can be used to send Duplicants into space and retrieve rare resources."#
    }
    SugarEngine => r#"Not the most stylish way to travel space, but certainly the tastiest."#,
    AutoMiner => r#"A robo-miner's range can be viewed at any time by selecting the building."#,
    ModularLaunchpadPortSolid => r#"Rockets must be landed to load or unload resources."#,
    ModularLaunchpadPortSolidUnloader => r#"Rockets must be landed to load or unload resources."#,
    SolidConduitBridge => {
      r#"Separating rail systems helps ensure materials go to the intended destinations."#
    }
    SolidConduit => {
      r#"Rails move materials where they'll be needed most, saving Duplicants the walk."#
    }
    SolidConduitInbox => {
      r#"Material filters can be used to determine what resources are sent down the rail."#
    }
    SolidConduitOutbox => {
      r#"When materials reach the end of a rail they enter a receptacle to be used by Duplicants."#
    }
    SolidConduitDiseaseSensor => {
      r#"Germ sensors can help control automation behavior in the presence of germs."#
    }
    SolidConduitElementSensor => {
      r#"Element sensors can be used to detect the presence of a specific item on a rail."#
    }
    SolidConduitTemperatureSensor => {
      r#"Thermo sensors disable buildings when their rail contents reach a certain temperature."#
    }
    SolidFilter => {
      r#"All solids are sent into the building's output conveyor, except the solid chosen for filtering."#
    }
    SolidLimitValve => {
      r#"Conveyor Meters let an exact amount of materials pass through before shutting off."#
    }
    SolidLogicValve => {
      r#"Automated conveyors save power and time by removing the need for Duplicant input."#
    }
    SolidTransferArm => {
      r#"An auto-sweeper's range can be viewed at any time by (ClickType/clicking) on the building."#
    }
    SolidVent => r#"When materials reach the end of a rail they are dropped back into the world."#,
    Battery => r#"Batteries allow power from generators to be stored for later."#,
    BatteryMedium => {
      r#"Larger batteries hold more power and keep systems running longer before recharging."#
    }
    BatterySmart => r#"Smart batteries send a <b>Green Signal</b> when they require charging."#,
    Generator => {
      r#"Burning coal produces more energy than manual power, but emits heat and exhaust."#
    }
    HydrogenGenerator => {
      r#"Hydrogen generators are extremely efficient, emitting next to no waste."#
    }
    LogicPowerRelay => {
      r#"Automated systems save power and time by removing the need for Duplicant input."#
    }
    ManualGenerator => {
      r#"Watching Duplicants run on it is adorable... the electrical power is just an added bonus."#
    }
    MethaneGenerator => {
      r#"Natural gas generators leak polluted water and are best built above a waste reservoir."#
    }
    PetroleumGenerator => {
      r#"Petroleum generators have a high energy output but produce a great deal of waste."#
    }
    PowerTransformer => r#"It's a power transformer, but larger."#,
    PowerTransformerSmall => {
      r#"Limiting the power drawn by wires prevents them from incurring overload damage."#
    }
    SolarPanel => {
      r#"Solar panels convert high intensity sunlight into power and produce zero waste."#
    }
    SteamTurbine2 => r#"Useful for converting the geothermal energy into usable power."#,
    Switch => r#"Switches can only affect buildings that come after them on a circuit."#,
    WireBridge => {
      r#"Splitting generators onto separate grids can prevent overloads and wasted electricity."#
    }
    WireBridgeHighWattage => {
      r#"Joint plates can run Heavi-Watt wires through walls without leaking gas or liquid."#
    }
    Wire => r#"Electrical wire is used to connect generators, batteries, and buildings."#,
    HighWattageWire => {
      r#"Higher wattage wire is used to avoid power overloads, particularly for strong generators."#
    }
    WireRefinedBridge => {
      r#"Splitting generators onto separate systems can prevent overloads and wasted electricity."#
    }
    WireRefinedBridgeHighWattage => {
      r#"Joint plates can run Heavi-Watt wires through walls without leaking gas or liquid."#
    }
    WireRefined => {
      r#"My Duplicants prefer the look of conductive wire to the regular raggedy stuff."#
    }
    WireRefinedHighWattage => {
      r#"Higher wattage wire is used to avoid power overloads, particularly for strong generators."#
    }
    WoodGasGenerator => {
      r#"Wood burners are small and easy to maintain, but produce a fair amount of heat."#
    }
    BottleEmptier => {
      r#"A bottle emptier's Element Filter can be used to designate areas for specific liquid storage."#
    }
    LiquidConduitDiseaseSensor => {
      r#"Germ sensors can help control automation behavior in the presence of germs."#
    }
    LiquidConduitElementSensor => {
      r#"Element sensors can be used to detect the presence of a specific liquid in a pipe."#
    }
    LiquidConduitTemperatureSensor => {
      r#"Thermo sensors disable buildings when their pipe contents reach a certain temperature."#
    }
    ContactConductivePipeBridge => {
      r#"It can transfer heat effectively even if no liquid is passing through."#
    }
    FlushToilet => {
      r#"Lavatories transmit fewer germs to Duplicants' skin and require no emptying."#
    }
    InsulatedLiquidConduit => {
      r#"Pipe insulation prevents liquid contents from significantly changing temperature in transit."#
    }
    LiquidConduitBridge => {
      r#"Separate pipe systems help prevent building damage caused by mingled pipe contents."#
    }
    LiquidConduit => {
      r#"Liquid pipes are used to connect the inputs and outputs of plumbed buildings."#
    }
    LiquidConduitRadiant => {
      r#"Radiant pipes pumping cold liquid can be run through hot areas to help cool them down."#
    }
    LiquidFilter => {
      r#"All liquids are sent into the building's output pipe, except the liquid chosen for filtering."#
    }
    LiquidLimitValve => {
      r#"Meter Valves let an exact amount of liquid pass through before shutting off."#
    }
    LiquidLogicValve => {
      r#"Automated piping saves power and time by removing the need for Duplicant input."#
    }
    LiquidMiniPump => {
      r#"Mini pumps are useful for moving small quantities of liquid with minimum power."#
    }
    LiquidPump => {
      r#"Piping a pump's output to a building's intake will send liquid to that building."#
    }
    LiquidPumpingStation => {
      r#"Pitcher pumps allow Duplicants to bottle and deliver liquids from place to place."#
    }
    LiquidValve => {
      r#"Valves control the amount of liquid that moves through pipes, preventing waste."#
    }
    LiquidVent => r#"Vents are an exit point for liquids from plumbing systems."#,
    ModularLaunchpadPortLiquid => r#"Rockets must be landed to load or unload resources."#,
    ModularLaunchpadPortLiquidUnloader => r#"Rockets must be landed to load or unload resources."#,
    Outhouse => r#"The colony that eats together, excretes together."#,
    Shower => {
      r#"Regularly showering will prevent Duplicants spreading germs to the things they touch."#
    }
    WallToilet => r#"Wall Toilets transmit fewer germs to Duplicants and require no emptying."#,
    BottleEmptierGas => {
      r#"A canister emptier's Element Filter can designate areas for specific gas storage."#
    }
    GasConduitDiseaseSensor => {
      r#"Germ sensors can help control automation behavior in the presence of germs."#
    }
    GasConduitElementSensor => {
      r#"Element sensors can be used to detect the presence of a specific gas in a pipe."#
    }
    GasConduitTemperatureSensor => {
      r#"Thermo sensors disable buildings when their pipe contents reach a certain temperature."#
    }
    GasBottler => r#"Canisters allow Duplicants to manually deliver gases from place to place."#,
    GasConduitBridge => {
      r#"Separate pipe systems prevent mingled contents from causing building damage."#
    }
    GasConduit => {
      r#"Gas pipes are used to connect the inputs and outputs of ventilated buildings."#
    }
    GasConduitRadiant => {
      r#"Radiant pipes pumping cold gas can be run through hot areas to help cool them down."#
    }
    GasFilter => {
      r#"All gases are sent into the building's output pipe, except the gas chosen for filtering."#
    }
    GasLimitValve => r#"Meter Valves let an exact amount of gas pass through before shutting off."#,
    GasLogicValve => {
      r#"Automated piping saves power and time by removing the need for Duplicant input."#
    }
    GasMiniPump => {
      r#"Mini pumps are useful for moving small quantities of gas with minimum power."#
    }
    GasPump => r#"Piping a pump's output to a building's intake will send gas to that building."#,
    GasValve => r#"Valves control the amount of gas that moves through pipes, preventing waste."#,
    GasVent => r#"Vents are an exit point for gases from ventilation systems."#,
    GasVentHighPressure => {
      r#"High pressure vents can expel gas into more highly pressurized environments."#
    }
    InsulatedGasConduit => {
      r#"Pipe insulation prevents gas contents from significantly changing temperature in transit."#
    }
    ModularLaunchpadPortGas => r#"Rockets must be landed to load or unload resources."#,
    ModularLaunchpadPortGasUnloader => r#"Rockets must be landed to load or unload resources."#,
    BunkerDoor => r#"A massive, slow-moving door which is nearly indestructible."#,
    BunkerTile => r#"Bunker tile can build strong shelters in otherwise dangerous environments."#,
    CarpetTile => r#"Soft on little Duplicant toesies."#,
    Door => r#"Door controls can be used to prevent Duplicants from entering restricted areas."#,
    ExobaseHeadquarters => {
      r#"A quick and easy substitute, though it'll never live up to the original."#
    }
    ExteriorWall => {
      r#"Drywall can be used in conjunction with tiles to build airtight rooms on the surface."#
    }
    FirePole => r#"Build these in addition to ladders for efficient upward and downward movement."#,
    GasPermeableMembrane => {
      r#"Building with airflow tile promotes better gas circulation within a colony."#
    }
    GasReservoir => r#"Reservoirs cannot receive manually delivered resources."#,
    GlassTile => {
      r#"Window tiles provide a barrier against liquid and gas and are completely transparent."#
    }
    InsulationTile => {
      r#"The low thermal conductivity of insulated tiles slows any heat passing through them."#
    }
    Ladder => r#"(That means they climb it.)"#,
    LadderFast => {
      r#"Plastic ladders are mildly antiseptic and can help limit the spread of germs in a colony."#
    }
    LiquidReservoir => r#"Reservoirs cannot receive manually delivered resources."#,
    ManualPressureDoor => {
      r#"Airlocks can quarter off dangerous areas and prevent gases from seeping into the colony."#
    }
    MeshTile => r#"Mesh tile can be used to make Duplicant pathways in areas where liquid flows."#,
    MetalTile => {
      r#"Heat travels much more quickly through metal tile than other types of flooring."#
    }
    ObjectDispenser => r#"Automatic dispensers will store and drop resources in small quantities."#,
    PlasticTile => {
      r#"Plastic tile is mildly antiseptic and can help limit the spread of germs in a colony."#
    }
    PressureDoor => r#"Mechanized airlocks open and close more quickly than other types of door."#,
    StorageLocker => {
      r#"Resources left on the floor become "debris" and lower decor when not put away."#
    }
    StorageLockerSmart => {
      r#"Smart storage bins can automate resource organization based on type and mass."#
    }
    StorageTile => r#"Storage tiles keep selected non-edible solids out of the way."#,
    Tile => r#"Tile can be used to bridge gaps and get to unreachable areas."#,
    TravelTube => {
      r#"Duplicants will only exit a transit tube when a safe landing area is available beneath it."#
    }
    TravelTubeEntrance => {
      r#"Duplicants require access points to enter tubes, but not to exit them."#
    }
    TravelTubeWallBridge => {
      r#"Tube crossings can run transit tubes through walls without leaking gas or liquid."#
    }
    Checkpoint => {
      r#"Checkpoints can be connected to automated sensors to determine when it's safe to enter."#
    }
    CometDetector => r#"Networks of many scanners will scan more efficiently than one on its own."#,
    FloorSwitch => {
      r#"Weight plates can be used to turn on amenities only when Duplicants pass by."#
    }
    LogicAlarm => r#"Sends a notification when it receives a <b>Green Signal</b>."#,
    LogicCounter => r#"For numbers higher than ten connect multiple counters together."#,
    LogicCritterCountSensor => {
      r#"Detecting critter populations can help adjust their automated feeding and care regimens."#
    }
    LogicDiseaseSensor => {
      r#"Detecting germ populations can help block off or clean up dangerous areas."#
    }
    LogicDuplicantSensor => {
      r#"Motion sensors save power by only enabling buildings when Duplicants are nearby."#
    }
    LogicElementSensorGas => {
      r#"These sensors can detect the presence of a specific gas and alter systems accordingly."#
    }
    LogicElementSensorLiquid => {
      r#"These sensors can detect the presence of a specific liquid and alter systems accordingly."#
    }
    LogicGateAND => {
      r#"This gate outputs a Green Signal when both its inputs are receiving Green Signals at the same time."#
    }
    LogicGateOR => r#"This gate outputs a Green Signal if receiving one or more Green Signals."#,
    LogicGateXOR => {
      r#"This gate outputs a Green Signal if exactly one of its Inputs is receiving a Green Signal."#
    }
    LogicGateNOT => {
      r#"This gate reverses automation signals, turning a Green Signal into a Red Signal and vice versa."#
    }
    LogicGateBUFFER => {
      r#"This gate continues outputting a Green Signal for a short time after the gate stops receiving a Green Signal."#
    }
    LogicGateFILTER => {
      r#"This gate only lets a Green Signal through if its Input has received a Green Signal that lasted longer than the selected filter time."#
    }
    LogicGateMultiplexer => {
      r#"Signal Selectors can be used to select which automation signal is relevant to pass through to a given circuit"#
    }
    LogicGateDemultiplexer => {
      r#"Signal Distributors can be used to choose which circuit should receive a given automation signal."#
    }
    LogicHEPSensor => r#"Radbolt sensors can send a signal when a Radbolt passes over them."#,
    LogicHammer => r#"The hammer makes neat sounds when it strikes buildings."#,
    LogicInterasteroidReceiver => r#"Receives automation signals from space."#,
    LogicInterasteroidSender => r#"Sends automation signals into space."#,
    LogicLightSensor => {
      r#"Light sensors can tell surface bunker doors above solar panels to open or close based on solar light levels."#
    }
    LogicMemory => {
      r#"A Memory stores a Green Signal received in the Set Port (S) until the Reset Port (R) receives a Green Signal."#
    }
    LogicPressureSensorGas => {
      r#"Atmo sensors can be used to prevent excess oxygen production and overpressurization."#
    }
    LogicPressureSensorLiquid => {
      r#"A hydro sensor can tell a pump to refill its basin as soon as it contains too little liquid."#
    }
    LogicRadiationSensor => {
      r#"Radiation sensors can disable buildings when they detect dangerous levels of radiation."#
    }
    LogicRibbonBridge => {
      r#"Wire bridges allow multiple automation grids to exist in a small area without connecting."#
    }
    LogicRibbon => {
      r#"Logic ribbons use significantly less space to carry multiple automation signals."#
    }
    LogicRibbonReader => {
      r#"Inputs the signal from a single Bit in an Automation Ribbon into an Automation Wire."#
    }
    LogicRibbonWriter => {
      r#"Translates the signal from an Automation Wire to a single Bit in an Automation Ribbon"#
    }
    LogicSwitch => {
      r#"Signal switches don't turn grids on and off like power switches, but add an extra signal."#
    }
    LogicTemperatureSensor => {
      r#"Thermo sensors can disable buildings when they approach dangerous temperatures."#
    }
    LogicTimeOfDaySensor => {
      r#"Cycle sensors ensure systems always turn on at the same time, day or night, every cycle."#
    }
    LogicTimerSensor => {
      r#"Timer sensors create automation schedules for very short or very long periods of time."#
    }
    LogicWattageSensor => {
      r#"Wattage sensors can send a signal when a building has switched on or off."#
    }
    LogicWireBridge => {
      r#"Wire bridges allow multiple automation grids to exist in a small area without connecting."#
    }
    LogicWire => r#"Automation wire is used to connect building ports to automation gates."#,
    ClusterTelescope => {
      r#"Telescopes are necessary for studying space, allowing rocket travel to other worlds."#
    }
    ClusterTelescopeEnclosed => {
      r#"Telescopes are necessary for studying space, allowing rocket travel to other worlds."#
    }
    Gantry => r#"A gantry can be built over rocket pieces where ladders and tile cannot."#,
    LandingBeacon => {
      r#"Microtarget where your Interplanetary Payload lands on a Planetoid surface."#
    }
    LaunchPad => r#"A platform from which rockets can be launched and on which they can land."#,
    LogicClusterLocationSensor => {
      r#"Starmap Location sensors can signal when a spacecraft is at a certain location"#
    }
    MissileLauncher => {
      r#"Some meteors drop harvestable resources when they're blown to smithereens."#
    }
    MissionControlCluster => r#"Like a backseat driver who actually does know better."#,
    ModularLaunchpadPortBridge => r#"Allows rocket platforms to be built farther apart."#,
    RailGun => r#"It's tempting to climb inside but trust me... don't."#,
    RailGunPayloadOpener => {
      r#"Payload openers can be hooked up to conveyors, plumbing and ventilation for improved sorting."#
    }
    RocketControlStation => {
      r#"Someone needs to be around to jiggle the controls when the screensaver comes on."#
    }
    RocketInteriorGasInput => r#"It's basically central-vac."#,
    RocketInteriorGasOutput => r#"Refreshing breezes, on-demand."#,
    RocketInteriorLiquidInput => r#"Begone, foul waters!"#,
    RocketInteriorLiquidOutput => r#"Now if only we had some water balloons..."#,
    RocketInteriorPowerPlug => {
      r#"Outlets conveniently power buildings inside a cockpit using their rocket's power stores."#
    }
    RocketInteriorSolidInput => {
      r#"Why organize your shelves when you can just shove everything in here?"#
    }
    RocketInteriorSolidOutput => r#"For accessing your stored luggage mid-flight."#,
    FacilityBackWallWindow => r#""#,
    FossilDig => r#"It's not from around here."#,
    GravitasContainer => r#""#,
    GravitasCreatureManipulator => r#""#,
    GravitasDoor => r#""#,
    GravitasLabLight => r#""#,
    GravitasPedestal => {
      r#"Perception can be drastically changed by a bit of thoughtful presentation."#
    }
    Headquarters => r#"New Duplicants come out here, but thank goodness, they never go back in."#,
    MassiveHeatSink => r#""#,
    MegaBrainTank => r#""#,
    MorbRoverMaker => {
      r#"Allows a skilled Duplicant to manufacture a steady supply of icky yet effective bots."#
    }
    POIDoorInternal => r#""#,
    PropGravitasLabWall => r#""#,
    PropGravitasLabWindow => r#""#,
    PropGravitasLabWindowHorizontal => r#""#,
    PropGravitasWall => r#""#,
    RocketEnvelopeWindowTile => r#"I can see my asteroid from here!"#,
    RocketInteriorGasInputPort => {
      r#"A direct attachment leading to the output port on the exterior of the rocket."#
    }
    RocketInteriorGasOutputPort => {
      r#"A direct attachment to the input port on the exterior of a rocket."#
    }
    RocketInteriorLiquidInputPort => {
      r#"A direct attachment to the output port on the exterior of a rocket."#
    }
    RocketInteriorLiquidOutputPort => {
      r#"A direct attachment to the input port on the exterior of a rocket."#
    }
    TeleportalPad => r#"Duplicants are just atoms as far as the pad's concerned."#,
    WarpConduitReceiver => r#"The tubes at the back disappear into nowhere."#,
    WarpConduitSender => r#"The tubes at the back disappear into nowhere."#,
    ClustercraftInteriorDoor => r#"A hatch for getting in and out of the rocket."#,
    PropLadder => r#"A hard plastic ladder."#,
    GeneShuffler => {
      r#"A massive synthetic brain, suspended in saline solution.<br>There is a chair attached to the device with room for one person."#
    }
    FossilRock => {
      r#"The well-preserved partial remains of a critter of unknown origin.<br>It appears to belong to the same ancient specimen found at another site.<br>This fragment has been preserved in petrified Dirt."#
    }
    FossilResin => {
      r#"The well-preserved partial remains of a critter of unknown origin.<br>It appears to belong to the same ancient specimen found at another site.<br>This fragment has been preserved in a resin-like substance."#
    }
    FossilIce => {
      r#"The well-preserved partial remains of a critter of unknown origin.<br>It appears to belong to the same ancient specimen found at another site.<br>This fragment has been preserved in Ice."#
    }
    PropGravitasLabTable => {
      r#"The quaint research desk of a departed lab technician.<br>Perhaps the computer stores something of interest."#
    }
    PropGravitasJar2 => r#"The corpse of a proto-hatch creature meticulously preserved in a jar."#,
    PropGravitasJar1 => {
      r#"An abnormally large brain floating in embalming liquid to prevent decomposition."#
    }
    PropGravitasHandScanner => {
      r#"A sophisticated security device.<br>It appears to use a method other than fingerprints to verify an individual's identity."#
    }
    PropGravitasFloorRobot => {
      r#"The grasping robotic claw designed to assist technicians in a lab."#
    }
    PropGravitasFirstAidKit => r#"It looks like it's been used a lot."#,
    PropGravitasDisplay4 => {
      r#"An electronic display projecting the blueprint of a robotic device.<br>It looks like a ceiling robot."#
    }
    PropGravitasRobitcTable => {
      r#"The work space of an extinct robotics technician who left behind some unfinished prototypes."#
    }
    PropGravitasDeskPodium => {
      r#"A clutter-proof desk to minimize distractions.<br>There appears to be something stored in the computer."#
    }
    PropGravitasCreaturePoster => {
      r#"An anatomical illustration of the very first Hatch ever produced.<br>While the ratio of egg sac to brain may appear outlandish, it is in fact to scale."#
    }
    PropGravitasCeilingRobot => {
      r#"Non-functioning robotic arms that once assisted lab technicians."#
    }
    PropFacilityWallDegree => {
      r#"Certification in Applied Physics, awarded in recognition of one "Jacquelyn A. Stern"."#
    }
    PropFacilityTable => r#"A low coffee table that may have once held old science magazines."#,
    PropFacilityStatue => {
      r#"A large, modern sculpture that sits in the center of the lobby.<br>It's an artistic cross between an hourglass shape and a double helix."#
    }
    PropFacilityPainting => {
      r#"A painting featuring a copse of fir trees and a magnificent mountain range on the horizon.<br>The air in the room prickles with the sensation that I'm not meant to be here."#
    }
    PropFacilityHangingLight => {
      r#"A long light fixture that hangs from the ceiling.<br>It does not appear to function."#
    }
    PropGravitasDecorativeWindow => r#"A tall, thin window which once pointed to a courtyard."#,
    PropFacilityGlobeDroors => {
      r#"A filing cabinet for storing hard copy employee records.<br>The contents have been shredded."#
    }
    PropGravitasShelf => r#"A shelf holding jars just out of reach for a short person."#,
    PropReceptionDesk => {
      r#"A full coffee cup and a note abandoned mid sentence sit behind the desk.<br>It gives me an eerie feeling, as if the receptionist has stepped out and will return any moment."#
    }
    WarpReceiver => {
      r#"The functional remnants of an intricate teleportation system.<br>This is the incoming side."#
    }
    WarpPortal => {
      r#"The functional remnants of an intricate teleportation system.<br>This is the outgoing side, and has one pre-programmed destination."#
    }
    VendingMachine => r#"A pristine Nutrient Bar dispenser."#,
    SetLocker => r#"A basic metal locker.<br>It contains an assortment of personal effects."#,
    PropGravitasSmallSeedLocker => r#"A small glass cabinet.<br>There's a biohazard symbol on it."#,
    CryoTank => {
      r#"The tank appears impossibly old, but smells crisp and brand new.<br>A silhouette just barely visible through the frost of the glass."#
    }
    PropLight => r#"An elegant ceiling lamp, slightly worse for wear."#,
    PropTallPlant => r#"It's survived the vacuum of space by virtue of being plastic."#,
    PropTable => r#"A table and some chairs."#,
    PropSurfaceSatellite3 => r#"All that remains of a once peacefully orbiting satellite."#,
    PropSurfaceSatellite2 => r#"All that remains of a once peacefully orbiting satellite."#,
    PropSurfaceSatellite1 => r#"All that remains of a once peacefully orbiting satellite."#,
    PropSkeleton => r#"A detailed anatomical model.<br>It appears to be made of resin."#,
    PropFacilityDisplay => {
      r#"An electronic display projecting the blueprint of a familiar device.<br>It looks like a Printing Pod."#
    }
    PropFacilityDisplay2 => {
      r#"An electronic display projecting the blueprint of a familiar device.<br>It looks like a Mining Gun."#
    }
    PropFacilityDisplay3 => {
      r#"An electronic display projecting the blueprint of a strange device.<br>Perhaps these displays were used to entice visitors."#
    }
    PropFacilityDesk => {
      r#"A spotless desk filled with impeccably organized office supplies.<br>A photo peeks out from beneath the desk pad, depicting two beaming young women in caps and gowns.<br>The photo is quite old."#
    }
    PropFacilityCouch => {
      r#"A couch where visitors can comfortably wait before their appointments."#
    }
    PropFacilityChandelier => {
      r#"A large chandelier that hangs from the ceiling.<br>It does not appear to function."#
    }
    PropFacilityChairFlip => {
      r#"A chair where visitors can comfortably wait before their appointments."#
    }
    PropFacilityChair => {
      r#"A chair where visitors can comfortably wait before their appointments."#
    }
    PropElevator => {
      r#"Out of service.<br>The buttons inside indicate it went down more than a dozen floors at one point in time."#
    }
    PropDesk => {
      r#"An intact office desk, decorated with several personal belongings and a barely functioning computer."#
    }
    PropClock => r#"A simple wall clock.<br>It is no longer ticking."#,
    HEPBattery => r#"Particles packed up and ready to go."#,
    HEPBridgeTile => r#"Allows Radbolts to pass through walls."#,
    HighEnergyParticleRedirector => r#"We were all out of mirrors."#,
    HighEnergyParticleSpawner => {
      r#"Radbolts are necessary for producing Materials Science research."#
    }
    ManualHighEnergyParticleSpawner => {
      r#"Radbolts are necessary for producing Materials Science research."#
    }
    NuclearReactor => {
      r#"Radbolt generators and reflectors make radiation useable by other buildings."#
    }
    RadiationLight => r#"Duplicants can become sick if exposed to radiation without protection."#,
    UraniumCentrifuge => {
      r#"Enriched uranium is a specialized substance that can be used to fuel powerful research reactors."#
    }
    LonelyMinionHouse => {
      r#"Its occupant has been alone for so long, he's forgotten what friendship feels like."#
    }
    LonelyMailBox => r#"There's nothing quite like receiving homemade gifts in the mail."#,
    TemporalTearOpener => r#"Infinite possibilities, with a complimentary side of meteor showers."#,
    FossilBitsLarge => r#"Bony debris that can be excavated for Fossil."#,
    FossilBitsSmall => r#"Bony debris that can be excavated for Fossil."#,
    SapTree => {
      r#"A Liquid Resin-producing cybernetic tree that shows signs of sentience.<br>It is rooted firmly in place, and is waiting for some brave soul to bring it food."#
    }
    ScoutLander => r#"Lands Rover on a Planetoid when Rover's Module is in orbit."#,
    PioneerLander => r#"Lands a Duplicant on a Planetoid from an orbiting Trailblazer Module."#,
    Algae => {
      r#"Algae is a cluster of non-motile, single-celled lifeforms.<br>It can be used to produce Oxygen when used in an Oxygen Diffuser."#
    }
    BleachStone => {
      r#"Bleach stone is an unstable compound that emits unbreathable Chlorine Gas.<br>It is useful in Hygienic processes."#
    }
    OxyRock => {
      r#"(Ir<sub>3</sub>O<sub>2</sub>) Oxylite is a chemical compound that slowly emits breathable Oxygen.<br>Excavating Oxylite increases its emission rate, but depletes the ore more rapidly."#
    }
    SlimeMold => {
      r#"Slime is a thick biomixture of algae, fungi, and mucopolysaccharides.<br>It can be distilled into Algae and emits Polluted Oxygen once dug up."#
    }
    ToxicSand => {
      r#"Polluted Dirt is unprocessed biological waste.<br>It emits Polluted Oxygen over time."#
    }
    CrushedIce => r#"(H<sub>2</sub>O) A slush of crushed, semi-solid ice."#,
    Diamond => {
      r#"(C) Diamond is industrial-grade, high density carbon.<br>It is very difficult to excavate."#
    }
    Isoresin => {
      r#"Isoresin is a crystallized sap composed of long-chain polymers.<br>It is used in the production of rare, high grade materials."#
    }
    Sucrose => {
      r#"(C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>) Sucrose is the raw form of sugar.<br>It can be used directly for cooking, or refined and eaten with meals to increase Duplicant Morale."#
    }
    MilkFat => r#"Brackwax is a Solid byproduct of Brackene."#,
    Niobium => {
      r#"(Nb) Niobium is a rare metal with many practical applications in metallurgy and superconductor Research."#
    }
    MilkIce => r#"Frozen Brackene is Brackene frozen into a Solid state."#,
    Cuprite => {
      r#"(Cu<sub>2</sub>O) Copper Ore is a conductive Metal.<br>It is suitable for building Power systems."#
    }
    Copper => r#"(Cu) Copper is a conductive Metal.<br>It is suitable for building Power systems."#,
    SuperInsulator => {
      r#"Insulite reduces Heat Transfer and is composed of recrystallized Abyssalite."#
    }
    BrineIce => {
      r#"Brine Ice is a natural, highly concentrated solution of Salt dissolved in Water and frozen into a Solid state.<br>It can be used in desalination processes, separating out usable salt."#
    }
    SolidViscoGel => {
      r#"Visco-Gel is a polymer that has high surface tension when in Liquid form.<br>This selection is in a Solid state."#
    }
    Ceramic => {
      r#"Ceramic is a hard, brittle material formed from heated Clay.<br>It is a reliable <b>Construction Material</b>."#
    }
    Cobaltite => {
      r#"(Co) Cobalt Ore is a blue-hued Metal.<br>It is suitable for building Power systems."#
    }
    Fertilizer => {
      r#"Fertilizer is a processed mixture of biological nutrients.<br>It aids in the growth of certain Plants."#
    }
    SolidCrudeOil => r#""#,
    Wolframite => {
      r#"((Fe,Mn)WO<sub>4</sub>) Wolframite is a dense Metallic element in a Solid state.<br>It is a source of Tungsten and is suitable for building Power systems."#
    }
    Polypropylene => {
      r#"(C<sub>3</sub>H<sub>6</sub>)<sub>n</sub> Plastic is a thermoplastic polymer.<br>It is useful for constructing a variety of advanced buildings and equipment."#
    }
    SolidNaphtha => r#"Naphtha is a distilled hydrocarbon mixture in a Solid state."#,
    Tungsten => {
      r#"(W) Tungsten is an extremely tough crystalline Metal.<br>It is suitable for building Power systems."#
    }
    RefinedCarbon => r#"(C) Refined carbon is solid element purified from raw Coal."#,
    Steel => r#"Steel is a Metal Alloy composed of iron and carbon."#,
    Phosphorite => r#"Phosphorite is a composite of sedimentary rock, saturated with phosphate."#,
    SolidHydrogen => {
      r#"(H) Solid Hydrogen is the universe's most common element in a Solid state."#
    }
    Lead => {
      r#"(Pb) Lead is a soft yet extremely dense Refined Metal.<br>It has a low Overheat Temperature and is suitable for building Power systems."#
    }
    Sulfur => {
      r#"(S) Sulfur is a common chemical element and byproduct of Natural Gas production.<br>This selection is in a Solid state."#
    }
    Lime => {
      r#"(CaCO<sub>3</sub>) Lime is a mineral commonly found in Critter egg shells.<br>It is useful as a <b>Construction Material</b>."#
    }
    SolidChlorine => r#"(Cl) Chlorine is a natural Germ-killing element in a Solid state."#,
    SolidNuclearWaste => r#"Highly toxic solid full of Radioactive Contaminants."#,
    Obsidian => r#"Obsidian is a brittle composite of volcanic Glass."#,
    SolidPetroleum => r#"Petroleum is a Power source.<br>This selection is in a Solid state."#,
    SolidSuperCoolant => {
      r#"Super Coolant is an industrial-grade Fullerene coolant.<br>This selection is in a Solid state."#
    }
    IgneousRock => {
      r#"Igneous Rock is a composite of solidified volcanic rock.<br>It is useful as a <b>Construction Material</b>."#
    }
    EnrichedUranium => {
      r#"(U) Enriched Uranium is a highly Radioactive, refined substance.<br>It is primarily used to Power potent research reactors."#
    }
    Gold => {
      r#"(Au) Gold is a conductive precious Metal.<br>It is suitable for building Power systems."#
    }
    Rust => {
      r#"Rust is an iron oxide that forms from the breakdown of Iron.<br>It is useful in some Oxygen production processes."#
    }
    Corium => {
      r#"A radioactive mixture of nuclear waste and melted reactor materials.<br>Releases Nuclear Fallout gas."#
    }
    Phosphorus => r#"(P) Refined Phosphorus is a chemical element in its Solid state."#,
    Granite => {
      r#"Granite is a dense composite of Igneous Rock.<br>It is useful as a <b>Construction Material</b>."#
    }
    SolidCarbonDioxide => {
      r#"(CO<sub>2</sub>) Carbon Dioxide is an unbreathable compound in a Solid state."#
    }
    Cobalt => r#"(Co) Cobalt is a Refined Metal made from Cobalt Ore."#,
    UraniumOre => {
      r#"(U) Uranium Ore is a highly Radioactive substance.<br>It can be refined into fuel for research reactors."#
    }
    AluminumOre => {
      r#"Aluminum ore, also known as Bauxite, is a sedimentary rock high in metal content.<br>It can be refined into Aluminum."#
    }
    SedimentaryRock => {
      r#"Sedimentary Rock is a hardened composite of sediment layers.<br>It is useful as a <b>Construction Material</b>."#
    }
    Fullerene => {
      r#"(C<sub>60</sub>) Fullerene is a form of Coal consisting of spherical molecules."#
    }
    GoldAmalgam => {
      r#"Gold Amalgam is a conductive amalgam of gold and mercury.<br>It is suitable for building Power systems."#
    }
    Salt => {
      r#"(NaCl) Salt, also known as sodium chloride, is an edible chemical compound.<br>When refined, it can be eaten with meals to increase Duplicant Morale."#
    }
    Sand => r#"Sand is a composite of granular rock.<br>It is useful as a Filtration Medium."#,
    Snow => {
      r#"(H<sub>2</sub>O) Snow is a mass of loose, crystalline ice particles.<br>It becomes Water when melted."#
    }
    SandStone => {
      r#"Sandstone is a composite of relatively soft sedimentary rock.<br>It is useful as a <b>Construction Material</b>."#
    }
    Glass => {
      r#"Glass is a brittle, transparent substance formed from Sand fired at high temperatures."#
    }
    Clay => {
      r#"Clay is a soft, naturally occurring composite of stone and soil that hardens at high Temperatures.<br>It is a reliable <b>Construction Material</b>."#
    }
    Ice => r#"(H<sub>2</sub>O) Ice is clean water frozen into a Solid state."#,
    Graphite => {
      r#"(C) Graphite is the most stable form of carbon.<br>It has high thermal conductivity and is useful as a <b>Construction Material</b>."#
    }
    ToxicMud => {
      r#"A mixture of Polluted Dirt and Polluted Water.<br>Can be separated into its base elements using a Sludge Press."#
    }
    Mud => {
      r#"A mixture of Dirt and Water.<br>Can be separated into its base elements using a Sludge Press."#
    }
    Carbon => {
      r#"(C) Coal is a combustible fossil fuel composed of carbon.<br>It is useful in Power production."#
    }
    SolidOxygen => r#"(O<sub>2</sub>) Solid Oxygen is a breathable element in a Solid state."#,
    Creature => {
      r#"(DuPe) Ooze is a slurry of water, carbon, and dozens and dozens of trace elements.<br>Duplicants are printed from pure Ooze."#
    }
    DepletedUranium => {
      r#"(U) Depleted Uranium is Uranium with a low U-235 content.<br>It is created as a byproduct of Enriched Uranium and is no longer suitable as fuel."#
    }
    Katairite => r#"(Ab) Abyssalite is a resilient, crystalline element."#,
    SolidMethane => r#"(CH<sub>4</sub>) Methane is an alkane in a Solid state."#,
    HardPolypropylene => {
      r#"Plastium is an advanced thermoplastic polymer made from Thermium, Plastic and Brackwax.<br>It is highly heat-resistant and suitable for use in space buildings."#
    }
    MaficRock => {
      r#"Mafic Rock is a variation of Igneous Rock that is rich in Iron.<br>It is useful as a <b>Construction Material</b>."#
    }
    Iron => r#"(Fe) Iron is a common industrial Metal."#,
    Regolith => {
      r#"Regolith is a sandy substance composed of the various particles that collect atop terrestrial objects.<br>It is useful as a Filtration Medium."#
    }
    SolidResin => {
      r#"Solidified goo harvested from a grumpy tree.<br>It is used in the production of Isoresin."#
    }
    TempConductorSolid => {
      r#"Thermium is an industrial metal alloy formulated to maximize Heat Transfer and thermal dispersion."#
    }
    IronOre => r#"(Fe) Iron Ore is a soft Metal.<br>It is suitable for building Power systems."#,
    Dirt => {
      r#"Dirt is a soft, nutrient-rich substance capable of supporting life.<br>It is necessary in some forms of Food production."#
    }
    DirtyIce => r#"Polluted Ice is dirty, unfiltered water frozen into a Solid state."#,
    Fossil => {
      r#"Fossil is organic matter, highly compressed and hardened into a mineral state.<br>It is useful as a <b>Construction Material</b>."#
    }
    Unobtanium => {
      r#"(Nt) Neutronium is a mysterious and extremely resilient element.<br>It cannot be excavated by any Duplicant mining tool."#
    }
    SolidEthanol => {
      r#"(C<sub>2</sub>H<sub>6</sub>O) Solid Ethanol is an advanced chemical compound.<br>It can be used as a highly effective fuel source when burned."#
    }
    Aluminum => {
      r#"(Al) Aluminum is a low density Metal.<br>It has high Thermal Conductivity and is suitable for building Power systems."#
    }
    DirtyWater => r#"Polluted Water is dirty, unfiltered Water.<br>It is not fit for consumption."#,
    NuclearWaste => {
      r#"Highly toxic liquid full of Radioactive Contaminants which emit Radiation that can be absorbed by Radbolt Generators."#
    }
    LiquidOxygen => {
      r#"(O<sub>2</sub>) Oxygen is a breathable chemical.<br>This selection is in a Liquid state."#
    }
    ViscoGel => {
      r#"Visco-Gel Fluid is a Liquid polymer with high surface tension, preventing typical liquid flow and allowing for unusual configurations."#
    }
    MoltenAluminum => r#"(Al) Molten Aluminum is a low density Metal heated into a Liquid state."#,
    MoltenLead => r#"(Pb) Lead is an extremely dense Refined Metal heated into a Liquid state."#,
    LiquidCarbonDioxide => {
      r#"(CO<sub>2</sub>) Carbon Dioxide is an unbreathable chemical compound.<br>This selection is currently in a Liquid state."#
    }
    CrudeOil => {
      r#"Crude Oil is a raw potential Power source composed of billions of dead, primordial organisms."#
    }
    MoltenGlass => r#"Molten Glass is a composite of granular rock, heated into a Liquid state."#,
    LiquidSulfur => {
      r#"(S) Sulfur is a common chemical element and byproduct of Natural Gas production.<br>This selection is in a Liquid state."#
    }
    MoltenGold => r#"(Au) Gold, a conductive precious Metal, heated into a Liquid state."#,
    Magma => r#"Magma is a composite of Igneous Rock heated into a molten, Liquid state."#,
    Chlorine => r#"(Cl) Chlorine is a natural Germ-killing element in a Liquid state."#,
    LiquidHydrogen => {
      r#"(H) Hydrogen in its Liquid state.<br>It freezes most substances that come into contact with it."#
    }
    Resin => {
      r#"Sticky goo harvested from a grumpy tree.<br>It can be polymerized into Isoresin by boiling away its excess moisture."#
    }
    MoltenTungsten => r#"(W) Molten Tungsten is a crystalline Metal heated into a Liquid state."#,
    Petroleum => {
      r#"Petroleum is a Power source refined from Crude Oil.<br>It is also an essential ingredient in the production of Plastic."#
    }
    MoltenSalt => {
      r#"(NaCl) Molten Salt is an edible chemical compound that has been heated into a Liquid state."#
    }
    MoltenCobalt => r#"(Co) Molten Cobalt is a Refined Metal heated into a Liquid state."#,
    Brine => {
      r#"Brine is a natural, highly concentrated solution of Salt dissolved in Water.<br>It can be used in desalination processes, separating out usable salt."#
    }
    SuperCoolant => {
      r#"Super Coolant is an industrial-grade coolant that utilizes the unusual energy states of Fullerene.<br>This selection is in a Liquid state."#
    }
    Ethanol => {
      r#"(C<sub>2</sub>H<sub>6</sub>O) Ethanol is an advanced chemical compound in a Liquid state.<br>It can be used as a highly effective fuel source when burned."#
    }
    Milk => r#"Brackene is a sodium-rich Liquid.<br>It is useful in Ranching."#,
    LiquidMethane => {
      r#"(CH<sub>4</sub>) Methane is an alkane.<br>This selection is in a Liquid state."#
    }
    MoltenIron => r#"(Fe) Molten Iron is a common industrial Metal heated into a Liquid state."#,
    MoltenCarbon => r#"(C) Carbon is an abundant, versatile element heated into a Liquid state."#,
    Naphtha => r#"Naphtha a distilled hydrocarbon mixture produced from the burning of Plastic."#,
    MoltenSucrose => {
      r#"(C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>) Sucrose is the raw form of sugar, heated into a Liquid state.<br>It can be used directly for cooking, or refined and eaten with meals to increase Duplicant Morale."#
    }
    LiquidPhosphorus => {
      r#"(P) Phosphorus is a chemical element.<br>This selection is in a Liquid state."#
    }
    MoltenSteel => {
      r#"Molten Steel is a Metal alloy of iron and carbon, heated into a hazardous Liquid state."#
    }
    MoltenNiobium => r#"(Nb) Molten Niobium is a rare metal heated into a Liquid state."#,
    Water => r#"(H<sub>2</sub>O) Clean Water, suitable for consumption."#,
    SaltWater => {
      r#"Salt Water is a natural, lightly concentrated solution of Salt dissolved in Water.<br>It can be used in desalination processes, separating out usable salt."#
    }
    MoltenUranium => {
      r#"(U) Liquid Uranium is a highly Radioactive substance, heated into a hazardous Liquid state.<br>It is a byproduct of Enriched Uranium."#
    }
    MoltenCopper => r#"(Cu) Molten Copper is a conductive Metal heated into a Liquid state."#,
    SulfurGas => {
      r#"(S) Sulfur is a common chemical element and byproduct of Natural Gas production.<br>This selection is in a Gaseous state."#
    }
    SaltGas => {
      r#"(NaCl) Salt Gas is an edible chemical compound that has been superheated into a Gaseous state."#
    }
    NiobiumGas => r#"(Nb) Niobium Gas is a rare metal.<br>This selection is in a Gaseous state."#,
    Oxygen => {
      r#"(O<sub>2</sub>) Oxygen is an atomically lightweight and breathable Gas, necessary for sustaining life.<br>It tends to rise above other gases."#
    }
    CobaltGas => r#"(Co) Cobalt is a Refined Metal, heated into a Gas."#,
    SteelGas => r#"Steel Gas is a superheated Metal Gas composed of iron and carbon."#,
    ChlorineGas => r#"(Cl) Chlorine is a natural Germ-killing element in a Gaseous state."#,
    Hydrogen => {
      r#"(H) Hydrogen Gas is the universe's most common and atomically light element in a Gaseous state."#
    }
    SourGas => {
      r#"Sour Gas is a hydrocarbon Gas containing high concentrations of hydrogen sulfide.<br>It is a byproduct of highly heated Petroleum."#
    }
    Steam => r#"(H<sub>2</sub>O) Steam is Water that has been heated into a scalding Gas."#,
    Methane => {
      r#"Natural Gas is a mixture of various alkanes in a Gaseous state.<br>It is useful in Power production."#
    }
    GoldGas => r#"(Au) Gold Gas is a conductive precious Metal, heated into a Gaseous state."#,
    EthanolGas => {
      r#"(C<sub>2</sub>H<sub>6</sub>O) Ethanol Gas is an advanced chemical compound heated into a Gaseous state."#
    }
    RockGas => r#"Rock Gas is rock that has been superheated into a Gaseous state."#,
    CarbonGas => r#"(C) Carbon is an abundant, versatile element heated into a Gaseous state."#,
    SuperCoolantGas => {
      r#"Super Coolant is an industrial-grade Fullerene coolant.<br>This selection is in a Gaseous state."#
    }
    AluminumGas => r#"(Al) Aluminum Gas is a low density Metal heated into a Gaseous state."#,
    TungstenGas => {
      r#"(W) Tungsten is a superheated crystalline Metal.<br>This selection is in a Gaseous state."#
    }
    ContaminatedOxygen => {
      r#"(O<sub>2</sub>) Polluted Oxygen is dirty, unfiltered air.<br>It is breathable."#
    }
    LeadGas => {
      r#"(Pb) Lead Gas is a soft yet extremely dense Refined Metal heated into a Gaseous."#
    }
    Fallout => {
      r#"Nuclear Fallout is a highly toxic gas full of Radioactive Contaminants. Condenses into Liquid Nuclear Waste."#
    }
    IronGas => r#"(Fe) Iron Gas is a common industrial Metal, heated into a Gas."#,
    PhosphorusGas => r#"(P) Phosphorus Gas is the Gaseous state of Refined Phosphorus."#,
    CarbonDioxide => {
      r#"(CO<sub>2</sub>) Carbon Dioxide is an atomically heavy chemical compound in a Gaseous state.<br>It tends to sink below other gases."#
    }
    CopperGas => r#"(Cu) Copper Gas is a conductive Metal heated into a Gas state."#,
    HighEnergyParticle => {
      r#"A concentrated field of Radbolts that can be largely redirected using a Radbolt Reflector."#
    }
    RockComet => r#"Rock Meteor"#,
    IronComet => r#"Iron Meteor"#,
    CopperCometConfig => r#"Copper Meteor"#,
    GoldComet => r#"Gold Meteor"#,
    FullereneComet => r#"Fullerene Meteor"#,
    BleachStoneComet => r#"Bleach Stone Meteor"#,
    OxyliteComet => r#"Oxylite Meteor"#,
    PhosphoricComet => r#"Phosphoric Meteor"#,
    AlgaeComet => r#"Algae Meteor"#,
    LightDustComet => r#"Dust Fluff Meteor"#,
    HardIceComet => r#"Ice Meteor"#,
    SlimeComet => r#"Slime Meteor"#,
    UraniumComet => r#"Uranium Meteor"#,
    GassyMoo => r#"Gassy Mooteor"#,
    NuclearWasteComet => r#"Radioactive Meteor"#,
    DustComet => r#"Dust Meteor"#,
    SnowballComet => r#"Snow Meteor"#,
    ArtifactSpacePOI_GravitasSpaceStation1 => {
      r#"The remnants of a bygone era, lost in time.<br>Harvesting space junk requires a rocket equipped with a Drillcone."#
    }
    ArtifactSpacePOI_GravitasSpaceStation2 => {
      r#"A defunct rocket from a corporation that vanished long ago.<br>Harvesting space junk requires a rocket equipped with a Drillcone."#
    }
    ArtifactSpacePOI_GravitasSpaceStation3 => {
      r#"The ruins of a rocket that stopped functioning ages ago.<br>Harvesting space junk requires a rocket equipped with a Drillcone."#
    }
    ArtifactSpacePOI_GravitasSpaceStation4 => {
      r#"A rocket part from a society that has been wiped out.<br>Harvesting space junk requires a rocket equipped with a Drillcone."#
    }
    ArtifactSpacePOI_GravitasSpaceStation5 => {
      r#"A destroyed Gravitas satellite.<br>Harvesting space junk requires a rocket equipped with a Drillcone."#
    }
    ArtifactSpacePOI_GravitasSpaceStation6 => {
      r#"The remains of a satellite made some time in the past.<br>Harvesting space junk requires a rocket equipped with a Drillcone."#
    }
    ArtifactSpacePOI_GravitasSpaceStation7 => {
      r#"A defunct space shuttle that floats through space unattended.<br>Harvesting space junk requires a rocket equipped with a Drillcone."#
    }
    ArtifactSpacePOI_GravitasSpaceStation8 => {
      r#"The module from a space station that ceased to exist ages ago.<br>Harvesting space junk requires a rocket equipped with a Drillcone."#
    }
    ArtifactSpacePOI_RussellsTeapot => r#"Has never been disproven to not exist."#,
    HarvestableSpacePOI_MetallicAsteroidField => {
      r#"An asteroid field containing <link="IRON">Iron</link>, <link="COPPER">Copper</link> and <link="OBSIDIAN">Obsidian</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_SatelliteField => {
      r#"Space junk from a forgotten age.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_RockyAsteroidField => {
      r#"An asteroid field containing <link="CUPRITE">Copper Ore</link>, <link="SEDIMENTARYROCK">Sedimentary Rock</link> and <link="IGNEOUSROCK">Igneous Rock</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_InterstellarIceField => {
      r#"An asteroid field containing <link="ICE">Ice</link>, <link="CARBONDIOXIDE">Carbon Dioxide</link> and <link="OXYGEN">Oxygen</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_OrganicMassField => {
      r#"A mass of harvestable resources containing <link="ALGAE">Algae</link>, <link="SLIMEMOLD">Slime</link>, <link="CONTAMINATEDOXYGEN">Polluted Oxygen</link> and <link="DIRT">Dirt</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_IceAsteroidField => {
      r#"A cloud of planetary remains containing <link="ICE">Ice</link>, <link="CARBONDIOXIDE">Carbon Dioxide</link>, <link="OXYGEN">Oxygen</link> and <link="METHANE">Natural Gas</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_GasGiantCloud => {
      r#"The harvestable remains of a planet containing <link="HYDROGEN">Hydrogen</link> in <link="ELEMENTSGAS">gas</link> form, and <link="SOLIDMETHANE">Methane</link> in <link="ELEMENTSSOLID">solid</link> and <link="ELEMENTSLIQUID">liquid</link> form.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_ChlorineCloud => {
      r#"A cloud of harvestable debris containing <link="CHLORINEGAS">Chlorine Gas</link> and <link="BLEACHSTONE">Bleach Stone</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_GildedAsteroidField => {
      r#"An asteroid field containing <link="GOLD">Gold</link>, <link="FULLERENE">Fullerene</link>, <link="REGOLITH">Regolith</link> and more.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_GlimmeringAsteroidField => {
      r#"An asteroid field containing <link="TUNGSTEN">Tungsten</link>, <link="WOLFRAMITE">Wolframite</link> and more.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_HeliumCloud => {
      r#"A cloud of resources containing <link="WATER">Water</link> and <link="HYDROGEN">Hydrogen Gas</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_OilyAsteroidField => {
      r#"An asteroid field containing <link="SOLIDMETHANE">Solid Methane</link>, <link="CARBONDIOXIDE">Carbon Dioxide</link> and <link="CRUDEOIL">Crude Oil</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_OxidizedAsteroidField => {
      r#"An asteroid field containing <link="CARBONDIOXIDE">Carbon Dioxide</link> and <link="RUST">Rust</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_SaltyAsteroidField => {
      r#"A field of harvestable resources containing <link="SALTWATER">Salt Water</link>,<link="BRINE">Brine</link> and <link="CARBONDIOXIDE">Carbon Dioxide</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_FrozenOreField => {
      r#"An asteroid field containing <link="DIRTYICE">Polluted Ice</link>, <link="ICE">Ice</link>, <link="SNOW">Snow</link> and <link="ALUMINUMORE">Aluminum Ore</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_ForestyOreField => {
      r#"A field of harvestable resources containing <link="CARBONDIOXIDE">Carbon Dioxide</link>, <link="IGNEOUSROCK">Igneous Rock</link> and <link="ALUMINUMORE">Aluminum Ore</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_SwampyOreField => {
      r#"An asteroid field containing <link="MUD">Mud</link>, <link="TOXICSAND">Polluted Dirt</link> and <link="COBALTITE">Cobalt Ore</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_SandyOreField => {
      r#"An asteroid field containing <link="SANDSTONE">Sandstone</link>, <link="ALGAE">Algae</link>, <link="CUPRITE">Copper Ore</link> and <link="SAND">Sand</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_RadioactiveGasCloud => {
      r#"A cloud of resources containing <link="CHLORINEGAS">Chlorine Gas</link>, <link="URANIUMORE">Uranium Ore</link> and <link="CARBONDIOXIDE">Carbon Dioxide</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_RadioactiveAsteroidField => {
      r#"An asteroid field containing <link="BLEACHSTONE">Bleach Stone</link>, <link="RUST">Rust</link>, <link="URANIUMORE">Uranium Ore</link> and <link="SULFUR">Sulfur</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_OxygenRichAsteroidField => {
      r#"An asteroid field containing <link="ICE">Ice</link>, <link="CONTAMINATEDOXYGEN">Polluted Oxygen</link> and <link="WATER">Water</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    HarvestableSpacePOI_InterstellarOcean => {
      r#"An interplanetary body that consists of <link="SALTWATER">Salt Water</link>, <link="BRINE">Brine</link>, <link="SALT">Salt</link> and <link="ICE">Ice</link>.

Harvesting resources requires a rocket equipped with a <link="NOSECONEHARVEST">Drillcone</link>."#
    }
    ClusterMapMeteorShower_Biological => {
      r#"A shower of slimy, biodynamic meteors on a collision course with the surface of an asteroid."#
    }
    ClusterMapMeteorShower_Snow => {
      r#"A shower of cold, cold meteors on a collision course with the surface of an asteroid."#
    }
    ClusterMapMeteorShower_Ice => {
      r#"A hailstorm of icy space rocks on a collision course with the surface of an asteroid."#
    }
    ClusterMapMeteorShower_Copper => {
      r#"A shower of metallic meteors on a collision course with the surface of an asteroid."#
    }
    ClusterMapMeteorShower_Iron => {
      r#"A shower of metallic space rocks on a collision course with the surface of an asteroid."#
    }
    ClusterMapMeteorShower_Gold => {
      r#"A shower of shiny metallic space rocks on a collision course with the surface of an asteroid."#
    }
    ClusterMapMeteorShower_Uranium => {
      r#"A toxic shower of radioactive meteors on a collision course with the surface of an asteroid."#
    }
    ClusterMapMeteorShower_HeavyDust => {
      r#"A dark cloud of heavy dust meteors heading towards the surface of an asteroid."#
    }
    ClusterMapMeteorShower_LightDust => {
      r#"A cloud-like shower of dust fluff meteors heading towards the surface of an asteroid."#
    }
    ClusterMapMeteorShower_Moo => {
      r#"A herd of methane-infused meteors that cause a bit of a stink, but do no actual damage."#
    }
    ClusterMapMeteorShower_Regolith => {
      r#"A shower of rocky meteors on a collision course with the surface of an asteroid."#
    }
    ClusterMapMeteorShower_Oxylite => {
      r#"A shower of rocky, oxygen-rich meteors on a collision course with the surface of an asteroid."#
    }
    ClusterMapMeteorShower_BleachStone => {
      r#"A shower of bleach stone meteors on a collision course with the surface of an asteroid."#
    }
    artifact_sandstone => r#"A beautiful rock composed of multiple layers of sediment."#,
    artifact_officemug => {
      r#"An intermediary place to store espresso before you move it to your mouth."#
    }
    artifact_modernart => r#"I don't get it."#,
    artifact_shieldgenerator => {
      r#"A mechanical prototype capable of producing a small section of shielding."#
    }
    artifact_grubstatue => r#"A moving tribute to a tiny plant hugger."#,
    artifact_eggrock => {
      r#"It's unclear whether this is its naturally occurring shape, or if its appearance as been sculpted."#
    }
    artifact_hatchfossil => r#"The preserved bones of an early species of Hatch."#,
    artifact_rocktornado => r#"It's unclear how it formed, although I'm glad it did."#,
    artifact_magmalamp => r#"The sequel to "Lava Lamp"."#,
    artifact_rainboweggrock => {
      r#"It's unclear whether this is its naturally occurring shape, or if its appearance as been sculpted.<br>This one is rainbow colored."#
    }
    artifact_plasmalamp => r#"No space colony is complete without one."#,
    artifact_moodring => r#"How radioactive are you feeling?"#,
    artifact_reactormodel => r#"It's pronounced nu-clear."#,
    artifact_sink => r#"No collection is complete without it."#,
    artifact_rubikscube => r#"This mystery of the universe has already been solved."#,
    artifact_okayxray => r#"Ew, weird. It has five fingers!"#,
    artifact_blender => {
      r#"Equipment used to conduct experiments answering the age-old question, "Could that blend"?"#
    }
    artifact_vhs => r#"Be kind when you handle it. It's very fragile."#,
    artifact_honeyjar => r#"Sweet golden liquid with just a touch of uranium."#,
    artifact_brickphone => r#"It still works."#,
    artifact_stethoscope => r#"Listens to Duplicant heartbeats, or gurgly tummies."#,
    artifact_oracle => r#"What does it do?"#,
    artifact_dnamodel => r#"An educational model of genetic information."#,
    artifact_obelisk => r#"A rectangular stone piece.<br>Its function is unclear."#,
    artifact_moldavite => r#"A unique green stone formed from the impact of a meteorite."#,
    artifact_saxophone => r#"The name "Pesquet" is barely legible on the inside."#,
    artifact_ameliaswatch => {
      r#"It was discovered in a package labeled "To be entrusted to Dr. Walker"."#
    }
    artifact_teapot => {
      r#"A teapot from the depths of space, coated in a thick layer of Neutronium."#
    }
    artifact_robotarm => r#"It's not functional. Just cool."#,
    artifact_bioluminescentrock => {
      r#"A thriving colony of tiny, microscopic organisms is responsible for giving it its bluish glow."#
    }
    artifact_pacupercolator => r#"Don't drink from it! There was a pacu... IN the percolator!"#,
    artifact_solarsystem => {
      r#"A marvel of the cosmos, inside this display is an entirely self-contained solar system."#
    }
    artifact_moonmoonmoon => r#"A moon's moon's moon. It's very small."#,
    keepsake_megabrain => {
      r#"A treasured souvenir that was once a common accompaniment to children's meals during commercial flights. There's a hole in the bottom from when Dr. Holland had it mounted on a stand."#
    }
    keepsake_crittermanipulator => {
      r#"A pottery project produced in an HR-mandated art therapy class.<br>It's glazed with a substance that once landed a curious lab technician in the ER."#
    }
    keepsake_lonelyminion => {
      r#"On the inside of the lid, someone used a screwdriver to carve a drawing of a group of smiling Duplicants gathered around a massive crater."#
    }
    keepsake_fossilhunt => {
      r#"The tag reads "Molly".<br>On the reverse is "Designed by B363" stamped above what appears to be an unusually shaped pawprint."#
    }
    keepsake_morbrovermaker => {
      r#"A custom-made robot programmed to deliver puns in a variety of celebrity voices.<br>It is also a paper shredder."#
    }
    IntermediateCure => r#"A doctor-administered cure for moderate ailments."#,
    IntermediateBooster => r#"Significantly reduces the chance of becoming sick."#,
    BasicRadPill => r#"Increases a Duplicant's natural radiation absorption rate."#,
    BasicCure => r#"A simple, easy-to-take remedy for minor germ-based diseases."#,
    BasicBooster => r#"Minorly reduces the chance of becoming sick."#,
    Antihistamine => r#"Suppresses and prevents allergic reactions."#,
    AdvancedCure => r#"A doctor-administered cure for severe ailments."#,
    WoodLog => r#"Wood harvested from an Arbor Tree or an Oakshell."#,
    SwampLilyFlower => {
      r#"A medicinal flower that soothes most minor maladies.<br>It is exceptionally fragrant."#
    }
    ResearchDatabank => r#"Raw data that can be processed into Interstellar Research points."#,
    OrbitalResearchDatabank => {
      r#"Raw Data that can be processed into Data Analysis Research points."#
    }
    CrabWoodShell => r#"Can be crushed to produce Lumber."#,
    BabyCrabWoodShell => r#"Can be crushed to produce Lumber."#,
    BabyCrabShell => r#"Can be crushed to produce Lime."#,
    CrabShell => r#"Can be crushed to produce Lime."#,
    MissileBasic => {
      r#"An explosive projectile designed to defend against meteor showers.<br>Must be launched by a Meteor Blaster."#
    }
    GeneShufflerRecharge => r#"Replenishes one charge to a depleted Neural Vacillator."#,
    BasicFabric => r#"A ball of raw cellulose used in the production of Clothing and textiles."#,
    GingerConfig => r#"A chewy, fibrous rhizome with a fiery aftertaste."#,
    TableSalt => {
      r#"A seasoning that Duplicants can add to their Food to boost Morale.<br>Duplicants will automatically use Table Salt while sitting at a Mess Table during mealtime.<br><i>Only the finest grains are chosen.</i>"#
    }
    PowerStationTools => {
      r#"A specialized Microchip created by a professional engineer.<br>Tunes up Generators to increase their Power output."#
    }
    FarmStationTools => {
      r#"Specialized Fertilizer mixed by a Duplicant with the Crop Tending Skill.<br>Increases the Growth Rate of one Plant."#
    }
    EggShell => r#"Can be crushed to produce Lime."#,
    GasGrassHarvested => {
      r#"Gas Grass is an alien lifeform tentatively categorized as a "plant," which makes up the entirety of the Gassy Moo's diet."#
    }
    RotPile => {
      r#"An inedible glop of former foodstuff.<br>Rot Piles break down into Polluted Dirt over time."#
    }
    DreamJournal => {
      r#"A hand-scrawled account of Pajama-induced dreams.<br>Can be analyzed using a Somnium Synthesizer."#
    }
    Minion => r#""#,
    WormBasicFruit => {
      r#"A Grubfruit that failed to develop properly.<br>It is nonetheless edible, and vaguely tasty."#
    }
    WormBasicFood => {
      r#"Slow roasted Spindly Grubfruit.<br>It has a smoky aroma and tastes of coziness."#
    }
    Tofu => r#"A bland curd made from Nosh Beans.<br>It has an unusual but pleasant consistency."#,
    SwampFruit => r#"A fruit with an outer film that contains chewy gelatinous cubes."#,
    SwampDelights => {
      r#"Dried gelatinous cubes from a Bog Jelly.<br>Each cube has a wonderfully chewy texture and is lightly coated in a delicate powder."#
    }
    WormSuperFood => {
      r#"A long lasting Grubfruit jam preserved in Sucrose.<br>The thick, goopy jam retains the shape of the jar when poured out, but the sweet taste can't be matched."#
    }
    SpicyTofu => {
      r#"Tofu marinated in a flavorful Pincha Peppernut sauce.<br>It packs a delightful punch."#
    }
    SpiceBread => {
      r#"A loaf of bread, lightly spiced with Pincha Peppernut for a mild bite.<br>There's a simple joy to be had in pulling it apart in one's fingers."#
    }
    ShellfishMeat => r#"An uncooked chunk of very dead Sanishell. Yum!"#,
    SurfAndTurf => {
      r#"A bit of Meat from the land and Cooked Seafood from the sea.<br>It's hearty and satisfying."#
    }
    WormSuperFruit => r#"A plump, healthy fruit with a honey-like taste."#,
    Salsa => r#"A baked Bristle Berry stuffed with delectable spices and vibrantly flavored."#,
    RawEgg => {
      r#"A raw Egg that has been cracked open for use in Food preparation.<br>It will never hatch."#
    }
    BasicForagePlant => {
      r#"A seedless fruit with an upsettingly bland aftertaste.<br>It cannot be replanted.<br>Digging up Buried Objects may uncover a Muckroot."#
    }
    ForestForagePlant => {
      r#"A seedless fruit with an unusual rubbery texture.<br>It cannot be replanted.<br>Hexalent fruit is much more calorie dense than Muckroot fruit."#
    }
    ColdWheatBread => {
      r#"A simple bun baked from Sleet Wheat Grain grain.<br>Each bite leaves a mild cooling sensation in one's mouth, even when the bun itself is warm."#
    }
    CookedEgg => {
      r#"Fluffed and folded Egg innards.<br>It turns out you do, in fact, have to break a few eggs to make it."#
    }
    CookedFish => {
      r#"A cooked piece of freshly caught aquatic critter.<br>Unsurprisingly, it tastes a bit fishy."#
    }
    CookedMeat => {
      r#"The cooked meat of a defeated critter.<br>It has a delightful smoky aftertaste."#
    }
    Curry => r#"Chewy Nosh Beans simmered with chunks of Tonic Root.<br>It's so spicy!"#,
    FieldRation => r#"A nourishing nutrient paste, sandwiched between thin wafer layers."#,
    FishMeat => r#"An uncooked fillet from a very dead Pacu. Yum!"#,
    FriedMushBar => {
      r#"Deep fried, solidified mudslop.<br>The inside is almost completely uncooked, despite the crunch on the outside."#
    }
    FriedMushroom => {
      r#"A fried dish made with a fruiting Dusk Cap.<br>It has a thick, savory flavor with subtle earthy undertones."#
    }
    FruitCake => {
      r#"A mashed up Bristle Berry sludge with an exceptionally long shelf life.<br>Its aggressive, overbearing sweetness can leave the tongue feeling temporarily numb."#
    }
    Burger => {
      r#"Meat and Lettuce on a chilled Frost Bun.<br>It's the only burger best served cold."#
    }
    Lettuce => r#"Crunchy, slightly salty leaves from a Waterweed plant."#,
    Meat => r#"Uncooked meat from a very dead critter. Yum!"#,
    MushBar => {
      r#"An edible, putrefied mudslop.<br>Mush Bars are preferable to starvation, but only just barely."#
    }
    Mushroom => r#"An edible, flavorless fungus that grew in the dark."#,
    MushroomWrap => {
      r#"Flavorful Mushrooms wrapped in Lettuce.<br>It has an earthy flavor punctuated by a refreshing crunch."#
    }
    PacuFillet => r#"Uncooked meat from a very dead critter. Yum!"#,
    Pancakes => r#"Sweet discs made from Raw Egg and Sleet Wheat Grain.<br>They're so thick!"#,
    PickledMeal => r#"Meal Lice preserved in vinegar.<br>It's a rarely acquired taste."#,
    PlantMeat => r#"Planty plant meat from a plant. How nice!"#,
    PrickleFruit => r#"A sweet, mostly pleasant-tasting fruit covered in prickly barbs."#,
    Quiche => {
      r#"Omelette, Fried Mushroom and Lettuce piled onto a yummy crust.<br>Somehow, it's both soggy <i>and</i> crispy."#
    }
    GrilledPrickleFruit => {
      r#"The grilled bud of a Bristle Berry.<br>Heat unlocked an exquisite taste in the fruit, though the burnt spines leave something to be desired."#
    }
    BerryPie => {
      r#"A pie made primarily of Grubfruit and Gristle Berries.<br>The mixture of berries creates a fragrant, colorful filling that packs a sweet punch."#
    }
    SwampForagePlant => {
      r#"A seedless plant with a squishy, juicy center and an awful smell.<br>It cannot be replanted."#
    }
    BasicPlantFood => r#"A flavorless grain that almost never wiggles on its own."#,
    BasicPlantBar => r#"Meal Lice compacted into a dense, immobile loaf."#,
    DehydratedSurfAndTurf => {
      r#"A dehydrated Surf'n'Turf ration. It must be rehydrated in order to be considered Food.<br>Dry rations have no expiry date."#
    }
    DehydratedSpicyTofu => {
      r#"A dehydrated Spicy Tofu ration. It must be rehydrated in order to be considered Food.<br>Dry rations have no expiry date."#
    }
    DehydratedSpiceBread => {
      r#"A dehydrated Pepper Bread ration. It must be rehydrated in order to be considered Food.<br>Dry rations have no expiry date."#
    }
    DehydratedSalsa => {
      r#"A dehydrated Stuffed Berry ration. It must be rehydrated in order to be considered Food.<br>Dry rations have no expiry date."#
    }
    DehydratedQuiche => {
      r#"A dehydrated Mushroom Quiche ration. It must be rehydrated in order to be considered Food.<br>Dry rations have no expiry date."#
    }
    DehydratedFoodPackage => {
      r#"A dehydrated Frost Burger ration. It must be rehydrated in order to be considered Food.<br>Dry rations have no expiry date."#
    }
    DehydratedMushroomWrap => {
      r#"A dehydrated Mushroom Wrap ration. It must be rehydrated in order to be considered Food.<br>Dry rations have no expiry date."#
    }
    DehydratedBerryPie => {
      r#"A dehydrated Mixed Berry Pie ration. It must be rehydrated in order to be considered Food.<br>Dry rations have no expiry date."#
    }
    DehydratedCurry => {
      r#"A dehydrated Curried Beans ration. It must be rehydrated in order to be considered Food.<br>Dry rations have no expiry date."#
    }
    SpiceNut => {
      r#"The flavorful nut of a Pincha Pepperplant.<br>The bitter outer rind hides a rich, peppery core that is useful in cooking."#
    }
    SweepBot => {
      r#"An automated sweeping robot.<br>Sweeps up Solid debris and Liquid spills and stores the material back in its Sweepy Dock."#
    }
    ScoutRover => r#"A curious bot that can remotely explore new Planetoid locations."#,
    MorbRover => {
      r#"A Pathogen-Fueled Extravehicular Geo-Exploratory Guidebot (model Y), aka "P.E.G.G.Y."<br>It can be assigned basic building tasks and digging duties in hazardous environments."#
    }
    SquirrelEgg => {
      r#"Pips are pesky, nonhostile critters that subsist on Thimble Reeds and Arbor Tree branches.<br>They are known to bury Seeds in the ground whenever they can find a suitable area with enough space."#
    }
    SquirrelHugEgg => {
      r#"Cuddle Pips are fluffy, affectionate critters who exhibit a strong snuggling instinct towards all types of eggs.<br>This is temporarily amplified when they are hugged by a passing Duplicant."#
    }
    StaterpillarEgg => {
      r#"Plug Slugs are dynamic creatures that generate electrical Power during the night.<br>Their power can be harnessed by leaving an exposed wire near areas where they like to sleep."#
    }
    StaterpillarLiquidEgg => {
      r#"Sponge Slugs are thirsty creatures that soak up Liquids during the day.<br>They deposit their stored Liquids into the exposed Liquid Pipes they sleep next to at night."#
    }
    PuftEgg => r#"Pufts are non-aggressive critters that excrete lumps of Slime with each breath."#,
    DreckoEgg => {
      r#"Dreckos are nonhostile critters that graze on Pincha Pepperplants, Balm Lily or Mealwood Plants.<br>Their backsides are covered in thick woolly fibers that only grow in Hydrogen climates."#
    }
    DreckoPlasticEgg => {
      r#"Glossy Dreckos are nonhostile critters that graze on live Mealwood Plants and Bristle Blossoms.<br>Their backsides are covered in bioplastic scales that only grow in Hydrogen Gas climates."#
    }
    LightBugBlackEgg => {
      r#"This Shine Bug emits no Light, but it makes up for it by having an excellent personality."#
    }
    LightBugBlueEgg => {
      r#"Shine Bugs emit a soft Light in hopes of attracting more of their kind for company.<br>The light of the Azure morph has been turned blue through selective breeding."#
    }
    LightBugEgg => {
      r#"Shine Bugs emit a soft Light in hopes of attracting more of their kind for company."#
    }
    PuftOxyliteEgg => {
      r#"Dense Pufts are non-aggressive critters that excrete condensed Oxylite with each breath."#
    }
    LightBugCrystalEgg => {
      r#"Shine Bugs emit a soft Light in hopes of attracting more of their kind for company.<br>The light of the Radiant morph has been amplified through selective breeding."#
    }
    LightBugPinkEgg => {
      r#"Shine Bugs emit a soft Light in hopes of attracting more of their kind for company.<br>The light of the Coral morph has been turned pink through selective breeding."#
    }
    LightBugPurpleEgg => {
      r#"Shine Bugs emit a soft Light in hopes of attracting more of their kind for company.<br>The light of the Royal morph has been turned purple through selective breeding."#
    }
    MoleEgg => {
      r#"Shove Voles are burrowing critters that eat the Regolith collected on terrestrial surfaces.<br>They cannot burrow through Refined Metals."#
    }
    MoleDelicacyEgg => {
      r#"Delecta Voles are burrowing critters whose bodies sprout shearable Tonic Root when Regolith is ingested at preferred temperatures.<br>They cannot burrow through Refined Metals."#
    }
    OilfloaterEgg => {
      r#"Slicksters are slimy critters that consume Carbon Dioxide and exude Crude Oil."#
    }
    OilfloaterDecorEgg => {
      r#"Longhair Slicksters are friendly critters that consume Oxygen and thrive in close contact with Duplicant companions.<br>Longhairs have extremely beautiful and luxurious coats."#
    }
    OilfloaterHighTempEgg => {
      r#"Molten Slicksters are slimy critters that consume Carbon Dioxide and exude Petroleum."#
    }
    PuftAlphaEgg => {
      r#"The Puft Prince is a lazy critter that excretes little Solid lumps of whatever it has been breathing."#
    }
    PuftBleachstoneEgg => {
      r#"Squeaky Pufts are non-aggressive critters that excrete lumps of Bleachstone with each breath."#
    }
    LightBugOrangeEgg => {
      r#"Shine Bugs emit a soft Light in hopes of attracting more of their kind for company.<br>The light of the Sun morph has been turned orange through selective breeding."#
    }
    StaterpillarGasEgg => {
      r#"Smog Slugs are porous creatures that draw in unbreathable Gases during the day.<br>At night, they sleep near exposed Gas Pipes, where they deposit their cache."#
    }
    HatchVeggieEgg => {
      r#"Sage Hatches excrete solid Coal as waste and enjoy burrowing into the ground."#
    }
    HatchEgg => {
      r#"Hatches excrete solid Coal as waste and may be uncovered by digging up Buried Objects."#
    }
    CrabEgg => {
      r#"Pokeshells are nonhostile critters unless their eggs are nearby.<br>They eat Polluted Dirt and Rot Piles.<br>The shells they leave behind after molting can be crushed into Lime."#
    }
    CrabWoodEgg => {
      r#"Oakshells are nonhostile critters unless their eggs are nearby.<br>They eat Polluted Dirt, Slime and Rot Piles.<br>The shells they leave behind after molting can be crushed into Lumber.<br>Oakshells thrive in Ethanol."#
    }
    CrabFreshWaterEgg => {
      r#"Sanishells are nonhostile critters unless their eggs are nearby.<br>They thrive in Water and eliminate Germs from any liquid it inhabits.<br>They eat Polluted Dirt, Slime and Rot Piles."#
    }
    PacuCleanerEgg => r#"Every organism in the known universe finds the Pacu extremely delicious."#,
    DivergentBeetleEgg => {
      r#"Sweetles are nonhostile critters that excrete large amounts of Sucrose.<br>They are closely related to the Grubgrub and exhibit similar, albeit less effective farming behaviors."#
    }
    HatchHardEgg => {
      r#"Stone Hatches excrete solid Coal as waste and enjoy burrowing into the ground."#
    }
    PacuTropicalEgg => {
      r#"Every organism in the known universe finds the Pacu extremely delicious."#
    }
    DivergentWormEgg => {
      r#"Grubgrubs form symbiotic relationships with plants, especially Grubfruit Plants, and instinctually tend to them.<br>Grubgrubs are closely related to Sweetles."#
    }
    HatchMetalEgg => {
      r#"Smooth Hatches enjoy burrowing into the ground and excrete Refined Metal when fed Metal Ore."#
    }
    PacuEgg => {
      r#"Pacus are aquatic creatures that can live in any liquid, such as Water or Contaminated Water.<br>Every organism in the known universe finds the Pacu extremely delicious."#
    }
    Squirrel => {
      r#"Pips are pesky, nonhostile critters that subsist on Thimble Reeds and Arbor Tree branches.<br>They are known to bury Seeds in the ground whenever they can find a suitable area with enough space."#
    }
    SquirrelHug => {
      r#"Cuddle Pips are fluffy, affectionate critters who exhibit a strong snuggling instinct towards all types of eggs.<br>This is temporarily amplified when they are hugged by a passing Duplicant."#
    }
    Staterpillar => {
      r#"Plug Slugs are dynamic creatures that generate electrical Power during the night.<br>Their power can be harnessed by leaving an exposed wire near areas where they like to sleep."#
    }
    StaterpillarLiquid => {
      r#"Sponge Slugs are thirsty creatures that soak up Liquids during the day.<br>They deposit their stored Liquids into the exposed Liquid Pipes they sleep next to at night."#
    }
    Puft => r#"Pufts are non-aggressive critters that excrete lumps of Slime with each breath."#,
    BeeHive => {
      r#"A moderately Radioactive nest made by Beetas.<br>Converts Uranium Ore into Enriched Uranium when worked by a Beeta.<br>Will not function if ground below has been destroyed."#
    }
    Bee => {
      r#"Beetas are hostile critters that thrive in Radioactive environments.<br>They commonly gather Uranium Ore for their Beeta Hives to produce Enriched Uranium."#
    }
    Drecko => {
      r#"Dreckos are nonhostile critters that graze on Pincha Pepperplants, Balm Lily or Mealwood Plants.<br>Their backsides are covered in thick woolly fibers that only grow in Hydrogen climates."#
    }
    DreckoPlastic => {
      r#"Glossy Dreckos are nonhostile critters that graze on live Mealwood Plants and Bristle Blossoms.<br>Their backsides are covered in bioplastic scales that only grow in Hydrogen Gas climates."#
    }
    Glom => {
      r#"Morbs are attracted to unhygienic conditions and frequently excrete bursts of Polluted Oxygen."#
    }
    LightBugBlack => {
      r#"This Shine Bug emits no Light, but it makes up for it by having an excellent personality."#
    }
    LightBugBlue => {
      r#"Shine Bugs emit a soft Light in hopes of attracting more of their kind for company.<br>The light of the Azure morph has been turned blue through selective breeding."#
    }
    LightBug => {
      r#"Shine Bugs emit a soft Light in hopes of attracting more of their kind for company."#
    }
    PuftOxylite => {
      r#"Dense Pufts are non-aggressive critters that excrete condensed Oxylite with each breath."#
    }
    LightBugCrystal => {
      r#"Shine Bugs emit a soft Light in hopes of attracting more of their kind for company.<br>The light of the Radiant morph has been amplified through selective breeding."#
    }
    LightBugPink => {
      r#"Shine Bugs emit a soft Light in hopes of attracting more of their kind for company.<br>The light of the Coral morph has been turned pink through selective breeding."#
    }
    LightBugPurple => {
      r#"Shine Bugs emit a soft Light in hopes of attracting more of their kind for company.<br>The light of the Royal morph has been turned purple through selective breeding."#
    }
    Mole => {
      r#"Shove Voles are burrowing critters that eat the Regolith collected on terrestrial surfaces.<br>They cannot burrow through Refined Metals."#
    }
    MoleDelicacy => {
      r#"Delecta Voles are burrowing critters whose bodies sprout shearable Tonic Root when Regolith is ingested at preferred temperatures.<br>They cannot burrow through Refined Metals."#
    }
    Moo => {
      r#"Moos are extraterrestrial critters that feed on Gas Grass and excrete Natural Gas.<br>When domesticated and fed, they can be milked for Brackene."#
    }
    Oilfloater => {
      r#"Slicksters are slimy critters that consume Carbon Dioxide and exude Crude Oil."#
    }
    OilfloaterDecor => {
      r#"Longhair Slicksters are friendly critters that consume Oxygen and thrive in close contact with Duplicant companions.<br>Longhairs have extremely beautiful and luxurious coats."#
    }
    OilfloaterHighTemp => {
      r#"Molten Slicksters are slimy critters that consume Carbon Dioxide and exude Petroleum."#
    }
    PuftAlpha => {
      r#"The Puft Prince is a lazy critter that excretes little Solid lumps of whatever it has been breathing."#
    }
    PuftBleachstone => {
      r#"Squeaky Pufts are non-aggressive critters that excrete lumps of Bleachstone with each breath."#
    }
    LightBugOrange => {
      r#"Shine Bugs emit a soft Light in hopes of attracting more of their kind for company.<br>The light of the Sun morph has been turned orange through selective breeding."#
    }
    StaterpillarGas => {
      r#"Smog Slugs are porous creatures that draw in unbreathable Gases during the day.<br>At night, they sleep near exposed Gas Pipes, where they deposit their cache."#
    }
    HatchVeggie => {
      r#"Sage Hatches excrete solid Coal as waste and enjoy burrowing into the ground."#
    }
    Hatch => {
      r#"Hatches excrete solid Coal as waste and may be uncovered by digging up Buried Objects."#
    }
    Crab => {
      r#"Pokeshells are nonhostile critters unless their eggs are nearby.<br>They eat Polluted Dirt and Rot Piles.<br>The shells they leave behind after molting can be crushed into Lime."#
    }
    CrabWood => {
      r#"Oakshells are nonhostile critters unless their eggs are nearby.<br>They eat Polluted Dirt, Slime and Rot Piles.<br>The shells they leave behind after molting can be crushed into Lumber.<br>Oakshells thrive in Ethanol."#
    }
    CrabFreshWater => {
      r#"Sanishells are nonhostile critters unless their eggs are nearby.<br>They thrive in Water and eliminate Germs from any liquid it inhabits.<br>They eat Polluted Dirt, Slime and Rot Piles."#
    }
    PacuCleaner => r#"Every organism in the known universe finds the Pacu extremely delicious."#,
    DivergentBeetle => {
      r#"Sweetles are nonhostile critters that excrete large amounts of Sucrose.<br>They are closely related to the Grubgrub and exhibit similar, albeit less effective farming behaviors."#
    }
    HatchHard => {
      r#"Stone Hatches excrete solid Coal as waste and enjoy burrowing into the ground."#
    }
    PacuTropical => r#"Every organism in the known universe finds the Pacu extremely delicious."#,
    DivergentWorm => {
      r#"Grubgrubs form symbiotic relationships with plants, especially Grubfruit Plants, and instinctually tend to them.<br>Grubgrubs are closely related to Sweetles."#
    }
    HatchMetal => {
      r#"Smooth Hatches enjoy burrowing into the ground and excrete Refined Metal when fed Metal Ore."#
    }
    Pacu => {
      r#"Pacus are aquatic creatures that can live in any liquid, such as Water or Contaminated Water.<br>Every organism in the known universe finds the Pacu extremely delicious."#
    }
    DreckoPlasticBaby => {
      r#"A bug-eyed little Glossy Drecklet.<br>In time it will mature into an adult Drecko morph, the Glossy Drecko."#
    }
    DivergentWormBaby => {
      r#"A squirmy little Grubgrub Wormling.<br>In time, it will mature into an adult Grubgrub and drastically grow in size."#
    }
    BeeBaby => {
      r#"A harmless little Beetiny.<br>In time, it will mature into a vicious adult Beeta."#
    }
    DivergentBeetleBaby => {
      r#"A crawly little Sweetle Larva.<br>In time, it will mature into an adult Sweetle."#
    }
    CrabFreshWaterBaby => {
      r#"A picky little Sanishell Spawn.<br>In time it will mature into a fully grown Sanishell."#
    }
    DreckoBaby => {
      r#"A little, bug-eyed Drecklet.<br>In time it will mature into a fully grown Drecko."#
    }
    HatchBaby => r#"An innocent little Hatchling.<br>In time, it will mature into an adult Hatch."#,
    CrabWoodBaby => {
      r#"A knotty little Oakshell Spawn.<br>In time it will mature into a fully grown Oakshell."#
    }
    CrabBaby => {
      r#"A snippy little Pokeshell Spawn.<br>In time it will mature into a fully grown Pokeshell."#
    }
    LightBugBaby => r#"A chubby baby Shine Bug."#,
    HatchMetalBaby => {
      r#"A doofy little Smooth Hatchling.<br>It matures into an adult Hatch morph, the Smooth Hatch, which loves nibbling on different types of metals."#
    }
    PuftOxyliteBaby => {
      r#"A stocky little Dense Puftlet.<br>One day it will grow into an adult Puft morph, the Dense Puft."#
    }
    SquirrelHugBaby => {
      r#"A fuzzy little Cuddle Pipsqueak.<br>In time it will mature into a fully grown Cuddle Pip."#
    }
    PuftBaby => {
      r#"Pufts are non-aggressive critters that excrete lumps of Slime with each breath."#
    }
    PuftBleachstoneBaby => {
      r#"A frazzled little Squeaky Puftlet.<br>One day it will grow into an adult Puft morph, the Squeaky Puft."#
    }
    StaterpillarBaby => {
      r#"A chubby little Plug Sluglet.<br>In time it will mature into a fully grown Plug Slug."#
    }
    PuftAlphaBaby => {
      r#"A gassy little Puftlet Prince.<br>One day it will grow into an adult Puft morph, the Puft Prince.<br>It seems a bit snobby..."#
    }
    PacuTropicalBaby => {
      r#"A wriggly little Tropical Fry.<br>In time it will mature into an adult Pacu morph, the Tropical Pacu."#
    }
    PacuBaby => r#"A wriggly little Pacu Fry.<br>In time, it will mature into an adult Pacu."#,
    PacuCleanerBaby => {
      r#"A wriggly little Gulp Fry.<br>In time, it will mature into an adult Gulp Fish."#
    }
    OilfloaterHighTempBaby => {
      r#"A goopy little Molten Larva.<br>One day it will grow into an adult Slickster morph, the Molten Slickster."#
    }
    StaterpillarGasBaby => {
      r#"A tubby little Smog Sluglet.<br>In time it will mature into a fully grown Smog Slug."#
    }
    OilfloaterDecorBaby => {
      r#"A snuggly little Longhair Larva.<br>One day it will grow into an adult Slickster morph, the Longhair Slickster."#
    }
    OilfloaterBaby => {
      r#"A goopy little Slickster Larva.<br>One day it will grow into an adult Slickster."#
    }
    StaterpillarLiquidBaby => {
      r#"A chonky little Sponge Sluglet.<br>In time it will mature into a fully grown Sponge Slug."#
    }
    MoleDelicacyBaby => {
      r#"A tender little Delecta Vole pup.<br>One day it will grow into an adult Shove Vole morph, the Delecta Vole."#
    }
    MoleBaby => {
      r#"Shove Voles are burrowing critters that eat the Regolith collected on terrestrial surfaces.<br>They cannot burrow through Refined Metals."#
    }
    LightBugPurpleBaby => r#"A chubby baby Shine Bug.<br>This one is a Royal morph."#,
    LightBugPinkBaby => r#"A chubby baby Shine Bug.<br>This one is a Coral morph."#,
    LightBugOrangeBaby => r#"A chubby baby Shine Bug.<br>This one is a Sun morph."#,
    LightBugCrystalBaby => r#"A chubby baby Shine Bug.<br>This one is a Radiant morph."#,
    LightBugBlueBaby => r#"A chubby baby Shine Bug.<br>This one is an Azure morph."#,
    LightBugBlackBaby => r#"A chubby baby Shine Bug.<br>This one is an Abyss morph."#,
    HatchVeggieBaby => {
      r#"A doofy little Sage Hatchling.<br>It matures into an adult Hatch morph, the Sage Hatch, which loves nibbling on organic materials."#
    }
    HatchHardBaby => {
      r#"A doofy little Stone Hatchling.<br>It matures into an adult Hatch morph, the Stone Hatch, which loves nibbling on various rocks and metals."#
    }
    SquirrelBaby => {
      r#"A little purring Pipsqueak.<br>In time it will mature into a fully grown Pip."#
    }
    BasicFabricMaterialPlantSeed => {
      r#"The Seed of a Thimble Reed.<br>Digging up Buried Objects may uncover a Thimble Reed Seed."#
    }
    BasicSingleHarvestPlantSeed => {
      r#"The Seed of a Mealwood.<br>Digging up Buried Objects may uncover a Mealwood Seed."#
    }
    BeanPlantSeed => {
      r#"The Seed of a Nosh Sprout.<br>Digging up Buried Objects may uncover a Nosh Bean."#
    }
    ColdBreatherSeed => {
      r#"The Seed of a Wheezewort.<br>Digging up Buried Objects may uncover a Wort Seed."#
    }
    ColdWheatSeed => {
      r#"The Seed of a Sleet Wheat plant.<br>Grain can be sown to cultivate more Sleet Wheat, or processed into Food."#
    }
    CritterTrapPlantSeed => {
      r#"The Seed of a Saturn Critter Trap.<br>Digging up Buried Objects may uncover a Saturn Critter Trap Seed."#
    }
    ForestTreeSeed => {
      r#"The Seed of an Arbor Tree.<br>Digging up Buried Objects may uncover an Arbor Acorn."#
    }
    GasGrassSeed => r#"The Seed of a Gas Grass plant."#,
    SaltPlantSeed => {
      r#"The Seed of a Dasha Saltvine.<br>Digging up Buried Objects may uncover a Dasha Saltvine Seed."#
    }
    PrickleFlowerSeed => {
      r#"The Seed of a Bristle Blossom.<br>Digging up Buried Objects may uncover a Blossom Seed."#
    }
    SeaLettuceSeed => {
      r#"The Seed of a Waterweed.<br>Digging up Buried Objects may uncover a Waterweed Seed."#
    }
    SpiceVineSeed => {
      r#"The Seed of a Pincha Pepperplant.<br>Digging up Buried Objects may uncover a Pincha Pepper Seed."#
    }
    OxyfernSeed => r#"The Seed of an Oxyfern plant."#,
    SwampHarvestPlantSeed => {
      r#"The Seed of a Bog Bucket.<br>Digging up Buried Objects may uncover a Bog Bucket Seed."#
    }
    SwampLilySeed => {
      r#"The Seed of a Balm Lily.<br>Digging up Buried Objects may uncover a Balm Lily Seed."#
    }
    WormPlantSeed => {
      r#"The Seed of a Spindly Grubfruit Plant.<br>Digging up Buried Objects may uncover a Grubfruit Seed."#
    }
    MushroomSeed => {
      r#"The Seed of a Dusk Cap.<br>Digging up Buried Objects may uncover a Fungal Spore."#
    }
    BasicFabricPlant => {
      r#"Thimble Reeds produce indescribably soft Reed Fiber for Clothing production."#
    }
    BasicSingleHarvestPlant => {
      r#"Mealwoods produce Meal Lice, an oddly wriggly grain that can be harvested for Food."#
    }
    BeanPlant => r#"Nosh Sprouts thrive in colder climates and produce edible Nosh Beans."#,
    ColdWheat => {
      r#"Sleet Wheat produces Sleet Wheat Grain, a chilly grain that can be processed into Food."#
    }
    CritterTrapPlant => {
      r#"Critter Traps are carnivorous plants that trap unsuspecting critters and consume them, releasing Hydrogen Gas as waste."#
    }
    ForestTree => r#"Arbor Trees grow Arbor Tree Branches and can be harvested for lumber."#,
    GasGrass => {
      r#"Gas Grass is an alien lifeform tentatively categorized as a "plant," which makes up the entirety of the Gassy Moo's diet."#
    }
    SaltPlant => {
      r#"Dasha Saltvines consume small amounts of Chlorine Gas and form sodium deposits as they grow, producing harvestable Salt."#
    }
    PrickleFlower => r#"Bristle Blossoms produce Bristle Berry, a prickly edible bud."#,
    SeaLettuce => {
      r#"Waterweeds thrive in salty water and can be harvested for fresh, edible Lettuce."#
    }
    SpiceVine => r#"Pincha Pepperplants produce flavorful Pincha Peppernut for spicing Food."#,
    SuperWormPlant => {
      r#"A Grubfruit Plant that has flourished after being tended by a Divergent critter.<br>It will produce high quality Grubfruits."#
    }
    SwampHarvestPlant => r#"Bog Buckets produce juicy, sweet Bog Jellies for Food."#,
    SwampLily => {
      r#"Balm Lilies produce Balm Lily Flower, a lovely bloom with medicinal properties."#
    }
    WormPlant => {
      r#"Spindly Grubfruit Plants produce Spindly Grubfruit for Food.<br>If it is tended by a Divergent critter, it will produce high quality fruits instead."#
    }
    MushroomPlant => {
      r#"Dusk Caps produce Mushrooms, fungal growths that can be harvested for Food."#
    }
    BasicForagePlantPlanted => {
      r#"Muckroots are incapable of propagating but can be harvested for a single Food serving."#
    }
    ForestForagePlantPlanted => {
      r#"Hexalents are incapable of propagating but can be harvested for a single, calorie dense Food serving."#
    }
    SwampForagePlantPlanted => {
      r#"Swamp Chards are incapable of propagating but can be harvested for a single low quality and calorie dense Food serving."#
    }
    CactusPlantSeed => {
      r#"The Seed of a Jumping Joya.<br>Digging up Buried Objects may uncover a Joya Seed."#
    }
    CylindricaSeed => {
      r#"The Seed of a Bliss Burst.<br>Digging up Buried Objects may uncover a Bliss Burst Seed."#
    }
    EvilFlowerSeed => {
      r#"The Seed of a Sporechid.<br>Digging up Buried Objects may uncover a Sporechid Seed."#
    }
    BulbPlantSeed => {
      r#"The Seed of a Buddy Bud.<br>Digging up Buried Objects may uncover a Buddy Bud Seed."#
    }
    PrickleGrassSeed => {
      r#"The Seed of a Bluff Briar.<br>Digging up Buried Objects may uncover a Briar Seed."#
    }
    WineCupsSeed => {
      r#"The Seed of a Mellow Mallow.<br>Digging up Buried Objects may uncover a Mallow Seed."#
    }
    ToePlantSeed => {
      r#"The Seed of a Tranquil Toes.<br>Digging up Buried Objects may uncover a Tranquil Toe Seed."#
    }
    LeafyPlantSeed => {
      r#"The Seed of a Mirth Leaf.<br>Digging up Buried Objects may uncover a Mirth Leaf Seed."#
    }
    CactusPlant => {
      r#"Joyas are Decorative Plants that are colloquially said to make gardeners "jump for joy"."#
    }
    ColdBreather => {
      r#"Wheezeworts can be planted in Planter Boxes, Farm Tiles or Hydroponic Farms, and absorb Heat by respiring through their porous outer membranes."#
    }
    Cylindrica => r#"Bliss Bursts release an explosion of Decor into otherwise dull environments."#,
    EvilFlower => {
      r#"Sporechids have an eerily alluring appearance to mask the fact that they host particularly nasty strain of brain fungus."#
    }
    BulbPlant => {
      r#"Buddy Buds are leafy plants that have a positive effect on Morale, much like a friend."#
    }
    PrickleGrass => {
      r#"Bluff Briars exude pheromones causing critters to view them as especially beautiful."#
    }
    Oxyfern => r#"Oxyferns absorb Carbon Dioxide Gas and exude breathable Oxygen."#,
    WineCups => {
      r#"Mellow Mallows heighten Decor and alleviate Stress with their calming color and cradle shape."#
    }
    ToePlant => {
      r#"Tranquil Toes improve Decor by giving their surroundings the visual equivalent of a foot rub."#
    }
    LeafyPlant => {
      r#"Mirth Leaves sport a calm green hue known for alleviating Stress and improving Morale."#
    }
    GeyserGeneric_steam => r#"A highly pressurized vent that periodically erupts with Steam."#,
    GeyserGeneric_hot_steam => {
      r#"A highly pressurized vent that periodically erupts with scalding Steam."#
    }
    GeyserGeneric_hot_water => {
      r#"A highly pressurized geyser that periodically erupts with hot Water."#
    }
    GeyserGeneric_slush_water => {
      r#"A highly pressurized geyser that periodically erupts with freezing Polluted Water."#
    }
    GeyserGeneric_filthy_water => {
      r#"A highly pressurized vent that periodically erupts with boiling Contaminated Water."#
    }
    GeyserGeneric_slush_salt_water => {
      r#"A highly pressurized geyser that periodically erupts with freezing Brine."#
    }
    GeyserGeneric_salt_water => {
      r#"A highly pressurized geyser that periodically erupts with Salt Water."#
    }
    GeyserGeneric_small_volcano => {
      r#"A miniature volcano that periodically erupts with molten Magma."#
    }
    GeyserGeneric_big_volcano => r#"A massive volcano that periodically erupts with molten Magma."#,
    GeyserGeneric_liquid_co2 => {
      r#"A highly pressurized geyser that periodically erupts with boiling Liquid Carbon Dioxide."#
    }
    GeyserGeneric_hot_co2 => {
      r#"A highly pressurized vent that periodically erupts with hot Carbon Dioxide."#
    }
    GeyserGeneric_hot_hydrogen => {
      r#"A highly pressurized vent that periodically erupts with hot gaseous Hydrogen."#
    }
    GeyserGeneric_hot_po2 => {
      r#"A highly pressurized vent that periodically erupts with hot Polluted Oxygen."#
    }
    GeyserGeneric_slimy_po2 => {
      r#"A highly pressurized vent that periodically erupts with warm Polluted Oxygen."#
    }
    GeyserGeneric_chlorine_gas => {
      r#"A highly pressurized vent that periodically erupts with warm Chlorine Gas."#
    }
    GeyserGeneric_methane => {
      r#"A highly pressurized geyser that periodically erupts with hot Natural Gas."#
    }
    GeyserGeneric_molten_copper => {
      r#"A large volcano that periodically erupts with Molten Copper."#
    }
    GeyserGeneric_molten_iron => r#"A large volcano that periodically erupts with Molten Iron."#,
    GeyserGeneric_molten_gold => r#"A large volcano that periodically erupts with Molten Gold."#,
    GeyserGeneric_molten_aluminum => {
      r#"A large volcano that periodically erupts with Molten Aluminum."#
    }
    GeyserGeneric_molten_tungsten => {
      r#"A large volcano that periodically erupts with Molten Tungsten."#
    }
    GeyserGeneric_molten_niobium => r#"A large volcano that periodically erupts with Niobium."#,
    GeyserGeneric_molten_cobalt => {
      r#"A large volcano that periodically erupts with Molten Cobalt."#
    }
    GeyserGeneric_oil_drip => r#"A fissure that periodically erupts with boiling Crude Oil."#,
    GeyserGeneric_liquid_sulfur => {
      r#"A highly pressurized geyser that periodically erupts with boiling Liquid Sulfur."#
    }
    OilWell => {
      r#"Oil Reservoirs are rock formations with Crude Oil deposits beneath their surface.<br>Oil can be extracted from a reservoir with sufficient pressure."#
    }
    Atmo_Suit => r#"Supplies Duplicants with Oxygen in toxic and low breathability environments."#,
    Jet_Suit => {
      r#"Supplies Duplicants with Oxygen in toxic and low breathability environments.<br>Allows Duplicant flight."#
    }
    Lead_Suit => r#"Supplies Duplicants with Oxygen in toxic and low breathability environments."#,
    Oxygen_Mask => {
      r#"Supplies Duplicants with Oxygen in toxic and low breathability environments."#
    }
    Worn_Atmo_Suit => r#"A worn out Atmo Suit.<br>Suits can be repaired at an Exosuit Forge."#,
    Worn_Jet_Suit => r#"A worn out Jet Suit.<br>Suits can be repaired at an Exosuit Forge."#,
    Worn_Lead_Suit => r#"A worn out Lead Suit.<br>Suits can be repaired at an Exosuit Forge."#,
    Worn_Oxygen_Mask => {
      r#"A worn out Oxygen Mask.<br>Masks can be repaired at a Crafting Station."#
    }
    Cool_Vest => r#"Protects the wearer from Heat by decreasing insulation"#,
    CustomClothing => r#"Increases Decor in a small area effect around the wearer"#,
    Funky_Vest => {
      r#"Increases Decor in a small area effect around the wearer. Can be upgraded to Primo Garb at the Clothing Refashionator"#
    }
    SleepClinicPajamas => {
      r#"A soft, fleecy ticket to dreamland.<br>Helps Duplicants fall asleep by reducing Stamina.<br>Enables the wearer to dream and produce Dream Journals."#
    }
    Warm_Vest => r#"Protects the wearer from Cold by increasing insulation"#,
    #[allow(unreachable_patterns)]
    _ => "Not translated",
  }
}
