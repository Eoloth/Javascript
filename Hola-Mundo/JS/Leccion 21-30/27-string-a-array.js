"use strict";

// Operaciones con arrays

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

peliculas.sort(); // Reordena el array

console.log(peliculas);

var indice = peliculas.indexOf("Gran torino");

if (indice > -1) {
  peliculas.splice(indice, 1);
}
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", "); // Convierte el string en array
console.log(cadena_array);
