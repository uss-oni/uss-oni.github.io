import { alpha, menuOrder } from "../sort.js"
import * as properties from "../properties/def.js"
import { recipesList } from "../properties/recipes.js"

const commonProperties = [
  properties.phase,
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
      additionals: [
        recipesList
      ]
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
