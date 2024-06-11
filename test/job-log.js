"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("JobLog", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.jobLog;
  });


  it("is saved", function () {
    var item = new models.JobLog(testItem);
    item.save().then((ress) => {

      assert.isNotNull(testItem._id);
      assert.equal(testItem.host, ress.host);
      assert.equal(testItem.jobName, ress.jobName);
      assert.equal(testItem.state, ress.state);
      assert.equal(testItem.bidDate, ress.bidDate);
      assert.equal(testItem.startDate, ress.startDate);
      assert.equal(testItem.completedDate, ress.completedDate);
      assert.equal(testItem.forceClosed, ress.forceClosed);
    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
