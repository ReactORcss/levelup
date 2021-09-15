let mins = 30;
let secs = mins * 60;
let currentSeconds = 0;
let currentMinutes = 0;

setTimeout(Decrement,1000);

function Decrement() {
    currentMinutes = Math.floor(secs / 60);
    currentSeconds = secs % 60;
    if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
    secs--;
    document.getElementById("timer").innerHTML = currentMinutes + ":" + currentSeconds;
    if(secs !== -1) setTimeout('Decrement()',1000);
}

function showTooltip() {
    document.getElementById("price").title = "Введите номер телефона в формате 89999999999";
}

function removeTooltip() {
    document.getElementById("price").title = "";
}