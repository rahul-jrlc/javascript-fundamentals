// EVENT PROPAGATION
// REFERS TO HOW AN EVENT TRAVELS THROUGH THE DOM (DOM TREE)
// THREE PHASES- EVENT CAPTURING, TARGET, EVENT BUBBLING
// ALLOWS US TO SELECT DYNAMIC ELEMENTS

const container = document.querySelector(".container");
const listItems = document.querySelector(".list-items")

function showBubbling(e) {
    console.log('current target', e.currentTarget);
    console.log(('target', e.target));
    if (e.target.classList.contains("link")) {
        console.log("clicked on link");
    }
}

listItems.addEventListener("click", showBubbling);
// container.addEventListener("click", showBubbling);

// document.addEventListener("click", showBubbling);