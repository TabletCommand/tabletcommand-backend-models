"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("CADVehicle", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadVehicle;
  });


  it("is saved", function () {
    const item = new models.CADVehicle(testItem);
    item.save().then((ress) => {

      assert.equal(testItem.uuid, ress.uuid);
      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.modifiedDate, ress.modifiedDate);
      assert.equal(testItem.vehicleId, ress.vehicleId);
      assert.equal(testItem.radioName, ress.radioName);
      assert.equal(testItem.station.code, ress.station.code);
      assert.equal(testItem.station.name, ress.station.name);
      assert.equal(testItem.station.capability, ress.station.capability);
      assert.isFalse(ress.locationToCAD);

    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
