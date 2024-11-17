const fs = require("fs");
const chalk = require("chalk");

const ERROR_DUPLICATED_TITLE = chalk.red.bold("Error: Title already exists!");
const ERROR_NO_NOTE_FOUND = chalk.red.inverse("Error: No note found!");
const SUCCESS_ADD_NOTE = chalk.green.bold("Success: New note added!");
const SUCCESS_REMOVE_NOTE = chalk.green.inverse(`Success: Note removed!`);
const GET_NOTES_DESCRIPTION = chalk.yellow.inverse("Your notes");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("./notes.json", {});
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", dataJSON);
};

const getNotes = () => {
  return "Your notes...";
};

const listNotes = () => {
  console.log(GET_NOTES_DESCRIPTION);
  const currentNotes = loadNotes();
  currentNotes.forEach((note) => {
    console.log(note.title);
  });
};

const addNote = (title, body) => {
  const currentNotes = loadNotes();
  const isTitleDuplicated = currentNotes.some((note) => note.title === title);

  if (isTitleDuplicated) {
    console.log(ERROR_DUPLICATED_TITLE);
    return;
  } else {
    currentNotes.push({ title: title, body: body });
    saveNotes(currentNotes);
    console.log(SUCCESS_ADD_NOTE);
  }
};

const removeNote = (title) => {
  const currentNotes = loadNotes();
  const keptNotes = currentNotes.filter((note) => note.title !== title);
  const hasRemoved = keptNotes.length < currentNotes.length;

  if (!hasRemoved) {
    console.log(ERROR_NO_NOTE_FOUND);
  } else {
    saveNotes(keptNotes);
    console.log(SUCCESS_REMOVE_NOTE);
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
};
