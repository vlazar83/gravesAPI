"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var grave = new Schema({
  _id: String, //UUID style
  persons: [
    {
      _pid: String, //UUID style
      name: String,
      bornDate: String,
      deathDate: String,
    },
  ],
  location: String,
  note: String
});

module.exports = mongoose.model("grave", grave);
