/* jslint node: true */
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EsriToken = new Schema({
  access_token: { type: String, default: '' },
  refresh_token: { type: String, default: '' },
  username: { type: String, default: '' },
  ssl: { type: Boolean, default: true },
  expires_in: { type: Number, default: 1800 },
},
{
  _id: false
}
);

var IncidentType = new Schema({
  name: { type: String, default: 'Any' },
  value: { type: String, default: 'any' },
},
{
  _id: false
}
);

var modelSchema = new Schema({
  _id: { type: Schema.ObjectId },
  uuid: { type: String, default: '' },

  department: String,
  fdid: String,
  city: String,
  state: String,
  contact_name: { type: String, default: '' },
  contact_phone: { type: String, default: '' },
  contact_email: { type: String, default: '' },

  active: { type: Boolean, default: false },
  pager_number: { type: String, default: '' },
  apikey: { type: String, default: '' },

  // CAD Features
  cadMonitorEnabled: { type: Boolean, default: false },
  cadMonitorMinutes: { type: Number, default: 120 },
  cadBidirectionalEnabled: { type: Boolean, default: false },
  heartbeatEnabled: { type: Boolean, default: false },
  pushEnabled: { type: Boolean, default: true },

  // RTS
  rtsEnabled: { type: Boolean, default: false },
  rtsChannelPrefix: { type: String, default: '' },
  rtsAuthKey: { type: String, default: '' },
  esriTokenDateExpiry: { type: Number, default: 0 },
  esriToken: { type: EsriToken },

  // Custom Button
  customWebUrl: { type: String, default: '' },
  customWebName: { type: String, default: '' },

  // Incident Type APN
  incidentTypes: { type: [IncidentType] },

  // Signup
  signupKey: { type: String, default: '' },
},
{
  collection: 'massive_admin'
}
);

module.exports = mongoose.model('Department', modelSchema);
