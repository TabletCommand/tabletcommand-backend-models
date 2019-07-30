"use strict";

const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const models = require("../index");

const Mockgoose = require("mockgoose").Mockgoose;
const mockgoose = new Mockgoose(mongoose);

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
      assert.equal(testData.modified_unix_date, sut.modified_unix_date);
      assert.equal(testData.message, sut.message);
      assert.equal(testData.userTime, sut.userTime);
      assert.equal(testData.type, sut.type);
      assert.equal(testData.uuid, sut.uuid);
      assert.equal(testData.location.latitude, sut.location.latitude);
      assert.equal(testData.location.longitude, sut.location.longitude);
      assert.equal(testData.user.email, sut.user.email);
      assert.equal(testData.user.username, sut.user.username);
      assert.equal(testData.user.radioName, sut.user.radioName);
      assert.equal(testData.user.userId, sut.user.userId);

      return done();
    });
  });
});
