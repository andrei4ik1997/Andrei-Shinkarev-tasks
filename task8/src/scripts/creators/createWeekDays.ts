import { createDiv } from "./index";
import { weekDays } from "../utils/index";

export function createWeekDays(day: string): void {
  const calendarDaysOfWeek:HTMLElement = document.querySelector(".calendar__daysOfWeek");
  calendarDaysOfWeek.innerHTML = "";

  const createWeekDaysFunc = (array: Array<string>) => {
    array.forEach((day: string) => {
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
      const newWeekDays: Array<string> = [weekDays[1], ...weekDays.slice(2, 7), weekDays[0]];
      createWeekDaysFunc(newWeekDays);
      break;
  }
}
