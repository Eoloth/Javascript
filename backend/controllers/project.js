"use strict";
var Project = require("../models/project");

var controller = {
  home: function (req, res) {
    return res.status(200).send({
      message: "Soy la home",
    });
  },
  test: function (req, res) {
    return res.status(200).send({
      message: "Soy el metodo o accion test del controlador del project",
    });
  },
  saveProject: function (req, res) {
    var project = new Project();

    var params = req.body;
    project.name = params.name;
    project.description = params.description;
    project.category = params.category;
    project.year = params.year;
    project.langs = params.langs;
    project.image = null;

    // Guardar objeto en BBDD
    project.save((err, projectStored) => {
      if (err)
        return res
          .status(500)
          .send({ message: "Error al guardar el documento" });
      if (!projectStored)
        return res
          .status(404)
          .send({ message: "No se ha podido guardar el projecto" });
      return res.status(200).send({ project: projectStored });
    });

    return res.status(200).send({
      project: project,
      message: "Metodo saveProject",
    });
  },

  getProject: function (req, res) {
    var projectId = req.params.id;
    if (projectId == null)
      return res.status(404).send({ message: "Projecto no existe" });

    Project.findById(projectId, (err, project) => {
      if (err)
        return res.status(500).send({ message: "Error al devolver los datos" });
      if (!project)
        return res.status(404).send({ message: "Projecto no existe" });
      return res.status(500).send({ project });
    });
  },
};

module.exports = controller;
