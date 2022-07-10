// NODE-LIST IS AN ARRAY LIKE OBJECT
// INDEX, LENGTH PROPERTY BUT NOT ARRAY METHODS

// PARENT ELEMENT

const heading = document.querySelector("h2");
// console.log(heading.parentElement.parentElement.parentElement.parentElement);

const parent = heading.parentElement;
parent.style.color = "red";