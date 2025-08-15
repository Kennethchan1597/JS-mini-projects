const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel").textContent;

let count = 0;

decreaseBtn.onclick = function() {
  count--;
  document.getElementById("countLabel").textContent = count;
}
increaseBtn.onclick = function() {
  count++;
  document.getElementById("countLabel").textContent = count;
}
resetBtn.onclick = function() {
  count = 0;
  document.getElementById("countLabel").textContent = count;
}