"use strict";

const assert = require("chai").assert;

const mongoose = require('mongoose');

describe("CADStatusMap", function() {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function() {

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadStatusMap;
  });


  it("is saved", function() {
    const item = new models.CADStatusMap(testItem);
    item.save().then((ress) => {

      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.modifiedDate, ress.modifiedDate);

      assert.equal(testItem.fromStatusId, ress.fromStatusId);
      assert.equal(ress.toStatusIds.length, 1);
      assert.equal(testItem.toStatusIds[0].statusId, ress.toStatusIds[0].statusId);
      assert.isTrue(ress.toStatusIds[0].userEnabled);
      assert.equal(ress.toStatusIds[0].position, 0);

    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
