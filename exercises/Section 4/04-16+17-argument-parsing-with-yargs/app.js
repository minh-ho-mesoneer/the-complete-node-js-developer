const yargs = require("yargs");

// Create add command

yargs.command({
  command: "add",
  description: "Add a new note",
  handler: function () {
    console.log("Adding a new note...");
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

console.log(yargs.argv);
