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

  $("#animame").click(function () {
    caja
      .animate(
        {
          marginLeft: "500px",
          fontSize: "40px",
          height: "110px",
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "900px",
          marginTop: "80px",
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "0px",
          marginLeft: "0px",
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "100px",
          marginTop: "0px",
        },
        "slow"
      )
      .animate(
        {
          marginLeft: "500px",
          fontSize: "40px",
          height: "110px",
        },
        "slow"
      );
  });
});
