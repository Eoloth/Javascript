"use strict";

// Plantillas de texto

var nombre = prompt("¿Cuál es tu nombre?");
var apellido = prompt("¿Cuál es tu apellido?");

// var texto = "Mi nombre es: " + nombre + " y mi apellido es: " + apellido;

// usar comillas invertidas con option + } para imprimir variables dentrp de plantillas de texto
var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellido}</h3>
`;
document.write(texto);
