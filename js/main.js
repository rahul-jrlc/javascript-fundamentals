// CLICK - FIRES AFTER FULL ACTION OCCURS
// MOUSE EVENTS
// MOUSEUP - BUTTON IS PRESSED
// MOUSEDOWN - BUTTON IS RELEASED
// MOOUSEENTER - MOVED ONTO AN ELEMENT
// MOUSELEAVE - MOVED OUT OF AN ELEMENT

const heading = document.querySelector("h2");
const button = document.querySelector(".button");

button.addEventListener("click", function () {
    console.log("button clicked");
});

button.addEventListener("mousedown", function () {
    console.log("mouse down");
});

button.addEventListener("mouseup", function () {
    console.log("mouse up");
});

const random = document.querySelector(".random");
random.classList.add("design")

random.addEventListener("mouseenter", function () {
    random.style.background = "black";
    random.style.height = "200px";
});

// SET UP ANOTHER CALLBACK FUNCTION FOR MOUSE LEAVE

