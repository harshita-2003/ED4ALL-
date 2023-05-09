cardArray = [
        {
            name: "arrow",
            img: "static/images/arrow-card.png"
        },
        {
            name: "ball",
            img: "static/images/ball-card.png"
        },
        {
            name: "burger",
            img: "static/images/burger-card.png"
        },
        {
            name: "candy",
            img: "static/images/candy-card.png"
        },
        {
            name: "car",
            img: "static/images/car-card.png"
        },
        {
            name: "moon",
            img: "static/images/moon-card.png"
        },
        {
            name: "sun",
            img: "static/images/sun-card.png"
        },
        {
            name: "ring",
            img: "static/images/ring-card.png"
        },
        {
            name: "tree",
            img: "static/images/tree-card.png"
        },
        {
            name: "water",
            img: "static/images/water-card.png"
        },
        {
            name: "arrow",
            img: "static/images/arrow.png"
        },
        {
            name: "ball",
            img: "static/images/ball.jpg"
        },
        {
            name: "burger",
            img: "static/images/burger.jpg"
        },
        {
            name: "candy",
            img: "static/images/candy.avif"
        },
        {
            name: "car",
            img: "static/images/lightning-mcqueen-cars.jpg"
        },
        {
            name: "moon",
            img: "static/images/moon.jpg"
        },
        {
            name: "sun",
            img: "static/images/sun.jpg"
        },
        {
            name: "ring",
            img: "static/images/ring.webp"
        },
        {
            name: "tree",
            img: "static/images/tree.jpg"
        },
        {
            name: "water",
            img: "static/images/water.jpg"
        }
    ]

const backgroundImg = new Image()
backgroundImg.src = "static/images/background_main.webp"

const text_win = document.querySelector(".text")
const exitGame = document.querySelector("#exit-game")
const home = document.querySelector("#home")

cardArray.sort(() => 0.5 - Math.random()) //sorting at random

console.log(cardArray)

const gridDisplay = document.querySelector("#grid")

var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", backgroundImg.src)
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)
    }

}
createBoard()

var result = 0
const cards = document.querySelectorAll("#grid img")
const score = document.querySelector("#score")
score.textContent = result

function checkMatch() {
    const option1Id = cardsChosenId[0]
    const option2Id = cardsChosenId[1]

    console.log("check for match!")
    console.log(cards)

    if(option1Id === option2Id) {
        alert("Can't tap same card!!")
        cards[option1Id].setAttribute("src", backgroundImg.src)
        cards[option2Id].setAttribute("src", backgroundImg.src)
    }

    else if(cardsChosen[0] === cardsChosen[1]) {
        // alert("Damn!")
        cards[option1Id].setAttribute("src", "static/images/image-removebg-preview (12).png")
        cards[option2Id].setAttribute("src", "static/images/image-removebg-preview (12).png")
        cards[option1Id].removeEventListener("click", flipCard)
        cards[option2Id].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)
        result += 100
        score.textContent = result
    }

    else {
        cards[option1Id].setAttribute("src", backgroundImg.src)
        cards[option2Id].setAttribute("src", backgroundImg.src)
    }

    cardsChosen = []
    cardsChosenId = []

    if(cardsWon.length === (cardArray.length/2)) {
        text_win.style.display = "flex"
        exitGame.style.display = "none"
        home.style.display = "flex"
    }

}

function flipCard() {
    let cardId = this.getAttribute("data-id")
    // console.log(cardArray[cardId].name)
    cardsChosen.push(cardArray[cardId].name)
    console.log(cardsChosen)
    cardsChosenId.push(cardId)
    console.log(cardsChosenId)
    // console.log(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}
