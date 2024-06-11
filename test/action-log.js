"use strict";

const assert = require("chai").assert;


const mongoose = require('mongoose');

describe("ActionLog", function () {
  let models = mongoose.models;
  let testItem;
  before(async function () {
    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.actionLog;
  });

  it("is saved", async function () {
    const item = new models.ActionLog(testItem);
    await item.save().then((ress) => {
      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.action, ress.action);
      assert.equal(testItem.email, ress.email);
      assert.equal(testItem.userId, ress.userId);
      assert.equal(testItem.object, ress.object);
      assert.equal(testItem.before, ress.before);
      assert.equal(testItem.after, ress.after);
      assert.equal(testItem.delta, ress.delta);
      const expectedDate = new Date().valueOf() / 1000.0;
      const timeDelta = expectedDate - ress.modified_unix_date;
      assert.isTrue(timeDelta < 1);
    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
