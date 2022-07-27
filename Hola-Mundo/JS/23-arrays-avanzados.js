"use strict";

// Arrays avanzados

var nombre = "Ruben Manriquez";
var nombres = ["Victor", "Juan", "Manolo", "Jose, 52, true"];

var lenguajes = new Array("PHP", "JS", "Java", "C++");

/*
var elemento = parseInt(prompt("¿Qué elemento del array quieres?", 0));
// Validacion de prompt e inputs, para que los inputs no sean mas que los de la lista
if (elemento >= nombres.length) {
  alert("Introduce un valor correcto, menor que " + nombres.length);
} else {
  alert("El nombre es: " + nombres[elemento]);
}

*/

// Mostrar todos los elementos de un array en pantalla
document.write("<h1>Lenguajes de programación</h1>");
for (var i = 0; i < lenguajes.length; i++) {
  document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");
