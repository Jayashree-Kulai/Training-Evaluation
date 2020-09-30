// Class Eights {
//     constructor() {
//          this.one = Player();
//          this.two = Player();
//          this.drawPile = Hand();
//          this.discardPile = Hand();
//     }
//     playGame() {
//         Player player = one;

//         // keep playing until there's a winner
//         while (!isDone()) {
//             displayState();
//             takeTurn(player);
//             player = nextPlayer(player);
//         }

//         // display the final score
//         one.displayScore();
//         two.displayScore();
//     };
//     isDone() {
//         return one.hand.isEmpty() || two.hand.isEmpty();
//     }
// };
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;

        if (suit == 'clubs') {
            this.value = value;
        }
        else if (suit == 'diamonds') {
            this.value = value + 13;
        } 
        else if (suit == 'hearts') {
            this.value = value + 26;
        }
        else {
            this.value = value + 39;
        }
    
    }
}
class  Deck {
    constructor() {
        this.cards = [];    
    }  

    createDeck() {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9',     '10', 'jack', 'queen', 'king'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }

    shuffleDeck() {
        let randomCardPos, randomCard;
         for(let i = 0; i <= this.cards.length - 1; i++) {
                 randomCardPos = Math.floor((Math.random() * this.cards.length)); // choose a random number between i and length - 1
                 randomCard = this.cards[randomCardPos]; 
                 this.cards[randomCardPos] = this.cards[i]; // swap the ith card and the randomly-chosen card
                 this.cards[i] = randomCard;
         } 
    }

    sortDeck(cards) {
        let temp;
        for (let i = 0; i < cards.length - 1; i++) {
            for (let j = 1; j < cards.length; j++) {
                if (cards[j].value < cards[j - 1].value) {
                    temp = cards[j];
                    cards[j] = cards[j-1];
                    cards[j-1] = temp;
                }
            }
        }
    }
}

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
        this.faceUpCards =[];
    }
}
class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
        //this.faceUp=[];
    }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();
        this.players[0].playerCards = d.cards.slice(0, 10);
       this.players[1].playerCards = d.cards.slice(10,20);
       this.cardsInMiddle = d.cards.slice(20,52);
      
       this.players[0].faceUpCards = this.cardsInMiddle.splice(0,1);
      // this.players[1].faceUpCards = this.cardsInMiddle.splice(0,1);
     //console.log("this first face element ",this.players[0].faceUpCards[0].suit);
      this.player1Turn();
      // console.log(this.cardsInMiddle.length);
    }
    player1Turn() {
        console.log("Face Up card is ", this.players[0].faceUpCards[0]);
        console.log("player 1 is playing....Matched cards are... ");
        for(let i=0;i<this.players[0].playerCards.length;i++){
            if(this.players[0].faceUpCards[0].suit == this.players[0].playerCards[i].suit 
                || this.players[0].faceUpCards[0].rank == this.players[0].playerCards[i].rank )
            console.log(this.players[0].playerCards[i]);
        }
        return false;
    }
}
let gameBoard = new Board();
gameBoard.start('Jayashree', 'Soumya');
console.log(gameBoard.players[0]);



