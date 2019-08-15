"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("ActionLog", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.actionLog;
  });
  afterEach(function() {
    mongoose.disconnect();
  });
  it("is saved", function() {
    // console.log(models);
    var item = new models.ActionLog(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.action, sut.action);
      assert.equal(testItem.email, sut.email);
      assert.equal(testItem.userId, sut.userId);
      assert.equal(testItem.object, sut.object);
      assert.isTrue(sut.modified_unix_date > 0);
    });
  });
});
