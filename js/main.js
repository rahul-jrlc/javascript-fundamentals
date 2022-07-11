// EVENT OBJECT ARGUMENTE, EVT
// INFO ABOUT TRIGGERED EVENT
// EVENT.TYPE
// EVENT.CUURENT TARGET
// THIS KEYWORD
// PREVENT DEFAULT () - PREVENTS DEFAULT BEHAVIOUR

const heading = document.querySelector("h1");
const button = document.querySelector(".button");
const link = document.querySelector("#link")

heading.addEventListener("click", function (event) {
    // console.log(event.currentTarget);
    event.currentTarget.classList.add("blue");
    console.log(this);
});

button.addEventListener("click", function (event) {
    console.log(event.type);
});

link.addEventListener("click", function (e) {
    e.preventDefault();
})