import { alpha } from "../sort.js"
import * as properties from "../properties/def.js"

const commonProperties = [
]

export const def = {
  title: "Equipment",
  categories: [
    {
      title: "Clothes",
      sortOrder: alpha,
      properties: commonProperties,
    },
    {
      title: "Suit",
      sortOrder: alpha,
      properties: commonProperties,
    },
    {
      title: "Worn",
      sortOrder: alpha,
      properties: commonProperties,
    }
  ]
}
