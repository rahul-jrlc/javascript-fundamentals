// IMPLICIT TYPE CONVERSION

const name = "john";
const lastName = "jordan";
const fullName = name + " " + lastName;
console.log(fullName);

const num1 = 4;
const num2 = 10;
const result = num1 + num2;
console.log(result);

const value = name - lastName;
console.log(value);  // NaN

let num3 = '10';
let num4 = '20';
const result2 = num3 - num4; // IMPLICIT TYPE CONVERSION
console.log(result2);  // SHOWS RESULT AS INTEGER

const result4 = num3 + num4; // NOT ADDED AS INTEGERS, STRING CONCATENATION
console.log(result4);

console.log(10 + "333"); // A STRING