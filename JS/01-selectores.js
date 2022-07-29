// Jquery(sleector).elemento()
$(document).ready(function () {
  // Selector de ID
  $("#rojo").css("background", "red").css("color", "white"); //fondo rojo letras blancas
  $("#amarillo").css("background", "yellow").css("color", "green");
  $("#verde").css("background", "green").css("color", "white");

  // Selector de clase
  var mi_clase = $(".zebra").css("padding", "5px");

  $(".sin_borde").click(function () {
    console.log("Click dado");
    $(this).addClass("zebra"); // no funciona porque clase zebra no esta definida
  });

  // Selectore de etiqueta
  var parrafos = $("p").css("cursor", "pointer"); // dedo como mouse

  parrafos.click(function () {
    var that = $(this);

    if (!that.hasClass("grande")) {
      that.addClass("grande");
    } else {
      that.removeClass("grande");
    }
  });
});
