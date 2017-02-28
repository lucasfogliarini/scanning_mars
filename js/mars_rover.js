function MarsRover(x, y, heading){
  this.x = parseInt(x);
  this.y = parseInt(y);

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
  this.run = function(tread, cb, delay){
    var tread = tread.split('');
    var self = this;
    for (var i = 0; i < tread.length; i++) {
      var action;
      let step = tread[i];
      if(step == 'M'){
        action = function(){
          self.move();
          cb(step);
        };
      }
      else{
        action = function(){
          self.rotate(step);
          cb(step);
        };
      }
      setTimeout(action, delay * i);
    }
    return this;
  }
}
