const suits = ['d', 'h', 'c', 's']
const faces = ['A', 'K', 'Q', 'J', '10', '09', '08', '07', '06', '05', '04', '03', '02']
const deck = []

const PLAYERS = {
    '1': {
        name: 'Player',
    },  

    '-1': {
        name: 'Dealer',
    },
}

let turn, winner, playerHand, dealerHand, bet
let gameCount = 0
let winCount = 0
let winnings = 3000

const dealerDiv=  document.querySelector('.dealer')
const hitBtn = document.getElementById('hitBtn')
const stayBtn = document.getElementById('stayBtn')
const resetBtn = document.getElementById('resetBtn')
const startBtn = document.getElementById('startBtn')
const five = document.getElementById('five')
const ten = document.getElementById('ten')
const twenty = document.getElementById('twenty')
const fifty = document.getElementById('fifty')
const hundred = document.getElementById('hundred')
const twofifty = document.getElementById('twofifty')

let games = document.getElementById('games')
let wins = document.getElementById('wins')
let bank = document.getElementById('bank')
let betAmount = document.getElementById('betAmount')

const betMsg = document.querySelector('.betMsg')
let betBtns = document.querySelectorAll('.betBtns')
let message = document.getElementById('result')
let statText = document.querySelector('stats')
let streak = document.querySelector('streak')

hitBtn.addEventListener('click', hit)
stayBtn.addEventListener('click', stay)
resetBtn.addEventListener('click', handleReset)
startBtn.addEventListener('click', startGame)

five.addEventListener('click', function() {
    bet = 5
    betAmount.innerHTML = `Bet - $${bet}`
    placeBets()
})
ten.addEventListener('click', function() {
    bet = 10
    betAmount.innerHTML = `Bet - $${bet}`
    placeBets()
})
twenty.addEventListener('click', function() {
    bet = 20
    betAmount.innerHTML = `Bet - $${bet}`
    placeBets()
})
fifty.addEventListener('click', function() {
    bet = 50
    betAmount.innerHTML = `Bet - $${bet}`
    placeBets()
})
hundred.addEventListener('click', function() {
    bet = 100
    betAmount.innerHTML = `Bet - $${bet}`
    placeBets()
})
twofifty.addEventListener('click', function() {
    bet = 250
    betAmount.innerHTML = `Bet - $${bet}`
    placeBets()
})
function startGame() {
    init()
}

function init() {
    dealerDiv.classList.remove('hidden')
    bank.innerHTML = `Bank - $${winnings}`
    turn = 1    
    generateDeck()
    shuffleDeck()
    drawHands()
    renderPlayerHand()
    renderDealerHand()
    // winStreak()
    message.innerText = " "
}
function placeBets() {
    if(winnings === 0) {
        handleReset()
        betBtnDisable()
        message.innerText = "Yikes! Looks like you need more practice! Hit reset to start over."
    }
}
function generateDeck() {
    suits.forEach(suit => {
        faces.forEach(face => {
            deck.push({ 
                'face': suit + face
            })
        })
    })
}
function shuffleDeck() {
    for(let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length)
        let temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp
    }
}
function drawHands() {
    playerHand = deck.splice(0, 2)
    dealerHand = deck.splice(0, 2) 
    if (sumHand(playerHand) === 21) {
        if(sumHand(dealerHand) !== 21) {
        playBtnsDisable()
        message.innerText = "Return of the Jack! You're on a roll!"
        winnings += (bet + (bet * 1.5))
        handleReset()
        } else if (sumHand(dealerHand) === 21) {
            message.innerText = "Holy cow! It's a Push!"
            handleReset()
        }
    }
}
function renderPlayerHand() {
    document.querySelector('.playerHand').innerHTML = " "
    playerHand.forEach(card => {
        const cardEl = document.createElement('div')
        cardEl.className = 'card ' + card.face
        document.querySelector('.playerHand').append(cardEl)
})}

function renderDealerHand() {
    document.querySelector('.dealerHand').innerHTML = " "
    dealerHand.forEach((card, idx) => {
        const cardEl = document.createElement('div')
        if(turn === 1 && idx === 0) {
          cardEl.className = 'card back'
        } else {
          cardEl.className = 'card ' + card.face
        }
        document.querySelector('.dealerHand').append(cardEl)
    })
}


function hit() {
    playerHand.push(deck.shift())
    renderPlayerHand()
    checkWinner()
}
function stay() {
    playBtnsDisable()
    if (turn === 1) {
        changeTurn()
        renderDealerHand()
        dealerPlay()
    }
}

