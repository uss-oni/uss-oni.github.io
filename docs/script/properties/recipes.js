import { recipes } from "../../db/recipes.js";
import { db } from "../../db/uss.js";
import * as image from "../img.js";
import { alpha } from "../sort.js";
import * as display from "./display.js";
import * as units from "./units.js"
import * as translation from "../../lang/lang.js"

function getElementsByTag(tag) {
  var list = [];
  for (const [elementName, element] of Object.entries(db.Element.Solid)) {
    if (element.tags.includes(tag)) {
      list.push(elementName);
    }
  }
  return list.sort(alpha);
}

function displayLeft(div, tag, amount) {
  amount = Number(amount.toFixed(3));
  let iconContainer = document.createElement("div");
  iconContainer.className = "recLeftIcon";
  let icon = document.createElement("img");
  icon.src = image.image(tag).path();
  iconContainer.appendChild(icon);
  div.appendChild(iconContainer);
  let element = document.createElement("div");
  element.className = "recLeft";
  translation.text(element, tag);
  div.appendChild(element);
  let elAmount = document.createElement("div");
  elAmount.className = "recLeftAmount";
  elAmount.textContent = amount + " kg";
  div.appendChild(elAmount);
}

function displayArrow(div) {
  let element = document.createElement("div");
  element.className = "recArrow";
  element.textContent = "⟶";
  div.appendChild(element);
}

function displayRight(div, tag, amount) {
  amount = Number(amount.toFixed(3));
  let iconContainer = document.createElement("div");
  iconContainer.className = "recRightIcon";
  let icon = document.createElement("img");
  icon.src = image.image(tag).path();
  iconContainer.appendChild(icon);
  div.appendChild(iconContainer);
  let element = document.createElement("div");
  element.className = "recRight";
  translation.text(element, tag);
  div.appendChild(element);
  let elAmount = document.createElement("div");
  elAmount.className = "recRightAmount";
  elAmount.textContent = amount + " kg";
  div.appendChild(elAmount);
}

export function recipesList(div, entity) {
  let recDiv = document.createElement("div");
  recDiv.id = "recipes";
  div.appendChild(recDiv);
  for (const recipe of recipes.Complex.filter(recipe => 
       recipe.converter == entity.tag
    || Object.keys(recipe.origin).includes(entity.tag)
    || Object.keys(recipe.dest).includes(entity.tag))) {
    let input = Object.entries(recipe.origin);
    let output = Object.entries(recipe.dest);
    let leftIcon = document.createElement("div");
    leftIcon.className = "recLeftIcon";
    let left = document.createElement("div");
    left.className = "recLeft";
    let leftAmount = document.createElement("div");
    leftAmount.className = "recLeftAmount";
    let rightIcon = document.createElement("div");
    rightIcon.className = "recRightIcon";
    let right = document.createElement("div");
    right.className = "recRight";
    let rightAmount = document.createElement("div");
    rightAmount.className = "recRightAmount";
    for (let [tag, amount] of Object.entries(recipe.origin)) {
      amount = Number(amount.toFixed(3));
      let iconContainer = document.createElement("div");
      let icon = document.createElement("img");
      icon.src = image.image(tag).path();
      iconContainer.appendChild(icon);
      leftIcon.appendChild(iconContainer);
      let element = document.createElement("div");
      element.className = "pad";
      translation.text(element, tag);
      left.appendChild(element);
      let elAmount = document.createElement("div");
      elAmount.textContent = amount + " kg";
      elAmount.className = "pad";
      leftAmount.appendChild(elAmount);
    }
    let arrow = document.createElement("div");
    arrow.className = "recArrow";
    arrow.textContent = "⟶";
    for (let [tag, amount] of Object.entries(recipe.dest)) {
      amount = Number(amount.toFixed(3));
      let iconContainer = document.createElement("div");
      let icon = document.createElement("img");
      icon.src = image.image(tag).path();
      iconContainer.appendChild(icon);
      rightIcon.appendChild(iconContainer);
      let element = document.createElement("div");
      element.className = "pad";
      translation.text(element, tag);
      right.appendChild(element);
      let elAmount = document.createElement("div");
      elAmount.textContent = amount + " kg";
      elAmount.className = "pad";
      rightAmount.appendChild(elAmount);
    }
    recDiv.appendChild(leftIcon);
    recDiv.appendChild(left);
    recDiv.appendChild(leftAmount);
    recDiv.appendChild(arrow);
    recDiv.appendChild(rightIcon);
    recDiv.appendChild(right);
    recDiv.appendChild(rightAmount);
    /*    displayLeft(recDiv, input[0][0], input[0][1]);
        displayArrow(recDiv);
        displayRight(recDiv, output[0][0], output[0][1]);
        for (let i = 1; i < Math.max(input.length, output.length); i++) {
          if (i < input.length) {
            displayLeft(recDiv, input[i][0], input[i][1]);
          }
          if (i < output.length) {
            displayRight(recDiv, output[i][0], output[i][1]);
          }
        }*/
  }
  /*
      for (const [origin, amount] of Object.entries(recipe.dest)){
        let tags = getElementsByTag(origin);
        if (tags.length <= 1) {
          display.line(div, image.image(origin).path(), origin, units.kg(amount));
        }
        else {
          display.multiline(div, image)
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
      */
}