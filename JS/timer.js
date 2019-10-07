var timerText = document.querySelector('.navbar-text');
var timer = 0;
console.log(timer);
timerText.textContent = "Timer: " + timer;

function decrement() {
    timer = (15 * questionsObj.length);
    var quizTimer = setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        if (timer >= 0) {
            timer--;
            timerText.textContent = "Timer: " + seconds;
            console.log(timer);
        }
        if (timer === 0) {
            clearInterval(quizTimer);
            window.location.pathname = timeup.html
            timerText.textContent = "Timer: " + seconds;
            console.log(timer);
        }
    }, 1000);
};

if (window.location.href.indexOf("quiz") > -1) {
    decrement();
}