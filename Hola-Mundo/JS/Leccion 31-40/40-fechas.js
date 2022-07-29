"use strict";

var fecha = new Date();
var anio = fecha.getFullYear();
var mes = fecha.getMonth() + 1;
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

var textoHora = `
El año es: ${anio}
El mes es: ${mes}
El día es: ${dia}
La hora es: ${hora}
Los minutos son: ${minutos}
Los segundos son: ${segundos}
`;
console.log(textoHora);
