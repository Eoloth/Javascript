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

  // Click y DobleClick
  caja.click(function () {
    $(this).css("background", "blue").css("color", "white");
  });
  caja.dblclick(function () {
    $(this).css("background", "pink").css("color", "yellow");
  });

  // Focus y Blur
  var nombre = $("#nombre");
  var datos = $("#datos");

  nombre.focus(function () {
    $(this).css("border", "2px solid green");
  });
  nombre.blur(function () {
    $(this).css("border", "1px solid transparent");
    datos.text($(this).val()).show();
  });

  // MouseDown y MouseUp
  datos.mousedown(function () {
    $(this).css("border-color", "gray");
  });
  datos.mouseup(function () {
    $(this).css("border-color", "black");
  });

  // MouseMove
  $(document).mousemove(function () {
    $("body").css("cursor", "none"); //elimina el cursor
    var sigueme = $("#sigueme");
    sigueme.css("left", event.clientX).css("top", event.clientY); //sigue al mouse
    // reemplazo de cursor por bola amarilla
  });
});
