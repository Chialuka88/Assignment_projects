// const prompt = require("prompt-sync")({ sigint: true });
// //Select the lucky number
// const luckyNumber = 7;
// let trials = 3; // Number of attempts

// // My game loop logic
// for (let i = 1; i <= trials; i++){
//     let userGuess = parseInt(prompt('Enter your lucky number:'));

//     if (userGuess === luckyNumber) {
//         console.log("Congratulations! You've guessed the lucky number.");
//         break;
//         //Exit the loopif the user guesses correctly
//     } else {
//         console.log('Wrong guess! You have ${trials - i} tries left.');
//     }
//     if (i === trials) {
//         console.log("Sorry, you've used all your chances. Better luck next time!");
//     }
// }
//--------------------------------------------------------

 const prompt = require("prompt-sync")({ sigint: true });

 let userData = [];

 function userRegistration() {
   var username = String(prompt("Enter username?..."));
   let checkUserNamelength = username.length;
   let checkSpecialChar = username.search("@");

   if (checkUserNamelength < 10 || checkUserNamelength > 10) {
     console.log("Username must not be less than 10 char");
   } else if (checkSpecialChar < 0) {
     console.log("Username must contain @ symbol");
   } else if (checkUserNamelength == 10 && checkSpecialChar > 0) {
     var password = Number(prompt("Enter password?..."));
     let checkPasswordLength = password.length;

     let checkPasswordSpecialChar = username.search("@");
     if (checkPasswordLength < 10 || checkPasswordLength > 10) {
       console.log("Password must not be less than or greater than 10 char");
     } else if (checkPasswordSpecialChar < 0) {
       console.log("Password must contain @ symbol");
     } else if (
       checkUserNamelength == 10 &&
       checkSpecialChar > 0 &&
       checkPasswordSpecialChar == 10 &&
       checkPasswordSpecialChar > 0
     ) {
       console.log("Your username : " + username + "Your password" + password);
     }
   } else {
     console.log("Error: Try again later");
   }
 }
 userRegistration();
 