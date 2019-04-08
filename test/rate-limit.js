"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("RateLimit", function() {
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
      testItem = mock.rateLimit;
    });
  });
  afterEach(function() {
    connection.close();
  });

  it("is saved", function(done) {
    var item = new models.RateLimit(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(sut.user, testItem.user);
      assert.equal(sut.modified_unix_date, testItem.modified_unix_date);
      assert.equal(sut.count, testItem.count);

      return done();
    });
  });
});
