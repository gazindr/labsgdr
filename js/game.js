// Constructor function for a Game

function Game(difficulty) {
  this.lives = 5;
  this.score = 0;
  this.bullet_count = 3;
  $(".hearth_1").show();
  $(".hearth_2").show();
  $(".hearth_3").show();
  $(".hearth_4").show();
  $(".hearth_5").show();
  $("#white_flash").hide();
  $("#click").hide();

  Game.prototype.difficulty = {
    easy: 10000,
    medium: 5000,
    hard: 2500
  }

  // Set the difficulty- easy by default
  if(typeof(difficulty) === "undefined") {
    this.speed = this.difficulty.easy;
  }
  else {
    this.speed = this.difficulty[difficulty];
  }


  // Kick-off the first wave of Ducks
  this.nextRound();
}

// Maps difficulty to speed at which a Duck traverses the screen in milliseconds.

Game.prototype.nextRound = function() {
  if(this.speed>750){
    this.speed *= 0.9;}
  var duck = new Duck(this);
  var duck = new Duck(this);
  $(".shell_3").show();
  $(".shell_2").show();
  $(".shell_1").show();
  var _this = this;
  _this.bullet_count = 3;
  
  $('#game').unbind("click");
  $('#game').click(function () {
    if (_this.bullet_count > 0) {
      $('#white_flash').show(0).delay(10).hide(2);
    } else { 
      $('#click').show(0).delay(30).hide(5);
    }
    _this.bullet_count -= 1;
    if (_this.bullet_count == 2){
      $(".shell_1").hide();
    } else if (_this.bullet_count == 1){
      $(".shell_2").hide();
    } else if(_this.bullet_count == 0){
      $(".shell_3").hide();
    }
  });

  var roundTimer = setTimeout(function() {
    if(_this.lives <= 0) {
      _this.gameOver();
    }
    else {
      _this.nextRound();
    }
  }, this.speed + 1000);
}

Game.prototype.gameOver = function() {
  $("#points").html(this.score);
  $("#game-over").toggle();
}

Game.prototype.addScore = function(points) {
  this.score += points;

  $('#score').text(this.score);
}