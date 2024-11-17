const fs = require("fs");

// const book = {
//   title: "The Road Less Traveled",
//   author: "M. Scott Peck",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const bookJSONString = dataBuffer.toString();

// const book = JSON.parse(bookJSONString);

// console.log(book.title);

// Challenge: Work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file

// Solution:

const originalJSONString = fs.readFileSync("1-json-challenge.json").toString();
const originalObject = JSON.parse(originalJSONString);

const modifiedObject = {
  ...originalObject,
  name: "Modified Name",
  age: 20,
};
const modifiedJSONString = JSON.stringify(modifiedObject);

fs.writeFileSync("1-json-challenge.json", modifiedJSONString);

// Video solution:

const dataBuffer = fs.readFileSync("1-json-challenge.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Modified Name";
user.age = 30;

fs.writeFileSync("1-json-challenge.json", JSON.stringify(user));
