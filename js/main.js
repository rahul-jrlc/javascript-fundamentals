// OOP
// COMBINE GROUP OF RELATED VARIABLES AND FUNCTIONS IN A UNIT
// UNIT -OBJECT, VARIABLES - PROPERTY, FUNCTIONS - METHODS

const baseSalary = 30000;
const overtime = 20;
const rate = 20;

// HAVE TO PASS PARAMETERS IN FUNCTION HERE
function getWage(cashInHand, overtime, rate) { // PROCEDURAL
    return cashInHand + (overtime * rate);
};

// ENCAPSULATION - COMBINING VARIABLES AND RELATED FUNCTIONS INTO A SINGLE UNIT, AN OBJECT
const employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function () { // EVALUATES TO WHATEVER IS RETURNED
        return this.baseSalary + (this.overtime * this.rate);
    }
};
const ctc = employee.getWage();
console.log(`ctc of employee is ${ctc}.`);