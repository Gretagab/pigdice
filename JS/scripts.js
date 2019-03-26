
//business logic
var globalScore = 0;

function rollDice()  {
  //var newDice = [1, 2, 3, 4, 5, 6];
  var x = Math.floor((Math.random() * 6)+1);
  console.log(x);
  var initialScore = 0;
  if (x > 1) {
    initialScore = initialScore + x;
    globalScore += initialScore;
    console.log(globalScore);
  }
  else {
    alert ("You lost your turn");
    globalScore = initialScore;
  }



}


  //for (var i = 0; i < newDice.length; i ++){

  //}
rollDice();
function Player (score, roll, pass) {
  this.score =score;
  this.roll = roll;
  this.pass = pass
}

Player.prototype.newscore = function() {
  return this.roll + this.score;
}
Player.prototype.pass = function () {
  return this.score
}

//User Interface Logic
$(document).ready(function() {
  $("#roll1").click(function(event) {
    event.preventDefault();
    var roll1=rollDice();
  });
});





//var Player1 = new Player (0, rollDice(), pass)
