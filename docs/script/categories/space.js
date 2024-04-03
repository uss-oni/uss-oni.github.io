import { alpha } from "../sort.js"
import * as properties from "../properties/def.js"

const commonProperties = [
]

export const def = {
  title: "Space",
  categories: [
    {
      title: "HarvestablePOI",
      sortOrder: alpha,
      properties: commonProperties,
    },
    {
      title: "Comet",
      sortOrder: alpha,
      properties: commonProperties,
    },
    {
      title: "Shower",
      sortOrder: alpha,
      properties: commonProperties,
    },
    {
      title: "ArtifactPOI",
      sortOrder: alpha,
      properties: commonProperties,
    }
  ]
}
