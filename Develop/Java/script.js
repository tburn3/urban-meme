// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    var password = [];
    var confirmLength = window.prompt("Choose between 8 and 128 characters for your password.");
        confirmLength = parseInt(confirmLength);
        if (confirmLength >= 8 && confirmLength <= 128) { 
            console.log("Character amount: " + confirmLength);
          } else {
            window.alert("Not a valid entry");
            return generatePassword();
          }
    var confirmLower = window.confirm("Would you like to include lowercase letters in your password?");
        console.log("Lowercase: " + confirmLower);
        if (confirmLower = true) {
            for (var i = 0; i < (confirmLength /4); i++) {
              var lowercaseLetter = getRandomLower();
              password.push(lowercaseLetter);
            }
            getRandomLower();
            //console.log(getRandomLower);
          }
    var confirmUpper = window.confirm("Would you like to include uppercase letters in your password?");
        console.log("Uppercase: " + confirmUpper);
        if (confirmUpper = true) {
            for (var i = 0; i < (confirmLength /4); i++) {
              var uppercaseLetter = getRandomUpper();
              password.push(uppercaseLetter);
            }
            getRandomUpper();
            //console.log(getRandomUpper);
          }
    var confirmNumeric = window.confirm("Would you like to include numbers in your password?");
        console.log("Numbers: " + confirmNumeric);
        if (confirmNumeric = true) {
            for (var i = 0; i < (confirmLength /4); i++) {
              var numbers = getRandomNumber();
              password.push(numbers);
            }
            getRandomNumber();
            //console.log(getRandomNumber);
          }
    var confirmSymbol = window.confirm("Would you like to include special characters in your password?");
        console.log("Symbols: " + confirmSymbol);
        if (confirmSymbol = true) {
            for (var i = 0; i < (confirmLength /4); i++) {
              var symbols = getRandomSymbol();
              password.push(symbols);
            }
            alert("Password: " + password);
            getRandomSymbol();
            //console.log(getRandomSymbol);
          }
    return password;
}

function getRandomLower() {
    const getRandomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return getRandomLower[Math.floor(Math.random() * getRandomLower.length)];
}

function getRandomUpper() {
    const getRandomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return getRandomUpper[Math.floor(Math.random() * getRandomUpper.length)];
}

function getRandomNumber() {
    const getRandomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return getRandomNumber[Math.floor(Math.random() * getRandomNumber.length)];
}

function getRandomSymbol() {
    const getRandomSymbol = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", " ", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^","_", "`", "{", "|", "}", "~"];
    return getRandomSymbol[Math.floor(Math.random() * getRandomSymbol.length)]; 
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);