/* jslint node: true */
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelSchema = new Schema({
  _id: { type: Schema.ObjectId },
  uuid: { type: String, default: '' },
  department: String,
  fdid: String,
  city: String,
  state: String,
  active: { type: Boolean, default: false },
  pager_number: { type: String, default: '' },
  apikey: { type: String, default: '' },
  rtsChannelPrefix: { type: String, default: '' },
  rtsAuthKey: { type: String, default: '' },
  cadMonitorEnabled: { type: Boolean, default: false },
  heartbeatEnabled: { type: Boolean, default: false },
  pushEnabled: { type: Boolean, default: false },
  rtsEnabled: { type: Boolean, default: false }
},
{
  collection: 'massive_admin'
}
);

module.exports = mongoose.model('Department', modelSchema);
