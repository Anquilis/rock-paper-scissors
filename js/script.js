// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
console.log("test")
//GLOBAL VARIABLES
/* global $ */

var choices = ["rock","paper","scissors"];
var winCounter = 0;
var loseCounter = 0;

// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){   
  //GENERATE COMPUTER CHOICE
  //TAKE USER INPUT, STORE INTO A VARIABLE, AND LOWERCASE
  var computerChoice = choices[Math.floor(Math.random()*choices.length)];
  var userChoice = $("#input").val().toLowerCase();
  //! === not 
  //if it is NOT a valid choice(returns false), show ERROR
  if (!isValidChoice(userChoice)){
    //ERROR MESSAGE
    $("#error").text("That is an invalid choice! Try again!");
  } else {
    clearResults();
    calculateResult(userChoice, computerChoice);
    showResults(userChoice, computerChoice);
    
  }
});

function isValidChoice (userChoice){
  return (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors");
}

function clearResults (){
  $("#input").val("");
  $("#error").text("");
  $("#result").text("");
}

function calculateResult (userChoice, computerChoice){
  if (userChoice === computerChoice) {
      $("#result").text("It is a tie!");  
    } 
    
    if (userChoice === "rock") {
      if(computerChoice === "paper") {
        $("#result").text("Computer wins!");
        counter("Lose");
      } else if (computerChoice === "scissors"){
        $("#result").text("Player wins!"); 
        counter("Win");
      }
    }

    if (userChoice === "paper") {
      if(computerChoice === "scissors") {
        $("#result").text("Computer wins!");
        counter("Lose");
      } else if (computerChoice === "rock"){
        $("#result").text("Player wins!"); 
        counter("Win");
      }
    }

    if (userChoice === "scissors") {
      if(computerChoice === "rock") {
        $("#result").text("Computer wins!");
        counter("Lose");
      } else if (computerChoice === "paper"){
        $("#result").text("Player wins!"); 
        counter("Win");
      }
    }  
}

function counter(result){
  if (result === "Win"){
    winCounter = winCounter + 1;
    $("#winCounter").text(winCounter);
  } else if (result === "Lose"){
    loseCounter = loseCounter + 1;
    $("#loseCounter").text(loseCounter);
  }
}


function showResults (userChoice, computerChoice){
  $("#userChoice").text(userChoice);
  $("#computerChoice").text(computerChoice);
}


