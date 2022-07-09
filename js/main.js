// STRING PROPERTIES AND METHODS
// WRAPPER STRING OBJECT, 

let text = "peter peter";
let result = text.length; // PROPERTY
console.log(result);

console.log(text.toLocaleLowerCase()); // CONVERTS STRING TO LOWERCASE
console.log(text.toUpperCase()); // CONVERTS STRING TO UPPERCASE
console.log(text.charAt(2)); // GIVES CHARACTER OF STRING AT SPECIFIED INDEEX
console.log(text.charAt(text.length - 1)); // GIVES LAST CHARACTER OF STRING
console.log(text.indexOf("z")); // NOT IN STRING, LOGS -1
console.log(text.indexOf(" "));
console.log(text.indexOf("r")); // GIVES FIRST INSTANCE 
console.log(text.trim()); // REMOVES ONLY THE LEADING AND TRAILING WHITESPACES
console.log(text.startsWith("peter"));

console.log(text.toLowerCase().startsWith("peter")); // CHAINING METHODS
console.log(text.includes("dragon"));

console.log(text.slice(0, 4)); // RETURNS A SUBSECTION OF STRING (START INDEX, UPTO BUT NOT INCLUDING)
console.log(text.slice(-1));
console.log(text.slice(-2)); // STARTS FROM SECOND LAST CHAR, MOVES TO RIGHT

// console.log(text.length);

// const person = {
//     name: "peter",
//     greeting() {
//         // METHOD
//         console.log("hello i'm peter");
//     }
// };

// console.log(person);
// console.log(person.name);
// console.log(person.greeting);