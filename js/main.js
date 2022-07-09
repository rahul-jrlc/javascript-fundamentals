// REFERENCE V/S VALUE
// PRIMITIVE DATA TYPES- STRING, NUMBER, BOOLEAN, UNDEFINED, NULL, SYMBOL
// OBJECT DATA TYPES - ARRAY, FUNCTIONS, OBJECTS
// TYPEOF

// WHEN ASSIGNING PRIMITIVE DATA TYPE VALUE TO A VARIABLE ANY CHANGES MADE ARE MADE DIRECTLY TO THAT VALUE, WITHOUT AFFECTING ORIGINAL VALUE

// WHEN ASSIGNING NON-PRIMITIVE DATA TYPE VALUE TO A VARIABLE IS DONE BY REFERENCE SO ANY CHANGES WILL AFFECT ALL REFERENCES.

const num = 1;
let num2 = num;
num2 = 7;
console.log(`first value is ${num}`);
console.log(`second value is ${num2}`);

let person = {
    name: 'bob'
};
let person2 = person;

person2.name = 'pinky';

console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);