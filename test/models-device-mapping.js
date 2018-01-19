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
const testItem = mock.deviceMapping;

describe("DeviceMapping", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    var item = new models.DeviceMapping(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.deviceType, sut.deviceType);
      assert.equal(testItem.mapId, sut.mapId);
      assert.equal(testItem.deviceId, sut.deviceId);
      assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
      assert.equal(testItem.remoteAddress, sut.remoteAddress);
      assert.isFalse(sut.active);

      return done();
    });
  });
});
