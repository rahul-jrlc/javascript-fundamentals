// REMOVE
// REMOVE CHILD

const result = document.querySelector("#result");
// result.remove(); // DYNAMICALLY REMOVED FROM THE DOM

const heading = result.querySelector("h1");
result.removeChild(heading);