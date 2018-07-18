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
  }
}, {
  collection: "massive_incident_cad"
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

module.exports = mongoose.model("CADIncident", modelSchema);
