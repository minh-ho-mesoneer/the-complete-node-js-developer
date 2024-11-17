const yargs = require("yargs");
const NoteService = require("./notes");

//
// Challenge: Write up list command
//
// 1. Create and export listNotes from notes.js
//    - "Your notes" using chalk
//    - Print note title for each note
// 2. Call listNotes from command handler
// 3. Test your work!

yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
    title: {
      describe: "Title of note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note content body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    NoteService.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  description: "Remove a note",
  builder: {
    title: {
      describe: "Remove title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    NoteService.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  description: "List all notes",
  handler() {
    NoteService.listNotes();
  },
});

// Create read command

yargs.command({
  command: "read",
  description: "Read a note",
  handler() {
    console.log("Reading a note...");
  },
});

yargs.parse();
