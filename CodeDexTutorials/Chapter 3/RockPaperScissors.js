/*
Rock Paper Scissors is a classic game that resonates with folks from around the world. The rules are as follows:

    Rock beats Scissors.
    Scissors beat Paper.
    Paper beats Rock.

Let's use conditionals, the random number generator, and create a program that simulates the game between the player and the computer!

Begin with a player variable and give it a 0 to represent "Rock", a 1 to represent "Paper", or a 2 to represent "Scissors."

Then use Math.random() to generate a number between 0 and 2 for another computer variable.

Then, use conditionals to compare the values of player and computer to see who wins!

*/


var player = 0;
var computer = Math.floor(Math.random() * 3);

if (player == computer){
    console.log("It's a tie!");
}else if((player == 0 && computer == 2) || (player == 1 && computer == 0) || (player == 2 && computer == 1)){
    console.log("Player wins!");
}else {
    console.log("Computer wins!");
}


