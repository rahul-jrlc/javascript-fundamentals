// GET ELEMENTS BY TAG NAME
// NODE-LIST IS AN ARRAY LIKE OBJECT
// INDEX, LENGTH PROPERTY BUT NOT ARRAY METHODS

const headings = document.getElementsByTagName("h2"); // RETURNS A NODE LIST CONTAINING ALL H2
// console.log(headings); // ARRAY LIKE BUT NOT EXACTLY
headings[0].style.color = "red";
// console.log(headings.length);

const items = document.getElementsByTagName("li");

// items.forEach(function (item) { // WILL NOT WORK, NOT AN ARRAY
//     console.log(item);
// })

items[2].style.color = 'blue';
