// EXERCISE - CALCULATE TOTAL
// FUNCTIONS, RETURN, IF, ARRAYS, FOR LOOP

const gas = [20, 40, 100];
const food = [22, 433, 32];

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        
    }
    if (total > 100) {
        console.log(`PAGAL HAI KYA BHOSDIKE`);
        return total;
    }
    console.log(`GOOD NICE`);
    return total; // RETURN ALLOWS TO ASSIGN FUNCTION RESULT TO A VARIABLE
}

const gasTotal = calculateTotal(gas); 
// INVOKING FUNCTION RETURNED VALUE, ASSIGNED TO VARIABLE
const foodTotal = calculateTotal(food);

console.log(
    {
        gas: gasTotal,
        food: foodTotal
    }
);