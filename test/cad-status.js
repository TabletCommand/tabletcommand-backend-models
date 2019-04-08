"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("CADStatus", function() {
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
      testItem = mock.cadStatus;
    });
  });
  afterEach(function() {
    connection.close();
  });

  it("is saved", function(done) {
    const item = new models.CADStatus(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.equal(testItem.uuid, sut.uuid);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.modifiedDate, sut.modifiedDate);
      assert.equal(testItem.code, sut.code);
      assert.equal(testItem.color.background, sut.color.background);
      assert.equal(testItem.color.text, sut.color.text);
      assert.equal(testItem.name, sut.name);
      assert.equal(testItem.normalized, sut.normalized);
      assert.isFalse(sut.roaming);
      assert.isTrue(sut.selfAssignable);
      assert.equal(testItem.status, sut.status);
      assert.equal(testItem.statusId, sut.statusId);

      assert.equal(testItem.options[0].cadKey, sut.options[0].cadKey);
      assert.equal(testItem.options[0].name, sut.options[0].name);
      assert.equal(testItem.options[0].position, sut.options[0].position);
      assert.isTrue(sut.options[0].visible);
      assert.equal(testItem.options[0].cadValues[0].name, sut.options[0].cadValues[0].name);
      assert.equal(testItem.options[0].cadValues[0].type, sut.options[0].cadValues[0].type);
      assert.equal(testItem.options[0].cadValues[0].value, sut.options[0].cadValues[0].value);
      assert.isTrue(sut.options[0].cadValues[0].visible);
      assert.isFalse(sut.options[0].cadValues[0].favorite);

      return done();
    });
  });
});
