// OBJECT DATA TYPES- ARRAYS, FUNCTIONS, OBJECTS
// OBJECTS- KEY/VALUE PAIRS --- METHODS
// DOT NOTATION

const person = {
    name: "john",
    lastName: 'johnny',
    age: 222,
    education: false,
    married: true,
    siblings: ['minu', 'pinky', 'alal'],
    greeting: function sayHello() {
        console.log("my name is pinky");
    }
};

const age = person.age;
console.log(age);

person.name = 'lululu';

console.log(person.name);
console.log(person.siblings[2]);
person.greeting();
