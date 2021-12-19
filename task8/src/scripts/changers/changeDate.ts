import { makeCalendar } from "../makeCalendar";
import { date } from "../../index";

export function changeDate(): void {
  const calendarClock: HTMLElement = document.querySelector(".calendar__clock");
  const calendarDateContainer: HTMLElement = document.querySelector(".calendar__dateContainer");
  const calendarDateControls: HTMLElement = document.querySelector(".calendar__dateControls");

  calendarClock.addEventListener("click", () => {
    date.setDate(new Date().getDate());
    date.setMonth(new Date().getMonth());
    date.setFullYear(new Date().getFullYear());
    makeCalendar();
  });

  calendarDateContainer.addEventListener("change", (e) => {
    const target = e.target as HTMLInputElement;
    const value = +target.value;
    switch (target.dataset.action) {
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
    const target = e.target as HTMLInputElement;
    switch (target.dataset.action) {
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
