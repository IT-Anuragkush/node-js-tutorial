// var type - we can declare and initialization
console.log("...var type...");
{
  console.log(a);
  // var a;
  var a = 20; // scope is globle
  console.log(a);
}
console.log(a);
var a = 2.5;
console.log(a);
var a = "Anurag";
console.log(a);

// let type - we can declare and but not initialization
console.log("...let type...");
{
  // console.log(b);  // (X)
  // let b;
  let b = 30;
  console.log(b);
  b = 2.6;
  console.log(b);

  // let b = 75;  //(X)
}
// console.log(b); // (X)

let b = 60;
console.log(b);

// const type  - can not declare and initialization
console.log("....const type...");
{
  // const c;     //(X)
  const c = 30; // block scope
  console.log(c);

  // c = 60;    // (X)
}
c = 50;
console.log(c);


// data types

// primitive data types - number, string, boolean, undefined, null, symbol, BigInt
// number
console.log("-----number datatype-----");
// let a1 = 10;
let a1 = 10.2;
console.log(a1);
console.log(typeof a1); // number

// string
console.log("-----string datatype-----");
let str = "Anurag kushwaha";
console.log("hello", str);
console.log(typeof str);

// boolean
console.log("-----boolean datatype-----");
let isMarried = false;
console.log(isMarried);
console.log(typeof isMarried); // boolean

// undefined
console.log("-----undefined datatype-----");
let b1;
console.log(b1);
console.log(typeof b1); // undefined

// null
console.log("-----Null datatype-----");
let n = null;
console.log(n);
console.log(typeof n); // object  (considered a historical bug in JS)

// Symbol
console.log("-----symbol datatype-----");
let sym = Symbol("abcd");
console.log(sym);
console.log(typeof sym); // symbol

// BigInt
console.log("-----BigInt datatype-----");
let BigValue = 123456789012345678901234678901234567890n;
console.log(BigValue);
console.log(typeof BigValue); // bigInt

// Non primitive data type - Object (object, array, function, Date, RegEx)
//  Object
console.log("-----object datatype-----");
let uInfo = {
  Username: "Anurag",
  Address: "bholaram",
  Mobile: 1234567890,
  Age: 24,
};

console.log(uInfo);
console.log(uInfo.Username);
console.log(uInfo.Address);
console.log(uInfo["Age"]); // or

console.log(typeof uInfo); // object

// Array data type (object)
console.log("-----Array object datatype-----");

let arr = [1, "ram", "indore", "A", 20.56];
console.log(arr);
console.log(Array.isArray(arr)); // true
console.log(arr[0]);
console.log(arr[2]);
console.log(typeof arr); // object
console.log(typeof arr[3]); // string

// function type (object)
console.log("-----function object datatype-----");

const add = (a, b) => {
  // arraw function
  return a + b;
};

function msg(str) {
  // normal function
  return "Hello " + str;
}
console.log(add(10, 20));
console.log(typeof add); // function
console.log(typeof add(10, 20)); // number

console.log(msg("Ram"));
console.log(typeof msg); // function
console.log(typeof msg("Ram")); // string

// Date type
console.log("-----Date object datatype-----");

console.log(Date()); // or  - Ye current date string return karta hai.
let d = new Date();
console.log(d); // Ye actual Date object print karta hai.
console.log(d.getDate());
console.log(typeof d); // object

// RegExpression type
console.log("-----RegExpression object datatype-----");
let RegEx = /^[0-9A-Za-z\s]+$/;
console.log(RegEx);
console.log(typeof RegEx); // object

console.log(RegEx.test("Anurag 123")); // true
console.log(RegEx.test("Hello@123")); // false   // test() - it match
