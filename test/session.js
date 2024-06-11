"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("Session", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.session;
  });


  it("is saved", function () {
    var item = new models.Session(testItem);
    item.save().then((ress) => {

      assert.isNotNull(testItem._id);
      assert.equal(ress.user, testItem.user);
      assert.equal(ress.email, testItem.email);
      assert.equal(ress.nick, testItem.nick);
      assert.equal(ress.departmentId, testItem.departmentId);
      assert.isFalse(ress.active);
      assert.equal(ress.deviceId, testItem.deviceId);
      assert.equal(ress.remoteAddress, testItem.remoteAddress);
      assert.equal(ress.userAgent, testItem.userAgent);
      assert.equal(ress.source, testItem.source);
      assert.equal(ress.token, testItem.token);
      assert.equal(ress.ended, testItem.ended);
      assert.equal(ress.departmentId, testItem.departmentId);
      assert.equal(ress.when, testItem.when);
      assert.equal(ress.id, ress._id);

    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
