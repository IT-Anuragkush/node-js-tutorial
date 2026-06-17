// write file using fs module

// import fs module

const fs = require("fs");

// fs.writeFileSync('file path', 'data')
fs.writeFileSync("./data1.txt", "Using writeFileSync(): this is text file");

console.log("file created successfully");