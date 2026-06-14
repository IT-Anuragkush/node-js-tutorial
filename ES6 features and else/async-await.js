// async await is not version of ES6
console.log("process1")
console.log("process2")

// async await
async function fatchData()
{
  const responce = await new Promise( (resolve, reject)=>{
    setTimeout( ()=> resolve('data fatch!'), 2000) 
  })
  console.log(responce)
}

fatchData();

console.log("process3")
console.log("process4")