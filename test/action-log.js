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
const testItem = mock.actionLog;

describe("ActionLog", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    var item = new models.ActionLog(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.action, sut.action);
      assert.equal(testItem.email, sut.email);
      assert.equal(testItem.object, sut.object);
      assert.isTrue(sut.modified_unix_date > 0);

      return done();
    });
  });
});
