/* jslint node: true */
"use strict";

var cadStatus = require('./models/cad-status');
var cadStatusMap = require('./models/cad-status-map');
var cadVehicle = require('./models/cad-vehicle');
var cadVehicleStatus = require('./models/cad-vehicle-status');
var department = require('./models/department');
var deviceMapping = require('./models/device-mapping');
var incidentTakeover = require('./models/incident-takeover');
var location = require('./models/location');
var rateLimit = require('./models/rate-limit');
var session = require('./models/session');
var user = require('./models/user');
var userRegistration = require('./models/user-registration');

module.exports = {
	CADStatus: cadStatus,
	CADStatusMap: cadStatusMap,
	CADVehicle: cadVehicle,
	CADVehicleStatus: cadVehicleStatus,
	Department: department,
	DeviceMapping: deviceMapping,
	IncidentTakeover: incidentTakeover,
	Location: location,
	RateLimit: rateLimit,
	Session: session,
	User: user,
	UserRegistration: userRegistration,
};
