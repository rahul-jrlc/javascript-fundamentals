// ARRAY PROPERTIES AND METHODS

let names = ["john", "bob", "tinku", "pinky", "sujata"];

// LENGTH
console.log(names.length); // PROPERTY
console.log(names[3]);
console.log(names[names.length - 1]); // RETURNS LAST ITEM IN ARRAY

// CONCAT -- COMBINE TWO ARRAYS
const lastNames = ["lulu", "tulu", "bravo", "gupta"];
const allNames = names.concat(lastNames);
console.log(allNames);

// REVERSE ARRAY
console.log(allNames.reverse());
console.log(allNames);  // MODIFIES EXISTING ARRAY

// UNSHIFT - ADD TO BEGINNING OF ARRAY
allNames.unshift("jojojo"); // RUNS IN PLACE, MODIFIES ARRAY
console.log(allNames);

// SHIFT - REMOVES FIRST ITEM FROM ARRAY
allNames.shift();
console.log(allNames);
console.log(allNames.shift()); // RETURNS THE SHIFTED ITEM

// PUSH - APPENDS NEW ELEMENTS TO END OF ARRAY
allNames.push('NEW ELEMENT')
console.log(allNames.push("NEW ELEMENT 2")); // RETURNS MODIFIED ARRAY LENGTH
console.log(allNames);

// POP -- REMOVES ITEM FROM END OF ARRAY
allNames.pop();
console.log(allNames);
console.log(names.pop()); // RETURNS POPPED ITEM

// SPLICE - GRAB SPECIFIC ITEMS FROM ARRAY -- MUTATES ORIGINAL ARRAY
allNames.splice(2); // START, NUMBER OF ELEMENTS TO REMOVE
console.log(allNames);

