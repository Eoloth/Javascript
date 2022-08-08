"use strict";

var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/portafolio")
  .then(() =>
    console.log("Conectado a la base de datos establecida satisfactoriamente")
  )
  .catch((err) => console.log(err));
