const parant = {

  greet(){
    console.log("hello anurag")
  }
}

let child = Object.create(parant);

child.greet();