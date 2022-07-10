// NODE-LIST IS AN ARRAY LIKE OBJECT
// INDEX, LENGTH PROPERTY BUT NOT ARRAY METHODS

// CHILD NODES - RETURNS ALL CHILD NODES INCLUDING WHITESPACE WHICH IS TREATED AS A TEXT NODE
// CHILDREN - RETURNS ACTUAL CHILDREN
// FIRST CHILD
// LAST CHILD

const result = document.querySelector("#result");
const allChildren = result.childNodes;
// console.log(allChildren);

const children = result.children; // RETURNS ACTUAL CHILDREN, NO WHITESPACE
console.log(children);

console.log(result.firstChild);
console.log(result.lastChild);