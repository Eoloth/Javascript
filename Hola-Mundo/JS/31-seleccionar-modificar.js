"use strict";

// Seleccionar y modificar

function cambiarColor(color) {
  caja.style.background = color;
}

var caja = document.querySelector("#micaja");

caja.innerHTML = "Hola mundo";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "cajaRoja";

// Conseguir elementos por sus etiquetas
var todoslosDivs = document.getElementsByTagName("div");

var valor;

for (valor in todoslosDivs) {
  if (typeof todoslosDivs[valor].textContent == "string") {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todoslosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").prepend(parrafo);
  }
}

// console.log(contenidoEnTexto);

// Conseguir elementos por su clase CSS
