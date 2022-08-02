function getNumero(numero: number = 12): string {
  return "El número es: " + numero;
}
console.log(getNumero(5));

// Función con parámetros obligatorios, opcionales y por defecto
function getInfo(nombre, edad, residencia) {
  if (edad === void 0) {
    edad = 30;
  }
  if (residencia === void 0) {
    residencia = "Desconocida";
  }
  return (
    "El nombre es " +
    nombre +
    " tiene " +
    edad +
    " a\u00F1os y vive en " +
    residencia
  );
}
