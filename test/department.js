"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("Department", function() {
  let models, mongoose, mock;

  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;
    mock = require("./mock")({
      mongoose
    });
  });

  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const testItem = mock.department;
    assert.isObject(testItem);
    const item = new models.Department(testItem);
    const sut = await item.save();
    assert.isNotNull(sut._id);
    assert.isNotNull(sut.id);
    assert.equal(sut.department, testItem.department);
    assert.equal(sut.city, testItem.city);
    assert.isTrue(sut.active);
    assert.equal(sut.apikey, testItem.apikey);
    assert.isTrue(sut.personnelStaffingEnabled);
    assert.isTrue(sut.rtsEnabled);
    assert.equal(sut.rtsChannelPrefix, testItem.rtsChannelPrefix);
    assert.equal(sut.rtsAuthKey, testItem.rtsAuthKey);
    assert.equal(sut.signupKey, testItem.signupKey);
    assert.equal(sut.incidentTypes.length, 1);
    assert.equal(sut.agencyIds.length, 1);
    assert.equal(sut.agencyIds[0], testItem.agencyIds[0]);
    assert.equal(sut.safetyPriorityKeywords.length, 3);
    assert.equal(sut.incidentTypes[0].name, testItem.incidentTypes[0].name);
    assert.isFalse(sut.shareLocationPhones);
    assert.isTrue(sut.shareLocationTablets);
    assert.isFalse(sut.cadOneWayVehiclesEnabled);
    assert.isTrue(sut.mowsEnabled);
    assert.isTrue(sut.shareAVL.enabled);
    assert.equal(sut.shareAVL.opAreaCode, testItem.shareAVL.opAreaCode);
    assert.equal(sut.shareAVL.opAreaName, testItem.shareAVL.opAreaName);
    assert.equal(sut.accountType, testItem.accountType);
    assert.equal(sut.timeZone, testItem.timeZone);
    assert.equal(sut.firstArrivingEnabled, testItem.firstArrivingEnabled);
    assert.equal(sut.simpleSenseEnabled, testItem.simpleSenseEnabled);
  });
});
