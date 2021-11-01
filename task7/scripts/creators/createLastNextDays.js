export function createLastNextDays(params) {
  const { showLastDays, showNextDays } = params;

  const createrDays = ({ selector }) => {
    const calendarDay = document.querySelectorAll(`${selector}`);
    calendarDay.forEach((day) => {
      day.style.visibility = "hidden";
    });
  };

  if (!showLastDays) {
    createrDays({ selector: ".calendar__day_prev-mounth-day" });
  }
  if (!showNextDays) {
    createrDays({ selector: ".calendar__day_next-mounth-day" });
  }
}
