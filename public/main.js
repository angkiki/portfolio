$(document).ready( () => {

  setInterval(function() {
    $('#center').fadeToggle(750);
  }, 2000);

  var degree = 0;

  setInterval(function() {
    degree += 5;

    if (degree > 360) {
      degree -= 360;
    }

    $('#ring').css({'transform' : 'rotate(' + degree + 'deg)'})
  }, 50);

})
