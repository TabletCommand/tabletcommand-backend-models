"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("Mark43IncidentRetry", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.mark43IncidentRetry;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", function(done) {
    var item = new models.Mark43IncidentRetry(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");
      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.active, sut.active);
      assert.equal(testItem.mark43IncidentId, sut.mark43IncidentId);
      assert.equal(JSON.stringify(testItem.retryPayload), JSON.stringify(sut.retryPayload));
      return done();
    });
  });
});
