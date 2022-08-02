type alfanumerico = string | number;

// string
let cadena: alfanumerico = "Hola mundo"; //pipeline permite varios tipos de datos
cadena = 12;

// number
let edad: number = 129;

// boolean
let mayorDeEdad: boolean = true;

// any
let cualquierCosa: any = "Hola mundo";

// array
let array: Array<number> = [1, 2, 3, 4, 5];
let array2: Array<string> = ["Hola", "mundo"];
let years: any[] = ["DOCE", 13, "CATORCE", 15, 16];

console.log(cadena, edad, mayorDeEdad, cualquierCosa);
console.log(array);
console.log(array2);
console.log(years);
