// Assignment Code
var generateBtn = document.querySelector("#generate");
var passChar = ['abcdefjhijklmnopqrstuvwxyz0123456789!@#$%^&*'] 

  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  prompt("Choose length of password between 8 - 128 characters.");
  confirm("Click OK to confirm including lower case characters");
  confirm("Click OK to confirm including upper case characters");
  confirm("Click OK to confirm including numeric characters");
  confirm("Click OK to Confirm including special characters");

}