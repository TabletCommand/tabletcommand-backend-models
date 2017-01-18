/* jslint node: true */
"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var modelSchema = new Schema({
  _id: { type: Schema.ObjectId },
  departmentId: String,
	deviceType: { type: String, default: "truck" },
  mapId: { type: String, default: "" },
  deviceId: { type: String, default: "" },
  location: {
    longitude: { type: Number },
    latitude: { type: Number }
  },
  modified_unix_date: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
  remoteAddress: { type: String, default: "0.0.0.0" }
},
{
  collection: "massive_device_mapping"
}
);

module.exports = mongoose.model("DeviceMapping", modelSchema);
