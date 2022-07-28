"use strict";

// JSON
window.onload = function () {
  var pelicula = {
    titulo: "El señor de los anillos",
    year: "2001",
    director: "Peter Jackson",
    actores: ["Elijah Wood", "Sean Bean", "Liv Tyler"],
  };

  var peliculas = [
    { titulo: "La verdad duele", year: "2016", pais: "Francia" },
    pelicula,
  ];
  // Se inserta array en array
  pelicula.titulo = "El señor de los anillos 2";

  var caja_peliculas = document.querySelector("#peliculas");

  var index;

  for (index in peliculas) {
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
  }
};
