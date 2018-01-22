"use strict";

let mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
let models = require("../index");

let Mockgoose = require("mockgoose").Mockgoose;
let mockgoose = new Mockgoose(mongoose);

const redisClient = require("redis-js");

const mock = require("./mock")({
  mockgoose,
  mongoose,
  models,
  redisClient
});

const assert = require("chai").assert;
const testItem = mock.cadVehicleStatus;

describe("CADVehicleStatus", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    const item = new models.CADVehicleStatus(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.equal(testItem.uuid, sut.uuid);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.vehicleId, sut.vehicleId);
      assert.equal(testItem.radioName, sut.radioName);
      assert.equal(testItem.requestTime, sut.requestTime);
      assert.equal(testItem.responseTime, sut.responseTime);
      assert.equal(testItem.status, sut.status);
      assert.equal(testItem.statusCode, sut.statusCode);
      assert.equal(testItem.modifiedDate, sut.modifiedDate);
      assert.equal(testItem.requestStatus, sut.requestStatus);
      assert.equal(testItem.incidentNumber, sut.incidentNumber);

      return done();
    });
  });

  it("propagateToObject with null", function(done) {
    const item = new models.CADVehicleStatus(testItem);
    item.propagateToObject(null, function(itemToSave) {
      assert.equal(testItem.radioName, itemToSave.radioName);
      assert.equal(testItem.vehicleId, itemToSave.vehicleId);
      assert.equal(testItem.status, itemToSave.status);
      assert.equal(testItem.statusCode, itemToSave.statusCode);
      assert.equal(testItem.modifiedDate, itemToSave.modifiedDate);

      return done();
    });
  });
});
