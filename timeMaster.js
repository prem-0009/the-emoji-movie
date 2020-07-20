// const emojis = require("./day.js");
const emojis = [
  "💤",
  "😪",
  "😀",
  "😐",
  "😑",
  "😒",
  "😖",
  "😠",
  "😈",
  "😪",
  "💤",
];

// const badDay = require('./badDay.js');

const command = process.argv[2]
const error = process.argv[3]

let i = 0;
console.clear();

console.log("The Emojis present");

const badDay = function () {
  console.clear();

  if (i < emojis.length) {
    console.log(emojis[i]);
    i++;
  }
   else {
    console.log("The-End");
  }
};

let interval = setInterval(badDay, command);

let clear = function () {
  clearInterval(interval);
};
// command * (emojis.length+2);
const time = setTimeout(clear, command * (emojis.length+2));

// if (command && error) {
//   return 'hi';
// } else if ( command ){
//     console.log(time)
// }
