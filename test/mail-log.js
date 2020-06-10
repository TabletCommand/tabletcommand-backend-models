"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("MailLog", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.mailLog;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", function(done) {
    var item = new models.MailLog(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(testItem.mailId, sut.mailId);
      assert.equal(testItem.event, sut.event);
      assert.equal(testItem.timestamp, sut.timestamp);
      assert.equal(testItem.recipient, sut.recipient);
      assert.equal(testItem.recipientDomain, sut.recipientDomain);
      assert.equal(testItem.tags[0], sut.tags[0]);
      assert.equal(testItem.deliveryStatus, sut.deliveryStatus);
      assert.equal(testItem.message, sut.message);
      assert.equal(testItem.deliveryStatus, sut.deliveryStatus);
      assert.equal(testItem.flags, sut.flags);
      assert.equal(testItem.envelope, sut.envelope);
      assert.equal(testItem.logLevel, sut.logLevel);
      assert.equal(testItem.reason, sut.reason);
      assert.equal(testItem.severity, sut.severity);
      const expectedDate = new Date().valueOf() / 1000.0;
      const timeDelta = expectedDate - sut.modified_unix_date;
      assert.isTrue(timeDelta < 1);
      return done();
    });
  });
});
