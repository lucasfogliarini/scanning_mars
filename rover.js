function Rover(x, y, heading){
  this.x = x;
  this.y = y;

  this.headings = ['N','E','S','W'];
  this.heading = function(heading){
    if(heading != undefined){
      if(typeof heading == "number")
        heading = this.headings[heading];
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
    var rotation;
    if(side == 'L')
      rotation = this.heading() - 1;
    else
      rotation = this.heading() + 1;

    rotation = (rotation + 4) % 4;
    this.heading(rotation);
    return this;
  }
  this.stack = function(stack){
    var stack = stack.split('');
    for (var i = 0; i < stack.length; i++) {
      var s = stack[i];
      if(s == 'M')
        this.move();
      else
        this.rotate(s);
    }
    return this;
  }
}

var rover1 = new Rover(1, 2, 'N');
var rover2 = new Rover(3, 3, 'E');
