"use strict";

var uuid = require("uuid");

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var modelSchema = new Schema({
  _id: {
    type: String,
    default: uuid.v4
  },
  nick: String,
  email: String,
  user: String,
  active: {
    type: Boolean,
    default: false
  },
  token: {
    type: String,
    default: uuid.v4
  }
}, {
  collection: "sys_login"
});

module.exports = mongoose.model("Session", modelSchema);
