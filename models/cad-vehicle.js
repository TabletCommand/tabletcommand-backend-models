"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var uuid = require("uuid");

var Station = new Schema({
  code: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  }
}, {
  _id: false
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
  vehicleId: {
    type: String,
    default: "",
    required: true,
    minlength: 1
  },
  radioName: {
    type: String,
    default: "",
    required: true,
    minlength: 1
  },
  station: {
    type: Station,
    default: null
  }
}, {
  collection: "massive_cad_vehicle"
});
modelSchema.set("autoIndex", false);

module.exports = mongoose.model("CADVehicle", modelSchema);
