"use strict";

var actionLog = require("./models/action-log");
var cadStatus = require("./models/cad-status");
var cadStatusMap = require("./models/cad-status-map");
var cadVehicle = require("./models/cad-vehicle");
var cadVehicleStatus = require("./models/cad-vehicle-status");
var department = require("./models/department");
var deviceMapping = require("./models/device-mapping");
var incidentEvent = require("./models/incident-event");
var incidentTakeover = require("./models/incident-takeover");
var location = require("./models/location");
var managedIncident = require("./models/managed-incident");
var cadIncident = require("./models/cad-incident");
var rateLimit = require("./models/rate-limit");
var session = require("./models/session");
var user = require("./models/user");
var userRegistration = require("./models/user-registration");
var userDevice = require("./models/user-device");
var personnelImport = require("./models/personnel-import");

module.exports = {
  ActionLog: actionLog,
  CADIncident: cadIncident,
  CADStatus: cadStatus,
  CADStatusMap: cadStatusMap,
  CADVehicle: cadVehicle,
  CADVehicleStatus: cadVehicleStatus,
  Department: department,
  DeviceMapping: deviceMapping,
  IncidentEvent: incidentEvent,
  IncidentTakeover: incidentTakeover,
  Location: location,
  ManagedIncident: managedIncident,
  RateLimit: rateLimit,
  Session: session,
  User: user,
  UserRegistration: userRegistration,
  UserDevice: userDevice,
  PersonnelImport: personnelImport
};
