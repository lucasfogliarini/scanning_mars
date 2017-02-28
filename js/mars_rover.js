function MarsRover(x, y, heading){
  if(typeof x !== "number" || typeof y !== "number")
    throw new TypeError("x and y must be a number.");

  this.x = x;
  this.y = y;

  this.headings = ['N','E','S','W'];
  this.heading = function(heading){
    if(heading != undefined){
      if(typeof heading == "number")
        heading = this.headings[heading];
      else if(this.headings.indexOf(heading) == -1)
        throw new Error("'header' must be one of values: N, E, S, W.");
      this._heading = heading;
    }
    return this.headings.indexOf(this._heading);
  }
  this.heading(heading);

  this.move = function(){
    if(this.heading() == 0)
      this.y = this.y + 1;
    else if(this.heading() == 1)
      this.x = this.x + 1;
    else if(this.heading() == 2)
      this.y = this.y - 1;
    else if(this.heading() == 3)
      this.x = this.x - 1;
    return this;
  }
  this.rotate = function(side){
    if(side != 'L' && side != 'R')
      throw new TypeError("'side' must be 'L'(left) or 'R'(right)");
    var rotation;
    if(side == 'L')
      rotation = this.heading() - 1;
    else
      rotation = this.heading() + 1;

    rotation = (rotation + 4) % 4;
    this.heading(rotation);
    return this;
  }
  this.generateSteps = function(tread){
    var treadError = tread.match(/[^(L|R|M)]/g);
    if(treadError)
      throw new TypeError("'tread' must be 'L', 'R' or M");

    var tread = tread.split('');
    var self = this;
    var steps = [];
    for (var i = 0; i < tread.length; i++) {
      var action;
      let step = tread[i];
      if(step == 'M'){
        steps.push(function(){
          self.move();
        });
      }
      else{
        steps.push(function(){
          self.rotate(step);
        });
      }
    }
    return steps;
  }
}
if(exports)
  exports.MarsRover = MarsRover;
