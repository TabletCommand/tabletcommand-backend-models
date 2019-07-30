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
const testUser = mock.user;

describe("User", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    var item = new models.User(testUser);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testUser._id);
      assert.equal(sut.nick, testUser.nick);
      assert.equal(sut.email, testUser.email);
      assert.equal(sut.mapId, testUser.mapId);
      assert.equal(sut.departmentId, testUser.departmentId);
      assert.isFalse(sut.active);
      assert.isFalse(sut.admin);
      assert.isFalse(sut.superuser);
      assert.isTrue(sut.isPro);
      assert.equal(sut.agency.name, testUser.agency.name);

      return done();
    });
  });
});
