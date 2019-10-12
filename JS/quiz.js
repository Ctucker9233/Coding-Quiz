var startBtn = document.querySelector('#start');
var questionTitleEl = document.querySelector('#question-title');
var answerBtn = document.querySelector('#answer-btn');
var questionGradeEl = document.querySelector('#question-grade');
var questionIndex = 0;
var questionLength = questionsObj.length;
var scoreList = [];

//only add and trigger event listener if user is on a certain page
if (window.location.href.indexOf("index") > -1) {
    startBtn.addEventListener('click', function () {
        window.location.href = 'quiz.html';
    });
}

function renderQuestions() {
    questionTitleEl.textContent = questionsObj[questionIndex].title;
    console.log(questionTitleEl.textContent);
    for (j = 0; j < questionsObj[questionIndex].choices.length; j++) {
        var choiceBtn = document.createElement('button');
        var choiceDiv = document.createElement('div');
        choiceBtn.textContent = questionsObj[questionIndex].choices[j];
        choiceBtn.setAttribute('class', 'btn btn-primary');
        choiceBtn.setAttribute('data-index', j)
        choiceDiv.appendChild(choiceBtn);
        answerBtn.appendChild(choiceDiv);
    }
}

function removeButton() {
    var child = answerBtn.lastElementChild;
    while (child) {
        answerBtn.removeChild(child);
        child = answerBtn.lastElementChild;
    }
}

answerBtn.addEventListener('click', function (event) {
    var element = event.target;
    if (element.matches('button') === true) {
        console.log(element);
        var answer = questionsObj[questionIndex].answer;
        if (element.textContent !== answer) {
            timeleft = timeleft - 10;
            questionGradeEl.textContent = "Incorrect";
            questionIndex++;
            questionLength--;
            if (questionLength > 0){
                removeButton();
                renderQuestions();
            }
        }
        else {
            questionGradeEl.textContent = "Correct!";
            questionIndex++;
            questionLength--;
            if (questionLength > 0){
                removeButton();
                renderQuestions();
            }
        }
    }
});

if (window.location.href.indexOf('quiz') > -1) {
    renderQuestions();
}