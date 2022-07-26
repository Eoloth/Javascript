"use strict";

// Funciones anonimas
// Son funciones que no tienen nombre
// Se declaran con una funcion anonima
// Se pueden usar para crear callbacks
// Se pueden guardar dentro de una variable
// Callbacks son funciones que se pasan como parametro a otras funciones

function sumame(num1, num2, sumaYmuestra, sumaPorDos) {
  var suma = num1 + num2;
  sumaYmuestra(suma);
  sumaPorDos(suma);
  return suma;
}

sumame(
  5,
  7,
  (dato) => {
    // => es una funcion anonima, reemplaza la funcion
    console.log("La suma es: ", dato);
  },
  (dato) => {
    console.log("La suma por dos es: ", dato * 2);
  }
);
