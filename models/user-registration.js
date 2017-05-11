"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var modelSchema = new Schema({
  email: {
    type: String,
    default: "",
    required: true,
    index: true
  },
  name: {
    type: String,
    default: "",
    required: true
  },
  department: {
    type: String,
    default: "",
    required: true
  },
  title: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    default: ""
  },
  modifiedDate: {
    type: Number,
    required: true,
    default: 0,
    min: 1
  },
  presentedAt: {
    type: Number,
    default: 0
  },
  managedIncidentsCount: {
    type: Number,
    default: 0
  },
  checklistsCount: {
    type: Number,
    default: 0
  },
  stage: {
    type: String,
    default: ""
  },
  firstIncidentUnixTime: {
    type: Number,
    default: 0
  },
  lastIncidentLocation: {
    type: String,
    default: ""
  },
  lastIncidentUnixTime: {
    type: Number,
    default: 0
  }
}, {
  collection: "massive_user_registration"
});

module.exports = mongoose.model("UserRegistration", modelSchema);
