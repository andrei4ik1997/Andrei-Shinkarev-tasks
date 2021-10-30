import { createNotes } from "../creators";
import { month, urlApi } from "../utils";

export function addNote() {
  const addForm = document.querySelector(".scheduler__form");
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formInput = document.querySelector(".form__input");
    const modalDate = document.querySelector(".modal__date");
    const dateString = modalDate.innerText.split(" ");
    const date = new Date(
      +dateString[2],
      month.findIndex((month) => month === dateString[1]),
      +dateString[0]
    );

    const obj = {
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
      })
      .catch((err) => console.log(err));
  });
}

const postMethod = (data) => {
  return {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };
};
