"use strict";

/*
 * Ejercicio 08
 * Crear una calculadora que nos permita sumar, restar, multiplicar y dividir
 * con 2 numeros y validacion
 * En el cuerpo de la pagina, en una alerta y por la consola, el resultado
 * de la operacion
 */

var numero1 = parseInt(prompt("Introduce el primer numero: "));
var numero2 = parseInt(prompt("Introduce el segundo numero: "));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1 || isNaN(numero2))) {
  numero1 = parseInt(prompt("Introduce el primer numero: "));
  numero2 = parseInt(prompt("Introduce el segundo numero: "));
}

var resultado =
  "La suma es: " +
  (numero1 + numero2) +
  " <br/>" +
  "La resta es: " +
  (numero1 - numero2) +
  " <br/>" +
  "La multiplicación es: " +
  numero1 * numero2 +
  "<br/>" +
  "La división es: " +
  numero1 / numero2;

var resultadoCMD =
  "La suma es: " +
  (numero1 + numero2) +
  "\n" +
  "La resta es: " +
  (numero1 - numero2) +
  "\n" +
  "La multiplicación es: " +
  numero1 * numero2 +
  "\n" +
  "La división es: " +
  numero1 / numero2;

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);
