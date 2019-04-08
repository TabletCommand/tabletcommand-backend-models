"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("DeviceMapping", function() {
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
      testItem = mock.deviceMapping;
    });
  });
  afterEach(function() {
    connection.close();
  });

  it("is saved", function(done) {
    var item = new models.DeviceMapping(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.deviceType, sut.deviceType);
      assert.equal(testItem.mapId, sut.mapId);
      assert.equal(testItem.deviceId, sut.deviceId);
      assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
      assert.equal(testItem.remoteAddress, sut.remoteAddress);
      assert.equal(testItem.note, sut.note);
      assert.isFalse(sut.active);

      return done();
    });
  });
});
