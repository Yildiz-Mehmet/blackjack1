let Cards, firstNumber, secondNumber, thirdNumber, sum;
firstNumber = GetRandomNumber();
secondNumber = GetRandomNumber();
Cards = [firstNumber, secondNumber];
sum = firstNumber + secondNumber;
let hasBlackJack = false;
let isAlive = true;
let message, messageEl;
message = "";
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
messageEl = document.getElementById("message-el");

function GetRandomNumber() {
  let GetRandomNumber = Math.floor(Math.random() * 13) + 1;
  if (GetRandomNumber > 10) {
    return 10;
  } else if (GetRandomNumber === 1) {
    return 11;
  } else {
    return GetRandomNumber;
  }
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < Cards.length; i++) {
    cardsEl.textContent += Cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "Wohoo! You've got BlackJack ! ";
    document.getElementById("win").style.display = "block";
  } else {
    isAlive = false;
    message = "You've out of the game!";
  }
  messageEl.textContent = message;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let thirdNumber = GetRandomNumber();
    sum += thirdNumber;
    Cards.push(thirdNumber);
    startGame();
  }
}

function reset() {
  window.location.reload();
}
