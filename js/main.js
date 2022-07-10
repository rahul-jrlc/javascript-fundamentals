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

function showPerson(person) {
    console.log(person.position.toUpperCase());
}

// FOR EACH CALLS THE CALLBACK FUNCTION FOR EACH ITEM IN ARRAY ONE TIME
// people.forEach(showPerson); 
people.forEach(function (item) {
    console.log(item.name.toUpperCase());
})