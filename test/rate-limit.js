"use strict";

const assert = require("chai").assert;

const m = require("..");
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

  it("is saved", function(done) {
    var item = new models.RateLimit(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(sut.user, testItem.user);
      assert.equal(sut.modified_unix_date, testItem.modified_unix_date);
      assert.equal(sut.count, testItem.count);

      return done();
    });
  });
});
