import { Config } from "./interfaces";

export function setSettings(config: Config) {
  const { firstDayWeek, firstHoliday, secondHoliday, showLastDays, showNextDays, scheduler } = config;

  const settingsSelectFirstDay: HTMLInputElement = document.querySelector(".settings__select_first-day");
  const settingsHolidayFirst: HTMLInputElement = document.querySelector(".settings__holidayFirst");
  const settingsHolidaySecond: HTMLInputElement = document.querySelector(".settings__holidaySecond");
  const settingsInputLastDays: HTMLInputElement = document.querySelector(".settings__input_lastDays");
  const settingsInputNextDays: HTMLInputElement = document.querySelector(".settings__input_nextDays");
  const settingsInputScheduler: HTMLInputElement = document.querySelector(".settings__input_scheduler");

  settingsSelectFirstDay.value = firstDayWeek;
  settingsHolidayFirst.value = firstHoliday;
  settingsHolidaySecond.value = secondHoliday;
  settingsInputLastDays.checked = showLastDays;
  settingsInputNextDays.checked = showNextDays;
  settingsInputScheduler.checked = scheduler;
}
