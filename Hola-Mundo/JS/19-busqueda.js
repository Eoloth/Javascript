"use strict";

// Busqueda de un elemento
var numero = 4;
var texto1 = "Bienvenido al curso de JavaScript, curso muy bueno";
var texto2 = "Es muy buen cursos de JavaScript";

var indice = texto1.lastIndexOf(numero);
console.log(indice);

var metodoBusqueda = texto2.search("curso");
console.log(metodoBusqueda);

var metodoMatch = texto1.match("curso"); // para buscar mas de una palabra, utilizar /g al final
// ejemplo: var metodoMatch = texto1.match(/curso/g);
// revisar FUENTE o SOURCE en navegador para más detalles de palabra encontrada
// comienza en indice 0
console.log(metodoMatch);

var metodoChartAt = texto1.charAt(4);
console.log(metodoChartAt); // retorna el caracter en la posicion 4

var metodoStartsWith = texto1.startsWith("Bienvenido");
console.log(metodoStartsWith); // retorna true o false si el string empieza con la palabra indicada

var metodoEndsWith = texto1.endsWith("bueno");
console.log(metodoEndsWith); // retorna true o false si el string termina con la palabra indicada

var metodoIncludes = texto1.includes("JavaScript");
console.log(metodoIncludes); // retorna true o false si el string contiene la palabra indicada
// es case sensitive
