// MANIPULATING AND SORTING ARRAYS

var chars = ["montu", "pintu", "tinku", "bobby"]; // CREATE AN EMPTY ARRAY

chars.splice(0, 1, "nEWitem");
        // start, number of items to be removed, new element to be inserted
console.log(chars);

chars.splice(1, 2, "removed 2 items");
console.log(chars);

chars.splice(1, 1, "one", "two");
console.log(chars);

chars.splice(1, 2); // NO NEW ELEMENT INSERTED
console.log(chars);

chars.push("push one");
chars.push("push two");
console.log(chars);

// SORTING

chars.reverse() // REVERSES THE ITEMS IN ARRAY IN PLACE
console.log(chars);

chars.sort();
console.log(chars); // FIRST SORTED UPPERCASE, THEN LOWERCASE

console.log(chars.indexOf("pompom")); // RETURNS -1 IF STR NOT FOUND
console.log(chars.indexOf("push one"));

console.log(chars.lastIndexOf("bobby")); // STARTS FROM END OF LIST