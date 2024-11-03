const fs = require("fs");

const getNotes = function () {
  return fs.readFileSync("./notes.txt").toString("utf-8");
};

module.exports = getNotes;
