"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var app = express();

// archivos de rutas
var project_routes = require("./routes/project");
// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// rutas
app.use("/api", project_routes);
// exportar modulo
module.exports = app;
