
function start() {

  let min = 1;
  let max = 100;

  let answer = Math.floor(Math.random() * max) + min;

  console.log(answer);

  let attempts = 6;
  let guess = 0;
  let running = true;

  while (running) {

    guess = window.prompt(`Guess a number between ${min} and ${max}`)
    guess = Number(guess);

    if (isNaN(guess)) {
      window.alert("please enter a valid number");
    } else if (guess < min || guess > max) {
      window.alert("please enter a valid number");
    } else {
      attempts++;
      if (guess == answer) {
        running = false;
      } else if (guess > answer) {
        max = guess;
      } else {
        min = guess;
      }
    }
  }
}
