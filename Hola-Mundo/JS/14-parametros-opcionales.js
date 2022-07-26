"use strict";

function porConsola(num1, num2) {
  console.log("Suma: " + (num1 + num2));
  console.log("Resta: " + (num1 - num2));
  console.log("Multiplicación: " + num1 * num2);
  console.log("División: " + num1 / num2);
  console.log(
    "********************************************************" + "<br>"
  );
}

function porPantalla(num1, num2) {
  document.write("Suma: " + (num1 + num2) + "<br>");
  document.write("Resta: " + (num1 - num2) + "<br>");
  document.write("Multiplicación: " + num1 * num2 + "<br>");
  document.write("División: " + num1 / num2 + "<br>");
  document.write(
    "********************************************************" + "<br>"
  );
}

function calculadora(num1, num2, mostrar = false) {
  if (mostrar === false) {
    porConsola(num1, num2);
  } else {
    porPantalla(num1, num2);
  }
  return true;
}
calculadora(10, 5, true);
/*
function calculadora(num1, num2, mostrar = false) {
  if (mostrar === false) {
    console.log("Suma: " + (num1 + num2));
    console.log("Resta: " + (num1 - num2));
    console.log("Multiplicación: " + num1 * num2);
    console.log("División: " + num1 / num2);
    console.log(
      "********************************************************" + "<br>"
    );
  } else {
    document.write("Suma: " + (num1 + num2) + "<br>");
    document.write("Resta: " + (num1 - num2) + "<br>");
    document.write("Multiplicación: " + num1 * num2 + "<br>");
    document.write("División: " + num1 / num2 + "<br>");
    document.write(
      "********************************************************" + "<br>"
    );
  }
}
calculadora(12, 8, true);

/*
for (var i = 1; i <= 10; i++) {
  console.log("Numero 1: " + i);
  console.log("Numero 2: " + i);
  calculadora(i, i, "+");
}
*/
