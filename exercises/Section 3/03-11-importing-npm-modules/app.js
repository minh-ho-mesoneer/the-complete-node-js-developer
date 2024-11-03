const validator = require("validator");

console.log(validator.isEmail("minh.ho@mesoneer.com")); // true
console.log(validator.isEmail("minh.ho.com")); // false
console.log(validator.isURL("https://minh-ho.com")); // true
