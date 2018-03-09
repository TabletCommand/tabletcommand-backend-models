"use strict";

let mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
let models = require("../index");

let Mockgoose = require("mockgoose").Mockgoose;
let mockgoose = new Mockgoose(mongoose);

const redisClient = require("redis-js");

const mock = require("./mock")({
  mockgoose,
  mongoose,
  models,
  redisClient
});

const assert = require("chai").assert;
const testData = mock.incidentEvent;

describe("IncidentEvent", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    var item = new models.IncidentEvent(testData);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testData._id);
      assert.equal(testData.departmentId, sut.departmentId);
      assert.equal(testData.IncidentNumber, sut.IncidentNumber);
      assert.equal(testData.checksum, sut.checksum);
      assert.equal(testData.modified_unix_date, sut.modified_unix_date);
      assert.equal(testData.events.length, 1);
      assert.equal(sut.events.length, 1);

      let testEvent = testData.events[0];
      let sutEvent = sut.events[0];

      assert.equal(testEvent.message, sutEvent.message);
      assert.equal(testEvent.user_time, sutEvent.user_time);
      assert.equal(testEvent.type, sutEvent.type);
      assert.equal(testEvent.location.latitude, sutEvent.location.latitude);
      assert.equal(testEvent.location.longitude, sutEvent.location.longitude);
      assert.equal(testEvent.user.email, sutEvent.user.email);
      assert.equal(testEvent.user.username, sutEvent.user.username);
      assert.equal(testEvent.user.radioName, sutEvent.user.radioName);
      assert.equal(testEvent.user.userId, sutEvent.user.userId);

      return done();
    });
  });
});
