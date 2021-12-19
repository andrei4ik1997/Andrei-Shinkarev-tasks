export function setSettings(config) {
  const { firstDayWeek, firstHoliday, secondHoliday, showLastDays, showNextDays, scheduler } = config;

  const settingsSelectFirstDay = document.querySelector(".settings__select_first-day");
  const settingsHolidayFirst = document.querySelector(".settings__holidayFirst");
  const settingsHolidaySecond = document.querySelector(".settings__holidaySecond");
  const settingsInputLastDays = document.querySelector(".settings__input_lastDays");
  const settingsInputNextDays = document.querySelector(".settings__input_nextDays");
  const settingsInputScheduler = document.querySelector(".settings__input_scheduler");

  settingsSelectFirstDay.value = firstDayWeek;
  settingsHolidayFirst.value = firstHoliday;
  settingsHolidaySecond.value = secondHoliday;
  settingsInputLastDays.checked = showLastDays;
  settingsInputNextDays.checked = showNextDays;
  settingsInputScheduler.checked = scheduler;
}
