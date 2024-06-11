"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("MailLog", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.mailLog;
  });


  it("is saved", function () {
    var item = new models.MailLog(testItem);
    item.save().then((ress) => {

      assert.isNotNull(testItem._id);
      assert.equal(testItem.mailId, ress.mailId);
      assert.equal(testItem.event, ress.event);
      assert.equal(testItem.timestamp, ress.timestamp);
      assert.equal(testItem.recipient, ress.recipient);
      assert.equal(testItem.recipientDomain, ress.recipientDomain);
      assert.equal(testItem.tags[0], ress.tags[0]);
      assert.equal(testItem.deliveryStatus, ress.deliveryStatus);
      assert.equal(testItem.message, ress.message);
      assert.equal(testItem.deliveryStatus, ress.deliveryStatus);
      assert.equal(testItem.flags, ress.flags);
      assert.equal(testItem.envelope, ress.envelope);
      assert.equal(testItem.logLevel, ress.logLevel);
      assert.equal(testItem.reason, ress.reason);
      assert.equal(testItem.severity, ress.severity);
      const expectedDate = new Date().valueOf() / 1000.0;
      const timeDelta = expectedDate - ress.modified_unix_date;
      assert.isTrue(timeDelta < 1);
    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
