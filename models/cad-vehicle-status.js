"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var uuid = require("uuid");
var _ = require("lodash");

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
  statusNormalized: {
    type: String,
    default: ""
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
modelSchema.set("autoIndex", false);

modelSchema.methods.propagateToObject = function propagateToObject(dbItem, callback) {
  if (!_.isObject(dbItem)) {
    return callback(this);
  }

  // We keep the same value for _id, uuid, departmentId
  dbItem.vehicleId = this.vehicleId;
  dbItem.radioName = this.radioName;
  dbItem.requestTime = this.requestTime;
  dbItem.responseTime = this.responseTime;
  dbItem.status = this.status;
  dbItem.statusCode = this.statusCode;
  dbItem.statusNormalized = this.statusNormalized;
  dbItem.modifiedDate = this.modifiedDate;
  dbItem.requestStatus = this.requestStatus;
  dbItem.incidentNumber = this.incidentNumber;

  return callback(dbItem);
};

module.exports = mongoose.model("CADVehicleStatus", modelSchema);
