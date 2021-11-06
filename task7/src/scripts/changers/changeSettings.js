import { makeCalendar } from "../makeCalendar";
import { urlApi } from "../utils";

export function changeSettings() {
  const settings = document.querySelector(".settings");

  settings.addEventListener("change", (e) => {
    const { id, checked, value } = e.target;
    switch (id) {
      case "showLastDays":
      case "showNextDays":
      case "scheduler":
        fetchFunc({ id, value: checked });
        break;
      case "firstDayWeek":
      case "firstHoliday":
      case "secondHoliday":
        fetchFunc({ id, value });
        break;
    }
  });
}

const putMethod = (params) => {
  const { idValue, value } = params;
  const someData = {
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

const fetchFunc = ({ id, value }) => {
  fetch(`${urlApi}/config/${id}`, putMethod({ idValue: id, value: value }))
    .then((res) => res.json())
    .then(() => makeCalendar())
    .catch((err) => console.log(err));
};
