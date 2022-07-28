"use strict";

// Local Storage

// Comprobar si el navegador es compatible
if (typeof Storage !== "undefined") {
  console.log("Local Storage disponible");
} else {
  console.log("Local Storage no disponible");
}

// Guardar dato en local storage
// clave y valor
localStorage.setItem("titulo", "Curso de JS");

// Recuperar elemento del local storage
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos
var usuario = {
  nombre: "Juan",
  email: "12@asb.com",
  web: "https://www.google.es",
};
// convertid JSON de JS a JSON normal

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);

document.querySelector("#datos").append(" " + userjs.web + " " + userjs.nombre);

localStorage.removeItem("usuario"); // eliminar elemento del local storage, pero no de la pag web

localStorage.clear(); // eliminar todos los elementos del local storage
