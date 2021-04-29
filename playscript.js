/* 
 * Robert Madill
 * Student ID: 991566014
 * SYST10199 - Web Programming
 */
var comp, player, userScore = 0, compScore = 0, cont, winner;
do {
    do {
        var userPrompt = prompt("Pick #1 for Rock, #2 for Paper and #3 for Scissors");
        if (userPrompt == 1 || userPrompt == 2 || userPrompt == 3) {
            var rand = Math.floor((Math.random() * 3) + 1);
            cont = true;
        } else {
            alert("Sorry! That was a wrong input. Try again!");
            cont = false;
        }
    } while (cont == false);
    if (userPrompt == 1) {
        player = "Rock!";
    } else if (userPrompt == 2) {
        player = "Paper!";
    } else if (userPrompt == 3) {
        player = "Scissors!";
    }
    if (rand == 1) {
        comp = " Rock!";
    } else if (rand == 2) {
        comp = " Paper!";
    } else if (rand == 3) {
        comp = " Scissors!";
    }
    if (userPrompt == 1 && rand == 3) {

        userScore++;
        winner = "You!";
    } else if (userPrompt == 2 && rand == 1) {

        userScore++;
        winner = "You!";
    } else if (userPrompt == 3 && rand == 2) {

        userScore++;
        winner = "You!";
    } else if (rand == 1 && userPrompt == 3) {

        compScore++;
        winner = "Computer";
    } else if (rand == 2 && userPrompt == 1) {

        compScore++;
        winner = "Computer";
    } else if (rand == 3 && userPrompt == 2) {

        compScore++;
        winner = "Computer";
    } else if (rand == 1 && userPrompt == 1) {
        winner = "It's a tie!";
    } else if (rand == 2 && userPrompt == 2) {
        winner = "It's a tie!";
    } else if (rand == 3 && userPrompt == 3) {
        winner = "It's a tie!";
    }
    alert("You picked: " + player + "\nThe computer picked:" + comp + "\nThe winner is: " + winner + "\nYour Score: " + userScore + " Computer Score: " + compScore);
    var go = confirm("Would you like to play again?");

} while (go == true);
alert("Final Score: \nYour Score: " + userScore + "\nComputer Score: " + compScore + "\nThe Winner is: " + winner);