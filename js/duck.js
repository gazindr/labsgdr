// Constructor function for a Duck

function Duck(game) {
  this.game = game;
  this.el = $("#duck-template").clone();
  this.el.removeAttr("id");

  // Add a callback for when the Duck is clicked (shot!)
  var _this = this;
  $(this.el).click(function() {
    if (_this.game.bullet_count > 0) {
      _this.die();
    }
  });

  // Display the Duck in the #game
  this.draw();
}

// A random height generator for use when placing a Duck.
function randomHeight() {
  return 300 * Math.random();
}

// Some animation using a Timeout to make the Duck flap.
Duck.prototype.flap = function() {

  $(this.el).toggleClass("flap");

  var _this = this;

  // Do this again in 300 milliseconds
  this.flapTimer = setTimeout((function() {
    _this.flap();
  }), 300);
}

// Display the Duck on the screen.
Duck.prototype.draw = function() {
  console.log("draw");
  var _this = this;
  $('#game').append(this.el)
  // Make the duck appear somewhere random along the page and just off the screen
  $(this.el).css({ 
    top: randomHeight(),
    left: "-200px" });
  // Append the element to the DOM, use the #game element


  this.flap();
  var randomnum=Math.floor(Math.random()*100) - 100;

  $(this.el).animate({
    left: "+=1350px",
    top: randomnum +"px"
  }, this.game.speed, "linear", function() {
    console.log("phew");
    _this.complete();
    _this.remove();


  })
}
Duck.prototype.die = function() {
  var _this = this;
  $(this.el).addClass("dead");
  // Stop flapping - clear the flapTimer
  clearTimeout(this.flapTimer);  
  // Stop flying animations
  $(this.el).stop();
  _this.game.addScore(10);
  $(this.el).addClass("fall");
  $(this.el).animate({
    top: "+=200px"
  }, 1000, "linear", function() {
    _this.remove();
  })
}

Duck.prototype.complete = function() {
  this.game.lives -= 1;
  if (this.game.lives == 4){
    $(".hearth_5").hide();
  } else if (this.game.lives == 3){
    $(".hearth_4").hide();
  } else if (this.game.lives == 2){
    $(".hearth_3").hide();
  } else if (this.game.lives == 1) {
    $(".hearth_2").hide();
  } else if (this.game.lives == 0){
    $(".hearth_1").hide();}
  return this;
}

// Code to remove the Duck from the DOM and from memory.
Duck.prototype.remove = function() {
  $(this.el).remove();
  delete this;
}