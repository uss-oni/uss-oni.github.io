import * as units from "./units.js"
import * as display from "./display.js"
import * as image from "../img.js"
import { recipes } from "../../db/recipes.js";
import { db } from "../../db/uss.js";
import * as translation from "../../lang/lang.js"

export function shc(div, entity) {
  display.line(div, image.icon("heatflow").path(), "shc", units.dtugc(entity.shc));
}

export function thermalConductivity(div, entity) {
  display.line(div, image.icon("heatflow").path(), "thermalConductivity", units.dtumsc(entity.thermalConductivity));
}

export function molarMass(div, entity) {
  display.line(div, image.icon("molarMass").path(), "molarMass", units.gmol(entity.molarMass));
}

export function hardness(div, entity) {
  let icon = entity.hardness < 50 ? image.icon("digIcon").path() :
    entity.hardness < 150 ? image.icon("digIcon_1").path() :
      entity.hardness < 200 ? image.icon("digIcon_2").path() :
        image.icon("digIcon_3").path()
  display.line(div, icon, "hardness", units.none(entity.hardness));
}

export function size(div, entity) {
  display.line(div, image.icon("size").path(), "size", units.none(entity.width + " x " + entity.height));
}

export function plantAge(div, entity) {
  let array = [{
    icon: image.icon("heatflow").path(),
    label: "domestic",
    value: units.time(entity.age * 600)
  }, {
    icon: image.icon("heatflow").path(),
    label: "savage",
    value: units.time(entity.age * 600 * 4)
  }
  ];
  display.summary(div, "cycleOfLife", units.time2(entity.age * 600, entity.age * 600 * 4), array);
}

export function harvest(div, entity) {
  let dest = recipes.Harvest.find(p => p.origin == entity.tag).dest;
  let [drop, amount] = Object.entries(dest)[0];
  let harvest = [units.entityKg(drop, amount)];

  let seed = recipes.Seeds.find(p => p.origin == entity.tag);
  if (seed != null) {
    harvest = harvest.concat(units.element(Object.keys(seed.dest)[0]));
  }
  display.multiline(div, image.icon("harvest").path(), "harvest", harvest.length, harvest);
}

export function phase(div, entity) {
  for (const recipe of recipes.Phase.filter(recipe => recipe.origin == entity.tag)) {
    let dest = [(div) => {
      var temp = document.createElement("div");
      temp.className = "propTemp";
      units.temperature(recipe.temp)(temp);
      div.appendChild(temp);
      var arrow = document.createElement("div");
      arrow.textContent = "⟶";
      arrow.className = "propArrow";
      div.appendChild(arrow);
    }];
    for (const [tag, percent] of Object.entries(recipe.dest)) {
      dest.push(units.element(tag));
      if (percent < 1) {
        dest.push((div) => {
          let perc = document.createElement("div");
          perc.className = "propAmount";
          units.percent(percent)(perc);
          div.appendChild(perc);
        });
      }
    }
    let span = Object.entries(recipe.dest).length;

    if (recipe.type == "condensation" || recipe.type == "freezing" || recipe.type == "deposition") {
      display.multiline(div, image.icon("tempDown").path(), recipe.type, span, dest);
    }
    else {
      display.multiline(div, image.icon("tempUp").path(), recipe.type, span, dest);
    }

    if (recipe.type == "freezing"
      && Object.entries(recipe.dest).length == 1) {
      let kg = db.Element.Solid[Object.keys(recipe.dest)[0]].defaultMass * 0.8;
      display.line(div, image.icon("tempDown").path(), "massForTile", units.kg(kg));
    }

    if (recipe.type == "solidification") {
      display.line(div, image.icon("tempUp").path(), "massForTile", units.kg(0.001));
    }
  }
}

export function lightAbsorption(div, entity) {
  display.line(div, image.icon("light").path(), "lightAbsorption", units.percent(entity.lightAbsorption));
}

export function radiationAbsorption(div, entity) {
  display.line(div, image.icon("radiation").path(), "radiationAbsorption", units.percent(entity.radiationAbsorptionFactor));
}

export function quality(div, entity) {
  display.line(div, image.icon("heatflow").path(), "quality", units.none(entity.quality));
  let moral = [-1, 0, 1, 4, 8, 12, 16, 16][entity.quality + 1];
  display.line(div, image.icon("heatflow").path(), "moral", units.none(moral));
}

export function calories(div, entity) {
  display.line(div, image.icon("heatflow").path(), "calories", units.kcal(entity.calories));
}

export function primaryElement(div, entity) {
  if (entity.primaryElement != null) {
    display.lineNoValue(div, image.icon("noIdea").path(), "primaryElement", units.element(entity.primaryElement));
  }
}

export function mass(div, entity) {
  display.line(div, image.icon("heatflow").path(), "mass", units.kg(entity.mass));
}

export function floodThreshold(div, entity) {
  if (entity.floodThreshold != null) {
    display.line(div, image.icon("heatflow").path(), "floodThreshold", units.percent(entity.floodThreshold));
  }
}

export function maxCompression(div, entity) {
  display.line(div, image.icon("heatflow").path(), "maxCompression", units.none(entity.maxCompression));
}

export function viscosity(div, entity) {
  display.line(div, image.icon("heatflow").path(), "viscosity", units.none(entity.viscosity));
}

