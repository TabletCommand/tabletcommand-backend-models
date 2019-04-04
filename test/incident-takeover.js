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
const testData = mock.incidentTakeover;

describe("IncidentTakeover", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    var item = new models.IncidentTakeover(testData);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testData._id);
      assert.equal(testData.departmentId, sut.departmentId);
      assert.equal(testData.incident_id, sut.incident_id);
      assert.equal(testData.incident_name, sut.incident_name);
      assert.equal(testData.old_owner, sut.old_owner);
      assert.equal(testData.new_owner, sut.new_owner);
      assert.equal(testData.status, sut.status);
      assert.equal(testData.request_time, sut.request_time);
      assert.isTrue(sut.uuid !== "");

      return done();
    });
  });
});
