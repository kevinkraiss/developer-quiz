var questions = [
    {
        question: "Question  1",
        ansA: "ans1",
        ansB: "ans2",
        ansC: "ans3",
        ansD: "ans4",
        correctOption: "ansD"
    },
    {
        question: "Question  2",
        ansA: "ans1",
        ansB: "ans2",
        ansC: "ans3",
        ansD: "ans4",
        correctOption: "ansA"
    },
    {
        question: "Question  3",
        ansA: "ans1",
        ansB: "ans2",
        ansC: "ans3",
        ansD: "ans4",
        correctOption: "ansB"
    },
    {
        question: "Question  4",
        ansA: "ans1",
        ansB: "ans2",
        ansC: "ans3",
        ansD: "ans4",
        correctOption: "ansC"
    },
    {
        question: "Question  5",
        ansA: "ans1",
        ansB: "ans2",
        ansC: "ans3",
        ansD: "ans4",
        correctOption: "ansA"
    }
]

var shuffledQuestions = []

function mixQuestions () {
    while (shuffledQuestions.length <= (4)) {
        var rndIndex = questions[Math.floor(Math.random() * questions.length)]
        if (!mixQuestions.includes(rndIndex)) {
            mixQuestions.push(rndIndex)
        }
    }
}

var questionNumber = 1
var playerScore = 0
var wrongAttempt = 0
var indexNumber = 0

function nextQuestion(index) {
    var currentQuestion = currentQuestion[index]
    document.getElementById('#question-number').innerHTML = questionNumber
}
