"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("Template", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.template;
  });


  it("is saved", function () {
    var item = new models.Template(testItem);
    item.save().then((ress) => {

      assert.isNotNull(item._id);
      assert.equal(item._id, ress.id);
      assert.equal(ress.id, ress._id);
      assert.equal(testItem.position, ress.position);
      assert.equal(testItem.active, ress.active);
      assert.equal(testItem.name, ress.name);
      assert.equal(testItem.userId, ress.userId);
      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.isMandatory, ress.isMandatory);
      assert.isArray(testItem.group);
      assert.isArray(testItem.checklist);
      assert.equal(testItem.agencyId, ress.agencyId);
      const expectedDate = new Date().valueOf() / 1000.0;
      const timeDelta = expectedDate - ress.modified_unix_date;
      assert.isTrue(timeDelta < 1);
    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
