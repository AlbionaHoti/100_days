// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// whatever you put next to the arrow it will implicitly return.

// const square = (x) => x * x;

// console.log(square(3));

// Arrow functions as properties on an object

const event = {
  name: 'Birthday Party',
  guestList: ['Albiona', 'Q', 'K'],
  printGuestList() {
    console.log('Guest list for ' + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending the ' + this.name);
    });
  },
};

event.printGuestList();
