
    const faces = ['A', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K'];
    const suits = ['s', 'h', 'c', 'd'];
    let deck = [];

    let cardValue = {
        '10': 10,
        'J': 10,
        'Q': 10,
        'K': 10,  
        'A': 11,
        '02': 2,
        '03': 3,
        '04': 4, 
        '05': 5,
        '06': 6,
        '07': 7,
        '08': 8,
        '09': 9 
    }
// creating the deck
function generateDeck() {
    console.log("generating deck")
    suits.forEach(suit => {
        faces.forEach(face => {
             deck.push({
                 'face': `card ${suit}${face}`,
                 'cardVal': cardValue[face]
                 
             })
                // console.log(deck[deck.length - 1])
         })
     })     
 }

    //  let sum = 0;
    //  for (let i = 0; i < cardValue.length; i++) {
    //     sum += cardValue[i];
    //  }
    
    
// passing out the deck
function dealCard() {
    // for (let i = 0; i < 52; i++) {
    const randomCard = Math.floor(Math.random() * (deck.length - 1));
    console.log(randomCard)
    const newCard = deck[randomCard];
    deck.splice(randomCard, 1);
    if(deck.length === 0) generateDeck();
    return newCard;
} 
// }} 
generateDeck()
dealCard()
// passing out the cards to each player
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

}
renderDeck()
// making the hit button add one card each time

function hitPlayer() {
    const cardEl5 = document.createElement('div')
    cardEl5.className = dealCard().face
    document.querySelector("#player").append(cardEl5)
    
}
function hitDealer() {
    const cardEl6 = document.createElement('div')
    cardEl6.className = dealCard().face
    document.querySelector("#dealer").append(cardEl6)

}

hit.addEventListener('click', hitPlayer);
stay.addEventListener('click', hitDealer);

function totalValue() {
    if (cardValue > 21) {
        window.alert("Get Busted!")
    }
    console.log(cardValue)
    if (cardValue === 21) {
        window.alert("Congratulations! You've got Blackjack!")
    } 
} 
totalValue()
// starting the game
// function startGame() {

// }




// hit.addEventListener('click', hitPlayer);
// stay.addEventListener('click', hitDealer);
// start.addEventListener('click', resetGame)

console.log(deck)
