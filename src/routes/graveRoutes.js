'use strict';

var router = require('express').Router();

var mongoose = require('mongoose');
var graves = require('../models/grave');

router.get('/graves',(req, res) => {    
    getItems().then(function(FoundItems){
    
        res.send(FoundItems);
    
      });
    console.log('xxx');
    });


async function getItems(){

    const Items = await graves.find({});
    return Items;

}

module.exports = router