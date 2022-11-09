const mainModule = require ("./utilities/main")

const {sum, concat} = require ("./utilities/app")

// imported module from main.js module
const val = [20, 5, 9, 10]
const largeNumber = mainModule.largeNumber(val)
console.log(largeNumber);


const strArray = [".js", ".py", ".ts", ".pdf", ".mp4"]
const cut3 = mainModule.cut3(strArray)
console.log(cut3);

// imported module from app.js module
const arr = [10, 11, 12, 13, 14]
console.log(sum(arr));

let str = ["Java", "Script"]
let str2 = [" is", " dope"]
console.log(concat (str, str2));
