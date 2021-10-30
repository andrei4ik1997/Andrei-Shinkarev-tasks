import { createNotes } from "../creators";
import { urlApi } from "../utils";

export function editNote(params) {
  const { posts, date, id } = params;
  const index = posts.findIndex((item) => item.id === +id);
  const editElem = document.getElementById(`${id}`);
  editElem.innerHTML = `<input class="note__text" type='text' value=${posts[index].value}>
    <button class="note__icon note__icon_check">
        <i class="fas fa-check"></i>
    </button>
     <button class="note__icon note__icon_cancel">
        <i class="fas fa-times"></i>
    </button>`;
  const editInput = editElem.firstChild;
  editInput.focus();
  editInput.selectionStart = editInput.value.length;

  const iconsCheck = editElem.querySelectorAll(".fa-check");
  const iconsCancel = editElem.querySelectorAll(".fa-times");

  iconsCheck.forEach((iconCheck) => {
    iconCheck.addEventListener("click", () => {
      fetch(`${urlApi}/notes/${id}`, putMethod({ id, value: editInput.value, date }))
        .then((res) => res.json())
        .then(() => createNotes(date))
        .catch((err) => console.log(err));
    });
  });
  iconsCancel.forEach((iconCancel) => {
    iconCancel.addEventListener("click", () => {
      createNotes(date);
    });
  });
}

const putMethod = (params) => {
  const { id, value, date } = params;
  const someData = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    value,
    id,
  };
  return {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(someData),
  };
};
