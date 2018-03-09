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

var EventItem = new Schema({
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
  server_time: {
    type: Number,
    default: new Date().valueOf() / 1000.0,
    min: 1
  },
  user_time: {
    type: Number,
    required: true,
    default: 0,
    min: 1
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
    default: 0
  },
  checksum: {
    type: String,
    default: ""
  },
  events: {
    type: [EventItem]
  }
}, {
  collection: "massive_incident_event"
});
modelSchema.set("autoIndex", false);

module.exports = mongoose.model("IncidentEvent", modelSchema);
