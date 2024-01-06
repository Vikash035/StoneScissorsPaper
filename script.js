let userScore = 0;

let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];

  const randIdx = Math.floor(Math.random() * 3);

  return options[randIdx];
};

const drawGame = (choiceId) => {
  msg.innerText = "Game was Draw, play again.";

  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, choiceId, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;

    msg.innerText = `you win🎉! your ${choiceId} beats ${compChoice}`;
    msg.style.backgroundColor = "green";

   document.innerHTML=marquee("🎈🎈")

  } else {
    compScore++;
    compScorepara.innerText = compScore;

    msg.innerText = `you lost🙈 ${compChoice} beats ${choiceId}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (choiceId) => {
  console.log("user choice=", choiceId);

  //Generate Computer choice

  const compChoice = genCompChoice();

  console.log("comp choice = ", compChoice);

  if (choiceId === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (choiceId === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (choiceId === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, choiceId, compChoice);
  }
};

choices.forEach((choice) => {
  // console.log(choice);

  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");

    playGame(choiceId);

    // console.log("choice was clicked",choiceId);
  });
});
