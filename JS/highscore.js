var scoreList = document.querySelector('#score-list')
var clearBtn = document.querySelector('#clear-btn');
var backBtn = document.querySelector('#back-btn');
var storedScores = JSON.parse(localStorage.getItem("scores"));

renderScores();

clearBtn.addEventListener("click", function () {
    localStorage.clear();
    renderScores();
})

backBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
})

function renderScores() {
    console.log(storedScores);
    if (storedScores.length === null) {
        return;
    }
    else {
        for (i = 0; i < storedScores.length; i++) {
            var scoreItemValue = storedScores[i];
            var scoreItem = document.createElement('li');
            scoreItem.textContent = scoreItemValue;
            scoreList.append(scoreItem);
        }
    }
}