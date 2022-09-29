// question array
var questions = [
    {
        question: "Question  1",
        ansA: "ans1",
        ansB: "ans2",
        ansC: "ans3",
        ansD: "ans4",
        correctAns: "ans4"
    },
    {
        question: "Question  2",
        ansA: "ans1",
        ansB: "ans2",
        ansC: "ans3",
        ansD: "ans4",
        correctAns: "ans1"
    },
    {
        question: "Question  3",
        ansA: "ans1",
        ansB: "ans2",
        ansC: "ans3",
        ansD: "ans4",
        correctAns: "ans2"
    },
    {
        question: "Question  4",
        ansA: "ans1",
        ansB: "ans2",
        ansC: "ans3",
        ansD: "ans4",
        correctAns: "ans3"
    },
    {
        question: "Question  5",
        ansA: "ans1",
        ansB: "ans2",
        ansC: "ans3",
        ansD: "ans4",
        correctAns: "ans1"
    }
]


// vars
var welcomeEl = document.querySelector('#welcome')
var startBtn = document.querySelector('#startQuiz')

var nextBtn = document.querySelector('#next-button-container')
var timerEl = document.querySelector('#timer')
var quizEl = document.querySelector('.game-quiz-container')

// quiz elements
var questionEl = document.querySelector('.game-question-container')

var answerBtns = document.querySelector('.game-options-container')

var ans1El = document.querySelector('#btn1')
var ans2El = document.querySelector('#btn2')
var ans3El = document.querySelector('#btn3')
var ans4El = document.querySelector('#btn4')

var scoreEl = document.querySelector('#player-score')

var fullTime = 60
var timeElapsed = 0
var currentQuestion = 0
var score = 0

var selectedAns


// show and hide elements
function hide(element) {
    element.style.display = "none"
}
function show(element) {
    element.style.display = "flex"
}


// timer
function startTimer() {
    timerEl.textContent = fullTime;
    interval = setInterval(function () {
        timeElapsed++;
        timerEl.textContent = fullTime - timeElapsed; 
        
    }, 1000)
}


// render questions and answers into doc
function renderQuestion() {
    questionEl.textContent = questions[currentQuestion].question
    
    ans1El.textContent = questions[currentQuestion].ansA
     
    ans2El.textContent = questions[currentQuestion].ansB
     
    ans3El.textContent = questions[currentQuestion].ansC
     
    ans4El.textContent = questions[currentQuestion].ansD
}

// check if selected answer is correct
function checkAns(correctAns) {
    
    if (questions[currentQuestion].correctAns == selectedAns) {
        score += 1
        scoreEl.textContent = score;
        
    } else {
        timeElapsed += 10;
        console.log(selectedAns)
    }
}

// handle next question if correct


// event listeners
startBtn.addEventListener('click', function() {
    hide(welcomeEl)
    show(quizEl)
    renderQuestion()
    startTimer()
})

// nextBtn.addEventListener('click', function(){

// })

// writes button id to variable

answerBtns.addEventListener('click', function(event){
 if (event.target.matches('button')) {
    selectedAns = event.target.innerHTML
    checkAns()

 }
})
