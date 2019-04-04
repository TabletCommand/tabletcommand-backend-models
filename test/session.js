"use strict";

let mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
let models = require("../index")(mongoose);

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
const testData = mock.session;

describe("Session", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    var item = new models.Session(testData);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testData._id);
      assert.equal(sut.user, testData.user);
      assert.equal(sut.email, testData.email);
      assert.equal(sut.nick, testData.nick);
      assert.equal(sut.departmentId, testData.departmentId);
      assert.isFalse(sut.active);
      assert.equal(sut.deviceId, testData.deviceId);
      assert.equal(sut.remoteAddress, testData.remoteAddress);
      assert.equal(sut.userAgent, testData.userAgent);
      assert.equal(sut.source, testData.source);
      assert.equal(sut.token, testData.token);
      assert.equal(sut.ended, testData.ended);
      assert.equal(sut.departmentId, testData.departmentId);
      assert.equal(sut.when, testData.when);

      return done();
    });
  });
});
