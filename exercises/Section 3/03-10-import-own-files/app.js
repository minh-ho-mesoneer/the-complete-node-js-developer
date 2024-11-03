// Challenge: Define and use a function in a new file
//
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing the message to console

// Solution:

const getNotes = require("./notes.js");

const note = getNotes();

console.log(note);

// require("./utils.js");
// const sum = add(4, -2);
// console.log(name);
