let playGame = confirm("shall we play rock, papper, or scissors?");
if (playGame) {

  let playerChoice = prompt("Please enter rock, papper, or scissors");
  if(playerChoice){
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" ||  playerOne === "papper" || playerOne === "scissors"){
      let computoreChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computoreChoice === 1 ? "rock"
      : computoreChoice === 2 ? "papper"
      : "sissors";
      
    }else{
      alert("you didnt enter rock, papper, or scissors")
    }
  }else{
    alert("I guess you changed your mind. Maybe next time")
  }
} else { 
  alert("ok, maybe next time")
}