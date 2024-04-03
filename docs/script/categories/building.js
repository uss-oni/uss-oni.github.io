import { menuOrder } from "../sort.js"
import * as properties from "../properties/def.js"

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
    },
    {
      title: "oxygen",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "power",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "food",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "plumbing",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "hvac",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "refining",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "medical",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "furniture",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "equipment",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "utilities",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "automation",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "conveyance",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "rocketry",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "RocketModule",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "hep",
      sortOrder: menuOrder,
      properties: commonProperties,
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
