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

  it("is saved", function(done) {
    var item = new models.User(testItem);
    assert.isNotNull(item.uuid);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

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
      return done();
    });
  });
});
