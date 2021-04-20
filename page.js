// Run this function after the page is loaded
document.addEventListener("DOMContentLoaded", function(){
    console.log("Hello, webpage!")
});


function makeGuitar() {
    console.log("Rock and Roll")

    // Get the element with the id "fireplace"
    let el = document.getElementById("fireplace");

    // Add 20 fire emoji to it
    for (var i = 0; i < 20; i++) {
        el.append("🎸")
    }

    // Also set its color to red
    //el.style.backgroundColor = "whi";
}