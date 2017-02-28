function MarsRoverUI(roverId, roverStartValue){
  var roverStart = roverStartValue.split(' ');
  var start = {
    x: roverStart[0],
    y: roverStart[1],
    heading: roverStart[2]
  };
  this.marsRover = new MarsRover(start.x, start.y, start.heading);

  this.roverElement = element(roverId);
  this.initialPosition = function(){
    var marginLeft = 71;
    var marginTop = 257;
    var baseLength = 52;

    this.roverElement.style.left = this.marsRover.x * baseLength + marginLeft + 'px';
    this.roverElement.style.top = this.marsRover.y * baseLength + marginTop + 'px';
    this.roverElement.className = "mars-rover " + this.marsRover._heading;
  }
}
