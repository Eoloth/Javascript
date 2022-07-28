"use strict";

// DOM - Document Object Model
// Es una estructura de datos que representa un documento HTML, XML o JSON.
// Es una representación de un documento en memoria.

function cambiarColor(color) {
  caja.style.background = color; // Cambiar el fondo a color deseado
}

// var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja"); // # selecciona elemento por id

//.innerHTML; // Obtener el contenido de un elemento, depurando los etiquetados

caja.innerHTML = "Hola Mundo"; // Cambiar el contenido de un elemento

// estilos CSS

caja.style.padding = "20px"; // Cambiar el padding a un valor deseado
caja.style.color = "white"; // Cambiar el color de letra
caja.style.background = "red"; // Cambiar el fondo a color deseado
caja.className = "hola hola2"; // Agregar una clase a un elemento

console.log(caja);
