// create arrow function
let add = (a, b)=>{
  return a + b;
}
// or
let add1 = (a, b)=> a + b;
// or
let add2 = a => a + 10;
// or
let result = ()=> "hello";


console.log(add(10,20));
console.log(add1(10,20));
console.log(add2(10));
console.log(result());

// or

// let a = 10
// let b = 30
console.log( ((a , b)=>{
  return a + b
})(30,50)); 