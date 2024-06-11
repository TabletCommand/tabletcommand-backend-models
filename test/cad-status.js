"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');

describe("CADStatus", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadStatus;
  });


  it("is saved", function () {
    const item = new models.CADStatus(testItem);
    item.save().then((ress) => {

      assert.equal(testItem.uuid, ress.uuid);
      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.modifiedDate, ress.modifiedDate);
      assert.equal(testItem.code, ress.code);
      assert.equal(testItem.codeDisplay, ress.codeDisplay);
      assert.equal(testItem.color.background, ress.color.background);
      assert.equal(testItem.color.text, ress.color.text);
      assert.equal(testItem.name, ress.name);
      assert.equal(testItem.normalized, ress.normalized);
      assert.isFalse(ress.roaming);
      assert.isTrue(ress.selfAssignable);
      assert.equal(testItem.status, ress.status);
      assert.equal(testItem.statusId, ress.statusId);

      assert.equal(testItem.options[0].cadKey, ress.options[0].cadKey);
      assert.equal(testItem.options[0].name, ress.options[0].name);
      assert.equal(testItem.options[0].position, ress.options[0].position);
      assert.isTrue(ress.options[0].visible);
      assert.equal(testItem.options[0].cadValues[0].name, ress.options[0].cadValues[0].name);
      assert.equal(testItem.options[0].cadValues[0].type, ress.options[0].cadValues[0].type);
      assert.equal(testItem.options[0].cadValues[0].value, ress.options[0].cadValues[0].value);
      assert.isTrue(ress.options[0].cadValues[0].visible);
      assert.isFalse(ress.options[0].cadValues[0].favorite);

    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
