"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("CADVehicleStatus", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadVehicleStatus;
  });
  afterEach(function() {
    mongoose.disconnect();
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
