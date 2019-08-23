"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EventUser = new Schema({
  username: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  radioName: {
    type: String,
    default: ""
  },
  userId: {
    type: String,
    default: ""
  }
}, {
  _id: false
});

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
  IncidentNumber: {
    type: String,
    default: "",
    required: true,
    index: true
  },
  modified_unix_date: {
    type: Number,
    default: Date.now
  },
  message: {
    type: String,
    default: ""
  },
  location: {
    longitude: {
      type: Number
    },
    latitude: {
      type: Number
    }
  },
  type: {
    type: String,
    default: ""
  },
  user: {
    type: EventUser
  },
  serverTime: {
    type: Number,
    default: Date.now,
    min: 1
  },
  userTime: {
    type: Number,
    required: true,
    default: 0,
    min: 1
  },
  uuid: {
    type: String,
    require: true
  }
}, {
  collection: "massive_incident_event"
});
modelSchema.set("autoIndex", false);

module.exports = mongoose.model("IncidentEvent", modelSchema);
