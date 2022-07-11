// KEY EVENTS
// KEY PRESS - WHEN KEY IS PRESSED
// KEY DOWN - WHEN KEY IS DOWN
// KEYUP - WHEN KEY IS RELEASED

const nameInput = document.getElementById("name");

// nameInput.addEventListener("keypress", function () {
//     console.log(("pressed a key"));
// })

// nameInput.addEventListener("keydown", function () {
//     console.log(("pressed a key"));
// });

nameInput.addEventListener("keyup", function () {
    // console.dir(nameInput);
    console.log(nameInput.value);
});