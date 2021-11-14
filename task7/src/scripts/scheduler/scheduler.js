import { addNote, closeScheduler, deleteAllNotes } from ".";

export function scheduler() {
  addNote();
  deleteAllNotes();
  closeScheduler();
}
