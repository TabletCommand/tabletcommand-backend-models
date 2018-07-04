"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var uuid = require("uuid");

var StatusOptionValue = new Schema({
  name: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "string" // int, bool
  },
  visible: {
    type: Boolean,
    default: true
  },
  value: {
    type: String,
    default: ""
  }
});

var StatusOption = new Schema({
  name: {
    type: String,
    default: ""
  },
  position: {
    type: Number,
    default: 0
  },
  visible: {
    type: Boolean,
    default: true
  },
  cadKey: {
    type: String,
    default: ""
  },
  cadValues: {
    type: [StatusOptionValue],
    default: []
  }
});

var modelSchema = new Schema({
  uuid: {
    type: String,
    index: true,
    default: uuid.v4
  },
  departmentId: {
    type: String,
    default: "",
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
    default: "",
    required: true,
    minlength: 1
  },
  status: {
    type: String,
    default: "",
    required: true,
    minlength: 1
  },
  name: {
    type: String,
    default: ""
  },
  normalized: {
    type: String,
    default: ""
  },
  options: {
    type: [StatusOption],
    default: []
  }
}, {
  collection: "massive_cad_status"
});
modelSchema.set("autoIndex", false);

module.exports = mongoose.model("CADStatus", modelSchema);