export function comfortTemp(div, entity) {
  display.line(div, image.icon("temperature").path(), "comfortTemp", (div) => {
    units.temperature(entity.lowTempWarning)(div);
    units.none(" ↔ ")(div);
    units.temperature(entity.highTempWarning)(div);
  });
}

export function limitTemp(div, entity) {
  display.line(div, image.icon("temperature").path(), "limitTemp", (div) => {
    units.temperature(entity.lowTempFatal)(div);
    units.none(" ↔ ")(div);
    units.temperature(entity.highTempFatal)(div);
  });
}

export function hp(div, entity) {
  if (entity.invincible != null) {
    display.line(div, image.icon("hp").path(), "hp", units.translate("invincible"));
  }
  else if (entity.hp != null) {
    display.line(div, image.icon("hp").path(), "hp", units.none(entity.hp));
  }
}

export function maxRadiation(div, entity) {
  display.line(div, image.icon("radiation").path(), "maxRadiation", units.none(entity.maxRadiation));
}

export function irrigation(div, entity) {
  let irrigations = recipes.Irrigation
    .filter(i => i.dest == entity.tag)
    .flatMap(i => i.origin)
    .map(o => (div) => {
      let entry = Object.entries(o)[0];
      units.element(entry[0])(div);
      units.kgs(entry[1])(div);
    });
  if (irrigations.length > 0) {
    display.multiline(div, image.icon("noIdea").path(), "irrigation", irrigations.length, irrigations);
  }
}

export function fertilization(div, entity) {
  let fertilizations = recipes.Fertilization
    .filter(i => i.dest == entity.tag)
    .flatMap(i => i.origin)
    .map(o => (div) => {
      let entry = Object.entries(o)[0];
      units.element(entry[0])(div);
      units.kgs(entry[1])(div);
    });
  if (fertilizations.length > 0) {
    display.multiline(div, image.icon("noIdea").path(), "fertilization", fertilizations.length, fertilizations);
  }
}


/*
export const strength = simpleLine(type.none);
export const flow = simpleLine(type.none);
export const maxCompression = simpleLine(type.none);
export const viscosity = simpleLine(type.none);
export const minHorizontalFlow = simpleLine(type.none);
export const minVerticalFlow = simpleLine(type.none);
export const massPerUnit = simpleLine(type.none);
export const chunkMass = simpleLine(type.none);
export const locationRule = simpleLine(type.none);
export const rotations = simpleLine(type.none);
export const notInRocket = simpleLine(type.none);
export const onlyInRocket = simpleLine(type.none);
export const generatorWattageRating = simpleLine(type.none);
export const battery = simpleLine(type.none);
export const externalHeat = simpleLine(type.none);
export const internalHeat = simpleLine(type.none);
export const invincible = simpleLine(type.none);
export const hp = simpleLine(type.none, icon("hp"));
export const transparent = simpleLine(type.none);
export const repairable = simpleLine(type.none);
export const breakable = simpleLine(type.none);
export const floodThreshold = simpleLine(type.percent);
export const entombable = simpleLine(type.none);
export const disinfectable = simpleLine(type.none);
export const decor = simpleLine(type.none, icon("decor"));
export const decorRadius = simpleLine(type.none, icon("decor"));
export const clearable = simpleLine(type.none);
export const surfaceArea = simpleLine(type.none);
export const thickness = simpleLine(type.none);
export const groundTransferScale = simpleLine(type.none);
export const maxRadiation = simpleLine(type.none);
export const batteryLoss = simpleLine(type.none);
export const caloriesMax = simpleLine(type.none);
export const caloriesLoss = simpleLine(type.none);
export const minLight = simpleLine(type.none);
export const carryAmount = simpleLine(type.none);
export const destroyOnDamaged = simpleLine(type.none);
export const deconstructable = simpleLine(type.none);
export const enableable = simpleLine(type.none);
export const providesO2 = simpleLine(type.none);
export const launchRate = simpleLine(type.none);
export const radboltDecay = simpleLine(type.none);
export const radboltStorage = simpleLine(type.none);
export const allowBabies = simpleLine(type.none);
export const workTime = simpleLine(type.none);
export const lauchSpeed = simpleLine(type.none);
export const rotationSpeed = simpleLine(type.none);
export const rangeMax = simpleLine(type.none);
export const rangeMin = simpleLine(type.none);
export const scanningAngle = simpleLine(type.none);
export const maxAngle = simpleLine(type.none);
export const scanLeft = simpleLine(type.none);
export const scanRight = simpleLine(type.none);
export const mode = simpleLine(type.none);
export const numCapsules = simpleLine(type.none);
export const numParticlesToOpen = simpleLine(type.none);
export const milkConsummer = simpleLine(type.none);
export const lightRange = simpleLine(type.none);
export const lightAngle = simpleLine(type.none);
export const lightDirection = simpleLine(type.none);
export const lightShape = simpleLine(type.none);
export const spacePerCritter = simpleLine(type.none);
export const incubationRate = simpleLine(type.none);
export const timeWaitPlantSeed = simpleLine(type.none);
export const timeWaitClimbTree = simpleLine(type.none);
export const friends = simpleLine(type.none);
export const happy = simpleLine(type.none);
export const glum = simpleLine(type.none);
export const miserable = simpleLine(type.none);
export const quality = simpleLine(type.none);
export const calories = simpleLine(type.kcal);
export const rot = simpleLine(type.none);
export const spoilTime = simpleLine(type.peuchy);


*/