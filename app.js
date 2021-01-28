
let button = document.getElementById('shuffleButton');
//let shuffleAndReview = () =>  {
  // console.log(deck.shuffle())
  // deck.deal();
  // console.log(deck.deck);
//}

//for (let i = 0; i <= .length; i++)
button.addEventListener("click", flipCards)




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
function flipCards(e, mydeck){
  let i = 0; 
  while(i < mydeck.length){
    // show card at mydeck[i]
    let interval = setInterval(timer,500)
    function timer(num) {
      let element = document.querySelector(`.${divD.className}`);
      let style = getComputedStyle(element);
      let backgroundImage = style.backgroundImage;
      let parentRightImage = document.querySelector('.parentLeftImage');
      
    } i++;
  }
}


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

//---------------

//Target divD and place it within parentLeft div when shuffling

//Target suit-container class and remove the shuffle and leave static

//3 function  1 CLICKING 1 appearingRIGHTparent 1 flipping leftpRENTR










//--------------
//cardSelected()
// * 4 * when card 'click' - run function check
// if(cardSelected === true) {
//                 = 

// } else if(cardSelected === false){
//                  =

// }

// }
// function eventHandler(event) {
//   if (event.type == 'fullscreenchange') {
//     /* handle a full screen toggle */
//   } else /* fullscreenerror */ {
//     /* handle a full screen toggle error */
//   }
// }
// if card correct go to next choice
//  else incorrect  - Game Over " The nature of life is impermenance"

// * 5 * Need 2 arrays
    // one for order selection clicked
 //   let selectionClicked = []
    // one for order cards shuffled
    //let mydeckShuffled = []