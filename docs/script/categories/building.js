import { menuOrder } from "../sort.js"
import * as properties from "../properties/def.js"
import { buildingMaterials } from "../properties/buildingMaterials.js"
import { recipesList } from "../properties/recipes.js"
import { recipes } from "../../db/recipes.js"

const commonProperties = [
  properties.thermalConductivity,
  properties.size,
  properties.mass,
  properties.floodThreshold,
  properties.hp
]

const commonAdditionals = [
  buildingMaterials,
  recipesList,
]

export const def = {
  title: "Building",
  categories: [
    {
      title: "base",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "oxygen",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "power",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "food",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "plumbing",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "hvac",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "refining",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "medical",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "furniture",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "equipment",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "utilities",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "automation",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "conveyance",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "rocketry",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "RocketModule",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "hep",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: commonAdditionals
    },
    {
      title: "Gravitas",
      sortOrder: menuOrder,
      properties: commonProperties.concat([
        properties.primaryElement
      ]),
    },
    {
      title: "Quest",
      sortOrder: menuOrder,
      properties: commonProperties.concat([
        properties.primaryElement
      ]),
    },
  ]
}
