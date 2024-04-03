export var currentDegree = "°C";

export function convertDegree(div, degree) {
  div.textContent = Number((() => {
    switch (currentDegree) {
      case "°C":
        return degree - 273.15;
      case "K":
        return Number(degree);
      case "°F":
        return (degree - 273.15) * 9 / 5 + 32;
    }
  })().toFixed(3));
  div.dataset.pouet = degree;
}

export function fuuuuuuurenheit(div, degree) {
  div.textContent = Number((() => {
    switch (currentDegree) {
      case "°C":
      case "K":
        return Number(degree);
      case "°F":
        return degree / 9 * 5;
    }
  })().toFixed(3));
  div.dataset.pouet = degree;
}

function selectDegree(degree) {
  currentDegree = degree;
  document.querySelectorAll("[data-degtext]").forEach(element =>
    element.textContent = degree
  );
  document.querySelectorAll("[data-deg]").forEach(element =>
    convertDegree(element.dataset.deg)
  );
  document.querySelectorAll("[data-pouet]").forEach(element =>
    fuuuuuuurenheit(element, element.dataset.pouet)
  );
}

window.selectDegree = selectDegree;