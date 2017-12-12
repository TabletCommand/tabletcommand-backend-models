"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var uuid = require("uuid");

var modelSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true
  },
  departmentId: {
    type: String,
    default: "",
    required: true,
    index: true
  },
  uuid: {
    type: String,
    default: uuid.v4
  },
  incident_id: {
    type: String,
    required: true
  },
  incident_name: {
    type: String,
    required: true
  },

  old_owner: {
    type: String,
    required: true
  },
  new_owner: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    required: true,
    default: "request"
  },

  request_time: {
    type: Number,
    required: true,
    default: 0,
    min: 1
  },
  last_response_time: {
    type: Number,
    default: 0
  },
  response_time: {
    type: Number,
    default: 0
  }
}, {
  collection: "massive_incident_takeover"
});
modelSchema.set("autoIndex", false);

module.exports = mongoose.model("IncidentTakeover", modelSchema);
