// Realize uma cadeia de conversões: crie um Boolean a partir de um BigInt criado a partir de um Number que foi criado a partir de a String. Comece com o valor "1234". É possível?

//Ha duas formas de serem feitas

// - 01
// let b = Boolean( BigInt(Number("1234")));
// console.log(`${b} [${typeof b}]`);

// or

// - 02
let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let b = Boolean(bi);
console.log(`${b} [${typeof b}]`);