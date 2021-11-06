import { createDiv } from ".";
import { weekDays } from "../utils";

export function createWeekDays(day) {
  const calendarDaysOfWeek = document.querySelector(".calendar__daysOfWeek");
  calendarDaysOfWeek.innerHTML = "";

  const createWeekDaysFunc = (array) => {
    array.forEach((day) => {
      createDiv({
        divClass: "calendar__daysOfWeekDay",
        parentDiv: "calendar__daysOfWeek",
        innerText: day.substr(0, 3),
      });
    });
  };

  switch (day) {
    case weekDays[0]:
      createWeekDaysFunc(weekDays);
      break;
    case weekDays[1]:
      const newWeekDays = [weekDays[1], ...weekDays.slice(2, 7), weekDays[0]];
      createWeekDaysFunc(newWeekDays);
      break;
  }
}
