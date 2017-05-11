"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelSchema = new Schema({
  uuid: {
    type: String,
    index: true
  },
  departmentId: {
    type: String,
    default: '',
    required: true,
    index: true
  },
  modifiedDate: {
    type: Number,
    default: 0,
    min: 1
  },
  statusId: {
    type: Number,
    default: 0,
    required: true,
    min: 0
  },
  code: {
    type: String,
    default: '',
    required: true,
    minlength: 1
  },
  status: {
    type: String,
    default: '',
    required: true,
    minlength: 1
  },
}, {
  collection: 'massive_cad_status'
});

module.exports = mongoose.model('CADStatus', modelSchema);
