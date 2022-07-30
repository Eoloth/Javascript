$(document).ready(function () {
  // MouseOver y MouseOut
  var caja = $("#caja");
  /* caja.mouseover(function () {
    $(this).css("background", "red");
  });
  caja.mouseout(function () {
    $(this).css("background", "blue");
  });
  */
  // Hover

  function cambiaRojo() {
    $(this).css("background", "red");
  }
  function cambiaVerde() {
    $(this).css("background", "green");
  }

  caja.hover(cambiaRojo, cambiaVerde);
});
