let a = true;
console.log(a); // -> true
a &&= false;
console.log(a); // -> false

let b = false;
console.log(b); // -> false
b ||= true;
console.log(b); // -> true


//console.log(2 _ 3 _ 1);       // expected 7  
//console.log(2 _ 4);           // expected 16  
//console.log(5 _ 1);           // expected 5  
//console.log(8 _ 2 _ 5 _ 2);   // expected 39

// -Resposta-
console.log(2 * 3 + 1);
console.log(2 ** 4);
console.log(5 * 1); 
console.log(8 ** 2 - 5 ** 2);


//console.log(4 * 5 _ 20);
//console.log(6 * 5 _ "30");
//console.log(-17 _ 0);  
//console.log(25 _ 1);  
//console.log(2 + 2 * 2 _ 4);

// -Resposta-
console.log(4 * 5 === 20);
console.log(6 * 5 == "30");
console.log(-17 < 0);  
console.log(25 > 1);  
console.log(2 + 2 * 2 != 4);

// console.log(true _ false);  
// console.log(false _ false);  
// console.log(false _ false _ true);  
// console.log(true _ false _ false && true);

// -Resposta-
console.log(true || false);  
console.log(false || ! false);  
console.log(false || false || true);  
console.log(true || false && false && true);