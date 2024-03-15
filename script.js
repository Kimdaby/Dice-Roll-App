const container = document.getElementById("diceRollContainer");
const labelList = document.getElementById("numberOptions");
let rollDiceButton = document.getElementById("rollDice");
rollDiceButton.addEventListener("click", function (event) {
  event.preventDefault();
  let diceResult = Math.floor(Math.random() * 6) + 1;
  let className = "";
  const x = document.getElementById("numberOptions");
  const xValue = x.options[x.selectedIndex].value;

  let bet = document.getElementById("finalResults");
  bet.textContent =
    `You bet the number ` + xValue + ` and dice rolled ` + diceResult;

  if (diceResult == 1) {
    className = "&#9856";
  } else if (diceResult == 2) {
    className = "&#9857";
  } else if (diceResult == 3) {
    className = "&#9858";
  } else if (diceResult == 4) {
    className = "&#9859";
  } else if (diceResult == 5) {
    className = "&#9860";
  } else if (diceResult == 6) {
    className = "&#9861";
  } else {
    console.log("error");
  }
  document.getElementById("dice").innerHTML = className;
});
