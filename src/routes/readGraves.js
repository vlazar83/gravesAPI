"use strict";

var router = require("express").Router();
var graveSchema = require("../models/grave");

router.get("/", (req, res) => {
  getItems(req.query).then(function (FoundItems) {
    console.log("read data from DB with query: " + JSON.stringify(req.query));
    console.log("result: " + JSON.stringify(FoundItems));

    res.send(FoundItems);
  });
});

async function getItems(filter) {
  const Items = await graveSchema.find(filter);
  return Items;
}

module.exports = router;
