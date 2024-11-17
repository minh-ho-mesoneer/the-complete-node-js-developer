// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x;

// console.log(square(5)); // Output: 25

const event = {
  name: "Happy hours",
  guestList: ["Minh Ho", "Tien Le", "Khoi Le"],
  printGuestList() {
    console.log(`Guest list for ${this.name}`);
    this.guestList.forEach(function (guest) {
      console.log(`${guest} is attending ${this.name}`);
    });
  },
};

event.printGuestList();
