"use strict";
var Project = require("../models/project");
var fs = require("fs");

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
  },

  getProject: function (req, res) {
    var projectId = req.params.id;
    if (projectId == null)
      return res.status(404).send({ message: "Projecto no existe" }); //metodo para id optativa

    Project.findById(projectId, (err, project) => {
      if (err)
        return res.status(500).send({ message: "Error al devolver los datos" });
      if (!project)
        return res.status(404).send({ message: "Projecto no existe" });
      return res.status(500).send({ project });
    });
  },

  getProjects: function (req, res) {
    Project.find({})
      .sort("+year") //+year de mas nuevo a mas antiguo. -year para de menor a mayor año
      .exec((err, projects) => {
        if (err)
          return res
            .status(500)
            .send({ message: "Error al devolver los datos" });
        if (!projects)
          return res
            .status(404)
            .send({ message: "No hay projectos para mostrar" });
        return res.status(200).send({ projects });
      });
  },

  updatedProject: function (req, res) {
    var projectId = req.params.id;
    var update = req.body;

    Project.findByIdAndUpdate(
      projectId,
      update,
      { new: true },
      (err, projectUpdated) => {
        if (err)
          return res.status(500).send({ message: "Error al actualizar" });
        if (!projectUpdated)
          return res.status(404).send({ message: "No existe el projecto" });
        return res.status(200).send({ project: projectUpdated });
      }
    );
  },

  deleteProject: function (req, res) {
    var projectId = req.params.id;

    Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
      if (err)
        return res
          .status(500)
          .send({ message: "No se ha podido borrar el projecto" });
      if (!projectRemoved)
        return res
          .status(404)
          .send({ message: "No se puede eliminar ese projecto" });
      return res.status(200).send({ project: projectRemoved });
    });
  },

  uploadImage: function (req, res) {
    var projectId = req.params.id;
    var fileName = "Imagen no subida...";

    if (req.files) {
      var filePath = req.files.image.path;
      var fileSplit = filePath.split("/");
      var fileName = fileSplit[1];
      var extSplit = fileName.split(".");
      var fileExt = extSplit[1];

      if (
        fileExt == "png" ||
        fileExt == "jpg" ||
        fileExt == "JPG" ||
        fileExt == "jpeg" ||
        fileExt == "gif"
      ) {
        Project.findByIdAndUpdate(
          projectId,
          { image: fileName },
          { new: true },
          (err, projectUpdated) => {
            if (err)
              return res
                .status(500)
                .send({ message: "La imagen no se ha subido" });
            if (!projectUpdated)
              return res.status(404).send({ message: "El projecto no existe" });

            return res.status(200).send({
              project: projectUpdated,
            });
          }
        );
      } else {
        fs.unlink(filePath, (err) => {
          return res.status(200).send({
            message: "La extension no es valida",
          });
        });
      }
    } else {
      return res.status(200).send({
        message: fileName,
      });
    }
  },
};

module.exports = controller;
