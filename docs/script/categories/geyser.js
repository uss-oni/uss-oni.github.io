import { alpha, menuOrder } from "../sort.js"
import * as properties from "../properties/def.js"

const commonProperties = [
  properties.primaryElement
]

export const def = {
  title: "Geyser",
  categories: [
    {
      title: "Geyser",
      sortOrder: menuOrder,
      properties: commonProperties,
    }
  ]
}
