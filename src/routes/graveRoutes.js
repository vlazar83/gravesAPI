"use strict";

var router = require("express").Router();
var mongoose = require("mongoose");
// graveSchema = mongoose.model("grave");
var graveSchema = require("../models/grave");

router.get("/graves", (req, res) => {
  getItems(req.query).then(function (FoundItems) {
    console.log("read data from DB with query: " + JSON.stringify(req.query));
    console.log("result: " + JSON.stringify(FoundItems));

    res.send(FoundItems);
  });
});

router.post("/graves", async (req, res) => {
  var new_grave = new graveSchema(req.body);

  const result = await new_grave.save();

    res.json(result);
});

async function getItems(filter) {
  const Items = await graveSchema.find(filter);
  return Items;
}

module.exports = router;
