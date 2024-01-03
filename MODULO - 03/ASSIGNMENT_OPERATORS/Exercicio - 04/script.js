let nr = 0;         // Declaração e atribuição de uma variável nr com valor 0.
let year = 1970;    // Declaração e atribuição de uma variável year com valor 1970.
let name = "Alice"; // Declaração e atribuição de uma variável name com valor "Alice".
let empty = "";     // Declaração e atribuição de uma variável empty com valor de uma string vazia.

console.log(!nr);   // Verifica se nr é falso (zero) e imprime o resultado (true).
console.log(!year); // Verifica se year é falso e imprime o resultado (false).
console.log(!name); // Verifica se name é falso (vazio) e imprime o resultado (false).
console.log(!empty);// Verifica se empty é falso (vazio) e imprime o resultado (true).

console.log(!!nr);  // Converte nr para booleano e imprime o resultado (false).
console.log(!!name);// Converte name para booleano e imprime o resultado (true).

console.log(true && 1991);    // Retorna o segundo operando (1991) porque o primeiro é verdadeiro.
console.log(false && 1991);   // Retorna false porque o primeiro operando é falso.
console.log(2 && 5);          // Retorna o segundo operando (5) porque ambos são verdadeiros.
console.log(0 && 5);          // Retorna 0 porque o primeiro operando é falso.
console.log("Alice" && "Bob");// Retorna "Bob" porque ambos são verdadeiros.
console.log("" && "Bob");     // Retorna uma string vazia porque o primeiro operando é falso.

console.log(true || 1991);    // Retorna true porque o primeiro operando é verdadeiro.
console.log(false || 1991);   // Retorna o segundo operando (1991) porque o primeiro é falso.
console.log(2 || 5);          // Retorna o primeiro operando (2) porque é verdadeiro.
console.log(0 || 5);          // Retorna o segundo operando (5) porque o primeiro é falso.
console.log("Alice" || "Bob");// Retorna "Alice" porque o primeiro operando é verdadeiro.
console.log("" || "Bob");     // Retorna "Bob" porque o primeiro operando é falso.

let x = 0;
let y = 0;
console.log(x++ && y++); // Retorna 0 porque o pós-incremento só ocorre após a verificação.
console.log(x);           // Imprime 1, pois x foi incrementado.
console.log(y);           // Imprime 0, pois y não foi incrementado.
