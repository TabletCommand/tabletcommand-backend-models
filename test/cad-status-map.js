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
const testItem = mock.cadStatusMap;

describe("CADStatusMap", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    const item = new models.CADStatusMap(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.modifiedDate, sut.modifiedDate);

      assert.equal(testItem.fromStatusId, sut.fromStatusId);
      assert.equal(sut.toStatusIds.length, 1);
      assert.equal(testItem.toStatusIds[0].statusId, sut.toStatusIds[0].statusId);
      assert.isTrue(sut.toStatusIds[0].userEnabled);

      return done();
    });
  });
});
