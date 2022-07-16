// JSON - JAVASCRIPT OBJECT NOTATION
// LIGHTWEIGHT DATA INTERCHANGE FORMAT
// USED TO SEND DATA BACK AND FORTH TO A SERVER

let person = {
    name: "popo",
    age: 76,
    address: {
        street: 77,
        city: "gurgaon"
    },
    children: ["momo", "lolo"]
};

// console.log(person.children[0]);
// console.log(person.address.city);

let people = [
    { name: "john", age: 23 }, { name: "poiu", age: 31 }, { name: "tom", age: 43 }
];
console.log(people[1].age);

let arr = people.map(function (value, index, array) {
    return value.name;
});
console.log(arr);

// CHANGING OBJECT LITERAL TO A JSON STRING

// let jstr = JSON.stringify(person);
// console.log(jstr);

// TURNING JSON STRING BACK TO OBJECT

// jstr = JSON.parse(jstr);
// console.log(jstr);
