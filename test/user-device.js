"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("UserDevice", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.userDevice;
  });


  it("is saved", async function () {
    const item = new models.UserDevice(testItem);
    const ress = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(ress.id, ress._id);
    assert.equal(testItem.userId, ress.userId);
    assert.equal(testItem.departmentId, ress.departmentId);
    assert.equal(ress.devices.length, 1);
    assert.equal(testItem.devices[0].token, ress.devices[0].token);
    assert.equal(testItem.devices[0].env, ress.devices[0].env);
    assert.equal(testItem.devices[0].ua, ress.devices[0].ua);
    assert.equal(testItem.devices[0].time, ress.devices[0].time);
    assert.equal(testItem.devices[0].drift, ress.devices[0].drift);
    assert.equal(testItem.devices[0].bundleIdentifier, ress.devices[0].bundleIdentifier);
    assert.equal(testItem.devices[0].silentEnabled, ress.devices[0].silentEnabled);
    assert.equal(testItem.devices[0].criticalAlertsEnabled, ress.devices[0].criticalAlertsEnabled);
    assert.equal(testItem.devices[0].session, ress.devices[0].session);
    assert.equal(testItem.devices[0].active, ress.devices[0].active);
    assert.equal(testItem.devices[0].offDuty, ress.devices[0].offDuty);
    assert.equal(testItem.notificationCount, ress.notificationCount);
    assert.equal(JSON.stringify(testItem.notificationIncidentSettings[0]), JSON.stringify(ress.notificationIncidentSettings[0]));
    assert.equal(JSON.stringify(testItem.notificationUnitSettings[0]), JSON.stringify(ress.notificationUnitSettings[0]));
    assert.equal(testItem.offDuty, true);
    assert.equal(testItem.criticalAlertsVolume, "MED");

    assert.isObject(ress.notificationSounds);
    assert.deepEqual(ress.notificationSounds, item.notificationSounds);
    assert.isObject(ress.notificationSounds.ios);
    assert.isObject(ress.notificationSounds.android);
  });
});
