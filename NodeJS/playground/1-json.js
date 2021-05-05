const fs = require('fs');

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data);

/*
  The process

  1. We read the file, and we got the binary data
  2. We converted that data into a standard string in JavaScript
  3. We parsed that data into an object 

  and finally we accessed a property from it.
*/

const dataBuffer2 = fs.readFileSync('./data.json');
const dataJSON = dataBuffer2.toString();
const user = JSON.parse(dataJSON);

user.name = 'Albiona';
user.age = 25;
user.planet = 'Jupiter';

const addNewData = JSON.stringify(user);

fs.writeFileSync('data.json', addNewData);

const data = fs.readFileSync('data.json').toString();

console.log(JSON.parse(data));
