"use strict";

var express = require("express");
var ProjectController = require("../controllers/project");

var router = express.Router();

router.get("/home", ProjectController.home);
router.post("/test", ProjectController.test);
router.post("/save-project", ProjectController.saveProject);
router.get("/project/:id?", ProjectController.getProject); //parametro id opcional, ver controllers/project
router.get("/projects", ProjectController.getProjects);
router.put("/project/:id", ProjectController.updatedProject);
router.delete("/project/:id", ProjectController.deleteProject);

module.exports = router;
