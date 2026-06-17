// write file using fs module

// import fs module

const fs = require("fs");

// fs.writeFile('file path', 'data', callback function)

fs.writeFile("./data.txt", "this is text file , write file", (err)=>{
// fs.writeFile("./data.c", "#include <stdio.h>", (err)=>{
// fs.writeFile("./data.cpp", "#include <iostream> \nusing namespace std;", (err)=>{
// fs.writeFile("./data.xsl", "name \t address \t mobile \n Anurag \t bholara \t 2662858765", (err)=>{
  if(err){
    console.log("error in your file", err);
  }
  else{
    console.log("data successfully write");
  }
})