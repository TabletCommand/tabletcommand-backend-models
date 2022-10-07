"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("JobLog", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.jobLog;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", function(done) {
    var item = new models.JobLog(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(testItem.host, sut.host);
      assert.equal(testItem.jobName, sut.jobName);
      assert.equal(testItem.state, sut.state);
      assert.equal(testItem.bidDate, sut.bidDate);
      assert.equal(testItem.startDate, sut.startDate);
      assert.equal(testItem.completedDate, sut.completedDate);
      assert.equal(testItem.forceClosed, sut.forceClosed);
      return done();
    });
  });
});
