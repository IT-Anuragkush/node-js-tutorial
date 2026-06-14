let alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

for (let i = 0; i < alphabet.length; i++) {
  // console.log(alphabet[i]);
  let data = "";
  switch (alphabet[i]) {
    case "a":
      data = "a : apple";
      break;

    case "b":
      data = "b : boy";
      break;

    case "c":
      data = "c : cat";
      break;

    case "d":
      data = "d : dog";
      break;

    case "e":
      data = "e : elephant";
      break;

    case "f":
      data = "f : fan";
      break;

    case "g":
      data = "g : goat";
      break;

    case "h":
      data = "h : hen";
      break;

    case "i":
      data = "i : ice cream";
      break;

    case "j":
      data = "j : jug";
      break;

    case "k":
      data = "k : kite";
      break;

    case "l":
      data = "l : lion";
      break;

    case "m":
      data = "m : monkey";
      break;

    case "n":
      data = "n : nest";
      break;

    case "o":
      data = "o : orange";
      break;

    case "p":
      data = "p : parrot";
      break;

    case "q":
      data = "q : queen";
      break;

    case "r":
      data = "r : rabbit";
      break;

    case "s":
      data = "s : sun";
      break;

    case "t":
      data = "t : tiger";
      break;

    case "u":
      data = "u : umbrella";
      break;

    case "v":
      data = "v : van";
      break;

    case "w":
      data = "w : watch";
      break;

    case "x":
      data = "x : x-ray";
      break;

    case "y":
      data = "y : yak";
      break;

    case "z":
      data = "z : zebra";
      break;

    default:
      data = "Select a valid alphabet";
  }

  console.log(data);
}
