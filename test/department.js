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
const testData = mock.department;

describe("Department", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    var item = new models.Department(testData);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testData._id);
      assert.equal(sut.department, testData.department);
      assert.equal(sut.city, testData.city);
      assert.isTrue(sut.active);
      assert.equal(sut.apikey, testData.apikey);
      assert.isTrue(sut.rtsEnabled);
      assert.equal(sut.rtsChannelPrefix, testData.rtsChannelPrefix);
      assert.equal(sut.rtsAuthKey, testData.rtsAuthKey);
      assert.equal(sut.signupKey, testData.signupKey);
      assert.equal(sut.agencies.length, 3);
      assert.equal(sut.agencies[0].name, testData.agencies[0].name);
      assert.equal(sut.agencies[0].code, testData.agencies[0].code);
      assert.equal(sut.incidentTypes.length, 1);
      assert.equal(sut.incidentTypes[0].name, testData.incidentTypes[0].name);

      return done();
    });
  });
});
