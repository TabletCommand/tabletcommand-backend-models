"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("CADVehicle", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadVehicle;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.CADVehicle(testItem);
    const sut = await item.save()

    assert.equal(testItem.uuid, sut.uuid);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.modifiedDate, sut.modifiedDate);
    assert.equal(testItem.vehicleId, sut.vehicleId);
    assert.equal(testItem.radioName, sut.radioName);
    assert.equal(testItem.station.code, sut.station.code);
    assert.equal(testItem.station.name, sut.station.name);
    assert.equal(testItem.station.capability, sut.station.capability);
    assert.isFalse(sut.locationToCAD);
  });
});
