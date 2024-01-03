let greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice

let sentence = "Happy New Year ";
let newSentence = sentence + 10191;

console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string

let sentence2 = "Happy New ";
sentence2 += "Year ";
sentence2 += 10191;
console.log(sentence2); // -> Happy New Year 10191
