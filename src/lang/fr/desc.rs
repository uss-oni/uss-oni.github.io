use crate::lang::Game::{
  *, {self},
};

pub fn translate(game: Game) -> &'static str {
  match game {
    AdvancedDoctorStation => {
      r#"Les chambres de décontamination ont besoin d'énergie, mais permettent de traiter les affections plus sévères que les lits médicaux."#
    }
    Apothecary => {
      r#"Certains traitements aident à prévenir les maladies, alors que d'autres sont destinés à guérir les affections déclarées."#
    }
    DecontaminationShower => r#"N'oubliez pas de décontaminer derrière vos oreilles."#,
    DoctorStation => {
      r#"Les infirmeries peuvent être placées dans les hôpitaux pour réduire les risques de propagation des maladies."#
    }
    Grave => {
      r#"Enterrer les Duplicants morts réduit les risques pour la santé et le stress au sein de la colonie."#
    }
    HandSanitizer => r#"Le désinfectant pour les mains tue plus de germes que les lavabos."#,
    MassageTable => {
      r#"Les tables de massage réduisent rapidement le stress mais ont besoin d'être alimentées en énergie."#
    }
    MedicalCot => {
      r#"Les Duplicants utilisent les lits de triage pour récupérer de leurs blessures physiques et recevoir de l'aide de leurs pairs."#
    }
    WashBasin => {
      r#"La propagation des germes peut être réduite en le construisant là où les Duplicants sont susceptibles de se salir."#
    }
    WashSink => {
      r#"Les éviers sont raccordés et n'ont pas besoin d'être vidés ou remplis manuellement."#
    }
    AdvancedResearchCenter => {
      r#"Les super ordinateurs débloquent des technologies bien supérieures aux seules stations de recherche."#
    }
    ArtifactAnalysisStation => r#"Découvrir les mystères du passé."#,
    ClothingAlterationStation => {
      r#"Permet aux Duplicants compétents d'ajouter une touche personnelle à leur garde-robe."#
    }
    ClothingFabricator => {
      r#"Un métier à tisser peut être utilisé pour transformer des fibres de roseau en vêtement pour Duplicant."#
    }
    CosmicResearchCenter => {
      r#"Les planétariums permettent de simuler l'exploration des lieux découverts grâce à un télescope."#
    }
    CraftingTable => {
      r#"Les établis permettent aux Duplicants de fabriquer les masques à oxygène qu'ils portent dans les zones où la respirabilité est difficile."#
    }
    DLC1CosmicResearchCenter => {
      r#"Les planétariums permettent de simuler l'exploration des lieux enregistrés dans les banques de données.grâce à un télescope."#
    }
    FarmStation => {
      r#"Cette station n'a un effet que sur les cultures qui ont poussé dans la même pièce."#
    }
    GeneticAnalysisStation => r#"Est-ce qu'une rose mutante aura le même parfum enivrant?"#,
    GeoTuner => {
      r#"Le geyser sélectionné reçoit les données d'amplification stockées lorsqu'il entre en éruption."#
    }
    JetSuitLocker => {
      r#"Les stations pour combinaison à propulsion peuvent recharger l'air et le carburant des combinaisons ou les débarrasser de leurs déchets."#
    }
    JetSuitMarker => {
      r#"Un point de contrôle doit avoir une station pour combinaison à propulsion construite sur le côté opposé à la direction indiquée par la flèche."#
    }
    LeadSuitLocker => {
      r#"Les stations pour combinaison en plomb peuvent recharger l'air des combinaisons et les débarrasser de leurs déchets."#
    }
    LeadSuitMarker => {
      r#"Un point de contrôle doit avoir une station construite sur le côté opposé à la direction indiquée par la flèche."#
    }
    MilkingStation => r#"Le liquide récolté est l'équivalent du soda pour les créatures."#,
    MissileFabricator => {
      r#"Les obus explosifs constituent une défense efficace contre les pluies de météores en approche."#
    }
    NuclearResearchCenter => r#"Fourni avec quelques ions livrés gratuitement."#,
    OrbitalResearchCenter => {
      r#"Les labos de collecte de données orbitales relèvent de données lorsqu'ils orbitent autour d'un planétoïde et les enregistrent sur une banque de données."#
    }
    OxygenMaskLocker => {
      r#"Une station d'accueil de masque à oxygène stockera et remplira les masques pendant qu’ils ne sont pas utilisés."#
    }
    OxygenMaskMarker => {
      r#"Un point de contrôle doit avoir une station pour combinaison à propulsion construite sur le côté opposé à la direction indiquée par la flèche."#
    }
    PowerControlStation => r#"Un seul Duplicant à la fois peut être affecté à une station."#,
    RanchStation => {
      r#"S'occuper des créatures les rend plus belles, elles sentent bon, sont plus heureuses et sont plus productives."#
    }
    ResearchCenter => {
      r#"Les stations de recherche sont nécessaires pour débloquer tous les niveaux de recherche."#
    }
    ResetSkillsStation => {
      r#"Supprime les compétences du cerveau d'un Duplicant, ce qui lui rend ses capacités par défaut."#
    }
    ShearingStation => r#"Ces créatures ne vont pas se tondre toutes seules."#,
    SuitFabricator => {
      r#"Les exosuits peuvent être chargées avec de l'oxygène pour permettre aux Duplicants d'entrer sans danger dans des zones inhabitables."#
    }
    SuitLocker => {
      r#"Une station pour combi atmo débarrassera la combinaison de ses déchets, mais elle ne permet de charger qu'une combinaison à la fois."#
    }
    SuitMarker => {
      r#"Un checkpoint doit avoir une station en relation construite sur le côté opposé à la direction indiquée par la flèche."#
    }
    Telescope => {
      r#"Les télescopes sont nécessaires pour étudier les cartes stellaires et organiser des missions en fusée."#
    }
    AirBorneCritterCondo => {
      r#"Déclenche l'instinct de nidification des créatures et améliore leur humeur."#
    }
    CookingStation => {
      r#"La cuisine élimine les maladies d'origine alimentaire et produit des repas savoureux et soulageant le stress."#
    }
    CreatureFeeder => {
      r#"Les créatures ont tendance à rester à proximité de leur source de nourriture et se promèneront moins si on leur fournit un distributeur."#
    }
    CritterCondo => r#"Il est bon d'avoir de belles choses."#,
    CritterDropOff => {
      r#"Les Duplicants apportent automatiquement les créatures capturées à ces points de relocalisation pour les remettre en liberté."#
    }
    CritterPickUp => r#"Les Duplicants s'occuperont automatiquement des créatures surnuméraires."#,
    EggCracker => r#"Les œufs crus sont des ingrédients pour des recettes de haute qualité."#,
    EggIncubator => {
      r#"Les incubateurs peuvent fournir les conditions optimales pour les œufs de différentes espèces de créature."#
    }
    FarmTile => {
      r#"Les Duplicants peuvent livrer de l'engrais et des liquides aux dalles de culture, ce qui accélère la croissance des plantes."#
    }
    FishDeliveryPoint => {
      r#"Cet équipement doit être construit au dessus du liquide pour empêcher les poissons de suffoquer."#
    }
    FishFeeder => {
      r#"Construisez ce distributeur au dessus d'un étendue d'eau pour nourrir les poissons qui s'y trouvent."#
    }
    FoodDehydrator => r#"Une partie du liquide éliminé se retrouve inévitablement sur le sol."#,
    FoodRehydrator => {
      r#"Les aliments réhydratés sont nutritifs et leur goût n'est que légèrement altéré."#
    }
    GourmetCookingStation => {
      r#"Les repas luxueux améliorent le moral des Duplicants et préviennent le stress."#
    }
    HydroponicFarm => {
      r#"Les fermes hydroponiques réduisent les allers-retours des Duplicants en automatisant l'irrigation des cultures."#
    }
    MicrobeMusher => {
      r#"Les recettes réalisées à l'aide du hachoir nourriront les Duplicants mais, à terme, impacteront leur santé et leur moral."#
    }
    MilkFeeder => {
      r#"Il est plus facile de tolérer le surpeuplement lorsque l'on est sous l'emprise du brackène."#
    }
    PlanterBox => {
      r#"Les graines qui poussent dans des fermes arrivent plus rapidement à maturité que les plantes sauvages."#
    }
    RationBox => {
      r#"Les garde-manger conservent la nourriture à l'abri des créatures affamées, mais ne ralentissent pas la détérioration des aliments."#
    }
    Refrigerator => {
      r#"La dégradation de la nourriture peut être retardée par certains facteurs environnants ou bien à l'aide de réfrigérateurs."#
    }
    SpiceGrinder => {
      r#"Les graines broyées et autres produits comestibles font d'excellents additifs pour améliorer les repas."#
    }
    UnderwaterCritterCondo => {
      r#"Même les créatures sauvages sont plus heureuses après une séance de repos et relaxation."#
    }
    CreatureAirTrap => r#"Il doit être armé avant d'être utilisé."#,
    CreatureGroundTrap => {
      r#"Il est conçu pour les créatures  terrestres, mais les poissons sauteurs se retrouvent parfois piégés à l'intérieur."#
    }
    WaterTrap => r#"Les poissons emprisonnés seront ensachés pour le transport."#,
    AirConditioner => {
      r#"Un thermorégulateur ne supprime pas la chaleur, mais la déplace dans une autre zone."#
    }
    IceCooledFan => {
      r#"Un Duplicant peut utiliser un ventilaglace pour refroidir temporairement de petites zones si nécessaire."#
    }
    IceMachine => {
      r#"Les machines à glace peuvent être utilisées comme une petite source renouvelable de glace."#
    }
    LiquidConditioner => {
      r#"Un thermostat aquatique refroidit le liquide et envoie la chaleur ailleurs."#
    }
    LiquidHeater => {
      r#"Les chauffe eau augmentent la température du liquide ce qui peut tuer les germes d'origine hydrique."#
    }
    OilWellCap => r#"L'eau injectée dans un réservoir de pétrole ne peut pas être récupérée."#,
    OreScrubber => {
      r#"Les épurateurs assainissent les ressources fraîchement minées avant de les acheminer vers la colonie."#
    }
    SpaceHeater => r#"Un chauffage d'appoint dégagera de la chaleur tant qu'il est alimenté."#,
    SweepBotStation => r#"Le petit visage mignon est livré pré-installé."#,
    ThermalBlock => {
      r#"Les propriétés thermiques des matériaux de construction déterminent leur propension a retenir la chaleur."#
    }
    AirFilter => r#"Oh! une odeur d'agrumes!"#,
    AlgaeHabitat => {
      r#"Colonie d'algues, colonie de Duplicants...nous avons plus de points communs que de différences."#
    }
    CO2Scrubber => {
      r#"Les dépollueurs suppriment de grandes quantités de dioxyde de carbone, mais ne produisent pas d'air respirable."#
    }
    Electrolyzer => r#"L'eau entre d'un côté, l'oxygène indispensable à la vie sort de l'autre."#,
    MineralDeoxidizer => {
      r#"Les diffuseurs d'oxygène sont peu efficaces, mais génèrent suffisamment d'oxygène pour permettre à une colonie de respirer."#
    }
    RustDeoxidizer => r#"La rouille et le sel entrent, l'oxygène sort."#,
    SublimationStation => {
      r#"La sublimation est ce processus sublime grâce auquel des solides sont convertis directement en gaz."#
    }
    AlgaeDistillery => {
      r#"Les distillateurs d'algues convertissent la vase causant des maladies en algues pour la production d'oxygène."#
    }
    Chlorinator => r#"La roche chlorée est utile pour l'assainissement et le géo-accordage."#,
    Compost => {
      r#"Les composts traitent les déchets biologiques en toute sécurité , en produisant de la terre fraîche."#
    }
    DiamondPress => r#"Compresse du carbone raffiné pour le changer en diamant."#,
    EthanolDistillery => {
      r#"Les distillateurs d'éthanol transforment le bois en éthanol combustible."#
    }
    FertilizerMaker => {
      r#"Les synthétiseurs d'engrais transforment la terre polluée en engrais pour les plantes domestiques."#
    }
    GlassForge => r#"Le verre peut être utilisé pour construire une dalle vitrée."#,
    Kiln => r#"Les fours peuvent également être utilisés pour raffiner du charbon en carbone pur."#,
    MetalRefinery => {
      r#"Des métaux raffinés sont nécessaires pour construire de l'électronique et des technologies avancées."#
    }
    MilkFatSeparator => {
      r#"Les Duplicants peuvent s'enduire de cire pour augmenter leur vitesse de déplacement dans les tubes de transit."#
    }
    MilkPress => r#"Pour les Duplicants qui n'ont pas envie de traire les créatures."#,
    OilRefinery => r#"Le pétrole ne peut être produit que par raffinage de pétrole brut."#,
    OxyliteRefinery => {
      r#"L'Oxylite est une source d'oxygène consommable solide et facilement transportable."#
    }
    Polymerizer => {
      r#"Le plastique peut être utilisé pour fabriquer des bâtiments et des produits."#
    }
    RockCrusher => {
      r#"Le broyeur de roches sépare les pépites du minerai brut et peut traiter de nombreuses ressources."#
    }
    SludgePress => r#"Quel Duplicant n'aime pas jouer avec la boue?"#,
    SupermaterialRefinery => {
      r#"Des matériaux rares peuvent être récupérés grâce à l'envoi de fusées dans l'espace."#
    }
    WaterPurifier => {
      r#"Les purificateurs ne peuvent pas tuer les germes et les laisseront s'échapper dans l'eau et les déchets qu'ils rejettent."#
    }
    Desalinator => {
      r#"Le sel peut être raffiné en sel de table pour améliorer le moral lors des repas."#
    }
    ArcadeMachine => r#"Komet Kablam-O!<br>Pour deux joueurs maximum."#,
    BeachChair => r#"Baigne dans les rayons relaxants du Soleil."#,
    Bed => {
      r#"Les Duplicants qui n'ont pas de lit auront des douleurs dorsales à force de dormir sur le sol."#
    }
    Canvas => {
      r#"Une fois construite, un Duplicant peut peindre sur une toile vierge pour créer un tableau décoratif."#
    }
    CanvasTall => {
      r#"Une fois construite, un Duplicant peut peindre sur une toile vierge pour créer un tableau décoratif."#
    }
    CanvasWide => {
      r#"Une fois construite, un Duplicant peut peindre sur une toile vierge pour créer un tableau décoratif."#
    }
    CeilingLight => {
      r#"La lumière réduit le stress des Duplicants et est nécessaire pour faire pousser certaines plantes."#
    }
    CornerMoulding => {
      r#"La moulure d'angle est utilisée comme bordure décorative pour les coins des plafonds."#
    }
    CrownMoulding => {
      r#"La moulure de plafond est une amélioration qui n'a qu'un effet sur la  décoration."#
    }
    DiningTable => r#"Les Duplicants préfèrent manger à table plutôt que sur le sol."#,
    EspressoMachine => {
      r#"Une tasse d'expresso aide les Duplicants à se relaxer après une longue journée."#
    }
    FloorLamp => {
      r#"Le rayon d'émission de la lumière d'une construction peut être contrôlé dans le calque lumière."#
    }
    FlowerVase => {
      r#"Les pots de fleurs permettent d'installer les plantes décoratives à d'autres endroits."#
    }
    FlowerVaseHanging => {
      r#"Les pots suspendus peuvent ajouter une petite touche de décoration à une pièce, sans interférer avec les équipements au sol."#
    }
    FlowerVaseHangingFancy => {
      r#"Les vases peuvent être suspendus au plafond et ont des valeurs de décoration élevées."#
    }
    FlowerVaseWall => {
      r#"Placer une plante dans un pot mural peut ajouter une touche de décoration à un mur qui serait resté nu le cas échéant."#
    }
    HotTub => r#"Relaxe les Duplicants grâce à des jets de liquide chaud."#,
    IceSculpture => r#"Encline à fondre."#,
    ItemPedestal => {
      r#"La perception peut être considérablement modifiée en réfléchissant à la présentation."#
    }
    Juicer => r#"Un jus fruité peut véritablement illuminer la pause d'un Duplicant"#,
    LadderBed => {
      r#"Le sommeil du Duplicant a été interrompu par un autre Duplicant qui utilisait l'échelle."#
    }
    LuxuryBed => {
      r#"Les Duplicants préfèrent les lits confortables aux lits de camp et récupéreront plus d'endurance en les utilisant."#
    }
    MarbleSculpture => {
      r#"Les Duplicants qui ont acquis des compétences artistiques peuvent créer des scultures plus décoratives."#
    }
    MechanicalSurfboard => r#"Des vagues mécaniques pour un moment de relaxation totale."#,
    MetalSculpture => {
      r#"Les Duplicants qui ont acquis des compétences artistiques peuvent créer des scultures plus décoratives."#
    }
    MonumentBottom => r#"Le socle d'un monument doit être construit en premier."#,
    MonumentMiddle => {
      r#"Les sections personnalisées du monument peuvent être mélangées et arrangées."#
    }
    MonumentTop => {
      r#"Construire un monument affirmera à l'univers entier que ce bout de caillou est à vous."#
    }
    ParkSign => r#"Traverser les parcs augmentera le moral des Duplicants."#,
    Phonobox => r#"Danser aide les Duplicants à exprimer leurs sentiments enfouis."#,
    PixelPack => r#"Quatre pixels qui peuvent chacun se voir attribuer des couleurs distinctes."#,
    Sauna => r#"Un sauna soulage toutes les courbatures et douleurs."#,
    Sculpture => {
      r#"Les Duplicants qui ont acquis des compétences artistiques peuvent créer des scultures plus décoratives."#
    }
    SmallSculpture => {
      r#"Les Duplicants qui ont acquis des compétences artistiques peuvent créer des scultures plus décoratives."#
    }
    SodaFountain => r#"L'eau pétillante fait briller l'œil d'un Duplicant."#,
    SunLamp => r#"Un rayon de soleil artificiel."#,
    Telephone => r#"Tu ne sais jamais qui sera au bout du fil."#,
    VerticalWindTunnel => r#"Les Duplicants aiment sentir ce vent fort à travers leurs cheveux."#,
    WaterCooler => r#"Discuter avec des amis améliore l'humeur du Duplicant et réduit son stress."#,
    ArtifactCargoBay => r#"Contient les artefacts trouvés dans l'espace."#,
    BatteryModule => {
      r#"Charger un module de batterie avant le décollage facilite l’alimentation des équipements durant le vol."#
    }
    CO2Engine => {
      r#"Les fusées peuvent être utilisées pour envoyer des Duplicants dans l'espace et rapporter des ressources rares."#
    }
    CommandModule => {
      r#"Au moins un astronaute doit être affecté au module de commande pour piloter une fusée."#
    }
    GasCargoBayCluster => r#"La capacité est supérieure à celle d'un réservoir de gaz standard."#,
    GasCargoBay => {
      r#"Les Duplicants rempliront les soutes avec toutes les ressources qu'ils trouveront au cours des missions spatiales."#
    }
    GasCargoBaySmall => {
      r#"Les Duplicants rempliront les réservoirs avec toute ressource trouvée pendant les missions spatiales."#
    }
    HEPEngine => {
      r#"Les fusées propulsées grâce aux radbolts ne peuvent avoir que quelques modules, mais voyagent exceptionnellement loin."#
    }
    HabitatModuleMedium => {
      r#"Permet aux Duplicants de survivre aux voyages spatiaux... normalement."#
    }
    HabitatModuleSmall => r#"Un Duplicant chanceux a la meilleure vue de toute la fusée."#,
    HydrogenEngineCluster => {
      r#"Les moteurs à hydrogène peuvent propulser les fusées plus loin que les moteurs à vapeur ou au pétrole."#
    }
    HydrogenEngine => {
      r#"Les moteurs à hydrogène peuvent propulser les fusées plus loin que les moteurs à vapeur ou au pétrole."#
    }
    KeroseneEngineCluster => {
      r#"Les moteurs de fusées plus puissants peuvent propulser des charges plus lourdes."#
    }
    KeroseneEngineClusterSmall => {
      r#"Les fusées peuvent être utilisées pour envoyer des Duplicants dans l'espace et récupérer des ressources rares."#
    }
    KeroseneEngine => {
      r#"Les fusées peuvent être utilisées pour envoyer les Duplicants dans l'espace afin de collecter des ressources rares."#
    }
    LiquidCargoBayCluster => r#"La capacité est supérieure à celle d'un réservoir standard."#,
    LiquidCargoBay => {
      r#"Les Duplicants rempliront les soutes avec toutes les ressources qu'ils trouveront au cours des missions spatiales."#
    }
    LiquidCargoBaySmall => {
      r#"Les Duplicants rempliront les réservoirs avec toutes les ressources qu'ils trouvent au cours de leurs missions spatiales."#
    }
    LiquidFuelTankCluster => {
      r#"Emmagasiner plus de carburant augmente la distance qu'une fusée peut parcourir avant de rentrer."#
    }
    LiquidFuelTank => {
      r#"Emmagasiner plus de carburant augmente la distance qu'une fusée peut parcourir avant de rentrer."#
    }
    NoseconeBasic => r#"Chaque fusée requiert une coiffe pour voler."#,
    NoseconeHarvest => r#"Collecte les ressources dans l'univers."#,
    OrbitalCargoModule => {
      r#"Il est généralement judicieux d'emporter des ressources avant d'aller explorer des mondes inconnus."#
    }
    OxidizerTankCluster => {
      r#"Les comburants solides permettent de brûler efficacement le carburant des fusées dans le vide de l'espace."#
    }
    OxidizerTank => {
      r#"Les comburants solides permettent de brûler efficacement le carburant des fusées dans le vide de l'espace."#
    }
    OxidizerTankLiquidCluster => {
      r#"L'oxygène liquide améliore le ratio poussée/masse du carburant des fusées."#
    }
    OxidizerTankLiquid => {
      r#"L'oxygène liquide améliore le ratio poussée/masse du carburant des fusées."#
    }
    PioneerModule => r#"Un petit pas pour le genre Duplicant."#,
    ResearchModule => {
      r#"Les banques de données peuvent être utilisées aux planétariums virtuels afin de produire des points de recherche additionnels."#
    }
    ScannerModule => {
      r#"Permet aux Duplicants d'aller courageusement là ou aucun autre Duplicant n'est encore allé."#
    }
    ScoutModule => {
      r#"Les rovers peuvent explorer des planétoïdes qui n'ont pas de plateformes pour les fusées."#
    }
    SmallOxidizerTank => {
      r#"Les comburants solides permettent de brûler efficacement le carburant des fusées dans le vide de l'espace."#
    }
    SolarPanelModule => r#"Absorbe l’énergie solaire avant le décollage et pendant le vol."#,
    SolidBooster => {
      r#"Des propulseurs supplémentaires permettent aux fusées d'atteindre les destinations lointaines."#
    }
    CargoBayCluster => r#"La capacité est supérieure à celle d'une soute standard."#,
    CargoBay => {
      r#"Les Duplicants rempliront les soutes avec toutes les ressources qu'ils trouveront au cours des missions spatiales."#
    }
    SolidCargoBaySmall => {
      r#"Les Duplicants rempliront les soutes avec toutes les ressources qu'ils trouveront au cours des missions spatiales."#
    }
    SpecialCargoBayCluster => {
      r#"Les créatures n'ont pas besoin d'être nourries durant le transfert."#
    }
    SpecialCargoBay => {
      r#"Les soutes pour matériel biologique permettent aux Duplicants de ramener des végétaux extraterrestres et la faune provenant de l'espace."#
    }
    SteamEngineCluster => {
      r#"Les fusées peuvent être utilisées pour envoyer des Duplicants dans l'espace et récupérer des ressources rares."#
    }
    SteamEngine => {
      r#"Les fusées peuvent être utilisées pour envoyer des Duplicants dans l'espace afin de collecter des ressources rares."#
    }
    SugarEngine => {
      r#"Pas le moyen le plus stylé de voyager dans l'espace, mais certainement le plus goûteux."#
    }
    TouristModule => {
      r#"Un astronaute doit accompagner les Duplicants touristes pendant les vols en fusée."#
    }
    AutoMiner => {
      r#"La portée d'un robot-mineur peut être vérifiée à tout moment en cliquant sur l'équipement."#
    }
    ModularLaunchpadPortSolid => {
      r#"Les fusées doivent avoir atterri pour charger ou décharger des ressources."#
    }
    ModularLaunchpadPortSolidUnloader => {
      r#"Les fusées doivent avoir atterri pour charger ou décharger des ressources."#
    }
    SolidConduitBridge => {
      r#"Séparer les systèmes de rails permet de s'assurer que les matériaux arrivent au bon endroit."#
    }
    SolidConduit => {
      r#"Les rails déplacent les matériaux là où ils seront les plus utiles, faisant ainsi économiser de la marche aux Duplicants."#
    }
    SolidConduitInbox => {
      r#"Les filtres de matériau peuvent être utilisés afin de déterminer quelle ressource doit être chargées sur le rail."#
    }
    SolidConduitOutbox => {
      r#"Quand les matériaux atteignent l'extrémité du rail, ils entrent dans un bac pour être utilisés par les Duplicants."#
    }
    SolidConduitDiseaseSensor => {
      r#"Les détecteurs de germes peuvent aider à contrôler le comportement de l'automatisation en présence de germes."#
    }
    SolidConduitElementSensor => {
      r#"Les détecteurs d'éléments peuvent être utilisés pour détecter la présence d'un élément spécifique sur un rail."#
    }
    SolidConduitTemperatureSensor => {
      r#"Les capteurs thermiques désactivent les équipements lorsque le contenu du rail atteint une certaine température."#
    }
    SolidFilter => {
      r#"Tous les solides sont envoyés vers le point de sortie du convoyeur, à l'exception des solides qui doivent être filtrés."#
    }
    SolidLimitValve => {
      r#"Les compteurs de convoyeur laissent passer la quantité exacte de matériaux avant d'interrompre le transit."#
    }
    SolidLogicValve => {
      r#"Les convoyeurs automatisés font économiser de l'énergie et du temps en ne nécessitant pas l'intervention d'un Duplicant."#
    }
    SolidTransferArm => {
      r#"Le périmètre de ramassage automatique d'un sweeper peut être visualisé à tout moment en (ClickType/clicking) sur l'équipement."#
    }
    SolidVent => {
      r#"Quand les matériaux atteignent l'extrémité du rail, ils retournent à la nature."#
    }
    Battery => {
      r#"Les batteries permettent de stocker l'énergie produite par les générateurs afin de l'utiliser ultérieurement."#
    }
    BatteryMedium => {
      r#"Les plus grosses batteries emmagasinent plus d'énergie et gardent les systèmes allumés plus longtemps avant de devoir être rechargées."#
    }
    BatterySmart => {
      r#"Les batteries intelligentes envoient un <b>signal vert</b> lorsque qu'elles doivent être rechargées."#
    }
    Generator => {
      r#"Brûler du charbon produit plus d'énergie que les générateurs manuels, mais émet de la chaleur et des gaz d'échappement."#
    }
    HydrogenGenerator => {
      r#"Les générateurs à hydrogène sont des sources d'alimentation extrêmement efficaces qui ne génèrent quasiment aucun déchet."#
    }
    LogicPowerRelay => {
      r#"Les systèmes automatisés font économiser de l'énergie et du temps en ne nécessitant pas l'intervention d'un Duplicant."#
    }
    ManualGenerator => {
      r#"Regarder les Duplicants courir dedans est adorable... le courant électrique est juste un bonus supplémentaire."#
    }
    MethaneGenerator => {
      r#"Les générateurs à gaz naturel rejettent de l'eau polluée, il est préférable de les construire au dessus d'un réservoir d'eaux usées."#
    }
    PetroleumGenerator => {
      r#"Les générateurs à pétrole produisent beaucoup d'énergie mais également beaucoup de déchets."#
    }
    PowerTransformer => r#"C'est comme un  transformateur, mais plus grand."#,
    PowerTransformerSmall => {
      r#"Limiter la puissance utilisée par les câbles les empêche de subir des domages de surcharge."#
    }
    SolarPanel => {
      r#"Les panneaux solaires convertissent les rayons solaires de haute intensité en énergie et ne produisent aucun déchet."#
    }
    SteamTurbine2 => r#"Utile pour convertir l'énergie géothermique en puissance exploitable."#,
    Switch => {
      r#"Les interrupteurs ne peuvent affecter que les équipements situés en aval sur un circuit."#
    }
    WireBridge => {
      r#"Déplacer les générateurs sur des réseaux distincts peut empêcher les surcharges et le gaspillage d'électricité."#
    }
    WireBridgeHighWattage => {
      r#"Les plaques de jonction permettent de faire passer des câbles de haute puissance à travers les murs sans laisser s'échapper le gaz ou le liquide."#
    }
    Wire => {
      r#"Le câble électrique est utilisé pour connecter des générateurs, des batteries et des équipements."#
    }
    HighWattageWire => {
      r#"Le câble de haute puissance est utilisé pour éviter les surcharges, notamment pour les gros générateurs."#
    }
    WireRefinedBridge => {
      r#"Déplacer les générateurs sur des systèmes distincts peut empêcher les surcharges et le gaspillage d'électricité."#
    }
    WireRefinedBridgeHighWattage => {
      r#"Les plaques de jonction peuvent faire passer des câbles de haute puissance à travers les murs sans provoquer de fuite de gaz ou liquide."#
    }
    WireRefined => r#"Mes Duplicants préfèrent l'apparence du fil conducteur au fil standard."#,
    WireRefinedHighWattage => {
      r#"Les câbles de haute puissance sont utilisés pour éviter les surcharges, particulièrement pour les gros générateurs."#
    }
    WoodGasGenerator => {
      r#"Les poêles à bois sont petits et facile à entretenir, mais produisent pas mal de chaleur."#
    }
    BottleEmptier => {
      r#"Le filtre d'élément d'un débouteilleur peut être utilisé pour définir des zones de stockage pour un liquide spécifique."#
    }
    LiquidConduitDiseaseSensor => {
      r#"Les détecteurs de germes sont utilisés pour contrôler le comportement de l'automatisation en présence de germes."#
    }
    LiquidConduitElementSensor => {
      r#"Les détecteurs d'élément peuvent être utilisés pour déceler la présence d'un liquide spécifique dans une conduite."#
    }
    LiquidConduitTemperatureSensor => {
      r#"Les capteurs thermiques peuvent désactiver des équipements lorsque le contenu des conduites atteint une certaine température."#
    }
    ContactConductivePipeBridge => {
      r#"Elle peut transférer efficacement la chaleur, même si aucun liquide ne s'écoule à l'intérieur."#
    }
    FlushToilet => {
      r#"Les toilettes transfèrent moins de germes à la peau des Duplicants et ne requièrent pas de vidange manuelle."#
    }
    InsulatedLiquidConduit => {
      r#"L'isolation des conduites évite que la température du liquide ne change pendant son transit."#
    }
    LiquidConduitBridge => {
      r#"Des systèmes de conduites distincts empêchent les échanges gazeux qui causeraient des dommages aux équipements."#
    }
    LiquidConduit => {
      r#"Les conduites de liquide sont utilisées pour relier l'entrée et la sortie des équipements de plomberie."#
    }
    LiquidConduitRadiant => {
      r#"Les conduites rayonnantes qui acheminent un liquide froid peuvent traverser les zones chaudes pour aider à les refroidir."#
    }
    LiquidFilter => {
      r#"Tous les liquides sauf celui qui doit être filtré sont envoyés vers la sortie de l'équipement."#
    }
    LiquidLimitValve => {
      r#"Les vannes de régulation laissent passer une quantité précise de liquide avant de se couper."#
    }
    LiquidLogicValve => {
      r#"Les conduites automatisées font économiser de l'énergie et du temps en ne nécessitant pas l'intervention d'un Duplicant."#
    }
    LiquidMiniPump => {
      r#"Les pompes miniatures sont utiles pour déplacer de petites quantités de liquide en utilisant un minimum de puissance."#
    }
    LiquidPump => {
      r#"Relier la sortie de la pompe à l'admission d'un équipement enverra le liquide vers cet équipement."#
    }
    LiquidPumpingStation => {
      r#"Les pompes à bras permettent aux Duplicants d'embouteiller et transporter des liquides d'un endroit à l'autre."#
    }
    LiquidValve => {
      r#"Les vannes contrôlent la quantité de liquide à travers les conduites pour éviter le gaspillage."#
    }
    LiquidVent => {
      r#"Les évacuations sont des points de sortie pour les liquides empruntant les systèmes de plomberie."#
    }
    ModularLaunchpadPortLiquid => {
      r#"Les fusées doivent avoir atterri pour charger ou décharger des ressources."#
    }
    ModularLaunchpadPortLiquidUnloader => {
      r#"Les fusées doivent avoir atterri pour charger ou décharger des ressources."#
    }
    Outhouse => r#"La colonie qui partage ses repas, partage ses excrétions."#,
    Shower => {
      r#"Se doucher régulièrement évitera que mes Duplicants ne propagent des germes à tout ce qu'ils touchent."#
    }
    WallToilet => {
      r#"Les toilettes murales transfèrent moins de germes sur la peau des Duplicants et n'ont pas besoin d'être vidées."#
    }
    BottleEmptierGas => {
      r#"Le filtre d'élément d'un videur de bonbonne peut être utilisé pour délimiter les zones de stockage d'un gaz donné."#
    }
    GasConduitDiseaseSensor => {
      r#"Les détecteurs de germes peuvent aider à contrôler le comportement de l'automatisation en présence de germes."#
    }
    GasConduitElementSensor => {
      r#"Les détecteurs d'éléments peuvent être utilisés pour détecter la présence d'un gaz spécifique dans une conduite."#
    }
    GasConduitTemperatureSensor => {
      r#"Les capteurs thermiques désactivent les équipements lorsque le contenu de leurs conduites atteint une certaine température."#
    }
    GasBottler => {
      r#"Les bonbonnes permettent aux Duplicants de déplacer des gaz d'un endroit à l'autre."#
    }
    GasConduitBridge => {
      r#"Des systèmes de conduites distincts empêchent les échanges gazeux qui causeraient des dommages aux équipements."#
    }
    GasConduit => {
      r#"Les conduites de gaz sont utilisées pour relier l'entrée et la sortie des équipements ventilés."#
    }
    GasConduitRadiant => {
      r#"Les conduites rayonnantes qui acheminent un gaz froid peuvent traverser les zones chaudes pour aider à les refroidir."#
    }
    GasFilter => {
      r#"Tous les gaz sont envoyés vers la conduite en sortie de cet équipement, à l'exception du gaz sélectionné."#
    }
    GasLimitValve => {
      r#"Les vannes de régulation laissent passer une quantité précise de gaz avant de se couper."#
    }
    GasLogicValve => {
      r#"Les conduites automatisées font économiser de l'énergie et du temps en ne nécessitant pas l'intervention d'un Duplicant."#
    }
    GasMiniPump => {
      r#"Les pompes miniatures sont utiles pour déplacer de petites quantités de gaz en utilisant un minimum de puissance."#
    }
    GasPump => {
      r#"Relier la sortie de la pompe à l'entrée d'un équipement enverra le gaz vers cet équipement."#
    }
    GasValve => {
      r#"Les vannes contrôlent la quantité de gaz à travers les conduites pour éviter le gaspillage."#
    }
    GasVent => r#"Les cheminées sont un point de sortie pour les gaz du système de ventilation."#,
    GasVentHighPressure => {
      r#"Les évents à haute pression peuvent évacuer les gaz dans des environnements plus fortement pressurisés."#
    }
    InsulatedGasConduit => {
      r#"Les conduites isolées évitent que la température du gaz ne change pendant son transport."#
    }
    ModularLaunchpadPortGas => {
      r#"Les fusées doivent avoir atterri pour charger ou décharger des ressources."#
    }
    ModularLaunchpadPortGasUnloader => {
      r#"Les fusées doivent avoir atterri pour charger ou décharger des ressources."#
    }
    BunkerDoor => r#"Une porte massive, a déplacement lent qui est quasi indestructible."#,
    BunkerTile => {
      r#"Les dalles de bunker peuvent être utilisées pour construire des abris solides dans des environnement dangereux."#
    }
    CarpetTile => r#"Tout doux pour les petits orteils des Duplicants."#,
    Door => {
      r#"Les commandes de porte peuvent être utilisées pour empêcher les Duplicants d'entrer dans des zones restreintes."#
    }
    ExobaseHeadquarters => {
      r#"Un substitut simple et rapide à utiliser, bien qu'elle ne soit pas au niveau de l'originelle."#
    }
    ExteriorWall => {
      r#"La cloison sèche peut être utilisée conjointement avec des dalles pour construire des pièces hermétiques à la surface."#
    }
    FirePole => {
      r#"Construisez ceci en plus des échelles afin d'optimiser les déplacements vers le haut et vers le bas."#
    }
    GasPermeableMembrane => {
      r#"Les constructions avec des dalles ventilées favorisent une meilleure circulation des gaz au sein d'une colonie."#
    }
    GasReservoir => r#"Les réservoirs ne peuvent recevoir des ressources livrées manuellement."#,
    GlassTile => {
      r#"Les dalles de verre fournissent une barrière contre le liquide et le gaz et sont complètement transparentes."#
    }
    InsulationTile => {
      r#"La conductivité thermique faible des dalles isolantes ralentit les échanges thermiques."#
    }
    Ladder => r#"(Ça signifie qu'ils y grimpent)"#,
    LadderFast => {
      r#"Les échelles en plastique sont légèrement antiseptiques et peuvent aider à limiter la propagation des germes dans une colonie."#
    }
    LiquidReservoir => r#"Les réservoirs ne peuvent recevoir des ressources livrées manuellement."#,
    ManualPressureDoor => {
      r#"Les sas peuvent confiner des zones dangereuses ou empêcher les gaz de s'infiltrer dans la colonie."#
    }
    MeshTile => {
      r#"Les dalles grillagées peuvent être utilisées pour créer un passage pour les Duplicants dans les zones traversées par du liquide."#
    }
    MetalTile => {
      r#"La chaleur se diffuse plus rapidement à travers les dalles métalliques qu'à travers les autres types de revêtement."#
    }
    ObjectDispenser => {
      r#"Les distributeurs automatiques stockeront et déchargeront des ressources en petites quantités."#
    }
    PlasticTile => {
      r#"Les dalles en plastique sont légèrement antiseptiques et peuvent aider à limiter la propagation des germes dans une colonie."#
    }
    PressureDoor => {
      r#"Les sas mécaniques s'ouvrent et se ferment plus rapidement que les autres types de porte."#
    }
    StorageLocker => {
      r#"Les ressources laissées au sol deviennent des « débris » qui diminueront la décoration s'ils ne sont pas ramassés."#
    }
    StorageLockerSmart => {
      r#"Les bacs de stockage intelligents permettent d'automatiser l'organisation des ressources selon leur type et leur masse."#
    }
    StorageTile => {
      r#"Les dalles de stockage permettent de ranger les matières solides non comestibles sélectionnées?"#
    }
    Tile => {
      r#"La dalle peut être utilisée pour construire des ponts vers des zones inaccessibles."#
    }
    TravelTube => {
      r#"Les Duplicants ne sortiront d'un tube de transit que si une zone d'atterrissage sûre est disponible à l'autre extrémité."#
    }
    TravelTubeEntrance => {
      r#"Les Duplicants ont besoin d'un point d'accès pour entrer dans les tubes, mais pas pour en sortir."#
    }
    TravelTubeWallBridge => {
      r#"Les jonctions de tubes permettent de faire passer les tubes de transit à travers les murs sans laisser s'échapper le gaz ou les liquides."#
    }
    Checkpoint => {
      r#"Les points de contrôle peuvent être reliés à des détecteurs automatisés pour déterminer quand l'entrée est sûre."#
    }
    CometDetector => {
      r#"Des réseaux contenant un grand nombre de scanners détecteront les objets plus efficacement qu'un scanner isolé."#
    }
    FloorSwitch => {
      r#"Les plaques de pression peuvent être utilisées pour activer des équipements uniquement lorsque les Duplicants marchent dessus."#
    }
    LogicAlarm => r#"Envoie une notification lorsqu'elle reçoit un <b>signal vert</b>."#,
    LogicCounter => r#"Pour les nombres supérieurs à dix, connectez plusieurs compteurs ensemble."#,
    LogicCritterCountSensor => {
      r#"Détecter les populations de créatures peut aider pour ajuster le nourrissage automatisé et l'organisation des soins."#
    }
    LogicDiseaseSensor => {
      r#"La détection des populations de germes peut aider à bloquer l'accès ou à nettoyer les zones dangereuses."#
    }
    LogicDuplicantSensor => {
      r#"Les détecteurs de mouvement permettent d'économiser l'énergie en n'activant les équipements que lorsqu'un Duplicant est à proximité."#
    }
    LogicElementSensorGas => {
      r#"Ces détecteurs peuvent déceler la présence d'un gaz spécifique et modifier les systèmes en conséquence."#
    }
    LogicElementSensorLiquid => {
      r#"Ces détecteurs peuvent déceler la présence d'un liquide spécifique et modifier les systèmes en conséquence."#
    }
    LogicGateAND => {
      r#"Cette porte envoie un <b>signal vert</b> lorsque ses deux entrées reçoivent un <b>signal vert</b> simultanément."#
    }
    LogicGateOR => {
      r#"Cette porte envoie un signal vert si elle reçoit un ou plusieurs signaux verts."#
    }
    LogicGateXOR => {
      r#"Cette porte envoie un signal vert si une et seulement une de ses entrées reçoit un signal vert."#
    }
    LogicGateNOT => {
      r#"Cette porte inverse les signaux d'automatisation, transformant un signal vert en signal rouge et vice versa."#
    }
    LogicGateBUFFER => {
      r#"Cette porte continue d'envoyer un <b>signal vert</b> pendant une courte période après que la porte a cessé de recevoir un <b>signal vert</b>."#
    }
    LogicGateFILTER => {
      r#"Cette porte ne laisse passer un signal vert qu'à la condition où son entrée a reçu un signal vert d'une durée supérieure à la valeur sélectionnée."#
    }
    LogicGateMultiplexer => {
      r#"Les multiplexeurs de signaux peuvent être utilisés pour choisir quel signal d'automatisation est susceptible à traverser un circuit donné"#
    }
    LogicGateDemultiplexer => {
      r#"Les démultiplexeurs de signaux peuvent être utilisés pour choisir quel circuit devrait recevoir un signal d'automatisation donné."#
    }
    LogicHEPSensor => {
      r#"Les capteurs de radbolts peuvent envoyer un signal lorsqu'un radbolt passe devant eux."#
    }
    LogicHammer => r#"Le marteau produit de jolis sons lorsqu'il frappe les équipements."#,
    LogicInterasteroidReceiver => r#"Reçoit des signaux d'automatisation provenant de l'espace."#,
    LogicInterasteroidSender => r#"Envoie des signaux d'automatisation dans l'espace."#,
    LogicLightSensor => {
      r#"Les capteurs de luminosité peuvent commander l'ouverture et la fermeture des portes de bunker situées au-dessus des panneaux solaires en fonction du niveau de lumière solaire."#
    }
    LogicMemory => {
      r#"Une mémoire stocke un signal vert reçu par le port réglage (S) jusqu'à ce que le port réinitialisation (R) reçoive un signal vert."#
    }
    LogicPressureSensorGas => {
      r#"Les capteurs atmo peuvent être utilisés pour empêcher la production excessive d'oxygène et les surpressions."#
    }
    LogicPressureSensorLiquid => {
      r#"Un capteur hydro peut commander à une pompe de remplir un bassin lorsque ce dernier contient trop peu de liquide."#
    }
    LogicRadiationSensor => {
      r#"Les capteurs de radiations peuvent désactiver des équipements lorsqu'ils détectent des niveaux de radiations dangereux."#
    }
    LogicRibbonBridge => {
      r#"Les ponts de câble permettent à de multiples réseaux d'automatisation de coexister à un endroit donné, sans être interconnectés."#
    }
    LogicRibbon => {
      r#"Les nappes d'automatisation nécessitent moins de place pour transporter plusieurs signaux d'automatisation."#
    }
    LogicRibbonReader => {
      r#"Injecte le signal provenant d'un seul bit d'une nappe dans un câble d'automatisation."#
    }
    LogicRibbonWriter => {
      r#"Traduit le signal d'un câble d'automatisation en un bit unique utilisé par une nappe d'automatisation"#
    }
    LogicSwitch => {
      r#"Les interrupteurs de signal ne permettent pas d'activer et de désactiver des réseaux comme les interrupteurs d'alimentation, mais ajoutent un signal supplémentaire."#
    }
    LogicTemperatureSensor => {
      r#"Les capteurs thermiques peuvent désactiver des équipements lorsque leur température atteint un niveau dangereux."#
    }
    LogicTimeOfDaySensor => {
      r#"Les capteurs cycliques s'assurent que les systèmes s'activent toujours à la même heure du jour et de la nuit à chaque cycle."#
    }
    LogicTimerSensor => {
      r#"Les capteurs horaires permettent de mettre en place des planifications automatisables sur de très courtes ou très longues périodes."#
    }
    LogicWattageSensor => {
      r#"Les capteurs de puissance peuvent envoyer un signal lorsqu'un équipement est activé ou désactivé."#
    }
    LogicWireBridge => {
      r#"Les ponts de câble permettent à de multiples réseaux d'automatisation d'être au même endroit sans être connectés entre eux."#
    }
    LogicWire => {
      r#"Le câble d'automatisation est utilisé pour connecter les ports des équipements aux portails d'automatisation."#
    }
    ClusterTelescope => {
      r#"Les télescopes sont nécessaires pour étudier l'espace et permettre les voyages en fusée vers d'autres mondes."#
    }
    ClusterTelescopeEnclosed => {
      r#"Les télescopes sont nécessaires pour étudier l'espace et permettre aux fusées de voyager vers d'autres mondes."#
    }
    Gantry => {
      r#"Un portique peut être construit par dessus les pièces de fusées, là ou les dalles et échelles ne peuvent pas."#
    }
    LandingBeacon => {
      r#"Cible avec précision l'endroit où votre chargement interplanétaire atterrit sur la surface d'un planétoïde."#
    }
    LaunchPad => {
      r#"Une plateforme à partir de laquelle des fusées peuvent être lancées et sur laquelle elle peuvent se poser."#
    }
    LogicClusterLocationSensor => {
      r#"Les détecteurs de position sur la carte spatiale peuvent signaler lorsqu'un vaisseau est à une certaine position"#
    }
    MissileLauncher => {
      r#"Certains météores fournissent des ressources exploitables lorsqu'ils sont réduits en cendres."#
    }
    MissionControlCluster => r#"Comme un passager qui sait mieux que les autres."#,
    MissionControl => r#"Comme un passager qui sait mieux que les autres."#,
    ModularLaunchpadPortBridge => {
      r#"Permet de construire les plateformes de fusées plus éloignées les unes des autres."#
    }
    RailGun => r#"Il est tentant de monter dedans... mais croyez-moi, ne le faites pas."#,
    RailGunPayloadOpener => {
      r#"Les ouvre-conteneurs peuvent être raccordés aux convoyeurs, à la plomberie et à la ventilation pour trier efficacement les ressources."#
    }
    RocketControlStation => {
      r#"Quelqu'un doit rester à proximité pour jouer avec les contrôles quand l'économiseur d'écran s'active."#
    }
    RocketInteriorGasInput => r#"Il s’agit simplement d’une évacuation centrale."#,
    RocketInteriorGasOutput => r#"Brise rafraîchissante, à la demande."#,
    RocketInteriorLiquidInput => r#"Dehors, les eaux usées!"#,
    RocketInteriorLiquidOutput => r#"Si seulement nous avions des bombes à eau..."#,
    RocketInteriorPowerPlug => {
      r#"Les prises alimentent les équipements à l’intérieur d’un poste de pilotage en utilisant les réserves d'énergie de la fusée."#
    }
    RocketInteriorSolidInput => r#"Pourquoi ranger tes étagères quand tu peux tout mettre ici ?"#,
    RocketInteriorSolidOutput => r#"Pour accéder à vos bagages en plein vol."#,
    FacilityBackWallWindow => r#""#,
    FossilDig => r#"Ça ne vient pas d'ici."#,
    GravitasContainer => r#""#,
    GravitasCreatureManipulator => r#""#,
    GravitasDoor => r#""#,
    GravitasLabLight => r#""#,
    GravitasPedestal => {
      r#"La perception peut être considérablement modifiée en soignant la présentation."#
    }
    Headquarters => {
      r#"Les nouveaux Duplicants arrivent par ici, mais fort heureusement, ils ne repartent jamais par là."#
    }
    MassiveHeatSink => r#""#,
    MegaBrainTank => r#""#,
    MorbRoverMaker => {
      r#"Permet à un Duplicant compétent de fabriquer des robots répugnants mais efficaces."#
    }
    POIDoorInternal => r#""#,
    PropGravitasLabWall => r#""#,
    PropGravitasLabWindow => r#""#,
    PropGravitasLabWindowHorizontal => r#""#,
    PropGravitasWall => r#""#,
    RocketEnvelopeWindowTile => r#"Je peux voir mon astéroïde d'ici!"#,
    RocketInteriorGasInputPort => {
      r#"Une liaison directe vers le port de sortie à l'extérieur d'une fusée."#
    }
    RocketInteriorGasOutputPort => {
      r#"Une fixation directe depuis l'extérieur d'une fusée vers le port d'entrée."#
    }
    RocketInteriorLiquidInputPort => {
      r#"Une liaison directe vers le port de sortie à l'extérieur d'une fusée."#
    }
    RocketInteriorLiquidOutputPort => {
      r#"Une liaison directe vers le port d'entrée à l'extérieur d'une fusée."#
    }
    TeleportalPad => r#"Pour la plateforme, les Duplicants ne sont que des atomes."#,
    WarpConduitReceiver => r#"Les tuyaux à l'arrière disparaissent dans le néant."#,
    WarpConduitSender => r#"Les tuyaux à l'arrière disparaissent dans le néant."#,
    ClustercraftInteriorDoor => r#"Une écoutille pour entrer et sortir de la fusée."#,
    PropLadder => r#"Une échelle en plastique dur."#,
    GeneShuffler => {
      r#"Un cerveau synthétique volumineux qui baigne dans une solution saline.<br>Il y a une chaise fixée à l'appareil et de la place pour une personne."#
    }
    FossilRock => {
      r#"Les restes partiels et bien conservés d'une créature d'origine inconnue.<br>Ils semblent appartenir au même spécimen ancien trouvé sur un autre site.<br>Ce fragment a été conservé dans la terre pétrifiée."#
    }
    FossilResin => {
      r#"Les restes partiels et bien conservés d'une créature d'origine inconnue.<br>Ils semblent appartenir au même spécimen ancien trouvé sur un autre site.<br>Ce fragment a été conservé dans une subtance résineuse."#
    }
    FossilIce => {
      r#"Les restes partiels et bien conservés d'une créature d'origine inconnue.<br>Ils semblent appartenir au même spécimen ancien trouvé sur un autre site.<br>Ce fragment a été conservé dans la glace."#
    }
    PropGravitasLabTable => {
      r#"Le bureau d'un technicien de labo aujourd'hui disparu.<br>Peut-être que l'ordinateur contient quelque chose d'intéressant."#
    }
    PropGravitasJar2 => {
      r#"Le corps d'une larve de créature conservé méticuleusement dans un bocal."#
    }
    PropGravitasJar1 => {
      r#"Un cerveau anormalement gros qui flotte dans un liquide d'embaumement pour éviter la décomposition."#
    }
    PropGravitasHandScanner => {
      r#"Une interface de sécurité sophistiquée.<br>Visiblement, elle n'utilise pas les empreintes digitales pour vérifier l'identité d'un individu."#
    }
    PropGravitasFloorRobot => {
      r#"La pince robotique conçue pour assister des techniciens dans un labo."#
    }
    PropGravitasFirstAidKit => r#"Il semble avoir été beaucoup utilisé."#,
    PropGravitasDisplay4 => {
      r#"Un afficheur électronique projetant le schéma d'un appareil robotisé.<br>Cela ressemble à un robot suspendu."#
    }
    PropGravitasRobitcTable => {
      r#"Le poste de travail d'un technicien roboticien qui a abandonné des prototypes inachevés sur place."#
    }
    PropGravitasDeskPodium => {
      r#"Un bureau parfaitement ordonné pour éviter toute distraction.<br>Il semble y avoir quelque chose de stocké dans l'ordinateur."#
    }
    PropGravitasCreaturePoster => {
      r#"L'illustration anatomique du tout premier glouton jamais produit.<br>Bien que le rapport entre le sac d'œufs et le cerveau puisse sembler bizarre, il est en fait à l'échelle."#
    }
    PropGravitasCeilingRobot => {
      r#"Des bras robotiques hors d'usage qui ont assisté des techniciens de labo un jour."#
    }
    PropFacilityWallDegree => {
      r#"Une certification en physique appliquée, décernée à une certaine "Jacquelyn A. Stern"."#
    }
    PropFacilityTable => {
      r#"Une table basse sur laquelle des revues scientifiques ont un jour été disposées."#
    }
    PropFacilityStatue => {
      r#"Une grande sculpture moderne qui trône au milieu du complexe.<br>C'est un croisement artistique entre un sablier et une double hélice."#
    }
    PropFacilityPainting => {
      r#"Une peinture mettant en scène un bosquet de sapins et une montagne magnifique à l'horizon.<br>L'air dans la pièce picote et donne la sensation que je ne suis pas sensé être ici."#
    }
    PropFacilityHangingLight => {
      r#"Un grand luminaire qui pend du plafond.<br>Il n'a pas l'air de fonctionner."#
    }
    PropGravitasDecorativeWindow => r#"Une grande fenêtre qui donnait autrefois sur une cour."#,
    PropFacilityGlobeDroors => {
      r#"Un classeur à tiroir pour conserver des copies papiers des dossiers sur les employés.<br>Ce qu'il contenait a été détruit."#
    }
    PropGravitasShelf => {
      r#"Une étagère contenant des flacons hors de portée pour une personne de petite taille."#
    }
    PropReceptionDesk => {
      r#"Une tasse de café pleine et une note abandonnée au milieu d'une phrase se trouvent derrière le bureau.<br>Ça me donne une impression étrange, comme si le réceptionniste s'était absenté et allait revenir à n'importe quel moment."#
    }
    WarpReceiver => {
      r#"Les vestiges encore fonctionnels de ce qui fut un système de téléportation complexe.<br>Ceci est le côté entrant."#
    }
    WarpPortal => {
      r#"Les vestiges encore fonctionnels de ce qui fut un système de téléportation complexe.<br>Ceci est le côté sortant et possède une destination pré-programmée."#
    }
    VendingMachine => r#"Un distributeur de barres nutritives intact."#,
    SetLocker => {
      r#"Un casier basique en métal.<br>Il contient un assortiment d'effets personnels."#
    }
    PropGravitasSmallSeedLocker => {
      r#"Une petite armoire en verre.<br>Il y a un symbole avertissant d'un danger biologique sur celle-ci."#
    }
    CryoTank => {
      r#"Le réservoir semble terriblement vieux, mais il sent pourtant encore le neuf.<br>Une silhouette est à peine visible à travers la glace sur la vitre."#
    }
    PropLight => r#"Un plafonnier élégant, légèrement abîmé."#,
    PropTallPlant => r#"Elle a survécu au vide spatial notamment parce qu'elle est en plastique."#,
    PropTable => r#"Une table et quelques chaises."#,
    PropSurfaceSatellite3 => {
      r#"Tout ce qui reste de ce qui fut un satellite orbitant paisiblement."#
    }
    PropSurfaceSatellite2 => {
      r#"Tout ce qui reste de ce qui fut un satellite orbitant paisiblement."#
    }
    PropSurfaceSatellite1 => {
      r#"Tout ce qui reste de ce qui fut un satellite orbitant paisiblement."#
    }
    PropSkeleton => r#"Un modèle anatomique détaillé.<br>Il semble être fait en résine."#,
    PropFacilityDisplay => {
      r#"Un afficheur électronique projetant le schéma d'une machine familière.<br>Cela ressemble à une station d'impression."#
    }
    PropFacilityDisplay2 => {
      r#"Un afficheur électronique projetant le schéma d'un appareil familier.<br>Cela ressemble à un pistolet de minage."#
    }
    PropFacilityDisplay3 => {
      r#"Un afficheur électronique projetant le schéma d'une étrange machine.<br>Peut-être que ces afficheurs étaient utilisés pour séduire les visiteurs."#
    }
    PropFacilityDesk => {
      r#"Un bureau immaculé recouvert de fournitures de bureau rangées impeccablement.<br>Une photo dépasse du sous-main, représentant deux jeunes femmes rayonnantes portant des blouses et des bonnets.<br>La photo est vieille."#
    }
    PropFacilityCouch => {
      r#"Un canapé dans lequel les visiteurs peuvent patienter confortablement en attendant leur rendez-vous."#
    }
    PropFacilityChandelier => {
      r#"Un lustre imposant qui pend du plafond.<br>Il n'a pas l'air de fonctionner."#
    }
    PropFacilityChairFlip => {
      r#"Une chaise dans laquelle les visiteurs peuvent attendre confortablement avant leur rendez-vous."#
    }
    PropFacilityChair => {
      r#"Une chaise dans laquelle les visiteurs peuvent attendre confortablement avant leur rendez-vous."#
    }
    PropElevator => {
      r#"Hors-service.<br>Les boutons à l'intérieur indiquent qu'il est descendu de plus d'une douzaine d'étages à un certain moment."#
    }
    PropDesk => {
      r#"Un bureau intact, décoré avec plusieurs effets personnels et un ordinateur à peine fonctionnel."#
    }
    PropClock => r#"Une horloge murale simple.<br>Elle ne tourne plus."#,
    HEPBattery => r#"Particules emmagasinées et prêtes à partir."#,
    HEPBridgeTile => r#"Permet aux radbolts de traverser les murs."#,
    HighEnergyParticleRedirector => r#"On n’avait plus de miroirs."#,
    HighEnergyParticleSpawner => {
      r#"Les radbolts sont nécessaires pour produire des matériaux utiles aux recherches scientifiques."#
    }
    ManualHighEnergyParticleSpawner => {
      r#"Les radbolts sont nécessaires à la recherche en science des matériaux."#
    }
    NuclearReactor => {
      r#"Les générateurs et réflecteurs de radbolt permettent d'utiliser les radiations dans d'autres équipements."#
    }
    RadiationLight => {
      r#"Les Duplicants peuvent tomber malades s'ils sont exposés aux radiations sans protection."#
    }
    UraniumCentrifuge => {
      r#"L'uranium enrichi est une substance spécialisée qui peut être utilisée pour alimenter des réacteurs nucléaires puissants."#
    }
    LonelyMinionHouse => {
      r#"Son occupant est seul depuis tellement longtemps qu'il en a oublié ce que l'amitié signifie."#
    }
    LonelyMailBox => r#"Il n'y a rien de tel que de recevoir des cadeaux faits maison."#,
    TemporalTearOpener => r#"Des possibilités infinies, avec des pluies de météorites en cadeaux."#,
    FossilBitsLarge => r#"Débris osseux qui peuvent être excavés pour leur fossile."#,
    FossilBitsSmall => r#"Débris osseux qui peuvent être excavés pour leur fossile."#,
    SapTree => {
      r#"Un arbre cybernétique qui montre des signes de sentience et produit de la résine liquide.<br>Il est solidement enraciné et attend qu'un âme courageuse lui apporte de la nourriture."#
    }
    ScoutLander => r#"Pose un rover sur un planétoïde lorsque le module de rover est en orbite."#,
    PioneerLander => r#"Pose un Duplicant sur un planétoïde depuis un module pionnier en orbite."#,
    Algae => {
      r#"L'algue est un amas de formes de vie monocellulaires et non-mobiles.<br>Elle peut être utilisée pour produire de l'oxygène lorsqu'elle est utilisée dans un diffuseur d'oxygène"#
    }
    BleachStone => {
      r#"La roche chlorée est un composant instable qui diffuse du chlore gazeux irrespirable<br>Elle a des applications hygiéniques."#
    }
    OxyRock => {
      r#"L'oxylite (Ir<sub>3</sub>O<sub>2</sub>) est un composé chimique qui diffuse de l'oxygène lentement.<br>Le taux d'oxygène augmente lorsque l'oxylite est excavé, mais cela épuise le minerai plus rapidement."#
    }
    SlimeMold => {
      r#"La vase est un mélange biologique épais d'algue, de champignon et de mucopolysaccharides.<br>Elle peut être distillée en algue et émet de l'oxygène pollué lorsqu'elle est creusée."#
    }
    ToxicSand => {
      r#"La terre polluée est un déchet toxique non traité.<br>Elle émet de l'oxygène pollué."#
    }
    CrushedIce => r#"(H<sub>2</sub>O) Une bouillie de glace à moitié solide."#,
    Diamond => {
      r#"Le diamant (C) est un carbone de haute densité de niveau industriel<br>Il est très difficile à extraire."#
    }
    Isoresin => {
      r#"L'isorésine est une sève cristallisée composée de chaînes  de polymères longues.<br>Elle est utilisée dans la production de matériaux rares de haute qualité."#
    }
    Sucrose => {
      r#"Le saccharose (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>) est la forme brute du sucre.<br>Il peut être utilisé tel quel pour la cuisine, ou raffiné pour accompagner les repas, ce qui améliorera le Moral du Duplicant."#
    }
    MilkFat => r#"La cire brack est un sous-produit solide issu du brackène."#,
    Niobium => {
      r#"Le niobium (Nb) est un métal rare avec beaucoup d'applications pratiques en métallurgie et dans la Recherche sur les supraconducteurs."#
    }
    MilkIce => r#"Le brackène gelé est constitué de brackène congelé à l'état Solide."#,
    Cuprite => {
      r#"Le minerai de cuivre (Cu<sub>2</sub>O) est un métal conducteur.<br>Il peut être utilisé pour construire des systèmes d'énergie."#
    }
    Copper => {
      r#"Le Cuivre (Cu) est un métal conducteur.<br>Il est adapté pour fabriquer des systèmes électriques."#
    }
    CrushedRock => {
      r#"La roche concassée est une roche magmatique écrasée en un mélange mécanique."#
    }
    SuperInsulator => {
      r#"L'insulite réduit les Transferts de Chaleur et est composée d'Abyssalite recristallisée."#
    }
    BrineIce => {
      r#"La glace saumurée est une solution naturelle contenant une concentration élevée de sel dissout dans l'eau et gelée jusqu'à atteindre un état solide.<br>Elle peut être utilisée dans les processus de dessalement afin de séparer le sel utilisable."#
    }
    SolidViscoGel => {
      r#"Le visco-gel est un polymère possédant une tension de surface élevée lorsqu'il est dans sa forme liquide.<br>Celui-ci est à l'état solide."#
    }
    Ceramic => {
      r#"La céramique est un matériau fragile et dur formé à partir d'argile chauffée.<br>C'est un <b>matériau de construction</b> fiable."#
    }
    Cobaltite => {
      r#"Le minerai de cobalt (Co) est un métal de couleur bleutée.<br>Il peut être utilisé pour construire des systèmes d'énergie."#
    }
    Fertilizer => {
      r#"L'engrais est un mélange de nutriments biologiques.<br>Il permet à certaines plantes de pousser."#
    }
    SolidCrudeOil => r#""#,
    Wolframite => {
      r#"La wolframite ((Fe,Mn)WO<sub>4</sub>) est un élément métallique dense à l'état solide.<br>C'est une source de tungstène et elle peut être utilisée pour construire des systèmes d'énergie."#
    }
    Polypropylene => {
      r#"Le plastique (C<sub>3</sub>H<sub>6</sub>)<sub>n</sub> est un polymère thermoplastique.<br>Il est utilisé pour construire une grande quantité d'équipements."#
    }
    SolidNaphtha => r#"Le naphta est un mélange d'hydrocarbures distillés à l'état solide."#,
    Tungsten => {
      r#"Le tungstène (W) est un métal cristallin extrêmement dur.<br>Il est adapté pour la construction de systèmes d'énergie."#
    }
    RefinedCarbon => {
      r#"Le carbone raffiné (C) est un élément solide issue de la purification du charbon."#
    }
    Steel => r#"L'Acier est un alliage métallique composé de fer et de carbone."#,
    Phosphorite => {
      r#"La phosphorite est un composite de roches sédimentaires saturées en phosphate."#
    }
    SolidHydrogen => {
      r#"L'Hydrogène solide (H) est l'élément le plus commun dans l'univers à l'état Solide."#
    }
    Lead => {
      r#"Le plomb (Pb) est un métal raffiné tendre bien qu'extrêmement dense.<br>Il possède une température de surchauffe faible et peut être utilisé pour construire des systèmes d'énergie."#
    }
    Sulfur => {
      r#"Le soufre (S) est un élément chimique commun et généralement un sous-produit issu de la production de gaz naturel.<br>Celui-ci est à l'état solide."#
    }
    Lime => {
      r#"La chaux (CaCO<sub>3</sub>) est un minéral généralement issu de coquilles d'œufs de créatures.<br>Elle est utilisée comme <b>matériau de construction</b>."#
    }
    SolidChlorine => r#"Le Chlore (Cl) est un élément tueur de germes naturel à l'état Solide."#,
    SolidNuclearWaste => r#"Un solide hautement toxique rempli de contaminants radioactifs."#,
    Obsidian => r#"L'obsidienne est un composite fragile de verre volcanique."#,
    SolidPetroleum => r#"Le pétrole est une source d'énergie.<br>Celui-ci est à l'état solide."#,
    SolidSuperCoolant => {
      r#"Le super refroidissant est un refroidissant de qualité industrielle à base de fullerène.<br>Celui-ci est à l'état solide."#
    }
    IgneousRock => {
      r#"La roche magmatique est un composite constitué de roche volcanique solidifiée.<br>Elle est utilisée comme <b>matériau de construction</b>."#
    }
    EnrichedUranium => {
      r#"L'uranium enrichi (U) est une substance raffinée fortement radioactive.<br>Il est utilisé essentiellement pour alimenter des  réacteurs nucléaires."#
    }
    Gold => {
      r#"L'or (Au) est un métal conducteur précieux.<br>Il peut être utilisé pour construire des systèmes d'énergie."#
    }
    Rust => {
      r#"La rouille est un oxyde de fer qui se forme lors de la décomposition du Fer.<br>Elle est utilisée dans certains processus de production d'Oxygène."#
    }
    Corium => {
      r#"Un mélange radioactif de déchets nucléaires et d'éléments fondus provenant d'un réacteur.<br>Relâche des gaz chargés en radioactivité."#
    }
    Phosphorus => r#"Le phosphore raffiné (P) est un élément chimique à l'état Solide."#,
    Granite => {
      r#"Le granite est un composite dense de roche magmatique.<br>Il est utilisé comme <b>matériau de construction</b>."#
    }
    SolidCarbonDioxide => {
      r#"Le dioxyde de carbone (CO<sub>2</sub>) est un composé irrespirable à l'état Solide."#
    }
    Cobalt => r#"Le cobalt (Co) est un métal raffiné fabriqué à partir de minerai de cobalt."#,
    UraniumOre => {
      r#"Le minerai d'uranium (U) est une substance hautement radioactive.<br>Il peut être raffiné avant d'être utilisé dans des réacteurs nucléaires."#
    }
    AluminumOre => {
      r#"Le minerai d'aluminium, aussi appelé bauxite, est une roche sédimentaire riche en métaux.<br>Il peut être raffiné pour obtenir de l'aluminum."#
    }
    SedimentaryRock => {
      r#"La roche sédimentaire est un composite durci composé de couches sédimentaires.<br>Elle est utilisée comme <b>matériau de construction</b>."#
    }
    Fullerene => {
      r#"Le fullerène (C<sub>60</sub>) est une formation de carbone constituée de molécules de formes sphériques."#
    }
    GoldAmalgam => {
      r#"L'amalgame d'or est un amalgame conducteur composé d'or et de mercure.<br>Il peut être utilisé pour construire des systèmes d'énergie."#
    }
    Salt => {
      r#"Le chlorure de sodium (NaCl), communément appelé sel, est un composé chimique comestible.<br>Une fois raffiné, il peut accompagner les repas pour améliorer le moral des Duplicants."#
    }
    Sand => {
      r#"Le sable est un composite de roche granulaire.<br>Il est utilisé comme milieu filtrant."#
    }
    Snow => {
      r#"La neige (H<sub>2</sub>O) est une masse de particules de glace cristalline.<br>Elle se transforme en eau lorsqu'elle fond."#
    }
    SandStone => {
      r#"Le grès est un composite de roches sédimentaires relativement tendres.<br>Il est utilisé comme <b>matériau de construction</b>."#
    }
    Glass => {
      r#"Le verre est une substance fragile et transparente créée à partir de sable chauffé à haute température."#
    }
    Clay => {
      r#"L'argile est un mélange naturel de pierre et de terre qui durcit à haute Température.<br>C'est un <b>matériau de construction</b> fiable."#
    }
    Ice => r#"La glace (H<sub>2</sub>O) est de l'eau propre gelée à l'état Solide."#,
    Graphite => {
      r#"Le Graphite (C) est la forme de carbone la plus stable.<br>Il possède une conductivité thermique élevée et peut être utilisé comme <b>matériau de construction</b>."#
    }
    ToxicMud => {
      r#"Un mélange de terre polluée et d'eau polluée.<br>Peut être séparé en éléments de base en utilisant une presse à boue."#
    }
    Mud => {
      r#"Un mélange de terre et d'eau.<br>Peut être séparé en éléments de base en utilisant une presse à boue."#
    }
    Carbon => {
      r#"Le charbon (C) est un combustible fossile composé de carbone.<br>Il est utilisé pour la production d'énergie."#
    }
    SolidOxygen => r#"L'Oxygène solide (O<sub>2</sub>) est un élément respirable à l'état Solide."#,
    Creature => {
      r#"Le limon (DuPe) est une bouillie à base d'eau, de carbone et de dizaines d'autres éléments.<br>Les Duplicants sont imprimés à partir de limon pur."#
    }
    DepletedUranium => {
      r#"L’uranium appauvri (U) est de l'uranium avec une faible teneur en U-235.<br>C'est un sous-produit obtenu après fabrication d'uranium enrichi et il ne peut plus être utilisé comme combustible."#
    }
    Katairite => r#"L'Abyssalite (Ab) est un élément cristallin résilient."#,
    SolidMethane => r#"Le méthane (CH<sub>4</sub>) est un alcane à l'état solide."#,
    HardPolypropylene => {
      r#"Le plastium est un polymère thermoplastique réalisé à l'aide de Thermium, de plastique et de cire brack.<br>Il présente une résistance élevée à la chaleur et est adapté pour la conception d'équipements spatiaux."#
    }
    MaficRock => {
      r#"La roche mafique est une variété de roche magmatique riche en Fer.<br>Elle est utilisée comme <b>matériau de construction</b>."#
    }
    Iron => r#"Le Fer (Fe) est un métal industriel commun."#,
    Regolith => {
      r#"Le régolithe est une substance sableuse composée des diverses particules qui s'accumulent à la surface des objets terrestres.<br>Il est utilisé comme milieu filtrant."#
    }
    SolidResin => {
      r#"Glu collante récoltée sur un arbre ronchon.<br>Elle est utilisée pour la production d'isorésine."#
    }
    TempConductorSolid => {
      r#"Le thermium est un alliage métallique industriel élaboré pour maximiser le transfert de chaleur et la dispersion thermique."#
    }
    IronOre => {
      r#"Le minerai de fer (Fe) est un métal tendre.<br>Il peut être utilisé pour construire des systèmes d'énergie."#
    }
    Dirt => {
      r#"La terre est une substance riche en nutriments qui est capable d'apporter la vie.<br>Elle est nécessaire pour la production de certains Aliments."#
    }
    DirtyIce => r#"La glace polluée est constituée d'eau sale, non filtrée, à l'état Solide."#,
    Fossil => {
      r#"Le fossile est une matière organique, fortement compressée et durcie jusqu'à atteindre un état minéral.<br>Il est utilisé comme <b>matériau de construction</b>."#
    }
    Unobtanium => {
      r#"Le neutronium (Nt) est un élément mystérieux et extrêmement résilient.<br>Il ne peut être excavé par aucun outil de Duplicant."#
    }
    SolidEthanol => {
      r#"L'éthanol (C<sub>2</sub>H<sub>6</sub>O) est un composé chimique avancé.<br>Lorsqu'il est brûlé, il devient un carburant très efficace."#
    }
    FoolsGold => {
      r#"La pyrite (FeS<sub>2</sub>) est un métal conducteur.<br>Aussi connu comme "l'or des fous", elle peut être utilisée pour construire des systèmes d'énergie."#
    }
    Aluminum => {
      r#"L'aluminium (Al) est un métal avec une densité faible.<br>Sa conductivité thermique est élevée et il peut être utilisé pour construire des systèmes d'énergie."#
    }
    DirtyWater => {
      r#"L'eau polluée est consituée d'eau sale, non filtrée.<br>Elle est impropre à la consommation."#
    }
    NuclearWaste => {
      r#"Liquide hautement toxique chargé en contaminants radioactifs. Émet des radiations qui peuvent être absorbées par un générateur à radbolts."#
    }
    LiquidOxygen => {
      r#"L'Oxygène (O<sub>2</sub>) est un élément chimique respirable.<br>Celui-ci est à l'état liquide."#
    }
    ViscoGel => {
      r#"Le visco-gel est un polymère liquide avec une tension de surface élevée, ce qui l'empêche de s'écouler comme des liquides normaux et permet des configurations inhabituelles."#
    }
    MoltenAluminum => {
      r#"L'aluminium fondu (Al) est un métal de faible densité qui a été chauffé pour passer à l'état liquide."#
    }
    MoltenLead => {
      r#"Le plomb (Pb) est un métal raffiné extrêmement dense qui, une fois chauffé, passe à l'état liquide."#
    }
    LiquidCarbonDioxide => {
      r#"Le dioxyde de carbone (CO<sub>2</sub>) est un composé chimique irrespirable.<br>Cet échantillon est actuellement à l'état liquide."#
    }
    CrudeOil => {
      r#"Le pétrole Brut est un source d'énergie brute composée de milliards d'organismes primordiaux morts."#
    }
    MoltenGlass => {
      r#"Le verre en fusion est un composite de roches granuleuses qui, une fois chauffées, passent à l'état liquide."#
    }
    LiquidSulfur => {
      r#"Le soufre (S) est un élément chimique commun et généralement un sous-produit issu de la production de gaz naturel.<br>Celui-ci est à l'état liquide."#
    }
    MoltenGold => {
      r#"L'or (Au) est un métal conducteur précieux qui a été chauffé pour passer à l'état liquide."#
    }
    Magma => r#"Le magma est un composite de roche magmatique fondue à l'état liquide."#,
    Chlorine => r#"Le Chlore (Cl) est un élément tueur de germes naturel à l'état liquide."#,
    LiquidHydrogen => {
      r#"L'Hydrogène (H) dans son état liquide.<br>Il gèle la plupart des substances qui entrent en contact avec lui."#
    }
    Resin => {
      r#"Glu collante récoltée à partir d’un arbre grincheux.<br>Elle peut être polymérisée en isorésine après évaporation de l'humidité excédentaire."#
    }
    MoltenTungsten => {
      r#"Le tungstène fondu (W) est un métal cristallin qui a été chauffé pour atteindre un état liquide."#
    }
    Petroleum => {
      r#"Le pétrole est une source d'énergie, raffinée à partir de pétrole brut.<br>C'est aussi un ingrédient essentiel pour la production de plastique."#
    }
    MoltenSalt => {
      r#"Le sel fondu (NaCl) est un composé chimique comestible qui a été chauffé pour atteindre un état liquide."#
    }
    MoltenCobalt => {
      r#"Le cobalt fondu (Co) est un métal raffiné qui a été chauffé pour passer à l'état liquide."#
    }
    Brine => {
      r#"La saumure est une solution naturelle contenant une concentration élevée de sel dissout dans l'eau.<br>Elle peut être utilisée dans les processus de dessalement afin de séparer le sel utilisable."#
    }
    SuperCoolant => {
      r#"Le super refroidissant est un refroidissant de qualité industrielle à base de fullerène.<br>Celui-ci est à l'état solide."#
    }
    Ethanol => {
      r#" L'éthanol (C<sub>2</sub>H<sub>6</sub>O) est un composé chimique avancé.<br>Lorsqu'il est brûlé, il devient un carburant très efficace."#
    }
    Milk => r#"Le brackène est un liquide riche en sodium.<br>Il est utilisé pour l'élevage."#,
    LiquidMethane => {
      r#"Le méthane (CH<sub>4</sub>) est un alcane.<br>Celui-ci est à l'état liquide."#
    }
    MoltenIron => {
      r#"Le Fer fondu (Fe) est un métal industriel commun qui a été chauffé pour passer à l'état liquide."#
    }
    MoltenCarbon => {
      r#"Le carbone (C) est un élément abondant et polyvalent qui, une fois chauffé, passe à l'état liquide."#
    }
    Naphtha => {
      r#"Le naphta est un mélange d'hydrocarbures distillés, produit par la combustion du plastique."#
    }
    MoltenSucrose => {
      r#"Le saccharose (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>) est la forme brute du sucre, qui, une fois chauffé, passe à l'état liquide.<br>Il peut être utilisé tel quel pour la cuisine, ou raffiné pour accompagner les repas, ce qui améliorera le Moral du Duplicant."#
    }
    LiquidPhosphorus => {
      r#"Le phosphore (P) est un élément chimique.<br>Celui-ci est à l'état liquide."#
    }
    MoltenSteel => {
      r#"L'acier fondu est un alliage de métal composé de fer et de carbone, qui devient un liquide dangereux en chauffant."#
    }
    MoltenNiobium => {
      r#"Le niobium fondu (Nb) est un métal rare qui a été chauffé pour passer à l'état liquide."#
    }
    Water => r#"Eau propre (H<sub>2</sub>O), adaptée à la consommation."#,
    SaltWater => {
      r#"L'eau saline est une solution naturelle contenant une concentration élevée de sel dissout dans l'eau.<br>Elle peut être utilisée dans les processus de dessalement afin d'en extraire le sel."#
    }
    MoltenUranium => {
      r#"L’uranium liquide (U) est une substance hautement Radioactive, dangereuse lorsqu'elle est chauffée pour atteindre un état liquide.<br>C’est un sous-produit de l'Uranium Enrichi."#
    }
    MoltenCopper => {
      r#"Le cuivre fondu (Cu) est un métal conducteur qui a été chauffé pour passer à l'état liquide."#
    }
    SulfurGas => {
      r#"Le soufre (S) est un élément chimique commun et un sous-produit issu de la production de gaz naturel.<br>Celui-ci est à l'état gazeux."#
    }
    SaltGas => {
      r#"Le gaz de sel (NaCl) est un composé chimique comestible passée à l'état gazeux après avoir été surchauffée."#
    }
    NiobiumGas => r#"Le gaz de niobium (Nb) est un métal rare.<br>Celui-ci est à l'état gazeux."#,
    Oxygen => {
      r#"L'Oxygène (O<sub>2</sub>) est un gaz atomiquement léger et respirable, nécessaire pour rester en vie.<br>Il a tendance à s'élever au dessus des autres gaz."#
    }
    CobaltGas => {
      r#"Le cobalt (Co) est un métal raffiné qui, une fois chauffé, se transforme en gaz."#
    }
    SteelGas => {
      r#"Le gaz d'acier est un gaz métallique surchauffé qui est composé de fer et de carbone."#
    }
    ChlorineGas => r#"Le Chlore (Cl) est un élément tueur de germes naturel à l'état gazeux."#,
    Hydrogen => {
      r#"L'Hydrogène gazeux (H) est l'élément chimique le plus commun dans l'univers à l'état gazeux."#
    }
    SourGas => {
      r#"Le gaz corrosif est un gaz hydrocarbure contenant des quantités importantes de sulfure d'hydrogène.<br>C'est un déchet issu du pétrole chauffé à haute température."#
    }
    Steam => {
      r#" La vapeur (H<sub>2</sub>O) est constituée d'eau qui a été chauffée pour atteindre un état gazeux."#
    }
    Methane => {
      r#"Le gaz naturel est un mélange de plusieurs alcanes à l'état gazeux.<br>Il est utilisé pour la production d'énergie."#
    }
    GoldGas => {
      r#"Le gaz d'or (Au) est un métal conducteur précieux qui a été chauffé pour passer à l'état gazeux."#
    }
    EthanolGas => {
      r#"L'éthanol gazeux (C<sub>2</sub>H<sub>6</sub>O)  est un composé chimique avancé qui a été chauffé pour passer à l'état gazeux."#
    }
    RockGas => {
      r#"Le gaz de roche est constitué de roche passée à l'état gazeux après avoir été surchauffée."#
    }
    CarbonGas => {
      r#"Le carbone (C) est un élément abondant et versatile qui a été chauffé pour passer à l'état gazeux."#
    }
    SuperCoolantGas => {
      r#"Le super refroidissant est un refroidissant de qualité industrielle à base de fullerène.<br>Celui-ci est à l'état gazeux."#
    }
    AluminumGas => {
      r#"Le gaz d'aluminium (Al) est un métal qui a été chauffé pour passer à l'état gazeux."#
    }
    TungstenGas => {
      r#"Le tungstène (W) est un métal cristallin surchauffé.<br>Celui-ci est à l'état gazeux."#
    }
    ContaminatedOxygen => {
      r#"L'oxygène pollué (O<sub>2</sub>) est sale et non filtré.<br>Il est respirable."#
    }
    LeadGas => {
      r#"Le gaz de plomb (Pb) est un métal raffiné tendre bien qu'extrêmement dense qui a été chauffé pour passer à l'état gazeux."#
    }
    Fallout => {
      r#"La retombée nucléaire est un gaz hautement toxique chargé en contaminants radioactifs. Elle se condense en déchet nucléaire."#
    }
    IronGas => {
      r#"Le Gaz Fer (Fe) est un métal industriel commun qui a été chauffé pour atteindre un état gazeux."#
    }
    PhosphorusGas => r#"Le phosphore gazeux (P) est l'état gazeux du phosphore raffiné."#,
    CarbonDioxide => {
      r#"Dioxyde de carbone (CO<sub>2</sub>) toxique, un composé chimique atomiquement lourd dans un état gazeux.<br>Il a tendance à stagner sous les autres gaz."#
    }
    CopperGas => {
      r#"Le gaz de cuivre (Cu) est un métal conducteur qui a été chauffé pour passer à l'état gazeux."#
    }
    HighEnergyParticle => {
      r#"Un champ concentré de Radbolts qui peut être complètement redirigé à l’aide d’un réflecteur de radbolt."#
    }
    RockComet => r#"Météore rocheux"#,
    IronComet => r#"Météore ferreux"#,
    CopperCometConfig => r#"Météore de cuivre"#,
    GoldComet => r#"Météore d'or"#,
    FullereneComet => r#"Météore de fullerène"#,
    BleachStoneComet => r#"Météores de roche chlorée"#,
    OxyliteComet => r#"Météore d'oxylite"#,
    PhosphoricComet => r#"Météore phosphorique"#,
    AlgaeComet => r#"Météore d'algue"#,
    LightDustComet => r#"Météore cotonneux de poussière"#,
    HardIceComet => r#"Météore de glace"#,
    SlimeComet => r#"Météore de vase"#,
    UraniumComet => r#"Météore d'uranium"#,
    GassyMoo => r#"Meutéore gazeux"#,
    NuclearWasteComet => r#"Météore radioactif"#,
    DustComet => r#"Météore de poussière"#,
    SnowballComet => r#"Météore de neige"#,
    ArtifactSpacePOI_GravitasSpaceStation1 => {
      r#"Les vestiges d'une époque lointaine.<br>La récolte de débris spatiaux nécessite d'utiliser une fusée équipée d'une coiffe perforante."#
    }
    ArtifactSpacePOI_GravitasSpaceStation2 => {
      r#"Les vestige d'une fusée appartenant à une entreprise disparue depuis longtemps.<br>La récolte de débris spatiaux nécessite d'utiliser une fusée équipée d'une coiffe perforante."#
    }
    ArtifactSpacePOI_GravitasSpaceStation3 => {
      r#"Les restes d'une fusée qui a cessé de fonctionner il y a bien longtemps.<br>La récolte de débris spatiaux nécessite d'utiliser une fusée équipée d'une coiffe perforante."#
    }
    ArtifactSpacePOI_GravitasSpaceStation4 => {
      r#"Un morceau de fusée venant d'une civilisation qui a été décimée.<br>La récolte de débris spatiaux nécessite d'utiliser une fusée équipée d'une coiffe perforante."#
    }
    ArtifactSpacePOI_GravitasSpaceStation5 => {
      r#"Un satellite de Gravitas détruit.<br>La récolte de débris spatiaux nécessite d'utiliser une fusée équipée d'une coiffe perforante."#
    }
    ArtifactSpacePOI_GravitasSpaceStation6 => {
      r#"Les restes d'un satellite fabriqué il y a fort longtemps.<br>La récolte de débris spatiaux nécessite d'utiliser une fusée équipée d'une coiffe perforante."#
    }
    ArtifactSpacePOI_GravitasSpaceStation7 => {
      r#"Une navette spatiale défectueuse qui erre dans l'espace sans surveillance.<br>La récolte de débris spatiaux nécessite d'utiliser une fusée équipée d'une coiffe perforante."#
    }
    ArtifactSpacePOI_GravitasSpaceStation8 => {
      r#"Le module d'une station spatiale qui n'existe plus depuis fort longtemps.<br>La récolte de débris spatiaux nécessite d'utiliser une fusée équipée d'une coiffe perforante."#
    }
    ArtifactSpacePOI_RussellsTeapot => r#"Il n'est pas possible de prouver sa non-existence."#,
    HarvestableSpacePOI_MetallicAsteroidField => {
      r#"Un champ d'astéroïdes composé de <link="IRON">fer</link>, de <link="COPPER">cuivre</link> et d'<link="OBSIDIAN">obsidienne</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_SatelliteField => {
      r#"Un débris spatial venant de temps oubliés.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_RockyAsteroidField => {
      r#"Un champ d'astéroïdes composés de <link="CUPRITE">minerai de cuivre</link>, de <link="SEDIMENTARYROCK">roche sédimentaire</link> et de <link="IGNEOUSROCK">roche ignée</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_InterstellarIceField => {
      r#"Un champ d'astéroïdes composé de <link="ICE">glace</link>, de <link="CARBONDIOXIDE">dioxyde de carbone</link> et d'<link="OXYGEN">oxygène</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_OrganicMassField => {
      r#"Un amas de ressources collectibles composé d'<link="ALGAE">algue</link>, de <link="SLIMEMOLD">vase</link>, d'<link="CONTAMINATEDOXYGEN">oxygène polluée</link> et de <link="DIRT">terre</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_IceAsteroidField => {
      r#"Un nuage de débris planétaires composé de <link="ICE">glace</link>, de <link="CARBONDIOXIDE">dioxyde de carbone</link>, d'<link="OXYGEN">oxygène</link> et de <link="METHANE">méthane</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_GasGiantCloud => {
      r#"Les reste d'une planète contenant de l'<link="HYDROGEN">hydrogène</link> à l'état <link="ELEMENTGAS">gazeux</link> et du <link="SOLIDMETHANE">méthane</link> à l'état  <link="ELEMENTSOLID">solide</link> et <link="ELEMENTLIQUID">liquide</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_ChlorineCloud => {
      r#"Un nuage de débris récoltables composé de <link="CHLORINEGAS">chlore gazeux</link> et de <link="BLEACHSTONE">roche chlorée</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_GildedAsteroidField => {
      r#"Un champ d'astéroïdes composé d'<link="GOLD">or</link>, <link="FULLERENE">fullerène</link>, de <link="REGOLITH">régolithe</link> et d'autres choses.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_GlimmeringAsteroidField => {
      r#"Un champ d'astéroïdes composé de <link="TUNGSTEN">tungstène</link>, de <link="WOLFRAMITE">wolframite</link> et d'autres choses.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_HeliumCloud => {
      r#"Un nuage de ressources composé d'<link="WATER">eau</link> et d'<link="HYDROGEN">hydrogène</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_OilyAsteroidField => {
      r#"Un champ d'astéroïdes composé de <link="METHANE">méthane solide</link>, de <link="CARBONDIOXIDE">dioxyde de carbone</link> et de <link="CRUDEOIL">pétrole brut</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_OxidizedAsteroidField => {
      r#"Un champ d'astéroïdes composé de <link="CARBONDIOXIDE">dioxyde de carbone</link> et de <link="RUST">rouille</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_SaltyAsteroidField => {
      r#"Un amas de ressources collectibles composé d'<link="SALTWATER">eau salée</link>, de <link="BRINE">saumure</link> et de <link="CARBONDIOXIDE">dioxyde de carbone</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_FrozenOreField => {
      r#"Un champ d'astéroïdes composé de <link="DIRTYICE">glace polluée</link>, <link="ICE">glace</link>, <link="SNOW">neige</link> et <link="ALUMINUMORE">minerai d'aluminum</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_ForestyOreField => {
      r#"Un amas de ressources collectibles composé de <link="CARBONDIOXIDE">dioxyde de carbone</link>, de <link="IGNEOUSROCK">roche ignée</link> et de <link="ALUMINIUMORE">minerai d'aluminium</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_SwampyOreField => {
      r#"Un champ d'astéroïdes composé de <link="MUD">boue</link>, de <link="TOXICSAND">terre polluée</link> et de <link="COBALTITE">minerai de cobalt</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_SandyOreField => {
      r#"Un champ d'astéroïdes composé de <link="SANDSTONE">grès</link>, d'<link="ALGAE">algue</link>, de <link="CUPRITE">minerai de cuivre</link> et de <link="SAND">sable</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_RadioactiveGasCloud => {
      r#"Un nuage de ressources composé de <link="CHLORINEGAS">chlore gazeux</link>, de <link="URANIUMORE">minerai d'uranium</link> et de <link="CARBONDIOXIDE">dioxyde de carbone</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_RadioactiveAsteroidField => {
      r#"Un champ d'astéroïdes composé de <link="BLEACHSTONE">roche chlorée</link>, de <link="RUST">rouille</link>, de <link="URANIUMORE">minerai d'uranium</link> et de <link="SULFUR">sulfure</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_OxygenRichAsteroidField => {
      r#"Un champ d'astéroïdes composé de <link="ICE">glace</link>, d'<link="POLLUTEDOXYGEN">oxygène pollué</link> et d'<link="WATER">eau</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    HarvestableSpacePOI_InterstellarOcean => {
      r#"Un corps interplanétaire composé d'<link="SALTWATER">eau salée</link>, de <link="BRINE">saumure</link>, de <link="SALT">sel</link> et de <link="ICE">glace</link>.

Une fusée équipée d'une <link="NOSECONEHARVEST">tête de forage</link> est indispensable pour récupérer les ressources."#
    }
    ClusterMapMeteorShower_Biological => {
      r#"Une pluie de météores visqueux et biodynamiques sur la trajectoire d'un astéroïde."#
    }
    ClusterMapMeteorShower_Snow => {
      r#"Une pluie de météores froids - très froids - sur la trajectoire d'un astéroïde."#
    }
    ClusterMapMeteorShower_Ice => {
      r#"Une tempête de roches gelées sur la trajectoire d'un astéroïde."#
    }
    ClusterMapMeteorShower_Copper => {
      r#"Une pluie de météores métalliques sur la trajectoire d'un astéroïde."#
    }
    ClusterMapMeteorShower_Iron => {
      r#"Une tempête de roches métalliques sur la trajectoire d'un astéroïde."#
    }
    ClusterMapMeteorShower_Gold => {
      r#"Une pluie de roches métalliques brillantes sur la trajectoire d'un astéroïde."#
    }
    ClusterMapMeteorShower_Uranium => {
      r#"ne pluie toxique de météores radioactifs sur la trajectoire d'un astéroïde."#
    }
    ClusterMapMeteorShower_HeavyDust => {
      r#"Un nuage sombre de météores de poussière sur la trajectoire d'un astéroïde."#
    }
    ClusterMapMeteorShower_LightDust => {
      r#"Une sorte de nuage de météores de poussière cotonneux  sur la trajectoire d'un astéroïde."#
    }
    ClusterMapMeteorShower_Moo => {
      r#"Un groupe de météores remplis de méthane qui provoquent une légère odeur, mais ne causent aucun dommage."#
    }
    ClusterMapMeteorShower_Regolith => {
      r#"Une pluie de météores rocheux sur la trajectoire d'un astéroïde."#
    }
    ClusterMapMeteorShower_Oxylite => {
      r#"Une pluie de météores rocheux et riches en oxygène sur la trajectoire d'un astéroïde."#
    }
    ClusterMapMeteorShower_BleachStone => {
      r#"Une pluie de météores de roches chlorées sur la trajectoire d'un astéroïde."#
    }
    artifact_sandstone => r#"Une très jolie pierre composée de multiples couches de sédiment."#,
    artifact_officemug => {
      r#"Un endroit intermédiaire pour stocker un expresso avant de le mettre dans la bouche."#
    }
    artifact_modernart => r#"Je ne comprends pas."#,
    artifact_shieldgenerator => {
      r#"Un prototype mécanique capable de produire une petite zone de protection."#
    }
    artifact_grubstatue => r#"Un hommage émouvant pour un petit ami des plantes."#,
    artifact_eggrock => {
      r#"Savoir si cette forme est naturelle ou s'il a été sculpté n'est pas facile à dire."#
    }
    artifact_hatchfossil => r#"Les os intacts d'une ancienne espèce de glouton."#,
    artifact_rocktornado => {
      r#"Comment ça s'est formé n'est pas très clair, mais je suis content que ça existe."#
    }
    artifact_magmalamp => r#"Ce qu'il reste d'une "Lava Lamp"."#,
    artifact_rainboweggrock => {
      r#"Déterminer si sa forme est naturelle ou s'il a été sculpté n'est pas simple.<br>Celui-ci est aux couleurs de l'arc en ciel."#
    }
    artifact_plasmalamp => r#"Aucune colonie spatiale n'est complète sans un exemplaire."#,
    artifact_moodring => r#"À quel point vous sentez-vous radioactif?"#,
    artifact_reactormodel => r#"Ça se prononce nu-clé-aire."#,
    artifact_sink => r#"Une collection n'est pas complète sans ça."#,
    artifact_rubikscube => r#"Ce mystère de l'univers a déjà été résolu."#,
    artifact_okayxray => r#"Brr, ça craint. Ça possède cinq doigts!"#,
    artifact_blender => {
      r#"Équipement utilisé pour mener des expériences pour répondre à cette éternelle question, "Est-ce que ça se mélange ?""#
    }
    artifact_vhs => r#"À manipuler avec précaution. C'est très fragile."#,
    artifact_honeyjar => r#"Un liquide doré et sucré avec une petite touche d'uranium."#,
    artifact_brickphone => r#"Il fonctionne encore."#,
    artifact_stethoscope => {
      r#"Écoute les battements du cœur d'un Duplicant, ou les gargouillis de son estomac."#
    }
    artifact_oracle => r#"À quoi ça sert?"#,
    artifact_dnamodel => r#"Un modèle pédagogique d'informations génétiques."#,
    artifact_obelisk => r#"Un morceau de roche rectangulaire.<br>Sa fonction n'est pas claire."#,
    artifact_moldavite => r#"Une pierre verte unique formée suite à l'impact d'une météorite."#,
    artifact_saxophone => r#"Le nom "Pesquet" est à peine lisible à l'intérieur."#,
    artifact_ameliaswatch => {
      r#"Ça a été découvert dans un paquet sur lequel était inscrit "À remettre au Dr. Walker"."#
    }
    artifact_teapot => {
      r#"Une théière venue des profondeurs de l'espace, recouverte d'une épaisse couche de neutronium."#
    }
    artifact_robotarm => r#"Il n'est pas fonctionnel, juste cool."#,
    artifact_bioluminescentrock => {
      r#"Une colonie vivante d'organismes microscopiques lui confère sa teinte bleutée."#
    }
    artifact_pacupercolator => r#"Ne buvez pas dedans! Il y avait un pacu... DANS le percolateur!"#,
    artifact_solarsystem => {
      r#"Une merveille du cosmos, à l'intérieur de cet afficheur se trouve un système solaire miniature."#
    }
    artifact_moonmoonmoon => r#"La lune d'une lune d'une lune. C'est très petit."#,
    keepsake_megabrain => {
      r#"Un souvenir précieux qui, autrefois, accompagnait souvent le repas des enfants pendant les vols commerciaux. Il y a un trou dans le fond fait par le docteur Holland lorsqu'il l'avait monté sur un support."#
    }
    keepsake_crittermanipulator => {
      r#"Un projet de poterie réalisé pendant un cours d'art-thérapie imposé par les ressources humaines.<br>Elle est recouverte d'une substance qui a déjà conduit un technicien de laboratoire trop curieux aux aux urgences."#
    }
    keepsake_lonelyminion => {
      r#"À l'intérieur du couvert, quelqu'un a utilisé un tournevis pour graver un dessin représentant un groupe de Duplicants souriants, réunis autour d'un cratère géant."#
    }
    keepsake_fossilhunt => {
      r#"L'étiquette indique "Molly".<br>Au verso, on peut lire "Conçu par B363" au-dessus de ce qui semble être une empreinte de patte de forme inhabituelle."#
    }
    keepsake_morbrovermaker => {
      r#"Un bio-robot personnalisé et programmé pour faire des blagues en prenant la voix de célébrités.<br>Il sert aussi de déchiqueteur à papier."#
    }
    IntermediateCure => {
      r#"Un traitement administré par un docteur pour traiter les affections légères."#
    }
    IntermediateBooster => r#"Réduit significativement le risque de tomber malade."#,
    BasicRadPill => r#"Améliore le taux d'absorption naturelle des radiations par un Duplicant."#,
    BasicCure => {
      r#"Un remède simple et facile à prendre pour lutter contre les affections mineures causées par des germes."#
    }
    BasicBooster => r#"Réduit légèrement le risque de tomber malade."#,
    Antihistamine => r#"Soulage et prévient les réactions allergiques."#,
    AdvancedCure => {
      r#"Un traitement administré par un docteur pour traiter les affections sévères."#
    }
    WoodLog => r#"Bois provenant d'un arbor ou d'un Oakshell."#,
    SwampLilyFlower => {
      r#"Une plante médicinale qui apaise les maladies les plus mineures.<br>Son parfum est exceptionnel."#
    }
    ResearchDatabank => {
      r#"Les données brutes peuvent être transformées en points de recherche interstellaire."#
    }
    OrbitalResearchDatabank => {
      r#"Les données brutes peuvent être transformées en points de recherche en analyse de données."#
    }
    CrabWoodShell => r#"Peut être écrasée pour produire du <link="WOOD">bois</link."#,
    BabyCrabWoodShell => r#"Peut être écrasée pour produire du bois."#,
    BabyCrabShell => r#"Peut être écrasée pour produire de la chaux."#,
    CrabShell => r#"Peut être écrasée pour produire de la chaux."#,
    MissileBasic => {
      r#"Un projectile explosif conçu pour se défendre contre les pluies de météores.<br>Doit être lancée par un Atomiseur de Météore."#
    }
    GeneShufflerRecharge => r#"Recharge un vacillateur neuronal usagé."#,
    BasicFabric => {
      r#"Une boule de cellulose brute utilisée dans la production de vêtements et autres textiles."#
    }
    GingerConfig => r#"Un rhizome tendre et fibreux avec un arrière-goût relevé."#,
    TableSalt => {
      r#"Un assaisonnement que les Duplicants peuvent ajouter à leurs aliments pour améliorer leur moral.<br>Les Duplicants utiliseront le sel de table automatiquement lorsqu'ils sont assis à une table d'hôte à l'heure du repas.<br><i>Seuls les meilleurs grains sont sélectionnés.</i>"#
    }
    PowerStationTools => {
      r#"Une Micro-Puce spécialisée, créée par un ingénieur professionnel.<br>Améliore les générateurs pour augmenter l'énergie en sortie."#
    }
    FarmStationTools => {
      r#"Un engrais spécialisé, mélangé par un Duplicant possédant la compétence entretien des cultures.<br>Augmente le taux de croissance d'une plante."#
    }
    EggShell => r#"Peut être écrasée pour produire de la chaux."#,
    GasGrassHarvested => {
      r#"L'herbe gaz est une forme de vie extraterrestre provisoirement classée dans la catégorie des "plantes", qui constitue la totalité du régime alimentaire des meumeuh."#
    }
    RotPile => {
      r#"Une bouillie non comestible de ce qui fut autrefois de la nourriture.<br>Les piles de pourriture se transforment en terre polluée au fil du temps."#
    }
    DreamJournal => {
      r#"La retranscription d'un rêve provoqué par le port d'un pyjama.<br>Peut être analysée à l'aide du synthétiseur somnium."#
    }
    Minion => r#""#,
    WormBasicFruit => {
      r#"Un Fruitver qui n'a pas réussi à se développer correctement.<br>Il est néanmoins comestible et a un peu de goût."#
    }
    WormBasicFood => {
      r#"Un Fruitver chétif grillé lentement.<br>Il a un arôme fumé et son goût est agréable."#
    }
    Tofu => {
      r#"Du tofu nature fait à partir de haricots.<br>La consistance est inhabituelle mais plaisante."#
    }
    SwampFruit => {
      r#"Un fruit avec une membrane extérieure et qui contient des cubes gélatineux moelleux."#
    }
    SwampDelights => {
      r#"Des cubes gélatineux déshydratés issus de la gelée des marais.<br>Chaque cube a une texture moelleuse fantastique et est légèrement recouvert d'une poudre délicieuse."#
    }
    WormSuperFood => {
      r#"Une marmelade de longue conservation à base de Grubfruits conservés dans le saccharose.<br>La marmelade épaisse et gluante garde l'aspect du réservoir lorsqu'on la sort, mais sa saveur douce est sans égale."#
    }
    SpicyTofu => {
      r#"Du tofu mariné dans une sauce au poivre pincha.<br>Le choc des saveurs le rend délicieux."#
    }
    SpiceBread => {
      r#"Une tranche de pain, légèrement épicée avec de la noix poivrée pincha pour une bouchée revigorante."#
    }
    ShellfishMeat => {
      r#"Un filet pas encore préparé, issu d'un Sanishell complètement mort. Miam !"#
    }
    SurfAndTurf => {
      r#"Un peu de viande venant de la terre et un produit de la mer cuisiné.<br>C'est copieux et satisfaisant."#
    }
    WormSuperFruit => r#"Un fruit charnu et revigorant avec un petit goût de miel."#,
    Salsa => r#"Une baie velue farcie avec de délicieuses épices et délicatement parfumée."#,
    RawEgg => {
      r#"Un œuf cru qui a été cassé pour être utilisé dans une préparation culinaire<br>Il n'éclora jamais."#
    }
    BasicForagePlant => {
      r#"Un fruit sans pépins avec un arrière-goût fade.<br>Il ne peut pas être replanté.<br>Déterrer des objets enfouis peut mettre au jour un tubercule boueux."#
    }
    ForestForagePlant => {
      r#"Un fruit sans pépin avec une texture caoutchouteuse.<br>Il ne peut pas être replanté.<br>Le fruit de l'hexalent est bien plus calorique que le tubercule boueux."#
    }
    ColdWheatBread => {
      r#"Un petit pain simple fait à partir de grains de blé grêle.<br>Chaque bouchée laisse une légère sensation de fraîcheur dans la bouche, même lorsque le pain lui-même est chaud."#
    }
    CookedEgg => {
      r#"Un œuf battu et replié.<br>En réalité, vous avez besoin de casser quelques œufs pour en faire une."#
    }
    CookedFish => {
      r#"Un morceau cuisiné de créature aquatique.<br>Sans surprise, ça a un petit goût de poisson."#
    }
    CookedMeat => {
      r#"La viande cuisinée d'une créature vaincue.<br>Elle a un arrière-goût de fumé délicieux."#
    }
    Curry => {
      r#"Haricots tendres mijotés avec des morceaux de racine tonique.<br>C'est tellement épicé!"#
    }
    FieldRation => r#"Une pâte nutritive nourrissante, intercalée entre des couches de gaufrette."#,
    FishMeat => r#"Un filet pas encore préparé, issu d'un pacu complètement mort. Miam !"#,
    FriedMushBar => {
      r#"Un pâté de boue frite, épaisse et solidifiée.<br>L'intérieur est presque cru, malgré le croustillant de la couche externe."#
    }
    FriedMushroom => {
      r#"Un plat frit à base d'obscurignon.<br>C'est épais et savoureux avec un subtil goût terreux."#
    }
    FruitCake => {
      r#"Une purée de baie velue avec une durée de conservation exceptionnellement longue.<br>Sa douceur agressive et dominante peut laisser la langue temporairement engourdie."#
    }
    Burger => {
      r#"De la viande et de la laitue accompagnant un pain gelé.<br>C'est le seul burger qu'il vaut mieux servir froid."#
    }
    Lettuce => r#"Feuilles croquantes et légèrement salées issues d'une laitue d'eau."#,
    Meat => r#"Viande crue issue d'une créature tout à fait morte. Miam !"#,
    MushBar => {
      r#"Une bouillie de moisissures comestible.<br>La barre de boue est préférable à la faim, mais c'est tout juste."#
    }
    Mushroom => r#"Un champignon comestible et sans saveur qui a grandi dans le noir."#,
    MushroomWrap => {
      r#"Des champignons goûteux entourés d'une feuille de laitue.<br>La saveur un peu terreuse du champignon est soulignée par le côté frais et craquant de la laitue."#
    }
    PacuFillet => r#"Viande crue issue d'une créature tout à fait morte. Miam !"#,
    Pancakes => {
      r#"Un disque moelleux fait avec de l'œuf et des grains de blé grêle.<br>Ils sont tellement épais!"#
    }
    PickledMeal => {
      r#"Des larves de farine conservées dans le vinaigre.<br>Le goût est très inhabituel."#
    }
    PlantMeat => r#"De la viande provenant directement d’une plante. Génial!"#,
    PrickleFruit => r#"Un fruit doux et plutôt agréable, couvert de poils drus."#,
    Quiche => {
      r#"Omelette, champignon frit et Laitue empilés sur une pâte croustillante.<br>Bizarrement, c'est à la fois spongieux <i>et</i> croustillant."#
    }
    GrilledPrickleFruit => {
      r#"Le bourgeon grillé d'une baie velue.<br>La cuisson révèle le goût exquis du fruit, bien que les épines brûlées laissent à désirer."#
    }
    BerryPie => {
      r#"Une tarte composée principalement de Grubfruit et de baies velues.<br>Le mélange des baies donne une garniture colorée et parfumée qui se développe en bouche."#
    }
    SwampForagePlant => {
      r#"Une plante sans graine avec un cœur juteux et une odeur horrible.<br>Elle ne peut pas être replantée."#
    }
    BasicPlantFood => r#"Un grain sans saveur qui ne gigote presque jamais de son plein gré."#,
    BasicPlantBar => r#"larves de farine compactées en un pain dense et immobile."#,
    DehydratedSurfAndTurf => {
      r#"Une portion de surf'n'turf déshydratée. Elle doit être réhydratée avant de pouvoir être considérée comme un aliment.<br>Les rations sèches n'ont pas de  date de péremption."#
    }
    DehydratedSpicyTofu => {
      r#"Une portion de tofu épicé déshydratée. Elle doit être réhydratée avant de pouvoir être considérée comme un aliment.<br>Les rations sèches n'ont pas de  date de péremption."#
    }
    DehydratedSpiceBread => {
      r#"Une portion de pain au poivre déshydratée. Elle doit être réhydratée avant de pouvoir être considérée comme un aliment.<br>Les rations sèches n'ont pas de  date de péremption."#
    }
    DehydratedSalsa => {
      r#"Une portion de baie farcie déshydratée. Elle doit être réhydratée avant de pouvoir être considérée comme un aliment.<br>Les rations sèches n'ont pas de  date de péremption."#
    }
    DehydratedQuiche => {
      r#"Une portion de quiche aux champignons déshydratée. Elle doit être réhydratée avant de pouvoir être considérée comme un aliment.<br>Les rations sèches n'ont pas de  date de péremption."#
    }
    DehydratedFoodPackage => {
      r#"Une portion de burger gelé déshydratée. Elle doit être réhydratée avant de pouvoir être considérée comme un aliment.<br>Les rations sèches n'ont pas de  date de péremption."#
    }
    DehydratedMushroomWrap => {
      r#"Une portion de wrap aux champignons déshydratée. Elle doit être réhydratée avant de pouvoir être considérée comme un aliment.<br>Les rations sèches n'ont pas de  date de péremption."#
    }
    DehydratedBerryPie => {
      r#"Une portion de tarte aux baies déshydratée. Elle doit être réhydratée avant de pouvoir être considérée comme un aliment.<br>Les rations sèches n'ont pas de  date de péremption."#
    }
    DehydratedCurry => {
      r#"Une portion de curry d'haricots déshydratée. Elle doit être réhydratée avant de pouvoir être considérée comme un aliment.<br>Les rations sèches n'ont pas de  date de péremption."#
    }
    SpiceNut => {
      r#"Toute la saveur du poivre pincha.<br>La coque amère dissimule un noyau riche et poivré, utilisé en cuisine."#
    }
    SweepBot => {
      r#"Un robot nettoyeur automatisé.<br>Ramasse les débris solides et les résidus liquides puis stocke les matériaux dans sa base."#
    }
    ScoutRover => r#"Un robot étrange qui peut aller explorer de nouveaux planétoïdes."#,
    MorbRover => {
      r#"P.E.G.G.Y. ou "Pathogen-Fueled Extravehicular Geo-Exploratory Guidebot (model Y)"<br>On peut lui assigner des tâches de fabrication ou d'excavation dans les environnements dangereux."#
    }
    SquirrelEgg => {
      r#"Les pips sont de petites créatures espiègles et pacifiques qui vivent près des roseaux et dans les branches d'arbors.<br>Ils sont connus pour enterrer des graines dans le sol s'ils trouvent une zone propice avec suffisamment d'espace."#
    }
    SquirrelHugEgg => {
      r#"Les pips cajoleurs sont des créatures douces et affectueuses qui aiment câliner tous les types d'œufs instinctivement.<br>Le phénomène est amplifié temporairement lorsqu'ils sont étreints par un Duplicant de passage."#
    }
    StaterpillarEgg => {
      r#"Les électrolimaces sont des créatures dynamiques qui génèrent de l'énergie électrique pendant la nuit.<br>Leur énergie peut être canalisée en laissant un fil exposé près des zones où elles aiment dormir."#
    }
    StaterpillarLiquidEgg => {
      r#"Les limaces éponges sont des créatures assoiffées qui stockent des liquides au cours de la journée.<br>Elles déposent les liquides dans les canalisations à côté desquelles elles dorment la nuit."#
    }
    PuftEgg => {
      r#"Les Bouffettes sont des créatures pacifiques qui excrètent des boules de vase à chaque respiration."#
    }
    DreckoEgg => {
      r#"Les dreckos sont des créatures pacifiques qui ne broutent que les plants de poivre pincha, de lys des marais ou d'arbre à poux.<br>Leur dos est recouvert de fibres laineuses épaisses qui ne poussent que dans un milieu hydrogéné."#
    }
    DreckoPlasticEgg => {
      r#"Les dreckos brillants sont des créatures non hostiles qui ne broutent que les plants d'arbres à poux colonisés et les fleurs velues.<br>Leur dos est recouvert d'écailles en bio-plastique qui ne poussent que dans un milieu hydrogéné."#
    }
    LightBugBlackEgg => {
      r#"Cette luciole n'émet pas de lumière ce qui ne l'empêche pas d'avoir une très bonne personnalité."#
    }
    LightBugBlueEgg => {
      r#"Les lucioles émettent une douce lumière dans l'espoir d'attirer des camarades pour leur tenir compagnie.<br>La lumière de l'espèce azurée est devenue bleue grâce à l'élevage sélectif."#
    }
    LightBugEgg => {
      r#"Les lucioles émettent une douce lumière dans l'espoir d'attirer des camarades pour leur tenir compagnie."#
    }
    PuftOxyliteEgg => {
      r#"Les bouffettes compactes sont des créatures pacifiques qui excrètent de l'oxylite condensé à chaque respiration."#
    }
    LightBugCrystalEgg => {
      r#"Les lucioles émettent une douce lumière dans l'espoir d'attirer des camarades pour leur tenir compagnie.<br>La lumière de l'espèce rayonnante a été amplifiée grâce à l'élevage sélectif."#
    }
    LightBugPinkEgg => {
      r#"Les lucioles émettent une douce lumière dans l'espoir d'attirer des camarades pour leur tenir compagnie.<br>La lumière de l'espèce corallienne est devenue rose grâce à l'élevage sélectif."#
    }
    LightBugPurpleEgg => {
      r#"Les lucioles émettent une douce lumière dans l'espoir d'attirer des camarades pour leur tenir compagnie.<br>La lumière de l'espèce royale est devenue mauve grâce à la sélection naturelle."#
    }
    MoleEgg => {
      r#"Les rats taupiers sont des créatures fouisseuses qui mangent le régolithe qui se trouve sur les surfaces terrestres.<br>Ils ne peuvent creuser les métaux raffinés."#
    }
    MoleDelicacyEgg => {
      r#"Les Delecta Voles sont des créatures fouisseuses dont le corps produit une racine tonique lorsque le régolithe est ingéré à une certaine température.<br>Elles ne peuvent s'enterrer dans les métaux raffinés."#
    }
    OilfloaterEgg => {
      r#"Les gluants sont des créatures visqueuses qui consomment du dioxyde de carbone et exsudent du pétrole brut."#
    }
    OilfloaterDecorEgg => {
      r#"Les gluants velus sont des créatures amicales qui consomment de l'oxygène et s'épanouissent au contact des Duplicants.<br>Les velus ont une robe magnifique, d'apparence luxueuse."#
    }
    OilfloaterHighTempEgg => {
      r#"Les gluants fondus sont des créatures gluantes qui consomment du dioxyde de carbone et exsudent du pétrole."#
    }
    PuftAlphaEgg => {
      r#"La bouffette princière est une créature paresseuse qui excrète de petits morceaux solides constitués de tout ce qu'elle inhale."#
    }
    PuftBleachstoneEgg => {
      r#"Les bouffettes couinantes sont des créatures pacifiques qui excrètent des boules de roche chlorée à chaque respiration."#
    }
    LightBugOrangeEgg => {
      r#"Les lucioles émettent une douce lumière dans l'espoir d'attirer des camarades pour leur tenir compagnie.<br>La lumière de l'espèce solaire est devenue orange grâce à l'élevage sélectif."#
    }
    StaterpillarGasEgg => {
      r#"Les limaces brumeuses sont des créatures poreuses qui inhalent des gaz irrespirables pendant la journée.<br>La nuit, elles dorment près des conduites de gaz ouvertes, où elles déposent leurs résidus."#
    }
    HatchVeggieEgg => r#"Les gloutons sages excrètent du charbon et adorent creuser le sol."#,
    HatchEgg => {
      r#"Les gloutons excrètent du charbon et peuvent être découvert en déterrant des objets enterrés."#
    }
    CrabEgg => {
      r#"Les carapokes sont des créatures non-hostiles, sauf si leurs œufs se trouvent à proximité.<br>Ils se nourrissent de terre polluée et de tas de pourriture.<br>La carapace qu'ils abandonnent après chaque mue peut être broyée pour obtenir de la chaux."#
    }
    CrabWoodEgg => {
      r#"Les Oakshells sont des non hostiles, sauf si leurs œufs se trouvent à proximité.<br>Ils se nourrissent de terre polluée, vase et tas de pourriture.<br>La carapace qu'ils abandonnent après chaque mue peut être broyée pour obtenir du bois.<br>Les Oakshells prospèrent dans l'éthanol."#
    }
    CrabFreshWaterEgg => {
      r#"Les sanishells sont des créatures non hostiles, sauf si leurs œufs se trouvent à proximité.<br>Ils vivent dans l'eau et éliminent les germes de tous les liquides dans lesquels ils évoluent.<br>Ils se nourrissent de terre polluée, de vase et de tas de pourriture."#
    }
    PacuCleanerEgg => {
      r#"Tous les organismes dans l'univers connu trouvent le pacu particulièrement délicieux."#
    }
    DivergentBeetleEgg => {
      r#"Les scaradoux sont des créatures non hostiles qui excrètent de grandes quantités de saccharose.<br>Ils sont étroitement liés à l'astiver et présentent des comportements agricoles similaires, bien que moins efficaces."#
    }
    HatchHardEgg => r#"Les gloutons excrètent du charbon et adorent creuser dans le sol."#,
    PacuTropicalEgg => {
      r#"Tous les organismes dans l'univers connu trouvent le pacu particulièrement délicieux."#
    }
    DivergentWormEgg => {
      r#"Les astivers ont des relations symbiotiques avec les plantes, en particulier les Fruitvers dont ils prennent soin instinctivement.<br>Les astivers sont de proches parents des scaradoux."#
    }
    HatchMetalEgg => {
      r#"Le glouton lisse aime s'enterrer dans le sol et excrète du métal raffiné lorsqu'il consomme du minerai de métal."#
    }
    PacuEgg => {
      r#"Les pacus sont des créatures aquatiques qui peuvent vivre dans n'importe quel liquide, tel que l'eau ou l'eau contaminée.<br>Tous les organismes dans l'univers connu trouvent le pacu particulièrement délicieux."#
    }
    Squirrel => {
      r#"Les pips sont de petites créatures espiègles et pacifiques qui vivent près des roseaux et dans les branches d'arbors.<br>Ils sont connus pour enterrer des graines dans le sol s'ils trouvent une zone propice avec suffisamment d'espace."#
    }
    SquirrelHug => {
      r#"Les pips cajoleurs sont des créatures douces et affectueuses qui aiment câliner tous les types d'œufs instinctivement.<br>Le phénomène est amplifié temporairement lorsqu'ils sont étreints par un Duplicant de passage."#
    }
    Staterpillar => {
      r#"Les électrolimaces sont des créatures dynamiques qui génèrent de l'énergie électrique pendant la nuit.<br>Leur énergie peut être canalisée en laissant un fil exposé près des zones où elles aiment dormir."#
    }
    StaterpillarLiquid => {
      r#"Les limaces éponges sont des créatures assoiffées qui stockent des liquides au cours de la journée.<br>Elles déposent les liquides dans les canalisations à côté desquelles elles dorment la nuit."#
    }
    Puft => {
      r#"Les Bouffettes sont des créatures pacifiques qui excrètent des boules de vase à chaque respiration."#
    }
    BeeHive => {
      r#"Un nid moyennement radioactif construit par des radbeilles.<br>Transforme du minerai d'uranium en uranium enrichi lorsqu’une radbeille travaille dans le nid.<br>Ne fonctionnera pas si le sol en dessous a été détruit."#
    }
    Bee => {
      r#"Les Radbeilles sont des créatures hostiles qui prospèrent dans les environnements radioactifs.<br>En général, elles collectent du minerai d'uranium pour leur ruche et produisent de l'uranium enrichi."#
    }
    Drecko => {
      r#"Les dreckos sont des créatures pacifiques qui ne broutent que les plants de poivre pincha, de lys des marais ou d'arbre à poux.<br>Leur dos est recouvert de fibres laineuses épaisses qui ne poussent que dans un milieu hydrogéné."#
    }
    DreckoPlastic => {
      r#"Les dreckos brillants sont des créatures non hostiles qui ne broutent que les plants d'arbres à poux colonisés et les fleurs velues.<br>Leur dos est recouvert d'écailles en bio-plastique qui ne poussent que dans un milieu hydrogéné."#
    }
    Glom => {
      r#"Les morbs sont attirés par les endroits peu hygiéniques et expulsent fréquemment des jets d'oxygène pollué."#
    }
    LightBugBlack => {
      r#"Cette luciole n'émet pas de lumière ce qui ne l'empêche pas d'avoir une très bonne personnalité."#
    }
    LightBugBlue => {
      r#"Les lucioles émettent une douce lumière dans l'espoir d'attirer des camarades pour leur tenir compagnie.<br>La lumière de l'espèce azurée est devenue bleue grâce à l'élevage sélectif."#
    }
    LightBug => {
      r#"Les lucioles émettent une douce lumière dans l'espoir d'attirer des camarades pour leur tenir compagnie."#
    }
    PuftOxylite => {
      r#"Les bouffettes compactes sont des créatures pacifiques qui excrètent de l'oxylite condensé à chaque respiration."#
    }
    LightBugCrystal => {
      r#"Les lucioles émettent une douce lumière dans l'espoir d'attirer des camarades pour leur tenir compagnie.<br>La lumière de l'espèce rayonnante a été amplifiée grâce à l'élevage sélectif."#
    }
    LightBugPink => {
      r#"Les lucioles émettent une douce lumière dans l'espoir d'attirer des camarades pour leur tenir compagnie.<br>La lumière de l'espèce corallienne est devenue rose grâce à l'élevage sélectif."#
    }
    LightBugPurple => {
      r#"Les lucioles émettent une douce lumière dans l'espoir d'attirer des camarades pour leur tenir compagnie.<br>La lumière de l'espèce royale est devenue mauve grâce à la sélection naturelle."#
    }
    Mole => {
      r#"Les rats taupiers sont des créatures fouisseuses qui mangent le régolithe qui se trouve sur les surfaces terrestres.<br>Ils ne peuvent creuser les métaux raffinés."#
    }
    MoleDelicacy => {
      r#"Les Delecta Voles sont des créatures fouisseuses dont le corps produit une racine tonique lorsque le régolithe est ingéré à une certaine température.<br>Elles ne peuvent s'enterrer dans les métaux raffinés."#
    }
    Moo => {
      r#"Les meumeuhs sont des créatures extraterrestres qui se nourrissent d'herbe gaz et excrètent du gaz naturel.<br>Lorsqu'elles sont domestiquées et nourries, elles peuvent être traites pour obtenir du brackène."#
    }
    Oilfloater => {
      r#"Les gluants sont des créatures visqueuses qui consomment du dioxyde de carbone et exsudent du pétrole brut."#
    }
    OilfloaterDecor => {
      r#"Les gluants velus sont des créatures amicales qui consomment de l'oxygène et s'épanouissent au contact des Duplicants.<br>Les velus ont une robe magnifique, d'apparence luxueuse."#
    }
    OilfloaterHighTemp => {
      r#"Les gluants fondus sont des créatures gluantes qui consomment du dioxyde de carbone et exsudent du pétrole."#
    }
    PuftAlpha => {
      r#"La bouffette princière est une créature paresseuse qui excrète de petits morceaux solides constitués de tout ce qu'elle inhale."#
    }
    PuftBleachstone => {
      r#"Les bouffettes couinantes sont des créatures pacifiques qui excrètent des boules de roche chlorée à chaque respiration."#
    }
    LightBugOrange => {
      r#"Les lucioles émettent une douce lumière dans l'espoir d'attirer des camarades pour leur tenir compagnie.<br>La lumière de l'espèce solaire est devenue orange grâce à l'élevage sélectif."#
    }
    StaterpillarGas => {
      r#"Les limaces brumeuses sont des créatures poreuses qui inhalent des gaz irrespirables pendant la journée.<br>La nuit, elles dorment près des conduites de gaz ouvertes, où elles déposent leurs résidus."#
    }
    HatchVeggie => r#"Les gloutons sages excrètent du charbon et adorent creuser le sol."#,
    Hatch => {
      r#"Les gloutons excrètent du charbon et peuvent être découvert en déterrant des objets enterrés."#
    }
    Crab => {
      r#"Les carapokes sont des créatures non-hostiles, sauf si leurs œufs se trouvent à proximité.<br>Ils se nourrissent de terre polluée et de tas de pourriture.<br>La carapace qu'ils abandonnent après chaque mue peut être broyée pour obtenir de la chaux."#
    }
    CrabWood => {
      r#"Les Oakshells sont des non hostiles, sauf si leurs œufs se trouvent à proximité.<br>Ils se nourrissent de terre polluée, vase et tas de pourriture.<br>La carapace qu'ils abandonnent après chaque mue peut être broyée pour obtenir du bois.<br>Les Oakshells prospèrent dans l'éthanol."#
    }
    CrabFreshWater => {
      r#"Les sanishells sont des créatures non hostiles, sauf si leurs œufs se trouvent à proximité.<br>Ils vivent dans l'eau et éliminent les germes de tous les liquides dans lesquels ils évoluent.<br>Ils se nourrissent de terre polluée, de vase et de tas de pourriture."#
    }
    PacuCleaner => {
      r#"Tous les organismes dans l'univers connu trouvent le pacu particulièrement délicieux."#
    }
    DivergentBeetle => {
      r#"Les scaradoux sont des créatures non hostiles qui excrètent de grandes quantités de saccharose.<br>Ils sont étroitement liés à l'astiver et présentent des comportements agricoles similaires, bien que moins efficaces."#
    }
    HatchHard => r#"Les gloutons excrètent du charbon et adorent creuser dans le sol."#,
    PacuTropical => {
      r#"Tous les organismes dans l'univers connu trouvent le pacu particulièrement délicieux."#
    }
    DivergentWorm => {
      r#"Les astivers ont des relations symbiotiques avec les plantes, en particulier les Fruitvers dont ils prennent soin instinctivement.<br>Les astivers sont de proches parents des scaradoux."#
    }
    HatchMetal => {
      r#"Le glouton lisse aime s'enterrer dans le sol et excrète du métal raffiné lorsqu'il consomme du minerai de métal."#
    }
    Pacu => {
      r#"Les pacus sont des créatures aquatiques qui peuvent vivre dans n'importe quel liquide, tel que l'eau ou l'eau contaminée.<br>Tous les organismes dans l'univers connu trouvent le pacu particulièrement délicieux."#
    }
    DreckoPlasticBaby => {
      r#"Un bébé drecko avec des yeux globuleux.<br>Il deviendra un drecko brillant en grandissant."#
    }
    DivergentWormBaby => {
      r#"Une petite larve d'astiver.<br>Avec le temps, elle deviendra un astiver adulte et aura une taille imposante."#
    }
    BeeBaby => {
      r#"Une petite larve de radbeille.<br>Avec le temps, elle deviendra une radbeille adulte."#
    }
    DivergentBeetleBaby => {
      r#"Une petite larve de scaradoux.<br>Avec le temps, elle deviendra un scaradoux adulte."#
    }
    CrabFreshWaterBaby => {
      r#"Un petit sanishell turbulent.<br>Il deviendra un Sanishell en grandissant."#
    }
    DreckoBaby => {
      r#"Un bébé drecko avec des yeux globuleux.<br>Il deviendra un drecko en grandissant."#
    }
    HatchBaby => {
      r#"Un petit bouftou encore innocent.<br>Avec le temps, il deviendra un glouton adulte."#
    }
    CrabWoodBaby => {
      r#"Un petit Oakshell noueux.<br>Il deviendra un majestueux Oakshell en grandissant."#
    }
    CrabBaby => r#"Un petit carapoke turbulent.<br>Il deviendra un Pokeshell en grandissant."#,
    LightBugBaby => r#"Un bébé luciole potelé."#,
    HatchMetalBaby => {
      r#"Un petit bouftou lisse encore maladroit.<br>En grandissant, il deviendra un glouton lisse, qui aimera grignoter différents types de métaux."#
    }
    PuftOxyliteBaby => {
      r#"Une petite bouffie trapue.<br>En grandissant, elle deviendra une bouffette compacte."#
    }
    SquirrelHugBaby => {
      r#"Un bébé pipsqueak cajoleur ébouriffé.<br>Il deviendra un pip cajoleur en grandissant."#
    }
    PuftBaby => {
      r#"Les Bouffettes sont des créatures pacifiques qui excrètent des boules de vase à chaque respiration."#
    }
    PuftBleachstoneBaby => {
      r#"Une petite bouffie couinante.<br>En grandissant, elle deviendra une bouffette couinante."#
    }
    StaterpillarBaby => {
      r#"Un électrolimaçon rondouillard.<br>Il deviendra une électrolimace en grandissant."#
    }
    PuftAlphaBaby => {
      r#"Une petite bouffie princière pleine de gaz.<br>En grandissant, elle deviendra une bouffette princière.<br>Elle a l'air un peu snob..."#
    }
    PacuTropicalBaby => {
      r#"Un jeune alevin de pacu tropical frétillant.<br>Avec le temps, il deviendra un pacu tropical adulte."#
    }
    PacuBaby => {
      r#"Un jeune alevin de pacu frétillant.<br>Avec le temps, il deviendra un pacu adulte."#
    }
    PacuCleanerBaby => {
      r#"Un jeune alevin de poisson gobeur frétillant.<br>Avec le temps, il deviendra un poisson gobeur adulte."#
    }
    OilfloaterHighTempBaby => {
      r#"Une petite larve de gluant fondu.<br>Un jour elle deviendra un gluant fondu adulte."#
    }
    StaterpillarGasBaby => {
      r#"Un limaçon brumeux rondouillard.<br>Il deviendra une limace brumeuse en grandissant."#
    }
    OilfloaterDecorBaby => {
      r#"Une petite larve de gluant velu pleine de vie.<br>Un jour elle deviendra un gluant velu adulte."#
    }
    OilfloaterBaby => {
      r#"Une petite larve de gluant visqueuse.<br>Un jour elle deviendra un gluant adulte."#
    }
    StaterpillarLiquidBaby => {
      r#"Un petit limaçon éponge.<br>Il deviendra une limace éponge en grandissant."#
    }
    MoleDelicacyBaby => {
      r#"Un jeune et adorable delecta vole<br>Un jour, il deviendra un type de shove vole adulte, le Delecta Vole."#
    }
    MoleBaby => {
      r#"Les rats taupiers sont des créatures fouisseuses qui mangent le régolithe qui se trouve sur les surfaces terrestres.<br>Ils ne peuvent creuser les métaux raffinés."#
    }
    LightBugPurpleBaby => r#"Un bébé luciole potelé.<br>Celui-ci appartient à l'espèce royale."#,
    LightBugPinkBaby => r#"Un bébé luciole potelé.<br>Celui-ci appartient à l'espèce corallienne."#,
    LightBugOrangeBaby => r#"Un bébé luciole potelé.<br>Celui-ci appartient à l'espèce solaire."#,
    LightBugCrystalBaby => {
      r#"Un bébé luciole potelé.<br>Celui-ci appartient à l'espèce rayonnante."#
    }
    LightBugBlueBaby => r#"Un bébé luciole potelé.<br>Celui-ci appartient à l'espèce azurée."#,
    LightBugBlackBaby => r#"Un bébé luciole potelé.<br>Celui-ci appartient à l'espèce abyssale."#,
    HatchVeggieBaby => {
      r#"Un petit bouftou sage encore maladroit.<br>En grandissant, il deviendra un glouton sage, qui aimera grignoter les matériaux organiques."#
    }
    HatchHardBaby => {
      r#"Un petit bouftou pierreux encore maladroit.<br>En grandissant, il deviendra un glouton pierreux, qui aimera grignoter certaines roches et métaux."#
    }
    SquirrelBaby => r#"Un bébé pipsqueak ronronnant.<br>Il deviendra un pip en grandissant."#,
    BasicFabricMaterialPlantSeed => {
      r#"Une graine de roseau.<br>Déterrer des objets peut révéler une graine de roseau."#
    }
    BasicSingleHarvestPlantSeed => {
      r#"Une graine d'arbre à poux.<br>Déterrer des objets peut révéler une graine d'arbre à poux."#
    }
    BeanPlantSeed => r#"Une graine d'haricot.<br>Déterrer des objets peut révéler un haricot."#,
    ColdBreatherSeed => {
      r#"Une graine de plante sifflante.<br>Déterrer des objets peut révéler une graine de plante sifflante."#
    }
    ColdWheatSeed => {
      r#"Un Grain de blé grêle.<br>Le grain peut être semé pour cultiver davantage de blé grêle ou être transformé en nourriture."#
    }
    CritterTrapPlantSeed => {
      r#"La graine d'un piège de saturne.<br>Déterrer des objets peut révéler une graine de piège de saturne."#
    }
    ForestTreeSeed => {
      r#"Une graine d'arbor.<br>Déterrer des objets peut révéler un gland d'arbor."#
    }
    GasGrassSeed => r#"Une graine d'herbe gaz."#,
    SaltPlantSeed => {
      r#"Une graine de vigne saline.<br>Déterrer des objets peut révéler une graine de vigne saline."#
    }
    PrickleFlowerSeed => {
      r#"Une graine de fleur velue.<br>Déterrer des objets peut révéler une graine velue."#
    }
    SeaLettuceSeed => {
      r#"Une graine de laitue d'eau.<br>Déterrer des objets peut révéler une graine de laitue d'eau."#
    }
    SpiceVineSeed => {
      r#"Une graine de poivre pincha<br>Déterrer des objets peut révéler une graine de poivre pincha."#
    }
    OxyfernSeed => r#"Fait pousser une seule plante à partir d'une graine."#,
    SwampHarvestPlantSeed => {
      r#"Une graine de godet des marais.<br>Déterrer des objets peut révéler une graine de godet des marais."#
    }
    SwampLilySeed => {
      r#"Une graine de lys des marais<br>Déterrer des objets peut révéler une graine de lys des marais."#
    }
    WormPlantSeed => {
      r#"Une graine de fruitver chétif.<br>Déterrer des objets peut révéler une graine de fruitver."#
    }
    MushroomSeed => {
      r#"Une graine d'obscurignon.<br>Déterrer des objets peut révéler un spore fongique."#
    }
    BasicFabricPlant => {
      r#"Les roseaux produisent une fibre de roseau incroyablement douce qui est utilisée pour la production de vêtements."#
    }
    BasicSingleHarvestPlant => {
      r#"Les Arbres à Poux produisent des larves de farine, un grain étrangement tortillé qui peut être récolté pour l'alimentation."#
    }
    BeanPlant => {
      r#"Les pousses d'haricot se plaisent dans des climats froids et produisent des haricots."#
    }
    ColdWheat => {
      r#"Le blé grêle produit du grain de blé grêle, un grain gelé qui peut être transformé en nourriture."#
    }
    CritterTrapPlant => {
      r#"Les pièges de Saturne sont des plantes carnivores qui s'en prennent aux créatures insouciantes et les digèrent en rejetant de l'hydrogène gazeux."#
    }
    ForestTree => {
      r#"Les arbors produisent des branches d'arbor qui peuvent être récoltées pour obtenir du bois."#
    }
    GasGrass => {
      r#"L'herbe gaz est une forme de vie extraterrestre provisoirement classée dans la catégorie des "plantes", qui constitue la totalité du régime alimentaire des meumeuh."#
    }
    SaltPlant => {
      r#"Les vignes salines consomment de petites quantités de chlore gazeux et forment des dépôts de sodium en poussant, produisant ainsi du sel récoltable."#
    }
    PrickleFlower => r#"Les fleurs velues produisent des baies velues, épineuses et comestibles."#,
    SeaLettuce => {
      r#"Les laitues d'eau se développent dans l'eau saline et peuvent être récoltées pour obtenir une laitue fraîche et comestible."#
    }
    SpiceVine => {
      r#"Les plants de noix poivrée pincha produisent des noix poivrées savoureuses utilisées pour épicer la nourriture."#
    }
    SuperWormPlant => {
      r#"Un plant de fruitver qui s’est épanoui après avoir été cajolé par une créature divergente.<br>Il produira des fruitvers de haute qualité."#
    }
    SwampHarvestPlant => {
      r#"Les godets des marais produisent de la gelée des marais juteuse et sucrée utilisée pour l'alimentation."#
    }
    SwampLily => {
      r#"Les lys des marais produisent des Fleurs de Lys, des fleurs magnifiques possédant des propriétés médicinales."#
    }
    WormPlant => {
      r#"Les plants de fruitver chétif produisent des fruitvers chétifs utilisés pour l'alimentation.<br>S'il est bichonné par une créature divergente, le plant produira des fruits de haute qualité."#
    }
    MushroomPlant => {
      r#"Les obscurignons produisent des champignons, qui peuvent être récoltés et utilisés comme nourriture."#
    }
    BasicForagePlantPlanted => {
      r#"Les tubercules boueux sont incapables de se propager mais peuvent être récoltés pour fournir une seule portion de nourriture."#
    }
    ForestForagePlantPlanted => {
      r#"Les hexalents sont incapables de se propager mais peuvent être récoltés pour fournir une seule portion de nourriture très calorique."#
    }
    SwampForagePlantPlanted => {
      r#"Les blettes des marais sont incapables de se propager mais peuvent être récoltées pour fournir une portion de nourriture de piètre qualité et peu calorique."#
    }
    CactusPlantSeed => {
      r#"Une graine de joya sauteur.<br>Déterrer des objets peut révéler une graine de joya."#
    }
    CylindricaSeed => {
      r#"Une graine d'éclat de joie.<br>Déterrer des objets peut révéler une graine d'éclat de joie."#
    }
    EvilFlowerSeed => {
      r#"Une graine de sporchidée.<br>Déterrer des objets peut révéler une graine de sporchidée."#
    }
    BulbPlantSeed => {
      r#"Une graine de buddy bud.<br>Déterrer des objets peut révéler une graine de buddy bud."#
    }
    PrickleGrassSeed => {
      r#"Une graine de fausse bruyère.<br>Déterrer des objets peut révéler une graine de fausse bruyère."#
    }
    WineCupsSeed => {
      r#"Une graine de mauve sereine.<br>Déterrer des objets peut révéler une graine de mauve."#
    }
    ToePlantSeed => {
      r#"Une graine d'orteils sereins.<br>Déterrer des objets peut révéler une graine d'orteils sereins."#
    }
    LeafyPlantSeed => {
      r#"Une graine de feuille de joie.<br>Déterrer des objets peut révéler une graine de feuille de joie."#
    }
    CactusPlant => {
      r#"Les Joyas sont des plantes décoratives. On dit familièrement qu'ils font "sauter de joie" les jardiniers."#
    }
    ColdBreather => {
      r#"Les plantes sifflantes peuvent être plantées dans des jardinières, des dalles de culture, ou en culture hydroponique et elles absorbent la chaleur en respirant grâce à leurs membranes extérieures poreuses."#
    }
    Cylindrica => {
      r#"Les éclats de joie provoquent une explosion de la décoration dans les environnements sinon moroses."#
    }
    EvilFlower => {
      r#"Les sporchidées sont particulièrement attirantes pour cacher le fait qu'elles servent d'hôte à des spores fongiques particulièrement dangereux."#
    }
    BulbPlant => {
      r#"Les buddy buds sont des plantes à feuilles qui ont un effet positif sur le moral, un peu comme un ami."#
    }
    PrickleGrass => {
      r#"Les fausses bruyères exhalent des phéromones qui les font apparaître incroyablement belles aux yeux des créatures."#
    }
    Oxyfern => {
      r#"Les oxygères absorbent le dioxyde de carbone gazeux et rejettent de l'oxygène respirable."#
    }
    WineCups => {
      r#"Les mauves sereines améliorent la décoration et soulagent le stress grâce à leur couleurs apaisante et leur forme de berceau."#
    }
    ToePlant => {
      r#"Les orteils sereins améliorent la décoration en donnant à leur environnement l’équivalent visuel d’un massage des pieds."#
    }
    LeafyPlant => {
      r#"Les feuilles de joie arborent une teinte verte apaisante, connue pour soulager le stress et améliorer le moral."#
    }
    GeyserGeneric_steam => {
      r#"Une cheminée sous haute pression qui rejette périodiquement de la vapeur."#
    }
    GeyserGeneric_hot_steam => {
      r#"Une cheminée sous haute pression qui rejette périodiquement de la vapeur brûlante."#
    }
    GeyserGeneric_hot_water => {
      r#"Un geyser sous haute pression qui entre périodiquement en éruption et crache de l' eau."#
    }
    GeyserGeneric_slush_water => {
      r#"Un geyser sous haute pression qui entre périodiquement en éruption et crache de l' eau polluée gelée."#
    }
    GeyserGeneric_filthy_water => {
      r#"Une cheminée sous haute pression qui rejette périodiquement de l' eau contaminée."#
    }
    GeyserGeneric_slush_salt_water => {
      r#"Un geyser sous haute pression qui rejette de l'eau salée gelée."#
    }
    GeyserGeneric_salt_water => {
      r#"Un geyser sous haute pression qui entre périodiquement en éruption et crache de l' eau saline."#
    }
    GeyserGeneric_small_volcano => {
      r#"Un volcan miniature qui rejette périodiquement du magma en fusion."#
    }
    GeyserGeneric_big_volcano => {
      r#"Un volcan imposant qui crache du magma en fusion par intermittence."#
    }
    GeyserGeneric_liquid_co2 => {
      r#"Un geyser sous haute pression qui entre périodiquement en éruption et crache du dioxyde de carbone liquide bouillant."#
    }
    GeyserGeneric_hot_co2 => {
      r#"Une cheminée sous haute pression qui rejette périodiquement du dioxyde de carbone chaud."#
    }
    GeyserGeneric_hot_hydrogen => {
      r#"Une cheminée sous haute pression qui rejette périodiquement de l' hydrogène chaud."#
    }
    GeyserGeneric_hot_po2 => {
      r#"Une cheminée sous haute pression qui rejette périodiquement de l' oxygène pollué chaud."#
    }
    GeyserGeneric_slimy_po2 => {
      r#"Une cheminée sous haute pression qui rejette périodiquement de l'oxygène pollué chaud."#
    }
    GeyserGeneric_chlorine_gas => {
      r#"Une cheminée sous haute pression qui rejette périodiquement du chlore gazeux chaud."#
    }
    GeyserGeneric_methane => {
      r#"Un geyser sous haute pression qui entre périodiquement en éruption et rejette du gaz naturel."#
    }
    GeyserGeneric_molten_copper => {
      r#"Un volcan imposant qui crache du cuivre en fusion par intermittence."#
    }
    GeyserGeneric_molten_iron => {
      r#"Un volcan imposant qui crache du fer en fusion par intermittence."#
    }
    GeyserGeneric_molten_gold => {
      r#"Un volcan imposant qui crache de l'or en fusion par intermittence."#
    }
    GeyserGeneric_molten_aluminum => {
      r#"Un volcan imposant qui crache de l'aluminium en fusion par intermittence."#
    }
    GeyserGeneric_molten_tungsten => {
      r#"Un volcan imposant qui crache du tungstène en fusion par intermittence."#
    }
    GeyserGeneric_molten_niobium => {
      r#"Un volcan imposant qui crache du niobium par intermittence."#
    }
    GeyserGeneric_molten_cobalt => {
      r#"Un volcan imposant qui crache du cobalt en fusion par intermittence."#
    }
    GeyserGeneric_oil_drip => {
      r#"Une fissure qui entre périodiquement en éruption et rejette du pétrole brut bouillant."#
    }
    GeyserGeneric_liquid_sulfur => {
      r#"Un geyser sous haute pression qui entre périodiquement en éruption et crache du soufre liquide bouillonnant."#
    }
    OilWell => {
      r#"Les réservoirs de pétrole sont des formations rocheuses avec des dépôts de pétrole brut sous leur surface.<br>Le pétrole Brut peut être extrait d'un réservoir avec suffisamment de pression."#
    }
    Atmo_Suit => {
      r#"Fournit de l'oxygène aux Duplicants dans les environnements toxiques et difficilement respirables."#
    }
    Jet_Suit => {
      r#"Fournit de l'oxygène aux Duplicants dans les environnements toxiques et difficilement respirables.<br>Permet aux Duplicants de voler."#
    }
    Lead_Suit => {
      r#"Fournit de l'oxygène aux Duplicants dans les environnements toxiques et difficilement respirables."#
    }
    Oxygen_Mask => {
      r#"Fournit de l'oxygène aux Duplicants dans les environnements toxiques ou difficilement respirables."#
    }
    Worn_Atmo_Suit => {
      r#"Une combinaison atmo usagée.<br>Les combinaisons peuvent être réparées en utilisant la forge d'exosuit."#
    }
    Worn_Jet_Suit => {
      r#"Une combinaison à propulsion usagée.<br>Les combinaisons peuvent être réparées en utilisant la forge d'exosuit."#
    }
    Worn_Lead_Suit => {
      r#"Une Combinaison en Plomb usagée.<br>Les combinaisons peuvent être réparées en utilisant la forge d'exosuit."#
    }
    Worn_Oxygen_Mask => {
      r#"Un Masque à Oxygène usagé.<br>Les masques peuvent être réparés grâce à un établi."#
    }
    Cool_Vest => r#"Protège le porteur de la Chaleur en réduisant l'isolation"#,
    CustomClothing => {
      r#"Améliore la décoration dans un petit rayon autour du Duplicant qui la porte"#
    }
    Funky_Vest => {
      r#"Améliore la décoration dans une petite zone autour du porteur. Peut être améliorée pour devenir une tenue à la mode à l'aide du refaçonneur de vêtements"#
    }
    SleepClinicPajamas => {
      r#"Un ticket doux et pelucheux pour le pays des rêves.<br>Aide les Duplicants à s'endormir en réduisant leur endurance.<br>Permet au porteur de rêver et de produire des journaux de rêve."#
    }
    Warm_Vest => r#"Protège le porteur du Froid en augmentant son isolation"#,
    #[allow(unreachable_patterns)]
    _ => "Not translated",
  }
}
