"use strict";

// Formulario

window.addEventListener("load", () => {
  console.log("DOM cargado");

  var formulario = document.querySelector("#formulario");
  var box_dashed = document.querySelector(".dashed");
  box_dashed.style.display = "none";

  formulario.addEventListener("submit", function () {
    console.log("Evento capturado");

    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad").value);

    if (nombre.trim() === null || nombre.length === 0) {
      // validación campo nombre
      alert("El campo NOMBRE no puede estar vacio");
      document.querySelector("#error_nombre").innerHTML =
        "El nombre no es válido";
      return false;
    } else {
      document.querySelector("#error_nombre").style.display = "none";
    }

    if (apellidos.trim() === null || apellidos.length === 0) {
      // validación campo apellidos
      alert("El campo APELLIDOS no puede estar vacio");
      document.querySelector("#error_apellidos").innerHTML =
        "El apellido no es válido";
      return false;
    } else {
      document.querySelector("#error_apellidos").style.display = "none";
    }

    if (edad == null || edad <= 0 || isNaN(edad)) {
      // validación campo edad
      alert("El campo EDAD no puede estar vacio");
      document.querySelector("#error_edad").innerHTML = "La edad no es válida";
      return false;
    } else {
      document.querySelector("#error_edad").style.display = "none";
    }

    box_dashed.style.display = "block";

    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellidos = document.querySelector("#p_apellidos span");
    var p_edad = document.querySelector("#p_edad span");

    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;
    /*
    var datos_usuario = [nombre, apellidos, edad];

    var indice;
    for (indice in datos_usuario) {
      var parrafo = document.createElement("p");
      parrafo.append(datos_usuario[indice]);
      box_dashed.append(parrafo);
    }
     */
  });
});
