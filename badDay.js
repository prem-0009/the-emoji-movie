// const emojis = require("./day.js");
const emojis = ['💤', '😪', '😀', '😐', '😑', '😒', '😖', '😠', '😈', '😪', '💤']


let i = 0;
//clears everything before starting
console.clear();
console.log("The Emojis present");

let accelerate = 0.90

const badDay = function () {
//clears everything before function begins
  console.clear();
  console.log('emoji all day')
  if (i < emojis.length) {
    console.log(emojis[i]);
    console.log('emoji all night')
    i++;
    
  } 
  //continuous loop with below code else uncomment other comment
  if ( i === emojis.length-1){
    accelerate -= 0.80
      i = 0;
  }
  
//   else {
//     console.clear()
//     console.log("The-End");
    
//   }
};



// const inter = 
setInterval(badDay, 1000*accelerate);

// const clear = function () {
//   clearInterval(inter);
// };

// setTimeout(clear, 15000);
// module.exports = badDay;
