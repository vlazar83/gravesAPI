"use strict";

var router = require("express").Router();
var graveSchema = require("../models/grave");

router.post("/", async (req, res) => {
  try {
    var new_grave = new graveSchema(req.body);
    const result = await new_grave.save();
    res.json(result);
  } catch (e) {
    console.error(e);
    res.statusCode = 400;
    res.json({ Result: "Error" });
  }
});

router.put("/", async (req, res) => {
  const result = await graveSchema.findByIdAndUpdate({ _id: req.query.graveID }, req.body);
  console.log(result);

  if (result != null) {
    res.json({ message: `Updated Grave with ID: ${req.query.graveID} successfully` });
  } else {
    res.statusCode = 400;
    res.json({ Result: `Grave update failed, the grave with ID ${req.query.graveID}` });
  }
});

router.delete("/", async (req, res) => {
  const result = await graveSchema.findByIdAndDelete(req.query.graveID);
  console.log(result);

  if (result != null) {
    res.json({ message: `Deleted Grave with ID: ${req.query.graveID} successfully` });
  } else {
    res.statusCode = 400;
    res.json({ Result: `Grave deletion failed, the grave with ID ${req.query.graveID} does not exist` });
  }
});

module.exports = router;
