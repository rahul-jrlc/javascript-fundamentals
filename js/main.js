// JSON.STRINGIFY
// JSON.PARSE

const friends = ["jojo", "peter", "bob"];
localStorage.setItem("friends", friends);
localStorage.clear();

// localStorage.setItem("friends", friends); // VALUES STORED AS A STRING, NOT ARRAY

localStorage.setItem("friends", JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[0]);

let fruits;

if (localStorage.getItem("fruits")) {
    fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
    fruits = [];
}

console.log(fruits);
// fruits.push("apple");
fruits.push("banana")
localStorage.setItem("fruits", JSON.stringify(fruits));