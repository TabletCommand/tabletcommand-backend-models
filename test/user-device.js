"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("UserDevice", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.userDevice;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", function(done) {
    const item = new models.UserDevice(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(testItem.userId, sut.userId);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(sut.devices.length, 1);
      assert.equal(testItem.devices[0].token, sut.devices[0].token);
      assert.equal(testItem.devices[0].env, sut.devices[0].env);
      assert.equal(testItem.devices[0].ua, sut.devices[0].ua);
      assert.equal(testItem.devices[0].time, sut.devices[0].time);
      assert.equal(testItem.devices[0].drift, sut.devices[0].drift);
      assert.equal(testItem.devices[0].bundleIdentifier, sut.devices[0].bundleIdentifier);
      assert.equal(testItem.devices[0].silentEnabled, sut.devices[0].silentEnabled);
      assert.equal(testItem.devices[0].richEnabled, sut.devices[0].richEnabled);
      assert.equal(testItem.devices[0].session, sut.devices[0].session);
      assert.equal(testItem.notificationCount, sut.notificationCount);
      assert.equal(sut.notificationUnits.length, 2);
      assert.equal(testItem.notificationUnits[0], sut.notificationUnits[0]);
      assert.equal(testItem.notificationUnits[1], sut.notificationUnits[1]);
      assert.equal(sut.notificationIncidentTypes.length, 2);
      assert.equal(testItem.notificationIncidentTypes[0], sut.notificationIncidentTypes[0]);
      assert.equal(testItem.notificationIncidentTypes[1], sut.notificationIncidentTypes[1]);

      return done();
    });
  });
});
