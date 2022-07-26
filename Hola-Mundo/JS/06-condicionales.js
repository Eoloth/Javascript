'use strict'

// Condicional if
//  Si A es igual a B entonces haz algo
//  Si A no es igual a B entonces haz otra cosa

var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
    console.log("Edad 1 es mayor que edad 2");
}else{
    console.log("Edad 1 es menor que edad 2");
}

/*
//  Operadores relacionales
    nayor: >
    menor: <
    mayor o igual: >=
    menor o igual: <=
    igual: ==
    diferente: !=
 */

var edad = 18;
var nombre = "Ruben";

if (edad >= 18)
{
    console.log(nombre + " tiene " + edad + " años, es mayor de edad"); // Ruben tiene 18 años, es mayor de edad
    if(edad <= 33){
        console.log("Todavía eres milenial");
    }else if(edad <= 70){
        console.log("Eres anciano");
    }else{
        console.log("Ya no eres milenial");
    }
}else{
    console.log(nombre + " tiene " + edad + " años, es menor de edad"); // Ruben tiene 18 años, es menor de edad
}

