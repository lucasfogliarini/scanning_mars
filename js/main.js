var ground = element('ground');
var rover1 = element('rover1');
var rover2 = element('rover2');
var rover1Start = element('rover2_start');
var rover2Start = element('rover2_start');
var plateauX = element('plateau_x');
var plateauY = element('plateau_y');
var scan = element('scan');

scan.addEventListener("click", function(){
  createPlateau(plateauX.value, plateauY.value);
});

function createPlateau(x, y) {
  ground.innerHTML = '';
  for (var i = 0; i < y; i++) {
    var tr = document.createElement('tr');
    for (var _i = 0; _i < x; _i++) {
      tr.insertAdjacentHTML('afterbegin', '<td class="square"></td>');
    }
    ground.insertAdjacentElement('afterbegin', tr);
  }
}

function element(id){
  return document.getElementById(id);
}
