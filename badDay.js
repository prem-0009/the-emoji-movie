// const emojis = require("./day.js");
const emojis = ['💤', '😪', '😀', '😐', '😑', '😒', '😖', '😠', '😈', '😪', '💤']


let i = 0;
//clears everything before starting
console.clear();
console.log("The Emojis present");

let accelerate = 1000

const badDay = function () {
//clears everything before function begins
  console.clear();
  console.log('emoji all day')
  if (i < emojis.length) {
    console.log(emojis[i]);
    console.log(accelerate)//see the value decrease
    console.log('emoji all night')
    i++;
    
  } 
  //continuous loop with below code if and i = 0 ,else uncomment other comment
  if ( i === emojis.length-1){
    accelerate -= 100;
    i = 0;
    setInterval(badDay, accelerate);


  }
  
//   else {
//     console.clear()
//     console.log("The-End");
    
//   }
};



// const inter = 
setInterval(badDay, accelerate);

// const clear = function () {
//   clearInterval(inter);
// };

// setTimeout(clear, 15000);
// module.exports = badDay;
