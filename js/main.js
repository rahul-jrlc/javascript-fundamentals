// VARIABLE SCOPE


var firstName = "Pintu"; // GLOBAL VARIABLE-- ACCESSIBLE TO ALL BLOCKS OF CODE

function x() {
    var firstName = "Ginny"; // DECLARED INSIDE FUNCTION --- LOCAL VARIABLE
    console.log(`local variable: ${firstName}`); // FIRST LOOKS FOR VARIABLE IN LOCAL SCOPE
}
x();
console.log(firstName); // WILL LOG THE GLOBAL VARIABLE

y = () => console.log(firstName);
y();  // ACCESSES THE GLOBAL FIRST NAME
