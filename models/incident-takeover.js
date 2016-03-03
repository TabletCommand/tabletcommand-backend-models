/* jslint node: true */
"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var modelSchema = new Schema({
  _id: { type: Schema.ObjectId },
  departmentId: { type: String, default: '', required: true, index: true },
  uuid: String,
  incident_id: { type: String, required: true },
  incident_name: { type: String, required: true },

  old_owner: { type: String, required: true },
  new_owner: { type: String, required: true },
  owner: { type: String, default: '' },
  status: { type: String, required: true, default: "request" },

  request_time: { type: Number, reqyured:true, default: 0, min: 1 },
  last_response_time: { type: Number, default: 0 },
  response_time: { type: Number, default: 0 }
},
{
  collection: 'massive_incident_takeover'
}
);

module.exports = mongoose.model('IncidentTakeover', modelSchema);
