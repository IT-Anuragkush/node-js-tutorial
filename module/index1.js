const {login,  registration, dashboard} = require("./utility/customfun");

let registeredProcess = registration("Anurag");
console.log(registeredProcess);

let loginProcess = login("admin", 12345, dashboard);
console.log(loginProcess);
console.log(loginProcess.msg);