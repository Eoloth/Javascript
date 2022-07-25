'use strict'

// Operadores
// sin comillas lo reconoce como entero
// en caso de ser texto sin comillas, reconoce como variable
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;
// las opraciones se realizan con los operadores + - / * %
alert("El resultado de la operación es: " + operacion);

// Tipos de datos
var numero_entero = 44;
var cadena_texto = "Hola Mundo";
var verdadero_o_falso = true;

// Convertir un numero a otro
var numero_falso = "44"; // string, no número entero
console.log(numero_falso);

// Convertir string a int
console.log(parseInt(numero_falso));  // 1° opción, solo entero
Number(numero_falso);                // 2° opción, con decimales
console.log(verdadero_o_falso);

console.log(String(numero_entero)+5); // convierte a string, por lo que concatena

// Como saber que tipo de dato es una variable
console.log(typeof numero_entero);