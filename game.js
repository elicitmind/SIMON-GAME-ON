let userClickedPattern = [];
let gamePattern = [];
const buttonCollors = ["red", "blue", "green", "yellow"];
let level = 1;

//////////////////GAME-START////////////
$(document).on("keydown", function() {
  if (gamePattern.length == 0) {
   $("#level-title").text('LECIMY');
   setTimeout( () => {
    nextSequence();
  }, 500)
  }
})
///////WHAT HAPPENS ON CLICK
$(".btn").on("click", function() {
  let userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
})
////////////???????????????/////////////////
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("SUCCESS");

    if (userClickedPattern.length === gamePattern.length) {
    setTimeout(function() {
      nextSequence();
    }, 1000);
}

} else {
  playSound("wrong");
  $("#level-title").text("Focus, try again");
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  }, 200);
  startOver();
}
}







/////////////EXTRA FLASH EFECT ON HOVER///
$(".btn").on("mouseover", function() {
  $(this).fadeOut(100).fadeIn(100);
})
////////////////ADD-CLASS/////////////////
function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function() {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}
//////////MAIN SEQUENCE FUNCTION///////////////
function nextSequence() {
  userClickedPattern = [];

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonCollors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  $("#level-title").text("Level " + level);
  level++;
  playSound(randomChosenColour);
}
///////////AUDIO//////////////////////
function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

////////////////////START OVER//////////////////
const startOver = () => {
  level = 1;
  gamePattern = [];
  let randomChosenColour
  let randomNumber

}




// let color = gamePattern[gamePattern.length-1];
// function playSound(color) {
// switch (color) {
//   case "blue":
//     let blueSound = new Audio('sounds/blue.mp3');
//     blueSound.play();
//     break;
//   case "green":
//     let greenSound = new Audio('sounds/green.mp3');
//     greenSound.play();
//     break;
//   case "red":
//     let redSound = new Audio('sounds/red.mp3');
//     redSound.play();
//     break;
//   case "yellow":
//     let yellowSound = new Audio('sounds/yellow.mp3');
//     yellowSound.play();
//     break;
//   default:
//
// }
// }
// playSound(color);
