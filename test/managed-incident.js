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
const testData = mock.managedIncident;

describe("ManagedIncident", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    var item = new models.ManagedIncident(testData);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testData._id);
      assert.equal(sut.departmentId, testData.departmentId);
      assert.equal(sut.CallerNumber, testData.CallerNumber);
      assert.equal(sut.CommandChannel, testData.CommandChannel);
      assert.equal(sut.TacticalAltChannel, testData.TacticalAltChannel);
      assert.equal(sut.TacticalChannel, testData.TacticalChannel);
      assert.equal(sut.active, testData.active);
      assert.equal(sut.address, testData.address);
      assert.equal(sut.api_incident_number, testData.api_incident_number);
      assert.equal(sut.channel, testData.channel);
      assert.equal(sut.channel_owner, testData.channel_owner);
      assert.equal(sut.end_time, testData.end_time);
      assert.equal(sut.end_unix_time, testData.end_unix_time);
      assert.equal(sut.is_closed, testData.is_closed);
      assert.equal(sut.location, testData.location);
      assert.equal(sut.managed, testData.managed);
      assert.equal(sut.modified_date, testData.modified_date);
      assert.equal(sut.modified_unix_date, testData.modified_unix_date);
      assert.equal(sut.name, testData.name);
      assert.equal(sut.preference_location, testData.preference_location);
      assert.equal(sut.slave_map_changed, testData.slave_map_changed);
      assert.equal(sut.source, testData.source);
      assert.equal(sut.start_time, testData.start_time);
      assert.equal(sut.start_unix_time, testData.start_unix_time);
      assert.equal(sut.userId, testData.userId);
      assert.equal(sut.uuid, testData.uuid);

      assert.isTrue(sut.active);
      assert.isTrue(sut.is_closed);

      return done();
    });
  });
});
