"use strict";
//UI variables
const message = $(".message");
const btnAgain = $(".again");
const number = $(".number");
const guess = $(".guess");
const btnCheck = $(".check");
const scoreLabel = $(".score");
const highscoreLabel = $(".highscore");

let randomNb = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let won = false;

//start game
btnCheck.click(function () {
  //to prevent click after winning
  if (!won) {
    //to prevent submitting empty numbers
    if (guess.val() == "") {
      message.html("please enter a number");
    }
    //to prevent numbers out of range
    else if (guess.val() > 20 || guess.val() < 1) {
      $(".between").css("background-color", "red");
      setTimeout(function () {
        $(".between").css("background-color", "");
      }, 100);
    }
    //main conditions
    else {
      //to prevenet playing after score is less than one
      if (score > 1) {
        //high guess
        if (guess.val() > randomNb) {
          message.html("📈 Too high!");
          score--;
          scoreLabel.html(`${score}`);
        }
        //low guess
        else if (guess.val() < randomNb) {
          message.html("📉 Too low!");
          score--;
          scoreLabel.html(`${score}`);
        }
        //correct guess
        else {
          won = true;
          highscore = score;
          highscoreLabel.html(`${highscore}`);
          message.html("🎉 Correct Number!");
          $("body").css("background-color", "green");
          number.css({
            width: "22rem",
            padding: "2rem 0rem",
            "font-size": "5rem",
          });
          number.html(`${randomNb}`);
        }
      }
      //after reaching score less than one
      else {
        message.html("YOU LOST");
        $("body").css("background-color", "red");
        number.html(`${randomNb}`);
      }
    }
  }
  //to prevent playing after winning
  else {
    message.html('🎉 Correct Number!, Click "Again!" to Play.');
  }
});

//reset
btnAgain.click(function () {
  won = false;
  message.html("Start guessing...");
  number.html("?");
  score = 20;
  scoreLabel.html(`${score}`);
  randomNb = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNb);
  guess.val("");
  $("body").css("background-color", "#222");
  number.css({
    width: "20rem",
    padding: "3rem 0rem",
    "font-size": "6rem",
  });
});
