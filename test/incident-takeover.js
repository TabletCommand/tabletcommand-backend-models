"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("IncidentTakeover", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.incidentTakeover;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", function(done) {
    var item = new models.IncidentTakeover(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.incident_id, sut.incident_id);
      assert.equal(testItem.incident_name, sut.incident_name);
      assert.equal(testItem.old_owner, sut.old_owner);
      assert.equal(testItem.new_owner, sut.new_owner);
      assert.equal(testItem.status, sut.status);
      assert.equal(testItem.request_time, sut.request_time);
      assert.isTrue(sut.uuid !== "");

      return done();
    });
  });
});
