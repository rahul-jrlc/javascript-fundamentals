// GLOBAL SCCPE VS LOCAL SCOPE
// LOCAL SCOPE
// CANNOT BE ACCESSED FROM OUTSIDE CODE BLOCKS
// IF - NOT VAR

let name = "bobo";

// const name = "jojo";  // NAME COLLISIONS

const name2 = "jojo";

function calculate() {
    const name = "john";
    const age = 23;
    // some more code
    becomesGlobal = "GLOBAL VARIABLE";
}


calculate();


console.log(becomesGlobal); // CANNOT ACCESS AGE VARIABLE AS IT IS DEFINED INSIDE A CODE BLOCK- LOCALLY

if (true) {
    const name = "pinky";
}

{
    const name = "kklk";
    const special = "hulu";
}
console.log(special);

console.log(`my name is ${name} and i am awesome.`);