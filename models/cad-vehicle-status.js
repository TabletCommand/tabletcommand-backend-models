"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var modelSchema = new Schema({
  uuid: {
    type: String,
    index: true
  },
  departmentId: {
    type: String,
    default: "",
    required: true,
    index: true
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
  requestTime: {
    type: Number,
    default: 0
  },
  responseTime: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: "",
    required: true,
    minlength: 1
  },
  statusCode: {
    type: String,
    default: "",
    required: true,
    minlength: 1
  },
  modifiedDate: {
    type: Number,
    default: 0,
    min: 1
  },
  requestStatus: {
    type: Number,
    default: 0
  },
  incidentNumber: {
    type: String,
    default: ""
  }
}, {
  collection: "massive_cad_vehicle_status"
});

module.exports = mongoose.model("CADVehicleStatus", modelSchema);
