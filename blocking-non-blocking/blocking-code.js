const fs = require("fs");

console.log("process 1");
console.log("process 2");
console.log("process 3");

let fileData = fs.readFileSync("data.txt", 'utf8');
console.log("file data get using blockingCode", fileData);

console.log("process 4");
console.log("process 5");
console.log("process 6");