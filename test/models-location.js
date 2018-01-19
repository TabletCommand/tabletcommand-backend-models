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
const testData = mock.location;

describe("Location", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    var item = new models.Location(testData);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testData._id);
      assert.equal(testData.departmentId, sut.departmentId);
      assert.equal(testData.userId, sut.userId);
      assert.equal(testData.uuid, sut.uuid);
      assert.equal(testData.username, sut.username);
      assert.equal(testData.modified_unix_date, sut.modified_unix_date);
      assert.equal(testData.device_type, sut.device_type);
      assert.equal(testData.request_time, sut.request_time);
      assert.equal(testData.active, sut.active);
      assert.equal(testData.location.longitude, sut.location.longitude);
      assert.equal(testData.location.latitude, sut.location.latitude);
      assert.isTrue(sut.uuid !== "");

      return done();
    });
  });
});
