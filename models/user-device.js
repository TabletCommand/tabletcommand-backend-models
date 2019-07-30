"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
  token: {
    type: String,
    default: ""
  },
  env: {
    type: String,
    default: ""
  },
  ua: {
    type: String,
    default: ""
  },
  time: {
    type: Number,
    default: new Date().valueOf() / 1000.0
  },
  bundleIdentifier: {
    type: String,
    default: ""
  },
  silentEnabled: {
    type: Boolean,
    default: false
  },
  richEnabled: {
    type: Boolean,
    default: false
  },
  session: {
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
  userId: {
    type: String
  },
  departmentId: {
    type: String
  },
  devices: {
    type: [deviceSchema],
    default: []
  },
  notificationCount: {
    type: Number,
    default: 0
  },
  notificationUnits: {
    type: [String],
    default: []
  },
  notificationIncidentTypes: {
    type: [String],
    default: []
  }
}, {
  collection: "massive_user_device"
});
modelSchema.set("autoIndex", false);

module.exports = mongoose.model("UserDevice", modelSchema);
