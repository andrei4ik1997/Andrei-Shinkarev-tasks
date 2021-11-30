export function createLastNextDays(params: { showLastDays: boolean; showNextDays: boolean }): void {
  const { showLastDays, showNextDays } = params;

  const createrDays = (prop: { selector: string }): void => {
    const { selector } = prop;
    const calendarDay: Array<HTMLElement> = Array.from(document.querySelectorAll(`${selector}`));
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
