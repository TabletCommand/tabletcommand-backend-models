"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var modelSchema = new Schema({
  nick: {
    type: String,
    default: "",
    index: true
  },
  email: {
    type: String,
    default: "",
    index: true
  },
  name: {
    type: String,
    default: ""
  },
  departmentId: {
    type: String,
    default: "",
    required: true,
    index: true
  },
  modified_date: {
    type: Date,
    default: new Date()
  },
  when: {
    type: Date
  },
  agency: {
    type: String,
    default: ""
  },

  active: {
    type: Boolean,
    default: false
  },
  admin: {
    type: Boolean,
    default: false
  },
  superuser: {
    type: Boolean,
    default: false
  },
  isPro: {
    type: Boolean,
    default: false
  },
  outsider: {
    type: Boolean,
    default: false
  },

  remoteLoggingEnabled: {
    type: Boolean,
    default: false
  },

  salt: {
    type: String,
    default: "",
    select: false
  },
  pass: {
    type: String,
    default: "",
    select: false
  },

  mapHidden: {
    type: Boolean,
    default: true
  },
  mapId: {
    type: String,
    default: ""
  },

  rtsAuthKey: {
    type: String,
    default: ""
  },
  token: {
    type: String,
    default: ""
  },
  tokenExpireDate: {
    type: Number,
    default: 0
  }
}, {
  collection: "sys_user"
});
modelSchema.set("autoIndex", false);

module.exports = mongoose.model("User", modelSchema);
