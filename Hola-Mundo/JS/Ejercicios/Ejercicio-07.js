"use strict";

/*
 * Ejercicio 7
 * tabla de multiplicar de un número ingresado por prompt
 */

var numero = parseInt(prompt("Ingrese un número: "));

for (var i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + numero * i);
}
