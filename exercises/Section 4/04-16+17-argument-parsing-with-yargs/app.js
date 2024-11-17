const yargs = require("yargs");

// Create add command

// Challenge: Add an option to yargs
//
// 1. Setup a body option for the add command
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body value in the handler function
// 4. Test your work!

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
  handler: function (argv) {
    console.log("Adding a new note...");
    console.log("Title:", argv.title);
    console.log("Body:", argv.body);
  },
});

// Create remove command

yargs.command({
  command: "remove",
  description: "Remove a note",
  handler: function () {
    console.log("Removing a note...");
  },
});

// Challenge: Add two new commands
//
// 1. Setup command to support "list" command (print placeholder message for now).
// 2. Setup command to support "read" command (print placeholder message for now).
// 3. Test your work by running both commands and ensure correct output

// Solution:

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
