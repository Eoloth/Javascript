"use strict";

// Operaciones con arrays

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

var cine = [categorias, peliculas];

// añadir elemento a array

/*
var elemento = "";
do {
  elemento = prompt("Que elemento quieres añadir?");
  peliculas.push(elemento);
} while (elemento !== "ACABAR");
{
  alert("Has añadido " + peliculas.length + " peliculas");
}
*/

// Mientras no se ingrese ACABAR, se seguiran añadiendo al array

var indice = peliculas.indexOf("Gran torino");
if (indice > -1) {
  peliculas.splice(indice, 1); // elimina el elemento de la posicion indice
}
// peliculas.pop(); // Elimina el ultimo elemento del array
var peliculas_string = peliculas.join(); // Convierte el array en un string
console.log(peliculas_string);
