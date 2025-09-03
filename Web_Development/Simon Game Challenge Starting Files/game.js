//Step-3
var buttonColours = ["red", "blue", "green", "yellow"];

//Step-5
var gamePattern = [];

//Step-11
var userClickedPattern = [];

//Step-19.1
var started = false;

//Step-20
var level = 0;

//Step-19
$(document).keypress(function(){
    if(!started){
     //Step-21
     $("#level-title").text("Level " + level);
     nextSequence();
     started = true;
    }
});

//Step-9
$(".btn").click(function(){

//Step-10
    var userChosenColour = $(this).attr("id");

//Step-12
    userClickedPattern.push(userChosenColour);  //console.log(userClickedPattern);

//Step-13
    playSound(userChosenColour);
    animatePress(userChosenColour);

//Step-25
checkAnswer(userClickedPattern.length-1);
});

//Step-24
function checkAnswer(currentLevel){

        //Step-26
        if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

            console.log("success");

            //Step-27
            if(userClickedPattern.length === gamePattern.length){

                //Step-28
                setTimeout(function(){
                    nextSequence();
                }, 1000);
            }
        } else {
            console.log("wrong");

            //Step-30
            playSound("wrong");

            //Step-31
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 200);

            //Step-32
            $("#level-title").text("Game Over, Press Any Key to Restart");

            //Step-34
            startOver();
        }
}

//Step-2
function nextSequence(){

    //Step-29
    userClickedPattern = [];

    //Step-22
    level++;

    //Step-23
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

//Step-4
    var randomChosenColour = buttonColours[randomNumber];

//Step-6
    gamePattern.push(randomChosenColour);

//Step-7
    $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

//Step-15
    playSound(randomChosenColour);
}

//Step-14
function playSound(name){

//Step-8
   var audio = new Audio("./sounds" + name + ".mp3");
   audio.play();
}

//Step-16
function animatePress(currentColour){

//Step-17
    $('#' + currentColour).addClass("pressed");
//Step-18
    setTimeout(function(){
        $('#' + currentColour).removeClass("pressed");
    }, 100);
}

//Step-33
function startOver(){

    //Step-35
    level = 0;
    gamePattern = [];
    started = false;
}