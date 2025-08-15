
const generate = document.getElementById("generate");

generate.onclick = function (length, lower, upper, numbers, symbols) {

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const syms = "!@#$%^&*()_+";

  let allowedChars = "";
  let password = "";


  if (length <= 0)
    return "The password must be at least one character";
  if (allowedChars === 0)
    return "At least choose one condition and character";
  const passwordlength = document.getElementById("length").value;
  if (document.getElementById("lower").checked)
    lower = true;
  if (document.getElementById("upper").checked)
    upper = true;
  if (document.getElementById("numbers").checked)
    numbers = true;
  if (document.getElementById("symbols").checked)
    symbols = true;

  allowedChars += lower ? lowercase : "";
  allowedChars += upper ? uppercase : "";
  allowedChars += numbers ? nums : "";
  allowedChars += symbols ? syms : "";

  for (let i = 0; i < passwordlength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length)
    password += allowedChars[randomIndex];
  }

  document.getElementById("password").textContent = `The password is: ${password}`;

}

