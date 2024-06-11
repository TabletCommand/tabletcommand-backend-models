"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("Message", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.message;
  });


  it("is saved", function () {
    var item = new models.Message(testItem);
    item.save().then((ress) => {

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.title, ress.title);
      assert.equal(testItem.uuid, ress.uuid);
      assert.equal(testItem.requestId, ress.requestId);
      assert.equal(testItem.body, ress.body);
      assert.equal(testItem.actionTitle, ress.actionTitle);
      assert.equal(testItem.url, ress.url);
      assert.equal(testItem.priority, ress.priority);
      assert.equal(JSON.stringify(testItem.type), JSON.stringify(ress.type));
    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
