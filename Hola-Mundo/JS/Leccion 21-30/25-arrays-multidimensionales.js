"use strict";

// Arrays multiples

var categorias = [
  "Acción",
  "Aventura",
  "Ciencia Ficción",
  "Comedia",
  "Drama",
  "Fantasía",
  "Historia",
  "Misterio",
  "Policiaca",
  "Romance",
  "Thriller",
];
var peliculas = [
  "El padrino",
  "La verdad duele",
  "La vida es bella",
  "Ace Ventura",
  "Gran Torino",
];
var cine = [categorias, peliculas]; // array multidimensional, en este caso de 2D

console.log(cine);

console.log(cine[0][1]); // Aventura, índice 0;1
console.log(cine[1][3]); // Ace Ventura, índice 1;3
