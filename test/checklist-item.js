"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("ChecklistItem", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.checklistItem;
  });


  it("is saved", function () {
    var item = new models.ChecklistItem(testItem);
    item.save().then((ress) => {

      assert.isNotNull(item._id);
      assert.equal(item._id, ress.id);
      assert.equal(testItem.position, ress.position);
      assert.equal(testItem.active, ress.active);
      assert.equal(testItem.name, ress.name);
      assert.equal(testItem.userId, ress.userId);
      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.isMandatory, ress.isMandatory);
      assert.equal(testItem.api_checklist_id, ress.api_checklist_id);
      assert.equal(testItem.checklist_uuid, ress.checklist_uuid);
      assert.equal(testItem.description, ress.description);
      const expectedDate = new Date().valueOf() / 1000.0;
      const timeDelta = expectedDate - ress.modified_unix_date;
      assert.isTrue(timeDelta < 1);
    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
