import { alpha } from "../sort.js"
import * as properties from "../properties/def.js"

const commonProperties = [
]

export const def = {
  title: "Plant",
  categories: [
    {
      title: "Crop",
      sortOrder: alpha,
      properties: commonProperties.concat([
        properties.plantAge,
        properties.harvest
      ]),
    },
    {
      title: "Forage",
      sortOrder: alpha,
      properties: commonProperties.concat([
        properties.harvest
      ]),
    },
    {
      title: "Decor",
      sortOrder: alpha,
      properties: commonProperties.concat([
        properties.harvest
      ]),
    },
    {
      title: "CropSeed",
      sortOrder: alpha,
      properties: commonProperties,
    },
    {
      title: "DecorSeed",
      sortOrder: alpha,
      properties: commonProperties,
    },
  ]
}
