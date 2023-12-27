"use strict";

// o use strict serve para definirmos sempre oq aquela variavel e talz, não só pra isso.

// steps = 100;
// console.log(steps); // -> 100
// steps = 120; // -> 120
// console.log(steps);
// steps = steps + 200;
// console.log(steps); // -> 320


let steps = 100;
console.log(steps); // -> 100
steps = 120; // -> 120
console.log(steps);
steps = steps + 200;
console.log(steps); // -> 320

let counter = 100;
console.log(counter); // -> 100
{
   counter = 200;
   console.log(counter); // -> 200
}
console.log(counter); // -> 200

let counter2 = 100;
console.log(counter2); // -> 100
{
  let counter2 = 200;
  console.log(counter2); // -> 200
}
console.log(counter2); // -> 100
