var startBtn = document.querySelector('#start');

if (window.location.href.indexOf("index") > -1){
    startBtn.addEventListener('click', function(){
        window.location.href = 'quiz.html';
    });
}
    
