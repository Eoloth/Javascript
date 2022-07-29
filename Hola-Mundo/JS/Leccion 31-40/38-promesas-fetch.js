"use strict";

// Promesas
// utiles con muchos call back end, evita reiteracion de call backs

var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");

// conversion de datos de json a objeto
getUsuarios()
  .then((data) => data.json())
  .then((users) => {
    listadoUsuarios(users.data);

    return getInfo();
  })
  .then((data) => {
    div_profesor.innerHTML = data;
    return getJanet();
  })
  .then((data) => data.json())
  .then((user) => {
    mostrarJanet(user.data);
  });

function getUsuarios() {
  return fetch("https://reqres.in/api/users");
}

function getJanet() {
  return fetch("https://reqres.in/api/users/2");
}

function getInfo() {
  var profesor = {
    nombre: "Juan",
    apellido: "Perez",
    url: "https://google.com",
  };
  return new Promise((resolve, reject) => {
    var profesor_string = "";
    setTimeout(function () {
      profesor_string = JSON.stringify(profesor);
      if (typeof profesor_string != "string" || profesor_string === "")
        return reject("Error 1");
      return resolve(profesor_string);
    }, 3000);
  });
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
