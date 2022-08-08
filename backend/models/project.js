"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  name: String,
  description: String,
  category: String,
  year: Number,
  langs: [String],
});

module.exports = mongoose.model("Project", projectSchema);
