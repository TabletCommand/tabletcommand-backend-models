"use strict";

const _ = require("lodash");
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
const testData = mock.location;

describe("Location", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    const item = new models.Location(testData);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testData._id);
      assert.equal(testData.departmentId, sut.departmentId);
      assert.equal(testData.userId, sut.userId);
      assert.equal(testData.uuid, sut.uuid);
      assert.equal(testData.username, sut.username);
      assert.equal(testData.modified_unix_date, sut.modified_unix_date);
      assert.equal(testData.device_type, sut.device_type);
      assert.equal(testData.session, sut.session);
      assert.equal(testData.active, sut.active);
      assert.equal(testData.location.longitude, sut.location.longitude);
      assert.equal(testData.location.latitude, sut.location.latitude);
      assert.isTrue(sut.uuid !== "");

      return done();
    });
  });

  it("propagateToObject with object", function(done) {
    let nextUpdate = _.clone(testData);
    nextUpdate.username = "abc";
    nextUpdate.session = "def";
    nextUpdate.active = false;

    const item1 = new models.Location(testData);
    item1.save(function(err, sut) {
      assert.isNull(err, "Should not err");
      assert.isNotNull(testData._id);
      assert.equal(testData.uuid, sut.uuid);
      assert.equal(testData.username, sut.username);
      assert.equal(testData.session, sut.session);
      assert.equal(testData.active, sut.active);

      const item2 = new models.Location(nextUpdate);
      item2.propagateToObject(sut, function(itemToSave) {
        assert.equal(item1._id, itemToSave._id);
        assert.equal(itemToSave.username, nextUpdate.username);
        assert.equal(itemToSave.session, nextUpdate.session);
        assert.equal(itemToSave.active, nextUpdate.active);
        return done();
      });
    });
  });

  it("propagateToObject with null", function(done) {
    let item = new models.Location(testData);
    item.propagateToObject(null, function(sut) {
      assert.equal(testData.uuid, sut.uuid);
      assert.equal(testData.username, sut.username);
      assert.equal(testData.session, sut.session);
      assert.equal(testData.active, sut.active);

      return done();
    });
  });
});
