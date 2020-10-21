"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("DeviceMapping", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.deviceMapping;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", function(done) {
    var item = new models.DeviceMapping(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.deviceType, sut.deviceType);
      assert.equal(testItem.mapId, sut.mapId);
      assert.equal(testItem.deviceId, sut.deviceId);
      assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
      assert.equal(testItem.remoteAddress, sut.remoteAddress);
      assert.equal(testItem.note, sut.note);
      assert.isFalse(sut.active);
      assert.isFalse(sut.mapHidden);

      return done();
    });
  });
});
