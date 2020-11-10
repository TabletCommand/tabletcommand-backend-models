"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("Monitor", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.monitor;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.Monitor(testItem);
    const sut = await item.save();
    assert.isNotNull(sut._id);

    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.notificationType, sut.notificationType);
    assert.equal(testItem.status, sut.status);
    assert.equal(testItem.sentUnixDate, sut.sentUnixDate);
  });
});
