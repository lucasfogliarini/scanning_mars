function Thread(interval){
  this.stack = [];
  this.queue = function(fn){
    this.stack.push(fn);
  };
  this.run = function(){
    self = this;
    this.intervalId = setInterval(function(){
      var func = self.stack[0];
      if (func) {
        func();
        self.stack.splice(0,1);
      }
    }, interval || 1000);
  }
  this.stop = function(){
    clearInterval(this.intervalId);
  }
}
