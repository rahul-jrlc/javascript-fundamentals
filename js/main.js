// DOM - DOCUMENT OBJECT MODEL

document.body.style.background = "blue"; // SELECTING BODY FROM DOC AND APPLYING STYLE
document.body.style.color = "red";
document.getElementById("button").style.color = "pink";

document.querySelector(".button").style.padding = '100px';

// WINDOW OBJECT
console.log(window);

//RETURNS A NODE OBJECT OR A NODE LIST, WHICH IS AN ARRAY LIKE OBJECT

const button = document.getElementById("button");
const name = button.nodeName;
const css = button.style;

console.log(button);
console.log(name);
console.log(css);