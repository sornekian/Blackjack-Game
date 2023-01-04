
    const faces = ['A', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K'];
    const suits = ['s', 'h', 'c', 'd'];
    let deck = [];

    function generateDeck() {
        suits.forEach(suit => {
            faces.forEach(face => {
                 deck.push({
                    'face': suit + face,
                })
            })
        })
    }

function shuffleDeck() {
    for (var i = 0; i < 52; i++) {
        var newCard = deck[i];
        var randomCard = Math.floor(Math.random() * 52);
        deck[i] = deck[randomCard];
        deck[randomCard] = newCard;
}}
generateDeck()
shuffleDeck()

function renderDeck() {
      const cardEl = document.createElement('div')
      cardEl.className = 'card ' + deck[0].face
      document.querySelector("#player").append(cardEl)

      cardEl2 = document.createElement('div')
      cardEl2.className = 'card back'
      document.querySelector("#dealer").append(cardEl2)

      const cardEl3 = document.createElement('div')
      cardEl3.className = 'card ' + deck[2].face
      document.querySelector("#player").append(cardEl3)

      cardEl4 = document.createElement('div')
      cardEl4.className = 'card ' + deck[3].face
      document.querySelector("#dealer").append(cardEl4)


}

renderDeck()
// hit.addEventListener('click', hitPlayer);
// stay.addEventListener('click', hitDealer);
// start.addEventListener('click', resetGame)

console.log(deck)
