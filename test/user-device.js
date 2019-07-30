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
const testItem = mock.userDevice;

describe("UserDevice", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    const item = new models.UserDevice(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(testItem.userId, sut.userId);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(sut.devices.length, 1);
      assert.equal(testItem.devices[0].token, sut.devices[0].token);
      assert.equal(testItem.devices[0].env, sut.devices[0].env);
      assert.equal(testItem.devices[0].ua, sut.devices[0].ua);
      assert.equal(testItem.devices[0].time, sut.devices[0].time);
      assert.equal(testItem.devices[0].bundleIdentifier, sut.devices[0].bundleIdentifier);
      assert.equal(testItem.devices[0].silentEnabled, sut.devices[0].silentEnabled);
      assert.equal(testItem.devices[0].richEnabled, sut.devices[0].richEnabled);
      assert.equal(testItem.devices[0].session, sut.devices[0].session);
      assert.equal(testItem.notificationCount, sut.notificationCount);
      assert.equal(sut.notificationUnits.length, 2);
      assert.equal(testItem.notificationUnits[0], sut.notificationUnits[0]);
      assert.equal(testItem.notificationUnits[1], sut.notificationUnits[1]);
      assert.equal(sut.notificationIncidentTypes.length, 2);
      assert.equal(testItem.notificationIncidentTypes[0], sut.notificationIncidentTypes[0]);
      assert.equal(testItem.notificationIncidentTypes[1], sut.notificationIncidentTypes[1]);

      return done();
    });
  });
});
