const questions = [
    {
        question: "Green pigment in plants is?",
        optionA: "Xanthophyll",
        optionB: "Algal",
        optionC: "Chlorophyll",
        optionD: "Styrophyll",
        correctOption: "optionC"
    },

    {
        question: "What is formula of Table salt ?",
        optionA: "KCl",
        optionB: "NaCl",
        optionC: "K2SO4",
        optionD: "Mgcl2",
        correctOption: "optionB"
    },

    {
        question: "What is the name of our Galaxy ?",
        optionA: "Andromeda",
        optionB: "GN-z11",
        optionC: "Milky Way",
        optionD: "Messier 82",
        correctOption: "optionC"
    },

    {
        question: "Largest planet in our Solar System is ?",
        optionA: "Mars",
        optionB: "Saturn",
        optionC: "Jupiter",
        optionD: "Neptune",
        correctOption: "optionC"
    },

    {
        question: " An object tends to stop due to?",
        optionA: "Dynamic forces",
        optionB: "Static forces",
        optionC: "Equilibrium forces",
        optionD: "Frictional force",
        correctOption: "optionD"
    },

    {
        question: "Silver articles on tarnishing develop a ____ coloured coat?",
        optionA: "Grey",
        optionB: "Green",
        optionC: "Black",
        optionD: "Brown",
        correctOption: "optionB"
    },

    {
        question: "Small intestine is responsible for ?",
        optionA: "Emulsification of fats",
        optionB: "Peptide formation",
        optionC: "Pepsin formation",
        optionD: "Protein formation",
        correctOption: "optionA"
    },

    {
        question: " Lightening phenomenon was discovered by?",
        optionA: "Benjamin Franklin",
        optionB: "Nicola Tesla",
        optionC: "Isaac Newton",
        optionD: "Galileo Galilei",
        correctOption: "optionA"
    },

    {
        question: "Process of formation of food by plants is?",
        optionA: "Absorption",
        optionB: "Egestion",
        optionC: "Photosynthesis",
        optionD: "Assimilation",
        correctOption: "optionC"
    },

    {
        question: `"Normal Atmospheric Pressure(NTP) = ___`,
        optionA: "76cm of Hg",
        optionB: "76mm of Hg",
        optionC: "7.6 bar",
        optionD: "76 torr",
        correctOption: "optionA"
    },

    {
        question: " Approximately how many miles are there in a light year?",
        optionA: "5.9 trillion",
        optionB: "9 million",
        optionC: "5 trillion",
        optionD: "19 trillion",
        correctOption: "optionA"
    },

    {
        question: "What does DNA stand for? ?",
        optionA: "Deribonuc acid",
        optionB: "Denucleic acid",
        optionC: "Deoxyribonucleic acid",
        optionD: "Dimethylnucleus acid",
        correctOption: "optionC"
    },


    {
        question: "How many permanent teeth does a dog have ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "Which is the main gas that makes up the Earth's atmosphere?",
        optionA: "O2",
        optionB: "N02",
        optionC: "So2",
        optionD: "N2",
        correctOption: "optionD"
    },

    {
        question: "Humans and chimpanzees share roughly how much DNA? ?",
        optionA: "98 per cent",
        optionB: "90 per cent",
        optionC: "40 per cent",
        optionD: "48 per cent",
        correctOption: "optionA"
    },

    {
        question: "Atomic Number of calcium ?",
        optionA: "24",
        optionB: "19",
        optionC: "20",
        optionD: "21",
        correctOption: "optionC"
    },

    {
        question: "Formula of Work Done is ?",
        optionA: "F * s",
        optionB: "M * v",
        optionC: "M * a",
        optionD: "F * a",
        correctOption: "optionA"
    },

    {
        question: "Ag is the symbol of?",
        optionA: "Silver",
        optionB: "Gold",
        optionC: "Aluminium",
        optionD: "lead",
        correctOption: "optionC"
    },

    {
        question: "Oil, natural gas and coal are examples of … ?",
        optionA: "Geothermal resources",
        optionB: "Fossil fuels",
        optionC: "Biofuels",
        optionD: "Renewable resources",
        correctOption: "optionB"
    },

    {
        question: "Guess the Word : 🐷+M+🐜 ?",
        optionA: "Pigment",
        optionB: "Climate",
        optionC: "grasshopper",
        optionD: "Food chain",
        correctOption: "optionA"
    },

    {
        question: "What's the minimum frequency a human can hear ?",
        optionA: "10Hz",
        optionB: "20KHz",
        optionC: "50Hz",
        optionD: "20Hz",
        correctOption: "optionD"
    },

    {
        question: "Which letter depicts displacement?",
        optionA: "J",
        optionB: "s",
        optionC: "E",
        optionD: "V",
        correctOption: "optionB"
    },

    {
        question: "where is the smallest bone in human body located?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "How many hearts does an Octopus have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "How many teeth does an adult human have ?",
        optionA: "28",
        optionB: "30",
        optionC: "32",
        optionD: "36",
        correctOption: "optionC"
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
let wrongAttempt = 0
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