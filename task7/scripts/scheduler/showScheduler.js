import { getDate } from "../utils/getDate";
import { createNotes } from "../creators";

export function showScheduler(date) {
  const calendarDays = document.querySelectorAll(".calendar__day");
  const modalDate = document.querySelector(".modal__date");
  const scheduler = document.querySelector(".scheduler");
  let clickDay = null;
  calendarDays.forEach((day) =>
    day.addEventListener("click", (e) => {
      scheduler.classList.add("show");
      if ([...e.target.classList].includes("calendar__day_prev-mounth-day")) {
        clickDay = new Date(date.getFullYear(), date.getMonth() - 1, +e.target.innerText);
        modalDate.innerText = `${getDate(clickDay)}`;
      } else if ([...e.target.classList].includes("calendar__day_next-mounth-day")) {
        clickDay = new Date(date.getFullYear(), date.getMonth() + 1, +e.target.innerText);
        modalDate.innerText = `${getDate(clickDay)}`;
      } else {
        clickDay = new Date(date.getFullYear(), date.getMonth(), +e.target.innerText);
        modalDate.innerText = `${getDate(clickDay)}`;
      }
      createNotes(clickDay);
    })
  );
}
