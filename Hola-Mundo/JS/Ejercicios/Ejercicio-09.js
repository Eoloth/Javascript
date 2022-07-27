"use strict";

/*
 * Ejercicio 9
 * Crea un ejercicio que:
 * pida 6 numeros por pantalla y los meta en un array
 * mostrar el array entero en el cuerpo de la pagina y en la consola
 * ordenarlo y mostrarlo
 * invertir su orden y mostrarlo
 * mostrar cuantos elementos tiene el array
 * busuqeda de valor introducido por el usuario, indicar si esta en el array y su posicion
 */
function mostrarArray(elementos, textoCustom = "") {
  document.write("<h1>Contenido del array: " + textoCustom + "</h1>");
  document.write("<ul>");
  elementos.forEach((elemento, index) => {
    document.write("<li>" + elemento + "</li>");
  });
  document.write("</ul>");
}

var numeros = []; // array vacio

for (var i = 0; i <= 5; i++) {
  //limitamos el maximo de inputs a 6
  numeros.push(parseInt(prompt("Introduce un número: ")));
}

// mostrar array
mostrarArray(numeros);
console.log(numeros);

// ordenar array y mostrar
numeros.sort();
console.log(numeros);

// invertir array y mostrar
numeros.reverse(); // invierte el orden del array
console.log(numeros);
numeros.reverse(); // vuelve el array a la normalidad
// mostrar cuantos elementos tiene el array
document.write("<h1>El array tiene " + numeros.length + " elementos</h1>");

// busqueda de valor introducido por el usuario, indicar si esta en el array y su posicion
var busqueda = parseInt(
  prompt("Introduce un número para buscarlo en el array: ")
);
var posicion = numeros.indexOf(busqueda) + 1;
if (posicion === -1) {
  document.write("<h1>El número no esta en el array</h1>");
} else {
  document.write("<h1>El número esta en la posicion " + posicion + "</h1>");
}
