import { alpha } from "../sort.js"
import * as properties from "../properties/def.js"

const commonProperties = [
  properties.primaryElement
]

export const def = {
  title: "Artifact",
  categories: [
    {
      title: "Terrestrial",
      sortOrder: alpha,
      properties: commonProperties,
    },
    {
      title: "Space",
      sortOrder: alpha,
      properties: commonProperties,
    },
    {
      title: "Any",
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
