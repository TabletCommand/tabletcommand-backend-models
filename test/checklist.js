"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("Checklist", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.checklist;
  });


  it("is saved", async function () {
    const item = new models.Checklist(testItem);
    const ress = await item.save();
    assert.isNotNull(item._id);
    assert.equal(item._id, ress.id);
    assert.equal(testItem.position, ress.position);
    assert.equal(testItem.active, ress.active);
    assert.equal(testItem.name, ress.name);
    assert.equal(testItem.userId, ress.userId);
    assert.equal(testItem.departmentId, ress.departmentId);
    assert.equal(testItem.isMandatory, ress.isMandatory);
    assert.equal(testItem.agencyId, ress.agencyId);
    const expectedDate = new Date().valueOf() / 1000.0;
    const timeDelta = expectedDate - ress.modified_unix_date;
    assert.isTrue(timeDelta < 1);

    const items = ress.items;
    assert.isArray(items);
    assert.equal(items.length, 1);
  });
});
