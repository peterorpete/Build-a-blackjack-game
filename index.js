// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 17;
let secondCard = 4;
let sum = firstCard + secondCard;
let haBlackJack = false;
let isAlive = true;

if (sum <= 20) {
 console.log("do you want to draw a new card");
} else if (sum === 21) {
 console.log("Wohoo you have got BlackJack!");
 haBlackJack = true;
} else {
 console.log("Your are out of the game");
 isAlive = false;
}

// Cash out!
console.log(haBlackJack);
