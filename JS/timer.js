var timerText = document.querySelector('.navbar-text');
var timer = 0;
console.log(timer);
timerText.textContent = "Timer: " + timer;

function decrement() {
    timer = (15 * questionsObj.length);
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerText.textContent = "Timer: " + seconds;

        if (timer === 0) {
            window.location.pathname('/timeup.html')
        }
    }, 1000);
}

if (window.location.pathname == '/quiz') {
    decrement();
}