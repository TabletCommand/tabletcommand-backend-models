"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("ValidationReport", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.validationReport;
  });


  it("is saved", async function () {
    const item = new models.ValidationReport(testItem);
    const ress = await item.save();

    assert.isNotNull(item._id);
    assert.equal(testItem.departmentId.toString(), ress.departmentId.toString());
    assert.equal(testItem.modified.toString(), ress.modified.toString());
    assert.deepEqual(testItem.location, []);
  });
});
