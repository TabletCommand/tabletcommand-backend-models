"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var retrieveCurrentUnixTime = require("./helperUtil").retrieveCurrentUnixTime;

var modelSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true
  },
  PersonnelID: {
    type: String,
    required: true
  },
  PersonnelName: {
    type: String,
    required: true
  },
  PersonnelRank: {
    type: String
  },
  PersonnelWorkCode: {
    type: String
  },
  PersonnelNote: {
    type: String
  },

  departmentId: {
    type: String
  },
  radioName: {
    type: String
  },
  shiftStartTime: {
    type: Number
  },
  shiftEndTime: {
    type: Number
  },
  // Cases matches the other modified_unix_date
  modified_unix_date: {
    type: Number,
    default: retrieveCurrentUnixTime
  }
}, {
  collection: "massive_personnel_import"
});
modelSchema.set("autoIndex", false);

module.exports = mongoose.model("PersonnelImport", modelSchema);
