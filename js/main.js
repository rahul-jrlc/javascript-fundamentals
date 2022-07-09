// ARRAYS AND FOR LOOPS
// EXERCISE - FULL NAME

const firstNames = ["bob", "tinku", "pinky"];
const lastname = "hidimba";

let newArray = [];

for (let i = 0; i < firstNames.length; i++) {
    let fullName = `${firstNames[i]} ${lastname}`
    newArray.push(fullName)
    // console.log(newArray);
}

console.log(newArray);