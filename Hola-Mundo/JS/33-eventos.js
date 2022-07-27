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
