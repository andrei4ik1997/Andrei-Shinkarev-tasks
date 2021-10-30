import { createNotes } from "../creators";
import { urlApi } from "../utils";

export function deleteNote(params) {
  const { date, id } = params;

  fetch(`${urlApi}/notes/${id}`, deleteMethod)
    .then((response) => response.json())
    .then(() => createNotes(date))
    .catch((err) => console.log(err));
}

export function deleteAllNotes() {
  const deleteAll = document.querySelector(".delete__button");

  deleteAll.addEventListener("click", () => {
    const iconTrashAll = document.querySelectorAll(".fa-trash");
    iconTrashAll.forEach((elem) => elem.click());
  });
}

const deleteMethod = {
  method: "DELETE",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};
