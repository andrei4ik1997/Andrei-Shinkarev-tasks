import { createDiv } from "./createDiv";
import { weekDays } from "../utils/index";
import { ParamsCreateDay } from "../interfaces";

export function createDays(params: ParamsCreateDay): void {
  const { date, firstDayWeek, restDays, notes } = params;
  const calendarDays:HTMLElement = document.querySelector(".calendar__days");
  const calendarDateDay:HTMLInputElement = document.querySelector(".calendar__dateDay");
  const calendarDateMonth:HTMLInputElement = document.querySelector(".calendar__dateMonth");
  const calendarDateYear:HTMLInputElement = document.querySelector(".calendar__dateYear");
  const currentYear: number = date.getFullYear();
  const currentMonth: number = date.getMonth();
  const currentDay: number = date.getDate();
  const lastDay: number = new Date(currentYear, currentMonth + 1, 0).getDate();
  const prevLastDay: number = new Date(currentYear, currentMonth, 0).getDate();
  const firstDayIndex: number = new Date(currentYear, currentMonth, 0).getDay();
  const lastDayIndex: number = new Date(currentYear, currentMonth + 1, 0).getDay();
  const totalDays: number = lastDay + firstDayIndex;
  const twoWeekInDays: number = 14;
  const oneWeekInDays: number = 7;
  let nextDays: number = null;

  if (totalDays < 35) {
    nextDays = twoWeekInDays - lastDayIndex;
  } else {
    nextDays = oneWeekInDays - lastDayIndex;
  }

  const restDaysInMonth: Array<number> = restDays
    .filter((holiday) => {
      return holiday.month === currentMonth + 1;
    })
    .map((item) => item.day);

  const toDoDaysInMonth: Array<number> = notes
    .filter((item) => {
      return item.month === currentMonth && item.year === currentYear;
    })
    .map((item) => item.day);

  const toDoDaysInPrevMonth: Array<number> = notes
    .filter((item) => {
      return item.month === currentMonth - 1 && item.year === currentYear;
    })
    .map((item) => item.day);

  const toDoDaysInNextMonth: Array<number> = notes
    .filter((item) => {
      return item.month === currentMonth + 1 && item.year === currentYear;
    })
    .map((item) => item.day);

  calendarDays.innerHTML = "";
  calendarDateDay.value = String(currentDay);
  calendarDateMonth.value = String(currentMonth);
  calendarDateYear.value = String(currentYear);

  if (firstDayWeek === weekDays[1]) {
    for (let i = 0; i < firstDayIndex; i++) {
      let number: number = prevLastDay - (firstDayIndex - 1) + i;
      if (toDoDaysInPrevMonth.includes(number)) {
        createDiv({
          divClass: "calendar__day calendar__day_to-do calendar__day_prev-mounth-day ",
          innerText: number,
        });
      } else {
        createDiv({
          divClass: "calendar__day calendar__day_prev-mounth-day",
          innerText: number,
        });
      }
    }

    for (let i = 1; i <= lastDay; i++) {
      if (i === currentDay) {
        if (toDoDaysInMonth.includes(i)) {
          createDiv({
            divClass: "calendar__day calendar__day_today calendar__day_to-do",
            innerText: i,
          });
        } else {
          createDiv({
            divClass: "calendar__day calendar__day_today ",
            innerText: i,
          });
        }
      } else if (toDoDaysInMonth.includes(i)) {
        createDiv({
          divClass: "calendar__day calendar__day_to-do",
          innerText: i,
        });
      } else if (restDaysInMonth.includes(i)) {
        createDiv({
          divClass: "calendar__day calendar__day_holiday",
          innerText: i,
        });
      } else {
        createDiv({
          divClass: "calendar__day",
          innerText: i,
        });
      }
    }

    for (let i = 1; i <= nextDays; i++) {
      if (toDoDaysInNextMonth.includes(i)) {
        createDiv({
          divClass: "calendar__day calendar__day_to-do calendar__day_next-mounth-day ",
          innerText: i,
        });
      } else {
        createDiv({
          divClass: "calendar__day calendar__day_next-mounth-day",
          innerText: i,
        });
      }
    }
  }
  if (firstDayWeek === weekDays[0]) {
    for (let i = 0; i <= firstDayIndex; i++) {
      let number: number = prevLastDay - firstDayIndex + i;
      if (toDoDaysInPrevMonth.includes(number)) {
        createDiv({
          divClass: "calendar__day calendar__day_to-do calendar__day_prev-mounth-day",
          innerText: number,
        });
      } else {
        createDiv({
          divClass: "calendar__day calendar__day_prev-mounth-day",
          innerText: number,
        });
      }
    }

    for (let i = 1; i <= lastDay; i++) {
      if (i === currentDay) {
        if (toDoDaysInMonth.includes(i)) {
          createDiv({
            divClass: "calendar__day calendar__day_today calendar__day_to-do",
            innerText: i,
          });
        } else {
          createDiv({
            divClass: "calendar__day calendar__day_today ",
            innerText: i,
          });
        }
      } else if (toDoDaysInMonth.includes(i)) {
        createDiv({
          divClass: "calendar__day calendar__day_to-do",
          innerText: i,
        });
      } else if (restDaysInMonth.includes(i)) {
        createDiv({
          divClass: "calendar__day calendar__day_holiday",
          innerText: i,
        });
      } else {
        createDiv({
          divClass: "calendar__day",
          innerText: i,
        });
      }
    }

    for (let i = 1; i < nextDays; i++) {
      if (toDoDaysInNextMonth.includes(i)) {
        createDiv({
          divClass: "calendar__day calendar__day_to-do calendar__day_next-mounth-day",
          innerText: i,
        });
      } else {
        createDiv({
          divClass: "calendar__day calendar__day_next-mounth-day",
          innerText: i,
        });
      }
    }
  }
}
