element('scan').addEventListener("click", function(){
  createPlateau(element('plateau_x').value, element('plateau_y').value);

  delay();

  var rover1Start = element('rover1_start');
  var rover2Start = element('rover2_start');
  var rover1UI = new MarsRoverUI('marsRover1', rover1Start.value);
  rover1UI.initialPosition();
  delay();
});



function createPlateau(x, y) {
  var ground = element('ground');
  ground.innerHTML = '';
  for (var i = x; i > 0; i--) {
    var tr = document.createElement('tr');
    for (var _i = y; _i > 0; _i--) {
      tr.insertAdjacentHTML('afterbegin', '<td class="square"></td>');
    }
    ground.insertAdjacentElement('afterbegin', tr);
  }
}

function delay(time){
  time = time || 2000;
  setTimeout(function(){}, time);
}

function element(id){
  return document.getElementById(id);
}
