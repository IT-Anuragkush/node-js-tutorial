
// console.log("process1")
// console.log("process2")

// promise
const promise = new Promise( (resolve, reject)=>{
  setTimeout( ()=> resolve('Done!'), 2000) 
  // setTimeout( ()=> reject('Done!'), 2000) 
})

promise.then( (result)=> console.log("promise ",result)).catch( (err)=>console.log("Error here", err))

// console.log("process3")
// console.log("process4")