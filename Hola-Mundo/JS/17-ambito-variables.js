"use strict";

// AMBITO DE VARIABLES
// Las variables se definen dentro de una función

function holaMundo(texto) {
  var hola_mundo = "Texto dentro de funcion"; // solo dentro de la funcion, var local
  console.log(texto);
  console.log(numero.toString()); // se puede invocar variable numero aunque no este en metodo
  console.log(hola_mundo);
}

var numero = 10; //variable global definida fuera de funcion
var texto = "Hola Mundo, soy una variable global";
holaMundo(texto);

// console.log(hola_mundo); // no se puede invocar variable hola_mundo aunque no este en metodo
