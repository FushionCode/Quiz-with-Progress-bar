const ul_1 = document.querySelector('.option1');
const ul_2 = document.querySelector('.option2');
const ul_3 = document.querySelector('.option3');

const progress_bar = document.querySelector('.progress-bar');
const progress_count = document.querySelector('.progress-percent');

const question1 = document.querySelector('.question1');
const question2 = document.querySelector('.question2');
const question3 = document.querySelector('.question3');

const quiz = document.querySelector('.quiz');
const quizend = document.querySelector('.quizend');
const progress = document.querySelector('.progress');

//Question section
ul_1.addEventListener("click", function() {
    progress_bar.style.width = '33.333%';
    progress_count.textContent = '33%'
    question1.style.display = 'none';
    question2.style.display = 'block';
})

ul_2.addEventListener("click", function() {
    progress_bar.style.width = '66.667%'
    progress_count.textContent = '67%'
    question2.style.display = 'none';
    question3.style.display = 'block';
})

//dispay last ppage
ul_3.addEventListener('click', function() {
    progress_bar.style.width = '100%'
    progress_count.textContent = '100%'
    question3.style.display = 'none';
    quiz.style.display = 'none'; 
    quizend.style.display = 'block'; 
    //progress.style.display= 'none', '0.5s';
})