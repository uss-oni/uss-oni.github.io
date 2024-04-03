const translations = [
  { fr: "🇫🇷" },
  { en: "🇬🇧" },
]

export let translationUI = {};
export let translationTag = {};

export async function init() {
  let select = document.getElementById("selectTranslation");
  for (const translation of translations) {
    let [value, flag] = Object.entries(translation)[0];
    let opt = document.createElement("option");
    opt.value = value;
    opt.textContent = flag;
    select.appendChild(opt);
  }
  await setTranslation("fr");
}

async function setTranslation(currentTranslation) {
  document.body.setAttribute("lang", currentTranslation);
  const [responseUI, responseTag] = await Promise.all([
    fetch('lang/' + currentTranslation + '/ui.json'),
    fetch('lang/' + currentTranslation + '/translation.json')
  ]);
  translationUI = await responseUI.json();
  translationTag = await responseTag.json();
  document.querySelectorAll("[data-ui]").forEach(element =>
    element.textContent = translationUI[element.dataset.ui]
  );
  document.querySelectorAll("[data-tag]").forEach(element => {
    if (element.parentElement.className != "align") {
      element.textContent = translationTag[element.dataset.tag].name;
    }
    else {
      element.style.hyphens = "";
      element.textContent = translationTag[element.dataset.tag].name.toLowerCase();
      if (element.offsetWidth > 75) {
        element.style.hyphens = "auto";
      }
    }
  });
  document.querySelectorAll("[data-desc]").forEach(element =>
    element.innerHTML = translationTag[element.dataset.desc].desc
  );

}

window.setTranslation = setTranslation;

function Text(div, text) {

}

export function textWithHyphens(div, tag) {
  if (translationTag[tag] == null) {
    div.textContent = tag;
  }
  else {
    div.innerHTML = translationTag[tag].name.toLowerCase();
  }
  div.dataset.tag = tag;
  if (div.offsetWidth > 75) {
    div.style.hyphens = "auto";
  }
}

export function text(div, tag) {
  div.dataset.tag = tag;
  div.innerHTML = translationTag[tag].name;
}

export function desc(div, text) {
  div.dataset.desc = text;
  div.innerHTML = translationTag[text].desc;
}

export function ui(div, text) {
  div.textContent = translationUI[text];
  div.dataset.ui = text;
}