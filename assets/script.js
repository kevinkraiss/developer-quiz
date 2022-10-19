// javascript questions found here: https://www.interviewbit.com/javascript-mcq/

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
        ansC: "Both let and var",
        ansD: "Neither let or var",
        correctAns: "Both let and var"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        ansA: "getElementbyId()",
        ansB: "getElementsbyClassName()",
        ansC: "Both methods",
        ansD: "Neither method",
        correctAns: "Both methods"
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        ansA: "stringify()",
        ansB: "parse()",
        ansC: "convert()",
        ansD: "None of these answers",
        correctAns: "stringify()"
    },
    {
        question: "Javascript is an _______ language?",
        ansA: "Object-Oriented",
        ansB: "Object-Based",
        ansC: "Procederal",
        ansD: "None of these answers",
        correctAns: "Object-Oriented"
    }
]


// vars
var welcomeEl = document.querySelector('#welcome')
var startBtn = document.querySelector('#startQuiz')
var abortBtn = document.querySelector('#abort-button')
var viewScoreBtn = document.querySelector('#view-scores')
var exitHighScoreBtn = document.querySelector('#exit-high-scores')
var nextBtn = document.querySelector('#next-button-container')
var submitHighscoreBtn = document.querySelector('#submit-highscore')
var submitInitalBtn = document.getElementById('inital-submit')
var playAgainBtn = document.querySelector('#play-again')

// quiz elements
var questionEl = document.querySelector('.game-question-container')
var answerBtns = document.querySelector('.game-options-container')
var timerEl = document.querySelector('#timer')
var quizEl = document.querySelector('.game-quiz-container')

var ans1El = document.querySelector('#btn1')
var ans2El = document.querySelector('#btn2')
var ans3El = document.querySelector('#btn3')
var ans4El = document.querySelector('#btn4')

var scoreBarEl = document.querySelector('#scoreBar')
var scoreEl = document.querySelector('#player-score')
var fullTimerEl = document.querySelector('#full-timer')
var gameDetailsEl = document.querySelector('.game-details-container')
var totalQuestionsEl = document.querySelector('#total-questions')
var questionNumber = document.querySelector('#question-number')
var gameSummaryEl = document.querySelector('#game-summary')
var finalScoreEl = document.querySelector('#final-score')
var finalScoreSubmitEl = document.getElementById('final-score-submit')
var highScoreEl = document.getElementById('high-scores')
var scoreFormEl = document.getElementById('score-form')
var userInitalInputEl = document.getElementById('user-inital-input')

var fullTime = 60000
var timeElapsed = 0
var currentQuestion = 0
var totalQuestions = (questions.length * 1000)
var score = 0
var userInital

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

function showBlock(element) {
    element.style.display = "block"
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


    // found a way to shuffle array with instructor help here: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    var questionShuffle = [
        questions[currentQuestion].ansA, 
        questions[currentQuestion].ansB, 
        questions[currentQuestion].ansC, 
        questions[currentQuestion].ansD
    ].sort(function() {return 0.5 - Math.random() });
    
    ans1El.textContent = questionShuffle[0]
     
    ans2El.textContent = questionShuffle[1]
     
    ans3El.textContent = questionShuffle[2]
     
    ans4El.textContent = questionShuffle[3]

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
            score += (fullTime - timeElapsed);
        scoreEl.textContent = score
        finalScoreEl.textContent = score
        finalScoreSubmitEl.textContent = score
        hide(quizEl)
        hide(fullTimerEl)
        show(gameSummaryEl)
        timerEl.textContent = 0
    }

}

// prompt user for initals
function submitInital(event) {
    event.preventDefault()
    var userInital = userInitalInputEl.value.toUpperCase()
    console.log(userInital, score)
    
}

// log high score and initals to local




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

abortBtn.addEventListener('click', function() {
    hide(quizEl)
    stopTimer()
    hide(fullTimerEl)
    reset()
    show(welcomeEl)
})

playAgainBtn.addEventListener('click', function() {
    hide(gameSummaryEl)
    hide(fullTimerEl)
    reset()
    show(welcomeEl)

})

viewScoreBtn.addEventListener('click', function() {
    show(highScoreEl)
    hide(welcomeEl)
    hide(viewScoreBtn)
    hide(quizEl)
    stopTimer()
    hide(fullTimerEl)
    reset()
})



exitHighScoreBtn.addEventListener('click', function() {
    hide(highScoreEl)
    show(welcomeEl)
    showBlock(viewScoreBtn)
})



submitHighscoreBtn.addEventListener('click', function() { 
    hide(gameSummaryEl)
    show(scoreFormEl)
})

submitInitalBtn.addEventListener('click', function(event) {
    submitInital(event)
    hide(scoreFormEl)
    hide(viewScoreBtn)
    show(highScoreEl)
    reset()

})