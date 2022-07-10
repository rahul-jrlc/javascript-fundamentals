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
    { name: "lulu", age: 20, position: "developer" },
    { name: "pinky", age: 33, position: "designer" },
    { name: "montu", age: 77, position: "ceo" }
];

// FILTER
// DOES RETURN A NEW ARRAY
// CAN MANIPULATE THE SIZE OF NEW ARRAY
// RETURNS BASED ON CONDITION

// FILTER RETURNS THE ELEMENTS OF AN ARRAY THAT MEET CONDITION SPECIFIED IN CALLBACK FUNCTION
const youngPeople = people.filter(function (person) {
    return person.age <= 23;
})
console.log(youngPeople);

const boss = people.filter(function (person) {
    return person.position === "ceo";
})
console.log(boss);

const job = people.filter(function (person) {
    return person.position === "hr manager";
})
console.log(job); //RETURNS AN EMPTY ARRAY, CONDITION NOT MET