function morning(name) {
    // console.log(`good morning bob`);

    return `good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
    return `good afternoon ${name.repeat(3)}`
}

function greet(name, callback) {
    // callback()
    const myName = "john";
    console.log(`Hello ${callback(name)}, my name is ${myName}`);
    
}

greet("pinky", morning);
greet("lulu", afternoon);

// CALLBACK FUNCTIONS, HIGHER ORDER FUNCTIONS, FUNCTIONS AS FIRST CLASS OBJECTS/CITIZENS
// FUNCTIONS ARE FIRST CLASS OBJECTS - STORED IN A VARIABLE(EXPRESSION), PASSED AS AN ARGUMENT TO ANOTHER FUNCTION, RETURN FROM THE FUNCTION (CLOSURE)

// HIGHER ORDER FUNCTIONS - ACCEPTS ANOTHER FUNCTION AS AN ARGUMENT OR RETURNS ANOTHER FUNCTION AS A RESULT

// CALLBACK FUNCTIONS - PASSED TO ANOTHER FUNCTION AS AN ARGUMENT AND EXECUTED INSIDE THAT FUNCTION




// function greetMorning(name) {
//     const myName = "john";
//     console.log(`Good morning ${name}, my name is ${myName}`);
// }

// function greetAfternoon(name) {
//     const myName = "john";
//     console.log(`Good afternoon ${name}, my name is ${myName}`);
// }

// KEEP REPEATING 