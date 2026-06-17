const fs = require("fs");

let responce = fs.readFileSync("data.xsl", "utf8");

console.log(responce);