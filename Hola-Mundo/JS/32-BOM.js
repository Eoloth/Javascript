"use strict";

// BOM - Browser Object Model

function getBom() {
  console.log(screen.innerHeight);
  console.log(screen.innerWidth);
  console.log(window.location);
  console.log(window.location.href);
}
function redirect(url) {
  window.location.href = url; // redirecciona a la url indicada
}

function abrirVentana(url) {
  window.open(url, "", "width = 400, height = 300"); // ventana nueva con dimensiones 400x300
}
getBom();
