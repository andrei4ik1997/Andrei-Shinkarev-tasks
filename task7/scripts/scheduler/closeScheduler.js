import { makeCalendar } from "../makeCalendar";

export function closeScheduler() {
  const schedulerClose = document.querySelector(".scheduler__close");
  const schedulerModal = document.querySelector(".scheduler");
  
  schedulerClose.addEventListener("click", () => {
    schedulerModal.classList.remove("show");
    makeCalendar();
  });
}
