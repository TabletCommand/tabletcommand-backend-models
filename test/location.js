"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("Location", function() {
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
      testItem = mock.location;
    });
  });
  afterEach(function() {
    connection.close();
  });

  it("is saved", function(done) {
    const item = new models.Location(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.userId, sut.userId);
      assert.equal(testItem.uuid, sut.uuid);
      assert.equal(testItem.username, sut.username);
      assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
      assert.equal(testItem.device_type, sut.device_type);
      assert.equal(testItem.session, sut.session);
      assert.equal(testItem.active, sut.active);
      assert.equal(testItem.location.longitude, sut.location.longitude);
      assert.equal(testItem.location.latitude, sut.location.latitude);
      assert.isTrue(sut.uuid !== "");

      return done();
    });
  });

  it("propagateToObject with object", function(done) {
    let nextUpdate = JSON.parse(JSON.stringify(testItem)); // Clone
    nextUpdate.username = "abc";
    nextUpdate.session = "def";
    nextUpdate.active = false;

    const item1 = new models.Location(testItem);
    item1.save(function(err, sut) {
      assert.isNull(err, "Should not err");
      assert.isNotNull(testItem._id);
      assert.equal(testItem.uuid, sut.uuid);
      assert.equal(testItem.username, sut.username);
      assert.equal(testItem.session, sut.session);
      assert.equal(testItem.active, sut.active);

      const item2 = new models.Location(nextUpdate);
      item2.propagateToObject(sut, function(itemToSave) {
        assert.equal(item1._id, itemToSave._id);
        assert.equal(itemToSave.username, nextUpdate.username);
        assert.equal(itemToSave.session, nextUpdate.session);
        assert.equal(itemToSave.active, nextUpdate.active);
        return done();
      });
    });
  });

  it("propagateToObject with null", function(done) {
    let item = new models.Location(testItem);
    item.propagateToObject(null, function(sut) {
      assert.equal(testItem.uuid, sut.uuid);
      assert.equal(testItem.username, sut.username);
      assert.equal(testItem.session, sut.session);
      assert.equal(testItem.active, sut.active);

      return done();
    });
  });
});
