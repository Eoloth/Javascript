$(document).ready(function () {
  reloadLinks();
  $("#add_button")
    .removeAttr("disabled") // remueve atributo disabled
    .click(function () {
      $("#menu").prepend(
        '<li><a href="' + $("#add_link").val() + '"></a></li>'
      );
      $("add_link").val(); // limpia input
      reloadLinks();
    });
});
// Ingresar el input al principio de la lista

function reloadLinks() {
  $("a").each(function (index) {
    var that = $(this);
    var enlace = $(this).attr("href");
    that.attr("target", "_blank"); // abre link en pestaña nueva

    that.text(enlace);
  });
}
