"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var modelSchema = new Schema({
  _id: {
    type: Schema.ObjectId
  },
  username: String,
  modified_unix_date: {
    type: Number,
    default: 0
  },
  count: {
    type: Number,
    default: 0
  }
}, {
  collection: "massive_rate_limit"
});

module.exports = mongoose.model("RateLimit", modelSchema);
