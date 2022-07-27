"use strict";

// Eventos del mouse

function cambiarColor() {
  console.log("Me has dado click");
  var bg = boton.style.background;

  if (bg === "green") {
    boton.style.background = "red";
  } else {
    boton.style.background = "green";
  }
  boton.style.padding = "10px";
  boton.style.border = "1px solid #ccc";

  return true;
}

var boton = document.querySelector("#boton");

// Click
boton.addEventListener("click", function () {
  cambiarColor();
});

// Mouse over
boton.addEventListener("mouseover", function () {
  boton.style.background = "#ccc";
});

// Mouseout
boton.addEventListener("mouseout", function () {
  boton.style.background = "#999";
});

// Focus
var input = document.querySelector("#campo_nombre");

input.addEventListener("focus", function () {
  console.log("Estas dentro del input: focus");
});

// Blur
input.addEventListener("blur", function () {
  console.log("Estas fuera del input: blur");
});

// Keydown
input.addEventListener("keydown", function () {
  console.log(
    "Estas pulsando esta tecla: ",
    String.fromCharCode(event.keyCode)
  );
});

// Keypress
input.addEventListener("keypress", function () {
  console.log("Tecla presionada: ", String.fromCharCode(event.keyCode));
});

// Keyup
input.addEventListener("keyup", function () {
  console.log("Tecla ya pulsada: ", String.fromCharCode(event.keyCode));
});
