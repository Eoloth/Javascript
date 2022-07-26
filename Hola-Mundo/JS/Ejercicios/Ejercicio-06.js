"use strict";

/*
 * Ejercicio 6
 * Indicar si el numero ingresado es par o impar
 * Valiar el numero
 */

var number = parseInt(prompt("Ingrese un numero: "));

while (isNaN(number)) {
  number = parseInt(prompt("Ingrese un numero: "));
}
if (number % 2 == 0) {
  alert("El numero es par");
} else {
  alert("El numero es impar");
}
