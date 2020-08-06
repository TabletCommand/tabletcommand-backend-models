"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("Models", function() {
  let models, mongoose;
  beforeEach(async function() {
    const c = await m.connect(url);
    models = c.models;
    mongoose = c.mongoose;
  });
  afterEach(function() {
    mongoose.disconnect();
  });
  it("are wired", function(done) {
    // These should match index.js
    assert.isFunction(models.ActionLog, "Missing ActionLog");
    assert.isFunction(models.BeaconLog, "Missing BeaconLog");
    assert.isFunction(models.CADIncident, "Missing CADIncident");
    assert.isFunction(models.CADStatus, "Missing CadStatus");
    assert.isFunction(models.CADStatusMap, "Missing CadStatusMap");
    assert.isFunction(models.CADVehicle, "Missing CadVehicle");
    assert.isFunction(models.CADVehicleStatus, "Missing CadVehicleStatus");
    assert.isFunction(models.Department, "Missing Department");
    assert.isFunction(models.DeviceMapping, "Missing DeviceMapping");
    assert.isFunction(models.Esri, "Missing Esri");
    assert.isFunction(models.IncidentEvent, "Missing IncidentEvent");
    assert.isFunction(models.IncidentTakeover, "Missing IncidentTakeover");
    assert.isFunction(models.Location, "Missing Location");
    assert.isFunction(models.ManagedIncident, "Missing ManagedIncident");
    assert.isFunction(models.PersonnelImport, "Missing PersonnelImport");
    assert.isFunction(models.RateLimit, "Missing RateLimit");
    assert.isFunction(models.Session, "Missing Session");
    assert.isFunction(models.User, "Missing User");
    assert.isFunction(models.UserDevice, "Missing UserDevice");
    assert.isFunction(models.UserRegistration, "Missing UserRegistration");

    return done();
  });
});
