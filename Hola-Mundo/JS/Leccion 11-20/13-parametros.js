"use strict";

// make a calculadora
function calculadora(num1, num2, operadora) {
  console.log("Suma: " + (num1 + num2));
  console.log("Resta: " + (num1 - num2));
  console.log("Multiplicación: " + num1 * num2);
  console.log("División: " + num1 / num2);
  console.log("********************************************************");
}
calculadora(12, 8);

for (var i = 1; i <= 10; i++) {
  console.log("Numero 1: " + i);
  console.log("Numero 2: " + i);
  calculadora(i, i, "+");
}
