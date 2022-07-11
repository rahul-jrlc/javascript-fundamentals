// SELECT ELEMENT
// ADD EVENT LISTENER
// WHAT EVENT, WHAT TO DO

const button = document.querySelector(".button");
const heading = document.querySelector("h2");

button.addEventListener("click", function () {
    console.log("button clicked");
    heading.classList.add("red");
})