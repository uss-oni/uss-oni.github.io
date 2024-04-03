import { alpha } from "../sort.js"
import * as properties from "../properties/def.js"

const commonProperties = [
  properties.shc,
  properties.thermalConductivity,
  properties.molarMass
]

export const def = {
  title: "Element",
  categories: [
    {
      title: "Solid",
      sortOrder: alpha,
      properties: commonProperties.concat([
        properties.hardness
      ]),
    },
    {
      title: "Liquid",
      sortOrder: alpha,
      properties: commonProperties,
    },
    {
      title: "Gas",
      sortOrder: alpha,
      properties: commonProperties,
    },
    {
      title: "Other",
      sortOrder: alpha,
      properties: commonProperties,
    },
  ]
}
