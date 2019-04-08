"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("CADStatusMap", function() {
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
      testItem = mock.cadStatusMap;
    });
  });
  afterEach(function() {
    connection.close();
  });

  it("is saved", function(done) {
    const item = new models.CADStatusMap(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.modifiedDate, sut.modifiedDate);

      assert.equal(testItem.fromStatusId, sut.fromStatusId);
      assert.equal(sut.toStatusIds.length, 1);
      assert.equal(testItem.toStatusIds[0].statusId, sut.toStatusIds[0].statusId);
      assert.isTrue(sut.toStatusIds[0].userEnabled);

      return done();
    });
  });
});
