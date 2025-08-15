
const submit = document.getElementById("submit");

submit.onclick = function() {

  const totalAmount = document.getElementById("total-amount");
  const principalinput = document.getElementById("principal");
  const yearinput = document.getElementById("years");
  const rateinput = document.getElementById("rate");

  let principal = Number(principalinput.value);
  let rate = Number(rateinput.value / 100);
  let years = Number(yearinput.value);

  if(principal < 0 || isNaN(principal)) {
    window.alert("principal should be positive")
  }
  if(rate < 0 || isNaN(rate)) {
    window.alert("rate should be positive")
  }
  if(years < 0 || isNaN(years)) {
    window.alert("years should be positive")
  }

  const result = principal * Math.pow((1 + rate / 1), 1 * years)

  totalAmount.textContent = result;

}