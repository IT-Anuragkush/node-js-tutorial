// array destructuring

// var [id, name, address] = [1,"Ram shama", "indore"];
// or
var arr = [1,"Ram shama", "indore"];  // sequence does not matter

var [id, name, address] = arr;

var arr1 = [id, name, address];

console.log(id, name, address);
// or
console.log(id)
console.log(name)
console.log(address)

console.log();

// object destructuring

let myObj = {
  uname : "RAj sharma",
  Age : 23,
  status : true
}

const {status, Age, uname} = myObj;

console.log( uname, Age, status)
// or
console.log(uname)
console.log(Age)
console.log(status)
