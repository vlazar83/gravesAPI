"use strict";

var router = require("express").Router();
var graveSchema = require("../models/grave");

router.get("/graves", (req, res) => {
  getItems(req.query).then(function (FoundItems) {
    console.log("read data from DB with query: " + JSON.stringify(req.query));
    console.log("result: " + JSON.stringify(FoundItems));

    res.send(FoundItems);
  });
});

router.post("/graves", async (req, res) => {
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

async function getItems(filter) {
  const Items = await graveSchema.find(filter);
  return Items;
}

router.put('/graves',async (req, res) => {
  const result = await graveSchema.findByIdAndUpdate({_id: req.query.graveID}, req.body);
  console.log(result);

    if (result!=null) {
      res.json({ message: `Updated Grave with ID: ${req.query.graveID} successfully` });
      
    } else {
      res.statusCode = 400;
      res.json({ Result: `Grave update failed, the grave with ID ${req.query.graveID}`  });
    }
});

router.delete('/graves',async (req, res) => {
    const result = await graveSchema.findByIdAndDelete(req.query.graveID);
    console.log(result);

      if (result!=null) {
        res.json({ message: `Deleted Grave with ID: ${req.query.graveID} successfully` });
        
      } else {
        res.statusCode = 400;
        res.json({ Result: `Grave deletion failed, the grave with ID ${req.query.graveID} does not exist`  });
      }
});

module.exports = router;
