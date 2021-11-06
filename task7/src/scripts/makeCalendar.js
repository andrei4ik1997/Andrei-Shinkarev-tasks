import { createHolidays, createWeekDays, createLastNextDays, createDays } from "./creators";
import { showScheduler } from "./scheduler/showScheduler";
import { setSettings } from "./setSettings";
import { getDate, urlApi, SpinnerCalendar } from "./utils";
import { date } from "../index";

export function makeCalendar() {
  const calendarClockDate = document.querySelector(".calendar__clockDate");
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
      const newConfig = Object.fromEntries(arrValues);
      const { firstDayWeek, firstHoliday, secondHoliday, showLastDays, showNextDays, scheduler } = newConfig;

      spinnerCalendar.remove();
      setSettings(newConfig);
      createWeekDays(firstDayWeek);
      createDays({ date, firstDayWeek, restDays, notes });
      createHolidays({ firstHoliday, secondHoliday, firstDayWeek });
      createLastNextDays({ showLastDays, showNextDays });
      scheduler ? showScheduler(date) : null;
    })
    .catch((err) => console.log(err));
}
