// dafault parameter
const greet = (userName = "shubham", age = 30)=>{
  console.log(`hello ${userName} ${age}`);
}

// greet("Anurag", 24);  // Anurag 24
greet();          // shubham 30   