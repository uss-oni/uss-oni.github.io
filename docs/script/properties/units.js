import * as degrees from "./degrees.js"
import * as image from "../img.js"
import * as translation from "../../lang/lang.js"

export function none(value) {
  return (div) => {
    var v = document.createTextNode(value);
    div.appendChild(v);
  }
}

export function kg(value) {
  return (div) => {
    var v = document.createTextNode(value + " kg");
    div.appendChild(v);
  }
}

export function kgs(value) {
  return (div) => {
    value *= 600;
    value = Number(value.toFixed(3));
    var v = document.createTextNode(value + " kg/peuchy");
    div.appendChild(v);
  }
}

export function dtugc(value) {
  return (div) => {
    var v = document.createElement("span");
    degrees.fuuuuuuurenheit(v, value);
    div.appendChild(v);
    var text = document.createTextNode(" (DTU/g)/");
    var unit = document.createElement("span");
    unit.dataset.degtext = "";
    unit.textContent = degrees.currentDegree;
    div.appendChild(text);
    div.appendChild(unit);
  }
}

export function dtumsc(value) {
  return (div) => {
    var v = document.createElement("span");
    degrees.fuuuuuuurenheit(v, value);
    div.appendChild(v);
    var text = document.createTextNode(" (DTU/(m.s))/");
    var unit = document.createElement("span");
    unit.dataset.degtext = "";
    unit.textContent = degrees.currentDegree;
    div.appendChild(text);
    div.appendChild(unit);
  }
}

export function temperature(value) {
  return (div) => {
    var v = document.createElement("span");
    degrees.convertDegree(v, value);
    var text = document.createTextNode(" ");
    var unit = document.createElement("span");
    unit.dataset.degtext = "";
    unit.textContent = " " + degrees.currentDegree;
    div.appendChild(v);
    div.appendChild(text);
    div.appendChild(unit);
  }
}

export function element(value) {
  return (div) => {
    var img = document.createElement("img");
    img.src = image.image(value).path();
    img.className = "propIconRight";
    var name = document.createElement("div");
    translation.text(name, value);
    name.className = "propElement";
    div.appendChild(img);
    div.appendChild(name);
  }
}

export function gmol(value) {
  return (div) => {
    let v = document.createTextNode(value + " g/mol");
    div.appendChild(v);
  }
}

export function percent(value) {
  return (div) => {
    let v = document.createTextNode(Number((value * 100).toFixed(3)) + " %");
    div.appendChild(v);
  }
}

export function kcal(value) {
  return (div) => {
    let v = document.createTextNode(value / 1000 + " kcal");
    div.appendChild(v);
  }
}

export function time(value) {
  return (div) => {
    if (value > 0) {
      let v = document.createTextNode(value / 600 + " cycles");
      div.appendChild(v);
    }
    else {
      let v = document.createTextNode(translationUI["infinite"]);
      div.appendChild(v);
    }
  }
}

export function time2(value1, value2) {
  return (div) => {
    if (value1 > 0) {
      let v = document.createTextNode(value1 / 600 + " / ");
      div.appendChild(v);
    }
    else {
      let v = document.createTextNode(translationUI["infinite"] + " / ");
      div.appendChild(v);
    }
    if (value2 > 0) {
      let v = document.createTextNode(value2 / 600 + " cycles");
      div.appendChild(v);
    }
    else {
      let v = document.createTextNode(translationUI["infinite"]);
      div.appendChild(v);
    }
  }
}

export function entityKg(tag, amount) {
  return (div) => {
    element(tag)(div);
    kg(amount)(div);
  }
}

export function peuchy(value) {
  return (div) => {
    if (value > 0) {
      let v = document.createTextNode(value / 600 + " peuchy");
      div.appendChild(v);
    }
    else {
      let v = document.createTextNode(translationUI["infinite"]);
      div.appendChild(v);
    }
  }
}

export function translate(value) {
  return (div) => {
    translation.ui(div, value);
  }
}