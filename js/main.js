// FUNCTIONAL PROGRAMMING
// HIGHER ORDER FUNCTIONS
// FUNCTIONS ARE FIRST CLASS OBJECTS - VALUES JUST LIKE STRINGS OR NUMBERS.
// FUNCTIONS CAN BE ASSIGNED TO VARIABLES OR PASSED INTO OTHER FUNCTIONS(HIGHER ORDER FUNCTIONS)
// RESULT IN SHORTER CODE DUE TO COMPOSITION OF FUNCTIONS, LESS LOGIC

let myArr = [{ age: 33 },
    { age: 98 },
    { age: 21 },
    { age: 65 }];
    
// GET SUM OF ALL AGES

// USING FOR LOOP

let ageCount = 0;
for (let i = 0; i < myArr.length; i++) {
    ageCount += myArr[i].age;
};
console.log(ageCount);

// USING REDUCE
let totalAge = myArr.reduce(function (prevVal, curVal, index) {
    console.log(prevVal, curVal);
    return prevVal + curVal.age;
}, 0)
console.log(totalAge);