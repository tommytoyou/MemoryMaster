
let button = document.querySelector('button');
let shuffleAndReview = deck.shuffle {
  
}
button.addEventListener("click", ShuffleAndReview())





class Card {
    constructor(suit, value) {
      this.suit = suit;
      this.value = value;

    }
}

class Deck {
  constructor() {
    this.deck = [];
  }
  createDeck(suits, values) {
    for(let suit of suits) {
      for(let value of values) {
        this.deck.push(new Card(suit, value));
      }
      }
      return this.deck.length;
  }
  shuffle() {
    let counter = this.deck.length, temp, i;

    while(counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.deck[counter];
      this.deck[counter] = this.deck[i];
      this.deck[i] = temp;    
    }
    return this.deck;
  }
  deal() {
    let hand = [];
    while(hand.length < 9) {
      hand.push(this.deck.pop());
    }
    return hand;
  }
}
    let suits = ['Diamonds'];
    let values = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let deck = new Deck();
deck.createDeck(suits, values);
console.log(deck.shuffle());
console.log(deck.deal());






// let interval = setInterval(timer,1000)
// function timer(num) {
// num -= 1
// console.log(num)
// if (num=== 0){
//   console.log("I am done")
//    clearInterval(interval)
// }


// } 
// timer(5)