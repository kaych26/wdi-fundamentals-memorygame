console.log("Up and running!");

let cards = [
	{
	rank: "queen",
	suit: "hearts", 
	ardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diamonds", 
	ardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts", 
	ardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds", 
	ardImage: "images/king-of-diamonds.png"
	}

]
let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}

function flipCard(cardId) {
	console.log ("User flipped " + cards[cardId].rank);
	console.log ("User flipped " + cards[cardId].suit);
	console.log ("User flipped " + cards[cardId].ardImage);

	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}
flipCard(0);
flipCard(2);