// NODE VALUE
// TEXT CONTENT

const item = document.getElementById("special");
const value = item.firstChild.nodeValue;
// console.log(value); // RETURNS NULL
console.log(item);

const easy = item.textContent;
console.log(easy);