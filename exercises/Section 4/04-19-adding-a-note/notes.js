const fs = require("fs");
const chalk = require("chalk");

const ERROR_DUPLICATED_TITLE = chalk.red.bold("Error: Title already exists!");
const SUCCESS_ADD_NOTE = chalk.green.bold("Success: New note added!");

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

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};
