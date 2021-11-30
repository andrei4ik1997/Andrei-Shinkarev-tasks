import { getTime } from "./scripts/utils/index";
import { makeCalendar } from "./scripts/makeCalendar";
import { scheduler } from "./scripts/scheduler/index";
import { changeSettings, changeDate } from "./scripts/changers/index";
import { weather } from "./scripts/weather/index";
import "./styles/index.scss";
export let date: Date = new Date();

const calendarClockTime: HTMLElement = document.querySelector(`.calendar__clockTime`);

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
