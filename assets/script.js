// question array
var questions = [
    {
        question: "_______ is the process of finding errors and fixing them within a program.",
        ansA: "Compiling",
        ansB: "Executing",
        ansC: "Scanning",
        ansD: "Debugging",
        correctAns: "Debugging"
    },
    {
        question: "Which command will stop an infinite loop?",
        ansA: "Ctrl + C",
        ansB: "Alt + C",
        ansC: "Shift + C",
        ansD: "Esc",
        correctAns: "Ctrl + C"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        ansA: "var",
        ansB: "let",
        ansC: "All of the above",
        ansD: "None of the above",
        correctAns: "All of the above"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        ansA: "getElementbyId()",
        ansB: "getElementsbyClassName()",
        ansC: "All of the above",
        ansD: "None of the above",
        correctAns: "All of the above"
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        ansA: "stringify()",
        ansB: "parse()",
        ansC: "convert()",
        ansD: "None of the above",
        correctAns: "stringify()"
    },
    {
        question: "Javascript is an _______ language?",
        ansA: "Object-Oriented",
        ansB: "Object-Based",
        ansC: "Procedurl",
        ansD: "None of the above",
        correctAns: "Object-Oriented"
    }
]


// vars
var welcomeEl = document.querySelector('#welcome')
var startBtn = document.querySelector('#startQuiz')

var nextBtn = document.querySelector('#next-button-container')
var timerEl = document.querySelector('#timer')
var quizEl = document.querySelector('.game-quiz-container')

var submitHighscoreBtn = document.querySelector('#submit-highscore')
var playAgainBtn = document.querySelector('#play-again')

// quiz elements
var questionEl = document.querySelector('.game-question-container')

var answerBtns = document.querySelector('.game-options-container')

var ans1El = document.querySelector('#btn1')
var ans2El = document.querySelector('#btn2')
var ans3El = document.querySelector('#btn3')
var ans4El = document.querySelector('#btn4')

var scoreBarEl = document.querySelector('#scoreBar')
var fullTimerEl = document.querySelector('#full-timer')
var gameDetailsEl = document.querySelector('.game-details-container')
var scoreEl = document.querySelector('#player-score')
var totalQuestionsEl = document.querySelector('#total-questions')
var questionNumber = document.querySelector('#question-number')
var gameSummaryEl = document.querySelector('#game-summary')
var finalScoreEl = document.querySelector('#final-score')

var fullTime = 60000
var timeElapsed = 0
var currentQuestion = 0
var totalQuestions = questions.length
var score = 0

var selectedAns

// reset quiz vars
function reset() {
    fullTime = 60000
    timeElapsed = 0
    currentQuestion = 0
    score = 0
    scoreEl.textContent = ''
}

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
        
    }, 1)
}

function stopTimer() {
    clearInterval(interval)
}


// render elements into doc
function renderQuestion() {
    questionEl.textContent = questions[currentQuestion].question
    
    ans1El.textContent = questions[currentQuestion].ansA
     
    ans2El.textContent = questions[currentQuestion].ansB
     
    ans3El.textContent = questions[currentQuestion].ansC
     
    ans4El.textContent = questions[currentQuestion].ansD

    totalQuestionsEl.textContent = totalQuestions

    questionNumber.textContent = currentQuestion + 1

}

// check if selected answer is correct
function checkAns(correctAns) {
    
    // handle next question if correct
    if (questions[currentQuestion].correctAns == selectedAns) {
        score += 1000
        scoreEl.textContent = score;
        nextQuestion()
        
    } else {
        timeElapsed += 1000;
    }
}

// handle next question
function nextQuestion() {
    currentQuestion++
    if (currentQuestion < questions.length) {
        renderQuestion()
    } else {
        stopTimer();
        if ((fullTime - timeElapsed) > 0)
            score += ((fullTime - timeElapsed)/10);
        scoreEl.textContent = score
        finalScoreEl.textContent = score
        hide(quizEl)
        show(gameSummaryEl)
        timerEl.textContent = 0
    }

}



// event listeners
startBtn.addEventListener('click', function() {
    hide(welcomeEl)
    show(fullTimerEl)
    show(quizEl)
    renderQuestion()
    startTimer()
})

answerBtns.addEventListener('click', function(event){
 if (event.target.matches('button')) {
    selectedAns = event.target.innerHTML
    checkAns()
 }
})

playAgainBtn.addEventListener('click', function() {
    hide(gameSummaryEl)
    reset()
    show(welcomeEl)

})