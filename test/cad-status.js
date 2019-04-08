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
const testItem = mock.cadStatus;

describe("CADStatus", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    const item = new models.CADStatus(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.equal(testItem.uuid, sut.uuid);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.modifiedDate, sut.modifiedDate);
      assert.equal(testItem.code, sut.code);
      assert.equal(testItem.color.background, sut.color.background);
      assert.equal(testItem.color.text, sut.color.text);
      assert.equal(testItem.name, sut.name);
      assert.equal(testItem.normalized, sut.normalized);
      assert.isFalse(sut.roaming);
      assert.isTrue(sut.selfAssignable);
      assert.equal(testItem.status, sut.status);
      assert.equal(testItem.statusId, sut.statusId);

      assert.equal(testItem.options[0].cadKey, sut.options[0].cadKey);
      assert.equal(testItem.options[0].name, sut.options[0].name);
      assert.equal(testItem.options[0].position, sut.options[0].position);
      assert.isTrue(sut.options[0].visible);
      assert.equal(testItem.options[0].cadValues[0].name, sut.options[0].cadValues[0].name);
      assert.equal(testItem.options[0].cadValues[0].type, sut.options[0].cadValues[0].type);
      assert.equal(testItem.options[0].cadValues[0].value, sut.options[0].cadValues[0].value);
      assert.isTrue(sut.options[0].cadValues[0].visible);
      assert.isFalse(sut.options[0].cadValues[0].favorite);

      return done();
    });
  });
});
