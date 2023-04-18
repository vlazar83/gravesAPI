'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const { randomUUID } = require('crypto');

var person = new Schema({
    _id: {
        type: 'UUID',
        default: () => randomUUID()
    },
    name: {
      type: String
    },
    bornDate: {
      type: String
    },
    deathDate: {
      type: String
    }
  });
  
  module.exports = mongoose.model('person', person);
  module.exports = {person};