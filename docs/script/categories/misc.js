import { alpha } from "../sort.js"
import * as properties from "../properties/def.js"

const commonProperties = [
]

export const def = {
  title: "Misc",
  categories: [
    {
      title: "Medicine",
      sortOrder: alpha,
      properties: commonProperties,
    },
    {
      title: "Industrial",
      sortOrder: alpha,
      properties: commonProperties,
    },
    {
      title: "Other",
      sortOrder: alpha,
      properties: commonProperties,
    },
    {
      title: "Quest",
      sortOrder: alpha,
      properties: commonProperties,
    }
  ]
}
