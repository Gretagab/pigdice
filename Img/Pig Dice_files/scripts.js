
//business logic
function Dice(number){
  this.number = number;
}
var newDice = new Dice ([1,2,3,4,5,6])
function rollDice(newDice)  {
  var x = Math.floor((Math.random() * 6)+1);
  for (var i = 0, i < array.length, i ++){
    if (array[i]=1) {
      alert("You lost your turn")
    }
    x += array [i];
  }
}

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







var Player1 = new Player (0, rollDice(), pass)
