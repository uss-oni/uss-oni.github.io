function simpleLine(unit, icon = null) {
  return (div, name, value) => {
    displayProperty({ div, name, value, unit, icon });
  }
}

function getElementsByTag(tag) {
  var list = [];
  Object.entries(db.Element.Solid).forEach(([elementName, element]) => {
    if (element.tags.includes(tag)) {
      list.push(elementName);
    }
  });
  return list.sort((a, b) => translationTag[a].name.localeCompare(translationTag[b].name));
}

function summaryLine(div, name, value) {
  let props = displayProperty({ div, name, value, unit: type.kg });
  var left = document.createElement("details");
  props.label.replaceWith(left);
  props.imgDiv.remove();
  left.className = "propSummary";
  var summary = document.createElement("summary");
  left.appendChild(summary);
  if (translationUI[name]) {
    summary.innerText = translationUI[name];
  }
  else {
    summary.innerText = translationTag[name].name;
  }
  var d = document.createElement("div");
  left.appendChild(d);
  d.className = "detailsGrid";
  getElementsByTag(name).forEach(element => {
    displayProperty({ div:d, name: element, icon: image(element)});
  });
}

function recipeBuilding(div, name) {
  recipes.Building.forEach(value => {
    if (value.dest == name) {
      var title = document.createElement("h3");
      title.textContent = "Building Materials";
      div.appendChild(title);
      Object.entries(value.origin).forEach(([origin, amount]) => {
        if (getElementsByTag(origin).length <= 1) {
          displayProperty({ div, name: origin, value: amount, icon: image(origin), unit: type.kg });
        }
        else {
          summaryLine(div, origin, amount)
        }
      });
    }
  });
}

function displayProperty({ div = null, icon = null, name = null, value = null, unit = null, temp = null, arrow = null, iconRight = null, element = null, amount = null }) {
  let imgDiv = document.createElement("div");
  imgDiv.className = "propIcon";
  if (icon) {
    let img = document.createElement("img");
    img.src = icon.path(value);
    imgDiv.className = "propIcon";
    imgDiv.appendChild(img);
  }
  div.appendChild(imgDiv);
  let label = document.createElement("div");
  label.className = "propLabel";
  if (translationUI[name]) {
    label.innerText = translationUI[name];
    label.dataset.ui = name;
  }
  else if (translationTag[name]) {
    label.innerText = translationTag[name].name;
    label.dataset.tag = name;
  }
  else {
    label.innerText = name;
  }
  div.appendChild(label);
  if (value) {
    var right = document.createElement("div");
    right.className = "propValue";
    if (unit) {
      unit(right, value);
    }
    else {
      if (translationUI[value]) {
        right.innerText = translationUI[value];
        right.dataset.ui = value;
      }
      else if (translationTag[value]) {
        right.innerText = translationTag[value].name;
        right.dataset.tag = value;
      }
      else {
        right.innerText = value;
      }
    }
    div.appendChild(right);
    return {
      imgDiv,
      label,
      right
    };
  }
}

function displayPhase(div, recipe, icon) {
  var imgDiv = document.createElement("div");
  var img = document.createElement("img");
  img.src = icon.path();
  imgDiv.className = "propIcon";
  imgDiv.style.gridRow = "span " + Object.entries(recipe.dest).length;
  imgDiv.appendChild(img);
  div.appendChild(imgDiv);
  var left = document.createElement("div");
  left.className = "propLabel";
  left.style.gridRow = "span " + Object.entries(recipe.dest).length;
  if (translationUI[recipe.type]) {
    left.innerText = translationUI[recipe.type];
  }
  else {
    left.innerText = recipe.type;
  }
  div.appendChild(left);
  var temp = document.createElement("div");
  temp.className = "propTemp";
  type.temperature(temp, recipe.temp);
  div.appendChild(temp);
  var arrow = document.createElement("div");
  arrow.textContent = "⟶";
  arrow.className = "propArrow";
  div.appendChild(arrow);
  for (const [dest, percent] of Object.entries(recipe.dest)) {
    let img = document.createElement("img");
    img.src = image(dest).path();
    img.className = "propIconRight";
    div.appendChild(img);
    let element = document.createElement("div");
    element.className = "propElement";
    element.textContent = translationTag[dest].name;
    div.appendChild(element);
    if (percent < 1) {
      let perc = document.createElement("div");
      perc.className = "propAmount";
      type.percent(perc, percent);
      div.appendChild(perc);
    }
  }
}

