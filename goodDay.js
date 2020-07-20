const emojis = require("./day.js");

let i = emojis.length - 1;

console.clear();
console.log("The Back-ways Emojis");

const goodDay1 = function () {
  console.clear();
  if (i >= 0) {
    console.log(emojis[i]);
    i--;
  }
};

const interval = setInterval(goodDay1, 1000);

const clear = function () {
  // console.log("The Beginning of the End");
  // console.clear();
  clearInterval(interval);
};

setTimeout(clear, 14000);

// module.exports = goodDay;
