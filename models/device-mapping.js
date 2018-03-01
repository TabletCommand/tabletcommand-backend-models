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
    default: ""
  },
  userId: {
    type: String,
    default: ""
  },
  deviceType: {
    type: String,
    default: "truck"
  },
  mapId: {
    type: String,
    default: ""
  },
  deviceId: {
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
  modified_unix_date: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  },
  remoteAddress: {
    type: String,
    default: "0.0.0.0"
  },
  uuid: {
    type: String,
    default: uuid.v4
  },
  note: {
    type: String,
    default: ""
  }
}, {
  collection: "massive_device_mapping"
});
modelSchema.set("autoIndex", false);

module.exports = mongoose.model("DeviceMapping", modelSchema);
