const translations = [
  {fr: "🇫🇷"},
  {en: "🇬🇧"},
]

let translationUI = {};
let translationTag = {};

async function initTranslation() {
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
  const [responseUI, responseTag] = await Promise.all([
    fetch('lang/' + currentTranslation + '/ui.json'),
    fetch('lang/' + currentTranslation + '/translation.json')
  ]);
  translationUI = await responseUI.json();
  translationTag = await responseTag.json();
  document.querySelectorAll("[data-ui]").forEach(element =>
    element.textContent = translationUI[element.dataset.ui]
  );
  document.querySelectorAll("[data-tag]").forEach(element =>
    element.textContent = translationTag[element.dataset.tag].name
  );
  document.querySelectorAll("[data-desc]").forEach(element =>
  element.innerHTML = translationTag[element.dataset.desc].desc
);
}
