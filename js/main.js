// GLOBAL SCCPE VS LOCAL SCOPE
// ANY VARIABLE OUTSIDE CODE BLOCK{} IS SAID TO BE IN GLOBAL SCOPE
// CAN BE ACCESSED ANYWHERE IN THE PROGRAM
// ISSUES: NAME COLLISIONS, MODIFY BY MISTAKE

let name = "bobo";
name = "peter";
// const name = "jojo";  // NAME COLLISIONS

const name2 = "jojo";

function calculate() {
    // some other code
    console.log(name);
    name = 'orange';
    function inner() {
        name = "inner name";
        console.log(`from inner func: ${name}`);
    }
    inner()
}

calculate();

if (true) {
    // some code 
    console.log(name);
    name = "pants"
}


console.log(`my name is ${name} and i am awesome.`);