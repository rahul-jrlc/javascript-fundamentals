// VARIABLE LOOKUP
// {} - CODE BLOCK

//DOES NOT WORK THE OPPOSITE WAY

const globalNumber = 5; // GLOBAL SCOPE

function addNum(num1, num2) {
    const globalNumber = 100;
    const result = num1 + num2 + globalNumber; // ENCLOSING SCOPE
    function multiply() {
        const globalNumber = 0; // LOCAL SCOPE
        const multiplyResult = result * globalNumber;
        console.log(multiplyResult);
    }
    multiply()
    return result;
}

console.log(addNum(3, 10));