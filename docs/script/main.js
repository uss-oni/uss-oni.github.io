import * as artifact from "./categories/artifact.js"
import * as building from "./categories/building.js"
import * as critter from "./categories/critter.js"
import * as element from "./categories/element.js"
import * as equipment from "./categories/equipment.js"
import * as food from "./categories/food.js"
import * as geyser from "./categories/geyser.js"
import * as misc from "./categories/misc.js"
import * as none from "./categories/none.js"
import * as plant from "./categories/plant.js"
import * as space from "./categories/space.js"

import * as translation from "../lang/lang.js";
import * as sort from "./sort.js";
import { db } from "../db/uss.js";
import * as image from "./img.js";

function onChangeSelect(choice) {
  let page = document.getElementById("list");
  page.replaceChildren();

  for (const categories of selectCategoryOrder) {
    if (categories.def.title == choice) {
      for (const category of categories.def.categories) {
        let title = document.createElement("h3");
        translation.ui(title, category.title);
        page.appendChild(title);
        let list = document.createElement("div");
        list.className = "category";
        page.appendChild(list);
        for (const [tag, _] of Object
          .entries(db[choice][category.title])
          .sort(category.sortOrder)) {
          var box = document.createElement("div");
          box.className = "box";
          var img = document.createElement("img");
          img.src = image.image(tag).path();
          var d = document.createElement("div");
          d.className = "align";
          var p = document.createElement("p");
          d.appendChild(p);
          box.appendChild(img);
          box.appendChild(d);
          list.appendChild(box);
          box.addEventListener("click", () => displayProperties(category, tag, db[choice][category.title][tag]));
          translation.textWithHyphens(p, tag);
        }
      }
    }
  }
}


function displayProperties(category, tag, entity) {
  let img = document.getElementById("descimg");
  img.src = image.image(tag).path();
  let desc = document.getElementById("desc");
  translation.desc(desc, tag);
  let properties = document.getElementById("properties");
  properties.replaceChildren();
  let mainTitle = document.createElement("h3");
  mainTitle.textContent = "Properties";
  properties.appendChild(mainTitle);
  for (const prop of category.properties) {
    prop(properties, entity);
  }
}

function init() {
  let select = document.getElementById("selectCategory");
  translation.init().then(() => onChangeSelect(select.options[select.selectedIndex].dataset.ui));
}

window.onChangeSelect = onChangeSelect;
window.addEventListener('DOMContentLoaded', () => init());

const selectCategoryOrder = [
  element,
  building,
  food,
  critter,
  plant,
  geyser,
  space,
  equipment,
  artifact,
  misc,
  none
];