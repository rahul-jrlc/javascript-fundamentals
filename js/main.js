// CURRENT TARGET - ALWAYS REFERS TO THE ELEMENT TO WHICH THE EVENT HANDLER HAS BEEN ATTACHED TO
// TARGET - IDENTIFIES THE ELEMENT ON WHICH THE EVENT OCCURED

const button = document.querySelectorAll(".button");

button.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget);
        // e.currentTarget.style.color = "green"; // ENTIRE BUTTON GOES GREEN
        console.log(e.target);
        e.target.style.color = "green"; // EVENT OCCURS ON NESTED STRONG TAG
    })
})