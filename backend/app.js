"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var app = express();

// archivos de rutas

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// rutas
app.get("/", (req, res) => {
  res.status(200).send("<h1>Página de inicio</h1>");
});

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "Hola mundo desde mi API de NodeJS",
  });
});

// exportar modulo
module.exports = app;
