'use strict';
var mongoose = require('mongoose');
const personSchema = require('./person');
var Schema = mongoose.Schema;

var grave = new Schema({
    _id: Schema.Types.UUID,
    persons: [personSchema.person],
    location: {
        type: String
    },
    note: {
        type: String
    },
  });
  
  module.exports = mongoose.model('grave', grave);