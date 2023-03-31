"use strict";

var express = require("express");
var ProjectController = require("../controllers/project");

var router = express.Router();

router.get("/home", ProjectController.home);
router.post("/test", ProjectController.test);
router.post("/save-project", ProjectController.saveProject);
router.get("/project/:id?", ProjectController.getProject); //parametro id opcional, ver controllers/project

module.exports = router;
