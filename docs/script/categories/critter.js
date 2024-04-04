import { alpha, menuOrder } from "../sort.js"
import * as properties from "../properties/def.js"

const commonProperties = [
  properties.primaryElement,
  properties.hp
]

export const def = {
  title: "Critter",
  categories: [
    {
      title: "Critter",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "Baby",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "Egg",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "Robot",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
  ]
}
