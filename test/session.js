"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("Session", function() {
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
      testItem = mock.session;
    });
  });
  afterEach(function() {
    connection.close();
  });

  it("is saved", function(done) {
    var item = new models.Session(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(sut.user, testItem.user);
      assert.equal(sut.email, testItem.email);
      assert.equal(sut.nick, testItem.nick);
      assert.equal(sut.departmentId, testItem.departmentId);
      assert.isFalse(sut.active);
      assert.equal(sut.deviceId, testItem.deviceId);
      assert.equal(sut.remoteAddress, testItem.remoteAddress);
      assert.equal(sut.userAgent, testItem.userAgent);
      assert.equal(sut.source, testItem.source);
      assert.equal(sut.token, testItem.token);
      assert.equal(sut.ended, testItem.ended);
      assert.equal(sut.departmentId, testItem.departmentId);
      assert.equal(sut.when, testItem.when);

      return done();
    });
  });
});
