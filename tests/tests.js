var MarsRover = require('../js/mars_rover.js');
var assert = require('assert');

describe('MarsRover', function() {
  describe('#constructor', function() {
    it('Throw error if "x" is not a number.', function() {
      assert.throws(function(){
        new MarsRover.MarsRover("2", 2, 'n');
      }, TypeError);
    });
    it('Throw error if "y" is not a number.', function() {
      assert.throws(function(){
        new MarsRover.MarsRover(2, "2", 'n');
      }, TypeError);
    });
    it('Throw error if "header" is diferent of: N, E, S, W', function() {
      assert.throws(function(){
        new MarsRover.MarsRover(2, 2, 'F');
      }, Error);
    });
  });
  describe('#rotate', function() {
    it('Throw error if "side" is not "L" or "R".', function() {
      assert.throws(function(){
        var marsRover = new MarsRover.MarsRover(2, 2, 'N');
        marsRover.rotate('S');
      }, TypeError);
    });
  });
  describe('#run', function() {
    it('Throw error if "tread" is not "L", "R" or "M"', function() {
      assert.throws(function(){
        var marsRover = new MarsRover.MarsRover(2, 2, 'N');
        marsRover.generateSteps('ELF');
      }, TypeError);
    });
  });
});
