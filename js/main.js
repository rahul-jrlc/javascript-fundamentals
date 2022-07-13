// ARRAYS

var chars = ["montu", "pintu", "tinku", "bobby"]; // CREATE AN EMPTY ARRAY
console.log(chars);
console.log(chars.length);
console.log(chars[0]);
console.log(chars[chars.length - 1]);

// ADD ITEMS TO ARRAY
chars.push("new1"); // PUSH ADDS NEW ITEMS TO THE END OF THE ARRAY
chars.push("new2");
console.log(chars);

// REMOVE ITEMS FROM ARRAY
chars.pop() // POP REMOVES LAST ITEM FROM ARRAY
console.log(chars);

// ADD TO START OF ARRAY / BOTTOM OF STACK
chars.unshift("newstart1");
chars.unshift("new2");
console.log(chars);

// REMOVE FROM START OF ARRAY
chars.shift();
console.log(chars);

console.log(chars.shift()); // LOGS REMOVED ITEM