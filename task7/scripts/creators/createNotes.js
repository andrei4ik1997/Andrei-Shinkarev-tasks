import { deleteNote, editNote } from "../scheduler";
import { createDiv } from ".";
import { SpinnerScheduler, urlApi } from "../utils";

export function createNotes(date) {
  const spinnerScheduler = new SpinnerScheduler();
  spinnerScheduler.create();
  fetch(`${urlApi}/notes`)
    .then((res) => res.json())
    .then((result) => {
      spinnerScheduler.remove();
      create({ posts: result, date });
    })
    .catch((err) => console.log(err));
}

const create = (params) => {
  const { posts, date } = params;
  const schedulerNotes = document.querySelector(".scheduler__notes");
  schedulerNotes.innerHTML = "";
  const filterPosts = posts.filter((item) => {
    return item.year === date.getFullYear() && item.month === date.getMonth() && item.day === date.getDate();
  });

  if (filterPosts.length) {
    filterPosts.forEach((item) => {
      const divElem = document.createElement("div");
      divElem.className = `scheduler__notes-note note`;
      divElem.id = item.id;
      divElem.innerHTML = `<div class="note__text">${item.value}</div>
      <button class="note__icon note__icon_trash">
        <i id=${item.id} class="fas fa-trash"></i>
      </button>
      <button class="note__icon note__icon_edit">
        <i id=${item.id} class="far fa-edit"></i>
      </button>`;
      document.querySelector(".scheduler__notes").append(divElem);
    });
  } else {
    createDiv({
      divClass: "scheduler__notes-empty",
      innerText: "No tasks today",
      parentDiv: "scheduler__notes",
    });
  }
  const iconsTrash = document.querySelectorAll(".fa-trash");
  const iconsEdit = document.querySelectorAll(".fa-edit");

  iconsTrash.forEach((iconTrash) => {
    iconTrash.addEventListener("click", (e) => {
      deleteNote({ date, id: e.target.id });
    });
  });
  iconsEdit.forEach((iconEdit) => {
    iconEdit.addEventListener("click", (e) => {
      editNote({ posts, date, id: e.target.id });
    });
  });
};
