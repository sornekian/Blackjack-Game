const faces = ['A', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K'];
const suits = ['s', 'h', 'c', 'd'];
let deck = [];

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
let earnings = 1000

const dealerDiv=  document.querySelector('.dealer')
const hitBtn = document.getElementById('hit')
const stayBtn = document.getElementById('stay')
const resetBtnEl = document.createElement('button')
const ten = document.getElementById('ten')
const twenty = document.getElementById('twenty')
const fifty = document.getElementById('fifty')
const hundred = document.getElementById('hundred')

let games = document.getElementById('games')
let wins = document.getElementById('wins')
let bank = document.getElementById('bank')
let betAmount = document.getElementById('betAmount')

const betMsg = document.querySelector('.betMsg')
let betBtns = document.querySelectorAll('.betBtn')
let message = document.querySelector('h2')
let statText = document.querySelector('stats')
let streak = document.querySelector('streak')

////
////

// const messageEl = document.querySelector("h4")
// const messageEl1 = document.querySelector("h5")
// const doneEl = document.querySelector(".finish")
// let playerSum = 0;
// let dealerSum = 0;

// function generateDeck() {
//     suits.forEach(suit => {
//         faces.forEach(face => {
//             deck.push({
//                 'face': `card ${suit}${face}`,
//             })
//         })
//     })
// }
// let playerHand = []
// let dealerHand = []

// function dealCard() {
//     const randomCard = Math.floor(Math.random() * (deck.length - 1));
//     const newCard = deck[randomCard];
//     deck.splice(randomCard, 1);
//     if (deck.length === 0) generateDeck();
//     return newCard;
// }
// generateDeck()
// dealCard()

// function renderDeck() {
//     const cardEl = document.createElement('div')
//     cardEl.className = dealCard().face
//     document.querySelector("#player").append(cardEl)

//     const cardEl2 = document.createElement('div')
//     cardEl2.className = dealCard().face
//     document.querySelector("#dealer").append(cardEl2)

//     const cardEl3 = document.createElement('div')
//     cardEl3.className = dealCard().face
//     document.querySelector("#player").append(cardEl3)

//     const cardEl4 = document.createElement('div')
//     cardEl4.className = dealCard().face
//     document.querySelector("#dealer").append(cardEl4)

//     playerHand.push(cardEl.className)
//     playerHand.push(cardEl3.className)
//     dealerHand.push(cardEl2.className)
//     dealerHand.push(cardEl4.className)
// }
// function hitPlayer() {
//     const cardEl5 = document.createElement('div')
//     cardEl5.className = dealCard().face
//     document.querySelector("#player").append(cardEl5)
//     playerHand.push(cardEl5.className)
//     console.log(dealerHand)
// }
// function hitDealer() {
//     const cardEl6 = document.createElement('div')
//     cardEl6.className = dealCard().face
//     document.querySelector("#dealer").append(cardEl6)
//     dealerHand.push(cardEl6.className)
// }
// function playerCardStringToNum() {
//     for (i = 0; i < playerHand.length; i++) {
//         if (typeof (playerHand[i]) === "string") {
//             playerHand[i] = playerHand[i][playerHand[i].length - 1]
//             if (playerHand[i] === "A") {
//                 playerHand[i] = 11 || 1
//             }
//             if (playerHand[i] === "K" || playerHand[i] === "0" || playerHand[i] === "Q" || playerHand[i] === "J") {
//                 playerHand[i] = 10
//             }
//             playerHand[i] = parseInt(playerHand[i])
//         }
//     }
// }
// function dealerCardStringToNum() {
//     for (i = 0; i < dealerHand.length; i++) {
//         if (typeof (dealerHand[i]) === "string") {
//             dealerHand[i] = dealerHand[i][dealerHand[i].length - 1]
//             if (dealerHand[i] === "A") {
//                 dealerHand[i] = 11
//             }
//             if (dealerHand[i] === "K" || dealerHand[i] === "0" || dealerHand[i] === "Q" || dealerHand[i] === "J") {
//                 dealerHand[i] = 10
//             }
//             dealerHand[i] = parseInt(dealerHand[i])
//         }
//     }
// }
// function calcTotal() {
//     dealerCardStringToNum();
//     playerCardStringToNum();
//     console.log(playerSum)
//     playerHand.forEach(function (cardValue) {
//         playerSum += cardValue
//     })
//     console.log(playerSum)
//     dealerHand.forEach(function (cardValue) {
//         dealerSum += cardValue
//     })
// }
// function compareHands() {
//     calcTotal();  
//     console.log("playerSum: ", playerSum, " dealerSum: ", dealerSum)
//     console.log("playerHand: ", playerHand, " dealerHand: ", dealerHand)
//     if (playerSum === 21) { 
//         messageEl.innerHTML = "Blackjack! Return of the Jack!"
//     } else if (playerSum > 21) {
//         messageEl.innerHTML = "You Lose! Dealer Wins!"
//     } else if (dealerSum > 21) {   
//         messageEl.innerHTML = "Congratulations! You Win!"
//     } else if (dealerSum === 21) {    
//         messageEl.innerHTML = "You Lose! Dealer Wins!"
//     } else if (dealerSum < 22 && dealerSum > playerSum) {
//         messageEl.innerHTML = "You Lose! Dealer Wins!"
//     } else if (playerSum < 22 && playerSum > dealerSum) {
//         messageEl.innerHTML = "Congratulations! You Win!"
//     } else if (dealerSum = playerSum) {     
//         messageEl.innerHTML = "Holy Cow, It's a Push!"     
//     } else {
//        messageEl.innerHTML = "Bummer! You Lose!"
//     }
//     messageEl1.innerHTML = `Player Total = ${playerSum}, Dealer Total = ${dealerSum}`    
// }
// function startGame() {
//     renderDeck();
// }
// let resetGame = () => {
//     location.reload();
// }
// hit.addEventListener('click', hitPlayer);
// stay.addEventListener('click', hitDealer);
// finish.addEventListener('click', compareHands);
// start.addEventListener('click', startGame);
// restart.addEventListener('click', resetGame)