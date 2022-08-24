"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("IncidentNotified", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.incidentNotified;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", function(done) {
    const item = new models.IncidentNotified(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.IncidentNumber, sut.IncidentNumber);
      assert.deepEqual(testItem.incidentTypes, sut.incidentTypes);
      assert.deepEqual(testItem.units, sut.units);
      assert.equal(testItem.unitsByDispatch[0].UnitID, sut.unitsByDispatch[0].UnitID);
      assert.equal(testItem.unitsByDispatch[0].UnitDispatchNumber, sut.unitsByDispatch[0].UnitDispatchNumber);
      assert.equal(testItem.updated, sut.updated.toISOString());

      return done();
    });
  });
});
