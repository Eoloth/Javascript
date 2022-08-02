"use strict";

var bicicleta = {
  color: "rojo",
  modelo: "BMX",
  frenos: "disco",
  velocidadMaxima: "60km",
  cambiaColor: function (nuevo_Color) {
    this.color = nuevo_Color;
    console.log(this);
  },
};

bicicleta.cambiaColor("verde");
