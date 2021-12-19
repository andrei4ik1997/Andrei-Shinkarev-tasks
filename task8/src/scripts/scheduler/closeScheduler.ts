import { makeCalendar } from "../makeCalendar";

export function closeScheduler() {
  const schedulerClose: HTMLElement = document.querySelector(".scheduler__close");
  const schedulerModal: HTMLElement = document.querySelector(".scheduler");

  schedulerClose.addEventListener("click", () => {
    schedulerModal.classList.remove("show");
    makeCalendar();
  });
}
