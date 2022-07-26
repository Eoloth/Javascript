"use strict";

/*
 * Ejercicio 5
 * Mostrar todos los numeros divisores de un numero introducido por prompt
 */

var numero = parseInt(prompt("Introduce un numero: ", 1));

for (var i = 1; i <= numero; i++) {
  if (numero % i == 0) {
    console.log("Divisor: " + i);
  }
}
