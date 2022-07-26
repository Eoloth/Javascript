"use strict";
/*
Programa que pida dos números y que nos diga el mayor, menor y sis on iguales
Validar que sean positivos y solo números, sino vuelve a pedir datos
 */

var numero1 = prompt("Introduce el primer número", 0);
var numero2 = prompt("Introduce el segundo número", 0);

console.log(numero1, numero2);

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
  //Validar que sean positivos y solo números, sino vuelve a pedir datos
  numero1 = prompt("Introduce el primer número", 0);
  numero2 = prompt("Introduce el segundo número", 0);
}
if (numero1 > numero2) {
  alert("El número " + numero1 + " es mayor que " + numero2);
} else if (numero1 < numero2) {
  alert("El número " + numero1 + " es menor que " + numero2);
} else {
  alert("Los números son iguales");
}
