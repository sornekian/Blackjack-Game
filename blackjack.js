var canHit = true;


function generateDeck() {
    const faces = ['A', 'K', 'Q', 'J', '10', '09', '08', '07', '06', '05', '04', '03', '02'];
    const suits = ['d', 'h', 'c', 's'];
    const deck = [];

    for (let x=0; x < faces.length; x++) {
        for (let y=0; y < suits.length; y++) {
            deck.push(suits[y] + '.' + faces[x]);
        }
    }
    // console.log(deck);
}

function shuffleDeck () {
    for (let x = 0; x < deck.length; x++) {
        let y = Math.floor(Math.random() * deck.length);
    }
}

// function renderDeck() {
//     deck.forEach(card => {
//         const cardEl = document.createElement ('div')
//         cardEl.className = 'card ' + card.face
//         document.querySelector('body').append(cardEl)
//     })
// }

window.onstart = function() {
    generateDeck();
    shuffleDeck();
}