"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("IncidentEvent", function() {
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
      testItem = mock.incidentEvent;
    });
  });
  afterEach(function() {
    connection.close();
  });

  it("is saved", function(done) {
    var item = new models.IncidentEvent(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.IncidentNumber, sut.IncidentNumber);
      assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
      assert.equal(testItem.message, sut.message);
      assert.equal(testItem.userTime, sut.userTime);
      assert.equal(testItem.type, sut.type);
      assert.equal(testItem.uuid, sut.uuid);
      assert.equal(testItem.location.latitude, sut.location.latitude);
      assert.equal(testItem.location.longitude, sut.location.longitude);
      assert.equal(testItem.user.email, sut.user.email);
      assert.equal(testItem.user.username, sut.user.username);
      assert.equal(testItem.user.radioName, sut.user.radioName);
      assert.equal(testItem.user.userId, sut.user.userId);

      return done();
    });
  });
});
