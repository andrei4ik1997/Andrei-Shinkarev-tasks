import { createNotes } from "../creators/index";
import { urlApi } from "../utils/index";

export function deleteNote(params: { date: Date; id: number }) {
  const { date, id } = params;

  fetch(`${urlApi}/notes/${id}`, deleteMethod)
    .then((response) => response.json())
    .then(() => createNotes(date))
}

export function deleteAllNotes() {
  const deleteAll: HTMLElement = document.querySelector(".scheduler__button");

  deleteAll.addEventListener("click", () => {
    const iconTrashAll: Array<HTMLElement> = Array.from(document.querySelectorAll(".fa-trash"));
    iconTrashAll.forEach((elem: HTMLElement) => elem.click());
  });
}

const deleteMethod = {
  method: "DELETE",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};
