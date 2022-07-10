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
    { name: "lulu", age: 20, position: "developer", id: 1 },
    { name: "pinky", age: 33, position: "designer", id: 2 },
    { name: "montu", age: 77, position: "ceo", id: 3 }
];

// FIND
// RETURNS SINGLE INSTANCE -(IN THIS CASE, AN OBJECT)
// RETURNS FIRST MATCH, IF NO MATCH UNDEFINED
// GREAT FOR GETTING UNIQUE VALUES

const person = people.find(function (person) {
    return person.id === 2;
})

console.log(person);

const names = ["kuku", "pintu", "bunny", "kaku"];
console.log(names.find(function(name) {
    return name === "chintu";  // UNDEFINED
}));

const person2 = people.filter(function (person) {
    return person.id === 2;
})
// FILTER WILL RETURN AN ARRAY
console.log(person2);
