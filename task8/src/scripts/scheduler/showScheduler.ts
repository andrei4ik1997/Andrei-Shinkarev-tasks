import { getDate } from "../utils/index";
import { createNotes } from "../creators/index";

export function showScheduler(date: Date) {
  const calendarDays: Array<HTMLElement> = Array.from(document.querySelectorAll(".calendar__day"));
  const modalDate: HTMLElement = document.querySelector(".scheduler__date");
  const scheduler: HTMLElement = document.querySelector(".scheduler");
  let clickDay = null;
  calendarDays.forEach((day) =>
    day.addEventListener("click", (e) => {
      const target = e.target as HTMLInputElement;
      const targetClassList = target.classList;
      scheduler.classList.add("show");
      if ([...targetClassList as any].includes("calendar__day_prev-mounth-day")) {
        clickDay = new Date(date.getFullYear(), date.getMonth() - 1, +target.innerText);
        modalDate.innerText = `${getDate(clickDay)}`;
      } else if ([...targetClassList as any].includes("calendar__day_next-mounth-day")) {
        clickDay = new Date(date.getFullYear(), date.getMonth() + 1, +target.innerText);
        modalDate.innerText = `${getDate(clickDay)}`;
      } else {
        clickDay = new Date(date.getFullYear(), date.getMonth(), +target.innerText);
        modalDate.innerText = `${getDate(clickDay)}`;
      }
      createNotes(clickDay);
    })
  );
}
