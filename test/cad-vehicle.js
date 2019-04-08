"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("CADVehicle", function() {
  let models, connection;
  let testItem;
  beforeEach(function() {
    return m.connect(url, (err, mongoose, conn, mods) => {
      if (err) {
        console.log("Error connecting to mongo", err);
        process.exit();
      }
      models = mods;
      connection = conn;

      const mock = require("./mock")({
        mongoose
      });
      testItem = mock.cadVehicle;
    });
  });
  afterEach(function() {
    connection.close();
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
