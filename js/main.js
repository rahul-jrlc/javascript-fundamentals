// CLASS LIST
// CLASS NAME

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const className = first.className; // CHECK FOR CLASS NAME OF ELEMENT
// console.log(className);

second.className = "text colors";

third.classList.add("colors", "text");
third.classList.remove("colors");
console.log(third.classList);

