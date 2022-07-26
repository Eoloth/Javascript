"use strict";
/*
Programa que pida dos números y que nos diga el mayor, menor y sis on iguales
 */

var numero1 = prompt("Introduce el primer número", 0);
var numero2 = prompt("Introduce el segundo número", 0);

if (numero1 > numero2) {
  alert("El número " + numero1 + " es mayor que " + numero2);
} else if (numero1 < numero2) {
  alert("El número " + numero1 + " es menor que " + numero2);
} else {
  alert("Los números son iguales");
}
