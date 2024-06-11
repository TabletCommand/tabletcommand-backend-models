"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("RateLimit", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.rateLimit;
  });


  it("is saved", function () {
    var item = new models.RateLimit(testItem);
    item.save().then((ress) => {

      assert.isNotNull(testItem._id);
      assert.equal(ress.user, testItem.user);
      assert.equal(ress.modified_unix_date, testItem.modified_unix_date);
      assert.equal(ress.count, testItem.count);

    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
