
import * as image from "../img.js";
import * as translation from "../../lang/lang.js"

function setIcon(div, path) {
  let iconContainer = document.createElement("div");
  iconContainer.className = "propIcon";
  let icon = document.createElement("img");
  icon.src = path;
  iconContainer.appendChild(icon);
  div.appendChild(iconContainer);
}

function noIcon(div) {
  let iconContainer = document.createElement("div");
  iconContainer.className = "propIcon";
  div.appendChild(iconContainer);
}

function setLabel(div, labelName) {
  let label = document.createElement("div");
  label.className = "propLabel";
  translation.ui(label, labelName);
  div.appendChild(label);
}

function setLabelSummary(div, labelName) {
  let label = document.createElement("details");
  label.className = "propSummary";
  let summary = document.createElement("summary");
  label.appendChild(summary);
  translation.ui(summary, labelName);
  div.appendChild(label);
  return label;
}

function setValue(div, valueFn) {
  let value = document.createElement("div");
  value.className = "propValue";
  valueFn(value);
  div.appendChild(value);
}

export function line(div, iconPath, labelName, valueFn) {
  setIcon(div, iconPath);
  setLabel(div, labelName);
  setValue(div, valueFn);
}

export function summary(div, labelName, valueFn, array) {
  let summary = setLabelSummary(div, labelName);
  setValue(div, valueFn);
  let list = document.createElement("div");
  summary.appendChild(list);
  list.className = "detailsGrid";
  for (const detail of array) {
    line(list, detail.icon, detail.label, detail.value);
  }
}

