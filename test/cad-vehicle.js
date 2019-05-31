"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("CADVehicle", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(url);
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

  it("is saved", function(done) {
    const item = new models.CADVehicle(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.equal(testItem.uuid, sut.uuid);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.modifiedDate, sut.modifiedDate);
      assert.equal(testItem.vehicleId, sut.vehicleId);
      assert.equal(testItem.radioName, sut.radioName);
      assert.equal(testItem.station.code, sut.station.code);
      assert.equal(testItem.station.name, sut.station.name);

      return done();
    });
  });
});
