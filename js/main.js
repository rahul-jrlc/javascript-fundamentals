// FOR LOOPS

var names = ["popo", "lolo", "oloo", "pinky", "montu", "pintu"];
var numNames = names.length;

// INITIALIZE --- TEST -- INCREMENT
for (let i = 0; i < numNames; i++) {
    console.log(names[i]);
};
console.log("--------------------------");
// going backwards
for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
};