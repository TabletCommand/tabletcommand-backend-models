"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("User", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.user;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.User(testItem);
    assert.isNotNull(item.uuid);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(sut.nick, testItem.nick);
    assert.equal(sut.email, testItem.email);
    assert.equal(sut.mapId, testItem.mapId);
    assert.equal(sut.departmentId, testItem.departmentId);
    assert.isFalse(sut.active);
    assert.isFalse(sut.admin);
    assert.isFalse(sut.superuser);
    assert.isTrue(sut.isPro);
    assert.isTrue(sut.mobileAccess);
    assert.isFalse(sut.webAccess);
    assert.isFalse(sut.shareLocationPhone);
    assert.isTrue(sut.shareLocationTablet);
    assert.equal(item.uuid, sut.uuid);
    assert.equal(item.agencyId, sut.agencyId);
    assert.equal(item.offDutyEnabled, sut.offDutyEnabled);
    assert.equal(item.managedAgencies[0], sut.managedAgencies[0]);
    assert.isTrue(sut.offlineMapsEnabled);
    assert.equal(item.webMapSettings.defaultZoomLevel, 10);
    assert.equal(item.webMapSettings.defaultCenter[0], 1);
    assert.equal(item.webMapSettings.defaultCenter[1], 1);
    assert.equal(item.webMapSettings.defaultMap, "Default");
    assert.equal(item.restrictedCommentsEnabled, true);
  });
});
