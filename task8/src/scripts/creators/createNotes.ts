import { deleteNote, editNote } from "../scheduler/index";
import { createDiv } from "./index";
import { SpinnerScheduler, urlApi } from "../utils/index";

interface Post {
  id: number;
  year: number;
  month: number;
  day: number;
  value: string;
}

export function createNotes(date: Date): void {
  const spinnerScheduler = new SpinnerScheduler();
  spinnerScheduler.create();
  fetch(`${urlApi}/notes`)
    .then((res) => res.json())
    .then((result) => {
      spinnerScheduler.remove();
      create({ posts: result, date });
    })
}

const create = (params: { posts: []; date: Date }): void => {
  const { posts, date } = params;
  const schedulerNotes:HTMLElement = document.querySelector(".scheduler__notes");
  schedulerNotes.innerHTML = "";
  const filterPosts = posts.filter((item: Post) => {
    return item.year === date.getFullYear() && item.month === date.getMonth() && item.day === date.getDate();
  });

  if (filterPosts.length) {
    filterPosts.forEach((item: Post) => {
      const divElem: HTMLElement = document.createElement("div");
      divElem.className = `scheduler__notes-note note`;
      divElem.id = String(item.id);
      divElem.innerHTML = `<div class="note__text">${item.value}</div>
      <button class="note__icon note__icon_trash">
        <i id=${item.id} class="fas fa-trash" data-action="trash"></i>
      </button>
      <button class="note__icon note__icon_edit">
        <i id=${item.id} class="far fa-edit" data-action="edit"></i>
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
  const notes = document.querySelectorAll(".note");

  notes.forEach((note) => {
    note.addEventListener("click", (e) => {
      const target = e.target as HTMLInputElement;
      switch (target.dataset.action) {
        case "trash":
          deleteNote({ date, id: Number(target.id) });
          break;
        case "edit":
          editNote({ posts, date, id: Number(target.id) });
          break;
      }
    });
  });
};
