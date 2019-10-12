var timerText = document.querySelector('.navbar-text');
var completeEl = document.querySelector('#complete');
var timeleft = (15 * questionsObj.length);
var score;

timerText.textContent = timeleft;

function decrement() {
    timeleft--;
    timerText.textContent = timeleft;
    score = timeleft;

        console.log("score is: ", score);
        if (questionLength === 0 || timeleft <= 0) {
            localStorage.setItem('timer', timeleft)
            console.log("quiz end" + timeleft);
            window.location.href = 'timeup.html'
            clearInterval(downloadTimer);
        } 
}

console.log("window.location: ",window.location.href.indexOf("timeup") );
if (window.location.href.indexOf("quiz") > -1) {
    var downloadTimer = setInterval(decrement, 1000);   
}

