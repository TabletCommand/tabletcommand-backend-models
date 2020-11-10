"use strict";

const assert = require("chai").assert;

const m = require("../");
const config = require("./config");

describe(" Models", function() {
  let models, mongoose;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;
  });
  afterEach(function() {
    mongoose.disconnect();
  });
  it("are wired", function(done) {
    // These should match index.js
    assert.isFunction(models.ActionLog, "Missing ActionLog");
    assert.isFunction(models.Agency, "Missing Agency");
    assert.isFunction(models.Assignment, "Missing Assignment");
    assert.isFunction(models.Battalion, "Missing Battalion");
    assert.isFunction(models.BeaconLog, "Missing BeaconLog");
    assert.isFunction(models.Checklist, "Missing Checklist");
    assert.isFunction(models.ChecklistItem, "Missing ChecklistItem");
    assert.isFunction(models.CADIncident, "Missing CADIncident");
    assert.isFunction(models.CADIncidentStream, "Missing CADIncidentStream");
    assert.isFunction(models.CADStatus, "Missing CADStatus");
    assert.isFunction(models.CADStatusMap, "Missing CADStatusMap");
    assert.isFunction(models.CADVehicle, "Missing CADVehicle");
    assert.isFunction(models.CADVehicleStatus, "Missing CADVehicleStatus");
    assert.isFunction(models.CADVehicleStatusHistory, "Missing CADVehicleStatusHistory");
    assert.isFunction(models.ChartIncident, "Missing ChartIncident");
    assert.isFunction(models.ChartManagedIncident, "Missing ChartManagedIncident");
    assert.isFunction(models.ChartUser, "Missing ChartUser");
    assert.isFunction(models.Department, "Missing Department");
    assert.isFunction(models.DeviceMapping, "Missing DeviceMapping");
    assert.isFunction(models.Esri, "Missing Esri");
    assert.isFunction(models.IncidentEvent, "Missing IncidentEvent");
    assert.isFunction(models.IncidentNotified, "Missing IncidentNotified");
    assert.isFunction(models.IncidentTakeover, "Missing IncidentTakeover");
    assert.isFunction(models.Location, "Missing Location");
    assert.isFunction(models.MailLog, "Missing MailLog");
    assert.isFunction(models.ManagedIncident, "Missing ManagedIncident");
    assert.isFunction(models.Monitor, "Missing Monitor");
    assert.isFunction(models.PersonnelImport, "Missing PersonnelImport");
    assert.isFunction(models.RateLimit, "Missing RateLimit");
    assert.isFunction(models.Session, "Missing Session");
    assert.isFunction(models.SMTPUnhandled, "Missing SMTPUnhandled");
    assert.isFunction(models.Template, "Missing Template");
    assert.isFunction(models.User, "Missing User");
    assert.isFunction(models.UserDevice, "Missing UserDevice");
    assert.isFunction(models.UserRegistration, "Missing UserRegistration");

    return done();
  });
});
