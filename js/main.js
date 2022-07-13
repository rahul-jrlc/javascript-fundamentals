// OBJECTS
var dog = {
    name: "lolo",
    type: "dog"
};
var cat = {
    name: "popo",
    type: "cat"
};
console.log(dog);
console.log(cat);

var petNames = ["lolo", "popo"];
console.log(petNames);

var pets = [{  // OBJECT LITERAL
    name: "lolo",
    type: "dog"
}, cat];
console.log(pets);

pets.push({ name: "roxy", type: "dog" });
console.log(pets);

// ADDING PROPERTIES TO OBJECTS
cat.age = 88; // DOT NOTATION
dog["age"] = 100; // BRACKET NOTATION
console.log(pets);

console.log(dog);

pets[0].age = 999;
pets[2]["age"] = 19999;