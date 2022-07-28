"use strict";

// Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...todas_las_frutas) {
  // ...todas_las_frutas es un array de parametros rest
  console.log("Fruta 1: ", fruta1);
  console.log("Fruta 2: ", fruta2);
  console.log("Todas las frutas: ", todas_las_frutas);
  console.log("Listado de frutas: ", frutas);
}

listadoFrutas("Manzana", "Pera", "Naranja", "Sandia", "Melon", "Coco");

var frutas = ["Manzana", "Pera", "Naranja", "Sandia", "Melon", "Coco"];
listadoFrutas(...frutas); // Spread
