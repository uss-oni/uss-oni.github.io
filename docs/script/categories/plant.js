import { alpha } from "../sort.js"
import * as properties from "../properties/def.js"

const commonProperties = [
  properties.primaryElement
]

export const def = {
  title: "Plant",
  categories: [
    {
      title: "Crop",
      sortOrder: alpha,
      properties: commonProperties.concat([
        properties.plantAge,
        properties.harvest,
        properties.size,
        properties.comfortTemp,
        properties.limitTemp,
        properties.maxRadiation,
        properties.irrigation,
        properties.fertilization
      ]),
      additionals: [
        
      ]
    },
    {
      title: "Forage",
      sortOrder: alpha,
      properties: commonProperties.concat([
        properties.harvest,
        properties.size
      ]),
    },
    {
      title: "Decor",
      sortOrder: alpha,
      properties: commonProperties.concat([
        properties.harvest,
        properties.size,
        properties.comfortTemp,
        properties.limitTemp,
        properties.irrigation,
        properties.fertilization
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
