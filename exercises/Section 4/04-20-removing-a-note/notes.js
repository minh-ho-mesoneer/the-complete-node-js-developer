const fs = require("fs");
const chalk = require("chalk");

const ERROR_DUPLICATED_TITLE = chalk.red.bold("Error: Title already exists!");
const ERROR_NO_NOTE_FOUND = chalk.red.inverse("Error: No note found!");
const SUCCESS_ADD_NOTE = chalk.green.bold("Success: New note added!");
const SUCCESS_REMOVE_NOTE = chalk.green.inverse(`Success: Note removed!`);

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("./notes.json", {});
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", dataJSON);
};

const getNotes = function () {
  return "Your notes ...";
};

const addNote = function (title, body) {
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

// Challenge 1:
// 1. Load existing notes
// 2. Use array filter method to remove matching note (if any)
// 3. Save the newly created array
// 4. Test your work with a title that existed and a title that doesn't exist

// Challenge 2:
// 1. If a note is removed, print `Note removed!` with a green background
// 2. If no note is removed, print `No note found` with a red background

const removeNote = function (title) {
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
};
