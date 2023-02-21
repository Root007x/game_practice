"use strict";

let guessNumber = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    document.querySelector(".message").textContent = "! No Number";
  } else if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number !";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "! Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you Lost !";
      document.querySelector(".score").textContent = "0";
    }
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "! Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you Lost !";
      document.querySelector(".score").textContent = "0";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".guess").value = "";
});
