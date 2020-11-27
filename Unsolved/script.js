

// Assignment Code
var generateBtn = document.querySelector("#generate")
var passChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  "!", "@", "#", "$", "%", "^", "&", "*"];


var promptLength = prompt("Choose length of password between 8 - 128 characters.")

function generatePassword() {
  // Loop through the array
  for(var i = 0; i < passChar.length; i ++) {
    return passChar.random
  }

  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);
