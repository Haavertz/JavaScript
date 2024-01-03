let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";

console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number


console.log(n1++);

console.log(n1);
n1 = n1 + 1;

console.log(++n1);

n1 = n1 + 1;
console.log(n1);

console.log(0.2 + 0.1);     // 0.30000000000000004
console.log(0.2 * 0.1);     // 0.020000000000000004
console.log(0.3 / 0.1);     // 2.9999999999999996
