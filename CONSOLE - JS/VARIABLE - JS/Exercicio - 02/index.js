let height; // -> Uncaught SyntaxError: Identifier 'height' has already been declared
// let height; caso declaremos let uma segunda vez com o mesmo nome de variavel ele ira dar erro
// isso acontece pelo fato do let poder ser declarado com uma variavel definida e o var pode declarar a mesma variavel.

console.log(height);


let anotherHeight = height = 20;
// aqui podemos ver que da para uma variavel recebela outra ao mesmo tempo ser trocada de valor

console.log(anotherHeight);

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

let height2 = 200;
let anotherHeight2 = height2;
let weight;
console.log(height2); // -> 180
console.log(anotherHeight2); // -> 180
weight2 = 70;  
console.log(weight2); // -> 70

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

let height3 = 180;
console.log(height3); // -> 180
console.log("height"); // -> height