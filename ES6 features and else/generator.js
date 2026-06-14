// Generator Function in JavaScript : 

// Generator ek special function hota hai jo execution ko pause aur resume kar sakta hai.

// Generator function ko function* se define kiya jata hai aur yield keyword use hota hai.

// basic example
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


// example
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function* generatorExample() {
  yield 1;
  yield add(2,3);
  yield sub(2,3);
}

const gen1 = generatorExample();
console.log(gen1.next().value); // 1
console.log(gen1.next().value); // 2
console.log(gen1.next().value); // 2