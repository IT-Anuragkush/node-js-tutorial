let arr1 = ["8979876567", "male", "India"];

// rest operator
let arr = [1, "Ram", "Indore", ...arr1];
console.log(arr);

// spread operator
let newArr = [...arr, "Btech AI", "79%", "Software developer"];
console.log(newArr);

// spread operator multiple arr
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];
let d = [...a, ...b, ...c, 10, 11, 12];
console.log(d);

// spread operator using object
let obj = { 
  id: 1, 
  name: "Ram", 
  Age: 25 
};
let obj1 = { 
  orderid: 4356765,
  productName: "Vivo mobile", 
  price: 25000 
};

let result = { ...obj, ...obj1 };
console.log(result);


// rest operator using function
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// or

function userInfo(name, age, ...skills) {
  console.log(name);
  console.log(age);
  console.log(skills);
}

userInfo("Anurag", 22, "JS", "React", "Node");


// Spread and rest in one code
function show(...args) { // Rest
  console.log(args);
}

const num = [1, 2, 3];

show(...num); // Spread

// ...args → Rest Operator (collect kar raha hai)
// ...num → Spread Operator (expand kar raha hai)
// Rule
// Collect kare → Rest
// Expand kare → Spread