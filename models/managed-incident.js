"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var uuid = require("uuid");
var moment = require("moment-timezone");
var _ = require("lodash");

function unixTimeToJSONWithTimezone(unixTime) {
  if (_.isFinite(unixTime) && unixTime > 1) {
    return moment.unix(unixTime).utc().format("YYYY-MM-DDTHH:mm:ssZZ");
  }
  return "";
}

function unixTimeToLocalTime(unixTime) {
  if (_.isFinite(unixTime) && unixTime > 1) {
    return moment.unix(unixTime).utc().format("YYYY-MM-DDTHH:mm:ss.SSS");
  }
  return "";
}

var HistoryItem = new Schema({
  message: {
    type: String,
    default: ""
  },
  entity_type: {
    type: Number,
    default: 0
  },
  time: {
    type: Number,
    default: 0
  },
  entity_id: {
    type: Number,
    default: 0
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
  userId: {
    type: String,
    required: true
  },
  uuid: {
    type: String,
    default: uuid.v4
  },

  start_unix_time: {
    type: Number,
    default: 0
  },

  end_unix_time: Number,
  par_unix_time: Number,
  watch_unix_start_time: Number,
  watch_unix_pause_time: Number,

  modified_unix_date: {
    type: Number,
    default: 0
  },

  channel_owner: {
    type: String,
    default: ""
  },
  channel: {
    type: String,
    default: ""
  },

  location: String,
  last_view: String,
  preference_location: String,
  address: String,
  name: String,
  cross_streets: String,
  api_incident_number: String,
  CommonPlaceName: String,
  TacticalChannel: String,
  active: Boolean,
  slave_map_changed: Boolean,
  managed: Boolean,
  is_closed: Boolean,

  // Incident Notes
  notes: {
    type: [HistoryItem]
  },
  // Incident History
  history: {
    type: [HistoryItem]
  }
}, {
  collection: "massive_incident_managed"
});
modelSchema.set("autoIndex", false);

modelSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret) {
    ret.id = ret._id;
  }
});

modelSchema.virtual("id").get(function() {
  return this._id.toString();
});

modelSchema.virtual("start_time").get(function() {
  return unixTimeToJSONWithTimezone(this.start_unix_time);
});

modelSchema.virtual("end_time").get(function() {
  return unixTimeToJSONWithTimezone(this.end_unix_time);
});

modelSchema.virtual("modified_date").get(function() {
  return unixTimeToLocalTime(this.modified_unix_date);
});

module.exports = mongoose.model("ManagedIncident", modelSchema);
