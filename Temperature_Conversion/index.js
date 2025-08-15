
const toC = document.getElementById("toC");
const toF = document.getElementById("toF");
const textBox = document.getElementById("textBox");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

let temp;

submit.onclick = function convert() {
  temp = Number(textBox.value);
  
  if (toF.checked) {
    temp = (temp * 9 / 5) + 32;
    result.textContent = temp;
  } else if(toC.checked){
    temp = (temp - 32) * 5 / 9;
    result.textContent = Math.floor(temp);
  } else {
    result.textContent = "select a unit";
  }
}
