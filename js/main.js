// ARRAY ITERATORS
// FOREACH, MAP, FILTER, FIND, REDUCE
// ITERATE OVER ARRAY, NO FOR LOOP REQUIRED
// ACCEPT CALLBACK FUNCTION AS AN ARGUMENT, CALLS CALLBACK AGAINST EACH ITEM IN AN ARRAY. REFERENCE ITEM IN THE CALLBACK PARAMETER

// const numbers = [0, 1, 2, 3, 4];

// // SHOW ALL NUMBERs

// for (let i = 0; i < numbers.length; i++) {
//     console.log(i);
// }

// FOREACH
// DOES NOT RETURN NEW ARRAY

const people = [
    { name: "lulu", age: 20, position: "developer", id: 1, salary: 200 },
    { name: "pinky", age: 33, position: "designer", id: 2 , salary: 100},
    { name: "montu", age: 77, position: "ceo", id: 3, salary: 500 }
];

// REDUCE
// ITERATES, CALLBACK FUNCTION
// REDUCES TO A SINGLE VALUE - NUMBER, ARRAY, OBJECT
// 1 PARAMETER ('ACC') - TOTAL OF ALL CALCULATIONS
// 2 PARAMETER ('CURR') - CURRENT ITERATION/VALUE


// RETURN VALUE IS THE ACCUMULATED RESULT, 
const total = people.reduce(function (acc, currItem) {
    console.log(`total: ${acc}`);
    console.log(`current money: ${currItem.salary}`);
    acc += currItem.salary
    return acc;
}, 0) // SECOND ARGUMENT 0 IS THE ACC STARTING VALUE

console.log(total);