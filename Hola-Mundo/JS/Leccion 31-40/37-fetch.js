"use strict";

// Fetch (ajax) y peticiones a servicios / api rest
var div_usuarios = document.querySelector("#usuarios");

var usuarios = [];

fetch("https://reqres.in/api/users") // obtencion de datos
  .then((data) =>
    data
      .json() // conversion de datos de json a objeto
      .then((users) => {
        usuarios = users.data;
        console.log(usuarios);

        usuarios.map((user, i) => {
          let nombre = document.createElement("h2");
          nombre.innerHTML = i + ".- " + user.first_name + " " + user.last_name;
          div_usuarios.appendChild(nombre);

          let imagen = document.createElement("img");
          imagen.src = user.avatar;
          div_usuarios.appendChild(imagen);

          document.querySelector(".loading").style.display = "none";
        });
      })
  );
