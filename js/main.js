// CREATE ELEMENT("ELEMENT")
// CREATE TEXT NODE("TEXT")
// APPEND CHILD
// INSERT BEFORE ("ELEMENT", "LOCATION")

const result = document.querySelector("#result");

// create empty element

const bodyDiv = document.createElement("div");

// create text node
const text = document.createTextNode("a simple body div");

//append text node to body div
bodyDiv.appendChild(text);

// APPEND TO BODY IN HTML DOC
// document.body.appendChild(bodyDiv);
document.body.insertBefore(bodyDiv, result);

const heading = document.createElement("h2");
const headingText = document.createTextNode("Dynamic heading");
heading.appendChild(headingText);
heading.classList.add("blue");
// result.appendChild(heading);

console.log(result.children);

// REPLACE CHILD (OLD , NEW)

document.body.replaceChild(h1, heading);