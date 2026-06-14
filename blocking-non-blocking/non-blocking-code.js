const fs = require('fs');

console.log("process 1");
console.log("process 2");
console.log("process 3");

fs.readFile("./data.txt", 'utf8', (err, data)=>{
  if(err){
    console.log("error", err);
  }
  else{
    console.log("data", data);
  }
});

// setTimeout( ()=>{console.log("hello")}, 2000);

// setTimeout( (a, b)=>{
//   console.log(a + b);
// }, 2000, 10, 20)

console.log("process 4");
console.log("process 5");
console.log("process 6");