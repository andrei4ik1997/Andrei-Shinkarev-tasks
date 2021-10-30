import { makeCalendar } from "../makeCalendar";
import { date } from "../../index";

export function changeDate() {
  const calendarClock = document.querySelector(".calendar__clock");
  const calendarDateDay = document.querySelector(".calendar__dateDay");
  const calendarDateMonth = document.querySelector(".calendar__dateMonth");
  const calendarDateYear = document.querySelector(".calendar__dateYear");
  const calendarDateControlsArrowPrev = document.querySelector(".calendar__dateControlsArrow_prev");
  const calendarDateControlsArrowNext = document.querySelector(".calendar__dateControlsArrow_next");

  calendarClock.addEventListener("click", () => {
    date.setDate(new Date().getDate());
    date.setMonth(new Date().getMonth());
    date.setFullYear(new Date().getFullYear());
    makeCalendar();
  });

  calendarDateDay.addEventListener("change", (e) => {
    date.setDate(+e.target.value);
    date.setMonth(date.getMonth());
    date.setFullYear(date.getFullYear());
    makeCalendar();
  });

  calendarDateMonth.addEventListener("change", (e) => {
    console.log(+e.target.value)
    date.setMonth(+e.target.value);
    makeCalendar();
  });

  calendarDateYear.addEventListener("change", (e) => {
    date.setFullYear(e.target.value);
    makeCalendar();
  });

  calendarDateControlsArrowPrev.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    makeCalendar();
  });

  calendarDateControlsArrowNext.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    makeCalendar();
  });
}
