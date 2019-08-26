"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var currentUnixTime = require("../helpers").currentUnixTime;

var modelSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true
  },
  departmentId: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  userId: {
    type: String,
    default: ""
  },
  action: {
    type: String,
    default: ""
  },
  object: {
    type: Object
  },
  modified_unix_date: {
    type: Number,
    default: currentUnixTime
  }
}, {
  collection: "massive_action_log"
});
modelSchema.set("autoIndex", false);

module.exports = mongoose.model("ActionLog", modelSchema);
