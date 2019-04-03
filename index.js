module.exports = function index(mongoose) {
  "use strict";

  var cadIncident = require("./models/cad-incident")(mongoose);
  var department = require("./models/department")(mongoose);
  var session = require("./models/session")(mongoose);
  var user = require("./models/user")(mongoose);

  return {
    // ActionLog: actionLog,
    CADIncident: cadIncident,
    // CADStatus: cadStatus,
    // CADStatusMap: cadStatusMap,
    // CADVehicle: cadVehicle,
    // CADVehicleStatus: cadVehicleStatus,
    Department: department,
    // DeviceMapping: deviceMapping,
    // IncidentEvent: incidentEvent,
    // IncidentTakeover: incidentTakeover,
    // Location: location,
    // ManagedIncident: managedIncident,
    // RateLimit: rateLimit,
    Session: session,
    User: user
    // UserRegistration: userRegistration
  };
};
