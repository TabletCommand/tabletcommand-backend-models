"use strict";

const assert = require("chai").assert;

const m = require("../../definitions");
const config = require("./config");

describe("GSTMapping", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.gstMapping;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.GSTMapping(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.deviceType, sut.deviceType);
    assert.equal(testItem.unitId, sut.unitId);
    assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
    assert.equal(testItem.remoteAddress, sut.remoteAddress);
    assert.equal(testItem.note, sut.note);
    assert.isFalse(sut.active);
    assert.isFalse(sut.mapHidden);
  });
});
