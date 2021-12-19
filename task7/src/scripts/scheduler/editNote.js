import { createNotes } from "../creators";
import { urlApi } from "../utils";

export function editNote(params) {
  const { posts, date, id } = params;
  const schedulerNotes = document.querySelector(".scheduler__notes");
  const index = posts.findIndex((item) => item.id === +id);
  const editElem = document.getElementById(id);
  editElem.innerHTML = `<input class="note__text" type='text' value=${posts[index].value}>
    <button class="note__icon note__icon_check" >
        <i class="fas fa-check" data-action="check"></i>
    </button>
     <button class="note__icon note__icon_cancel" >
        <i class="fas fa-times" data-action="cancel"></i>
    </button>`;
  const editInput = editElem.firstChild;
  editInput.focus();
  editInput.selectionStart = editInput.value.length;

  schedulerNotes.addEventListener("click", (e) => {
    switch (e.target.dataset.action) {
      case "check":
        fetch(`${urlApi}/notes/${id}`, putMethod({ id, value: editInput.value, date }))
          .then((res) => res.json())
          .then(() => createNotes(date))
          .catch((err) => console.log(err));
        break;
      case "cancel":
        createNotes(date);
        break;
    }
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
