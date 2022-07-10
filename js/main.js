// GET ATTRIBUTE()
// SET ATTRIBUTE()

const first = document.querySelector(".first");
const idName = first.getAttribute("id");
// console.log(idName);

const link = document.getElementById("link");
const showLink = link.getAttribute("href");
console.log(showLink);


const last = link.nextElementSibling;
console.log(last);
last.setAttribute("class", "first");
last.textContent = "also class of first"
console.log(last);



const links = document.querySelector(".first");
console.log(links);