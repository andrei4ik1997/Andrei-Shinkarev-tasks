import { makeCalendar } from "../makeCalendar";
import { urlApi } from "../utils/index";

export function changeSettings(): void {
  const settings:HTMLElement = document.querySelector(".settings");

  settings.addEventListener("change", (e) => {
    const target = e.target as HTMLInputElement;
    const { id, checked, value } = target;
    const idValue = id;
    switch (idValue) {
      case "showLastDays":
      case "showNextDays":
      case "scheduler":
        fetchFunc({ idValue, value: checked });
        break;
      case "firstDayWeek":
      case "firstHoliday":
      case "secondHoliday":
        fetchFunc({ idValue, value });
        break;
    }
  });
}

interface Params {
  idValue: string;
  value: any;
}

const putMethod = (params: Params) => {
  const { idValue, value } = params;
  const someData: Object = {
    id: idValue,
    idValue: value,
  };
  return {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(someData),
  };
};

const fetchFunc = (params: Params) => {
  const { idValue, value } = params;
  fetch(`${urlApi}/config/${idValue}`, putMethod({ idValue, value }))
    .then((res) => res.json())
    .then(() => makeCalendar())
};
