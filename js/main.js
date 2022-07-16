// FUNCTIONAL PROGRAMMING
// HIGHER ORDER FUNCTIONS
// FUNCTIONS ARE FIRST CLASS OBJECTS - VALUES JUST LIKE STRINGS OR NUMBERS.
// FUNCTIONS CAN BE ASSIGNED TO VARIABLES OR PASSED INTO OTHER FUNCTIONS(HIGHER ORDER FUNCTIONS)



let triple = function (x) { // CREATE AN ANONYMOUS FUNC, ASSIGN TO A VARIABLE
    return x * 3;
};

let pop = triple;

let myArr = [{ name: "bobo", age: 33 },
    { name: "popo", age: 98 },
    { name: "lolo", age: 21 },
    { name: "chintu", age: 65 }];
    
// FILTER OUT NAMES WITH AGE  GREATER THAN 35
// NORMAL FOR LOOP

let old = [];
for (let i = 0; i < myArr.length; i++) {
    if (myArr[i].age > 35) {
        old.push(myArr[i]);
    } 
};
console.log(old);

// USING FILTER() - HIGHER ORDER FUNCTION THAT ACCEPTS A CALLBACK FUNCTION
// RETURNS TO NEW ARRAY IF RETURN STATEMENT HOLDS TRUE FOR ELEMENT BEING ITERATED
let buddhe = myArr.filter(function (value, index, array) {
    return value.age > 35;
});
console.log(buddhe);

