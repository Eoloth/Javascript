// Jquery(sleector).elemento()
$(document).ready(function () {
  // Selector de ID
  $("#rojo").css("background", "red").css("color", "white"); //fondo rojo letras blancas
  $("#amarillo").css("background", "yellow").css("color", "green");
  $("#verde").css("background", "green").css("color", "white");

  // Selector de clase
  var mi_clase = $(".zebra").css("padding", "50px");

  $(".sin_borde").click(function () {
    console.log("Click dado");
    $(this).addClass("zebra"); // no funciona porque clase zebra no esta definida
  });
});