function recipePhase(div, tag) {
  for (const recipe of recipes.Phase) {
    if ((recipe.type == "condensation" || recipe.type == "freezing" || recipe.type == "deposition")
      && recipe.origin == tag) {
      displayPhase(div, recipe, icon("tempDown"))
    }
  }
  for (const recipe of recipes.Phase) {
    if (!(recipe.type == "condensation" || recipe.type == "freezing" || recipe.type == "deposition")
      && recipe.origin == tag) {
      displayPhase(div, recipe, icon("tempUp"))
    }
  }
}

function vrac(div, name, cat) {
  for (const value of recipes[cat]) {
    if (value.origin == name) {
      displayProperty({div, name:value.origin, value:value.dest})
    }
  }
  for (const value of recipes[cat]) {
    if (value.dest == name) {
      displayProperty({div, name:value.origin, value:value.dest})
    }
  }
  for (const value of recipes[cat]) {
    if (Object.keys(value.origin).includes(name)) {
      displayProperty({div, name:value.origin, value:value.dest})
    }
  }
  for (const value of recipes[cat]) {
    if (Object.keys(value.dest).includes(name)) {
      displayProperty({div, name:value.origin, value:value.dest})
    }
  }
}

const type = {
  none: (div, value) => {
    var v = document.createTextNode(value);
    div.appendChild(v);
  },
  kg: (div, value) => {
    var v = document.createTextNode(value + " kg");
    div.appendChild(v);
  },
  dtugc: (div, value) => {
    var v = document.createElement("span");
    v.textContent = fuuuuuuurenheit(value);
    v.dataset.pouet = value;
    var text = document.createTextNode(" (DTU/g)/");
    var unit = document.createElement("span");
    unit.dataset.degtext = "";
    unit.textContent = currentDegree;
    div.appendChild(v);
    div.appendChild(text);
    div.appendChild(unit);
  },
  dtumsc: (div, value) => {
    var v = document.createElement("span");
    v.textContent = fuuuuuuurenheit(value);
    v.dataset.pouet = value;
    var text = document.createTextNode(" (DTU/(m.s))/");
    var unit = document.createElement("span");
    unit.dataset.degtext = "";
    unit.textContent = currentDegree;
    div.appendChild(v);
    div.appendChild(text);
    div.appendChild(unit);
  },
  temperature: (div, value) => {
    var v = document.createElement("span");
    v.textContent = convertDegree(value);
    v.dataset.deg = value;
    var text = document.createTextNode(" ");
    var unit = document.createElement("span");
    unit.dataset.degtext = "";
    unit.textContent = " " + currentDegree;
    div.appendChild(v);
    div.appendChild(text);
    div.appendChild(unit);
  },
  element: (div, value) => {
    var img = document.createElement("img");
    img.src = image(value).path();
    img.className = "smallImg";
    var v = document.createElement("div");
    v.textContent = translationTag[value].name;
    v.dataset.tag = value;
    div.style.display = "flex";
    div.style.paddingBottom = "0px";
    div.appendChild(img);
    div.appendChild(v);
  },
  gmol: (div, value) => {
    var v = document.createTextNode(value + " g/mol");
    div.appendChild(v);
  },
  percent: (div, value) => {
    var v = document.createTextNode(Number((value * 100).toFixed(3)) + " %");
    div.appendChild(v);
  },
  kcal: (div, value) => {
    var v = document.createTextNode(value / 1000 + " kcal");
    div.appendChild(v);
  },
  peuchy: (div, value) => {
    var v = document.createTextNode(value / 600 + " peuchy");
    div.appendChild(v);
  },
}

var currentDegree = "°C";

function convertDegree(degree) {
  return Number((() => {
    switch (currentDegree) {
      case "°C":
        return degree - 273.15;
      case "K":
        return Number(degree);
      case "°F":
        return (degree - 273.15) * 9 / 5 + 32;
    }
  })().toFixed(3))
}

function fuuuuuuurenheit(degree) {
  return Number((() => {
    switch (currentDegree) {
      case "°C":
      case "K":
        return Number(degree);
      case "°F":
        return degree / 9 * 5;
    }
  })().toFixed(3))
}

function selectDegree(degree) {
  currentDegree = degree;
  document.querySelectorAll("[data-degtext]").forEach(element =>
    element.textContent = " " + degree
  );
  document.querySelectorAll("[data-deg]").forEach(element =>
    element.textContent = convertDegree(element.dataset.deg)
  );
  document.querySelectorAll("[data-pouet]").forEach(element =>
    element.textContent = fuuuuuuurenheit(element.dataset.pouet)
  );
}

