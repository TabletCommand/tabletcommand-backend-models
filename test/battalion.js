"use strict";

const assert = require("chai").assert;

const mongoose = require('mongoose');

describe("Battalion", function() {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function() {
    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.battalion;
  });

  it("is saved", function() {
    var item = new models.Battalion(testItem);
    item.save().then((ress) => {

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.active, ress.active);
      assert.equal(testItem.isMandatory, ress.isMandatory);
      assert.equal(testItem.name, ress.name);
      assert.equal(testItem.userId, ress.userId);
      assert.equal(testItem.position, ress.position);
      assert.equal(testItem.agencyId, ress.agencyId);
      assert.equal(testItem.local_id, ress.local_id);
      assert.equal(testItem.units.length, 1);
      const expectedDate = new Date().valueOf() / 1000.0;
      const timeDelta = expectedDate - ress.modified_unix_date;
      assert.isTrue(timeDelta < 1);
    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
