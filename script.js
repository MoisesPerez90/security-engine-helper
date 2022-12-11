// Assignment Code
var generateBtn = document.querySelector("#generate");
// Setting all the possible character types 
var charTypes = ["uppercase", "lowercase", "numeric", "special"];
var charListTypes = {
  uppercase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase : "abcdefghijklmnopqrstuvwxyz",
  numeric : "0123456789",
  special : " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
};

// Set the available string to use in the password depending on the clients configuration
var stringList = "";
// Set the new password variable
var newPassword = "";

// Include the character types acording to the client's selection
function stringTypes () {
  var checkNumTypes = 0;
  for (var i=0; i<charTypes.length; i++){
    var check = window.confirm("Do you want to add some " + charTypes[i] + " characters into your password");
    if (check) {
      stringList += charListTypes[charTypes[i]];
      checkNumTypes += 1;
    }
  }
  if (checkNumTypes == 0){
    window.alert("You have to select at least one character type");
    stringList = "";
    stringTypes();
  }

  else{
    return stringList;
  }  
}

function genNewPassword (){
  // Set the length of the password
  var passwordLenght = window.prompt("¿How many characters do you want your password have? (Min: 8; Max: 128)");
  /*The next condition assigment was influenced by the Foolish Developer user
    from Dev webpage. (https://dev.to/code_mystery/random-password-generator-using-javascript-6a)*/
  // Generate a random number to select a string from the stringList variable
    if (passwordLenght <= 128 && passwordLenght >= 8){
    stringTypes();
    for (var i = 0; i<passwordLenght; i++){
      var randomNumber = Math.floor(Math.random() * stringList.length);
      newPassword += stringList.substring(randomNumber, randomNumber + 1);
    }
  }
  else{
    window.alert("You didn't select a number between the specified range");
    genNewPassword();
  }  
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  // Call the function genNewPassword to obtain the created new password
  var password = genNewPassword();
  // Select the id where we are going to write the new password
  var passwordText = document.querySelector("#password");
  // Display the new password to the page
  passwordText.value = password;
  // Display the new password in an alert
  window.alert("Your new password is: " + newPassword);
  // Reset the new password variable
  newPassword = "";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

