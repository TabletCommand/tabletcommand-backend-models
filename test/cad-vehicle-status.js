"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("CADVehicleStatus", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadVehicleStatus;
  });


  it("is saved", function () {
    const item = new models.CADVehicleStatus(testItem);
    item.save().then((ress) => {
      assert.equal(testItem.uuid, ress.uuid);
      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.vehicleId, ress.vehicleId);
      assert.equal(testItem.radioName, ress.radioName);
      assert.equal(testItem.requestTime, ress.requestTime);
      assert.equal(testItem.responseTime, ress.responseTime);
      assert.equal(testItem.status, ress.status);
      assert.equal(testItem.statusCode, ress.statusCode);
      assert.equal(testItem.modifiedDate, ress.modifiedDate);
      assert.equal(testItem.requestStatus, ress.requestStatus);
      assert.equal(testItem.incidentNumber, ress.incidentNumber);
      assert.equal(testItem.capability, resFs.capability)
      assert.equal(testItem.owner, ress.owner)
      assert.equal(testItem.ownerId, ress.ownerId)

    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
