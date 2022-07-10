// NODE-LIST IS AN ARRAY LIKE OBJECT
// INDEX, LENGTH PROPERTY BUT NOT ARRAY METHODS

// QUERY SELECTOR - SELECTS SINGLE
// QUERY SELECTOR ALL - SELECTS ALL - CAN USE FOR EACH


const result = document.querySelector("#result");
result.style.background = "blue";

const item = document.querySelector(".special"); // SELECTS FIRST INSTANCE OF QUERY(CLASS)
console.log(item);

const lastItem = document.querySelector("li:last-child"); // SELECTS LAST CHILD OF LI
console.log(lastItem);

const list = document.querySelectorAll(".special");// SELECTS EVERY INSTANCE OF QUERY(CLASS), PUTS INSIDE NODE LIST
console.log(list);

list.forEach(function (item) {
    console.log(item);
    item.style.color = "yellow";
})