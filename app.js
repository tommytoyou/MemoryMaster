let button = document.getElementById('shuffleButton');
//let shuffleAndReview = () =>  {
  // console.log(deck.shuffle())
  // deck.deal();
  // console.log(deck.deck);
//}

//for (let i = 0; i <= .length; i++)
// button.addEventListener("click", flipCards)

button.addEventListener("click", () => {
  flipCards(mydeck)
})


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
let mydeck = deck.shuffle();
// this is my array



//* 1 * display card and write a loop for selection

//for (let i = 0; i < values.length; i++)
// * 2 *  add a timer for display of card sequence 500 / card 

function flipCards(mydeck){
    let intervalTracker = null
    let cardIndex = 0
    let leftCard = document.querySelector(".parentLeftImage")
    intervalTracker = setInterval(() =>{
      if (cardIndex === mydeck.length) {
        leftCard.setAttribute("src", "assets/playing-cards-back.png")
        console.log('stop')
        clearInterval(intervalTracker)
      }else {
        console.log(cardIndex)
       leftCard.setAttribute("src", `assets/${mydeck[cardIndex].value}D.png`)

        console.log("keep incrementing")
        cardIndex++
      }
    },500)
}
console.log(mydeck[0].value)
// let interval = setInterval(timer,500)
// function timer(num) {
//   for (let i = 0; i < mydeck.length; i++)
// num -= 1
// console.log(num)
// if (num=== 0){
//   console.log("Review Complete")
//    clearInterval(interval)
// }
//for (let i = 0; i < values.length; i++)

// } 
// timer(9)

// push all images into selection array


// * 3 * Render images in selection area
//const cardSelected = (mydeck) => {
  for (let i = 0; i < mydeck.length; i++){
    let divD = document.createElement("div");
    console.log(divD)
    let newId = mydeck[i]
    divD.classList.add(`D${mydeck[i].value}`)

    // onclick() behavior for rightCard

    //let cardCount = 0
///------------------

//--------------------
    divD.onclick = function pickCard() {
      //1.)store class of div 
      //alert(divD.classList);
      let element = document.querySelector(`.${divD.className}`);
      let style = getComputedStyle(element);
      let backgroundImage = style.backgroundImage;
      let parentRightImage = document.querySelector('.parentRightImage');
      //let parentRightStyle = getComputedStyle(parentRightImage);
      parentRightImage.src = `.${backgroundImage.slice(60, -2)}`;
      
      // leftCard behavior
      // cardCount = cardCount + 1
      cardCount += 1
     
      console.log(mydeck[cardCount].value)
    

    }
    document.querySelector('.suit-container').append(divD);
  }
