namespace USS
{
  public class Entity
  {
    public string tag;
    public string fr;
    public Category menu = Category.NONE;
    public List<string> components;
    public List<string> smdef;
    public float menuOrder = 177013; // Random number big enough
    public string[] dlc; 
    public HashSet<string> tags;
    public float? molarMass;
    public float? hardness;
    public float? shc;
    public float? strength;
    public float? flow;
    public float? maxCompression;
    public float? viscosity;
    public float? minHorizontalFlow;
    public float? minVerticalFlow;
    public float? radiationAbsorptionFactor;
    public float? thermalConductivity;
    public float? massPerUnit;
    public float? chunkMass;
    public string locationRule;
    public string[] materialCategory;
    public string rotations;
    public bool? notInRocket;
    public bool? onlyInRocket;
    public float? generatorWattageRating;
    public List<float?> electrityConsummation;
    public float? battery;
    public float? externalHeat;
    public float? internalHeat;
    public int? width;
    public int? height;
    public bool? invincible;
    public int? hp;
    public float? lowTempWarning;
    public float? lowTempFatal;
    public float? highTempWarning;
    public float? highTempFatal;
    public bool? transparent;
    public float? mass;
    public bool? debug;
    public bool? repairable;
    public bool? breakable;
    public float? floodThreshold;
    public bool? entombable;
    public bool? disinfectable;
    public float? decor;
    public float? decorRadius;
    public string primaryElement;
    public bool? clearable;
    public float? surfaceArea;
    public float? thickness; 
    public float? groundTransferScale;
    public string sublimateElement;
    public float? sublimateMassPower;
    public float? sublimateRate;
    public float? sublimateMaxDestinationMass;
    public float? sublimateMinAmount;
    public int? sublimateDiseaseIdx;
    public float? sublimateDiseaseCount;
    public List<List<object>> modifiers;
    public float? maxRadiation;
    public float? age;
    public float? batteryLoss;
    public float? caloriesMax;
    public float? caloriesLoss;
    public float? minLight;
    public float? carryAmount;
    public bool? destroyOnDamaged;
    public bool? deconstructable;
    public bool? enableable;
    public bool? providesO2;
    public float? launchRate;
    public float? radboltDecay;
    public float? radboltStorage;
    public bool? allowBabies;
    public List<object> divers;
    public List<string> links;
    public List<(string, List<string>, float)> storages;
    public float? workTime;
    public float? lauchSpeed;
    public float? rotationSpeed;
    public float? rangeMax;
    public float? rangeMin;
    public float? scanningAngle;
    public float? maxAngle;
    public float? scanLeft;
    public float? scanRight;
    public string mode;
    public float? numCapsules;
    public float? numParticlesToOpen;
    public bool? milkConsummer;
    public (float, float, float)? lightColor;
    public float? lightRange;
    public float? lightAngle;
    public (float, float)? lightDirection;
    public string lightShape;
    public float? spacePerCritter;
    public float? incubationRate;
    public (float, float)? timeWaitPlantSeed;
    public (float, float)? timeWaitClimbTree;
    public string[] friends;
    public float? happy;
    public float? glum;
    public float? miserable; 
    public float? quality;
    public float? calories;
    public float? spoilTime;
    public float? lightAbsorption;
  }
}