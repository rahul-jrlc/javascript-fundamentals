// WHILE AND DO WHILE

// WHILE LOOP

// while (condition) {
//     statements
// }

// DO WHILE LOOPS

// do {
//     statements
// } while (condition) {

// }

let total = 0;

while (total < 5) { // RUNS IF CONDITION EVALUATES TO TRUE
    total++;

    if (total === 3) {
        // continue;  // NOT RUN ANY CODE, SKIP AND GO TO TOP AND RUN NEXT ITERATION
        break; // BREAKS OUT OF THE LOOP
    }
    console.log(`total = ${total}`);
}

let n = 1000;

do {  // RUNS THE BLOCK OF CODE THAT IS EXECUTED UNTIL WHILE CONDITION IS EVALUATED TO FALSE --- WILL RUN ATLEAST ONCE
    n++;
    console.log(`n is ${n}`);
} while (n < 5);