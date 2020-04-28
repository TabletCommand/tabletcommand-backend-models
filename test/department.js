"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("Department", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.department;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", function(done) {
    var item = new models.Department(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(sut.department, testItem.department);
      assert.equal(sut.city, testItem.city);
      assert.isTrue(sut.active);
      assert.equal(sut.apikey, testItem.apikey);
      assert.isTrue(sut.personnelStaffingEnabled);
      assert.isTrue(sut.rtsEnabled);
      assert.equal(sut.rtsChannelPrefix, testItem.rtsChannelPrefix);
      assert.equal(sut.rtsAuthKey, testItem.rtsAuthKey);
      assert.equal(sut.signupKey, testItem.signupKey);
      assert.equal(sut.agencies.length, 3);
      assert.equal(sut.agencies[0].name, testItem.agencies[0].name);
      assert.equal(sut.agencies[0].code, testItem.agencies[0].code);
      assert.equal(sut.agencies[0].personnelApiKey, testItem.agencies[0].personnelApiKey);
      assert.equal(sut.agencies[0].agencyApiKey, testItem.agencies[0].agencyApiKey);
      assert.equal(sut.incidentTypes.length, 1);
      assert.equal(sut.safetyPriorityKeywords.length, 1);
      assert.equal(sut.incidentTypes[0].name, testItem.incidentTypes[0].name);
      assert.isFalse(sut.shareLocationPhones);
      assert.isTrue(sut.shareLocationTablets);

      return done();
    });
  });
});
