import { addNote, closeScheduler, deleteAllNotes } from "./index";

export function scheduler() {
  addNote();
  deleteAllNotes();
  closeScheduler();
}
