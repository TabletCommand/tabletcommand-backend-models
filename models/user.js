/* jslint node: true */
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelSchema = new Schema({
  nick: { type: String, default: '' },
  email: { type: String, default: '' },
  name: { type: String, default: '' },
  active: { type: Boolean, default: false },
  departmentId: { type: String, default: '', required: true, index: true },
  admin: { type: Boolean, default: false },
  superuser: { type: Boolean, default: false },
  salt: { type: String, default: '', select: false },
  pass: { type: String, default: '', select: false },
  outsider: { type: Boolean, default: false },
  mapHidden: { type: Boolean, default: false },
  mapId: { type: String, default: '' },
  rtsAuthKey: { type: String, default: '' },
  token: { type: String, default: '' },
  tokenExpireDate: { type: Number, default: 0 }
},
{
  collection: 'sys_user'
}
);

module.exports = mongoose.model('User', modelSchema);
