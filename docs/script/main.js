function onChangeSelect(choice) {
  var list = document.getElementById("list");
  list.replaceChildren();
  menuOrder[choice].forEach(subCategory => {
    var title = document.createElement("h3");
    title.textContent = translationUI[subCategory];
    title.dataset.ui = subCategory;
    list.appendChild(title);
    var category = document.createElement("div");
    category.className = "category";
    list.appendChild(category);
    Object.entries(db[choice][subCategory])
          .sort((a, b) => a[1].menuOrder != b[1].menuOrder ?
            a[1].menuOrder - b[1].menuOrder :
            translationTag[a[0]].name.localeCompare(translationTag[b[0]].name))
      .forEach(([tag, _]) => {
        var box = document.createElement("div");
        box.className = "box";
        var img = document.createElement("img");
        img.src = image(tag).path();
        var d = document.createElement("div");
        d.className = "align";
        var p = document.createElement("p");
        if (translationTag[tag] == null)
          p.textContent = tag;
        else
          p.innerHTML = translationTag[tag].name;
        p.dataset.tag = tag;
        d.appendChild(p);
        box.appendChild(img);
        box.appendChild(d);
        category.appendChild(box);
        box.addEventListener("click", () => displayProperties(tag, db[choice][subCategory][tag]));
      });
  });
}


class info {
  tbody;
  add(left, right) {

    this.tbody.appendChild
  };
  constructor(tbody) {
    this.tbody = tbody;
  }
}

function displayProperties(tag, entity) {
  var img = document.getElementById("descimg");
  img.src = image(tag).path();

  var desc = document.getElementById("desc");
  desc.dataset.desc = tag;
  desc.innerHTML = translationTag[tag].desc;

  var properties = document.getElementById("properties");
  properties.replaceChildren();
  var mainTitle = document.createElement("h3");
  mainTitle.textContent = "Properties";
  properties.appendChild(mainTitle);
  recipePhase(properties, tag);
  for (const [prop, fn] of Object.entries(propertiesOrder)) {
    let value = entity[prop];
    if (value != null) {
      fn(properties, prop, value);
    }
  }
  recipeBuilding(properties, tag);
  //recipeTemp(properties, tag);
  //for (const key of Object.keys(recipes)) {
  //  vrac(properties, tag, key);
  //}
}


function init() {
  //favicon();
  setTranslation("fr").then(() => onChangeSelect("Element"));
}

window.addEventListener('DOMContentLoaded', () => init());

function favicon() {
  var link = document.querySelector("link[rel~='icon']");
  link.href = 'images/Favicon/' + [
    'Abe.png',
    'Ada.png',
    'Amari.png',
    'Ari.png',
    'Ashkan.png',
    'Banhi.png',
    'Bubbles.png',
    'Burt.png',
    'Camille.png',
    'Catalina.png',
    'Devon.png',
    'Ellie.png',
    'Frankie.png',
    'Gossmann.png',
    'Gossman.png',
    'Harold.png',
    'Hassan.png',
    'Jean.png',
    'Jorge.png',
    'Joshua.png',
    'Leira.png',
    'Liam.png',
    'Lindsay.png',
    'Mae.png',
    'Marie.png',
    'Max.png',
    'Meep.png',
    'Mi-Ma.png',
    'Nails.png',
    'Nikola.png',
    'Nisbet.png',
    'Otto.png',
    'Pei.png',
    'Quinn.png',
    'Ren.png',
    'Rowan.png',
    'Ruby.png',
    'Steve.png',
    'Stinky.png',
    'Travaldo.png',
    'Turner.png'][Math.floor(Math.random() * 41)];
}
const menuOrder = {
  Element: [
    "Solid",
    "Liquid",
    "Gas",
    "Other",
  ],
  Building: [
    "base",
    "oxygen",
    "power",
    "food",
    "plumbing",
    "hvac",
    "refining",
    "medical",
    "furniture",
    "equipment",
    "utilities",
    "automation",
    "conveyance",
    "rocketry",
    "RocketModule",
    "hep",
    "Gravitas",
    "Quest",
  ],
  Food: [
    "Cooked",
    "Raw",
    "Ingredient",
    "Dehydrated",
  ],
  Critter: [
    "Critter",
    "Baby",
    "Egg",
    "Robot",
  ],
  Plant: [
    "Crop",
    "Forage",
    "Decor",
  ],
  Geyser: [
    "Geyser"
  ],
  Space: [
    "HarvestablePOI",
    "Comet",
    "Shower",
    "ArtifactPOI",
  ],
  Equipment: [
    "Clothes",
    "Suit",
    "Worn",
  ],
  Artifact: [
    "Terrestrial",
    "Space",
    "Any",
    "Quest",
  ],
  Misc: [
    "Medicine",
    "Industrial",
    "Other",
    "Quest",
  ],
  NONE: [
    "NONE"
  ]
}

