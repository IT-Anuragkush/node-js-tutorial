const fs = require("fs");

fs.readFile("data.xsl", "utf8", (err, data)=>{
  if(data){
    console.log("read file successfully : ", data);
  }else{
    console.log("error in read file", err);
  }
})