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
