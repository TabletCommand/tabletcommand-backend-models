"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("ActionLog", function() {
  let models, connection;
  let testItem;
  beforeEach(function() {
    return m.connect(url, (err, mongoose, conn, mods) => {
      if (err) {
        console.log("Error connecting to mongo", err);
        process.exit();
      }
      models = mods;
      connection = conn;

      const mock = require("./mock")({
        mongoose
      });
      testItem = mock.actionLog;
    });
  });
  afterEach(function() {
    connection.close();
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
      assert.equal(testItem.object, sut.object);
      assert.isTrue(sut.modified_unix_date > 0);
    });
  });
});
