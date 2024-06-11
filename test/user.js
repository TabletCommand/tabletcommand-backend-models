"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("User", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.user;
  });


  it("is saved", function () {
    var item = new models.User(testItem);
    assert.isNotNull(item.uuid);
    item.save().then((ress) => {

      assert.isNotNull(testItem._id);
      assert.equal(ress.nick, testItem.nick);
      assert.equal(ress.email, testItem.email);
      assert.equal(ress.mapId, testItem.mapId);
      assert.equal(ress.departmentId, testItem.departmentId);
      assert.isFalse(ress.active);
      assert.isFalse(ress.admin);
      assert.isFalse(ress.superuser);
      assert.isTrue(ress.isPro);
      assert.isTrue(ress.mobileAccess);
      assert.isFalse(ress.webAccess);
      assert.isFalse(ress.shareLocationPhone);
      assert.isTrue(ress.shareLocationTablet);
      assert.equal(item.uuid, ress.uuid);
      assert.equal(item.agencyId, ress.agencyId);
      assert.equal(item.offDutyEnabled, ress.offDutyEnabled);
      assert.equal(item.managedAgencies[0], ress.managedAgencies[0]);
      assert.isTrue(ress.offlineMapsEnabled);
      assert.equal(item.webMapSettings.defaultZoomLevel, 10);
      assert.equal(item.webMapSettings.defaultCenter[0], 1);
      assert.equal(item.webMapSettings.defaultCenter[1], 1);
      assert.equal(item.webMapSettings.defaultMap, "Default");
      assert.equal(item.restrictedCommentsEnabled, true);
    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
