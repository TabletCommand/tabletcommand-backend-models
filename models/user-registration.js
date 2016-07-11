/* jslint node: true */
"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var modelSchema = new Schema({
  _id: { type: Schema.ObjectId },
  email: { type: String, default: '', required: true, index: true },
  name: { type: String, default: '', required: true },
  department: { type: String, default: '', required: true },
  title: { type: String, default: '' },
  status: { type: String, default: '' },
  modifiedDate: { type: Number, required: true, default: 0, min: 1 },
},
{
  collection: 'massive_user_registration'
}
);

module.exports = mongoose.model('UserRegistration', modelSchema);
