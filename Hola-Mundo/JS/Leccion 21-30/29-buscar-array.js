"use strict";

// Recorrer arrays

var nombre = "Juan";
var nombres = ["Juan", "Pedro", "Maria", "Juan"];
var lenguajes = ["Java", "Python", "C++", "JavaScript", "Pascal", "C"];

document.write("<h1>Lenguajes de programación</h1>" + "<br>");
document.write("<ul>");

/*
lenguajes.forEach((elemento, indice) => {
  document.write("<li>" + indice + ".- " + elemento + "</li>");
});
*/
for (let lenguaje in lenguajes) {
  document.write("<li>" + lenguajes[lenguaje] + "</li>"); // lenguaje es una variable que se incrementa en 1 cada vez que se ejecuta el ciclo
}

document.write("</ul>");

// Busquedas

var precios = [10, 20, 50, 80, 12];
var busqueda = lenguajes.find((lenguaje) => lenguaje === "JavaScript"); // funcion flecha reemplaza la funcion anonima
var busquedaIndex = lenguajes.findIndex(
  (lenguaje) => lenguaje === "JavaScript"
); // funcion flecha reemplaza la funcion anonima
var busquedaPrecio = precios.find((precio) => precio === 20); // funcion flecha reemplaza la funcion anonima
var busquedaSome = precios.some((precio) => precio < 20); // funcion flecha reemplaza la funcion anonima
/*
var busqueda = lenguajes.find(function (lenguaje) {
  return lenguaje === "JavaScript";
}); // Busca el primer elemento que cumpla la condición
*/
console.log(busqueda); // "JavaScript"
console.log(busquedaIndex); // 3
console.log(busquedaPrecio); // 20
console.log(busquedaSome); // true, retorna T o F si la condicion se cumple o no
