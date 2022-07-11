// SELECT ELEMENT
// ADD EVENT LISTENER
// WHAT EVENT, WHAT TO DO
// FUNCTION REFERENCE

const button = document.querySelector(".button");
const heading = document.querySelector("h2");

function changeColors() {
    let hasClass = heading.classList.contains("red"); // EITHER TRUE OR FALSE
    if (hasClass) {
        heading.classList.remove("red");
    } else {
        heading.classList.add("red");
    }

};

button.addEventListener("click", changeColors); // CALLBACK FUNCTION AS A REFERENCE