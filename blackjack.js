// deck
const faces = ['A', 'K', 'Q', 'J', '10', '09', '08', '07', '06', '05', '04', '03', '02'];
const suits = ['d', 'h', 'c', 's'];
let multipleDecks = [];
// contestants
const dealer = document.getElementById("dealer");
const player = document.getElementById("player");
let dealerHand = [];
let playerHand = [];
// buttons
const hit = document.getElementById("hit");
const stay = document.getElementById("stay");
const button_container = document.getElementById("button-container")
const start_game = document.getElementById("start");



const generateDeck = () => {
    const deck = [];
    faces.forEach((face) => {
        suits.forEach((suit) => {
            const card = face + suit;
            deck.push(card);
        })
    })
    return deck;
}

const shuffleDecks = (numb) => {
    for (let i = 0; i < numb; i++) {
        const newDeck = generateDeck ();
        multipleDecks = [...multipleDecks, ...newDeck];
    }
    

}

const selectRandomCard = () => {
    const randomCards = Math.floor(Math.random() * multipleDecks.length);
    const card = multipleDecks[randomCard];
    multipleDecks.splice(randomCard)
    return card;
}




shuffleDecks(2);
selectRandomCard();







// goals: 
// generate deck of cards -> 52 which is 13 * 4
// shuffle deck
// select a random card
// deal hands to dealer and player 1
// hide one of the dealer cards
// make the hit or stay options
// make the hit button add 1 card
// make the stay option transfer to the dealers turn
// determine the winner
// show message of who won and why

