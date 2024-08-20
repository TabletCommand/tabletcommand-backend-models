"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("ValidationReport", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.validationReport;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.ValidationReport(testItem);
    const sut = await item.save();

    assert.isNotNull(item._id);
    assert.equal(testItem.departmentId.toString(), sut.departmentId.toString());
    assert.equal(testItem.modified.toString(), sut.modified.toString());
    assert.deepEqual(testItem.location, []);
  });
});
