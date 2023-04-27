    let scorePlayer = 0;
    let scoreComputer = 0;

    // Computer Selection
    function computerPlay() {
      let randomComputer = Math.floor(Math.random() * 3);
      console.log(randomComputer);

      switch (randomComputer) {
        case 1:
          return "rock";
          break;
        case 2:
          return "paper";
          break;
        case 3:
          return "scissor";
          break;
      }
    }

    // Player Selection
    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        console.log("DRAW");
        return "draw";
      } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
      ) {
        console.log("Player won the round");
        return "player";
      } else {
        console.log("Computer won the round");
        return "computer";
      }
    }

    //Player Input
    function game() {
      for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Do you choose rock, paper or scissor?");
        while (
          !(
            playerSelection.toLowerCase() === "paper" ||
            playerSelection.toLowerCase() === "rock" ||
            playerSelection.toLowerCase() === "scissor"
          )
        ) {
          playerSelection = prompt(
            "Try again please! Do you choose rock, paper or scissors?"
          );
        }
        console.log(`You chose ${playerSelection}`);
        let computerSelection = computerPlay();
        console.log("computer chose " + computerSelection);
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "player") {
          scorePlayer++;
        } else if (roundResult === "computer") {
          scoreComputer++;
        }
      }

      //Who is the winner
      if (scoreComputer == scorePlayer) {
        console.log("It's a draw!");
      } else if (scoreComputer > scorePlayer) {
        console.log("Computer is the winner!");
      } else {
        console.log("You are the winner!");
      }
      console.log(`the score is: Computer: ${scoreComputer} You: ${scorePlayer}`);
    }
    game();