const startingPage = document.getElementById("starting-page")
const startBtn = document.querySelector("#starting-btn")
const questions = document.getElementById("questions")
const questionTitle = document.querySelector("#question-title")
const questionBtns = document.getElementById('question-buttons')
const answerBtn1 = document.getElementById("1")
const answerBtn2 = document.getElementById("2")
const answerBtn3 = document.getElementById("3")
const answerBtn4 = document.getElementById("4")
let time = 10
const timer = document.getElementById("timer")
const timeLeft = document.getElementById("time-left")
let questionObjIndex = 0

const questionObj = [
    {
        question: "what is your name",
        answer1: 'Ben',
        answer2: 'Scott',
        answer3: 'Stella',
        answer4: 'Joseph'
    },
    {
        question: "how old are you",
        answers1: '21',
        answer2: '22',
        answer3: '23',
        answer4: '24'
    },
    {
        question: "hello",
        answer1: 'q',
        answer2: 'w', 
        answer3: 'e', 
        answer4: 'r'
    }
]

startBtn.addEventListener("click", function(myInterval) {
    startingPage.style.display = "none"
    timer.style.display = "block"
    questionTitle.innerText = questionObj[0].question
    questions.style.display = "block"
    newQuestion(0);
    timeLeft.innerText = time
    var x = setInterval(function() {

        if (time > 0) {
            time--
        }else if (time === 0) {
            clearInterval(x);
        }
        timeLeft.innerText = time
        console.log(timeLeft)
    }, 1000)
})
function ansBtnClick() {
    answerBtn1.addEventListener("click", function() {
        questionObjIndex++
        newQuestion(questionObjIndex)
    })
}

function newQuestion(questionIndex) {
    answerBtn1.innerText = questionObj[questionIndex].answer1
}
ansBtnClick();
// for (let i = 0; i <= questionObj[i].length; i++) {
    // questionBtns.addEventListener('click', function() {
    //     answerBtn1.innerText = questionObj[0].answer1

    //     console.log(questionObj[0])
    // })
// } 