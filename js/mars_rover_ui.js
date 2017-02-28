function MarsRoverUI(roverId, x, y, heading, plateauY){
  this.roverElement = element(roverId);
  this.marsRover = new MarsRover(x, y,heading);
  this.plateauY = plateauY;

  this.applyPosition = function(){
    var initX = 49;
    var initY = 49;
    var baseLength = 52;

    var left = this.marsRover.x * baseLength + initX + 'px';
    var top = Math.abs(this.marsRover.y - this.plateauY - 1) * baseLength + initY + 'px';
    this.roverElement.style.left = left;
    this.roverElement.style.top = top;
    this.roverElement.className = "mars-rover " + this.marsRover._heading.toLowerCase();
  }
  this.applyPosition();//initialPosition
  this.run = function(tread){
    var self = this;
    this.marsRover.run(tread, function(){
      self.applyPosition();
    }, 1000);
  }
}
