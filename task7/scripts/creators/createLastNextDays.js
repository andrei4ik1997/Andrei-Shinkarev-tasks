export function createLastNextDays(params) {
  const { showLastDays, showNextDays } = params;

  const createLastNextDaysFunc = (selector) => {
    const calendarDay = document.querySelectorAll(`${selector}`);
    calendarDay.forEach((day) => {
      day.style.visibility = "hidden";
    });
  };
  if (!showLastDays) {
    createLastNextDaysFunc(".calendar__day_prev-mounth-day");
  }
  if (!showNextDays) {
    createLastNextDaysFunc(".calendar__day_next-mounth-day");
  }
}
