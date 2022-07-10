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

// MAP
// DOES RETURN A NEW ARRAY
// DOES NOT CHANGE SIZE OF ORIGINAL ARRAY
// USES VALUES FROM ORIGINAL ARRAY WHEN MAKING NEW ONE

// MAP CALLS A CALLBACK FUNCTION ON EACH ELEMENT OF AN ARRAY, AND RETURNS THE RESULTS IN A NEW ARRAY
const ages = people.map(function (person) {
    // console.log(person);
    return person.age;
})
const newPeople = people.map(function (person) {
    return {
        firstName: person.name.toUpperCase(),
        oldAge: person.age + 100
    };
})

console.log(newPeople);
console.log(ages);

const names = people.map(function (person) {
    return `<h1>${person.name.toUpperCase()}</h1>`;
})

document.body.innerHTML = names.join('');

console.log(names);