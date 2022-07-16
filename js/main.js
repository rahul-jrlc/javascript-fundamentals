// FUNCTIONAL PROGRAMMING
// HIGHER ORDER FUNCTIONS
// FUNCTIONS ARE FIRST CLASS OBJECTS - VALUES JUST LIKE STRINGS OR NUMBERS.
// FUNCTIONS CAN BE ASSIGNED TO VARIABLES OR PASSED INTO OTHER FUNCTIONS(HIGHER ORDER FUNCTIONS)
// RESULT IN SHORTER CODE DUE TO COMPOSITION OF FUNCTIONS, LESS LOGIC

let myArr = [{ name: "bobo", age: 33 },
    { name: "popo", age: 98 },
    { name: "lolo", age: 21 },
    { name: "chintu", age: 65 }];
    
// GET ARRAY OF ALL THE NAMES OF ALL THE ANIMALS
// USING FOR LOOP

let personName = [];
for (let i = 0; i < myArr.length; i++) {
    personName.push(myArr[i].name);
};
console.log(personName);

// USING MAP
// CALLS THE CALLBACK FUNCTION ONCE FOR EACH ELEMENT IN ARRAY, DOES WHATEVER SPECIFIED IN CALLBACK FUNCTION - RETURNS TRANSFORMED OBJECT

let nameOfPerson = myArr.map((value, index, array) => value.name );
console.log(nameOfPerson);
