"use strict";

// Promesas
// utiles con muchos call back end, evita reiteracion de call backs

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

// conversion de datos de json a objeto
getUsuarios()
  .then((data) => data.json())
  .then((users) => {
    listadoUsuarios(users.data);
    return getJanet();
  })
  .then((data) => data.json())
  .then(
    (user) => {
      mostrarJanet(user.data);
    } // para que no se quede en espera
  );

function getUsuarios() {
  return fetch("https://reqres.in/api/users");
}

function getJanet() {
  return fetch("https://reqres.in/api/users/2");
}

function listadoUsuarios(usuarios) {
  usuarios.map((user, i) => {
    let nombre = document.createElement("h2");
    nombre.innerHTML = i + ".- " + user.first_name + " " + user.last_name;
    div_usuarios.appendChild(nombre);

    let imagen = document.createElement("img");
    imagen.src = user.avatar;
    div_usuarios.appendChild(imagen);

    document.querySelector(".loading").style.display = "none";
  });
}

function mostrarJanet(user) {
  let nombre = document.createElement("h4");
  nombre.innerHTML = user.first_name + " " + user.last_name;
  div_janet.appendChild(nombre);

  let imagen = document.createElement("img");
  imagen.src = user.avatar;
  div_janet.appendChild(imagen);

  document.querySelector("#janet .loading").style.display = "none";
}
