// JavaScript File
var createComputerChoice = function (){
    var RPS = ["rock", "paper", "scissor"];
    var pick = Math.floor(Math.random()*3);
    var choice= RPS[pick];
    return choice;
};

var playerScore = 0;
var computerScore = 0;

var chooseWinner= function(playerChoice, computerChoice){
     if (playerChoice == "rock" && computerChoice == "rock") {
        winner = "tie"
    };
    if (playerChoice == "rock" && computerChoice == "paper") {
        winner = "computer";
    };
    if (playerChoice == "rock" && computerChoice == "scissor") {
        winner = "player"
    }
    if (playerChoice == "paper" && computerChoice == "paper") {
        winner = "tie"
    };
    if (playerChoice == "paper" && computerChoice == "scissor") {
        winner = "computer"
    };
    if (playerChoice == "paper" && computerChoice == "rock") {
        winner = "player"
    }
    if (playerChoice == "scissor" && computerChoice == "scissor") {
        winner = "tie"
    };
    if (playerChoice == "scissor" && computerChoice == "rock") {
        winner = "computer"
    };
    if (playerChoice == "scissor" && computerChoice == "paper") {
        winner = "player"
    }
    
    
    
    if (winner == "computer") {
        
        $("#winner").html("computer wins")

    }
    if (winner == "player") {
        $("#winner").html("player wins")
        playerScore = playerScore + 1;
        $("#player-score").html(playerScore)
    }
    if (winner == "tie") {
        $("#winner").html("Draw")
    }
}




$(document).ready(function() {
    var computerChoice = createComputerChoice();
    var playerChoice = 
 
     $("#rock").click(function() {
        computerChoice = createComputerChoice();
        playerChoice = "rock"
        chooseWinner(playerChoice, computerChoice);
    });
    
    $("#paper").click(function() {
        computerChoice = createComputerChoice();
        playerChoice = "paper"
        chooseWinner(playerChoice, computerChoice);
    });
    
     $("#scissor").click(function() {
        computerChoice = createComputerChoice();
        playerChoice = "scissor"
        chooseWinner(playerChoice, computerChoice);
         
     });
     
});
