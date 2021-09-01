"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("UserDevice", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
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

  it("is saved", async function() {
    const item = new models.UserDevice(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(sut.id, sut._id);
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
    assert.equal(testItem.devices[0].criticalAlertsEnabled, sut.devices[0].criticalAlertsEnabled);
    assert.equal(testItem.devices[0].session, sut.devices[0].session);
    assert.equal(testItem.devices[0].active, sut.devices[0].active);
    assert.equal(testItem.notificationCount, sut.notificationCount);
    assert.equal(sut.notificationUnits.length, 2);
    assert.equal(testItem.notificationUnits[0], sut.notificationUnits[0]);
    assert.equal(testItem.notificationUnits[1], sut.notificationUnits[1]);
    assert.equal(sut.notificationIncidentTypes.length, 2);
    assert.equal(testItem.notificationIncidentTypes[0], sut.notificationIncidentTypes[0]);
    assert.equal(testItem.notificationIncidentTypes[1], sut.notificationIncidentTypes[1]);
    assert.equal(JSON.stringify(testItem.notificationIncidentSettings[0]), JSON.stringify(sut.notificationIncidentSettings[0]));
    assert.equal(JSON.stringify(testItem.notificationUnitSettings[0]), JSON.stringify(sut.notificationUnitSettings[0]));
    assert.equal(testItem.offDuty, true);
    assert.equal(testItem.criticalAlerts, true);
    assert.equal(testItem.criticalAlertsVolume, "MED");

    assert.isObject(sut.notificationSounds);
    assert.deepEqual(sut.notificationSounds, item.notificationSounds);
    assert.isObject(sut.notificationSounds.ios);
    assert.isObject(sut.notificationSounds.android);
  });
});
