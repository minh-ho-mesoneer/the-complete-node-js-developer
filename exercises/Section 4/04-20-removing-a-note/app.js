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
  handler: (argv) => {
    NoteService.addNote(argv.title, argv.body);
  },
});

// Create remove command

// Challenge: Setup command option and function
// 1. Setup the remove command to take a required "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title="<some title>"

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
  handler: function (argv) {
    NoteService.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  description: "List all notes",
  handler: function () {
    console.log("Listing out all notes...");
  },
});

// Create read command

yargs.command({
  command: "read",
  description: "Read a note",
  handler: function () {
    console.log("Reading a note...");
  },
});

yargs.parse();
