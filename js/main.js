// OBJECT DATA TYPES- ARRAYS, FUNCTIONS, OBJECTS
// FUNCTIONS- DECLARE, INVOKE
// RETURN
// DEFAULT UNDEFINED, SHORTCUTS, IGNORES AFTER

// 1 INCH = 2.54 CM

const wallHeight = 80;

function calculate(value) {
    // const newValue = value * 2.54;
    return value * 2.54;
    console.log("heheheh"); // AFTER RETURN, EVERYTHING IS IGNORED
}

// ALL FUNCTIONS WILL RETURN UNDEFINED VALUE BY DEFAULT UNLESS SPECIFIED WHAT THE FUNCTION WILL RETURN

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);