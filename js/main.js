var firstName = "pinky";
var lastName = "shawty";
var age = 22;
var first = true;
var last = false;
var mkc; // undefined

if (first === last) {
    console.log("not possible");
} else {
    console.log("blah");
    if (age) {
        console.log(age);
    }
}

// TERNARY OPERATOR/STATEMENT -- ALTERNATIVE TO IF - ELSE STATEMENT
(first === last) ? console.log("nope") : console.log("yes");
//condition ------- if true ------------ else