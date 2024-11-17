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

// Challenge: Write up read command
//
// 1. Setup --title option for read command
// 2. Create readNote in notes.js
//    - Search for note by title
//    - Find note and print title (styled) and body (plain)
//    - No note found? Print error in red
// 3. Have the command handler call the function
// 4. Test your work by running a couple commands

const readNote = (title) => {
  const currentNotes = loadNotes();
  const note = currentNotes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.cyan.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(ERROR_NO_NOTE_FOUND);
  }
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
  const duplicatedNote = currentNotes.find((note) => note.title === title);

  if (duplicatedNote) {
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
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
