"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var grave = new Schema({
  _id: Schema.Types.UUID,
  persons: [
    {
      _id: "UUID",
      name: String,
      bornDate: String,
      deathDate: String,
    },
  ],
  location: String,
  note: String
});

module.exports = mongoose.model("grave", grave);
