"use strict";

/*
 * Ejercicio 3
 * Hacer un programa que muestre todos los números
 * entre 2 numeros ingresados por el usuario
 */

var numero1 = prompt("Introduce el primer número", 0);
var numero2 = prompt("Introduce el segundo número", 0);

for (var i = numero1; i <= numero2; i++) {
  console.log(i);
}
