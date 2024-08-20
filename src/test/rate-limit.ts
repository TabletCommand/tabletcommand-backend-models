"use strict";

const assert = require("chai").assert;

const m = require("../../definitions");
const config = require("./config");

describe("RateLimit", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.rateLimit;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.RateLimit(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(sut.user, testItem.user);
    assert.equal(sut.modified_unix_date, testItem.modified_unix_date);
    assert.equal(sut.count, testItem.count);
  });
});
