import { recipes } from "../../db/recipes.js";
import { db } from "../../db/uss.js";
import * as image from "../img.js";
import { alpha } from "../sort.js";
import * as display from "./display.js";
import * as units from "./units.js"

function getElementsByTag(tag) {
  var list = [];
  for (const [elementName, element] of Object.entries(db.Element.Solid)) {
    if (element.tags.includes(tag)) {
      list.push(elementName);
    }
  }
  return list.sort(alpha);
}

export function buildingMaterials(div, entity) {
  let recipe = recipes.Building.find(recipe => recipe.dest == entity.tag);
  for (const [origin, amount] of Object.entries(recipe.origin)) {
    let tags = getElementsByTag(origin);
    if (tags.length <= 1) {
      display.line(div, image.image(origin).path(), origin, units.kg(amount));
    }
    else {
      let array = tags.map(tag => {
        return {
          icon: image.image(tag).path(),
          label: tag,
          value: units.none("")
        }
      });
      display.summary(div, origin, units.kg(amount), array);
    }
  }
}