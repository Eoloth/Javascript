"use strict";

// Timers

window.addEventListener("load", () => {
  function intervalo() {
    var tiempo = setInterval(function () {
      // intervalo de tiempo, en bucle
      // setTimeout(function () { // ocurre solo 1 vez, no en bucle
      console.log("Set interval ejecutado");

      var encabezado = document.querySelector("h1"); // funcion para que el encabezado cambie de tamaño cada x tiempo
      if (encabezado.style.fontSize === "50px") {
        encabezado.style.fontSize = "30px";
      } else {
        document.querySelector("h1").style.fontSize = "50px";
      }
    }, 500); // ejecutado cada 3 segundos o 3000 milisegundos
    return tiempo;
  }
  var tiempo = intervalo();

  var stop = document.querySelector("#stop");
  stop.addEventListener("click", () => {
    alert("Has parado el intervalo en bucle");
    clearInterval(tiempo);
  }); // para parar el intervalo

  var start = document.querySelector("#start");
  start.addEventListener("click", () => {
    alert("Has reiniciado el intervalo en bucle");
    intervalo();
  }); // para reiniciar el intervalo
});
