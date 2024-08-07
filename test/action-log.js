"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("ActionLog", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.actionLog;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.ActionLog(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.action, sut.action);
    assert.equal(testItem.email, sut.email);
    assert.equal(testItem.userId, sut.userId);
    assert.equal(testItem.object, sut.object);
    assert.equal(testItem.before, sut.before);
    assert.equal(testItem.after, sut.after);
    assert.equal(testItem.delta, sut.delta);
    const expectedDate = new Date().valueOf() / 1000.0;
    const timeDelta = expectedDate - sut.modified_unix_date;
    assert.isTrue(timeDelta < 1);
  });
});
