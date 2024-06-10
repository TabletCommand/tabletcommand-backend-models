"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');

describe("Agency", function () {
  let models = mongoose.models;;
  let testItem;
  beforeEach(async function () {
    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.agency;
  });

  it("is saved", async function () {
    const item = new models.Agency(testItem);
    item.save().then((ress) => {
      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.active, ress.active);
      assert.equal(testItem.code, ress.code);
      assert.equal(testItem.name, ress.name);
      assert.equal(testItem.administrators.length, 1);
      assert.equal(testItem.personnelIntegration, ress.personnelIntegration);
      assert.equal(testItem.personnelMonitorHours, ress.personnelMonitorHours);
      assert.equal(testItem.crossStaffing.length, 1);
      const expectedDate = new Date().valueOf() / 1000.0;
      const timeDelta = expectedDate - ress.modified_unix_date;
      assert.isTrue(timeDelta < 1);
    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
