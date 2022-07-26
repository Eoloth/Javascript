"use strict";

// Transofrmación de texto (strings)
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "Que empieze el curso de JavaScript";

var dato = numero.toString(); // metodo .toString transforma un numero en un string
dato = texto1.toUpperCase(); // metodo .toUpperCase transforma un string en mayusculas
dato = texto2.toLowerCase(); // metodo .toLowerCase transforma un string en minusculas

console.log(dato);

// Calcular longitud de un string
var nombre = "Ruben Manriquez";
nombre = ["hola", "mundo"]; // array, length cuenta cantidad de elementos dentro del array

console.log(nombre.length);

// Concatenar strings
//var texto3 = texto1 + " " + texto2; // opcion 1
var texto3 = texto1.concat(" ", texto2); // opcion 2
console.log(texto3);
