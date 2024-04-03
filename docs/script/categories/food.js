import { alpha, menuOrder } from "../sort.js"
import * as properties from "../properties/def.js"

const commonProperties = [
]

export const def = {
  title: "Food",
  categories: [
    {
      title: "Cooked",
      sortOrder: menuOrder,
      properties: commonProperties,
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
