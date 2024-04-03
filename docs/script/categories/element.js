import { alpha } from "../sort.js"
import * as properties from "../properties/def.js"

const commonProperties = [
  properties.phase,
  properties.shc,
  properties.thermalConductivity,
  properties.molarMass,
  properties.radiationAbsorption
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
      properties: commonProperties.concat([
        properties.lightAbsorption,
        properties.maxCompression,
        properties.viscosity
      ]),
    },
    {
      title: "Gas",
      sortOrder: alpha,
      properties: commonProperties.concat([
        properties.lightAbsorption,
      ]),
    },
    {
      title: "Other",
      sortOrder: alpha,
      properties: commonProperties,
    },
  ]
}
