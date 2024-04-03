import { menuOrder } from "../sort.js"
import * as properties from "../properties/def.js"
import { buildingMaterials } from "../properties/buildingMaterials.js"

const commonProperties = [
  properties.thermalConductivity,
  properties.size
]

export const def = {
  title: "Building",
  categories: [
    {
      title: "base",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "oxygen",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "power",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "food",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "plumbing",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "hvac",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "refining",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "medical",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "furniture",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "equipment",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "utilities",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "automation",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "conveyance",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "rocketry",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "RocketModule",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "hep",
      sortOrder: menuOrder,
      properties: commonProperties,
      additionals: [
        buildingMaterials
      ]
    },
    {
      title: "Gravitas",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "Quest",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
  ]
}
