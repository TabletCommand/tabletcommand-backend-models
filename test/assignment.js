"use strict";

const assert = require("chai").assert;

const mongoose = require('mongoose');

describe("Assignment", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {
    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.assignment;
  });

  it("is saved", async function () {
    const item = new models.Assignment(testItem);
    const ress = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(ress._id.toString(), ress.id.toString());

    assert.equal(testItem.position, ress.position);
    assert.equal(testItem.active, ress.active);
    assert.equal(testItem.name, ress.name);
    assert.equal(testItem.userId, ress.userId);
    assert.equal(testItem.departmentId, ress.departmentId);
    assert.equal(testItem.isMandatory, ress.isMandatory);
    const expectedDate = new Date().valueOf() / 1000.0;
    const timeDelta = expectedDate - ress.modified_unix_date;
    assert.isTrue(timeDelta < 1);
  });
});
