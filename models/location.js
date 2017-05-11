"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var modelSchema = new Schema({
  _id: {
    type: Schema.ObjectId
  },
  departmentId: {
    type: String,
    default: '',
    required: true,
    index: true
  },
  userId: {
    type: String,
    default: '',
    required: true
  },
  uuid: String,
  username: {
    type: String,
    default: '',
    required: true
  },
  device_type: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  modified_unix_date: {
    type: Number,
    required: true,
    default: 0,
    min: 1
  },

  location: {
    longitude: {
      type: Number,
      required: true,
      default: 0
    },
    latitude: {
      type: Number,
      required: true,
      default: 0
    }
  }
}, {
  collection: 'massive_location'
});

module.exports = mongoose.model('Location', modelSchema);
