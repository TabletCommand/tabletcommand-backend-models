/* jslint node: true */
"use strict";

var assert = require("chai").assert;

var models = require("../index");

describe("Models", function(){
  it("are wired", function(done){

    // These should match index.js
    assert.isFunction(models.CADStatus, "Missing CadStatus");
    assert.isFunction(models.CADStatusMap, "Missing CadStatusMap");
    assert.isFunction(models.CADVehicle, "Missing CadVehicle");
    assert.isFunction(models.CADVehicleStatus, "Missing CadVehicleStatus");
    assert.isFunction(models.Department, "Missing Department");
    assert.isFunction(models.DeviceMapping, "Missing DeviceMapping");
    assert.isFunction(models.IncidentTakeover, "Missing IncidentTakeover");
    assert.isFunction(models.Location, "Missing Location");
    assert.isFunction(models.RateLimit, "Missing RateLimit");
    assert.isFunction(models.Session, "Missing Session");
    assert.isFunction(models.User, "Missing User");
    assert.isFunction(models.UserRegistration, "Missing UserRegistration");

    return done();
  });
});
