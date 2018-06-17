var v1;
var v2;
var ans

window.onload = function createStuff() {
    v1 = document.getElementById("value1");
    v2 = document.getElementById("value2");
    ans = document.getElementById("answer");
}

function add() {
    ans.innerHTML = +v1.value + +v2.value;
}

function subtract() {
    ans.innerHTML = v1.value - v2.value
}

function multiply() {
    ans.innerHTML = v1.value * v2.value
}

function divide() {
    ans.innerHTML = v1.value / v2.value
}