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
const testItem = mock.rateLimit;

describe("RateLimit", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    var item = new models.RateLimit(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(sut.user, testItem.user);
      assert.equal(sut.modified_unix_date, testItem.modified_unix_date);
      assert.equal(sut.count, testItem.count);

      return done();
    });
  });
});
