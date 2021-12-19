export function createDiv(params) {
  const { divClass = "", innerText = "", parentDiv = "calendar__days" } = params;
  const divElem = document.createElement("div");
  divElem.className = divClass;
  divElem.innerText = innerText;
  document.querySelector(`.${parentDiv}`).append(divElem);
}
