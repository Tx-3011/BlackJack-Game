let firstNumber;
let secondNumber;
let cards_El = document.getElementById("cards");
let cards = [];
let sum_El = document.getElementById("sum");
let sum = 0;
let state = document.getElementById("status");

function randomCard() {
    let value = Math.floor(Math.random() * 13) + 1;
    if (value>10){
        value=10
    }else if(value===1){
        value=11
    }
    return value;
}

console.log(randomCard());

function newGame() {
    document.getElementById("hitMe").style.display = "block";
    cards = [];
    state.textContent = "You are Alive";
    sum = 0;
    firstNumber = randomCard();
    secondNumber = randomCard();
    cards.push(firstNumber, secondNumber);
    cards_El.textContent = cards.join(" ");  // Join with a space for better readability
    sum = firstNumber + secondNumber;
    sum_El.textContent = sum;
    document.getElementById("newGame").textContent = "New Game";

    if(sum===21){
        state.textContent = "You Win"
        document.getElementById("hitMe").style.display = "none";
    }
}

function hitMe() {
    let newCard = randomCard()
    sum += newCard
    cards.push(newCard)
    cards_El.textContent = cards.join(" ");
    sum_El.textContent = sum;

    if(sum>21){
        state.textContent = "You Lose";
        document.getElementById("hitMe").style.display = "none";
    }

    if(sum===21){
        state.textContent = "You Win"
        document.getElementById("hitMe").style.display = "none";
    }
    
}
