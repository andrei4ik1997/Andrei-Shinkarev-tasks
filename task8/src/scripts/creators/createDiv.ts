import { ParamsCreateDiv } from "../interfaces";

export function createDiv(params: ParamsCreateDiv): void {
  const { divClass = "", innerText = "", parentDiv = "calendar__days" } = params;
  const divElem: HTMLElement = document.createElement("div");
  divElem.className = divClass;
  divElem.innerText = String(innerText);
  document.querySelector(`.${parentDiv}`).append(divElem);
}