function image(tag) {
  return {
    path: () => "images/" + tag[0].toUpperCase() + "/" + tag + ".png"
  };
}

function icon(tag) {
  return {
    path: () => "images/Icon/" + tag + ".png"
  };
}

const icon_dig = {
  path: (value) =>
    value < 50 ? icon("digIcon").path() :
      value < 150 ? icon("digIcon_1").path() :
        value < 200 ? icon("digIcon_2").path() :
          icon("digIcon_3").path()
}

const propertiesOrder = {
  shc: simpleLine(type.dtugc, icon("heatflow")),
  thermalConductivity: simpleLine(type.dtumsc, icon("heatflow")),
  molarMass: simpleLine(type.gmol, icon("molarMass")),
  hardness: simpleLine(type.none, icon_dig),
  //  strength: simpleLine(type.none),
  mass: simpleLine(type.kg),
  flow: simpleLine(type.none),
  maxCompression: simpleLine(type.none),
  viscosity: simpleLine(type.none),
  minHorizontalFlow: simpleLine(type.none),
  minVerticalFlow: simpleLine(type.none),
  radiationAbsorptionFactor: simpleLine(type.percent, icon("radiation")),
  massPerUnit: simpleLine(type.none),
  chunkMass: simpleLine(type.none),
  locationRule: simpleLine(type.none),
  rotations: simpleLine(type.none),
  notInRocket: simpleLine(type.none),
  onlyInRocket: simpleLine(type.none),
  generatorWattageRating: simpleLine(type.none),
  battery: simpleLine(type.none),
  externalHeat: simpleLine(type.none),
  internalHeat: simpleLine(type.none),
  height: simpleLine(type.none, icon("size")),
  width: simpleLine(type.none, icon("size")),
  invincible: simpleLine(type.none),
  hp: simpleLine(type.none, icon("hp")),
  lowTempWarning: simpleLine(type.temperature),
  lowTempFatal: simpleLine(type.temperature),
  highTempWarning: simpleLine(type.temperature),
  highTempFatal: simpleLine(type.temperature),
  transparent: simpleLine(type.none),
  repairable: simpleLine(type.none),
  breakable: simpleLine(type.none),
  floodThreshold: simpleLine(type.none),
  entombable: simpleLine(type.none),
  disinfectable: simpleLine(type.none),
  decor: simpleLine(type.none, icon("decor")),
  decorRadius: simpleLine(type.none, icon("decor")),
  primaryElement: simpleLine(type.element),
  //  clearable: simpleLine(type.none),
  surfaceArea: simpleLine(type.none),
  thickness: simpleLine(type.none),
  groundTransferScale: simpleLine(type.none),
  maxRadiation: simpleLine(type.none),
  age: simpleLine(type.none),
  batteryLoss: simpleLine(type.none),
  caloriesMax: simpleLine(type.none),
  caloriesLoss: simpleLine(type.none),
  minLight: simpleLine(type.none),
  carryAmount: simpleLine(type.none),
  destroyOnDamaged: simpleLine(type.none),
  deconstructable: simpleLine(type.none),
  enableable: simpleLine(type.none),
  providesO2: simpleLine(type.none),
  launchRate: simpleLine(type.none),
  radboltDecay: simpleLine(type.none),
  radboltStorage: simpleLine(type.none),
  allowBabies: simpleLine(type.none),
  workTime: simpleLine(type.none),
  lauchSpeed: simpleLine(type.none),
  rotationSpeed: simpleLine(type.none),
  rangeMax: simpleLine(type.none),
  rangeMin: simpleLine(type.none),
  scanningAngle: simpleLine(type.none),
  maxAngle: simpleLine(type.none),
  scanLeft: simpleLine(type.none),
  scanRight: simpleLine(type.none),
  mode: simpleLine(type.none),
  numCapsules: simpleLine(type.none),
  numParticlesToOpen: simpleLine(type.none),
  milkConsummer: simpleLine(type.none),
  lightRange: simpleLine(type.none),
  lightAngle: simpleLine(type.none),
  lightDirection: simpleLine(type.none),
  lightShape: simpleLine(type.none),
  spacePerCritter: simpleLine(type.none),
  incubationRate: simpleLine(type.none),
  timeWaitPlantSeed: simpleLine(type.none),
  timeWaitClimbTree: simpleLine(type.none),
  friends: simpleLine(type.none),
  happy: simpleLine(type.none),
  glum: simpleLine(type.none),
  miserable: simpleLine(type.none),
  quality: simpleLine(type.none),
  calories: simpleLine(type.kcal),
  spoilTime: simpleLine(type.peuchy)
}


