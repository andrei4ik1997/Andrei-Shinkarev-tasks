interface Params {
  divClass: string;
  innerText: string | number;
  parentDiv?: string;
}

export function createDiv(params: Params): void {
  const { divClass = "", innerText = "", parentDiv = "calendar__days" } = params;
  const divElem: HTMLElement = document.createElement("div");
  divElem.className = divClass;
  divElem.innerText = String(innerText);
  document.querySelector(`.${parentDiv}`).append(divElem);
}
