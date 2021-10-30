import { getTime } from "./scripts/utils";
import { makeCalendar } from "./scripts/makeCalendar";
import { scheduler } from "./scripts/scheduler";
import { changeSettings, changeDate } from "./scripts/changers";
import { weather } from "./scripts/weather";
export let date = new Date();

const calendarClockTime = document.querySelector(`.calendar__clockTime`);


makeCalendar();
changeSettings();
changeDate();
scheduler();
weather();

calendarClockTime.innerHTML = getTime(new Date());
setInterval(() => {
  calendarClockTime.innerHTML = getTime(new Date());
}, 1000);
setInterval(() => weather(), 60000);
