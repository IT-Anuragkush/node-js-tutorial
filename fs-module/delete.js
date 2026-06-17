const fs = require("fs");

// it delete any type of file(.xsl, .html, .c etc) not even txt 
fs.unlink("./data1.txt", (err)=>{
  if(err){
    console.log("file not deleted for this error", err);
  }
  else{
    console.log("file deleted successfully");
  }
})