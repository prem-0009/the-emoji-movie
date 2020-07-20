const emojis = require('./day.js');

let i = emojis.length-1;
console.clear();
console.log('The slow back way beginning')
setInterval(() => {
    if ( i >= 0){
        console.clear();
        console.log(emojis[i]);
        i--;
    }else {
        console.clear();
        console.log('The slow beginning of the End')
    }
}, 3000);