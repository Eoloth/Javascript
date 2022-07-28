"use strict";

// Reemplazar un texto en una cadena
var texto = "Hola mundo";
var textoReemplazado = texto.replace("Hola", "Adios");
console.log(textoReemplazado);
// Reemplaza la palabra "Hola" por "Adios" en el texto

var metodoSlice = texto.slice(0, 3);
console.log(metodoSlice);
// recorta el texto desde la posición 0 hasta la 3

var metodoSplit = texto.split(" "); // elimina los espacios
console.log(metodoSplit);
// separa el texto por los espacios y lo guarda en un array

var metodoTrim = texto.trim();
console.log(metodoTrim); // elimina los espacios en blanco al inicio y al final
