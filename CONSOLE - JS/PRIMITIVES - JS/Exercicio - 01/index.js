let path = "C:\\Windows" - "Windows";
console.log(path); // -> NaN

let test = "100" - "10";
console.log(test); // -> 90
console.log(typeof test); // -> number


let path2 = "C:\\" + "Windows";
console.log(path2); // -> C:\Windows

let test2 = "100" + "10";
console.log(test2); // -> 10010
console.log(typeof test2); // -> string


let country = "Malawi";
let continent = "Africa";
 
let sentence = `${country} is located in ${continent}.`;
console.log(sentence); // -> Malawi is located in Africa.
