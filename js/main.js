element('scan').addEventListener("click", function(){
  var plateauX = element('plateau_x').value;
  var plateauY = element('plateau_y').value;
  createPlateau(plateauX, plateauY);
  
  var rover1X = element('rover1_x');
  var rover1Y = element('rover1_y');
  var rover1Heading = element('rover1_heading');
  var rover1UI = new MarsRoverUI('marsRover1', rover1X.value, rover1Y.value, rover1Heading.value, plateauY);
  rover1UI.run(element('rover1_tread').value);

  var rover2X = element('rover2_x');
  var rover2Y = element('rover2_y');
  var rover2Heading = element('rover2_heading');
  var rover2UI = new MarsRoverUI('marsRover2', rover2X.value, rover2Y.value, rover2Heading.value, plateauY);
  rover2UI.run(element('rover2_tread').value);
});

function createPlateau(x, y) {
  var ground = element('grid');
  ground.innerHTML = '';
  for (var i = x; i > 0; i--) {
    var tr = document.createElement('tr');
    for (var _i = y; _i > 0; _i--) {
      tr.insertAdjacentHTML('afterbegin', '<td class="square"></td>');
    }
    ground.insertAdjacentElement('afterbegin', tr);
  }
}

function element(id){
  return document.getElementById(id);
}
