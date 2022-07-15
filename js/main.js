// FOR EACH LOOP ARRAY - CALLS A CALLBACK FUNCTION ONCE FOR EACH ITEM IN ARRAY

let myArr = ["one", "two", "three", "four", "five", "six", "seven", "eight"];

// CONVERT ALL STRINGS TO UPPERCASE EXCEPT SIX
// CONSOLE LOG THEM
// ANONYMOUS FUNCTION

// CALLBACK FUNCTION HAS THREE ARGUMENTS - current element being processed in the array, index of element(value) in that array, the array forEach was called upon.

myArr.forEach(function (value, index, myArr) {
    // console.log(value);
    if (value !== "six") {
        console.log(value.toUpperCase());

    } else {
        console.log(value);
    }
});