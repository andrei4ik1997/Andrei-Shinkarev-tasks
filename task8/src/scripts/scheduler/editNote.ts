import { createNotes } from "../creators/index";
import { urlApi } from "../utils/index";
import { Post } from "../interfaces";

export function editNote(params: {
  posts: Array<Post>;
  date: Date;
  id: number;
}) {
  const { posts, date, id } = params;
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const schedulerNotes: HTMLElement =
    document.querySelector(".scheduler__notes");
  const index = posts.findIndex((item: Post) => item.id === +id);
  const editElem: HTMLElement = document.getElementById(String(id));
  editElem.innerHTML = `<input class="note__text" type='text' value=${posts[index].value}>
    <button class="note__icon note__icon_check" >
        <i class="fas fa-check" data-action="check"></i>
    </button>
     <button class="note__icon note__icon_cancel" >
        <i class="fas fa-times" data-action="cancel"></i>
    </button>`;
  const editInput: HTMLInputElement = editElem.querySelector(".note__text");
  editInput.focus();
  editInput.selectionStart = editInput.value.length;

  schedulerNotes.addEventListener("click", (e) => {
    const target = e.target as HTMLInputElement;
    switch (target.dataset.action) {
      case "check":
        fetch(
          `${urlApi}/notes/${id}`,
          putMethod({ id, day, month, year, value: editInput.value })
        )
          .then((res) => res.json())
          .then(() => createNotes(date));
        break;
      case "cancel":
        createNotes(date);
        break;
    }
  });
}

const putMethod = (params: Post) => {
  const { id, value, day, month, year } = params;
  const someData = {
    day,
    month,
    year,
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
