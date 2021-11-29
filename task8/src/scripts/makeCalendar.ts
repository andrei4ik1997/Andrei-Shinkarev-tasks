import {
  createHolidays,
  createWeekDays,
  createLastNextDays,
  createDays,
} from "./creators/index";
import { showScheduler } from "./scheduler/index";
import { setSettings } from "./setSettings";
import { getDate, urlApi, SpinnerCalendar } from "./utils/index";
import { date } from "../index";
import { Config } from "./interfaces";

export function makeCalendar() {
  const calendarClockDate: HTMLElement = document.querySelector(
    ".calendar__clockDate"
  );
  calendarClockDate.innerText = `${getDate(new Date())}`;

  const spinnerCalendar = new SpinnerCalendar();
  spinnerCalendar.create();

  fetch(`${urlApi}/db`)
    .then((response) => response.json())
    .then((result) => {
      const { config, restDays, notes } = result;
      const arrValues = [];
      for (let key in config) {
        let values = Object.values(config[key]);
        arrValues.push(values);
      }
      const newConfig: Config = Object.fromEntries(arrValues);
      const {
        firstDayWeek,
        firstHoliday,
        secondHoliday,
        showLastDays,
        showNextDays,
        scheduler,
      } = newConfig;

      spinnerCalendar.remove();
      setSettings(newConfig);
      createWeekDays(firstDayWeek);
      createDays({ date, firstDayWeek, restDays, notes });
      createHolidays({ firstHoliday, secondHoliday, firstDayWeek });
      createLastNextDays({ showLastDays, showNextDays });
      scheduler ? showScheduler(date) : null;
    });
}
