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
const testData = mock.userRegistration;

describe("UserRegistration", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    const item = new models.UserRegistration(testData);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testData._id);
      assert.equal(testData.email, sut.email);
      assert.equal(testData.name, sut.name);
      assert.equal(testData.firstName, sut.firstName);
      assert.equal(testData.lastName, sut.lastName);
      assert.equal(testData.department, sut.department);
      assert.equal(testData.title, sut.title);
      assert.equal(testData.modifiedDate, sut.modifiedDate);
      assert.equal(testData.stage, sut.stage);
      assert.equal(testData.presentedAt, sut.presentedAt);
      assert.equal(testData.managedIncidentsCount, sut.managedIncidentsCount);
      assert.equal(testData.checklistsCount, sut.checklistsCount);
      assert.equal(testData.firstIncidentUnixTime, sut.firstIncidentUnixTime);
      assert.equal(testData.lastIncidentLocation, sut.lastIncidentLocation);
      assert.equal(testData.lastIncidentUnixTime, sut.lastIncidentUnixTime);

      return done();
    });
  });
});
