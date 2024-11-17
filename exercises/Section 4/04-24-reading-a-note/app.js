const yargs = require("yargs");
const NoteService = require("./notes");

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
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    NoteService.readNote(argv.title);
  },
});

yargs.parse();
