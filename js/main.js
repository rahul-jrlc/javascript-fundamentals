// OBJECT DATA TYPES- ARRAYS, FUNCTIONS, OBJECTS
// FUNCTIONS- DECLARE, INVOKE
// EXPRESSIONS- ANOTHER WAY TO DEFINE A FUNCTION
// CREATE A VARIABLE, ASSIGN TO FUNCTION(NOT VALUE), USE VAR
// DIFF- HOISTING, USE- ARROW FUNC, LIBRARIES
// 1 INCH = 2.54 CM

// FUNCTOIN DEFINITION/ DECLARATION
function addValues(num1, num2) {
    return num1 + num2;
}

const firstValue = addValues(1, 3);  // INVOKING FUNCTION
const secondValue = addValues(9, 10);


// FUNCTION EXPRESSION
const add = function (num1, num2) { // ANONYMOUS FUNC
    return num1 + num2;
}

// const thirdValue = add(5, 6);

const values = [firstValue, secondValue, add(5,6)];
console.log(values);

const multiply = (n1, n2) => n1 * n2; //ARROW FUNCTIONS(ONLY STORED AS FUNC EXPRESSIONS)