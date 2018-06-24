var canvas;
var g;
var x = 0;

window.onload = function () {
    canvas = document.getElementById("canvas");
    g = canvas.getContext("2d");
    g.fillStyle = "#000000";
    g.fillRect(0, 0, 100, 100);
    setInterval(update, 1000/60);
}

function update() {
    g.fillRect(x++, 0, 100, 100);
}