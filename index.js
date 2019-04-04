module.exports = function index(mongoose) {
  "use strict";

  var actionLog = require("./models/action-log")(mongoose);
  var cadIncident = require("./models/cad-incident")(mongoose);
  var cadStatus = require("./models/cad-status")(mongoose);
  var cadStatusMap = require("./models/cad-status-map")(mongoose);
  var cadVehicle = require("./models/cad-vehicle")(mongoose);
  var cadVehicleStatus = require("./models/cad-vehicle-status")(mongoose);
  var department = require("./models/department")(mongoose);
  var deviceMapping = require("./models/device-mapping")(mongoose);
  var incidentEvent = require("./models/incident-event")(mongoose);
  var incidentTakeover = require("./models/incident-takeover")(mongoose);
  var location = require("./models/location")(mongoose);
  var managedIncident = require("./models/managed-incident")(mongoose);
  var rateLimit = require("./models/rate-limit")(mongoose);
  var session = require("./models/session")(mongoose);
  var user = require("./models/user")(mongoose);
  var userRegistration = require("./models/user-registration")(mongoose);

  return {
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
    UserRegistration: userRegistration
  };
};
