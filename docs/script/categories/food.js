import { alpha, menuOrder } from "../sort.js"
import * as properties from "../properties/def.js"

const commonProperties = [
  properties.primaryElement
]

export const def = {
  title: "Food",
  categories: [
    {
      title: "Cooked",
      sortOrder: menuOrder,
      properties: commonProperties.concat([
        properties.quality,
        properties.calories
      ]),
    },
  //  {
  //    title: "Raw",
  //    sortOrder: alpha,
  //    properties: commonProperties,
  //  },
    {
      title: "Ingredient",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
    {
      title: "Dehydrated",
      sortOrder: menuOrder,
      properties: commonProperties,
    },
  ]
}
