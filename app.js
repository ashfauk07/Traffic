var Rlight = document.getElementById("red");
var Ylight = document.getElementById("yellow");
var Glight = document.getElementById("green");

function red_light() {
    reset();
    Rlight.classList.add("red");

}

function yellow_light() {
    reset();
    Ylight.classList.add("yellow");
}

function green_light() {
    reset();
    Glight.classList.add("green");
}
function reset() {
    Rlight.classList.remove("red");
    Ylight.classList.remove("yellow");
    Glight.classList.remove("green");
}