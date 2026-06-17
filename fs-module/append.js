const fs = require("fs");

fs.appendFile("data.c", "\nint main(){ \n}", (err, data)=>{
  if(err){
    console.log("error to append file ", err);
  }
  else{
    console.log("data added");
  }
})