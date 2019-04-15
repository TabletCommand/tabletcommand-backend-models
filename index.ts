"use strict";

function wireModels(mongoose, callback) {
  const actionLog = require("./models/action-log")(mongoose);
  const cadIncident = require("./models/cad-incident")(mongoose);
  const cadStatus = require("./models/cad-status")(mongoose);
  const cadStatusMap = require("./models/cad-status-map")(mongoose);
  const cadVehicle = require("./models/cad-vehicle")(mongoose);
  const cadVehicleStatus = require("./models/cad-vehicle-status")(mongoose);
  const department = require("./models/department")(mongoose);
  const deviceMapping = require("./models/device-mapping")(mongoose);
  const incidentEvent = require("./models/incident-event")(mongoose);
  const incidentTakeover = require("./models/incident-takeover")(mongoose);
  const location = require("./models/location")(mongoose);
  const managedIncident = require("./models/managed-incident")(mongoose);
  const rateLimit = require("./models/rate-limit")(mongoose);
  const session = require("./models/session")(mongoose);
  const user = require("./models/user")(mongoose);
  const userRegistration = require("./models/user-registration")(mongoose);

  const models = {
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

  return callback(models);
}

function connect(url, callback) {
  const mongoose = require("mongoose");
  mongoose.Promise = require("bluebird");

  return wireModels(mongoose, (models) => {
    const opts = {
      useNewUrlParser: true
    };
    return mongoose.connect(url, opts, (err, connection) => {
      if (err) {
        return callback(err);
      }

      return callback(err, mongoose, connection, models);
    });
  });
}

module.exports = {
  connect
};
