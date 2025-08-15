const rollBtn = document.getElementById("roll");

rollBtn.onclick = function() {

  const numberOfDice = document.getElementById("numberOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceSum = document.getElementById("diceSum");
  const dice = document.getElementById("dice");
  const values = [];
  const images = [];

  console.log(typeof(numberOfDice));

  for (let i = 0; i < numberOfDice; i++) {

    const num = Math.floor(Math.random() * 6) + 1;
    values.push(num);
    images.push(`<img src="/Js-mini-projects/Dice_Roller/Dice_images/${num}.png">`);

  }

  let sum = 0;
  for (let value of values) {
    sum += value
  }

  diceResult.textContent = `Dice value : ${values.join(', ')}`;
  diceSum.textContent = `The sum of the dice result is ${sum}`;
  dice.innerHTML = images.join('');

}