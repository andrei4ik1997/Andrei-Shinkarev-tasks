import { makeCalendar } from "../makeCalendar";
import { date } from "../../index";

export function changeDate() {
  const calendarClock = document.querySelector(".calendar__clock");
  const calendarDateContainer = document.querySelector(".calendar__dateContainer");
  const calendarDateControls = document.querySelector(".calendar__dateControls");

  calendarClock.addEventListener("click", () => {
    date.setDate(new Date().getDate());
    date.setMonth(new Date().getMonth());
    date.setFullYear(new Date().getFullYear());
    makeCalendar();
  });

  calendarDateContainer.addEventListener("change", (e) => {
    const value = +e.target.value;
    switch (e.target.dataset.action) {
      case "day":
        date.setDate(value);
        break;
      case "month":
        date.setMonth(value);
        break;
      case "year":
        date.setFullYear(value);
        break;
    }
    makeCalendar();
  });

  calendarDateControls.addEventListener("click", (e) => {
    switch (e.target.dataset.action) {
      case "prevMonth":
        date.setMonth(date.getMonth() + 1);
        makeCalendar();
        break;
      case "nextMonth":
        date.setMonth(date.getMonth() - 1);
        makeCalendar();
        break;
    }
  });
}
