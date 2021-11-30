import { ParamsCreateHolidays } from "../interfaces";
import { weekDays } from "../utils/index";

export function createHolidays(params: ParamsCreateHolidays): void {
  const { firstHoliday, secondHoliday, firstDayWeek } = params;
  const calendarDays:HTMLElement = document.querySelector(".calendar__days");
  const calendarDaysChildren: HTMLCollection = calendarDays.children;
  let firstHolidayIndex: number = null;
  let secondHolidayIndex: number = null;

  switch (firstDayWeek) {
    case weekDays[0]:
      firstHolidayIndex = weekDays.findIndex((day) => day === firstHoliday);
      secondHolidayIndex = weekDays.findIndex((day) => day === secondHoliday);
      break;
    case weekDays[1]:
      const newWeekDays = [weekDays[1], ...weekDays.slice(2, 7), weekDays[0]];
      firstHolidayIndex = newWeekDays.findIndex((day) => day === firstHoliday);
      secondHolidayIndex = newWeekDays.findIndex((day) => day === secondHoliday);
      break;
  }

  for (let i = firstHolidayIndex; i < calendarDaysChildren.length; i += 7) {
    calendarDaysChildren[i].classList.add("calendar__day_holiday");
  }
  for (let i = secondHolidayIndex; i < calendarDaysChildren.length; i += 7) {
    calendarDaysChildren[i].classList.add("calendar__day_holiday");
  }
}
