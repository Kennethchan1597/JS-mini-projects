const checkBox = document.getElementById("checkBox");
const visa = document.getElementById("visa");
const master = document.getElementById("master");
const paypal = document.getElementById("paypal");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

submit.onclick = function() {
  
  subResult.textContent = checkBox.checked ? "You are subscribed" : "You are not subscribed"
  
  if(visa.checked) {
    payResult.textContent = "You paid by Visa";
  } else if(master.checked) {
    payResult.textContent = "You paid by Master";
  } else if(paypal.checked) {
    payResult.textContent = "You paid by PayPal";
  }
}