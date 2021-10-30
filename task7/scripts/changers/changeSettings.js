import { makeCalendar } from "../makeCalendar";
import { urlApi } from "../utils";

export function changeSettings() {
  const settingsSelectFirstDay = document.querySelector(".settings__select_first-day");
  const settingsHolidayFirst = document.querySelector(".settings__holidayFirst");
  const settingsHolidaySecond = document.querySelector(".settings__holidaySecond");
  const settingsInputLastDays = document.querySelector(".settings__input_lastDays");
  const settingsInputNextDays = document.querySelector(".settings__input_nextDays");
  const settingsInputScheduler = document.querySelector(".settings__input_scheduler");

  settingsInputLastDays.addEventListener("change", (e) => {
    fetchFuncChecked(e.target);
  });

  settingsInputNextDays.addEventListener("change", (e) => {
    fetchFuncChecked(e.target);
  });

  settingsSelectFirstDay.addEventListener("change", (e) => {
    fetchFuncValue(e.target);
  });

  settingsHolidayFirst.addEventListener("change", (e) => {
    fetchFuncValue(e.target);
  });

  settingsHolidaySecond.addEventListener("change", (e) => {
    fetchFuncValue(e.target);
  });

  settingsInputScheduler.addEventListener("change", (e) => {
    fetchFuncChecked(e.target);
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

const fetchFuncChecked = function (target) {
  const { id, checked } = target;
  fetch(`${urlApi}/config/${id}`, putMethod({ idValue: id, value: checked }))
    .then((res) => res.json())
    .then(() => makeCalendar())
    .catch((err) => console.log(err));
};

const fetchFuncValue = function (target) {
  const { id, value } = target;
  fetch(`${urlApi}/config/${id}`, putMethod({ idValue: id, value: value }))
    .then((res) => res.json())
    .then(() => makeCalendar())
    .catch((err) => console.log(err));
};
