"use strict";

/*
 * Ejercicio 7
 * tabla de multiplicar de un número ingresado por prompt
 */

var numero = parseInt(prompt("Ingrese un número: "));

document.write("<h1>Tabla de multiplicar del número " + numero + "</h1>");
for (var i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + numero * i);
  document.write(numero + " x " + i + " = " + numero * i + "<br>");
}
