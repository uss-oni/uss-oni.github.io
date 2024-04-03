import * as units from "./units.js"
import * as display from "./display.js"
import * as image from "../img.js"
import { recipes } from "../../db/recipes.js";

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
  let icon = entity.hardness < 50 ?  image.icon("digIcon").path()   :
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
    value: units.time(entity.age * 600 / 4)
  },{
    icon: image.icon("heatflow").path(),
    label: "savage",
    value: units.time(entity.age * 600)
  }
];
  display.summary(div, "cycleOfLife", units.time2(entity.age * 600 / 4, entity.age * 600), array);
}

export function harvest(div, entity) {
  let dest = recipes.Plant.find(p => p.origin == entity.tag).dest;
  let [drop, amount] = Object.entries(dest)[0];
  display.line(div, image.icon("harvest").path(), "harvest", units.entityKg(drop, amount));
}

/*
export const strength = simpleLine(type.none);
export const mass = simpleLine(type.kg);
export const flow = simpleLine(type.none);
export const maxCompression = simpleLine(type.none);
export const viscosity = simpleLine(type.none);
export const minHorizontalFlow = simpleLine(type.none);
export const minVerticalFlow = simpleLine(type.none);
export const lightAbsorption = simpleLine(type.percent);
export const radiationAbsorptionFactor = simpleLine(type.percent, icon("radiation"));
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
export const lowTempWarning = simpleLine(type.temperature);
export const lowTempFatal = simpleLine(type.temperature);
export const highTempWarning = simpleLine(type.temperature);
export const highTempFatal = simpleLine(type.temperature);
export const transparent = simpleLine(type.none);
export const repairable = simpleLine(type.none);
export const breakable = simpleLine(type.none);
export const floodThreshold = simpleLine(type.percent);
export const entombable = simpleLine(type.none);
export const disinfectable = simpleLine(type.none);
export const decor = simpleLine(type.none, icon("decor"));
export const decorRadius = simpleLine(type.none, icon("decor"));
export const primaryElement = simpleLine(type.element);
export const clearable = simpleLine(type.none);
export const surfaceArea = simpleLine(type.none);
export const thickness = simpleLine(type.none);
export const groundTransferScale = simpleLine(type.none);
export const maxRadiation = simpleLine(type.none);
export const age = simpleLine(type.none);
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