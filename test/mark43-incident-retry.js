"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("Mark43IncidentRetry", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.mark43IncidentRetry;
  });


  it("is saved", function () {
    var item = new models.Mark43IncidentRetry(testItem);
    item.save().then((ress) => {
      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.active, ress.active);
      assert.equal(testItem.mark43IncidentId, ress.mark43IncidentId);
      assert.equal(JSON.stringify(testItem.retryPayload), JSON.stringify(ress.retryPayload));
    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
