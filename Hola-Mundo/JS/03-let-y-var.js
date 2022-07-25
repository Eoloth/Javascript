'use strict'
// Pruebas con let y var
// let: Es una variable que se puede reasignar, no mantiene el valor anterior

// Prueba con var
var numero = 40;
console.log(numero); // 40

if(true){
    var numero = 50;
    console.log(numero); // 50
}

console.log(numero); // 50

// Prueba con let
var texto = "Curso de JS";
console.log(texto); // Curso de JS

if(true){
    let texto = "Curso de Angular";
    console.log(texto); // Curso de Angular
}

console.log(texto); // Curso de JS