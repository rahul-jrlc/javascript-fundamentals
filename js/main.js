// INNER HTML
// TEXT CONTENT

const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(div.textContent); // GET BACK ONLY THE TEXT
console.log(list.innerHTML); //  GET BACK ENTIRE HTML LINE

const ul = document.createElement("ul");
ul.innerHTML = `<li class="opopop">dynamically added using innerHTML</li>`

document.body.appendChild(ul);

const newVar = document.createElement("p");
newVar.textContent = `dynamically added using text content`
ul.append(newVar);
