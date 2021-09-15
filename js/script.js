// let countDownDate = new Date('Jan 1, 2022 00:00:00').getTime();
// let countDownFunction = setInterval(function () {
//     let now = new Date().getTime();
//     let distance = countDownDate - now;
//     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     document.getElementById('timer').innerHTML = days + 'д ' + hours + 'ч ' + minutes + 'м ' + seconds + 'с ';
//     if (distance < 0) {
//         clearInterval(countDownFunction);
//         document.getElementById('timer').innerHTML = 'Время истекло';
//     }

// }, 1000)

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
