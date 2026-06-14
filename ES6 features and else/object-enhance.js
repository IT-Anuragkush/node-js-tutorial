// JavaScript me Object Enhancement (Object Literal Enhancements) ES6 ka feature hai jo object banane ko aur easy aur short bana deta hai.

// // old way
// let name = "Anurag";
// let age = 22;

// let userInfo1 = {
//   name: name,
//   age: age
// };

// console.log(userInfo1);

// // ES6 shorthand
// let name1 = "Anurag";
// let age1 = 22;

// let userInfo = {
//   name1,
//   age1
// };

// console.log(userInfo);



// old way 
let name = "Anurag";
let age = 22;

let user = {
  name: name,
  age: age,
  displayInfo: function() {
    console.log(`Name is ${this.name} age is ${this.age}`);
  }
};

user.displayInfo();
console.log(user.name);
console.log(user.age);

// ES6 shorthand
let firstName = "Anurag";
let city = "Bhopal";

let user1 = {
  firstName,
  city,

  displayInfo() {
    console.log(`${this.firstName} lives in ${this.city}`);
  }
};

user1.displayInfo();
console.log(user1.firstName)
console.log(user1.city)



// variable use like property
let key = "email";

let user2 = {
  [key]: "anurag@gmail.com"
};

console.log(user2);  //  { email: 'anurag@gmail.com' }


// Dynamic Properties
let subject = "JavaScript";

let course = {
  [subject]: "ES6"
};

console.log(course);   // { JavaScript: 'ES6' }


// 
const a = 10;
const b = 20;

const obj = {
  a,
  b,
  greet() {
    console.log('Hello!');
  },
  ['prop' + 1]: 'computed property'
};

console.log(obj);
obj.greet();
