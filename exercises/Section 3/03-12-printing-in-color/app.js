// Challenge: Use the chalk library in your project
//
// 1. Install the version 5.3.0 of chalk
// 2. Load the chalk in your app.js
// 3. Use it to print the string 'Success!' to the console in green
// 4. Test your work
//
// Bonus: Use the docs to mess around with other styles. Make it bold and inversed.

// Solution:

const chalk = require("chalk");
const validator = require("validator");

const validateEmail = (input) => {
  return validator.isEmail(input);
};

const validEmail = "minh.ho@mesoneer.com";
const inValidEmail = "minh.ho.com";

if (validateEmail(validEmail)) {
  console.log(
    chalk.bold("Email: ") +
      chalk.inverse.green(validEmail) +
      chalk.green.bold(" is valid!")
  );
}

if (!validateEmail(inValidEmail)) {
  console.log(
    chalk.bold("Email: ") +
      chalk.inverse.red(validEmail) +
      chalk.red.bold(" is not valid!")
  );
}
