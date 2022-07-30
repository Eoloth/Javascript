// Cuando un boton esta activo, el otro desactivado

$(document).ready(function () {
  var mostrar = $("#boton_mostrar");
  var ocultar = $("#boton_ocultar");
  var caja = $("#caja");

  mostrar.hide();

  mostrar.click(function () {
    $(this).hide();
    ocultar.show();
    caja.fadeTo("slow", 0.8);
  });
  ocultar.click(function () {
    $(this).hide();
    mostrar.show();
    // caja.fadeOut("slow");
    caja.fadeTo("slow", 0.2);
  });

  // En un solo botón
  $("#todoEnUno").click(function () {
    caja.toggle("fast"); // Toggle, SlideToggle, SlideDown, SlideUp
  });
});
