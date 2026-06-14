// const math = require("./math");
// const {add, sub, multi, divide, mod, power} = require("./math");

// const customFun = require("./utility/customfun");
const {login} = require("./utility/customfun");

// console.log(math.add(10,20));
// console.log(math.sub(10,20));
// console.log(math.multi(10,20));
// console.log(math.divide(10,20));
// console.log(math.mod(10,20));
// console.log(math.power(10,20));

// console.log(add(10,20));
// console.log(sub(10,20));
// console.log(multi(10,20));
// console.log(divide(10,20));
// console.log(mod(10,20));
// console.log(power(10,20));

// let loginProcess = customFun.login("admin", 12345);
// console.log(loginProcess);
// console.log(loginProcess.mag);

let loginProcess = login("admin", 12345);
console.log(loginProcess);
console.log(loginProcess.mag);
