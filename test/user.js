"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("User", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(url);
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
      assert.equal(sut.agency.name, testItem.agency.name);
      assert.isFalse(sut.shareLocationPhone);
      assert.isTrue(sut.shareLocationTablet);
      assert.equal(item.uuid, sut.uuid);
      assert.isArray(sut.notificationSounds, true);
      assert.equal(sut.notificationSounds[0].sound, testItem.notificationSounds[0].sound);
      assert.equal(sut.notificationSounds[0].soundType, testItem.notificationSounds[0].soundType);
      return done();
    });
  });
});
