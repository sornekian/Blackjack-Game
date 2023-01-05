
const faces = ['A', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K'];
const suits = ['s', 'h', 'c', 'd'];
let deck = [];
const messageEl = document.querySelector("h4")

let playerSum = 0;
let dealerSum = 0;

function generateDeck() {
    suits.forEach(suit => {
        faces.forEach(face => {
            deck.push({
                'face': `card ${suit}${face}`,
            })
        })
    })
}

let playerHand = []
let dealerHand = []

function dealCard() {
    const randomCard = Math.floor(Math.random() * (deck.length - 1));
    const newCard = deck[randomCard];
    deck.splice(randomCard, 1);
    if (deck.length === 0) generateDeck();
    return newCard;
}
generateDeck()
dealCard()

function renderDeck() {
    const cardEl = document.createElement('div')
    cardEl.className = dealCard().face
    document.querySelector("#player").append(cardEl)

    const cardEl2 = document.createElement('div')
    cardEl2.className = 'card back'
    document.querySelector("#dealer").append(cardEl2)

    const cardEl3 = document.createElement('div')
    cardEl3.className = dealCard().face
    document.querySelector("#player").append(cardEl3)

    const cardEl4 = document.createElement('div')
    cardEl4.className = dealCard().face
    document.querySelector("#dealer").append(cardEl4)

    playerHand.push(cardEl.className)
    playerHand.push(cardEl3.className)
    dealerHand.push(cardEl4.className)
    dealerHand.push(cardEl4.className)

}
renderDeck()

let counter = 0;
function hitPlayer() {
    // console.log(counter)
    const cardEl5 = document.createElement('div')
    cardEl5.className = dealCard().face
    document.querySelector("#player").append(cardEl5)
    playerHand.push(cardEl5.className)
    if (counter === 0) {
        for (i = 0; i < playerHand.length; i++) {
            playerHand[i] = playerHand[i].substring(6, playerHand[i].length)
        }
    }
    if (counter > 0) {
        playerHand[playerHand.length - 1] = playerHand[playerHand.length - 1].substring(6, playerHand[playerHand.length - 1].length)
    }
    for (i = 0; i < playerHand.length; i++) {
        if (playerHand[i] === "A") {
            playerHand[i] = 11
        }
        if (playerHand[i] === "K") {
            playerHand[i] = 10
        }
        if (playerHand[i] === "Q") {
            playerHand[i] = 10
        }
        if (playerHand[i] === "J") {
            playerHand[i] = 10
        }
        playerHand[i] = parseInt(playerHand[i], 10)
    }

    playerHand.forEach(function (cardValue) {
        playerSum += cardValue
    })
    // console.log(sum)
    counter++
    // console.log(dealerHand)
}
function hitDealer() {
    const cardEl6 = document.createElement('div')
    cardEl6.className = dealCard().face
    document.querySelector("#dealer").append(cardEl6)
    dealerHand.push(cardEl6.className)
    if (counter === 0) {
        for (i = 0; i < dealerHand.length; i++) {
            dealerHand[i] = dealerHand[i].substring(6, dealerHand[i].length)
        }
    }
    if (counter > 0) {
        // dealerHand[dealerHand.length - 1] = dealerHand[dealerHand.length - 1].substring(6, dealerHand[dealerHand.length - 1].length)
    }
    for (i = 0; i < dealerHand.length; i++) {
        if (typeof (dealerHand[i]) === "string") {
            console.log(dealerHand)
            // console.log(dealerHand[i][dealerHand[i].length - 1])
            dealerHand[i] = dealerHand[i][dealerHand[i].length - 1]

            // console.log(typeof(dealerHand[i][dealerHand[i].length - 1]))
            // console.log(dealerHand)
            if (dealerHand[i] === "A") {
                dealerHand[i] = 11
            }
            if (dealerHand[i] === "K" || dealerHand[i] === "10" || dealerHand[i] === "Q" || dealerHand[i] === "J") {
                dealerHand[i] = 10
            }

            // console.log((typeof(dealerHand[i])))
            dealerHand[i] = parseInt(dealerHand[i])
            // console.log((typeof(dealerHand[i])))

        }
        // console.log(dealerHand[i])
    }

    dealerHand.forEach(function (cardValue) {
        dealerSum += cardValue
    })
    // console.log(sum)
    compareHands()
    // counter++
}

function compareHands() {
    console.log("playerSum: ", playerSum, " dealerSum: ", dealerSum)
    if (playerSum === 21) {
        messageEl.innerHTML = "Blackjack!"
    } else if (playerSum > 21) {
        messageEl.innerHTML = "You Lose! Dealer Wins!"
    } else if (dealerSum > 21) {
        messageEl.innerHTML = "Congratulations! You Win!"
    } else if (dealerSum === 21) {
        messageEl.innerHTML = "You Lose! Dealer Wins!"
    } else if (dealerSum === 21 && playerSum === 21) {
        messageEl.innerHTMLage = "Holy Cow, It's a Push!"
    } else if (dealerSum < playerSum) {
        messageEl.innerHTML = "Congratulations! You Win!"
    } else {
        messageEl.innerHTML = "Bummer! You Lose!"
    }

}
// player over
// dealer over
// who's closer to 21




hit.addEventListener('click', hitPlayer);
stay.addEventListener('click', hitDealer);
// start.addEventListener('click', resetGame);