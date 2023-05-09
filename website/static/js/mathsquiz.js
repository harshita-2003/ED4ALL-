const questions = [
    {
        question: "6 / 2 ( 1 + 2) = ?",
        optionA: "9",
        optionB: "2",
        optionC: "1",
        optionD: "5",
        correctOption: "optionC"
    },

    {
        question: "if (a + b + c) = 0, and abc = 4; what is the value of (a^3 + b^3 + c^3) ?",
        optionA: "12",
        optionB: "0",
        optionC: "3",
        optionD: "15",
        correctOption: "optionA"
    },

    {
        question: "if x + y = 5 and x + 2y = 10; (2x + 5y) = ?",
        optionA: "32",
        optionB: "25",
        optionC: "28",
        optionD: "30",
        correctOption: "optionB"
    },

    {
        question: "What is the product of GCD(Greatest Common Divisor) and LCM(Lowest Common Multiple) of 6 and 12 ?",
        optionA: "12",
        optionB: "72",
        optionC: "48",
        optionD: "96",
        correctOption: "optionB"
    },

    {
        question: "What is the probability of getting an orange from a stack of fruits(2 oranges, 3 apples, 1 banana)?",
        optionA: "1/3",
        optionB: "1/2",
        optionC: "1/6",
        optionD: "1/4",
        correctOption: "optionA"
    },

    {
        question: "if (2^x)(3^y) = 36; (x + y) = ?",
        optionA: "3",
        optionB: "6",
        optionC: "5",
        optionD: "4",
        correctOption: "optionD"
    },

    {
        question: "0.75 as a fraction is:",
        optionA: "3/5",
        optionB: "2/5",
        optionC: "3/4",
        optionD: "4/7",
        correctOption: "optionC"
    },

    {
        question: "Which of these numbers is an odd number ?",
        optionA: "Ten",
        optionB: "Twelve",
        optionC: "Eight",
        optionD: "Eleven",
        correctOption: "optionD"
    },


    {
        question: "Area of a circle is 9pi square meters(m), what is its radius?",
        optionA: "3m",
        optionB: "4m",
        optionC: "1.5m",
        optionD: "2.5m",
        correctOption: "optionA"
    },

    {
        question: "If thickness of a book is 20cm, how many books can be stacked in a shelf having space of 480cm ?",
        optionA: "45",
        optionB: "26",
        optionC: "24",
        optionD: "36",
        correctOption: "optionC"
    },


    {
        question: "What waill be the value of (sec^x - tan^x) ?",
        optionA: "cos^x",
        optionB: "1",
        optionC: "cot^x",
        optionD: "3",
        correctOption: "optionB"
    },


    {
        question: "How many sides does an hexagon have ?",
        optionA: "Six",
        optionB: "Sevene",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    }

]

let shuffledQuestions = []

function handleQuestions() {
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0
let indexNumber = 0

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}

function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null

    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}