function createDeck() {
    var values = ['A', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K'];
    var suits = ['s', 'h', 'c', 'd'];
    var deck = [];


for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (var valueCounter = 0; valueCounter < 13; valueCounter++) {
        deck.push(values[valueCounter] + suits[suitCounter]);
}}
return deck;
}
function shuffleDeck(deck) {
    for(var i = 0; i < 52; i++) {
        var newCard = deck[i];
        var randomCard = Math.floor(Math.random() * 52);
        deck[i] = deck[randomCard];
        deck[randomCard] = newCard;
}}

console.log(deck)



hit.addEventListener('click', hitPlayer);
stay.addEventListener('click', hitDealer);
// start.addEventListener('click', resetGame)


