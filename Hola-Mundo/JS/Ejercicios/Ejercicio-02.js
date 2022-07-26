"use strict";

/*
    Ejercicio 2
    Utilizando un bucle, mostar la suma y la media de los numeros introducidos
    hasta introducir un numero negativo y ahi mostrar el resultado
 */

var suma = 0;
var contador = 0;

do {
  var numero = parseInt(prompt("Introduce un número: ", 0));
  if (isNaN(numero)) {
    numero = 0;
  } else if (numero >= 0) {
    suma += numero; // suma = suma + numero;
    contador++;
  }
  console.log("Suma: " + suma);
  console.log("Contador: " + contador);
  console.log("Media: " + suma / contador);
} while (numero >= 0);

alert("La media de todos los numeros es " + suma / contador);
alert("La suma de todos los numeros es " + suma);
