import { createNotes } from "../creators/index";
import { month, urlApi } from "../utils/index";
import { Note } from "../interfaces";

export function addNote(): void {
  const addForm: HTMLFormElement = document.querySelector(".scheduler__form");
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formInput: HTMLInputElement = document.querySelector(".form__input");
    const modalDate: HTMLElement = document.querySelector(".scheduler__date");
    const dateString: Array<string> = modalDate.innerText.split(" ");
    const date: Date = new Date(
      +dateString[2],
      month.findIndex((month) => month === dateString[1]),
      +dateString[0]
    );

    const obj: Note = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      value: formInput.value,
    };

    fetch(`${urlApi}/notes`, postMethod(obj))
      .then((res) => res.json())
      .then(() => {
        addForm.reset();
        createNotes(date);
      });
  });
}

const postMethod = (obj: Note) => {
  return {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(obj),
  };
};