function sumHand(turn) {
    let sum = 0
    hasAce = false
    for(let i=0; i < turn.length; i++) {
        temp = parseInt(turn[i]['face'].substr(1), 10)
        if (isNaN(temp)) {
            if (turn[i]['face'].substr(1) === 'A') {
                temp = 1;
                hasAce = true;
            };
            if (turn[i]['face'].substr(1) === 'K') temp = 10
            if (turn[i]['face'].substr(1) === 'Q') temp = 10
            if (turn[i]['face'].substr(1) === 'J') temp = 10
        }
        sum += temp
    }
    if (hasAce) {
       sum + 10 <= 21 ? sum += 10 : sum += 0
        }
    return sum;
}

function changeTurn() {
    turn *= -1
}

function dealerPlay() {
    renderDealerHand()
    if (sumHand(dealerHand) < 17) {
        while (sumHand(dealerHand) <= 16) {
            dealerHand.push(deck.shift())
          }
    } else if (sumHand(dealerHand) > 21) {
        message.innerText = "Dealer busts! You win! Want to play again?"
    } else if (sumHand(dealerHand) >= 17) {  
        checkWinner()
    } 
    checkWinner()
}

function checkWinner() {
    renderDealerHand()
    if (turn === 1) {  
        if (sumHand(playerHand) === 21) {
            playBtnsDisable()
            changeTurn()
            dealerPlay()
        } else if (sumHand(playerHand) > 21) {
            playBtnsDisable()
            message.innerText = "You lost! Dealer wins! Want to play again?"
            changeTurn()
            renderDealerHand()
        } 
    }
    else if (turn === -1) {
        if (sumHand(dealerHand) === (sumHand(playerHand))) {
            message.innerText = "Holy Cow! It's a Push! Want to play again?"
        } else if (sumHand(dealerHand) > 21) {
            message.innerText = "Dealer busts! You win! Want to play again?"
        } else if (sumHand(dealerHand) > sumHand(playerHand)) {
            message.innerText = "Dealer Wins! Want to play again?"
        } else if (message.innerText === "Return of the Jack! Great job! Want to play again?") {
            
        } else if (sumHand(dealerHand) < sumHand(playerHand)) {
            message.innerText = "Wow! You won! Want to play again?"
        } 
    }
    if (message.innerText !== "") {
        calcWinnings()
        betBtnEnable()
    }
} 

function handleReset() {
    // resetBtn.remove()
    playBtnsEnable()
    init()
}

// function winStreak() {
//     if (betMsg.innerHTML = " ") {
//         if(((sumHand(dealerHand) > 21) && (sumHand(playerHand) <= 21)) || ((sumHand(playerHand) > sumHand(dealerHand)) && (sumHand(playerHand) <= 21))) {
//             gameCount += 1
//             winCount += 1
//             games.innerText = `Games: ${gameCount}`
//             wins.innerText = `Wins: ${winCount}`
//         } else {
//             gameCount += 1
//             games.innerText = `Games: ${gameCount}`
//         }
//     }
// }

function calcWinnings() {
   if((sumHand(dealerHand) > 21) || ((sumHand(playerHand) > sumHand(dealerHand)) && (sumHand(playerHand) <= 21))) {
        winnings += bet
    } 
    else if( (sumHand(playerHand) > 21) || ((sumHand(playerHand) < sumHand(dealerHand)) && (sumHand(dealerHand) <= 21))) {
        winnings -= bet
    }
    bank.innerHTML = `Bank: $${winnings}`
}

function betBtnDisable() {
    five.setAttribute("disabled", "")
    ten.setAttribute("disabled", "")
    twenty.setAttribute("disabled", "")
    fifty.setAttribute("disabled", "")
    hundred.setAttribute("disabled", "")
    twofifty.setAttribute("disabled", "")
}
function betBtnEnable() {
    five.removeAttribute("disabled")
    ten.removeAttribute("disabled")
    twenty.removeAttribute("disabled")
    fifty.removeAttribute("disabled")
    hundred.removeAttribute("disabled")
    twofifty.removeAttribute("disabled")
    playBtnsDisable()
}
function playBtnsEnable() {
    hitBtn.removeAttribute("disabled")
    stayBtn.removeAttribute("disabled")
}
function playBtnsDisable() {
    hitBtn.setAttribute("disabled", "")
    stayBtn.setAttribute("disabled", "")
}