// FOR...IN LOOPS --- USED WHEN LENGTH UNKNOWN -- OBJECTS
var monsters = {
    canada: "sasquatch",
    nepal: "yeti",
    scotland: "loch ness monster"
};
console.log(monsters);
// console.log(monsters.length); // OBJECT

//  var---in--object
for (let key in monsters) {
    // console.log(key);
    // console.log(monsters[key]); // key is the container temporarily holding the properties and associated values
    console.log(`In ${key}, we have the ${monsters[key]}`);
}

// FOR ARRAY
var pets = ["lolo", "popo", "tinku"];
for (let item in pets) {
    
}