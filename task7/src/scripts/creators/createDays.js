import { createDiv } from ".";
import { weekDays } from "../utils";

export function createDays(params) {
  const { date, firstDayWeek, restDays, notes } = params;
  const calendarDays = document.querySelector(".calendar__days");
  const calendarDateDay = document.querySelector(".calendar__dateDay");
  const calendarDateMonth = document.querySelector(".calendar__dateMonth");
  const calendarDateYear = document.querySelector(".calendar__dateYear");
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 0).getDay();
  const lastDayIndex = new Date(currentYear, currentMonth + 1, 0).getDay();
  const totalDays = lastDay + firstDayIndex;
  const twoWeekInDays = 14;
  const oneWeekInDays = 7
  let nextDays = null;

  if (totalDays < 35) {
    nextDays = twoWeekInDays - lastDayIndex;
  } else {
    nextDays = oneWeekInDays - lastDayIndex;
  }

  const restDaysInMonth = restDays
    .filter((holiday) => {
      return holiday.month === currentMonth + 1;
    })
    .map((item) => item.day);

  const toDoDaysInMonth = notes
    .filter((item) => {
      return item.month === currentMonth && item.year === currentYear;
    })
    .map((item) => item.day);

  const toDoDaysInPrevMonth = notes
    .filter((item) => {
      return item.month === currentMonth - 1 && item.year === currentYear;
    })
    .map((item) => item.day);

  const toDoDaysInNextMonth = notes
    .filter((item) => {
      return item.month === currentMonth + 1 && item.year === currentYear;
    })
    .map((item) => item.day);

  calendarDays.innerHTML = "";
  calendarDateDay.value = currentDay;
  calendarDateMonth.value = currentMonth;
  calendarDateYear.value = currentYear;

  if (firstDayWeek === weekDays[1]) {
    for (let i = 0; i < firstDayIndex; i++) {
      let number = prevLastDay - (firstDayIndex - 1) + i;
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
      let number = prevLastDay - firstDayIndex + i;
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
