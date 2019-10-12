var timerText = document.querySelector('.navbar-text');
var completeEl = document.querySelector('#complete');
var scoreEl = document.querySelector('#your-score');
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

function showScore() {
    score = localStorage.getItem('timer');
    console.log("score inside: ", score);
    if (parseInt(score) <= 0) {
        completeEl.textContent = "Time is up!"
        completeEl.setAttribute("text-align", "center");
        scoreEl.textContent = "Your score is: " + score +".";
        console.log(score);
    }
    else {
        completeEl.textContent = "All done!"
        scoreEl.textContent = "Your score is: " + score +".";
        console.log(score);
    }
}

console.log("window.location: ",window.location.href.indexOf("timeup") );
if (window.location.href.indexOf("quiz") > -1) {
    var downloadTimer = setInterval(decrement, 1000);
    
}

if (window.location.href.indexOf("timeup") > -1) {
    console.log("logging score");
    showScore();
}

