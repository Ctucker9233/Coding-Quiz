var initialsInput = document.querySelector('input[type="text"]');
var submitBtn = document.querySelector(('button[type="submit"]'));
var scoreList = [];
var completeScore = "";

submitBtn.addEventListener('click', function (event){
    score = localStorage.getItem('timer');
    console.log("submit score:"+ score);
    completeScore = initialsInput.value + "-" + score;
    console.log("complete score:"+ completeScore);
    scoreList = JSON.parse(localStorage.getItem('scores'));
    scoreList.push(completeScore);
    console.log(JSON.stringify(scoreList))
    localStorage.setItem('scores', JSON.stringify(scoreList));
    window.location.href = 'highscore.html';
});