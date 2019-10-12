var initialsInput = document.querySelector('input[type="text"]');
var submitBtn = document.querySelector('button[type="submit"]');
var scoreEl = document.querySelector('#your-score')
var scoreList = JSON.parse(localStorage.getItem('scores')) || [];
var completeScore = "";

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

console.log("Final score " + score);

submitBtn.addEventListener('click', function (event){
    //score = localStorage.getItem('timer');
    console.log("submit score:"+ score);
    completeScore = initialsInput.value + "-" + score;
    console.log("complete score:"+ completeScore);
    scoreList.push(completeScore);
    console.log(JSON.stringify(scoreList))
    localStorage.setItem('scores', JSON.stringify(scoreList));
    window.location.href = 'highscore.html';
});

showScore();