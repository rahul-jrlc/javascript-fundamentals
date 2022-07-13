// ARROW FUNCTIONS - ES6
// WORKS BEST IN CALLBACK FUNCTION SCENARIOS
// PARANTHESES AROUND INPUT IF MORE THAN ONE
// CURLY BRACES AROUND FUNCTION BODY IF MORE THAN ONE LINE/COMMAND
// RETURN ONLY NEEDED IF MORE THAN ONE LINE OF CODE

var numbers = [123, 234, 345, 456, 567];
var names = ["lolo", "popo", "lulu", "mono", "tinku", "pinky"];

// SIMPLE FUNCTION SYNTAX
// CREATE A NEW ARAY OF THE VALUES FROM THE ARRAY GREATER THAN 100
let big = numbers.filter(function (item) {
    return item > 100;
});
console.log(big);

// ARROW FUNCTION
let bigA = numbers.filter(item => item > 300);
console.log(bigA);

