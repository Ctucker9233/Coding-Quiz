var timerText = document.querySelector('.navbar-text');
var completeEl = document.querySelector('#complete');
var scoreEl = document.querySelector('#your-score');
var timeleft = (15 * questionsObj.length);

function decrement() {
    var downloadTimer = setInterval(function () {
        timeleft--;
        timerText.textContent = timeleft;
        console.log(timeleft);

        if (questionLength === 0 || timeleft <= 0) {
            sessionStorage.setItem('timer', timeleft)
            console.log(timeleft);
            window.location.href = 'timeup.html'
            clearInterval(downloadTimer);
            showScore();
        }
  
    }, 1000);
}

function showScore() {
    console.log(timeleft);
    var newScore = timeleft;
    if (window.location.href.indexOf('timeup') > -1) {
        if (newScore === 0) {
            completeEl.textContent = "Time is up!"
            scoreEl.textContent = newScore;
            console.log(newScore);
        }
        else {
            completeEl.textcontent = "All done!"
            scoreEl.textContent = "Your score is: " + newScore; +".";
            console.log(newScore);
        }
    }
}

if (window.location.href.indexOf("quiz") > -1) {
    decrement(timer);
}