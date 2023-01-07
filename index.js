// var buttonColors=["red", "blue", "green", "yellow"];
// var gamePattern=[];
// var userClickedPattern=[];
// // function nextSequence(){
// //     level++;
// //     $("#level-title").text("Level"+level);
// //     var randomNumber=Math.floor(Math.random()*4);
// //     var randomChosenColor=buttonColors[randomNumber];
// //     gamePattern.push(randomChosenColor);

// //     $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
// //     var audio=new Audio("sounds/"+randomChosenColor+".mp3");
// //     audio.play();

// // }

// //selecting button and get the id of that selected button into new variable using Jquery
// // var userClickedPattern=[];
// // $(".btn").click(function(){
// //     var userChosenColor=$(this).attr("id");
// //     userClickedPattern.push(userChosenColor);
// //     playSound(userChosenColor);
// //     Animate(userChosenColor);
// //     checkAnswer(userClickedPattern,length-1);

// // });
// // function checkAnswer(currLevel){
// //     if(gamePattern[currLevel]===userClickedPattern[currLevel]){
// //         console.log("Success");
    
// //     if(userClickedPattern.length===gamePattern.length){
// //         setTimeout(function(){
// //             nextSequence()
// //         }, 100);
// //     }
// // }
// // else{

// //     console.log("Wrong");
// //     playSound("wrong");
// //     $("body").addClass("gameOver");
// //         setTimeout(function(){
// //           $("body").removeClass("gameOver");  
// //         }, 100);
// //     }
// //     $("#level-title").text("Game Over, press any key to start");
// //     startOver();
// // }

// // function startOver(){
// //     level=0;
// //     gamePattern=[];
// //     started=false;
// // }
// //detection of keypress using jquery
// var level=0;
// var started=false;
// $(document).keypress(function(){
//     if(!started){
//         $("#level-title").text("Level"+level);
//         nextSequence();
//         started=true;

//     }
// });
// $(".btn").click(function(){
//     var userChosenColor=$(this).attr("id");
//     userClickedPattern.push(userChosenColor);
//     playSound(userChosenColor);
//     Animate(userChosenColor);
//     checkAnswer(userClickedPattern.length-1);

// });
// function checkAnswer(currLevel){
//     if(gamePattern[currLevel]===userClickedPattern[currLevel]){
//     if(userClickedPattern.length===gamePattern.length){
//         setTimeout(function(){
//             nextSequence()
//         }, 1000);
//     }
// }
// else{

//     // console.log("Wrong");
//     playSound("wrong");
//     $("body").addClass("gameOver");
//     $("#level-title").text("Game Over, press any key to start");

//         setTimeout(function(){
//           $("body").removeClass("gameOver");  
//         }, 200);
    
//     // $("#level-title").text("Game Over, press any key to start");
//     startOver();
// }
// }
// function nextSequence(){
//     userClickedPattern=[];
//     level++;
//     $("#level-title").text("Level"+level);
//     var randomNumber=Math.floor(Math.random()*4);
//     var randomChosenColor=buttonColors[randomNumber];
//     gamePattern.push(randomChosenColor);

//     $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
//     // var audio=new Audio("sounds/"+randomChosenColor+".mp3");
//     // audio.play();
//     playSound(randomChosenColor);

// }

// function playSound(name){
//     var audio=new Audio("sounds/"+name+".mp3");
//     audio.play();
// }
// function Animate(currColor){
//     $("#"+currColor).addClass("pressed");
//     setTimeout(function(){
//         $("#"+currColor).removeClass("pressed");

//     }, 200);
// };
// function startOver(){
//     level=0;
//     gamePattern=[];
//     started=false;
// }



var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
