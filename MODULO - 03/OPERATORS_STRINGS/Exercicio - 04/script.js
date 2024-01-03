let year = 10191;
console.log(typeof year); // -> number
console.log(typeof false); // -> boolean

let names = ["Patti", "Bob"];
let name = names[0];
console.log(names instanceof Array); // -> true
console.log(name instanceof Array); // -> false

let user = {
    name: "Alice",
    age: 38
};

console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined

console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob

let name2 = 1 > 2 ? "Alice" : "Bob";
console.log(name2); // -> Bob

let a = 10;
let b = a + 2 * 3;
let c = a + 2  < 20 - 15;
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> false
